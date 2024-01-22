import { createSafeContext, GetStylesApi } from '../../core';
import type { ProgressRootFactory } from './ProgressRoot/ProgressRoot';

interface ProgressContextValue {
  getStyles: GetStylesApi<ProgressRootFactory>;
  autoContrast: boolean | undefined;
}

export const [ProgressProvider, useProgressContext] = createSafeContext<ProgressContextValue>(
  'Progress.Root component was not found in tree'
);
