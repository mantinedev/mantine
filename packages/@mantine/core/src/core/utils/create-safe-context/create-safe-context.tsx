import { createContext, useContext } from 'react';
import { useMemoObject } from '../use-memo-object/use-memo-object';

export function createSafeContext<ContextValue>(errorMessage: string) {
  const Context = createContext<ContextValue | null>(null);

  const useSafeContext = () => {
    const ctx = useContext(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  const Provider = ({ children, value }: { value: ContextValue; children: React.ReactNode }) => {
    const memoizedValue = useMemoObject(value);
    return <Context.Provider value={memoizedValue}>{children}</Context.Provider>;
  };

  return [Provider, useSafeContext] as const;
}
