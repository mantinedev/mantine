import { createContext, useContext } from 'react';

export const SurfaceDepthContext = createContext<number>(0);

export function useSurfaceDepth(): number {
  return useContext(SurfaceDepthContext);
}
