import React, { useState, useContext, createContext } from 'react';
import { useClickOutside } from '@mantine/hooks';

interface ClickOutsideContext {
  registerNode(key: string, node: HTMLElement): void;
}

export const clickOutsideContext = createContext<ClickOutsideContext>(null);

export function useClickOutsideRegister() {
  const ctx = useContext(clickOutsideContext);
  if (!ctx || !('registerNode' in ctx)) {
    return () => {};
  }

  return ctx.registerNode;
}

interface ClickOutsideProviderProps {
  children: React.ReactNode;
  componentNodes: HTMLElement[];
  onClickOutside(): void;
}

export function ClickOutsideProvider({
  children,
  componentNodes,
  onClickOutside,
}: ClickOutsideProviderProps) {
  const [nodes, setNodes] = useState<Record<string, HTMLElement>>({});
  const registeredNodes = [...Object.values(nodes), ...componentNodes].filter((node) => !!node);

  const registerNode = (key: string, node: HTMLElement) => {
    setNodes((current) => ({ ...current, [key]: node }));
  };

  useClickOutside(onClickOutside, null, registeredNodes);

  return (
    <clickOutsideContext.Provider value={{ registerNode }}>{children}</clickOutsideContext.Provider>
  );
}
