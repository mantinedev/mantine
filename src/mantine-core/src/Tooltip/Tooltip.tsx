import React, { cloneElement, forwardRef, useRef } from 'react';
import { isElement, ForwardRefWithStaticComponents } from '@mantine/utils';
import { useMergedRef } from '@mantine/hooks';
import { getDefaultZIndex, useComponentDefaultProps } from '@mantine/styles';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { useTooltip } from './use-tooltip';
import { FloatingArrow, getFloatingPosition, FloatingPosition, ArrowPosition } from '../Floating';
import { Transition, TransitionOverride } from '../Transition';
import { OptionalPortal } from '../Portal';
import { Box } from '../Box';
import { TOOLTIP_ERRORS } from './Tooltip.errors';
import { TooltipBaseProps } from './Tooltip.types';
import useStyles from './Tooltip.styles';

export interface TooltipProps extends TooltipBaseProps {
  variant?: string;

  /** Called when tooltip position changes */
  onPositionChange?(position: FloatingPosition): void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;

  /** Controls opened state */
  opened?: boolean;

  /** Space between target element and tooltip */
  offset?: number;

  /** Determines whether component should have an arrow */
  withArrow?: boolean;

  /** Arrow size */
  arrowSize?: number;

  /** Arrow offset */
  arrowOffset?: number;

  /** Arrow radius */
  arrowRadius?: number;

  /** Arrow position **/
  arrowPosition?: ArrowPosition;

  /** Props added to Transition component that used to animate tooltip presence, use to configure duration and animation type, { duration: 100, transition: 'fade' } by default */
  transitionProps?: TransitionOverride;

  /** Determines which events will be used to show tooltip */
  events?: { hover: boolean; focus: boolean; touch: boolean };

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];

  /** Set if tooltip is attached to an inline element */
  inline?: boolean;

  /** If set tooltip will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
  keepMounted?: boolean;
}

const defaultProps: Partial<TooltipProps> = {
  position: 'top',
  refProp: 'ref',
  withinPortal: false,
  inline: false,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: 'side',
  offset: 5,
  transitionProps: { duration: 100, transition: 'fade' },
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
    portalProps,
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
    arrowRadius,
    arrowPosition,
    offset,
    transitionProps,
    multiline,
    width,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline,
    variant,
    keepMounted,
    ...others
  } = useComponentDefaultProps('Tooltip', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { radius, color, width, multiline },
    { name: 'Tooltip', classNames, styles, unstyled, variant }
  );

  const tooltip = useTooltip({
    position: getFloatingPosition(theme.dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowRef,
    arrowOffset,
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    positionDependencies: [...positionDependencies, children],
    inline,
  });

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const targetRef = useMergedRef(tooltip.reference, (children as any).ref, ref);

  return (
    <>
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Transition
          keepMounted={keepMounted}
          mounted={!disabled && tooltip.opened}
          {...transitionProps}
          transition={transitionProps.transition || 'fade'}
          duration={tooltip.isGroupPhase ? 10 : transitionProps.duration ?? 100}
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
                  top: tooltip.y ?? 0,
                  left: tooltip.x ?? 0,
                },
              })}
            >
              {label}

              <FloatingArrow
                ref={arrowRef}
                arrowX={tooltip.arrowX}
                arrowY={tooltip.arrowY}
                visible={withArrow}
                position={tooltip.placement}
                arrowSize={arrowSize}
                arrowOffset={arrowOffset}
                arrowRadius={arrowRadius}
                arrowPosition={arrowPosition}
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
          onMouseMove: props.onMouseMove,
          onPointerDown: props.onPointerDown,
          onPointerEnter: props.onPointerEnter,
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
