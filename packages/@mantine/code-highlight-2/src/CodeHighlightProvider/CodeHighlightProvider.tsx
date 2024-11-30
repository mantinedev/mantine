import { useEffect, useMemo, useState } from 'react';
import { createSafeContext } from '@mantine/core';

interface HighlighterInput {
  colorScheme: 'light' | 'dark';
  code: string;
  language?: string;
}

type Highlighter = (input: HighlighterInput) => {
  /** Highlighted code (html markup) */
  highlightedCode: string;

  /** `true` if the code is represented with html string, `false` for plain text string */
  isHighlighted: boolean;

  /** Props to pass down to `<code>` tag */
  codeElementProps?: Record<string, any>;
};

export interface CodeHighlightAdapter {
  loadContext?: () => Promise<any>;
  getHighlighter: (ctx: any) => Highlighter;
}

interface CodeHighlightProviderContext {
  adapter: CodeHighlightAdapter;
  highlight: Highlighter;
}

export const [CodeHighlightProvider, useCodeHighlight] =
  createSafeContext<CodeHighlightProviderContext>(
    'CodeHighlightProvider was not found in the component tree'
  );

export interface CodeHighlightAdapterProviderProps {
  adapter: CodeHighlightAdapter;
  children: React.ReactNode;
}

export function CodeHighlightAdapterProvider({
  adapter,
  children,
}: CodeHighlightAdapterProviderProps) {
  const [ctx, setCtx] = useState<any>(null);
  const highlight = useMemo(() => adapter.getHighlighter(ctx), [adapter, ctx]);

  useEffect(() => {
    if (adapter.loadContext) {
      adapter.loadContext().then(setCtx);
    }
  }, [adapter]);

  return <CodeHighlightProvider value={{ adapter, highlight }}>{children}</CodeHighlightProvider>;
}

export function useHighlight() {
  return useCodeHighlight().highlight;
}
