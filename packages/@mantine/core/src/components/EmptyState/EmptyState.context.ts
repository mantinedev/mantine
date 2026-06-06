import { createSafeContext, GetStylesApi } from '../../core';
import type { EmptyStateFactory } from './EmptyState';

interface EmptyStateContextValue {
  getStyles: GetStylesApi<EmptyStateFactory>;
  withIndicatorBackground: boolean | undefined;
}

export const [EmptyStateProvider, useEmptyStateContext] = createSafeContext<EmptyStateContextValue>(
  'EmptyState component was not found in tree'
);

export type { EmptyStateContextValue };
