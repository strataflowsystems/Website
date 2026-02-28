export const onRequestPost: PagesFunction<{
  OPENAI_API_KEY: string;
  OPENAI_CHATKIT_WORKFLOW_ID: string;
  OPENAI_WORKFLOW_ID: string;
  OPENAI_PROJECT_ID: string;
  OPENAI_ORG_ID: string;
}> = async ({ env, request }) => {
  const traceId = crypto.randomUUID();
  const incomingCfRay = request.headers.get('cf-ray');
  const workflowId = env.OPENAI_CHATKIT_WORKFLOW_ID || env.OPENAI_WORKFLOW_ID;

  const createHeaders = (openaiRequestId?: string | null): Headers => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-ChatKit-Trace-Id': traceId,
    });

    if (openaiRequestId) {
      headers.set('X-OpenAI-Request-Id', openaiRequestId);
    }

    return headers;
  };

  if (!env.OPENAI_API_KEY || !workflowId) {
    return new Response(
      JSON.stringify({
        error: 'Server is missing OPENAI_API_KEY or OPENAI_CHATKIT_WORKFLOW_ID (or OPENAI_WORKFLOW_ID).',
        trace_id: traceId,
        incoming_cf_ray: incomingCfRay,
      }),
      {
        status: 500,
        headers: createHeaders(),
      },
    );
  }

  const cookie = request.headers.get('Cookie') || '';
  let deviceId = cookie.match(/ck_device=([^;]+)/)?.[1];

  if (!deviceId) {
    deviceId = crypto.randomUUID();
  }

  const upstreamHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    'OpenAI-Beta': 'chatkit_beta=v1',
  };

  if (env.OPENAI_PROJECT_ID) {
    upstreamHeaders['OpenAI-Project'] = env.OPENAI_PROJECT_ID;
  }

  if (env.OPENAI_ORG_ID) {
    upstreamHeaders['OpenAI-Organization'] = env.OPENAI_ORG_ID;
  }

  let res: Response;
  try {
    res = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: upstreamHeaders,
      body: JSON.stringify({
        workflow: { id: workflowId },
        user: deviceId,
      }),
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Upstream network failure while creating ChatKit session.',
        details: {
          trace_id: traceId,
          incoming_cf_ray: incomingCfRay,
          openai_status: null,
          openai_request_id: null,
          upstream_error:
            error instanceof Error
              ? { name: error.name, message: error.message }
              : { message: String(error) },
        },
      }),
      {
        status: 502,
        headers: createHeaders(),
      },
    );
  }

  const openaiRequestId = res.headers.get('x-request-id');
  const upstreamBodyText = await res.text();
  let upstreamJson: Record<string, unknown> | null = null;

  if (upstreamBodyText) {
    try {
      upstreamJson = JSON.parse(upstreamBodyText) as Record<string, unknown>;
    } catch {
      upstreamJson = null;
    }
  }

  if (!res.ok) {
    const base = {
      error: upstreamJson ?? { raw: upstreamBodyText || null },
      trace_id: traceId,
      incoming_cf_ray: incomingCfRay,
      openai_status: res.status,
      openai_request_id: openaiRequestId,
    };

    if (res.status === 401 || res.status === 403) {
      return new Response(
        JSON.stringify({
          ...base,
          hint:
            'Verify OPENAI_API_KEY can access the ChatKit workflow project. If your key is scoped to a specific project, set OPENAI_PROJECT_ID. Ensure OPENAI_CHATKIT_WORKFLOW_ID points to an existing workflow in that same project.',
        }),
        {
          status: res.status,
          headers: createHeaders(openaiRequestId),
        },
      );
    }

    return new Response(JSON.stringify(base), {
      status: res.status,
      headers: createHeaders(openaiRequestId),
    });
  }

  const headers = createHeaders(openaiRequestId);
  headers.append('Set-Cookie', `ck_device=${deviceId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=31536000`);

  return new Response(
    JSON.stringify({
      client_secret: upstreamJson?.client_secret ?? null,
      trace_id: traceId,
    }),
    {
      status: 200,
      headers,
    },
  );
};
