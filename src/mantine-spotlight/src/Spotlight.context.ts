import { createContext, useContext } from 'react';
import type { SpotlightAction } from './types';

export interface SpotlightContextProps {
  /** Opens spotlight */
  openSpotlight(): void;

  /** Closes spotlight */
  closeSpotlight(): void;

  /** Toggles spotlight opened state */
  toggleSpotlight(): void;

  /** Triggers action with given id */
  triggerAction(actionId: string): void;

  /** Registers additional actions */
  registerActions(action: SpotlightAction[]): void;

  /** Removes actions with given ids */
  removeActions(actionIds: string[]): void;

  /** Current opened state */
  opened: boolean;

  /** List of registered actions */
  actions: SpotlightAction[];
}

export const SpotlightContext = createContext<SpotlightContextProps>(null);

export function useSpotlight() {
  const ctx = useContext(SpotlightContext);

  if (!ctx) {
    throw new Error('[@mantine/spotlight] SpotlightProvider was not found in tree');
  }

  return ctx;
}
