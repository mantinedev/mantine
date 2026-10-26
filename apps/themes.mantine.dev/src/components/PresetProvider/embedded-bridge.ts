import type { MantineColorScheme, MantineColorSchemeManager } from '@mantine/core';
import {
  type EditorMessage,
  isEditorMessage,
  type PreviewColorScheme,
  type PreviewMessage,
} from '@/preview';

type Listener = () => void;

let state: EditorMessage | null = null;
let listening = false;
const listeners = new Set<Listener>();

export function isEmbedded() {
  return typeof window !== 'undefined' && window.self !== window.top;
}

export function postToEditor(message: PreviewMessage) {
  if (isEmbedded()) {
    window.parent.postMessage(message, window.location.origin);
  }
}

function handleMessage(event: MessageEvent) {
  if (
    event.source !== window.parent ||
    event.origin !== window.location.origin ||
    !isEditorMessage(event.data)
  ) {
    return;
  }

  state = event.data;
  listeners.forEach((listener) => listener());
}

export function subscribeToEditor(listener: Listener) {
  if (!listening && isEmbedded()) {
    window.addEventListener('message', handleMessage);
    listening = true;
  }

  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getEditorState() {
  return state;
}

function getInitialColorScheme(): PreviewColorScheme | null {
  const value = new URLSearchParams(window.location.search).get('scheme');
  return value === 'light' || value === 'dark' ? value : null;
}

export function embeddedColorSchemeManager(): MantineColorSchemeManager {
  let unsubscribe: (() => void) | null = null;
  let current: MantineColorScheme | null = null;

  return {
    get: (defaultValue) => {
      current = state?.colorScheme ?? getInitialColorScheme() ?? defaultValue;
      return current;
    },
    set: (value) => {
      current = value;
      if (value !== 'auto') {
        postToEditor({ type: 'theme-editor:color-scheme', colorScheme: value });
      }
    },
    subscribe: (onUpdate) => {
      unsubscribe = subscribeToEditor(() => {
        if (state && state.colorScheme !== current) {
          current = state.colorScheme;
          onUpdate(state.colorScheme);
        }
      });
    },
    unsubscribe: () => {
      unsubscribe?.();
      unsubscribe = null;
    },
    clear: () => {},
  };
}
