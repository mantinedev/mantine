import { createContext, useContext } from 'react';

export const DirectionContext = createContext<'rtl' | 'ltr'>('rtl');

export function useGalleryDirection() {
  return useContext(DirectionContext);
}
