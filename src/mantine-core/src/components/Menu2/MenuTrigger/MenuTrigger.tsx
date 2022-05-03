import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { useMenuContext } from '../Menu.context';
import { Popover } from '../../Popover';
import { MENU_ERRORS } from '../Menu.errors';

export interface MenuTriggerProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export function MenuTrigger({ children, refProp = 'ref' }: MenuTriggerProps) {
  if (!isElement(children)) {
    throw new Error(MENU_ERRORS['menu-children']);
  }

  const ctx = useMenuContext();

  const target = children as React.ReactElement;

  const onClick = (event: React.MouseEvent<unknown>) => {
    target.props.onClick?.(event);
    ctx.toggleDropdown();
  };

  return <Popover.Target refProp={refProp}>{cloneElement(target, { onClick })}</Popover.Target>;
}

MenuTrigger.displayName = '@mantine/core/MenuTrigger';
