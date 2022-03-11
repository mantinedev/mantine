import { createContext, useContext } from 'react';
import { CSSObject, MantineNumberSize, MantineTheme } from '@mantine/styles';
import type { ListItemStylesNames } from './ListItem/ListItem';

interface ListContextValue {
  classNames?: Partial<Record<ListItemStylesNames, string>>;
  styles?:
    | Partial<Record<ListItemStylesNames, CSSObject>>
    | ((theme: MantineTheme) => Partial<Record<ListItemStylesNames, CSSObject>>);
  spacing?: MantineNumberSize;
  center?: boolean;
  icon?: React.ReactNode;
}

export const ListContext = createContext<ListContextValue>(null);

export function useListContext(): ListContextValue {
  return useContext(ListContext) || {};
}
