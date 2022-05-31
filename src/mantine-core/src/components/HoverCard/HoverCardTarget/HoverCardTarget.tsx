import React, { cloneElement } from 'react';
import { isElement, createEventHandler } from '@mantine/utils';
import { Popover, PopoverTargetProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';
import { HOVER_CARD_ERRORS } from '../HoverCard.errors';

export interface HoverCardTargetProps extends PopoverTargetProps {}

export function HoverCardTarget({ children, refProp }: HoverCardTargetProps) {
  if (!isElement(children)) {
    throw new Error(HOVER_CARD_ERRORS.children);
  }

  const ctx = useHoverCardContext();
  const target = children as React.ReactElement;
  const onMouseEnter = createEventHandler(target.props.onMouseEnter, ctx.openDropdown);
  const onMouseLeave = createEventHandler(target.props.onMouseLeave, ctx.closeDropdown);

  return (
    <Popover.Target refProp={refProp}>
      {cloneElement(children as React.ReactElement, { onMouseEnter, onMouseLeave })}
    </Popover.Target>
  );
}

HoverCardTarget.displayName = '@mantine/core/HoverCardTarget';
