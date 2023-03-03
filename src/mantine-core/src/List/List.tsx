import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { Box } from '../Box';
import { ListItem, ListItemStylesNames } from './ListItem/ListItem';
import { ListProvider } from './List.context';
import useStyles from './List.styles';

export type ListStylesNames = ListItemStylesNames | Selectors<typeof useStyles>;

export interface ListProps
  extends DefaultProps<ListStylesNames>,
    Omit<React.ComponentPropsWithRef<'ol'>, 'type'> {
  variant?: string;

  /** <List.Item /> components only */
  children: React.ReactNode;

  /** List type: ol or ul */
  type?: 'ordered' | 'unordered';

  /** Include padding-left to offset list from main content */
  withPadding?: boolean;

  /** Font size from theme or number to set value */
  size?: MantineNumberSize;

  /** Icon that should replace list item dot */
  icon?: React.ReactNode;

  /** Spacing between items from theme or number to set value */
  spacing?: MantineNumberSize;

  /** Center items with icon */
  center?: boolean;

  /** List style */
  listStyleType?: React.CSSProperties['listStyleType'];
}

type ListComponent = ForwardRefWithStaticComponents<ListProps, { Item: typeof ListItem }>;

const defaultProps: Partial<ListProps> = {
  type: 'unordered',
  size: 'md',
  spacing: 0,
};

export const List: ListComponent = forwardRef<HTMLUListElement, ListProps>(
  (props: ListProps, ref) => {
    const {
      children,
      type,
      size,
      listStyleType,
      withPadding,
      center,
      spacing,
      icon,
      className,
      styles,
      classNames,
      unstyled,
      variant,
      ...others
    } = useComponentDefaultProps('List', defaultProps, props);

    const { classes, cx } = useStyles(
      { withPadding, listStyleType, center, spacing },
      { classNames, styles, name: 'List', unstyled, size, variant }
    );

    return (
      <ListProvider
        value={{
          spacing,
          center,
          icon,
          listStyleType,
          size,
          withPadding,
          classNames,
          styles,
          unstyled,
          variant,
        }}
      >
        <Box<any>
          component={type === 'unordered' ? 'ul' : 'ol'}
          className={cx(classes.root, className)}
          ref={ref}
          {...others}
        >
          {children}
        </Box>
      </ListProvider>
    );
  }
) as any;

List.Item = ListItem;
List.displayName = '@mantine/core/List';
