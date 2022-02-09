import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  ClassNames,
  ForwardRefWithStaticComponents,
} from '@mantine/styles';
import { filterChildrenByType } from '../../utils';
import { Box } from '../Box';
import { ListItem, ListItemStylesNames } from './ListItem/ListItem';
import useStyles from './List.styles';

export type ListStylesNames = ListItemStylesNames | ClassNames<typeof useStyles>;

export interface ListProps
  extends DefaultProps<ListStylesNames>,
    React.ComponentPropsWithoutRef<'ul'> {
  /** <List.Item /> components only */
  children: React.ReactNode;

  /** List type: ol or ul */
  type?: 'order' | 'unordered';

  /** Include padding-left to offset list from main content */
  withPadding?: boolean;

  /** Font size from theme or number to set value in px */
  size?: MantineNumberSize;

  /** Icon that should replace list item dot */
  icon?: React.ReactNode;

  /** Spacing between items from theme or number to set value in px */
  spacing?: MantineNumberSize;

  /** Center items with icon */
  center?: boolean;

  /** List style */
  listStyleType?: React.CSSProperties['listStyleType'];
}

type ListComponent = ForwardRefWithStaticComponents<ListProps, { Item: typeof ListItem }>;

export const List: ListComponent = forwardRef<HTMLUListElement, ListProps>(
  (
    {
      children,
      type = 'unordered',
      size = 'md',
      listStyleType,
      withPadding = false,
      center = false,
      spacing = 0,
      icon,
      className,
      styles,
      classNames,
      ...others
    }: ListProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { withPadding, size, listStyleType },
      { classNames, styles, name: 'List' }
    );

    const items = filterChildrenByType(children, ListItem).map((item) =>
      React.cloneElement(item, {
        classNames,
        styles,
        spacing,
        center,
        icon: item.props?.icon || icon,
      })
    );

    return (
      <Box<any>
        component={type === 'unordered' ? 'ul' : 'ol'}
        className={cx(classes.root, className)}
        ref={ref}
        {...others}
      >
        {items}
      </Box>
    );
  }
) as any;

List.Item = ListItem;
List.displayName = '@mantine/core/List';
