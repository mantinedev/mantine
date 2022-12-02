import React, { forwardRef } from 'react';
import {
  DefaultProps,
  Selectors,
  useComponentDefaultProps,
  useContextStylesApi,
} from '@mantine/styles';
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

const defaultProps: Partial<ListItemProps> = {};

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { className, children, icon, ...others } = useComponentDefaultProps(
    'ListItem',
    defaultProps,
    props
  );

  const { icon: ctxIcon, spacing, center, listStyleType, size, withPadding } = useListContext();
  const { classNames, styles, unstyled } = useContextStylesApi();
  const _icon = icon || ctxIcon;
  const { classes, cx } = useStyles(
    { withPadding, size, listStyleType, center, spacing },
    { classNames, styles, unstyled, name: 'List' }
  );

  return (
    <Box
      component="li"
      className={cx(classes.item, { [classes.withIcon]: _icon }, className)}
      ref={ref}
      {...others}
    >
      <div className={classes.itemWrapper}>
        {_icon && <span className={classes.itemIcon}>{_icon}</span>}
        <span>{children}</span>
      </div>
    </Box>
  );
});

ListItem.displayName = '@mantine/core/ListItem';
