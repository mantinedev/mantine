import { cloneElement } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import { factory, Factory, getRefProp, getSingleElementChild, useProps } from '../../../core';
import { usePopoverContext } from '../Popover.context';

export interface PopoverTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to access element ref */
  refProp?: string;

  /** Popup accessible type @default `'dialog'` */
  popupType?: string;
}

const defaultProps = {
  refProp: 'ref',
  popupType: 'dialog',
} satisfies Partial<PopoverTargetProps>;

export type PopoverTargetFactory = Factory<{
  props: PopoverTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const PopoverTarget = factory<PopoverTargetFactory>((props) => {
  const { children, refProp, popupType, ref, ...others } = useProps(
    'PopoverTarget',
    defaultProps,
    props
  );

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const forwardedProps: any = others;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef(ctx.reference, getRefProp(child), ref);

  const accessibleProps = ctx.withRoles
    ? {
        'aria-haspopup': popupType,
        'aria-expanded': ctx.opened,
        'aria-controls': ctx.opened ? ctx.getDropdownId() : undefined,
        id: ctx.getTargetId(),
      }
    : {};

  const childProps = child.props as any;
  return cloneElement(child, {
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: cx(ctx.targetProps.className, forwardedProps.className, childProps.className),
    [refProp]: targetRef,
    ...(!ctx.controlled
      ? {
          onClick: () => {
            ctx.onToggle();
            childProps.onClick?.();
          },
        }
      : null),
  });
});

PopoverTarget.displayName = '@mantine/core/PopoverTarget';
