import React, { cloneElement } from 'react';
import { Placement } from '@floating-ui/react-dom-interactions';
import { isElement } from '@mantine/utils';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { useTooltip } from './use-tooltip';
import { Transition } from '../Transition';
import { OptionalPortal } from '../Portal';
import { TOOLTIP_ERRORS } from './Tooltip.errors';
import { TooltipBaseProps } from './Tooltip.types';
import useStyles from './Tooltip.styles';

export interface TooltipProps extends TooltipBaseProps {
  /** Called when tooltip position changes */
  onPositionChange?(position: Placement): void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;

  /** Controls opened state */
  opened?: boolean;
}

export function Tooltip({
  children,
  position = 'top',
  refProp = 'ref',
  label,
  openDelay,
  closeDelay,
  onPositionChange,
  opened,
  withinPortal = true,
  radius,
  color = 'gray',
  classNames,
  styles,
  unstyled,
  style,
  className,
  ...others
}: TooltipProps) {
  const { classes, cx } = useStyles(
    { radius, color },
    { name: 'Tooltip', classNames, styles, unstyled }
  );

  const tooltip = useTooltip({ position, closeDelay, openDelay, onPositionChange, opened });

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const target = children as React.ReactElement;

  return (
    <>
      <OptionalPortal withinPortal={withinPortal}>
        <Transition
          mounted={tooltip.opened}
          transition="fade"
          duration={tooltip.isGroupPhase ? 10 : 100}
        >
          {(transitionStyles) => (
            <div
              {...tooltip.getFloatingProps({
                ...others,
                ref: tooltip.floating,
                className: cx(classes.root, className),
                style: {
                  ...style,
                  ...transitionStyles,
                  top: tooltip.y ?? '',
                  left: tooltip.x ?? '',
                },
              })}
            >
              {label}
            </div>
          )}
        </Transition>
      </OptionalPortal>

      {cloneElement(
        target,
        tooltip.getReferenceProps({ [refProp]: tooltip.reference, ...target.props })
      )}
    </>
  );
}

Tooltip.Group = TooltipGroup;
Tooltip.Floating = TooltipFloating;
