import type { CodeHighlightAdapter } from '../CodeHighlightProvider';
import { dark, light } from './shiki-themes';

export const createShikiAdapter = (loadShiki: () => Promise<any>): CodeHighlightAdapter => {
  return {
    loadContext: loadShiki,
    getHighlighter: (ctx) => {
      if (!ctx) {
        return ({ code }) => ({ code, highlighted: false });
      }

      return ({ code, language, colorScheme }) => ({
        highlighted: true,
        code: ctx.codeToHtml(code, {
          lang: language,
          theme: (colorScheme === 'light' ? light : dark) as any,
        }),
      });
    },
  };
};
