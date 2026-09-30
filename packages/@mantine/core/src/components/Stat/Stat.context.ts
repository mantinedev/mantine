import { createSafeContext, GetStylesApi } from '../../core';
import type { StatFactory } from './StatBase';

interface StatContextValue {
  getStyles: GetStylesApi<StatFactory>;
  unstyled: boolean | undefined;
}

export const [StatProvider, useStatContext] = createSafeContext<StatContextValue>(
  'Stat component was not found in tree'
);

export type { StatContextValue };
