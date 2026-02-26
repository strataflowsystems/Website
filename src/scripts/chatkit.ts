const CHATKIT_SCRIPT_ID = 'openai-chatkit-sdk';
const CHATKIT_SCRIPT_URL = 'https://cdn.openai.com/chatkit/widget.js';

interface ChatKitMountConfig {
  client_secret: string;
  encoded_widget?: string;
  encodedWidget?: string;
}

declare global {
  interface Window {
    ChatKit?: {
      mount: (selector: string, config: ChatKitMountConfig) => void;
    };
  }
}

const loadChatKitScript = async (): Promise<void> => {
  if (window.ChatKit) {
    return;
  }

  const existingScript = document.getElementById(CHATKIT_SCRIPT_ID) as HTMLScriptElement | null;

  if (existingScript) {
    await new Promise<void>((resolve, reject) => {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Unable to load ChatKit script.')), { once: true });
    });

    return;
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.id = CHATKIT_SCRIPT_ID;
    script.src = CHATKIT_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Unable to load ChatKit script.'));
    document.head.append(script);
  });
};

interface SessionResponse {
  client_secret?: string;
  encoded_widget?: string;
}

export const mountChatKit = async (selector: string): Promise<void> => {
  const response = await fetch('/api/chatkit/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const { client_secret, encoded_widget } = (await response.json()) as SessionResponse;

  if (!client_secret) {
    throw new Error('ChatKit session response did not include client_secret.');
  }

  await loadChatKitScript();

  if (!window.ChatKit?.mount) {
    throw new Error('ChatKit SDK did not initialize correctly.');
  }

  const mountConfig: ChatKitMountConfig = { client_secret };

  if (encoded_widget) {
    mountConfig.encoded_widget = encoded_widget;
    mountConfig.encodedWidget = encoded_widget;
  }

  window.ChatKit.mount(selector, mountConfig);
};
