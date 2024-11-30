import type { CodeHighlightAdapter } from '../CodeHighlightProvider';

export const plainTextAdapter: CodeHighlightAdapter = {
  getHighlighter:
    () =>
    ({ code }) => ({ highlightedCode: code, isHighlighted: false }),
};
