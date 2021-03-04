import { useLayoutEffect } from 'react';

export function useDocumentTitle(title: string) {
  useLayoutEffect(() => {
    title && (document.title = title);
  }, [title]);
}
