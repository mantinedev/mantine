import { createSafeContext } from '@mantine/utils';
import { MantineNumberSize } from '@mantine/styles';

interface ListContextValue {
  spacing?: MantineNumberSize;
  center?: boolean;
  icon?: React.ReactNode;
  listStyleType?: string;
  withPadding?: boolean;
  size?: MantineNumberSize;
}

export const [ListProvider, useListContext] = createSafeContext<ListContextValue>(
  'List component was not found in tree'
);
