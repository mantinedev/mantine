import { cloneElement } from 'react';
import { createEventHandler, getSingleElementChild, useProps } from '../../../core';
import { usePopoverContext } from '../Popover.context';

export interface PopoverContextMenuProps {
  /** Element that opens the popover when right-clicked. Dropdown is positioned at the cursor. */
  children: React.ReactNode;

  /** If set, the right-click trigger is disabled and the browser's default context menu is shown */
  disabled?: boolean;
}

export function PopoverContextMenu(props: PopoverContextMenuProps) {
  const { children, disabled } = useProps('PopoverContextMenu', null, props);

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'Popover.ContextMenu component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = usePopoverContext();
  const _childProps = child.props as any;

  const onMouseDown = createEventHandler<any>(
    _childProps.onMouseDown,
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled || ctx.disabled) {
        return;
      }
      if (event.button === 2) {
        event.stopPropagation();
      }
    }
  );

  const onContextMenu = createEventHandler<any>(
    _childProps.onContextMenu,
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled || ctx.disabled || event.defaultPrevented) {
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

      (ctx.reference as unknown as (node: object) => void)(virtualReference);
      if (!ctx.opened) {
        ctx.onToggle();
      }
    }
  );

  return cloneElement(child, {
    onContextMenu,
    onMouseDown,
    'data-expanded': ctx.opened ? true : undefined,
  } as any);
}

PopoverContextMenu.displayName = '@mantine/core/PopoverContextMenu';
