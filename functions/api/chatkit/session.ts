export const onRequestPost: PagesFunction<{
  OPENAI_API_KEY: string;
  OPENAI_CHATKIT_WORKFLOW_ID: string;
}> = async ({ env, request }) => {
  const traceId = crypto.randomUUID();
  const incomingCfRay = request.headers.get('cf-ray');

  if (!env.OPENAI_API_KEY || !env.OPENAI_CHATKIT_WORKFLOW_ID) {
    return new Response(
      JSON.stringify({
        error: 'Server is missing OPENAI_API_KEY or OPENAI_CHATKIT_WORKFLOW_ID.',
        trace_id: traceId,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'X-ChatKit-Trace-Id': traceId,
        },
      },
    );
  }

  // Simple per-visitor ID (cookie) so ChatKit can associate sessions to a "user"
  const cookie = request.headers.get('Cookie') || '';
  let deviceId = cookie.match(/ck_device=([^;]+)/)?.[1];

  if (!deviceId) deviceId = crypto.randomUUID();

  let res: Response;
  try {
    res = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        'OpenAI-Beta': 'chatkit_beta=v1',
      },
      body: JSON.stringify({
        workflow: { id: env.OPENAI_CHATKIT_WORKFLOW_ID },
        user: deviceId,
      }),
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to reach OpenAI ChatKit sessions API.',
        details: error instanceof Error ? error.message : String(error),
        trace_id: traceId,
      }),
      {
        status: 502,
        headers: {
          'Content-Type': 'application/json',
          'X-ChatKit-Trace-Id': traceId,
        },
      },
    );
  }

  const json = await res.json();

  if (!res.ok) {
    return new Response(
      JSON.stringify({
        error: json,
        trace_id: traceId,
        openai_request_id: res.headers.get('x-request-id') || null,
        openai_status: res.status,
        incoming_cf_ray: incomingCfRay || null,
      }),
      {
        status: res.status,
        headers: {
          'Content-Type': 'application/json',
          'X-ChatKit-Trace-Id': traceId,
          'X-OpenAI-Request-Id': res.headers.get('x-request-id') || '',
        },
      },
    );
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
