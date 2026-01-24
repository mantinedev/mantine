import { cloneElement } from 'react';
import { createEventHandler, getSingleElementChild, useProps } from '../../../core';
import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';

export interface MenuTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop used to get element ref, useful for forwarding refs to custom components @default `'ref'` */
  refProp?: string;
}

const defaultProps = {
  refProp: 'ref',
} satisfies Partial<MenuTargetProps>;

export function MenuTarget(props: MenuTargetProps) {
  const { children, refProp, ...others } = useProps('MenuTarget', defaultProps, props);

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useMenuContext();
  const _childProps = child.props as any;

  const onClick = createEventHandler(_childProps.onClick, () => {
    if (ctx.trigger === 'click') {
      ctx.toggleDropdown();
    } else if (ctx.trigger === 'click-hover') {
      ctx.setOpenedViaClick(true);
      if (!ctx.opened) {
        ctx.openDropdown();
      }
    }
  });

  const onMouseEnter = createEventHandler(
    _childProps.onMouseEnter,
    () => (ctx.trigger === 'hover' || ctx.trigger === 'click-hover') && ctx.openDropdown()
  );

  const onMouseLeave = createEventHandler(_childProps.onMouseLeave, () => {
    if (ctx.trigger === 'hover') {
      ctx.closeDropdown();
    } else if (ctx.trigger === 'click-hover' && !ctx.openedViaClick) {
      ctx.closeDropdown();
    }
  });

  return (
    <Popover.Target refProp={refProp} popupType="menu" {...others}>
      {cloneElement(child, {
        onClick,
        onMouseEnter,
        onMouseLeave,
        'data-expanded': ctx.opened ? true : undefined,
      } as any)}
    </Popover.Target>
  );
}

MenuTarget.displayName = '@mantine/core/MenuTarget';
