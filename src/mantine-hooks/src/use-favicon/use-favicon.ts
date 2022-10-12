import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

const MIME_TYPES = {
  ico: 'image/x-icon',
  png: 'image/png',
  svg: 'image/svg+xml',
  gif: 'image/gif',
};

export function useFavicon(url: string) {
  useIsomorphicEffect(() => {
    if (!url) {
      return;
    }

    const element =
      document.querySelector<HTMLLinkElement>('link[rel*="icon"]') ||
      document.createElement('link');

    const splittedUrl = url.split('.');
    element.type = MIME_TYPES[splittedUrl[splittedUrl.length - 1].toLowerCase()];
    element.href = url;
    element.rel = 'shortcut icon';

    document.querySelector('head').appendChild(element);
  }, [url]);
}
