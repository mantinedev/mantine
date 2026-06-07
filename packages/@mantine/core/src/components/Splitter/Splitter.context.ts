import { createSafeContext, GetStylesApi } from '../../core';
import type { SplitterFactory } from './Splitter';

export interface SplitterContextValue {
  getStyles: GetStylesApi<SplitterFactory>;
  sizes: number[];
  collapsed: boolean[];
  orientation: 'horizontal' | 'vertical';
}

export const [SplitterProvider, useSplitterContext] = createSafeContext<SplitterContextValue>(
  'Splitter component was not found in the tree'
);
