import { useSyncExternalStore } from 'react';

const eventListerOptions: AddEventListenerOptions = {
  passive: true,
};

const serverFallback = { width: 0, height: 0 };
let cachedSize = serverFallback;
let isInitialized = false;

function getSnapshot() {
  if (typeof window === 'undefined') {
    return serverFallback;
  }

  if (!isInitialized) {
    cachedSize = { width: window.innerWidth, height: window.innerHeight };
    isInitialized = true;
  }

  return cachedSize;
}

function getServerSnapshot() {
  return serverFallback;
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (cachedSize.width !== newWidth || cachedSize.height !== newHeight) {
      cachedSize = { width: newWidth, height: newHeight };
      callback();
    }
  };

  window.addEventListener('resize', handleResize, eventListerOptions);
  window.addEventListener('orientationchange', handleResize, eventListerOptions);

  return () => {
    window.removeEventListener('resize', handleResize, eventListerOptions);
    window.removeEventListener('orientationchange', handleResize, eventListerOptions);
  };
}

export function useViewportSize() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
