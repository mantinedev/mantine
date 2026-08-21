import { createContext, use, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { plainTextAdapter } from './adapters/plain-text-adapter';

interface HighlighterInput {
  colorScheme: 'light' | 'dark' | (string & {});
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

  /** Loads data that is required to highlight given language, for example language grammar.
   * Called once per language, code is highlighted again when returned promise resolves.
   * Should return `undefined` if there is nothing to load for the given language. */
  loadLanguage?: (ctx: any, language: string) => Promise<any> | undefined;
}

interface CodeHighlightProviderContext {
  adapter: CodeHighlightAdapter;
  highlight: Highlighter;
  loadLanguage: (language: string | undefined) => void;
}

function noop() {}

export const CodeHighlightContext = createContext<CodeHighlightProviderContext>({
  adapter: plainTextAdapter,
  highlight: plainTextAdapter.getHighlighter(null),
  loadLanguage: noop,
});

export interface CodeHighlightAdapterProviderProps {
  adapter: CodeHighlightAdapter;
  children: React.ReactNode;
}

export function CodeHighlightAdapterProvider({
  adapter,
  children,
}: CodeHighlightAdapterProviderProps) {
  const [ctx, setCtx] = useState<any>(null);
  const [, setLoadedLanguagesCount] = useState(0);
  const requestedLanguages = useRef<Set<string>>(new Set());
  const highlight = useMemo(() => adapter.getHighlighter(ctx), [adapter, ctx]);

  useEffect(() => {
    requestedLanguages.current.clear();

    if (adapter.loadContext) {
      adapter.loadContext().then(setCtx);
    }
  }, [adapter]);

  const loadLanguage = useCallback(
    (language: string | undefined) => {
      if (!ctx || !language || !adapter.loadLanguage || requestedLanguages.current.has(language)) {
        return;
      }

      const languagePromise = adapter.loadLanguage(ctx, language);

      if (!languagePromise) {
        return;
      }

      requestedLanguages.current.add(language);
      const rerender = () => setLoadedLanguagesCount((count) => count + 1);
      languagePromise.then(rerender, rerender);
    },
    [adapter, ctx]
  );

  return (
    <CodeHighlightContext value={{ adapter, highlight, loadLanguage }}>
      {children}
    </CodeHighlightContext>
  );
}

export function useHighlight() {
  const ctx = use(CodeHighlightContext);
  return ctx?.highlight || plainTextAdapter.getHighlighter(null);
}

export function useLoadLanguage() {
  const ctx = use(CodeHighlightContext);
  return ctx?.loadLanguage || noop;
}
