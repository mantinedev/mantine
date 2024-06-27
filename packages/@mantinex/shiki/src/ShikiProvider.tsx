import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { HighlighterGeneric } from 'shiki';
import { useComputedColorScheme } from '@mantine/core';
import { dark, light } from './themes';
import { ShikiLanguage } from './types';
import classes from './Shiki.module.css';

type HighlightCode = (
  code: string,
  language: ShikiLanguage
) => { code: string; highlighted: boolean };

function prepareHtmlCode(code: string) {
  return code
    .replaceAll('tabindex="0"', '')
    .replace('<code>', `<code class="${classes.code}">`)
    .replaceAll('class="shiki "', `class="${classes.pre}"`)
    .replaceAll('style="background-color:#ffffff;color:#1f2328"', '')
    .replaceAll('style="background-color:#0d1117;color:#e6edf3', '');
}

const ShikiContext = createContext<HighlightCode | null>(null);

interface ShikiProviderProps {
  children: React.ReactNode;
  loadShiki: () => Promise<HighlighterGeneric<any, any>>;
}

export function ShikiProvider({ children, loadShiki }: ShikiProviderProps) {
  const [shiki, setShiki] = useState<HighlighterGeneric<any, any> | null>(null);
  const computedColorScheme = useComputedColorScheme('light');

  useEffect(() => {
    loadShiki().then((s) => setShiki(s));
  }, [loadShiki]);

  const highlight: HighlightCode = useCallback(
    (code, language = 'tsx') => {
      if (!shiki) {
        return { code, highlighted: false };
      }

      return {
        code: prepareHtmlCode(
          shiki.codeToHtml(code, {
            lang: language,
            theme: (computedColorScheme === 'light' ? light : dark) as any,
          })
        ),
        highlighted: true,
      };
    },
    [shiki, computedColorScheme]
  );

  return <ShikiContext.Provider value={highlight}>{children}</ShikiContext.Provider>;
}

export function useShiki() {
  const shiki = useContext(ShikiContext);

  if (!shiki) {
    return (code: string) => ({ code, highlighted: false });
  }

  return shiki;
}
