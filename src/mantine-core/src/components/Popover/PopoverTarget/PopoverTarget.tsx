import React, { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { isElement } from '@mantine/utils';
import { usePopoverContext } from '../Popover.context';
import { POPOVER_ERRORS } from '../Popover.errors';

export interface PopoverTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;

  /** Popup accessible type, 'dialog' by default */
  popupType?: string;
}

export function PopoverTarget({
  children,
  refProp = 'ref',
  popupType = 'dialog',
}: PopoverTargetProps) {
  if (!isElement(children)) {
    throw new Error(POPOVER_ERRORS['popover-children']);
  }

  const ctx = usePopoverContext();
  const target = children as React.ReactElement;
  const targetRef = useMergedRef(ctx.reference, (target as any).ref);

  const accessibleProps = ctx.withRoles
    ? {
        'aria-haspopup': popupType,
        'aria-expanded': ctx.opened,
        'aria-controls': ctx.getDropdownId(),
        id: ctx.getTargetId(),
      }
    : {};

  return cloneElement(target, {
    ...accessibleProps,
    [refProp]: targetRef,
    ...(!ctx.controlled ? { onClick: ctx.onToggle } : null),
  });
}

PopoverTarget.displayName = '@mantine/core/PopoverTarget';
