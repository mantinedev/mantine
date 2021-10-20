import React from 'react';
import { ClassNames, DefaultProps, useExtractedMargins, MantineNumberSize } from '@mantine/styles';
import { NavbarSection } from './NavbarSection/NavbarSection';
import useStyles from './Navbar.styles';

export type NavbarStylesNames = ClassNames<typeof useStyles>;

interface NavbarProps extends DefaultProps<NavbarStylesNames> {
  /** Navbar width */
  width?: string | number;

  /** Navbar height */
  height?: string | number;

  /** Navbar content */
  children?: React.ReactNode;

  /** Navbar padding from theme.spacing or number to set padding in px */
  padding?: MantineNumberSize;
}

export function Navbar({
  width = 300,
  height = '100vh',
  padding = 'md',
  className,
  classNames,
  style,
  styles,
  children,
  ...others
}: NavbarProps) {
  const { classes, cx } = useStyles(
    { width, height, padding },
    { classNames, styles, name: 'Navbar' }
  );
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  return (
    <div className={cx(classes.root, className)} style={mergedStyles} {...rest}>
      {children}
    </div>
  );
}

Navbar.Section = NavbarSection;

Navbar.displayName = '@mantine/core/Navbar';
