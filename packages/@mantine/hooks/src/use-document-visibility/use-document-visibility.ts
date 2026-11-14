import { useSyncExternalStore } from 'react';

function subscribe(onChange: () => void) {
  document.addEventListener('visibilitychange', onChange);
  return () => document.removeEventListener('visibilitychange', onChange);
}

function getSnapshot(): DocumentVisibilityState {
  return document.visibilityState;
}

export function useDocumentVisibility(
  serverSnapshot: DocumentVisibilityState = 'visible'
): DocumentVisibilityState {
  return useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);
}
