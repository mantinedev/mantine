import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/styles';
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

  const {
    icon: ctxIcon,
    spacing,
    center,
    listStyleType,
    size,
    withPadding,
    classNames,
    styles,
    unstyled,
    variant,
  } = useListContext();

  const _icon = icon || ctxIcon;
  const { classes, cx } = useStyles(
    { withPadding, listStyleType, center, spacing },
    { classNames, styles, unstyled, name: 'List', variant, size }
  );

  return (
    <Box
      component="li"
      className={cx(classes.item, className)}
      data-with-icon={!!_icon || undefined}
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
