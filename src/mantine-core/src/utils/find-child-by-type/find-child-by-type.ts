import { ReactNode, Children, JSXElementConstructor, ReactElement } from 'react';

export function findChildByType(children: ReactNode, type: JSXElementConstructor<any>) {
  return (Children.toArray(children) as ReactElement[]).find((item) => item.type === type);
}
