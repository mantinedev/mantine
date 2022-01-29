import React from 'react';
import { DefaultProps, MantineNumberSize, ClassNames } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './ListItem.styles';

export type ListItemStylesNames = ClassNames<typeof useStyles>;

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
  children,
  icon,
  classNames,
  styles,
  spacing,
  center,
  ...others
}: ListItemProps) {
  const { classes, cx } = useStyles({ spacing, center }, { classNames, styles, name: 'List' });

  return (
    <Box
      component="li"
      className={cx(classes.item, { [classes.withIcon]: icon }, className)}
      {...others}
    >
      <div className={classes.itemWrapper}>
        {icon && <span className={classes.itemIcon}>{icon}</span>}
        <span>{children}</span>
      </div>
    </Box>
  );
}

ListItem.displayName = '@mantine/core/ListItem';
