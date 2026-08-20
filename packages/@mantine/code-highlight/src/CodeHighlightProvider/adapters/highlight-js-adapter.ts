import { normalizeCode } from '../../normalize-code';
import type { CodeHighlightAdapter } from '../CodeHighlightProvider';

export function createHighlightJsAdapter(hljs: any): CodeHighlightAdapter {
  return {
    getHighlighter:
      () =>
      ({ code, language }) => {
        const lang = hljs.getLanguage(language) ? language : 'plaintext';
        return {
          highlightedCode: hljs.highlight(normalizeCode(code), { language: lang }).value,
          isHighlighted: true,
          codeElementProps: { className: `hljs ${lang}` },
        };
      },
  };
}
