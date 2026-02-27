export const onRequestPost: PagesFunction<{
  OPENAI_API_KEY: string;
  OPENAI_CHATKIT_WORKFLOW_ID: string;
  OPENAI_WORKFLOW_ID: string;
  OPENAI_PROJECT_ID: string;
  OPENAI_ORG_ID: string;
}> = async ({ env, request }) => {
  const workflowId = env.OPENAI_CHATKIT_WORKFLOW_ID || env.OPENAI_WORKFLOW_ID;

  if (!env.OPENAI_API_KEY || !workflowId) {
    return new Response(
      JSON.stringify({
        error: 'Server is missing OPENAI_API_KEY or OPENAI_CHATKIT_WORKFLOW_ID (or OPENAI_WORKFLOW_ID).',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
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

  const res = await fetch('https://api.openai.com/v1/chatkit/sessions', {
    method: 'POST',
    headers: upstreamHeaders,
    body: JSON.stringify({
      workflow: { id: workflowId },
      user: deviceId,
    }),
  });

  const json = await res.json();

  if (!res.ok) {
    const base = {
      error: json,
      openai_request_id: res.headers.get('x-request-id') || null,
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
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(JSON.stringify(base), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    'X-ChatKit-Trace-Id': traceId,
    'X-OpenAI-Request-Id': res.headers.get('x-request-id') || '',
  });
  headers.append('Set-Cookie', `ck_device=${deviceId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=31536000`);

  return new Response(JSON.stringify({ client_secret: json.client_secret, trace_id: traceId }), {
    status: 200,
    headers,
  });
};
