interface ChatKitSessionPayload {
  client_secret?: string | { value?: string };
  error?: unknown;
}

const toJsonResponse = (body: unknown, status: number): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const onRequestPost: PagesFunction<{
  OPENAI_API_KEY: string;
  OPENAI_CHATKIT_WORKFLOW_ID: string;
}> = async ({ env, request }) => {
  const cookie = request.headers.get('Cookie') || '';
  let deviceId = cookie.match(/ck_device=([^;]+)/)?.[1];

  if (!deviceId) deviceId = crypto.randomUUID();

  const upstream = await fetch('https://api.openai.com/v1/chatkit/sessions', {
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

  const raw = await upstream.text();

  let payload: ChatKitSessionPayload = {};
  try {
    payload = JSON.parse(raw) as ChatKitSessionPayload;
  } catch {
    payload = { error: raw };
  }

  if (!upstream.ok) {
    return toJsonResponse(
      {
        error: payload.error ?? payload,
        message: 'Unable to create ChatKit session from OpenAI.',
      },
      upstream.status,
    );
  }

  const clientSecret =
    typeof payload.client_secret === 'string'
      ? payload.client_secret
      : typeof payload.client_secret?.value === 'string'
        ? payload.client_secret.value
        : undefined;

  if (!clientSecret) {
    return toJsonResponse(
      {
        error: payload,
        message: 'OpenAI session response did not include a valid client_secret.',
      },
      502,
    );
  }

  const headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Set-Cookie', `ck_device=${deviceId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=31536000`);

  return new Response(JSON.stringify({ client_secret: clientSecret }), {
    status: 200,
    headers,
  });
};
