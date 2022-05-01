import React, { cloneElement } from 'react';
import { Placement } from '@floating-ui/react-dom-interactions';
import { isElement, getArrowPositionStyles, getFloatingPosition } from '@mantine/utils';
import { useMergedRef } from '@mantine/hooks';
import { getDefaultZIndex, useMantineDefaultProps } from '@mantine/styles';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { useTooltip } from './use-tooltip';
import { MantineTransition, Transition } from '../Transition';
import { OptionalPortal } from '../Portal';
import { Box } from '../Box';
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

export function Tooltip(props: TooltipProps) {
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
    ...others
  } = useMantineDefaultProps('Tooltip', defaultProps, props);

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
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    positionDependencies: [...positionDependencies, children],
  });

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const target = children as React.ReactElement;
  const targetRef = useMergedRef(tooltip.reference, (target as any).ref);

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
                className: cx(classes.root, className),
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
              {withArrow && (
                <div
                  className={classes.arrow}
                  style={getArrowPositionStyles({
                    withBorder: false,
                    position: tooltip.placement,
                    arrowSize,
                    arrowOffset,
                    dir: theme.dir,
                  })}
                />
              )}
            </Box>
          )}
        </Transition>
      </OptionalPortal>

      {cloneElement(target, tooltip.getReferenceProps({ [refProp]: targetRef, ...target.props }))}
    </>
  );
}

Tooltip.Group = TooltipGroup;
Tooltip.Floating = TooltipFloating;

Tooltip.displayName = '@mantine/core/Tooltip';
