import { createContext, useContext } from 'react';

export const SurfaceDepthContext = createContext<number | null>(null);

export function useSurfaceDepth(): number {
  return useContext(SurfaceDepthContext) ?? 0;
}
