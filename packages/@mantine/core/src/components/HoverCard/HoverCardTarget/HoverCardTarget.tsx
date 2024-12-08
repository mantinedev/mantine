import { cloneElement, forwardRef } from 'react';
import { createEventHandler, isElement, useProps } from '../../../core';
import { Popover, PopoverTargetProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';

export interface HoverCardTargetProps extends PopoverTargetProps {
  /** Key of the prop that is used to pass event listeners, by default event listeners are passed directly to component */
  eventPropsWrapperName?: string;
}

const defaultProps: Partial<HoverCardTargetProps> = {
  refProp: 'ref',
};

export const HoverCardTarget = forwardRef<HTMLElement, HoverCardTargetProps>((props, ref) => {
  const { children, refProp, eventPropsWrapperName, ...others } = useProps(
    'HoverCardTarget',
    defaultProps,
    props
  );

  if (!isElement(children)) {
    throw new Error(
      'HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useHoverCardContext();
  const onMouseEnter = createEventHandler((children.props as any).onMouseEnter, ctx.openDropdown);
  const onMouseLeave = createEventHandler((children.props as any).onMouseLeave, ctx.closeDropdown);

  const eventListeners = { onMouseEnter, onMouseLeave };

  return (
    <Popover.Target refProp={refProp} ref={ref} {...others}>
      {cloneElement(
        children as React.ReactElement,
        eventPropsWrapperName ? { [eventPropsWrapperName]: eventListeners } : eventListeners
      )}
    </Popover.Target>
  );
});

HoverCardTarget.displayName = '@mantine/core/HoverCardTarget';
