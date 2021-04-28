import { useRef } from 'react';

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function useId(id?: string, generateId: (size: number) => string = randomId) {
  const generatedId = useRef(`mantine-${generateId(5)}`);
  return id || generatedId.current;
}
