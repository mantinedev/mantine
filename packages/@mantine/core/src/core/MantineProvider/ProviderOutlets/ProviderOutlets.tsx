import { createContext, Fragment, use, useState, useSyncExternalStore } from 'react';

export interface ProviderOutletsScope {
  outlets: [string, React.ReactNode][];
  listeners: Set<() => void>;
  stores: Map<string, unknown>;
}

export const ProviderOutletsContext = createContext<ProviderOutletsScope | null>(null);

export function createProviderOutletsScope(): ProviderOutletsScope {
  return { outlets: [], listeners: new Set(), stores: new Map() };
}

export function useProviderOutletsScope() {
  const scope = use(ProviderOutletsContext);

  if (!scope) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return scope;
}

export function useProviderOutletStore<T>(key: string, create: () => T): T {
  const scope = useProviderOutletsScope();

  if (!scope.stores.has(key)) {
    scope.stores.set(key, create());
  }

  return scope.stores.get(key) as T;
}

export function registerProviderOutlet(
  scope: ProviderOutletsScope,
  key: string,
  element: React.ReactNode
) {
  if (scope.outlets.some(([outletKey]) => outletKey === key)) {
    return;
  }

  scope.outlets = [...scope.outlets, [key, element]];
  scope.listeners.forEach((listener) => listener());
}

export function useProviderOutletsScopeValue() {
  const parent = use(ProviderOutletsContext);
  const [own] = useState(createProviderOutletsScope);
  return parent || own;
}

export function ProviderOutlets() {
  const scope = useProviderOutletsScope();
  const registered = useSyncExternalStore(
    (listener) => {
      scope.listeners.add(listener);
      return () => scope.listeners.delete(listener);
    },
    () => scope.outlets,
    () => scope.outlets
  );

  return (
    <>
      {registered.map(([key, element]) => (
        <Fragment key={key}>{element}</Fragment>
      ))}
    </>
  );
}

ProviderOutlets.displayName = '@mantine/core/ProviderOutlets';
