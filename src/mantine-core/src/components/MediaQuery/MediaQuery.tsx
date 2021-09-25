import React, { Children } from 'react';
import { MantineNumberSize } from '@mantine/styles';
import useStyles from './MediaQuery.styles';

export interface MediaQueryProps {
  className?: string;

  /** Child that should be shown at given breakpoint, it must accept className prop */
  children: React.ReactNode;

  /** Smaller than given breakpoint or value in px, will be hidden on larger viewport */
  smallerThan?: MantineNumberSize;

  /** Larger than given breakpoint or value in px, will be hidden on smaller viewport */
  largerThan?: MantineNumberSize;
}

export function MediaQuery({ children, smallerThan, largerThan, className }: MediaQueryProps) {
  const { classes, cx } = useStyles({ smallerThan, largerThan });
  const child = Children.only(children) as React.ReactElement;
  return React.cloneElement(child, {
    className: cx(classes.media, child.props?.className, className),
  });
}
