import type { MantineNumberSize } from '@mantine/styles';
import { createUseContext } from '../../utils';

interface GridContextValue {
  gutter: MantineNumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createUseContext<GridContextValue>(null);
