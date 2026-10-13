import { useSyncExternalStore } from 'react';

export interface ManagedOverlayEntry<Props extends Record<string, any>> {
  id: string;
  opened: boolean;
  props: Props;
  overrides: Partial<Props> | null;
  onClose: () => void;
}

type Listener = () => void;

export interface ManagedOverlayStore<Props extends Record<string, any>> {
  setEntry: (entry: ManagedOverlayEntry<Props>) => void;
  removeEntry: (id: string) => void;
  registerExplicitOutlet: () => () => void;
  subscribeIds: (listener: Listener) => () => void;
  getIds: () => string[];
  subscribeEntry: (id: string, listener: Listener) => () => void;
  getEntry: (id: string) => ManagedOverlayEntry<Props> | undefined;
  subscribeOutlets: (listener: Listener) => () => void;
  getExplicitOutlets: () => number;
}

export function createManagedOverlayStore<
  Props extends Record<string, any>,
>(): ManagedOverlayStore<Props> {
  const entries = new Map<string, ManagedOverlayEntry<Props>>();
  const entryListeners = new Map<string, Set<Listener>>();
  const idsListeners = new Set<Listener>();
  const outletListeners = new Set<Listener>();
  let ids: string[] = [];
  let explicitOutlets = 0;

  const notifyIds = () => {
    ids = Array.from(entries.keys());
    idsListeners.forEach((listener) => listener());
  };

  return {
    setEntry(entry) {
      const isNew = !entries.has(entry.id);
      entries.set(entry.id, entry);

      if (isNew) {
        notifyIds();
      }

      entryListeners.get(entry.id)?.forEach((listener) => listener());
    },

    removeEntry(id) {
      if (entries.delete(id)) {
        notifyIds();
      }
    },

    registerExplicitOutlet() {
      explicitOutlets += 1;
      outletListeners.forEach((listener) => listener());

      return () => {
        explicitOutlets -= 1;
        outletListeners.forEach((listener) => listener());
      };
    },

    subscribeIds(listener) {
      idsListeners.add(listener);
      return () => idsListeners.delete(listener);
    },

    getIds: () => ids,

    subscribeEntry(id, listener) {
      const listeners = entryListeners.get(id) || new Set<Listener>();
      listeners.add(listener);
      entryListeners.set(id, listeners);

      return () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          entryListeners.delete(id);
        }
      };
    },

    getEntry: (id) => entries.get(id),

    subscribeOutlets(listener) {
      outletListeners.add(listener);
      return () => outletListeners.delete(listener);
    },

    getExplicitOutlets: () => explicitOutlets,
  };
}

export function useManagedOverlayIds(store: ManagedOverlayStore<any>) {
  return useSyncExternalStore(store.subscribeIds, store.getIds, store.getIds);
}

export function useManagedOverlayEntry<Props extends Record<string, any>>(
  store: ManagedOverlayStore<Props>,
  id: string
) {
  return useSyncExternalStore(
    (listener) => store.subscribeEntry(id, listener),
    () => store.getEntry(id),
    () => store.getEntry(id)
  );
}

export function useExplicitManagedOverlayOutlets(store: ManagedOverlayStore<any>) {
  return useSyncExternalStore(
    store.subscribeOutlets,
    store.getExplicitOutlets,
    store.getExplicitOutlets
  );
}
