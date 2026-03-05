import { useSyncExternalStore } from 'react';

interface ViewportSize {
  width: number;
  height: number;
}

const eventListenerOptions: AddEventListenerOptions = { passive: true };

let cachedSize: ViewportSize = { width: 0, height: 0 };
const subscribers = new Set<() => void>();

function handleResize() {
  const width = window.innerWidth || 0;
  const height = window.innerHeight || 0;

  if (cachedSize.width !== width || cachedSize.height !== height) {
    cachedSize = { width, height };
    subscribers.forEach((callback) => callback());
  }
}

function subscribe(callback: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  if (subscribers.size === 0) {
    cachedSize = { width: window.innerWidth || 0, height: window.innerHeight || 0 };
    window.addEventListener('resize', handleResize, eventListenerOptions);
    window.addEventListener('orientationchange', handleResize, eventListenerOptions);
  }

  subscribers.add(callback);

  return () => {
    subscribers.delete(callback);

    if (subscribers.size === 0) {
      window.removeEventListener('resize', handleResize, eventListenerOptions);
      window.removeEventListener('orientationchange', handleResize, eventListenerOptions);
    }
  };
}

function getSnapshot(): ViewportSize {
  return cachedSize;
}

function getServerSnapshot(): ViewportSize {
  return { width: 0, height: 0 };
}

export function useViewportSize(): ViewportSize {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
