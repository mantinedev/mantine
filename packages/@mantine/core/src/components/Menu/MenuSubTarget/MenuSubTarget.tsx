import { isElement } from '../../../core';
import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';

export interface MenuSubTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export function MenuSubTarget({ children, refProp }: MenuSubTargetProps) {
  if (!isElement(children)) {
    throw new Error(
      'Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  useMenuContext();

  return (
    <Popover.Target refProp={refProp} popupType="menu">
      {children}
    </Popover.Target>
  );
}

MenuSubTarget.displayName = '@mantine/core/MenuSubTarget';
