import { useLayoutEffect } from 'react';

export function useDocumentTitle(title: string) {
  useLayoutEffect(() => {
    if (typeof title === 'string' && title.trim().length > 0) {
      document.title = title.trim();
    }
  }, [title]);
}
