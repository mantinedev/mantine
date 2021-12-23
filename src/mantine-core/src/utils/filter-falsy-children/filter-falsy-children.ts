import { Children, ReactElement, ReactNode } from 'react';

export function filterFalsyChildren(children: ReactNode) {
  return (Children.toArray(children) as ReactElement[]).filter(Boolean);
}
