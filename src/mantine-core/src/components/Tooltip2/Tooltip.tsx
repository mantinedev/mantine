import React, { cloneElement, useEffect, useState } from 'react';
import { useFloating, Placement, shift, autoUpdate, flip } from '@floating-ui/react-dom';
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
  const { reference, floating, strategy, x, y, update, refs } = useFloating({
    placement: position,
    middleware: [shift(), flip()],
  });

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
      <Transition mounted={opened} transition="pop">
        {(styles) => (
          <div
            ref={floating}
            style={{
              position: strategy,
              top: y ?? '',
              left: x ?? '',
              background: 'red',
              ...styles,
            }}
          >
            Tooltip
          </div>
        )}
      </Transition>
      {cloneElement(children as React.ReactElement, {
        [refProp]: reference,
        onMouseEnter: () => setOpened(true),
        onMouseLeave: () => setOpened(false),
      })}
    </>
  );
}
