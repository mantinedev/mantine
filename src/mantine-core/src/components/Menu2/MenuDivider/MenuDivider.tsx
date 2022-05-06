import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './MenuDivider.styles';

export interface MenuDividerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function MenuDivider({ children, className, ...others }: MenuDividerProps) {
  const { classes, cx } = useStyles();
  return <Box className={cx(classes.divider, className)} {...others} />;
}

MenuDivider.displayName = '@mantine/core/MenuDivider';
