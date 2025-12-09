import { cloneElement, use } from 'react';
import { createEventHandler, getSingleElementChild, useProps } from '../../../core';
import { Popover, PopoverTargetProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';
import { HoverCardGroupContext } from '../HoverCardGroup/HoverCardGroup';

export interface HoverCardTargetProps extends PopoverTargetProps {
  /** Key of the prop used to pass event listeners, by default event listeners are passed directly to component */
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
  const groupContext = use(HoverCardGroupContext);

  if (groupContext.withinGroup && ctx.getReferenceProps && ctx.reference) {
    const referenceProps = ctx.getReferenceProps();

    return (
      <Popover.Target refProp={refProp} {...others}>
        {cloneElement(
          child,
          eventPropsWrapperName
            ? { [eventPropsWrapperName]: { ...referenceProps, ref: ctx.reference } }
            : { ...referenceProps, ref: ctx.reference }
        )}
      </Popover.Target>
    );
  }

  const onMouseEnter = createEventHandler((child.props as any).onMouseEnter, ctx.openDropdown);
  const onMouseLeave = createEventHandler((child.props as any).onMouseLeave, ctx.closeDropdown);

  const eventListeners = { onMouseEnter, onMouseLeave };

  return (
    <Popover.Target refProp={refProp} {...others}>
      {cloneElement(
        child,
        eventPropsWrapperName ? { [eventPropsWrapperName]: eventListeners } : eventListeners
      )}
    </Popover.Target>
  );
}

HoverCardTarget.displayName = '@mantine/core/HoverCardTarget';
