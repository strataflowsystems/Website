export const onRequestPost: PagesFunction<{
  OPENAI_API_KEY: string;
  OPENAI_CHATKIT_WORKFLOW_ID: string;
  OPENAI_WORKFLOW_ID: string;
  OPENAI_PROJECT_ID: string;
  OPENAI_ORG_ID: string;
}> = async ({ env, request }) => {
  const traceId = crypto.randomUUID();
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

  const requestBody = await request.json().catch(() => ({} as { currentClientSecret?: string | null }));
  const currentClientSecret = requestBody?.currentClientSecret;

  const buildUpstreamHeaders = (includeScopeHeaders: boolean) => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      'OpenAI-Beta': 'chatkit_beta=v1',
    };

    if (includeScopeHeaders && env.OPENAI_PROJECT_ID) {
      headers['OpenAI-Project'] = env.OPENAI_PROJECT_ID;
    }

    if (includeScopeHeaders && env.OPENAI_ORG_ID) {
      headers['OpenAI-Organization'] = env.OPENAI_ORG_ID;
    }

    return headers;
  };

  const createOrRefreshSession = (headers: Record<string, string>) =>
    currentClientSecret
      ? fetch('https://api.openai.com/v1/chatkit/sessions/refresh', {
          method: 'POST',
          headers,
          body: JSON.stringify({
            client_secret: currentClientSecret,
          }),
        })
      : fetch('https://api.openai.com/v1/chatkit/sessions', {
          method: 'POST',
          headers,
          body: JSON.stringify({
            workflow: { id: workflowId },
            user: deviceId,
          }),
        });

  let res = await createOrRefreshSession(buildUpstreamHeaders(true));
  let json = await res.json();
  let usedScopeHeaders = Boolean(env.OPENAI_PROJECT_ID || env.OPENAI_ORG_ID);

  if (!res.ok && (res.status === 401 || res.status === 403) && usedScopeHeaders) {
    const fallbackRes = await createOrRefreshSession(buildUpstreamHeaders(false));

    if (fallbackRes.ok) {
      res = fallbackRes;
      json = await fallbackRes.json();
      usedScopeHeaders = false;
    }
  }

  if (!res.ok) {
    const base = {
      error: json,
      openai_request_id: res.headers.get('x-request-id') || null,
      attempted_scope_header_fallback: Boolean(env.OPENAI_PROJECT_ID || env.OPENAI_ORG_ID),
    };

    if (res.status === 401 || res.status === 403) {
      return new Response(
        JSON.stringify({
          ...base,
          hint:
            'Verify OPENAI_API_KEY can access the ChatKit workflow project. Ensure OPENAI_CHATKIT_WORKFLOW_ID points to an existing workflow in that same project. If you configured OPENAI_PROJECT_ID/OPENAI_ORG_ID, verify they match the key scope.',
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
