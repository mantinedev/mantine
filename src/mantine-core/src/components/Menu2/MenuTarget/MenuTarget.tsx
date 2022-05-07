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
    ctx.trigger === 'click' && ctx.toggleDropdown();
  };

  const onMouseEnter = (event: React.MouseEvent<unknown>) => {
    target.props.onMouseEnter?.(event);
    ctx.trigger === 'hover' && ctx.openDropdown();
  };

  const onMouseLeave = (event: React.MouseEvent<unknown>) => {
    target.props.onMouseLeave?.(event);
    ctx.trigger === 'hover' && ctx.closeDropdown();
  };

  return (
    <Popover.Target refProp={refProp} popupType="menu">
      {cloneElement(target, { onClick, onMouseEnter, onMouseLeave })}
    </Popover.Target>
  );
}

MenuTarget.displayName = '@mantine/core/MenuTarget';
