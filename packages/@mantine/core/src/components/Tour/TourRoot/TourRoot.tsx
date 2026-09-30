import { useCallback, useId, useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getShadow,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { OptionalPortal, type PortalProps } from '../../Portal';
import type { TransitionOverride } from '../../Transition';
import type { TourStylesNames, TourCssVariables } from '../Tour';
import { defaultLabels, TourLabels, TourProvider } from '../Tour.context';
import { useTourState } from '../use-tour-state';
import classes from '../Tour.module.css';

export interface TourRootProps
  extends BoxProps, StylesApiProps<TourRootFactory>, ElementProps<'div'> {
  /** Whether the tour is active @default false */
  active?: boolean;

  /** Total number of steps, used by `Tour.Navigation` and keyboard navigation to detect the last step */
  stepsCount: number;

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

  /** Whether `Tour.Overlay` is rendered @default true */
  withOverlay?: boolean;

  /** Whether pointer events pass through the spotlight cutout to the target element, the rest of the overlay keeps blocking clicks @default false */
  withOverlayInteraction?: boolean;

  /** Whether `Tour.CloseButton` is rendered @default true */
  withCloseButton?: boolean;

  /** Whether arrow keys navigate between steps @default true */
  withKeyboardNavigation?: boolean;

  /** Padding around the spotlight cutout in px @default 8 */
  spotlightPadding?: number;

  /** Border radius of the spotlight cutout in px @default 4 */
  spotlightRadius?: number;

  /** Whether pressing Escape closes the tour @default true */
  closeOnEscape?: boolean;

  /** Whether clicking the overlay closes the tour, with `withOverlayInteraction` only clicks outside the spotlight cutout close it @default false */
  closeOnOverlayClick?: boolean;

  /** Labels for tour UI elements */
  labels?: Partial<TourLabels>;

  /** Whether to render inside a portal @default true */
  withinPortal?: boolean;

  /** Props passed to the Portal component */
  portalProps?: Omit<PortalProps, 'children'>;

  /** z-index of the tour @default 10000 */
  zIndex?: string | number;

  /** Default transition props of `Tour.Tooltip` @default { duration: 200, transition: 'fade' } */
  transitionProps?: TransitionOverride;

  /** Tour step overlay color @default "rgba(0, 0, 0, 0.5)" */
  overlayColor?: string;

  /** Key of `theme.shadows` or any valid CSS box-shadow value, controls the tooltip shadow @default 'md' */
  tooltipShadow?: string;

  /** Tour content: `Tour.Overlay`, `Tour.Tooltip`, `Tour.Beacon` and other compound components */
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
  withOverlay: true,
  withOverlayInteraction: false,
  withCloseButton: true,
  withKeyboardNavigation: true,
  spotlightPadding: 8,
  closeOnEscape: true,
  closeOnOverlayClick: false,
  withinPortal: true,
  zIndex: 10000,
  transitionProps: { duration: 200, transition: 'fade' },
  overlayColor: 'rgba(0, 0, 0, 0.5)',
} satisfies Partial<TourRootProps>;

const varsResolver = createVarsResolver<TourRootFactory>(
  (_, { zIndex, overlayColor, tooltipShadow }) => ({
    root: {
      '--tour-z-index': zIndex?.toString(),
      '--tour-overlay-color': overlayColor,
      '--tour-tooltip-radius': undefined,
      '--tour-tooltip-shadow': getShadow(tooltipShadow),
      '--tour-beacon-size': undefined,
      '--tour-beacon-color': undefined,
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
    stepsCount,
    onClose,
    step: stepProp,
    defaultStep,
    onStepChange,
    onStepOpen,
    onStepClose,
    withOverlay,
    withOverlayInteraction,
    withCloseButton,
    withKeyboardNavigation,
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
  const id = useId();
  const [registeredTitleId, registerTitle] = useState<string | null>(null);
  const [registeredBodyId, registerBody] = useState<string | null>(null);
  const titleId = registeredTitleId ?? `${id}-title`;
  const bodyId = registeredBodyId ?? `${id}-body`;
  const titleMounted = registeredTitleId !== null;
  const bodyMounted = registeredBodyId !== null;

  const { currentStep, setStep, close, targetRef } = useTourState({
    active,
    onClose,
    step: stepProp,
    defaultStep,
    onStepChange,
    onStepOpen: (index) => onStepOpen?.(index),
    onStepClose: (index) => onStepClose?.(index),
    mode: 'guided',
    stepsCount,
    closeOnEscape,
    withKeyboardNavigation,
  });

  const setTargetElement = useCallback(
    (element: HTMLElement | null) => {
      targetRef.current = element;
    },
    [targetRef]
  );

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
        setStep,
        stepsCount,
        close,
        withOverlay: withOverlay!,
        withOverlayInteraction: withOverlayInteraction!,
        withCloseButton: withCloseButton!,
        spotlightPadding: spotlightPadding!,
        spotlightRadius: spotlightRadius ?? 4,
        closeOnOverlayClick: closeOnOverlayClick!,
        transitionProps,
        labels,
        titleId,
        bodyId,
        titleMounted,
        bodyMounted,
        registerTitle,
        registerBody,
        setTargetElement,
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
