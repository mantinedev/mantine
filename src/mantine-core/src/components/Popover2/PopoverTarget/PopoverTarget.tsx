import React, { cloneElement } from 'react';
import { useMergedRef, useResizeObserver } from '@mantine/hooks';
import { isElement } from '@mantine/utils';
import { usePopoverContext } from '../Popover.context';
import { POPOVER_ERRORS } from '../Popover.errors';

interface PopoverTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export function PopoverTarget({ children, refProp = 'ref' }: PopoverTargetProps) {
  if (!isElement(children)) {
    throw new Error(POPOVER_ERRORS.children);
  }

  const ctx = usePopoverContext();
  const target = children as React.ReactElement;
  const [resizeObserverRef, rect] = useResizeObserver();
  const targetRef = useMergedRef(ctx.reference, resizeObserverRef, (target as any).ref);
  console.log(rect);

  return cloneElement(target, { [refProp]: targetRef });
}

PopoverTarget.displayName = '@mantine/core/PopoverTarget';
