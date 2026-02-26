interface Env {
  OPENAI_API_KEY: string;
  OPENAI_WORKFLOW_ID: string;
  OPENAI_CHATKIT_ENCODED_WIDGET?: string;
}

interface ChatKitSessionResponse {
  client_secret?: string | { value?: string };
  expires_at?: string;
}

const extractClientSecret = (payload: ChatKitSessionResponse): string | undefined => {
  if (typeof payload.client_secret === 'string') {
    return payload.client_secret;
  }

  if (payload.client_secret && typeof payload.client_secret.value === 'string') {
    return payload.client_secret.value;
  }

  return undefined;
};

export const onRequestPost: PagesFunction<Env> = async ({ env }) => {
  if (!env.OPENAI_API_KEY || !env.OPENAI_WORKFLOW_ID) {
    return new Response(
      JSON.stringify({ error: 'Missing OPENAI_API_KEY or OPENAI_WORKFLOW_ID environment variables.' }),
      {
        status: 500,
        headers: { 'content-type': 'application/json' },
      },
    );
  }

  const upstreamResponse = await fetch('https://api.openai.com/v1/chatkit/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      workflow_id: env.OPENAI_WORKFLOW_ID,
    }),
  });

  if (!upstreamResponse.ok) {
    const errorBody = await upstreamResponse.text();

    return new Response(errorBody, {
      status: upstreamResponse.status,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  }

  const payload = (await upstreamResponse.json()) as ChatKitSessionResponse;
  const clientSecret = extractClientSecret(payload);

  if (!clientSecret) {
    return new Response(JSON.stringify({ error: 'Session was created but no client_secret was returned by upstream.' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }

  return new Response(
    JSON.stringify({
      client_secret: clientSecret,
      expires_at: payload.expires_at,
      encoded_widget: env.OPENAI_CHATKIT_ENCODED_WIDGET,
    }),
    {
      status: 200,
      headers: { 'content-type': 'application/json' },
    },
  );
};
