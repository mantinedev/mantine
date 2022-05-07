import React from 'react';
import { DefaultProps, Selectors } from '@mantine/styles';
import { Box } from '../../Box';
import { useListContext } from '../List.context';
import useStyles from './ListItem.styles';

export type ListItemStylesNames = Selectors<typeof useStyles>;

export interface ListItemProps
  extends DefaultProps<ListItemStylesNames>,
    React.ComponentPropsWithoutRef<'li'> {
  /** Icon to replace bullet */
  icon?: React.ReactNode;

  /** Item content */
  children: React.ReactNode;
}

export function ListItem({ className, children, icon, ...others }: ListItemProps) {
  const { classNames, styles, icon: ctxIcon, spacing, center } = useListContext();
  const _icon = icon || ctxIcon;
  const { classes, cx } = useStyles({ spacing, center }, { classNames, styles, name: 'List' });

  return (
    <Box
      component="li"
      className={cx(classes.item, { [classes.withIcon]: _icon }, className)}
      {...others}
    >
      <div className={classes.itemWrapper}>
        {_icon && <span className={classes.itemIcon}>{_icon}</span>}
        <span>{children}</span>
      </div>
    </Box>
  );
}

ListItem.displayName = '@mantine/core/ListItem';
