import React, { createContext, useContext } from 'react';

function randomId() {
  return `mantine-${Math.random().toString(36).substr(2, 9)}`;
}

const UuidContext = createContext<() => string>(() => randomId());

export const useUuid = (staticId?: string) => {
  const generateId = useContext(UuidContext);
  return staticId || generateId();
};

interface SsrProviderProps {
  children: React.ReactNode;
}

export function SsrProvider({ children }: SsrProviderProps) {
  let id = 0;

  const generateId = () => {
    id += 1;
    return `mantine-${id}`;
  };

  return <UuidContext.Provider value={generateId}>{children}</UuidContext.Provider>;
}
