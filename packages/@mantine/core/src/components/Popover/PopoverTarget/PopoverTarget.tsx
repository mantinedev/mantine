import { cloneElement } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import { factory, Factory, isElement, useProps } from '../../../core';
import { usePopoverContext } from '../Popover.context';

export interface PopoverTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to access element ref */
  refProp?: string;

  /** Popup accessible type, `'dialog'` by default */
  popupType?: string;
}

const defaultProps: Partial<PopoverTargetProps> = {
  refProp: 'ref',
  popupType: 'dialog',
};

export type PopoverTargetFactory = Factory<{
  props: PopoverTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const PopoverTarget = factory<PopoverTargetFactory>((props, ref) => {
  const { children, refProp, popupType, ...others } = useProps(
    'PopoverTarget',
    defaultProps,
    props
  );

  if (!isElement(children)) {
    throw new Error(
      'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const forwardedProps: any = others;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef(ctx.reference, (children as any).ref, ref);

  const accessibleProps = ctx.withRoles
    ? {
        'aria-haspopup': popupType,
        'aria-expanded': ctx.opened,
        'aria-controls': ctx.getDropdownId(),
        id: ctx.getTargetId(),
      }
    : {};

  return cloneElement(children, {
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: cx(ctx.targetProps.className, forwardedProps.className, children.props.className),
    [refProp!]: targetRef,
    ...(!ctx.controlled ? { onClick: ctx.onToggle } : null),
  });
});

PopoverTarget.displayName = '@mantine/core/PopoverTarget';
