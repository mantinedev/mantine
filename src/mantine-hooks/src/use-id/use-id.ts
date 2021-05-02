import { useRef } from 'react';

export function randomId() {
  return `mantine-${Math.random().toString(36).substr(2, 9)}`;
}

export function useId(id?: string, generateId: () => string = randomId) {
  const generatedId = useRef(generateId());
  return id || generatedId.current;
}
