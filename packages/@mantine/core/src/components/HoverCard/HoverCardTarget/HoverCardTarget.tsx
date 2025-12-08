import { Children, cloneElement, forwardRef } from 'react';
import { createEventHandler, isElement, useProps } from '../../../core';
import { Popover, PopoverTargetProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';
import { useHoverCardGroupContext } from '../HoverCardGroup/HoverCardGroup.context';

export interface HoverCardTargetProps extends PopoverTargetProps {
  /** Key of the prop used to pass event listeners, by default event listeners are passed directly to component */
  eventPropsWrapperName?: string;
}

const defaultProps = {
  refProp: 'ref',
} satisfies Partial<HoverCardTargetProps>;

export const HoverCardTarget = forwardRef<HTMLElement, HoverCardTargetProps>((props, ref) => {
  const { children, refProp, eventPropsWrapperName, ...others } = useProps(
    'HoverCardTarget',
    defaultProps,
    props
  );

  const _children = Children.toArray(children);
  if (_children.length !== 1 || !isElement(_children[0])) {
    throw new Error(
      'HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useHoverCardContext();
  const withinGroup = useHoverCardGroupContext();

  if (withinGroup && ctx.getReferenceProps && ctx.reference) {
    const referenceProps = ctx.getReferenceProps();

    return (
      <Popover.Target refProp={refProp} ref={ref} {...others}>
        {cloneElement(
          _children[0],
          eventPropsWrapperName
            ? { [eventPropsWrapperName]: { ...referenceProps, ref: ctx.reference } }
            : { ...referenceProps, ref: ctx.reference }
        )}
      </Popover.Target>
    );
  }

  const onMouseEnter = createEventHandler(
    (_children[0].props as any).onMouseEnter,
    ctx.openDropdown
  );
  const onMouseLeave = createEventHandler(
    (_children[0].props as any).onMouseLeave,
    ctx.closeDropdown
  );

  const eventListeners = { onMouseEnter, onMouseLeave };

  return (
    <Popover.Target refProp={refProp} ref={ref} {...others}>
      {cloneElement(
        _children[0],
        eventPropsWrapperName ? { [eventPropsWrapperName]: eventListeners } : eventListeners
      )}
    </Popover.Target>
  );
});

HoverCardTarget.displayName = '@mantine/core/HoverCardTarget';
