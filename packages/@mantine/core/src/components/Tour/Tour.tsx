import { Children, useCallback, useEffect, useId, useRef, useState } from 'react';
import { flip, offset, shift, size, useFloating } from '@floating-ui/react';
import { useFocusReturn, useHotkeys, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import type { FloatingPosition } from '../../utils/Floating';
import { OptionalPortal, type PortalProps } from '../Portal';
import { Transition, type TransitionOverride } from '../Transition';
import { UnstyledButton } from '../UnstyledButton';
import { defaultLabels, TourLabels, TourProvider } from './Tour.context';
import { TourBeacon, type TourBeaconProps } from './TourBeacon';
import { TourBody, type TourBodyProps } from './TourBody';
import { TourCloseButton, type TourCloseButtonProps } from './TourCloseButton';
import { TourNavigation, type TourNavigationProps } from './TourNavigation';
import { TourOverlay, type TourOverlayProps } from './TourOverlay';
import { TourRoot, type TourRootProps } from './TourRoot';
import { TourStep, type TourStepProps } from './TourStep';
import { TourTitle, type TourTitleProps } from './TourTitle';
import { TourTooltip, type TourTooltipProps } from './TourTooltip';
import classes from './Tour.module.css';

export type TourStylesNames =
  | 'root'
  | 'overlay'
  | 'spotlight'
  | 'tooltip'
  | 'title'
  | 'body'
  | 'navigation'
  | 'closeButton'
  | 'stepCounter'
  | 'beacon'
  | 'beaconPulse'
  | 'navigationButton';

export type TourCssVariables = {
  root:
    | '--tour-z-index'
    | '--tour-overlay-color'
    | '--tour-tooltip-radius'
    | '--tour-beacon-size'
    | '--tour-beacon-color'
    | '--tour-spotlight-padding'
    | '--tour-spotlight-radius'
    | '--tour-tooltip-shadow';
};

export interface TourProps extends BoxProps, StylesApiProps<TourFactory>, ElementProps<'div'> {
  /** Whether the tour is active @default false */
  active?: boolean;

  /** Called when the tour is closed */
  onClose?: () => void;

  /** Controlled current step index */
  step?: number;

  /** Uncontrolled default step index @default 0 */
  defaultStep?: number;

  /** Called when step changes */
  onStepChange?: (step: number) => void;

  /** Called when a step opens */
  onStepOpen?: (step: number) => void;

  /** Called when a step closes */
  onStepClose?: (step: number) => void;

  /** Tour mode @default "guided" */
  mode?: 'guided' | 'beacon';

  /** Whether to display the overlay @default true */
  withOverlay?: boolean;

  /** Whether target elements can be interacted with through the overlay @default false */
  withOverlayInteraction?: boolean;

  /** Whether to display the close button @default true */
  withCloseButton?: boolean;

  /** Whether keyboard navigation is enabled in guided mode @default true */
  withKeyboardNavigation?: boolean;

  /** Whether to scroll target elements into view @default true */
  withScrollIntoView?: boolean;

  /** Custom scroll handler */
  scrollToHandler?: (element: HTMLElement) => void;

  /** Padding around the spotlight cutout in px @default 8 */
  spotlightPadding?: number;

  /** Border radius of the spotlight cutout in px @default 4 */
  spotlightRadius?: number;

  /** Whether pressing Escape closes the tour @default true */
  closeOnEscape?: boolean;

  /** Whether clicking the overlay closes the tour @default false */
  closeOnOverlayClick?: boolean;

  /** Labels for tour UI elements */
  labels?: Partial<TourLabels>;

  /** Whether to render inside a portal @default true */
  withinPortal?: boolean;

  /** Props passed to the Portal component */
  portalProps?: Omit<PortalProps, 'children'>;

  /** z-index of the tour @default 10000 */
  zIndex?: string | number;

  /** Transition props for the tooltip */
  transitionProps?: TransitionOverride;

  /** Duration of the tooltip position transition between steps in ms @default 500 */
  stepTransitionDuration?: number;

  /** Max width of the tooltip, tooltip always takes this width if viewport allows @default 360 */
  maxWidth?: number;

  /** Tour step overlay color @default "rgba(0, 0, 0, 0.5)" */
  overlayColor?: string;

  /** Shadow for the tooltip */
  tooltipShadow?: string;

  /** Tour steps as children – use Tour.Step components */
  children?: React.ReactNode;
}

export type TourFactory = Factory<{
  props: TourProps;
  ref: HTMLDivElement;
  stylesNames: TourStylesNames;
  vars: TourCssVariables;
  staticComponents: {
    Root: typeof TourRoot;
    Step: typeof TourStep;
    Overlay: typeof TourOverlay;
    Tooltip: typeof TourTooltip;
    Title: typeof TourTitle;
    Body: typeof TourBody;
    Navigation: typeof TourNavigation;
    Beacon: typeof TourBeacon;
    CloseButton: typeof TourCloseButton;
  };
}>;

const defaultProps = {
  active: false,
  mode: 'guided',
  withOverlay: true,
  withOverlayInteraction: false,
  withCloseButton: true,
  withKeyboardNavigation: true,
  withScrollIntoView: true,
  spotlightPadding: 8,
  closeOnEscape: true,
  closeOnOverlayClick: false,
  withinPortal: true,
  zIndex: 10000,
  transitionProps: { duration: 200, transition: 'fade' },
  maxWidth: 360,
  stepTransitionDuration: 500,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
} satisfies Partial<TourProps>;

const varsResolver = createVarsResolver<TourFactory>(
  (_, { zIndex, overlayColor, spotlightRadius, spotlightPadding, tooltipShadow }) => ({
    root: {
      '--tour-z-index': zIndex?.toString(),
      '--tour-overlay-color': overlayColor,
      '--tour-tooltip-radius': spotlightRadius !== undefined ? `${spotlightRadius}px` : undefined,
      '--tour-beacon-size': undefined,
      '--tour-beacon-color': undefined,
      '--tour-spotlight-padding':
        spotlightPadding !== undefined ? `${spotlightPadding}px` : undefined,
      '--tour-spotlight-radius': spotlightRadius !== undefined ? `${spotlightRadius}px` : undefined,
      '--tour-tooltip-shadow': tooltipShadow,
    },
  })
);

interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

function useTargetRect(target: string | React.RefObject<HTMLElement | null> | undefined) {
  const [rect, setRect] = useState<TargetRect | null>(null);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) {
      setRect(null);
      setElement(null);
      return;
    }

    const resolve = () =>
      typeof target === 'string'
        ? document.querySelector<HTMLElement>(target)
        : target?.current || null;

    const el = resolve();
    setElement(el);

    if (!el && typeof target === 'string') {
      const mutationObserver = new MutationObserver(() => {
        const found = resolve();
        if (found) {
          mutationObserver.disconnect();
          setElement(found);
        }
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        mutationObserver.disconnect();
      };
    }

    if (!el) {
      setRect(null);
      return;
    }

    const updateRect = () => {
      const r = el.getBoundingClientRect();
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };

    updateRect();

    const observer = new ResizeObserver(updateRect);
    observer.observe(el);
    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
    };
  }, [target, element]);

  return { rect, element };
}

