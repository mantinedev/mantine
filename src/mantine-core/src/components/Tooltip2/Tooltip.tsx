import React, { cloneElement } from 'react';
import { Placement } from '@floating-ui/react-dom-interactions';
import { isElement } from '@mantine/utils';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { useTooltip } from './use-tooltip';
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
  const tooltip = useTooltip({ position, closeDelay, openDelay });

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const target = children as React.ReactElement;

  return (
    <>
      <Transition
        mounted={tooltip.opened}
        transition="fade"
        duration={tooltip.isGroupPhase ? 10 : 100}
      >
        {(styles) => (
          <div
            {...tooltip.getFloatingProps({
              ref: tooltip.floating,
              style: {
                ...styles,
                position: 'absolute',
                top: tooltip.y ?? '',
                left: tooltip.x ?? '',
                backgroundColor: 'red',
              },
            })}
          >
            {label}
          </div>
        )}
      </Transition>
      {cloneElement(
        target,
        tooltip.getReferenceProps({ [refProp]: tooltip.reference, ...target.props })
      )}
    </>
  );
}

Tooltip.Group = TooltipGroup;
