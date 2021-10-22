import React from 'react';
import { MantineNumberSize, DefaultProps } from '@mantine/styles';
import useStyles from './AppShell.styles';

interface AppShellProps extends DefaultProps {
  navbar?: React.ReactElement;
  header?: React.ReactElement;
  zIndex?: number;
  fixed?: boolean;
  children: React.ReactNode;
  padding?: MantineNumberSize;
}

function getHeaderHeight(element: React.ReactElement) {
  const height = element?.props?.height;
  return typeof height === 'number' ? `${height}px` : typeof height === 'string' ? height : '0px';
}

function getNavbarWidth(element: React.ReactElement) {
  const width = element?.props?.size?.width;
  return typeof width === 'number' ? `${width}px` : typeof width === 'string' ? width : '0px';
}

export function AppShell({
  children,
  navbar,
  header,
  fixed = false,
  zIndex = 1000,
  padding = 'md',
  className,
}: AppShellProps) {
  const navbarWidth = getNavbarWidth(navbar);
  const headerHeight = getHeaderHeight(header);
  const { classes, cx } = useStyles({ padding, fixed, navbarWidth, headerHeight });
  const _header = header ? React.cloneElement(header, { fixed, zIndex }) : null;
  const _navbar = navbar
    ? React.cloneElement(navbar, {
        fixed,
        zIndex,
        size: { height: `calc(100vh - ${headerHeight})`, width: navbarWidth },
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
