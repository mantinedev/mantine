import { Children, JSXElementConstructor, ReactNode, ReactElement } from 'react';

export function filterChildrenByType(
  children: ReactNode,
  type: JSXElementConstructor<any> | JSXElementConstructor<any>[]
) {
  return (Children.toArray(children) as ReactElement[]).filter((item) =>
    Array.isArray(type) ? type.some((component) => component === item.type) : item.type === type
  );
}
