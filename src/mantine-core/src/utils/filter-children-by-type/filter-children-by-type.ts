import React, { Children } from 'react';

export function filterChildrenByType<T = React.ReactElement>(
  children: React.ReactNode,
  type: React.JSXElementConstructor<any>
) {
  return (Children.toArray(children) as T[]).filter((item) => (item as any).type === type);
}
