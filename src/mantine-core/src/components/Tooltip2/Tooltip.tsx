import React, { cloneElement, useEffect, useState } from 'react';
import {
  useFloating,
  Placement,
  shift,
  autoUpdate,
  flip,
  offset,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
} from '@floating-ui/react-dom-interactions';
import { isElement } from '@mantine/utils';
import { Transition } from '../Transition';
import { TOOLTIP_ERRORS } from './Tooltip.errors';

export interface TooltipProps {
  /** Target element */
  children: React.ReactNode;

  /** Tooltip position relative to target element */
  position?: Placement;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export function Tooltip({ children, position, refProp = 'ref' }: TooltipProps) {
  const [opened, setOpened] = useState(true);

  const { x, y, reference, floating, strategy, context, refs, update } = useFloating({
    placement: position,
    open: opened,
    onOpenChange: setOpened,
    middleware: [offset(5), flip(), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  useEffect(() => {
    if (opened && refs.floating.current) {
      autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [opened, refs]);

  return (
    <>
      <Transition mounted={opened} transition="fade" duration={100}>
        {(styles) => (
          <div
            {...getFloatingProps({
              ref: floating,
              style: {
                ...styles,
                position: strategy,
                top: y ?? '',
                left: x ?? '',
                backgroundColor: 'red',
              },
            })}
          >
            Tooltip
          </div>
        )}
      </Transition>
      {cloneElement(
        children as React.ReactElement,
        getReferenceProps({ [refProp]: reference, ...(children as React.ReactElement).props })
      )}
    </>
  );
}
