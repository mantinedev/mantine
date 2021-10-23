import React from 'react';
import {
  MantineNumberSize,
  DefaultProps,
  MantineTheme,
  useMantineTheme,
  ClassNames,
} from '@mantine/styles';
import { getSortedBreakpoints } from './get-sorted-breakpoints';
import useStyles from './AppShell.styles';

export type AppShellStylesNames = ClassNames<typeof useStyles>;

export interface AppShellProps extends DefaultProps<AppShellStylesNames> {
  navbar?: React.ReactElement;
  header?: React.ReactElement;
  zIndex?: number;
  fixed?: boolean;
  children: React.ReactNode;
  padding?: MantineNumberSize;
  navbarOffsetBreakpoint?: MantineNumberSize;
}

function getHeaderHeight(element: React.ReactElement) {
  const height = element?.props?.height;
  return typeof height === 'number' ? `${height}px` : typeof height === 'string' ? height : '0px';
}

function getNavbarWidth(element: React.ReactElement) {
  const width = element?.props?.width?.base;
  return typeof width === 'number' ? `${width}px` : typeof width === 'string' ? width : '0px';
}

function getNavbarBreakpoints(element: React.ReactElement, theme: MantineTheme) {
  const breakpoints = element?.props?.width?.breakpoints;
  return breakpoints != null
    ? getSortedBreakpoints<{ width: number | string; height: number | string }>(
        breakpoints as any,
        theme
      )
    : [];
}

export function AppShell({
  children,
  navbar,
  header,
  fixed = false,
  zIndex = 1000,
  padding = 'md',
  navbarOffsetBreakpoint,
  className,
  styles,
  classNames,
}: AppShellProps) {
  const theme = useMantineTheme();
  const navbarBreakpoints = getNavbarBreakpoints(navbar, theme);
  const navbarWidth = getNavbarWidth(navbar);
  const headerHeight = getHeaderHeight(header);
  const { classes, cx } = useStyles(
    {
      padding,
      fixed,
      navbarWidth,
      headerHeight,
      navbarBreakpoints,
      navbarOffsetBreakpoint,
    },
    { styles, classNames, name: 'AppShell' }
  );
  const _header = header ? React.cloneElement(header, { fixed, zIndex }) : null;
  const _navbar = navbar
    ? React.cloneElement(navbar, {
        fixed,
        zIndex,
        height: `calc(100vh - ${headerHeight})`,
        position: { top: headerHeight, left: 0 },
      })
    : null;

  return (
    <div className={cx(classes.root, className)}>
      {_header}

      <div className={classes.body}>
        {_navbar}
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
}
