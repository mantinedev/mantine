import React, { cloneElement, useEffect, useState, useCallback } from 'react';
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
  useDelayGroupContext,
  useDelayGroup,
} from '@floating-ui/react-dom-interactions';
import { isElement, useId } from '@mantine/utils';
import { Transition } from '../Transition';
import { TOOLTIP_ERRORS } from './Tooltip.errors';

export interface TooltipProps {
  /** Target element */
  children: React.ReactNode;

  /** Tooltip position relative to target element */
  position?: Placement;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;

  /** Tooltip label */
  label: React.ReactNode;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

export function Tooltip({
  children,
  position,
  refProp = 'ref',
  label,
  openDelay,
  closeDelay,
}: TooltipProps) {
  const [opened, setOpened] = useState(true);
  const uid = useId();
  const { delay, currentId, setCurrentId } = useDelayGroupContext();
  const onChange = useCallback(
    (_opened: boolean) => {
      setOpened(_opened);

      if (opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId]
  );

  const { x, y, reference, floating, strategy, context, refs, update } = useFloating({
    placement: position,
    open: opened,
    onOpenChange: onChange,
    middleware: [offset(5), flip(), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: closeDelay, restMs: openDelay }),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
    useDelayGroup(context, { id: uid }),
  ]);

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  useEffect(() => {
    if (opened && refs.floating.current) {
      autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [opened, refs]);

  const isGroupPhase = opened && currentId && currentId !== uid;

  return (
    <>
      <Transition mounted={opened} transition="fade" duration={isGroupPhase ? 0 : 100}>
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
            {label}
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
