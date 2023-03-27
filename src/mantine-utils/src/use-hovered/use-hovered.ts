import { useState } from 'react';

export function useHovered() {
  const [hovered, setHovered] = useState(-1);
  const resetHovered = () => setHovered(-1);
  return [hovered, { setHovered, resetHovered }] as const;
}
