import { useCallback, useEffect, useRef } from 'react';
import type { MantineSize } from '@mantine/core';
import { useLatestRef, useShallowEffect } from '@mantine/hooks';
import type { DataGridStore } from './use-data-grid.types';

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

  /** Store returned by `useDataGrid` */
  store: DataGridStore<any>;
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
  } catch {}
}

export function useDataGridState(options: UseDataGridStateOptions) {
  const { stateStorageKey, persistedState, store } = options;
  const pendingWriteRef = useRef<{
    timeout: ReturnType<typeof setTimeout>;
    write: () => void;
  } | null>(null);
  const restoredRef = useRef<{
    key: string;
    tableStore: DataGridStore<any>['table']['store'];
    fields: DataGridPersistableState[];
  } | null>(null);
  const preRestoreValuesRef = useRef<unknown[] | null>(null);
  const storeRef = useLatestRef(store);
  const tableStore = store.table.store;
  const tableState = tableStore.state as unknown as Record<string, unknown>;
  const persistedValues = (persistedState ?? []).map((key) =>
    key === 'size' ? store.size : key === 'columnOrder' ? store.columnOrder : tableState[key]
  );

  const flushPendingWrite = useCallback(() => {
    const pending = pendingWriteRef.current;
    if (pending) {
      pendingWriteRef.current = null;
      clearTimeout(pending.timeout);
      pending.write();
    }
  }, []);

  const cancelPendingWrite = useCallback(() => {
    const pending = pendingWriteRef.current;
    if (pending) {
      pendingWriteRef.current = null;
      clearTimeout(pending.timeout);
    }
  }, []);

  const persistenceEnabled = !!stateStorageKey && !!persistedState && persistedState.length > 0;
  const persistenceEnabledRef = useLatestRef(persistenceEnabled);

  useEffect(
    () => () => {
      if (persistenceEnabledRef.current) {
        flushPendingWrite();
      } else {
        cancelPendingWrite();
      }
    },
    [stateStorageKey, tableStore, persistenceEnabled, flushPendingWrite, cancelPendingWrite]
  );

  useEffect(() => {
    if (!persistenceEnabled) {
      restoredRef.current = null;
      return;
    }

    const previous = restoredRef.current;
    const fieldsToRestore =
      previous?.key === stateStorageKey && previous.tableStore === tableStore
        ? persistedState.filter((key) => !previous.fields.includes(key))
        : persistedState;
    restoredRef.current = { key: stateStorageKey, tableStore, fields: [...persistedState] };
    if (fieldsToRestore.length === 0) {
      return;
    }

    const saved = readPersistedState(stateStorageKey);
    if (!saved) {
      return;
    }

    preRestoreValuesRef.current = persistedValues;
    for (const key of fieldsToRestore) {
      if (key === 'size') {
        if (saved.size) {
          storeRef.current.setSize(saved.size as MantineSize);
        }
        continue;
      }

      if (saved[key] !== undefined) {
        const setter = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
        const tableSetter = (storeRef.current.table as any)[setter];
        if (typeof tableSetter === 'function') {
          tableSetter(saved[key]);
        }
      }
    }
  }, [stateStorageKey, tableStore, persistedState]);

  useShallowEffect(() => {
    if (!persistenceEnabled) {
      return;
    }

    const preRestoreValues = preRestoreValuesRef.current;
    if (preRestoreValues) {
      if (
        preRestoreValues.length === persistedValues.length &&
        preRestoreValues.every((value, index) => value === persistedValues[index])
      ) {
        return;
      }
      preRestoreValuesRef.current = null;
    }

    cancelPendingWrite();

    const toPersist: Record<string, unknown> = {};
    persistedState.forEach((key, index) => {
      toPersist[key] = persistedValues[index];
    });

    const write = () => writePersistedState(stateStorageKey, toPersist);

    pendingWriteRef.current = {
      write,
      timeout: setTimeout(() => {
        pendingWriteRef.current = null;
        write();
      }, 300),
    };
  }, [stateStorageKey, tableStore, persistedState, persistedValues, cancelPendingWrite]);
}
