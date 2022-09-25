import React, { cloneElement, forwardRef, useRef } from 'react';
import { isElement, ForwardRefWithStaticComponents } from '@mantine/utils';
import { useMergedRef } from '@mantine/hooks';
import { getDefaultZIndex, useComponentDefaultProps } from '@mantine/styles';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { useTooltip } from './use-tooltip';
import { FloatingArrow, getFloatingPosition, FloatingPosition } from '../Floating';
import { MantineTransition, Transition } from '../Transition';
import { OptionalPortal } from '../Portal';
import { Box } from '../Box';
import { TOOLTIP_ERRORS } from './Tooltip.errors';
import { TooltipBaseProps } from './Tooltip.types';
import useStyles from './Tooltip.styles';

export interface TooltipProps extends TooltipBaseProps {
  /** Called when tooltip position changes */
  onPositionChange?(position: FloatingPosition): void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;

  /** Controls opened state */
  opened?: boolean;

  /** Space between target element and tooltip in px */
  offset?: number;

  /** Determines whether component should have an arrow */
  withArrow?: boolean;

  /** Arrow size in px */
  arrowSize?: number;

  /** Arrow offset in px */
  arrowOffset?: number;

  /** One of premade transitions ot transition object */
  transition?: MantineTransition;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Determines which events will be used to show tooltip */
  events?: { hover: boolean; focus: boolean; touch: boolean };

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];
}

const defaultProps: Partial<TooltipProps> = {
  position: 'top',
  refProp: 'ref',
  withinPortal: false,
  arrowSize: 4,
  arrowOffset: 5,
  offset: 5,
  transition: 'fade',
  transitionDuration: 100,
  width: 'auto',
  events: { hover: true, focus: false, touch: false },
  zIndex: getDefaultZIndex('popover'),
  positionDependencies: [],
};

const _Tooltip = forwardRef<HTMLElement, TooltipProps>((props, ref) => {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    withinPortal,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    offset,
    transition,
    transitionDuration,
    multiline,
    width,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...others
  } = useComponentDefaultProps('Tooltip', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { radius, color, width, multiline },
    { name: 'Tooltip', classNames, styles, unstyled }
  );

  const tooltip = useTooltip({
    position: getFloatingPosition(theme.dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowRef,
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    positionDependencies: [...positionDependencies, children],
  });

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const targetRef = useMergedRef(tooltip.reference, (children as any).ref, ref);

  return (
    <>
      <OptionalPortal withinPortal={withinPortal}>
        <Transition
          mounted={!disabled && tooltip.opened}
          transition={transition}
          duration={tooltip.isGroupPhase ? 10 : transitionDuration}
        >
          {(transitionStyles) => (
            <Box
              {...others}
              {...tooltip.getFloatingProps({
                ref: tooltip.floating,
                className: classes.tooltip,
                style: {
                  ...style,
                  ...transitionStyles,
                  zIndex,
                  top: tooltip.y ?? '',
                  left: tooltip.x ?? '',
                },
              })}
            >
              {label}

              <FloatingArrow
                ref={arrowRef}
                arrowX={tooltip.arrowX}
                arrowY={tooltip.arrowY}
                visible={withArrow}
                withBorder={false}
                position={tooltip.placement}
                arrowSize={arrowSize}
                arrowOffset={arrowOffset}
                className={classes.arrow}
              />
            </Box>
          )}
        </Transition>
      </OptionalPortal>

      {cloneElement(
        children,
        tooltip.getReferenceProps({
          onClick,
          onMouseEnter,
          onMouseLeave,
          [refProp]: targetRef,
          className: cx(className, children.props.className),
          ...children.props,
        })
      )}
    </>
  );
}) as any;

_Tooltip.Group = TooltipGroup;
_Tooltip.Floating = TooltipFloating;

_Tooltip.displayName = '@mantine/core/Tooltip';

export const Tooltip: ForwardRefWithStaticComponents<
  TooltipProps,
  { Group: typeof TooltipGroup; Floating: typeof TooltipFloating }
> = _Tooltip;
