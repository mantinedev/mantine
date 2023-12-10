import { createSafeContext, GetStylesApi } from '@mantine/core';
import { SpotlightStore } from './spotlight.store';
import type { SpotlightRootFactory } from './SpotlightRoot';

interface SpotlightContextValue {
  query: string;
  setQuery: (query: string) => void;
  getStyles: GetStylesApi<SpotlightRootFactory>;
  store: SpotlightStore;
  closeOnActionTrigger: boolean | undefined;
}

export const [SpotlightProvider, useSpotlightContext] = createSafeContext<SpotlightContextValue>(
  'Spotlight component was not found in tree'
);
