import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  ClassNames,
  ForwardRefWithStaticComponents,
  useMantineDefaultProps,
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
  type?: 'ordered' | 'unordered';

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
      ...others
    } = useMantineDefaultProps('List', defaultProps, props);

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
