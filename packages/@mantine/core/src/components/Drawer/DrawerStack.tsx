import { useState } from 'react';
import { createOptionalContext, getDefaultZIndex } from '../../core';

interface DrawerStackContext {
  stack: string[];
  addModal: (id: string, zIndex: number | string) => void;
  removeModal: (id: string) => void;
  getZIndex: (id: string) => string;
  currentId: string;
  maxZIndex: string | number;
}

const [DrawerStackProvider, useDrawerStackContext] = createOptionalContext<DrawerStackContext>();

export { useDrawerStackContext };

export interface DrawerStackProps {
  children: React.ReactNode;
}

export function DrawerStack({ children }: DrawerStackProps) {
  const [stack, setStack] = useState<string[]>([]);
  const [maxZIndex, setMaxZIndex] = useState<number | string>(getDefaultZIndex('modal'));

  return (
    <DrawerStackProvider
      value={{
        stack,
        addModal: (id, zIndex) => {
          setStack((current) => [...new Set([...current, id])]);
          setMaxZIndex((current) =>
            typeof zIndex === 'number' && typeof current === 'number'
              ? Math.max(current, zIndex)
              : current
          );
        },
        removeModal: (id) => setStack((current) => current.filter((currentId) => currentId !== id)),
        getZIndex: (id) => `calc(${maxZIndex} + ${stack.indexOf(id)} + 1)`,
        currentId: stack[stack.length - 1],
        maxZIndex,
      }}
    >
      {children}
    </DrawerStackProvider>
  );
}

DrawerStack.displayName = '@mantine/core/DrawerStack';
