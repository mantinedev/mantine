import { cloneElement } from 'react';
import { getSingleElementChild, useProps } from '../../../core';
import { createContextMenuHandlers } from '../../../utils/Floating/create-context-menu-handlers';
import { usePopoverContext } from '../Popover.context';

export interface PopoverContextMenuProps {
  /** Element that opens the popover when right-clicked. Dropdown is positioned at the cursor. The trigger element must not call `event.preventDefault()` in its own `onContextMenu` handler, otherwise the native context menu is not suppressed. */
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

  const handlers = createContextMenuHandlers({
    childProps: child.props as any,
    disabled: disabled || ctx.disabled,
    opened: ctx.opened,
    setReference: ctx.reference as unknown as (node: object) => void,
    open: () => {
      if (!ctx.opened) {
        ctx.onToggle();
      }
    },
  });

  return cloneElement(child, handlers as any);
}

PopoverContextMenu.displayName = '@mantine/core/PopoverContextMenu';
