import { createContext, useContext } from 'react';
import type { SpotlightAction } from './types';

export interface SpotlightContext {
  openSpotlight(): void;
  closeSpotlight(): void;
  triggerAction(): void;
  registerAction(action: SpotlightAction): void;
  opened: boolean;
  actions: SpotlightAction[];
}

export const SpotlightContext = createContext<SpotlightContext>(null);

export function useSpotlight() {
  const ctx = useContext(SpotlightContext);

  if (!ctx) {
    throw new Error('[@mantine/spotlight] SpotlightProvider was not found in tree');
  }

  return ctx;
}
