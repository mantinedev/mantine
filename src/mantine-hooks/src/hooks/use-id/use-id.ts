import { useRef } from 'react';
import { nanoid } from 'nanoid';

export function useId(id?: string, generateId: (size: number) => string = nanoid) {
  const generatedId = useRef(`mantine-${generateId(5)}`);
  return id || generatedId.current;
}
