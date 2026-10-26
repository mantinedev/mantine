import { useEffect } from 'react';

export function loadStylesheet(href: string) {
  if (document.head.querySelector(`link[data-stylesheet="${CSS.escape(href)}"]`)) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.stylesheet = href;
  document.head.appendChild(link);
}

export function useStylesheets(hrefs: (string | null | undefined)[]) {
  const key = hrefs.filter(Boolean).join('\n');

  useEffect(() => {
    if (key) {
      key.split('\n').forEach(loadStylesheet);
    }
  }, [key]);
}
