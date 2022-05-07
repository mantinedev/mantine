import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { useMenuContext } from '../Menu.context';
import { Popover } from '../../Popover';
import { MENU_ERRORS } from '../Menu.errors';

export interface MenuTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export function MenuTarget({ children, refProp = 'ref' }: MenuTargetProps) {
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

MenuTarget.displayName = '@mantine/core/MenuTarget';
