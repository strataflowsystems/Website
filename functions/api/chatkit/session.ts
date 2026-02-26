interface Env {
  OPENAI_API_KEY: string;
  OPENAI_WORKFLOW_ID: string;
}

interface ChatKitSessionResponse {
  client_secret?: string;
  expires_at?: string;
}

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

  return new Response(
    JSON.stringify({
      client_secret: payload.client_secret,
      expires_at: payload.expires_at,
    }),
    {
      status: 200,
      headers: { 'content-type': 'application/json' },
    },
  );
};
