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
  forceColorScheme?: 'dark' | 'light' | (string & {});
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

      return ({ code, language, colorScheme }) => {
        let _colorScheme: any = colorScheme;

        if (colorScheme === 'light') {
          _colorScheme = light;
        } else if (colorScheme === 'dark') {
          _colorScheme = dark;
        }

        return {
          isHighlighted: true,
          highlightedCode: stripShikiCodeBlocks(
            ctx.codeToHtml(code, {
              lang: language,
              theme: forceColorScheme || _colorScheme,
            })
          ),
        };
      };
    },
  };
};
