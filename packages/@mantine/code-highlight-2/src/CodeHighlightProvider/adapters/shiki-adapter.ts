import type { CodeHighlightAdapter } from '../CodeHighlightProvider';
import { dark, light } from './shiki-themes';

function stripElement(openTag: string, data: string) {
  const openIndex = data.indexOf(`<${openTag}`);
  let closeIndex = openIndex + openTag.length;

  for (let i = openIndex; i < data.length; i++) {
    if (data[i] === '>') {
      closeIndex = i;
      break;
    }
  }

  const striped = data.slice(0, openIndex) + data.slice(closeIndex + 1);
  return striped.replace(`</${openTag}>`, '');
}

function stripShikiCodeBlocks(data: string) {
  return stripElement('code', stripElement('pre', data));
}

export const createShikiAdapter = (loadShiki: () => Promise<any>): CodeHighlightAdapter => {
  return {
    loadContext: loadShiki,
    getHighlighter: (ctx) => {
      if (!ctx) {
        return ({ code }) => ({ code, highlighted: false });
      }

      return ({ code, language, colorScheme }) => ({
        highlighted: true,
        code: stripShikiCodeBlocks(
          ctx.codeToHtml(code, {
            lang: language,
            theme: (colorScheme === 'light' ? light : dark) as any,
          })
        ),
      });
    },
  };
};
