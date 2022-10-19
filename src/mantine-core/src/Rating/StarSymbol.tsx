import React from 'react';
import { StarIcon } from './StarIcon';
import useStyles, { StarSymbolStylesParams } from './StarSymbol.styles';

export interface StarSymbolProps extends StarSymbolStylesParams {}
export function StarSymbol({ size, type }: StarSymbolProps) {
  const { classes } = useStyles({ size, type });

  return <StarIcon className={classes.icon} />;
}
