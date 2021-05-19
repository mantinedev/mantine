import { useRef } from 'react';
import { randomId } from '@mantine/utils';

export function useId(id?: string, generateId: () => string = randomId) {
  const generatedId = useRef(generateId());
  return id || generatedId.current;
}
