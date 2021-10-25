import React, { forwardRef } from 'react';
import { DefaultProps, useExtractedMargins, MantineNumberSize } from '@mantine/styles';
import useStyles, { HeaderPosition } from './Header.styles';

export interface HeaderProps extends DefaultProps {
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
      style,
      height,
      padding = 0,
      fixed = false,
      position = { top: 0, left: 0, right: 0 },
      sx,
      zIndex = 1000,
      ...others
    }: HeaderProps,
    ref
  ) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { classes, cx } = useStyles(
      { height, padding, fixed, position, zIndex },
      { name: 'Header', sx }
    );

    return (
      <nav className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        {children}
      </nav>
    );
  }
);

Header.displayName = '@mantine/core/Header';
