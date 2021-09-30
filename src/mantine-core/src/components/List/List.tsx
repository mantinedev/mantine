import React, { Children } from 'react';
import {
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
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

export function List({
  children,
  type = 'unordered',
  size = 'md',
  listStyleType,
  withPadding = false,
  center = false,
  spacing = 0,
  icon,
  className,
  style,
  styles,
  classNames,
  ...others
}: ListProps) {
  const { classes, cx } = useStyles({ withPadding, size, listStyleType }, classNames, 'list');
  const _styles = mergeStyles(classes, styles);
  const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });
  const Element = type === 'unordered' ? 'ul' : 'ol';

  const items = Children.toArray(children)
    .filter((item: React.ReactElement) => item.type === ListItem)
    .map((item: React.ReactElement) =>
      React.cloneElement(item, {
        classNames,
        styles,
        spacing,
        center,
        icon: item.props?.icon || icon,
      })
    );

  return (
    <Element className={cx(classes.root, className)} style={mergedStyles} {...rest}>
      {items}
    </Element>
  );
}

List.Item = ListItem;
List.displayName = '@mantine/core/List';
