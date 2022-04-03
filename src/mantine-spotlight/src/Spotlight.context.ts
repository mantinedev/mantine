import { createContext, useContext } from 'react';
import type { SpotlightAction } from './types';

export interface SpotlightContextValue {
  /** Opens spotlight */
  openSpotlight(): void;

  /** Closes spotlight */
  closeSpotlight(): void;

  /** Toggles spotlight opened state */
  toggleSpotlight(): void;

  /** Triggers action with given id */
  triggerAction(actionId: string): void;

  /** Registers additional actions */
  registerActions(actions: SpotlightAction[]): void;

  /** Removes actions with given ids */
  removeActions(actionIds: string[]): void;

  /** Current opened state */
  opened: boolean;

  /** List of registered actions */
  actions: SpotlightAction[];

  /** Search query */
  query: string;
}

export const SpotlightContext = createContext<SpotlightContextValue>(null);

export function useSpotlight() {
  const ctx = useContext(SpotlightContext);

  if (!ctx) {
    throw new Error('[@mantine/spotlight] SpotlightProvider was not found in tree');
  }

  return ctx;
}
