import React, { cloneElement, forwardRef } from 'react';
import { isElement, createEventHandler, useProps } from '../../../core';
import { useMenuContext } from '../Menu.context';
import { Popover } from '../../Popover';

export interface MenuTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

const defaultProps: Partial<MenuTargetProps> = {
  refProp: 'ref',
};

export const MenuTarget = forwardRef<HTMLElement, MenuTargetProps>((props, ref) => {
  const { children, refProp, ...others } = useProps('MenuTarget', defaultProps, props);

  if (!isElement(children)) {
    throw new Error(
      'Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
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
    <Popover.Target refProp={refProp} popupType="menu" ref={ref} {...others}>
      {cloneElement(children, {
        onClick,
        onMouseEnter,
        onMouseLeave,
        'data-expanded': ctx.opened ? true : undefined,
      })}
    </Popover.Target>
  );
});

MenuTarget.displayName = '@mantine/core/MenuTarget';
