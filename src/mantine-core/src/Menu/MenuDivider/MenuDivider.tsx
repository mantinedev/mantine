import React, { forwardRef } from 'react';
import {
  DefaultProps,
  Selectors,
  useContextStylesApi,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './MenuDivider.styles';

export type MenuDividerStylesNames = Selectors<typeof useStyles>;

export interface MenuDividerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

const defaultProps: Partial<MenuDividerProps> = {};

export const MenuDivider = forwardRef<HTMLDivElement, MenuDividerProps>((props, ref) => {
  const { children, className, ...others } = useComponentDefaultProps(
    'MenuDivider',
    defaultProps,
    props
  );

  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx } = useStyles(null, { name: 'Menu', classNames, styles, unstyled });
  return <Box className={cx(classes.divider, className)} ref={ref} {...others} />;
});

MenuDivider.displayName = '@mantine/core/MenuDivider';
