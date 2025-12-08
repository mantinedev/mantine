import { Children, cloneElement } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import { factory, Factory, getRefProp, isElement, useProps } from '../../../core';
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

export const PopoverTarget = factory<PopoverTargetFactory>((props, ref) => {
  const { children, refProp, popupType, ...others } = useProps(
    'PopoverTarget',
    defaultProps,
    props
  );

  const _children = Children.toArray(children);
  if (_children.length !== 1 || !isElement(_children[0])) {
    throw new Error(
      'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const forwardedProps: any = others;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef(ctx.reference, getRefProp(_children[0]), ref);

  const accessibleProps = ctx.withRoles
    ? {
        'aria-haspopup': popupType,
        'aria-expanded': ctx.opened,
        'aria-controls': ctx.getDropdownId(),
        id: ctx.getTargetId(),
      }
    : {};

  const _childrenProps = _children[0].props as any;
  return cloneElement(_children[0], {
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: cx(ctx.targetProps.className, forwardedProps.className, _childrenProps.className),
    [refProp]: targetRef,
    ...(!ctx.controlled
      ? {
          onClick: () => {
            ctx.onToggle();
            _childrenProps.onClick?.();
          },
        }
      : null),
  });
});

PopoverTarget.displayName = '@mantine/core/PopoverTarget';
