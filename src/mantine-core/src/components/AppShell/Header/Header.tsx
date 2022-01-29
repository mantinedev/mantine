import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, getDefaultZIndex } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles, { HeaderPosition } from './Header.styles';

export interface HeaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'nav'> {
  /** Header content */
  children: React.ReactNode;

  /** Header height */
  height: number | string;

  /** Header padding from theme.spacing or number to set padding in px */
  padding?: MantineNumberSize;

  /** Changes position to fixed, controlled by AppShell component if rendered inside */
  fixed?: boolean;

  /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
  position?: HeaderPosition;

  /** z-index */
  zIndex?: number;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      children,
      className,
      classNames,
      styles,
      height,
      padding = 0,
      fixed = false,
      position = { top: 0, left: 0, right: 0 },
      zIndex = getDefaultZIndex('app'),
      ...others
    }: HeaderProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { height, padding, fixed, position, zIndex },
      { name: 'Header', classNames, styles }
    );

    return (
      <Box component="nav" className={cx(classes.root, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

Header.displayName = '@mantine/core/Header';
