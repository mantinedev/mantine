import { cloneElement } from 'react';
import { getSingleElementChild, useProps } from '../../../core';
import { useContextMenuHandlers } from '../../../utils/Floating/use-context-menu-handlers';
import { usePopoverContext } from '../Popover.context';

export interface PopoverContextMenuProps {
  /** Element that opens the popover when right-clicked. Dropdown is positioned at the cursor. The trigger element must not call `event.preventDefault()` in its own `onContextMenu` handler, otherwise the native context menu is not suppressed. */
  children: React.ReactNode;

  /** If set, the right-click trigger is disabled and the browser's default context menu is shown */
  disabled?: boolean;

  /** Delay in ms before a touch long-press opens the dropdown on touch devices, `500` by default */
  longPressDelay?: number;
}

export function PopoverContextMenu(props: PopoverContextMenuProps) {
  const { children, disabled, longPressDelay } = useProps('PopoverContextMenu', null, props);

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'Popover.ContextMenu component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = usePopoverContext();

  const handlers = useContextMenuHandlers({
    childProps: child.props as any,
    disabled: disabled || ctx.disabled,
    opened: ctx.opened,
    longPressDelay,
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
