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

export function stripShikiCodeBlocks(data: string) {
  return stripElement('code', stripElement('pre', data));
}

interface CreateShikiAdapterOptions {
  forceColorScheme?: 'dark' | 'light';
}

export const createShikiAdapter = (
  loadShiki: () => Promise<any>,
  { forceColorScheme }: CreateShikiAdapterOptions = {}
): CodeHighlightAdapter => {
  return {
    loadContext: loadShiki,
    getHighlighter: (ctx) => {
      if (!ctx) {
        return ({ code }) => ({ highlightedCode: code, isHighlighted: false });
      }

      return ({ code, language, colorScheme }) => ({
        isHighlighted: true,
        highlightedCode: stripShikiCodeBlocks(
          ctx.codeToHtml(code, {
            lang: language,
            theme: forceColorScheme || ((colorScheme === 'light' ? light : dark) as any),
          })
        ),
      });
    },
  };
};
