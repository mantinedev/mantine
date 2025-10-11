import { createContext, use } from 'react';

export function createOptionalContext<ContextValue>(initialValue: ContextValue | null = null) {
  const Context = createContext<ContextValue | null>(initialValue);

  const useOptionalContext = () => use(Context);

  const Provider = ({ children, value }: { value: ContextValue; children: React.ReactNode }) => (
    <Context value={value}>{children}</Context>
  );

  return [Provider, useOptionalContext] as const;
}
