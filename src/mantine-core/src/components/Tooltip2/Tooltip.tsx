import React, { cloneElement } from 'react';
import { Placement } from '@floating-ui/react-dom-interactions';
import { isElement } from '@mantine/utils';
import { MantineColor, MantineNumberSize, DefaultProps, ClassNames } from '@mantine/styles';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { useTooltip } from './use-tooltip';
import { Transition } from '../Transition';
import { OptionalPortal } from '../Portal';
import { TOOLTIP_ERRORS } from './Tooltip.errors';
import useStyles, { TooltipStylesParams } from './Tooltip.styles';

export type TooltipStylesNames = ClassNames<typeof useStyles>;

export interface TooltipProps
  extends DefaultProps<TooltipStylesNames, TooltipStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Target element */
  children: React.ReactNode;

  /** Tooltip position relative to target element */
  position?: Placement;

  /** Called when tooltip position changes */
  onPositionChange?(position: Placement): void;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;

  /** Tooltip label */
  label: React.ReactNode;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;

  /** Controls opened state */
  opened?: boolean;

  /** Determines whether tooltip should be rendered within Portal */
  withinPortal?: boolean;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Key of theme.colors */
  color?: MantineColor;
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
