import { createContext, useContext } from 'react';

export function createUseContext<T>(defaultValue: T) {
  const Context = createContext<T>(defaultValue);

  function useContextConsumer(component: `${string}.${string}`) {
    const ctx = useContext(Context);
    const [parentName] = component.split('.');

    if (!ctx) {
      throw new Error(
        `${component} component was rendered outside of ${parentName} component context`
      );
    }

    return ctx;
  }

  return [Context.Provider, useContextConsumer] as const;
}
