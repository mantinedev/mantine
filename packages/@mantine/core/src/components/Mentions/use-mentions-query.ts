import { useEffect, useMemo, useRef, useState } from 'react';
import { MentionDataFn, MentionItem, MentionResult, MentionsFilter } from './Mentions.types';
import { ResolvedMentionSource } from './resolve-sources';

export interface MentionsQueryState {
  items: MentionItem[];
  loading: boolean;
  error: unknown;
  generation: number;
}

interface AsyncQueryState extends MentionsQueryState {
  sourceIndex: number;
  query: string | null;
}

const EMPTY_STATE: MentionsQueryState = { items: [], loading: false, error: null, generation: 0 };
const LOADING_STATE: MentionsQueryState = {
  items: [],
  loading: true,
  error: null,
  generation: 0,
};
const EMPTY_ASYNC_STATE: AsyncQueryState = { ...EMPTY_STATE, sourceIndex: -1, query: null };

function deburr(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function defaultFilter(
  { query, items }: { query: string; items: MentionItem[] },
  ignoreAccents?: boolean
): MentionItem[] {
  const normalize = (value: string) => (ignoreAccents ? deburr(value) : value).toLowerCase();
  const normalizedQuery = normalize(query).trim();
  if (normalizedQuery.length === 0) {
    return items;
  }
  return items.filter((item) => normalize(item.display ?? item.id).includes(normalizedQuery));
}

function resolveResult(result: MentionResult): MentionItem[] {
  return Array.isArray(result) ? result : result.items;
}

function capItems(items: MentionItem[], maxSuggestions?: number): MentionItem[] {
  return maxSuggestions === undefined ? items : items.slice(0, maxSuggestions);
}

export interface UseMentionsQueryInput {
  source: ResolvedMentionSource | null;
  query: string | null;
  enabled: boolean;
  filter: false | MentionsFilter | undefined;
}

export function useMentionsQuery({
  source,
  query,
  enabled,
  filter,
}: UseMentionsQueryInput): MentionsQueryState {
  const [asyncState, setAsyncState] = useState<AsyncQueryState>(EMPTY_ASYNC_STATE);
  const debounceRef = useRef<number>(-1);
  const generationRef = useRef(0);

  const data = source?.props.data;
  const maxSuggestions = source?.props.maxSuggestions;
  const debounceMs = source?.props.debounceMs ?? 0;
  const ignoreAccents = source?.props.ignoreAccents;
  const isFunctionData = typeof data === 'function';
  const sourceIndex = source?.sourceIndex ?? -1;
  const hasSource = source != null;

  useEffect(() => {
    if (!enabled || query == null || !isFunctionData) {
      setAsyncState(EMPTY_ASYNC_STATE);
      return undefined;
    }

    const dataFn = data as MentionDataFn;
    const controller = new AbortController();
    const context = { signal: controller.signal };

    setAsyncState((current) =>
      current.sourceIndex === sourceIndex && current.query === query
        ? { ...current, loading: true, error: null }
        : { ...LOADING_STATE, sourceIndex, query }
    );

    const run = () => {
      Promise.resolve()
        .then(() => dataFn(query, context))
        .then((result) => {
          if (!controller.signal.aborted) {
            setAsyncState({
              items: capItems(resolveResult(result), maxSuggestions),
              loading: false,
              error: null,
              generation: ++generationRef.current,
              sourceIndex,
              query,
            });
          }
        })
        .catch((error) => {
          if (!controller.signal.aborted) {
            setAsyncState({
              items: [],
              loading: false,
              error,
              generation: ++generationRef.current,
              sourceIndex,
              query,
            });
          }
        });
    };

    if (debounceMs > 0) {
      debounceRef.current = window.setTimeout(run, debounceMs);
    } else {
      run();
    }

    return () => {
      controller.abort();
      window.clearTimeout(debounceRef.current);
    };
  }, [sourceIndex, query, enabled, isFunctionData, data, maxSuggestions, debounceMs]);

  const arrayState = useMemo<MentionsQueryState | null>(() => {
    if (isFunctionData || !enabled || query == null || !hasSource) {
      return null;
    }
    const items = data == null ? [] : (data as MentionItem[]);
    const filtered =
      filter === false
        ? items
        : filter
          ? filter({ query, items })
          : defaultFilter({ query, items }, ignoreAccents);
    return {
      items: capItems(filtered, maxSuggestions),
      loading: false,
      error: null,
      generation: 0,
    };
  }, [isFunctionData, enabled, query, hasSource, data, filter, maxSuggestions, ignoreAccents]);

  const asyncResult = useMemo<MentionsQueryState>(
    () =>
      asyncState.sourceIndex === sourceIndex && asyncState.query === query
        ? {
            items: asyncState.items,
            loading: asyncState.loading,
            error: asyncState.error,
            generation: asyncState.generation,
          }
        : LOADING_STATE,
    [asyncState, sourceIndex, query]
  );

  if (!enabled || query == null || !source) {
    return EMPTY_STATE;
  }

  return arrayState ?? asyncResult;
}
