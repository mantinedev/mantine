import { cloneElement } from 'react';
import { createEventHandler, getSingleElementChild, useProps } from '../../../core';
import { usePopoverContext } from '../../Popover';
import { useMenuContext } from '../Menu.context';

export interface MenuContextMenuProps {
  /** Element that opens the menu when right-clicked. Menu dropdown is positioned at the cursor. */
  children: React.ReactNode;

  /** If set, the right-click trigger is disabled and the browser's default context menu is shown */
  disabled?: boolean;
}

export function MenuContextMenu(props: MenuContextMenuProps) {
  const { children, disabled } = useProps('MenuContextMenu', null, props);

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'Menu.ContextMenu component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useMenuContext();
  const popoverCtx = usePopoverContext();
  const _childProps = child.props as any;

  const onContextMenu = createEventHandler<any>(
    _childProps.onContextMenu,
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled || event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      const { clientX, clientY } = event;
      const contextElement = event.currentTarget;

      const virtualReference = {
        getBoundingClientRect: () => ({
          x: clientX,
          y: clientY,
          width: 0,
          height: 0,
          top: clientY,
          left: clientX,
          right: clientX,
          bottom: clientY,
          toJSON: () => undefined,
        }),
        contextElement,
      };

      (popoverCtx.reference as unknown as (node: object) => void)(virtualReference);
      ctx.openDropdown();
    }
  );

  return cloneElement(child, {
    onContextMenu,
    'data-expanded': ctx.opened ? true : undefined,
  } as any);
}

MenuContextMenu.displayName = '@mantine/core/MenuContextMenu';
