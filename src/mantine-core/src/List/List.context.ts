import { createContext, useContext } from 'react';
import { MantineNumberSize } from '@mantine/styles';

interface ListContextValue {
  spacing?: MantineNumberSize;
  center?: boolean;
  icon?: React.ReactNode;
  listStyleType?: string;
  withPadding?: boolean;
  size?: MantineNumberSize;
}

export const ListContext = createContext<ListContextValue>(null);

export function useListContext(): ListContextValue {
  return useContext(ListContext) || {};
}
