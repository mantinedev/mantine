import React from 'react';
import { MantineSize } from '@mantine/styles';
import { IconStar } from '@tabler/icons';
import useStyles, { StarSymbolProps } from './StarSymbol.styles';

export function StarSymbol({ size, type }: StarSymbolProps) {
  const { classes } = useStyles();

  const sizes: Record<MantineSize, number> = {
    xs: 14,
    sm: 18,
    md: 20,
    lg: 28,
    xl: 32,
  };

  return <IconStar size={sizes[size || 'sm']} className={classes[type || 'empty']} />;
}
