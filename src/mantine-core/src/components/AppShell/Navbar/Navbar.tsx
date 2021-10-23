import React, { forwardRef } from 'react';
import { ClassNames, DefaultProps, useExtractedMargins, MantineNumberSize } from '@mantine/styles';
import { NavbarSection } from './NavbarSection/NavbarSection';
import useStyles, { NavbarPosition, NavbarWidth } from './Navbar.styles';

export type NavbarStylesNames = ClassNames<typeof useStyles>;

export interface NavbarProps extends DefaultProps<NavbarStylesNames> {
  /** Navbar width with breakpoints */
  width?: NavbarWidth;

  /** Navbar height */
  height?: string | number;

  /** Navbar content */
  children: React.ReactNode;

  /** Navbar padding from theme.spacing or number to set padding in px */
  padding?: MantineNumberSize;

  /** Set position to fixed */
  fixed?: boolean;

  /** Position for fixed Navbar */
  position?: NavbarPosition;

  /** Breakpoint at which navbar will be hidden if hidden prop is true */
  hiddenBreakpoint?: MantineNumberSize;

  /** Set to true to hide breakpoint at hiddenBreakpoint */
  hidden?: boolean;

  /** z-index */
  zIndex?: number;
}

type _NavbarComponent = (props: NavbarProps) => React.ReactElement;
type NavbarComponent = _NavbarComponent & {
  displayName: string;
  Section: typeof NavbarSection;
};

export const Navbar: NavbarComponent = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      width = { base: 300 },
      height = '100vh',
      padding = 0,
      fixed = false,
      position = { top: 0, left: 0 },
      zIndex = 1000,
      hiddenBreakpoint = 'md',
      hidden = false,
      className,
      classNames,
      style,
      styles,
      children,
      ...others
    }: NavbarProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { width, height, padding, fixed, position, hiddenBreakpoint, zIndex },
      { classNames, styles, name: 'Navbar' }
    );

    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    return (
      <nav
        ref={ref}
        className={cx(classes.root, { [classes.hidden]: hidden }, className)}
        style={mergedStyles}
        {...rest}
      >
        {children}
      </nav>
    );
  }
) as any;

Navbar.Section = NavbarSection;

Navbar.displayName = '@mantine/core/Navbar';
