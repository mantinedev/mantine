import React, { forwardRef } from 'react';
import {
  getDefaultZIndex,
  ForwardRefWithStaticComponents,
  useMantineDefaultProps,
} from '@mantine/styles';
import {
  HorizontalSection,
  HorizontalSectionSharedProps,
} from '../HorizontalSection/HorizontalSection';

export interface NavbarProps
  extends HorizontalSectionSharedProps,
    React.ComponentPropsWithRef<'nav'> {
  /** Navbar content */
  children: React.ReactNode;
}

type NavbarComponent = ForwardRefWithStaticComponents<
  NavbarProps,
  { Section: typeof HorizontalSection.Section }
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
    const _props = useMantineDefaultProps('Navbar', defaultProps, props);
    return <HorizontalSection section="navbar" __staticSelector="Navbar" ref={ref} {..._props} />;
  }
) as any;

Navbar.Section = HorizontalSection.Section;
Navbar.displayName = '@mantine/core/Navbar';
