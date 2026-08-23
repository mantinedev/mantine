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
  isLanguageLoaded: (language: string | undefined) => boolean;
}

function noop() {}

function alwaysTrue() {
  return true;
}

export const CodeHighlightContext = createContext<CodeHighlightProviderContext>({
  adapter: plainTextAdapter,
  highlight: plainTextAdapter.getHighlighter(null),
  loadLanguage: noop,
  isLanguageLoaded: alwaysTrue,
});

export interface CodeHighlightAdapterProviderProps {
  adapter: CodeHighlightAdapter;
  children: React.ReactNode;
}

export function CodeHighlightAdapterProvider({
  adapter,
  children,
}: CodeHighlightAdapterProviderProps) {
  const [contextState, setContextState] = useState<{
    adapter: CodeHighlightAdapter;
    epoch: number;
    ctx: any;
    loaded: boolean;
  }>({ adapter, epoch: 0, ctx: null, loaded: false });

  const [loadedLanguages, setLoadedLanguages] = useState<string[]>([]);
  const [epoch, setEpoch] = useState(0);
  const requestedLanguages = useRef<Set<string>>(new Set());
  const currentEpoch = useRef(0);
  const previousAdapter = useRef(adapter);
  const contextRequestedFor = useRef<number | null>(null);

  const isCurrentContext = contextState.adapter === adapter && contextState.epoch === epoch;
  const ctx = isCurrentContext ? contextState.ctx : null;
  const isContextLoaded = adapter.loadContext ? isCurrentContext && contextState.loaded : true;

  const highlight = useMemo(() => adapter.getHighlighter(ctx), [adapter, ctx]);

  useEffect(() => {
    if (previousAdapter.current !== adapter) {
      previousAdapter.current = adapter;
      currentEpoch.current += 1;
      requestedLanguages.current.clear();
      setLoadedLanguages([]);
      setEpoch(currentEpoch.current);
    }

    if (!adapter.loadContext || contextRequestedFor.current === currentEpoch.current) {
      return;
    }

    const loadedWith = currentEpoch.current;
    contextRequestedFor.current = loadedWith;

    adapter.loadContext().then((loadedCtx) => {
      if (loadedWith === currentEpoch.current) {
        setContextState({ adapter, epoch: loadedWith, ctx: loadedCtx, loaded: true });
      }
    });
  }, [adapter]);

  const loadLanguage = useCallback(
    (language: string | undefined) => {
      if (
        !isContextLoaded ||
        !language ||
        !adapter.loadLanguage ||
        requestedLanguages.current.has(language)
      ) {
        return;
      }

      const languagePromise = adapter.loadLanguage(ctx, language);

      requestedLanguages.current.add(language);

      if (!languagePromise) {
        return;
      }

      const loadedWith = currentEpoch.current;

      languagePromise.then(
        () => {
          if (loadedWith === currentEpoch.current) {
            setLoadedLanguages((current) =>
              current.includes(language) ? current : [...current, language]
            );
          }
        },
        () => {
          if (loadedWith === currentEpoch.current) {
            requestedLanguages.current.delete(language);
          }
        }
      );
    },
    [adapter, ctx, isContextLoaded, epoch]
  );

  const isLanguageLoaded = useCallback(
    (language: string | undefined) => !language || loadedLanguages.includes(language),
    [loadedLanguages]
  );

  const value = useMemo(
    () => ({ adapter, highlight, loadLanguage, isLanguageLoaded }),
    [adapter, highlight, loadLanguage, isLanguageLoaded]
  );

  return <CodeHighlightContext value={value}>{children}</CodeHighlightContext>;
}

export function useHighlight() {
  const ctx = use(CodeHighlightContext);
  return ctx?.highlight || plainTextAdapter.getHighlighter(null);
}

export function useLoadLanguage() {
  const ctx = use(CodeHighlightContext);
  return ctx?.loadLanguage || noop;
}

/** Returns `true` if the adapter has finished loading the given language asynchronously.
 *  Used to re-highlight the code once a lazily loaded grammar becomes available. */
export function useIsLanguageLoaded() {
  const ctx = use(CodeHighlightContext);
  return ctx?.isLanguageLoaded || alwaysTrue;
}
