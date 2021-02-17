import { useRef } from 'react';
import { nanoid } from 'nanoid';

export function useId(id: string) {
  const generatedId = useRef(`mantine-${nanoid()}`);
  return id || generatedId.current;
}
