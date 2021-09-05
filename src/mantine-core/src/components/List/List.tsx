import React, { Children } from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, mergeStyles, useMantineTheme } from '../../theme';
import { ListItem, ListItemProps, ListItemStylesNames } from './ListItem/ListItem';
import useStyles from './List.styles';

export { ListItem };
export type { ListItemProps };

export type ListStylesNames = ListItemStylesNames | keyof ReturnType<typeof useStyles>;

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
}

export function List({
  children,
  type = 'unordered',
  size = 'md',
  withPadding = false,
  spacing = 0,
  icon,
  className,
  style,
  styles,
  classNames,
  themeOverride,
  ...others
}: ListProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, withPadding, size }, classNames, 'list');
  const _styles = mergeStyles(classes, styles);
  const Element = type === 'unordered' ? 'ul' : 'ol';

  const items = Children.toArray(children)
    .filter((item: React.ReactElement) => item.type === ListItem)
    .map((item: React.ReactElement) =>
      React.cloneElement(item, {
        classNames,
        styles,
        spacing,
        icon: item.props?.icon || icon,
      })
    );

  return (
    <Element
      className={cx(classes.root, className)}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      {items}
    </Element>
  );
}

List.Item = ListItem;
List.displayName = '@mantine/core/List';
