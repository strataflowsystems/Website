export const onRequestPost: PagesFunction<{
  OPENAI_API_KEY: string;
  OPENAI_CHATKIT_WORKFLOW_ID: string;
}> = async ({ env, request }) => {
  // Simple per-visitor ID (cookie) so ChatKit can associate sessions to a "user"
  const cookie = request.headers.get('Cookie') || '';
  let deviceId = cookie.match(/ck_device=([^;]+)/)?.[1];

  if (!deviceId) deviceId = crypto.randomUUID();

  const res = await fetch('https://api.openai.com/v1/chatkit/sessions', {
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

  const json = await res.json();

  if (!res.ok) {
    return new Response(JSON.stringify({ error: json }), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Set-Cookie', `ck_device=${deviceId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=31536000`);

  return new Response(JSON.stringify({ client_secret: json.client_secret }), {
    status: 200,
    headers,
  });
};
