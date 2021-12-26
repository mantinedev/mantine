import React from 'react';

export function getNavbarBaseWidth(element: React.ReactElement) {
  const width = element?.props?.width?.base;
  return typeof width === 'number' ? `${width}px` : typeof width === 'string' ? width : '0px';
}
