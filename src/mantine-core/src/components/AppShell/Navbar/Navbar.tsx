import React, { forwardRef } from 'react';
import {
  ClassNames,
  DefaultProps,
  MantineNumberSize,
  getDefaultZIndex,
  ForwardRefWithStaticComponents,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../../Box';
import { useAppShellContext } from '../AppShell.context';
import { NavbarSection } from './NavbarSection/NavbarSection';
import useStyles, { NavbarPosition, NavbarWidth } from './Navbar.styles';

export type NavbarStylesNames = ClassNames<typeof useStyles>;

export interface NavbarProps
  extends DefaultProps<NavbarStylesNames>,
    React.ComponentPropsWithRef<'nav'> {
  /** Navbar width with breakpoints */
  width?: NavbarWidth;

  /** Navbar height */
  height?: string | number;

  /** Navbar content */
  children: React.ReactNode;

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

type NavbarComponent = ForwardRefWithStaticComponents<
  NavbarProps,
  { Section: typeof NavbarSection }
>;

const defaultProps: Partial<NavbarProps> = {
  fixed: false,
  position: { top: 0, left: 0 },
  zIndex: getDefaultZIndex('app'),
  hiddenBreakpoint: 'md',
  hidden: false,
};

export const Navbar: NavbarComponent = forwardRef<HTMLElement, NavbarProps>(
  (props: NavbarProps, ref) => {
    const {
      width,
      height,
      fixed,
      position,
      zIndex,
      hiddenBreakpoint,
      hidden,
      className,
      classNames,
      styles,
      children,
      ...others
    } = useMantineDefaultProps('Navbar', defaultProps, props);
    const ctx = useAppShellContext();

    const { classes, cx } = useStyles(
      {
        width,
        height,
        fixed: ctx.fixed || fixed,
        position,
        hiddenBreakpoint,
        zIndex: ctx.zIndex || zIndex,
      },
      { classNames, styles, name: 'Navbar' }
    );

    return (
      <Box
        component="nav"
        ref={ref}
        className={cx(classes.root, { [classes.hidden]: hidden }, className)}
        {...others}
      >
        {children}
      </Box>
    );
  }
) as any;

Navbar.Section = NavbarSection;
Navbar.displayName = '@mantine/core/Navbar';
