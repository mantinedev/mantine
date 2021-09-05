import cx from 'clsx';
import React from 'react';
import { DefaultProps, mergeStyles, useMantineTheme, MantineNumberSize } from '../../../theme';
import useStyles from './ListItem.styles';

export type ListItemStylesName = keyof ReturnType<typeof useStyles>;

export interface ListItemProps
  extends DefaultProps<ListItemStylesName>,
    React.ComponentPropsWithoutRef<'li'> {
  icon?: React.ReactNode;
  children: React.ReactNode;

  /** Predefined spacing between items or number to set value in px */
  spacing?: MantineNumberSize;
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
  ...others
}: ListItemProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, spacing }, classNames, 'list');
  const _styles = mergeStyles(classes, styles);

  return (
    <li
      className={cx(classes.item, { [classes.withIcon]: icon }, className)}
      style={{ ...style, ..._styles.item }}
      {...others}
    >
      <div className={classes.itemWrapper}>
        {icon && (
          <span className={classes.icon} style={_styles.icon}>
            {icon}
          </span>
        )}
        <span>{children}</span>
      </div>
    </li>
  );
}

ListItem.displayName = '@mantine/core/ListItem';
