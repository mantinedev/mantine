import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  DefaultProps,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { AppShellProvider } from './AppShell.context';
import useStyles from './AppShell.styles';

export type AppShellStylesNames = Selectors<typeof useStyles>;

export interface AppShellProps extends DefaultProps<AppShellStylesNames> {
  variant?: string;

  /** Determines how Navbar and Aside components are positioned relative to Header and Footer components */
  layout?: 'default' | 'alt';

  /** <Navbar /> component */
  navbar?: React.ReactElement;

  /** <Aside /> component */
  aside?: React.ReactElement;

  /** <Header /> component */
  header?: React.ReactElement;

  /** <Footer /> component */
  footer?: React.ReactElement;

  /** zIndex prop passed to Navbar and Header components */
  zIndex?: React.CSSProperties['zIndex'];

  /** true to switch from static layout to fixed */
  fixed?: boolean;

  /** true to hide all AppShell parts and render only children */
  hidden?: boolean;

  /** AppShell content */
  children: React.ReactNode;

  /** Content padding */
  padding?: MantineNumberSize;

  /** Breakpoint at which Navbar component should no longer be offset with padding-left, applicable only for fixed position */
  navbarOffsetBreakpoint?: MantineNumberSize;

  /** Breakpoint at which Aside component should no longer be offset with padding-right, applicable only for fixed position */
  asideOffsetBreakpoint?: MantineNumberSize;
}

const defaultProps: Partial<AppShellProps> = {
  fixed: true,
  padding: 'md',
};

export const AppShell = forwardRef<HTMLDivElement, AppShellProps>((props: AppShellProps, ref) => {
  const {
    children,
    navbar,
    header,
    footer,
    aside,
    fixed,
    zIndex,
    padding,
    navbarOffsetBreakpoint,
    asideOffsetBreakpoint,
    className,
    styles,
    classNames,
    unstyled,
    hidden,
    layout,
    variant,
    ...others
  } = useComponentDefaultProps('AppShell', defaultProps, props);

  const { classes, cx } = useStyles(
    { padding, fixed, navbarOffsetBreakpoint, asideOffsetBreakpoint },
    { styles, classNames, unstyled, name: 'AppShell', variant }
  );

  if (hidden) {
    return <>{children}</>;
  }

  return (
    <AppShellProvider value={{ fixed, zIndex, layout }}>
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {header}

        <div className={classes.body}>
          {navbar}
          <main className={classes.main}>{children}</main>
          {aside}
        </div>

        {footer}
      </Box>
    </AppShellProvider>
  );
});

AppShell.displayName = '@mantine/core/AppShell';
