import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

const getVisibility = () => {
  if (typeof document === 'undefined') return undefined;

  return document.visibilityState;
};

export function useDocumentVisibility(): DocumentVisibilityState | undefined {
  const [documentVisibility, setDocumentVisibility] = useState<DocumentVisibilityState>(
    getVisibility()
  );

  useIsomorphicEffect(() => {
    const listener = () => setDocumentVisibility(getVisibility());

    document.addEventListener('visibilitychange', listener);

    return () => document.removeEventListener('visibilitychange', listener);
  }, []);

  return documentVisibility;
}
