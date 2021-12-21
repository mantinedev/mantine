import React, { Children } from 'react';

export function filterChildrenByType<T>(children: React.ReactNode, type: any) {
  return (Children.toArray(children) as T[]).filter((item) => (item as any).type === type);
}
