import { cloneElement, useEffect, useRef } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  createVarsResolver,
  factory,
  Factory,
  getDefaultZIndex,
  getRadius,
  getRefProp,
  getSingleElementChild,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import {
  ArrowPosition,
  FloatingArrow,
  FloatingAxesOffsets,
  FloatingPosition,
  FloatingStrategy,
  getFloatingPosition,
} from '../../utils/Floating';
import { OptionalPortal } from '../Portal';
import { getTransitionProps, Transition, TransitionOverride } from '../Transition';
import classes from './Tooltip.module.css';
import { TooltipBaseProps, TooltipCssVariables, TooltipStylesNames } from './Tooltip.types';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { useTooltip } from './use-tooltip';

export interface TooltipProps extends TooltipBaseProps {
  /** Called when tooltip position changes */
  onPositionChange?: (position: FloatingPosition) => void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms @default 0 */
  closeDelay?: number;

  /** Controlled opened state */
  opened?: boolean;

  /** Uncontrolled tooltip initial opened state */
  defaultOpened?: boolean;

  /** Space between target element and tooltip in px @default 5 */
  offset?: number | FloatingAxesOffsets;

  /** If set, the tooltip has an arrow @default false */
  withArrow?: boolean;

  /** Arrow size in px @default 4 */
  arrowSize?: number;

  /** Arrow offset in px @default 5 */
  arrowOffset?: number;

  /** Arrow `border-radius` in px @default 0 */
  arrowRadius?: number;

  /** Arrow position relative to the tooltip @default side */
  arrowPosition?: ArrowPosition;

  /** Props passed down to the `Transition` component that used to animate tooltip presence, use to configure duration and animation type @default { duration: 100, transition: 'fade' } */
  transitionProps?: TransitionOverride;

  /** Determines which events will be used to show tooltip @default { hover: true, focus: false, touch: false } */
  events?: { hover: boolean; focus: boolean; touch: boolean };

  /** Must be set if the tooltip target is an inline element */
  inline?: boolean;

  /** If set, the tooltip is not unmounted from the DOM when hidden, `display: none` styles are applied instead */
  keepMounted?: boolean;

  /** Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) @default 'absolute' */
  floatingStrategy?: FloatingStrategy;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** Selector, ref of an element or element itself that should be used for positioning */
  target?: React.RefObject<HTMLElement | null> | HTMLElement | null | string;
}

export type TooltipFactory = Factory<{
  props: TooltipProps;
  ref: HTMLDivElement;
  stylesNames: TooltipStylesNames;
  vars: TooltipCssVariables;
  staticComponents: {
    Floating: typeof TooltipFloating;
    Group: typeof TooltipGroup;
  };
}>;

const defaultProps = {
  position: 'top',
  refProp: 'ref',
  withinPortal: true,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: 'side',
  offset: 5,
  transitionProps: { duration: 100, transition: 'fade' },
  events: { hover: true, focus: false, touch: false },
  zIndex: getDefaultZIndex('popover'),
  middlewares: { flip: true, shift: true, inline: false },
} satisfies Partial<TooltipProps>;

const varsResolver = createVarsResolver<TooltipFactory>(
  (theme, { radius, color, variant, autoContrast }) => {
    const colors = theme.variantColorResolver({
      theme,
      color: color || theme.primaryColor,
      autoContrast,
      variant: variant || 'filled',
    });

    return {
      tooltip: {
        '--tooltip-radius': radius === undefined ? undefined : getRadius(radius),
        '--tooltip-bg': color ? colors.background : undefined,
        '--tooltip-color': color ? colors.color : undefined,
      },
    };
  }
);

export const Tooltip = factory<TooltipFactory>((_props) => {
  const props = useProps('Tooltip', defaultProps, _props);
  const {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    defaultOpened,
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
    arrowRadius,
    arrowPosition,
    offset,
    transitionProps,
    multiline,
    events,
    zIndex,
    disabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline,
    variant,
    keepMounted,
    vars,
    portalProps,
    mod,
    floatingStrategy,
    middlewares,
    autoContrast,
    attributes,
    target,
    ref,
    ...others
  } = props;

  const { dir } = useDirection();
  const arrowRef = useRef<HTMLDivElement>(null);

  const tooltip = useTooltip({
    position: getFloatingPosition(dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    defaultOpened,
    events,
    arrowRef,
    arrowOffset,
    offset: typeof offset === 'number' ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
    inline,
    strategy: floatingStrategy,
    middlewares,
  });

  useEffect(() => {
    const targetNode =
      target instanceof HTMLElement
        ? target
        : typeof target === 'string'
          ? document.querySelector(target)
          : target?.current || null;

    if (targetNode) {
      tooltip.reference(targetNode);
    }
  }, [target, tooltip]);

  const getStyles = useStyles<TooltipFactory>({
    name: 'Tooltip',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'tooltip',
    vars,
    varsResolver,
  });

  const child = getSingleElementChild(children);
  if (!target && !child) {
    return null;
  }

  const tooltipStyles = getStyles('tooltip');

  if (target) {
    const transition = getTransitionProps(transitionProps, { duration: 100, transition: 'fade' });
    return (
      <>
        <OptionalPortal {...portalProps} withinPortal={withinPortal}>
          <Transition
            {...transition}
            keepMounted={keepMounted}
            mounted={!disabled && !!tooltip.opened}
            duration={tooltip.isGroupPhase ? 10 : transition.duration}
          >
            {(transitionStyles) => (
              <Box
                {...others}
                data-fixed={floatingStrategy === 'fixed' || undefined}
                variant={variant}
                mod={[{ multiline }, mod]}
                {...tooltipStyles}
                {...tooltip.getFloatingProps({
                  ref: tooltip.floating,
                  className: tooltipStyles.className,
                  style: {
                    ...tooltipStyles.style,
                    ...transitionStyles,
                    zIndex: zIndex as React.CSSProperties['zIndex'],
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
                  {...getStyles('arrow')}
                />
              </Box>
            )}
          </Transition>
        </OptionalPortal>
      </>
    );
  }

  // fallback to children-based approach
  const childProps = child!.props as any;
  const targetRef = useMergedRef(tooltip.reference, getRefProp(child), ref);
  const transition = getTransitionProps(transitionProps, { duration: 100, transition: 'fade' });

  return (
    <>
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Transition
          {...transition}
          keepMounted={keepMounted}
          mounted={!disabled && !!tooltip.opened}
          duration={tooltip.isGroupPhase ? 10 : transition.duration}
        >
          {(transitionStyles) => (
            <Box
              {...others}
              data-fixed={floatingStrategy === 'fixed' || undefined}
              variant={variant}
              mod={[{ multiline }, mod]}
              {...tooltip.getFloatingProps({
                ref: tooltip.floating,
                className: getStyles('tooltip').className,
                style: {
                  ...getStyles('tooltip').style,
                  ...transitionStyles,
                  zIndex: zIndex as React.CSSProperties['zIndex'],
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
                {...getStyles('arrow')}
              />
            </Box>
          )}
        </Transition>
      </OptionalPortal>

      {cloneElement(
        child!,
        tooltip.getReferenceProps({
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove: props.onMouseMove,
          onPointerDown: props.onPointerDown,
          onPointerEnter: props.onPointerEnter,
          ...childProps,
          className: cx(className, childProps.className),
          [refProp]: targetRef,
        })
      )}
    </>
  );
});

Tooltip.classes = classes;
Tooltip.varsResolver = varsResolver;
Tooltip.displayName = '@mantine/core/Tooltip';
Tooltip.Floating = TooltipFloating;
Tooltip.Group = TooltipGroup;
