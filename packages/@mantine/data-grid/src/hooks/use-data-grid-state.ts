import { useCallback, useEffect, useRef } from 'react';
import { Table as ReactTable } from '@tanstack/react-table';
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
  | 'density';

export interface UseDataGridStateOptions {
  /** Unique key for localStorage */
  stateStorageKey?: string;

  /** Which state keys to persist */
  persistedState?: DataGridPersistableState[];

  /** TanStack Table instance */
  table: ReactTable<DataGridFeatures, any>;

  /** Current density value (not part of TanStack state) */
  density?: string;

  /** Callback to restore density */
  onDensityRestore?: (density: string) => void;
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
  const { stateStorageKey, persistedState, table, density, onDensityRestore } = options;
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
      if (key === 'density') {
        if (saved.density && onDensityRestore) {
          onDensityRestore(saved.density as string);
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
  }, [stateStorageKey, persistedState, table, onDensityRestore]);

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
        if (key === 'density') {
          toPersist.density = density;
        } else {
          toPersist[key] = (tableState as any)[key];
        }
      }

      writePersistedState(stateStorageKey, toPersist);
    }, 300);
  }, [stateStorageKey, persistedState, table, density]);

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
