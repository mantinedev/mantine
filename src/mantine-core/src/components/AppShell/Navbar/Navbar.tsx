import React from 'react';
import { ClassNames, DefaultProps, useExtractedMargins } from '@mantine/styles';
import useStyles from './Navbar.styles';

export type NavbarStylesNames = ClassNames<typeof useStyles>;

interface NavbarProps extends DefaultProps<NavbarStylesNames> {
  /** Navbar width */
  width?: string | number;

  /** Navbar height */
  height?: string | number;
}

export function Navbar({
  width = 300,
  height = '100vh',
  className,
  classNames,
  style,
  styles,
  ...others
}: NavbarProps) {
  const { classes, cx } = useStyles({ width, height }, { classNames, styles, name: 'Navbar' });
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  return (
    <div className={cx(classes.root, className)} style={mergedStyles} {...rest}>
      Navbar
    </div>
  );
}
