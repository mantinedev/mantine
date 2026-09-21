import { useEffect, useMemo, useRef, useState } from 'react';
import type { MentionDataFn, MentionItem, MentionResult } from './Mentions.types';
import type { ResolvedMentionSource } from './resolve-sources';

export type MentionsFilter = (input: { query: string; items: MentionItem[] }) => MentionItem[];

export interface MentionsQueryState {
  items: MentionItem[];
  loading: boolean;
  error: unknown;
}

const EMPTY_STATE: MentionsQueryState = { items: [], loading: false, error: null };

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

/** Resolves suggestions for the active mention source, handling local filtering and async data with abort + debounce */
export function useMentionsQuery({
  source,
  query,
  enabled,
  filter,
}: UseMentionsQueryInput): MentionsQueryState {
  const [asyncState, setAsyncState] = useState<MentionsQueryState>(EMPTY_STATE);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<number>(-1);

  const data = source?.props.data;
  const maxSuggestions = source?.props.maxSuggestions;
  const debounceMs = source?.props.debounceMs ?? 0;
  const ignoreAccents = source?.props.ignoreAccents;
  const isFunctionData = typeof data === 'function';
  const sourceIndex = source?.index ?? -1;

  useEffect(() => {
    if (!enabled || query == null || !isFunctionData) {
      abortRef.current?.abort();
      window.clearTimeout(debounceRef.current);
      setAsyncState(EMPTY_STATE);
      return undefined;
    }

    const dataFn = data as MentionDataFn;
    abortRef.current?.abort();
    window.clearTimeout(debounceRef.current);

    const controller = new AbortController();
    abortRef.current = controller;
    setAsyncState((current) => ({ ...current, loading: true, error: null }));

    const run = () => {
      Promise.resolve()
        .then(() => dataFn(query, { signal: controller.signal, cursor: null, reason: 'query' }))
        .then((result) => {
          if (!controller.signal.aborted) {
            setAsyncState({
              items: capItems(resolveResult(result), maxSuggestions),
              loading: false,
              error: null,
            });
          }
        })
        .catch((error) => {
          if (!controller.signal.aborted) {
            setAsyncState({ items: [], loading: false, error });
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

  // Array data is filtered synchronously so it always reflects the latest data/filter. It is
  // memoized so the resulting `items` keeps a stable identity across unrelated re-renders (for
  // example while navigating the dropdown), which keeps keyboard selection in place.
  const arrayState = useMemo<MentionsQueryState | null>(() => {
    if (isFunctionData || !enabled || query == null || !source) {
      return null;
    }
    const items = data == null ? [] : (data as MentionItem[]);
    const filtered =
      filter === false
        ? items
        : filter
          ? filter({ query, items })
          : defaultFilter({ query, items }, ignoreAccents);
    return { items: capItems(filtered, maxSuggestions), loading: false, error: null };
  }, [isFunctionData, enabled, query, sourceIndex, data, filter, maxSuggestions, ignoreAccents]);

  if (!enabled || query == null || !source) {
    return EMPTY_STATE;
  }

  return arrayState ?? asyncState;
}
