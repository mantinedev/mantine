import { createSafeContext, GetStylesApi, StyleProp } from '../../core';
import type { GridFactory } from './Grid';

interface GridContextValue {
  getStyles: GetStylesApi<GridFactory>;
  grow: boolean | undefined;
  columns: StyleProp<number>;
}

export const [GridProvider, useGridContext] = createSafeContext<GridContextValue>(
  'Grid component was not found in tree'
);
