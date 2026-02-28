export const isChatKitEnabled = () => import.meta.env.VITE_ENABLE_CHATKIT !== 'false';

type ChatKitSessionResponse = {
  client_secret?: string | { value?: string };
  error?: unknown;
};

const extractClientSecret = (payload: ChatKitSessionResponse): string | null => {
  if (typeof payload.client_secret === 'string' && payload.client_secret.length > 0) {
    return payload.client_secret;
  }

  if (
    payload.client_secret &&
    typeof payload.client_secret === 'object' &&
    typeof payload.client_secret.value === 'string' &&
    payload.client_secret.value.length > 0
  ) {
    return payload.client_secret.value;
  }

  return null;
};

export const getChatKitClientSecret = async (currentClientSecret: string | null | undefined): Promise<string> => {
  const response = await fetch('/api/chatkit/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentClientSecret }),
  });

  const payload = (await response.json().catch(() => ({}))) as ChatKitSessionResponse;

  if (!response.ok) {
    throw new Error(
      `Unable to create ChatKit session (${response.status}): ${JSON.stringify(payload.error ?? payload)}`,
    );
  }

  const clientSecret = extractClientSecret(payload);

  if (!clientSecret) {
    throw new Error('ChatKit session response did not include a valid client_secret.');
  }

  return clientSecret;
};
