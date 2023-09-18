import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineBreakpoint,
  MantineSpacing,
  getDefaultZIndex,
} from '../../core';
import { AppShellNavbar } from './AppShellNavbar/AppShellNavbar';
import { AppShellHeader } from './AppShellHeader/AppShellHeader';
import { AppShellFooter } from './AppShellFooter/AppShellFooter';
import { AppShellAside } from './AppShellAside/AppShellAside';
import { AppShellMain } from './AppShellMain/AppShellMain';
import { AppShellSection } from './AppShellSection/AppShellSection';
import { AppShellMediaStyles } from './AppShellMediaStyles/AppShellMediaStyles';
import { AppShellProvider } from './AppShell.context';
import { useResizing } from './use-resizing/use-resizing';
import classes from './AppShell.module.css';

export type AppShellStylesNames =
  | 'root'
  | 'navbar'
  | 'main'
  | 'header'
  | 'footer'
  | 'aside'
  | 'section';
export type AppShellCssVariables = {
  root: '--app-shell-transition-duration' | '--app-shell-transition-timing-function';
};

export type AppShellSize = number | (string & {});

export interface AppShellResponsiveSize {
  base?: AppShellSize;
  xs?: AppShellSize;
  sm?: AppShellSize;
  md?: AppShellSize;
  lg?: AppShellSize;
  xl?: AppShellSize;
  [key: string]: AppShellSize | undefined;
}

export interface AppShellProps
  extends BoxProps,
    StylesApiProps<AppShellFactory>,
    ElementProps<'div'> {
  /** Determines whether associated components should have a border, `true` by default */
  withBorder?: boolean;

  /** Main content section padding, `0` by default */
  padding?: MantineSpacing | AppShellResponsiveSize;

  /** Navbar configuration */
  navbar?: {
    width: AppShellSize | AppShellResponsiveSize;
    breakpoint: MantineBreakpoint | (string & {}) | number;
    collapsed?: { desktop?: boolean; mobile?: boolean };
  };

  /** Aside configuration */
  aside?: {
    width: AppShellSize | AppShellResponsiveSize;
    breakpoint: MantineBreakpoint | (string & {}) | number;
    collapsed?: { desktop?: boolean; mobile?: boolean };
  };

  /** Header configuration */
  header?: {
    height: AppShellSize | AppShellResponsiveSize;
    collapsed?: boolean;
    offset?: boolean;
  };

  /** Footer configuration */
  footer?: {
    height: AppShellSize | AppShellResponsiveSize;
    collapsed?: boolean;
    offset?: boolean;
  };

  /** Duration of all transitions in ms, `200` by default */
  transitionDuration?: number;

  /** Timing function of all transitions, `ease` by default */
  transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'];

  /** `z-index` of all associated elements, `200` by default */
  zIndex?: string | number;

  /** Determines how Navbar/Aside are arranged relative to Header/Footer, `default` by default */
  layout?: 'default' | 'alt';

  /** If set, Navbar, Aside, Header and Footer components will not be rendered */
  disabled?: boolean;
}

export type AppShellFactory = Factory<{
  props: AppShellProps;
  ref: HTMLDivElement;
  stylesNames: AppShellStylesNames;
  vars: AppShellCssVariables;
  staticComponents: {
    Navbar: typeof AppShellNavbar;
    Header: typeof AppShellHeader;
    Main: typeof AppShellMain;
    Aside: typeof AppShellAside;
    Footer: typeof AppShellFooter;
    Section: typeof AppShellSection;
  };
}>;

const defaultProps: Partial<AppShellProps> = {
  withBorder: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: 'ease',
  zIndex: getDefaultZIndex('app'),
};

const varsResolver = createVarsResolver<AppShellFactory>(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      '--app-shell-transition-duration': `${transitionDuration}ms`,
      '--app-shell-transition-timing-function': transitionTimingFunction,
    },
  })
);

export const AppShell = factory<AppShellFactory>((_props, ref) => {
  const props = useProps('AppShell', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer,
    ...others
  } = props;

  const getStyles = useStyles<AppShellFactory>({
    name: 'AppShell',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const resizing = useResizing({ disabled, transitionDuration });

  return (
    <AppShellProvider value={{ getStyles, withBorder, zIndex, disabled }}>
      <AppShellMediaStyles
        navbar={navbar}
        header={header}
        aside={aside}
        footer={footer}
        padding={padding}
      />
      <Box ref={ref} {...getStyles('root')} mod={{ resizing, layout, disabled }} {...others} />
    </AppShellProvider>
  );
});

AppShell.classes = classes;
AppShell.displayName = '@mantine/core/AppShell';
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;
