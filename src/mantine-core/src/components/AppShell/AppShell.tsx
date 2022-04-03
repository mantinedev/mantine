import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  DefaultProps,
  ClassNames,
  MantineStyleSystemSize,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { AppShellProvider } from './AppShell.context';
import useStyles from './AppShell.styles';

export type AppShellStylesNames = ClassNames<typeof useStyles>;

export interface AppShellProps
  extends Omit<DefaultProps<AppShellStylesNames>, MantineStyleSystemSize> {
  /** <Navbar /> component */
  navbar?: React.ReactElement;

  /** <Aside /> component */
  aside?: React.ReactElement;

  /** <Header /> component */
  header?: React.ReactElement;

  /** <Footer /> component */
  footer?: React.ReactElement;

  /** zIndex prop passed to Navbar and Header components */
  zIndex?: number;

  /** true to switch from static layout to fixed */
  fixed?: boolean;

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
  fixed: false,
  zIndex: getDefaultZIndex('app'),
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
    ...others
  } = useMantineDefaultProps('AppShell', defaultProps, props);
  const { classes, cx } = useStyles(
    { padding, fixed, navbarOffsetBreakpoint, asideOffsetBreakpoint },
    { styles, classNames, name: 'AppShell' }
  );

  return (
    <AppShellProvider value={{ fixed, zIndex }}>
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
