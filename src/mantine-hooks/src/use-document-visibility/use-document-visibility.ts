import { useEffect, useState } from 'react';

const getVisibility = () => {
  if (typeof document === 'undefined') return 'visible';

  return document.visibilityState;
};

export function useDocumentVisibility(): DocumentVisibilityState {
  const [documentVisibility, setDocumentVisibility] = useState<DocumentVisibilityState>(
    getVisibility()
  );

  useEffect(() => {
    const listener = () => setDocumentVisibility(getVisibility());

    document.addEventListener('visibilitychange', listener);

    return () => document.removeEventListener('visibilitychange', listener);
  }, []);

  return documentVisibility;
}
