import React, { Children } from 'react';
import { MantineNumberSize, CSSObject } from '@mantine/styles';
import useStyles from './MediaQuery.styles';

export interface MediaQueryProps {
  className?: string;

  /** Child that should be shown at given breakpoint, it must accept className prop */
  children: React.ReactNode;

  /** Smaller than given breakpoint or value in px, will be hidden on larger viewport */
  smallerThan?: MantineNumberSize;

  /** Larger than given breakpoint or value in px, will be hidden on smaller viewport */
  largerThan?: MantineNumberSize;

  /** Any other media query */
  query?: string;

  /** Styles applied to child when breakpoint matches */
  styles: CSSObject;
}

export function MediaQuery({
  children,
  smallerThan,
  largerThan,
  query,
  styles,
  className,
}: MediaQueryProps) {
  const { classes, cx } = useStyles(
    { smallerThan, largerThan, query, styles },
    { name: 'MediaQuery' }
  );
  const child = Children.only(children) as React.ReactElement;
  return React.cloneElement(child, {
    className: cx(classes.media, child.props?.className, className),
  });
}

MediaQuery.displayName = '@mantine/core/MediaQuery';
