import { useState } from 'react';
import { createOptionalContext } from '../../core';

interface ModalStackContext {
  stack: string[];
  addModal: (id: string) => void;
  removeModal: (id: string) => void;
  getZIndex: (id: string) => number;
  currentId: string;
}

const [ModalStackProvider, useModalStackContext] = createOptionalContext<ModalStackContext>();

export { useModalStackContext };

interface ModalStackProps {
  children: React.ReactNode;
}

export function ModalStack({ children }: ModalStackProps) {
  const [stack, setStack] = useState<string[]>([]);

  return (
    <ModalStackProvider
      value={{
        stack,
        addModal: (id) => setStack((current) => [...new Set([...current, id])]),
        removeModal: (id) => setStack((current) => current.filter((currentId) => currentId !== id)),
        getZIndex: (id) => stack.indexOf(id) + 1,
        currentId: stack[stack.length - 1],
      }}
    >
      {children}
    </ModalStackProvider>
  );
}

ModalStack.displayName = '@mantine/core/ModalStack';
