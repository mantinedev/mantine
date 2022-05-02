import React from 'react';
import { isElement } from '@mantine/utils';
import { Popover, PopoverTargetProps } from '../../Popover';
import { HOVER_CARD_ERRORS } from '../HoverCard.errors';

export function HoverCardTarget({ children, refProp }: PopoverTargetProps) {
  if (!isElement(children)) {
    throw new Error(HOVER_CARD_ERRORS['popover-children']);
  }

  return <Popover.Target refProp={refProp}>{children}</Popover.Target>;
}

HoverCardTarget.displayName = '@mantine/core/HoverCardTarget';
