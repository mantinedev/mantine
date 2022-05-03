import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { Popover, PopoverTargetProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';
import { HOVER_CARD_ERRORS } from '../HoverCard.errors';

export interface HoverCardTargetProps extends PopoverTargetProps {}

export function HoverCardTarget({ children, refProp }: HoverCardTargetProps) {
  if (!isElement(children)) {
    throw new Error(HOVER_CARD_ERRORS['hover-card-children']);
  }

  const ctx = useHoverCardContext();
  const target = children as React.ReactElement;

  const onMouseEnter = (event: React.MouseEvent<any>) => {
    target.props.onMouseEnter?.(event);
    ctx.openDropdown();
  };

  const onMouseLeave = (event: React.MouseEvent<any>) => {
    target.props.onMouseLeave?.(event);
    ctx.closeDropdown();
  };

  return (
    <Popover.Target refProp={refProp}>
      {cloneElement(children as React.ReactElement, { onMouseEnter, onMouseLeave })}
    </Popover.Target>
  );
}

HoverCardTarget.displayName = '@mantine/core/HoverCardTarget';
