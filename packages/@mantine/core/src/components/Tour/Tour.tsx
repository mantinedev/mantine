import { useEffect, useId, useRef, useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
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
import { FocusTrap } from '../FocusTrap';
import { OptionalPortal, type PortalProps } from '../Portal';
import { Transition, type TransitionOverride } from '../Transition';
import { defaultLabels, TourLabels, TourProvider } from './Tour.context';
import { TourBeacon, type TourBeaconProps } from './TourBeacon/TourBeacon';
import { TourBeaconPositioned } from './TourBeaconPositioned';
import { TourBody, type TourBodyProps } from './TourBody/TourBody';
import { TourCloseButton, type TourCloseButtonProps } from './TourCloseButton/TourCloseButton';
import { TourNavigation, type TourNavigationProps } from './TourNavigation/TourNavigation';
import { TourOverlay, type TourOverlayProps } from './TourOverlay/TourOverlay';
import { TourRoot, type TourRootProps } from './TourRoot/TourRoot';
import { TourStep, type TourStepProps } from './TourStep/TourStep';
import { TourTitle, type TourTitleProps } from './TourTitle/TourTitle';
import { TourTooltip, type TourTooltipProps } from './TourTooltip/TourTooltip';
import { useTooltipAutoFocus } from './use-tooltip-auto-focus';
import { useTour } from './use-tour';
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

  /** Whether target elements can be interacted with through the overlay, disables `closeOnOverlayClick` @default false */
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

  /** Whether clicking the overlay closes the tour, has no effect when `withOverlayInteraction` is set (the overlay does not receive clicks) @default false */
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

  /** Duration of the tooltip position transition between steps in ms @default 300 */
  stepTransitionDuration?: number;

  /** Max width of the tooltip, tooltip always takes this width if viewport allows @default 360 */
  maxWidth?: number;

  /** Tour step overlay color @default "rgba(0, 0, 0, 0.5)" */
  overlayColor?: string;

  /** Shadow for the tooltip */
  tooltipShadow?: string;

  /** Tour steps – `Tour.Step` elements must be direct children (arrays are supported, Fragments and wrapper components are not) */
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
  transitionProps: { duration: 200, transition: 'pop' },
  maxWidth: 360,
  stepTransitionDuration: 300,
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

const noop = () => {};

function getBeaconLabel(label: string, title: React.ReactNode) {
  return typeof title === 'string' || typeof title === 'number' ? `${label}: ${title}` : label;
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
  const id = useId();
  const maskId = `${id}-mask`;
  const titleId = `${id}-title`;
  const bodyId = `${id}-body`;
  const [titleMounted, setTitleMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);
  const beaconToFocusRef = useRef<number | null>(null);

  const {
    steps,
    setCurrentStep,
    beaconOpenStep,
    setBeaconOpenStep,
    close,
    displayStep,
    displayStepIndex,
    targetRect,
    floatingStyles,
    floatingRefs,
    isCentered,
    constrainedWidth,
    hasPositioned,
    showTooltip,
    lastActiveTargetRef,
  } = useTour({
    active,
    onClose,
    step: stepProp,
    defaultStep,
    onStepChange,
    onStepOpen,
    onStepClose,
    mode,
    withKeyboardNavigation,
    withScrollIntoView,
    scrollToHandler,
    closeOnEscape,
    maxWidth,
    stepTransitionDuration,
    children,
    stepComponent: TourStep,
  });

  useEffect(() => {
    if (!active) {
      beaconToFocusRef.current = null;
    }
  }, [active]);

  const resolvedSpotlightPadding = displayStep?.spotlightPadding ?? spotlightPaddingValue;
  const resolvedSpotlightRadius = displayStep?.spotlightRadius ?? spotlightRadius ?? 4;
  const resolvedWithOverlay = displayStep?.withOverlay ?? withOverlay;
  const focusTrapActive =
    showTooltip && mode === 'guided' && !!resolvedWithOverlay && !withOverlayInteraction;

  const autoFocusRef = useTooltipAutoFocus(!focusTrapActive);
  const tooltipMergedRef = useMergedRef(floatingRefs.setFloating, autoFocusRef);

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
        titleId,
        bodyId,
        titleMounted,
        bodyMounted,
        setTitleMounted,
        setBodyMounted,
        setTargetElement: noop,
      }}
    >
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Box {...getStyles('root')} {...others}>
          {resolvedWithOverlay && (
            <Transition
              mounted={showTooltip}
              duration={transitionProps?.duration ?? 200}
              transition="fade"
            >
              {(overlayStyles) => (
                <svg
                  {...getStyles('overlay')}
                  role="presentation"
                  width="100%"
                  height="100%"
                  style={overlayStyles}
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
            </Transition>
          )}

          {active &&
            mode === 'beacon' &&
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
                    beaconToFocusRef.current = index;
                    setBeaconOpenStep(index);
                    setCurrentStep(index);
                  }}
                  ariaLabel={getBeaconLabel(labels.beacon, stepData.title)}
                  withInitialFocus={beaconToFocusRef.current === index}
                  onInitialFocus={() => {
                    beaconToFocusRef.current = null;
                  }}
                  pulseStyles={getStyles('beaconPulse')}
                  {...getStyles('beacon')}
                />
              );
            })}

          <Transition
            mounted={showTooltip && !!displayStep}
            duration={transitionProps?.duration ?? 200}
            transition={transitionProps?.transition ?? 'pop'}
            onExited={() => {
              lastActiveTargetRef.current = undefined;
            }}
            timingFunction={transitionProps?.timingFunction}
          >
            {({
              transitionProperty,
              transitionDuration,
              transitionTimingFunction,
              ...transitionStyles
            }) => (
              <FocusTrap active={focusTrapActive} innerRef={tooltipMergedRef}>
                <Box
                  {...getStyles('tooltip')}
                  role="dialog"
                  tabIndex={-1}
                  aria-labelledby={titleMounted ? titleId : undefined}
                  aria-label={
                    titleMounted
                      ? undefined
                      : labels.stepCounter(displayStepIndex + 1, steps.length)
                  }
                  aria-describedby={bodyMounted ? bodyId : undefined}
                  data-centered={isCentered || undefined}
                  style={{
                    ...getStyles('tooltip').style,
                    ...(isCentered ? {} : floatingStyles),
                    ...transitionStyles,
                    width: constrainedWidth,
                    transition: [
                      ...(transitionProperty
                        ? transitionProperty
                            .split(',')
                            .map(
                              (prop: string) =>
                                `${prop.trim()} ${transitionDuration} ${transitionTimingFunction || 'ease'}`
                            )
                        : []),
                      ...(hasPositioned
                        ? ['top', 'left', 'translate'].map(
                            (prop) =>
                              `${prop} ${stepTransitionDuration}ms cubic-bezier(0.16, 1, 0.3, 1)`
                          )
                        : []),
                    ].join(', '),
                  }}
                >
                  {focusTrapActive && <FocusTrap.InitialFocus />}
                  {withCloseButton && <TourCloseButton />}
                  {displayStep?.title && <TourTitle>{displayStep.title}</TourTitle>}
                  {displayStep?.children && <TourBody>{displayStep.children}</TourBody>}
                  <TourNavigation />
                </Box>
              </FocusTrap>
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
