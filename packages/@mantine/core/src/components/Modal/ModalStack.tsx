import { createContext, useState } from 'react';
import { getDefaultZIndex } from '../../core';

interface ModalStackContext {
  stack: string[];
  addModal: (id: string, zIndex: number | string) => void;
  removeModal: (id: string) => void;
  getZIndex: (id: string) => string;
  currentId: string;
  maxZIndex: string | number;
  handledEscapeEvents: WeakSet<KeyboardEvent>;
}

export const ModalStackContext = createContext<ModalStackContext | null>(null);

export interface ModalStackProps {
  children: React.ReactNode;
}

export function ModalStack({ children }: ModalStackProps) {
  const [stack, setStack] = useState<string[]>([]);
  const [maxZIndex, setMaxZIndex] = useState<number | string>(getDefaultZIndex('modal'));
  const [handledEscapeEvents] = useState(() => new WeakSet<KeyboardEvent>());

  return (
    <ModalStackContext
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
        handledEscapeEvents,
      }}
    >
      {children}
    </ModalStackContext>
  );
}

ModalStack.displayName = '@mantine/core/ModalStack';
