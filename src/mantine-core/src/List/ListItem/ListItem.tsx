import React from 'react';
import { DefaultProps, Selectors, useContextStylesApi } from '@mantine/styles';
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
  const { icon: ctxIcon, spacing, center } = useListContext();
  const { classNames, styles, unstyled } = useContextStylesApi();
  const _icon = icon || ctxIcon;
  const { classes, cx } = useStyles(
    { spacing, center },
    { classNames, styles, unstyled, name: 'List' }
  );

  return (
    <Box
      component="li"
      className={cx(classes.item, { [classes.withIcon]: _icon }, className)}
      {...others}
    >
      <div className={classes.itemWrapper}>
        {_icon && <span className={classes.itemIcon}>{_icon}</span>}
        {children}
      </div>
    </Box>
  );
}

ListItem.displayName = '@mantine/core/ListItem';
