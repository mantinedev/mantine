import { createContext, use } from 'react';

export function createSafeContext<ContextValue>(errorMessage: string) {
  const Context = createContext<ContextValue | null>(null);

  const useSafeContext = () => {
    const ctx = use(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  return [Context, useSafeContext] as const;
}
