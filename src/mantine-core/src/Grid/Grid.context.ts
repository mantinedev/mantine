import { createSafeContext } from '@mantine/utils';
import type { MantineNumberSize } from '@mantine/styles';

interface GridContextValue {
  gutter: MantineNumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createSafeContext<GridContextValue>(
  'Grid component was not found in tree'
);
