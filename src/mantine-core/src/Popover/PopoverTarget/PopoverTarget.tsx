/* eslint-disable react/no-unused-prop-types */
import React, { cloneElement, forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { isElement } from '@mantine/utils';
import { clsx, useComponentDefaultProps } from '@mantine/styles';
import { usePopoverContext } from '../Popover.context';
import { POPOVER_ERRORS } from '../Popover.errors';

export interface PopoverTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;

  /** Popup accessible type, 'dialog' by default */
  popupType?: string;

  /** Determines whether component should override default id of target element, defaults to true */
  shouldOverrideDefaultTargetId?: boolean;
}

const defaultProps: Partial<PopoverTargetProps> = {
  refProp: 'ref',
  popupType: 'dialog',
  shouldOverrideDefaultTargetId: true,
};

export const PopoverTarget = forwardRef<HTMLElement, PopoverTargetProps>((props, ref) => {
  const { children, refProp, popupType, shouldOverrideDefaultTargetId, ...others } =
    useComponentDefaultProps('PopoverTarget', defaultProps, props);

  if (!isElement(children)) {
    throw new Error(POPOVER_ERRORS.children);
  }

  const forwardedProps = others as any;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef(ctx.reference, (children as any).ref, ref);

  const accessibleProps = ctx.withRoles
    ? {
        'aria-haspopup': popupType,
        'aria-expanded': ctx.opened,
        'aria-controls': ctx.getDropdownId(),
        id: shouldOverrideDefaultTargetId ? ctx.getTargetId() : children.props.id,
      }
    : {};

  return cloneElement(children, {
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: clsx(ctx.targetProps.className, forwardedProps.className, children.props.className),
    [refProp]: targetRef,
    ...(!ctx.controlled ? { onClick: ctx.onToggle } : null),
  });
});

PopoverTarget.displayName = '@mantine/core/PopoverTarget';
