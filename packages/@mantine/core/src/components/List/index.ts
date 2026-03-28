import type { ListCssVariables, ListFactory, ListProps, ListStylesNames } from './List';
import type { ListContextValue } from './List.context';
import type { ListItemFactory, ListItemProps, ListItemStylesNames } from './ListItem/ListItem';

export { List } from './List';
export { ListItem } from './ListItem/ListItem';
export { useListContext } from './List.context';

export type {
  ListProps,
  ListStylesNames,
  ListCssVariables,
  ListFactory,
  ListItemProps,
  ListItemStylesNames,
  ListItemFactory,
  ListContextValue,
};

export namespace List {
  export type Props = ListProps;
  export type StylesNames = ListStylesNames;
  export type CssVariables = ListCssVariables;
  export type Factory = ListFactory;

  export namespace Item {
    export type Props = ListItemProps;
    export type StylesNames = ListItemStylesNames;
    export type Factory = ListItemFactory;
  }
}
