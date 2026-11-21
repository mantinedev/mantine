import { useSyncExternalStore } from 'react';

function subscribe(listener: () => void) {
  document.addEventListener('visibilitychange', listener);
  return () => document.removeEventListener('visibilitychange', listener);
}

function getSnapshot() {
  return document.visibilityState;
}

function getServerSnapshot(): DocumentVisibilityState {
  return 'visible';
}

export function useDocumentVisibility(): DocumentVisibilityState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
