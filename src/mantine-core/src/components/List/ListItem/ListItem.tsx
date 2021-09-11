import cx from 'clsx';
import React from 'react';
import { DefaultProps, mergeStyles, useMantineTheme, MantineNumberSize } from '../../../theme';
import useStyles from './ListItem.styles';

export type ListItemStylesNames = keyof ReturnType<typeof useStyles>;

export interface ListItemProps
  extends DefaultProps<ListItemStylesNames>,
    React.ComponentPropsWithoutRef<'li'> {
  /** Icon to replace bullet */
  icon?: React.ReactNode;

  /** Item content */
  children: React.ReactNode;

  /** Predefined spacing between items or number to set value in px */
  spacing?: MantineNumberSize;

  /** Center item content with icon */
  center?: boolean;
}

export function ListItem({
  className,
  style,
  children,
  icon,
  themeOverride,
  classNames,
  styles,
  spacing,
  center,
  ...others
}: ListItemProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, spacing, center }, classNames, 'list');
  const _styles = mergeStyles(classes, styles);

  return (
    <li
      className={cx(classes.item, { [classes.withIcon]: icon }, className)}
      style={{ ...style, ..._styles.item, ...(icon ? _styles.withIcon : null) }}
      {...others}
    >
      <div className={classes.itemWrapper} style={_styles.itemWrapper}>
        {icon && (
          <span className={classes.itemIcon} style={_styles.itemIcon}>
            {icon}
          </span>
        )}
        <span>{children}</span>
      </div>
    </li>
  );
}

ListItem.displayName = '@mantine/core/ListItem';
