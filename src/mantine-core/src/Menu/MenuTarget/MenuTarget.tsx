import React, { cloneElement } from 'react';
import { isElement, createEventHandler } from '@mantine/utils';
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
    throw new Error(MENU_ERRORS.children);
  }

  const ctx = useMenuContext();

  const onClick = createEventHandler(
    children.props.onClick,
    () => ctx.trigger === 'click' && ctx.toggleDropdown()
  );

  const onMouseEnter = createEventHandler(
    children.props.onMouseEnter,
    () => ctx.trigger === 'hover' && ctx.openDropdown()
  );

  const onMouseLeave = createEventHandler(
    children.props.onMouseLeave,
    () => ctx.trigger === 'hover' && ctx.closeDropdown()
  );

  return (
    <Popover.Target refProp={refProp} popupType="menu">
      {cloneElement(children, {
        onClick,
        onMouseEnter,
        onMouseLeave,
        'data-expanded': ctx.opened ? true : undefined,
      })}
    </Popover.Target>
  );
}

MenuTarget.displayName = '@mantine/core/MenuTarget';
