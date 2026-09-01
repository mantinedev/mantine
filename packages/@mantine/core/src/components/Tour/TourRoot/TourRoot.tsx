import { Children, useCallback, useEffect, useRef, useState } from 'react';
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
} from '../../../core';
import { OptionalPortal, type PortalProps } from '../../Portal';
import type { TransitionOverride } from '../../Transition';
import type { TourStylesNames, TourCssVariables } from '../Tour';
import { defaultLabels, TourLabels, TourProvider } from '../Tour.context';
import classes from '../Tour.module.css';

export interface TourRootProps
  extends BoxProps, StylesApiProps<TourRootFactory>, ElementProps<'div'> {
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

  /** Tour step overlay color @default "rgba(0, 0, 0, 0.5)" */
  overlayColor?: string;

  /** Shadow for the tooltip */
  tooltipShadow?: string;

  /** Tour steps as children */
  children?: React.ReactNode;
}

export type TourRootFactory = Factory<{
  props: TourRootProps;
  ref: HTMLDivElement;
  stylesNames: TourStylesNames;
  vars: TourCssVariables;
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
  overlayColor: 'rgba(0, 0, 0, 0.5)',
} satisfies Partial<TourRootProps>;

const varsResolver = createVarsResolver<TourRootFactory>(
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

export const TourRoot = factory<TourRootFactory>((_props) => {
  const props = useProps('TourRoot', defaultProps, _props);
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
    overlayColor,
    tooltipShadow,
    children,
    attributes,
    ...others
  } = props;

  const labels: TourLabels = { ...defaultLabels, ...labelsProp };
  const spotlightPaddingValue = spotlightPadding!;

  const resolvedSpotlightRadius = spotlightRadius ?? 4;

  const [currentStep, setCurrentStep] = useUncontrolled({
    value: stepProp,
    defaultValue: defaultStep,
    finalValue: 0,
    onChange: onStepChange,
  });

  const [_beaconOpenStep, setBeaconOpenStep] = useState<number | null>(null);

  const previousStepRef = useRef(currentStep);

  const close = useCallback(() => {
    onStepClose?.(currentStep);
    setBeaconOpenStep(null);
    onClose?.();
  }, [onClose, onStepClose, currentStep]);

  useFocusReturn({ opened: !!active, shouldReturnFocus: true });

  useEffect(() => {
    if (!active) {
      return;
    }

    const prevStep = previousStepRef.current;
    previousStepRef.current = currentStep;

    if (prevStep !== currentStep) {
      onStepClose?.(prevStep);
      onStepOpen?.(currentStep);
    }
  }, [active, currentStep]);

  useEffect(() => {
    if (active) {
      onStepOpen?.(currentStep);
    }
  }, [active]);

  const hotkeyHandlers: [string, () => void][] = [];

  if (active && mode === 'guided' && withKeyboardNavigation) {
    if (closeOnEscape) {
      hotkeyHandlers.push(['Escape', close]);
    }
    hotkeyHandlers.push([
      'ArrowRight',
      () => {
        const stepsCount = Children.count(children);
        if (currentStep < stepsCount - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          close();
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

  const getStyles = useStyles<TourRootFactory>({
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

  return (
    <TourProvider
      value={{
        getStyles,
        step: currentStep,
        setStep: (s) => {
          if (mode === 'beacon' && _beaconOpenStep !== null) {
            setBeaconOpenStep(s);
          }
          setCurrentStep(s);
        },
        stepsCount: Children.count(children),
        close,
        mode: mode!,
        withOverlay: withOverlay!,
        withOverlayInteraction: withOverlayInteraction!,
        withCloseButton: withCloseButton!,
        withKeyboardNavigation: withKeyboardNavigation!,
        withScrollIntoView: withScrollIntoView!,
        scrollToHandler,
        spotlightPadding: spotlightPaddingValue,
        spotlightRadius: resolvedSpotlightRadius,
        closeOnEscape: closeOnEscape!,
        closeOnOverlayClick: closeOnOverlayClick!,
        labels,
      }}
    >
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Box {...getStyles('root')} {...others}>
          {children}
        </Box>
      </OptionalPortal>
    </TourProvider>
  );
});

TourRoot.displayName = '@mantine/core/TourRoot';

export namespace TourRoot {
  export type Props = TourRootProps;
}
