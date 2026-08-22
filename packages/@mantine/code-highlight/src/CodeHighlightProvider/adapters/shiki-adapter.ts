import { getEnv } from '@mantine/core';
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

  /** Resolves grammar of a language that is not loaded in the highlighter yet.
   * Returned value is passed to shiki `highlighter.loadLanguage`: it can be a language name
   * (bundled highlighters), a language registration or a function that imports one.
   * Return `null` or `undefined` if the language is not supported. */
  resolveLanguage?: (language: string) => any;
}

const specialLanguages = ['text', 'plaintext', 'txt', 'ansi'];

function isLanguageAvailable(ctx: any, language: string | undefined) {
  if (!language || specialLanguages.includes(language)) {
    return true;
  }

  if (typeof ctx.getLoadedLanguages !== 'function') {
    return true;
  }

  return ctx.getLoadedLanguages().includes(language);
}

export const createShikiAdapter = (
  loadShiki: () => Promise<any>,
  { forceColorScheme, resolveLanguage }: CreateShikiAdapterOptions = {}
): CodeHighlightAdapter => {
  const warnedLanguages = new Set<string>();

  const warnUnavailableLanguage = (language: string, reason: string) => {
    if (getEnv() === 'production' || warnedLanguages.has(language)) {
      return;
    }

    warnedLanguages.add(language);
    // eslint-disable-next-line no-console
    console.warn(
      `[@mantine/code-highlight] Language \`${language}\` ${reason}, code is rendered as plain text.`
    );
  };

  return {
    loadContext: loadShiki,

    loadLanguage: resolveLanguage
      ? (ctx, language) => {
          if (isLanguageAvailable(ctx, language)) {
            return undefined;
          }

          const grammar = resolveLanguage(language);

          if (!grammar) {
            warnUnavailableLanguage(language, 'was not resolved by `resolveLanguage` option');
            return undefined;
          }

          try {
            return ctx.loadLanguage(grammar);
          } catch (error) {
            warnUnavailableLanguage(language, 'could not be loaded by the highlighter');
            return Promise.reject(error);
          }
        }
      : undefined,
    getHighlighter: (ctx) => {
      if (!ctx) {
        return ({ code }) => ({ highlightedCode: code, isHighlighted: false });
      }

      return ({ code, language, colorScheme }) => {
        if (!isLanguageAvailable(ctx, language)) {
          if (!resolveLanguage) {
            warnUnavailableLanguage(
              language!,
              'is not loaded in the highlighter – add it to `langs` option or use `resolveLanguage` option to load it on demand'
            );
          }

          return { highlightedCode: code, isHighlighted: false };
        }

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
