import { createContext, useCallback, useContext, useState } from 'react';
import { useIsomorphicEffect, useMutationObserver } from '@mantine/hooks';

export type Direction = 'ltr' | 'rtl';

export interface DirectionContextValue {
  dir: Direction;
  toggleDirection: () => void;
  setDirection: (dir: Direction) => void;
}

export const DirectionContext = createContext<DirectionContextValue>({
  dir: 'ltr',
  toggleDirection: () => {},
  setDirection: () => {},
});

export function useDirection() {
  return useContext(DirectionContext);
}

export interface DirectionProviderProps {
  /** Your application */
  children: React.ReactNode;

  /** Direction set as a default value, `ltr` by default */
  initialDirection?: Direction;

  /** Determines whether direction should be updated on mount based on `dir` attribute set on root element (usually html element) @default `true`  */
  detectDirection?: boolean;
}

export function DirectionProvider({
  children,
  initialDirection = 'ltr',
  detectDirection = true,
}: DirectionProviderProps) {
  const [dir, setDir] = useState<Direction>(initialDirection);

  const setDirection = useCallback((direction: Direction) => {
    setDir(direction);
    if (document.documentElement.getAttribute('dir') !== direction) {
      document.documentElement.setAttribute('dir', direction);
    }
  }, []);

  const toggleDirection = () => setDirection(dir === 'ltr' ? 'rtl' : 'ltr');

  useIsomorphicEffect(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute('dir');
      if (direction === 'rtl' || direction === 'ltr') {
        setDir(direction);
      }
    }
  }, []);

  const mutationCallback = useCallback<MutationCallback>(() => {
    if (typeof document === 'undefined') {
      return;
    }
    const direction = document.documentElement.getAttribute('dir');
    if (direction === 'rtl' || direction === 'ltr') {
      setDir((prev) => (prev !== direction ? (direction as Direction) : prev));
    }
  }, []);

  useMutationObserver(
    mutationCallback,
    detectDirection ? { attributes: true, attributeFilter: ['dir'] } : {},
    typeof document !== 'undefined' && detectDirection ? document.documentElement : null
  );

  return (
    <DirectionContext.Provider value={{ dir, toggleDirection, setDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}
