import React from 'react';
import { DefaultProps, Selectors, useContextStylesApi } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './MenuDivider.styles';

export type MenuDividerStylesNames = Selectors<typeof useStyles>;

export interface MenuDividerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function MenuDivider({ children, className, ...others }: MenuDividerProps) {
  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx } = useStyles(null, { name: 'Menu', classNames, styles, unstyled });
  return <Box className={cx(classes.divider, className)} {...others} />;
}

MenuDivider.displayName = '@mantine/core/MenuDivider';
