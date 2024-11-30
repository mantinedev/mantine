import type { CodeHighlightAdapter } from '../CodeHighlightProvider';

export const createPlainTextAdapter = (): CodeHighlightAdapter => {
  return {
    getHighlighter:
      () =>
      ({ code }) => ({ code, highlighted: false }),
  };
};
