import { cloneElement, forwardRef } from 'react';
import { createEventHandler, isElement, useProps } from '../../../core';
import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';

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
  const _childrenProps = children.props as any;

  const onClick = createEventHandler(_childrenProps.onClick, () => {
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
    _childrenProps.onMouseEnter,
    () => (ctx.trigger === 'hover' || ctx.trigger === 'click-hover') && ctx.openDropdown()
  );

  const onMouseLeave = createEventHandler(_childrenProps.onMouseLeave, () => {
    if (ctx.trigger === 'hover') {
      ctx.closeDropdown();
    } else if (ctx.trigger === 'click-hover' && !ctx.openedViaClick) {
      ctx.closeDropdown();
    }
  });

  return (
    <Popover.Target refProp={refProp} popupType="menu" ref={ref} {...others}>
      {cloneElement(children, {
        onClick,
        onMouseEnter,
        onMouseLeave,
        'data-expanded': ctx.opened ? true : undefined,
      } as any)}
    </Popover.Target>
  );
});

MenuTarget.displayName = '@mantine/core/MenuTarget';
