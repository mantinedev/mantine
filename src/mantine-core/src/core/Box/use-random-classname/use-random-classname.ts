import { useId } from 'react';

export function useRandomClassName() {
  const id = useId().replace(/:/g, '');
  return `__m__-${id}`;
}
