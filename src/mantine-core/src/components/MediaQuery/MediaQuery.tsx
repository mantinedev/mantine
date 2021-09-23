import React, { Children } from 'react';
import { MantineNumberSize } from '@mantine/styles';
import useStyles from './MediaQuery.styles';

interface MediaQueryProps {
  children: React.ReactNode;
  smallerThan?: MantineNumberSize;
  largerThan?: MantineNumberSize;
}

export function MediaQuery({ children, smallerThan, largerThan }: MediaQueryProps) {
  const { classes } = useStyles({ smallerThan, largerThan });
  const child = Children.only(children) as React.ReactElement;
  return React.cloneElement(child, { className: classes.media });
}
