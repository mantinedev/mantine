import React from 'react';

export function getElementHeight(element: React.ReactElement) {
  const height = element?.props?.height;
  return typeof height === 'number' ? `${height}px` : typeof height === 'string' ? height : '0px';
}
