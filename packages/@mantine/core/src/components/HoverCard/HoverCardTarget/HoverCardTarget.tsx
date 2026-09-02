import { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { getRefProp, getSingleElementChild, useProps } from '../../../core';
import { Popover, PopoverTargetProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';

export interface HoverCardTargetProps extends PopoverTargetProps {
  /**
   * Name of the prop to wrap event listeners in.
   * Use when the target component expects event listeners in a nested object.
   * For example, some components expect `componentProps={{ onMouseEnter, onMouseLeave }}`.
   * @default undefined (event listeners passed directly to component)
   */
  eventPropsWrapperName?: string;
}

const defaultProps = {
  refProp: 'ref',
} satisfies Partial<HoverCardTargetProps>;

export function HoverCardTarget(props: HoverCardTargetProps) {
  const { children, refProp, eventPropsWrapperName, ...others } = useProps(
    'HoverCardTarget',
    defaultProps,
    props
  );

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useHoverCardContext();
  const childProps = child.props as any;
  const targetRef = useMergedRef(getRefProp(child), ctx.assignTarget, ctx.reference);

  const referenceProps = ctx.getReferenceProps(
    eventPropsWrapperName ? childProps[eventPropsWrapperName] : childProps
  );

  const accessibleProps =
    ctx.withRoles && ctx.role === 'tooltip'
      ? {
          'aria-describedby':
            [childProps['aria-describedby'], ctx.opened ? ctx.dropdownId : null]
              .filter(Boolean)
              .join(' ') || undefined,
        }
      : undefined;

  const clonedProps: any = {
    ...(eventPropsWrapperName ? { [eventPropsWrapperName]: referenceProps } : referenceProps),
    ...accessibleProps,
    ref: targetRef,
  };

  return (
    <Popover.Target refProp={refProp} {...others}>
      {cloneElement(child, clonedProps)}
    </Popover.Target>
  );
}

HoverCardTarget.displayName = '@mantine/core/HoverCardTarget';
