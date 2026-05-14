import { useRef } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

const MIME_TYPES: Record<string, string> = {
  ico: 'image/x-icon',
  png: 'image/png',
  svg: 'image/svg+xml',
  gif: 'image/gif',
};

export function useFavicon(url: string) {
  const link = useRef<HTMLLinkElement>(null);

  useIsomorphicEffect(() => {
    if (!url) {
      return;
    }

    if (!link.current) {
      const existingElements = document.querySelectorAll<HTMLLinkElement>('link[rel*="icon"]');
      existingElements.forEach((element) => document.head.removeChild(element));

      const element = document.createElement('link');
      element.rel = 'shortcut icon';
      link.current = element;
      document.querySelector('head')!.appendChild(element);
    }

    const splittedUrl = url.split('.');
    const extension = splittedUrl[splittedUrl.length - 1].toLowerCase();
    const mimeType = MIME_TYPES[extension];

    if (mimeType) {
      link.current.setAttribute('type', mimeType);
    } else {
      link.current.removeAttribute('type');
    }

    link.current.setAttribute('href', url);
  }, [url]);
}
