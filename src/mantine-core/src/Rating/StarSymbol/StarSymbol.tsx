import React from 'react';
import { MantineSize, MantineColor } from '@mantine/styles';
import { StarIcon } from './StarIcon';
import useStyles from './StarSymbol.styles';

export interface StarSymbolProps {
  size: MantineSize;
  color: MantineColor;
  type: 'empty' | 'full';
}

export function StarSymbol({ size, type, color }: StarSymbolProps) {
  const { classes } = useStyles({ type, color }, { name: 'Rating', size });
  return <StarIcon className={classes.icon} />;
}

StarSymbol.displayName = '@mantine/core/StarSymbol';
