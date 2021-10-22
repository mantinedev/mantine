import React from 'react';

interface AppShellProps {
  navbar?: React.ReactElement;
  header?: React.ReactElement;
  zIndex?: number;
  fixed?: boolean;
  children: React.ReactNode;
}

function getHeaderHeight(element: React.ReactElement) {
  const height = element?.props?.height;
  return typeof height === 'number' ? `${height}px` : typeof height === 'string' ? height : '0px';
}

export function AppShell({
  children,
  navbar,
  header,
  fixed = false,
  zIndex = 1000,
}: AppShellProps) {
  const headerHeight = getHeaderHeight(header);
  const _header = header ? React.cloneElement(header, { fixed }) : null;
  const _navbar = navbar
    ? React.cloneElement(navbar, {
        fixed,
        size: { height: `calc(100vh - ${headerHeight})`, width: 300 },
      })
    : null;

  return (
    <div>
      {_header}
      <div style={{ display: 'flex' }}>
        {_navbar}
        {children}
      </div>
    </div>
  );
}
