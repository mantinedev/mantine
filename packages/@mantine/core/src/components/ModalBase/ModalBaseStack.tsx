import { useState } from 'react';
import { createOptionalContext, getDefaultZIndex } from '../../core';

export interface ModalStackContextValue {
  stack: string[];
  addModal: (id: string, zIndex: number | string) => void;
  removeModal: (id: string) => void;
  getZIndex: (id: string) => string;
  currentId: string;
  maxZIndex: string | number;
}

const [ModalBaseStackProvider, useModalBaseStackContext] =
  createOptionalContext<ModalStackContextValue>();

export interface ModalStackProps {
  children: React.ReactNode;
}

function ModalBaseStack({ children }: ModalStackProps) {
  const [stack, setStack] = useState<string[]>([]);
  const [maxZIndex, setMaxZIndex] = useState<number | string>(getDefaultZIndex('modal'));

  return (
    <ModalBaseStackProvider
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
    </ModalBaseStackProvider>
  );
}

ModalBaseStack.displayName = '@mantine/core/ModalStack';

export { ModalBaseStack, useModalBaseStackContext };
