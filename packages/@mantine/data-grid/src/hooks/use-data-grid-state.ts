import { useCallback, useEffect, useRef } from 'react';
import { Table as ReactTable } from '@tanstack/react-table';
import type { MantineSize } from '@mantine/core';
import type { DataGridFeatures } from '../table-features';

export type DataGridPersistableState =
  | 'sorting'
  | 'columnFilters'
  | 'globalFilter'
  | 'pagination'
  | 'columnSizing'
  | 'columnPinning'
  | 'columnVisibility'
  | 'columnOrder'
  | 'rowSelection'
  | 'expanded'
  | 'grouping'
  | 'rowPinning'
  | 'size';

export interface UseDataGridStateOptions {
  /** Unique key for localStorage */
  stateStorageKey?: string;

  /** Which state keys to persist */
  persistedState?: DataGridPersistableState[];

  /** TanStack Table instance */
  table: ReactTable<DataGridFeatures, any>;

  /** Current size value (not part of TanStack state) */
  size?: MantineSize;

  /** Callback to restore size */
  onSizeRestore?: (size: MantineSize) => void;
}

function readPersistedState(key: string): Record<string, unknown> | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writePersistedState(key: string, state: Record<string, unknown>) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {
    // silently ignore
  }
}

export function useDataGridState(options: UseDataGridStateOptions) {
  const { stateStorageKey, persistedState, table, size, onSizeRestore } = options;
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restoredRef = useRef(false);

  useEffect(() => {
    if (!stateStorageKey || !persistedState || persistedState.length === 0 || restoredRef.current) {
      return;
    }

    restoredRef.current = true;
    const saved = readPersistedState(stateStorageKey);
    if (!saved) {
      return;
    }

    for (const key of persistedState) {
      if (key === 'size') {
        if (saved.size && onSizeRestore) {
          onSizeRestore(saved.size as MantineSize);
        }
        continue;
      }

      if (saved[key] !== undefined) {
        const setter = `set${key.charAt(0).toUpperCase()}${key.slice(1)}` as string;
        const tableSetter = (table as any)[setter];
        if (typeof tableSetter === 'function') {
          tableSetter(saved[key]);
        }
      }
    }
  }, [stateStorageKey, persistedState, table, onSizeRestore]);

  const persistState = useCallback(() => {
    if (!stateStorageKey || !persistedState || persistedState.length === 0) {
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const tableState = table.store.state;
      const toPersist: Record<string, unknown> = {};

      for (const key of persistedState) {
        if (key === 'size') {
          toPersist.size = size;
        } else {
          toPersist[key] = (tableState as any)[key];
        }
      }

      writePersistedState(stateStorageKey, toPersist);
    }, 300);
  }, [stateStorageKey, persistedState, table, size]);

  useEffect(() => {
    persistState();
  });

  useEffect(
    () => () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    },
    []
  );
}