interface TourBeaconPositionedProps {
  target: string | React.RefObject<HTMLElement | null> | undefined;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
  pulseStyles?: Record<string, unknown>;
}

function TourBeaconPositioned({
  target,
  onClick,
  ariaLabel,
  className,
  style,
  pulseStyles,
}: TourBeaconPositionedProps) {
  const { element } = useTargetRect(target);

  const { refs, floatingStyles } = useFloating({
    elements: { reference: element },
    placement: 'top-end',
    middleware: [offset({ mainAxis: -4, crossAxis: -4 })],
  });

  if (!element) {
    return null;
  }

  return (
    <UnstyledButton
      ref={refs.setFloating}
      role="button"
      aria-label={ariaLabel}
      className={className}
      style={{ ...style, ...floatingStyles }}
      onClick={onClick}
    >
      <span {...pulseStyles} />
    </UnstyledButton>
  );
}

export const Tour = factory<TourFactory>((_props) => {
  const props = useProps('Tour', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    active,
    onClose,
    step: stepProp,
    defaultStep,
    onStepChange,
    onStepOpen,
    onStepClose,
    mode,
    withOverlay,
    withOverlayInteraction,
    withCloseButton,
    withKeyboardNavigation,
    withScrollIntoView,
    scrollToHandler,
    spotlightPadding,
    spotlightRadius,
    closeOnEscape,
    closeOnOverlayClick,
    labels: labelsProp,
    withinPortal,
    portalProps,
    zIndex,
    transitionProps,
    stepTransitionDuration,
    maxWidth,
    overlayColor,
    tooltipShadow,
    children,
    attributes,
    ...others
  } = props;

  const labels: TourLabels = { ...defaultLabels, ...labelsProp };
  const spotlightPaddingValue = spotlightPadding!;
  const maskId = useId();

  const steps: TourStepProps[] = [];
  Children.forEach(children, (child) => {
    if (child && typeof child === 'object' && 'type' in child && child.type === TourStep) {
      steps.push(child.props as TourStepProps);
    }
  });

  const [currentStep, setCurrentStep] = useUncontrolled({
    value: stepProp,
    defaultValue: defaultStep,
    finalValue: 0,
    onChange: onStepChange,
  });

  const [beaconOpenStep, setBeaconOpenStep] = useState<number | null>(null);

  const previousStepRef = useRef(currentStep);
  const previousBeaconOpenStepRef = useRef<number | null>(null);

  const close = useCallback(() => {
    onStepClose?.(currentStep);
    steps[currentStep]?.onStepClose?.();
    setBeaconOpenStep(null);
    onClose?.();
  }, [onClose, onStepClose, currentStep]);

  useFocusReturn({ opened: !!active, shouldReturnFocus: true });

  const activeStep = steps[currentStep] || null;
  const activeTarget =
    mode === 'beacon'
      ? beaconOpenStep !== null
        ? steps[beaconOpenStep]?.target
        : undefined
      : activeStep?.target;

  const { rect: targetRect, element: targetElement } = useTargetRect(
    active ? activeTarget : undefined
  );

  useEffect(() => {
    if (!active) {
      return;
    }

    const prevStep = previousStepRef.current;
    previousStepRef.current = currentStep;

    if (prevStep !== currentStep) {
      onStepClose?.(prevStep);
      steps[prevStep]?.onStepClose?.();
      onStepOpen?.(currentStep);
    }

    activeStep?.onStepOpen?.();
  }, [active, currentStep]);

  useEffect(() => {
    if (active) {
      onStepOpen?.(currentStep);
    }
  }, [active]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const prevBeaconStep = previousBeaconOpenStepRef.current;
    previousBeaconOpenStepRef.current = beaconOpenStep;

    if (prevBeaconStep !== beaconOpenStep) {
      if (prevBeaconStep !== null) {
        onStepClose?.(prevBeaconStep);
        steps[prevBeaconStep]?.onStepClose?.();
      }
      if (beaconOpenStep !== null) {
        onStepOpen?.(beaconOpenStep);
        steps[beaconOpenStep]?.onStepOpen?.();
      }
    }
  }, [active, beaconOpenStep]);

  useEffect(() => {
    if (active && withScrollIntoView && targetElement) {
      if (scrollToHandler) {
        scrollToHandler(targetElement);
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [active, targetElement, withScrollIntoView, scrollToHandler]);

  const hotkeyHandlers: [string, () => void][] = [];

  if (active && mode === 'guided' && withKeyboardNavigation) {
    if (closeOnEscape) {
      hotkeyHandlers.push(['Escape', close]);
    }
    hotkeyHandlers.push([
      'ArrowRight',
      () => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      },
    ]);
    hotkeyHandlers.push([
      'ArrowLeft',
      () => {
        if (currentStep > 0) {
          setCurrentStep(currentStep - 1);
        }
      },
    ]);
  } else if (active && closeOnEscape) {
    hotkeyHandlers.push(['Escape', close]);
  }

  useHotkeys(hotkeyHandlers);

  const displayStep =
    mode === 'beacon' && beaconOpenStep !== null ? steps[beaconOpenStep] : activeStep;
  const displayStepIndex =
    mode === 'beacon' && beaconOpenStep !== null ? beaconOpenStep : currentStep;

  const stepPosition: FloatingPosition = displayStep?.position || 'bottom';

  const [constrainedWidth, setConstrainedWidth] = useState(maxWidth!);

  const { refs, floatingStyles } = useFloating({
    elements: { reference: targetElement },
    placement: stepPosition,
    transform: false,
    middleware: [
      offset(12),
      flip(),
      shift({ padding: 8 }),
      size({
        padding: 8,
        apply({ availableWidth }) {
          setConstrainedWidth(Math.min(maxWidth!, availableWidth));
        },
      }),
    ],
  });

  const isCentered = !targetElement;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [centeredPos, setCenteredPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (!isCentered) {
      return;
    }

    const el = tooltipRef.current;
    if (!el) {
      return;
    }

    const update = () => {
      const height = el.getBoundingClientRect().height;
      setCenteredPos({
        top: (window.innerHeight - height) / 2,
        left: (window.innerWidth - constrainedWidth) / 2,
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isCentered, constrainedWidth, displayStepIndex]);

  const getStyles = useStyles<TourFactory>({
    name: 'Tour',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  if (!active) {
    return null;
  }

  const showTooltip = mode === 'guided' || (mode === 'beacon' && beaconOpenStep !== null);

  const resolvedSpotlightPadding = displayStep?.spotlightPadding ?? spotlightPaddingValue;
  const resolvedSpotlightRadius = displayStep?.spotlightRadius ?? spotlightRadius ?? 4;
  const resolvedWithOverlay = displayStep?.withOverlay ?? withOverlay;

  return (
    <TourProvider
      value={{
        getStyles,
        step: displayStepIndex,
        setStep: (s) => {
          if (mode === 'beacon' && beaconOpenStep !== null) {
            setBeaconOpenStep(s);
          }
          setCurrentStep(s);
        },
        stepsCount: steps.length,
        close,
        mode: mode!,
        withOverlay: withOverlay!,
        withOverlayInteraction: withOverlayInteraction!,
        withCloseButton: withCloseButton!,
        withKeyboardNavigation: withKeyboardNavigation!,
        withScrollIntoView: withScrollIntoView!,
        scrollToHandler,
        spotlightPadding: resolvedSpotlightPadding,
        spotlightRadius: resolvedSpotlightRadius,
        closeOnEscape: closeOnEscape!,
        closeOnOverlayClick: closeOnOverlayClick!,
        labels,
      }}
    >
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Box {...getStyles('root')} {...others}>
          {resolvedWithOverlay && showTooltip && (
            <svg
              {...getStyles('overlay')}
              role="presentation"
              width="100%"
              height="100%"
              data-with-overlay-interaction={withOverlayInteraction || undefined}
              onClick={() => {
                if (closeOnOverlayClick) {
                  close();
                }
              }}
            >
              <defs>
                <mask id={maskId}>
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  {targetRect && (
                    <rect
                      x={targetRect.left - resolvedSpotlightPadding}
                      y={targetRect.top - resolvedSpotlightPadding}
                      width={targetRect.width + resolvedSpotlightPadding * 2}
                      height={targetRect.height + resolvedSpotlightPadding * 2}
                      rx={resolvedSpotlightRadius}
                      ry={resolvedSpotlightRadius}
                      fill="black"
                      {...getStyles('spotlight')}
                    />
                  )}
                </mask>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill={overlayColor}
                mask={`url(#${maskId})`}
              />
            </svg>
          )}

          {mode === 'beacon' &&
            beaconOpenStep === null &&
            steps.map((stepData, index) => {
              if (stepData.withBeacon === false) {
                return null;
              }
              return (
                <TourBeaconPositioned
                  key={index}
                  target={stepData.target}
                  onClick={() => {
                    setBeaconOpenStep(index);
                    setCurrentStep(index);
                  }}
                  ariaLabel={labels.beacon}
                  pulseStyles={getStyles('beaconPulse')}
                  {...getStyles('beacon')}
                />
              );
            })}

          <Transition
            mounted={showTooltip && !!displayStep}
            duration={transitionProps?.duration ?? 200}
            transition={transitionProps?.transition ?? 'fade'}
            timingFunction={transitionProps?.timingFunction}
          >
            {(transitionStyles) => (
              <Box
                ref={(node) => {
                  refs.setFloating(node);
                  (tooltipRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
                }}
                {...getStyles('tooltip')}
                data-centered={isCentered || undefined}
                style={{
                  ...getStyles('tooltip').style,
                  ...(isCentered
                    ? centeredPos ?? { top: window.innerHeight / 2, left: (window.innerWidth - constrainedWidth) / 2 }
                    : floatingStyles),
                  ...transitionStyles,
                  width: constrainedWidth,
                  transition: [
                    transitionStyles.transitionProperty
                      ? `${transitionStyles.transitionProperty} ${transitionStyles.transitionDuration} ${transitionStyles.transitionTimingFunction || 'ease'}`
                      : null,
                    `top ${stepTransitionDuration}ms ease`,
                    `left ${stepTransitionDuration}ms ease`,
                  ]
                    .filter(Boolean)
                    .join(', '),
                  transitionProperty: undefined,
                  transitionDuration: undefined,
                  transitionTimingFunction: undefined,
                }}
              >
                {withCloseButton && <TourCloseButton />}
                {displayStep?.title && <TourTitle>{displayStep.title}</TourTitle>}
                {displayStep?.children && <TourBody>{displayStep.children}</TourBody>}
                <TourNavigation />
              </Box>
            )}
          </Transition>
        </Box>
      </OptionalPortal>
    </TourProvider>
  );
});

Tour.classes = classes;
Tour.displayName = '@mantine/core/Tour';
Tour.Root = TourRoot;
Tour.Step = TourStep;
Tour.Overlay = TourOverlay;
Tour.Tooltip = TourTooltip;
Tour.Title = TourTitle;
Tour.Body = TourBody;
Tour.CloseButton = TourCloseButton;
Tour.Navigation = TourNavigation;
Tour.Beacon = TourBeacon;

export namespace Tour {
  export type Props = TourProps;
  export type StylesNames = TourStylesNames;
  export type CssVariables = TourCssVariables;
  export type Factory = TourFactory;

  export namespace Root {
    export type Props = TourRootProps;
  }

  export namespace Step {
    export type Props = TourStepProps;
  }

  export namespace Overlay {
    export type Props = TourOverlayProps;
  }

  export namespace Tooltip {
    export type Props = TourTooltipProps;
  }

  export namespace Title {
    export type Props = TourTitleProps;
  }

  export namespace Body {
    export type Props = TourBodyProps;
  }

  export namespace CloseButton {
    export type Props = TourCloseButtonProps;
  }

  export namespace Navigation {
    export type Props = TourNavigationProps;
  }

  export namespace Beacon {
    export type Props = TourBeaconProps;
  }
}
