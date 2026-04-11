import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/react';
import { useFocusReturn, useHotkeys, useUncontrolled } from '@mantine/hooks';
import type { FloatingPosition } from '../../utils/Floating';
import type { TourStepProps } from './TourStep/TourStep';
import { useTargetRect, type TargetRect } from './use-target-rect';

export interface UseTourInput {
  active?: boolean;
  onClose?: () => void;
  step?: number;
  defaultStep?: number;
  onStepChange?: (step: number) => void;
  onStepOpen?: (step: number) => void;
  onStepClose?: (step: number) => void;
  mode?: 'guided' | 'beacon';
  withKeyboardNavigation?: boolean;
  withScrollIntoView?: boolean;
  scrollToHandler?: (element: HTMLElement) => void;
  closeOnEscape?: boolean;
  maxWidth?: number;
  stepTransitionDuration?: number;
  children?: React.ReactNode;
  stepComponent: React.ComponentType<any>;
}

export interface UseTourReturn {
  steps: TourStepProps[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  beaconOpenStep: number | null;
  setBeaconOpenStep: (step: number | null) => void;
  close: () => void;
  displayStep: TourStepProps | null;
  displayStepIndex: number;
  targetRect: TargetRect | null;
  targetElement: HTMLElement | null;
  floatingStyles: React.CSSProperties;
  floatingRefs: ReturnType<typeof useFloating>['refs'];
  isCentered: boolean;
  constrainedWidth: number;
  hasPositioned: boolean;
  centeredPos: { top: number; left: number } | null;
  tooltipRef: React.RefObject<HTMLDivElement | null>;
  showTooltip: boolean;
  lastActiveTargetRef: React.MutableRefObject<
    string | React.RefObject<HTMLElement | null> | undefined
  >;
}

export function useTour({
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
  stepTransitionDuration: _stepTransitionDuration,
  children,
  stepComponent,
}: UseTourInput): UseTourReturn {
  const steps: TourStepProps[] = [];
  Children.forEach(children, (child) => {
    if (child && typeof child === 'object' && 'type' in child && child.type === stepComponent) {
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

  const lastActiveTargetRef = useRef(activeTarget);
  if (active) {
    lastActiveTargetRef.current = activeTarget;
  }

  const resolvedTarget = active ? activeTarget : lastActiveTargetRef.current;
  const { rect: targetRect, element: targetElement } = useTargetRect(resolvedTarget);

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

  const { refs: floatingRefs, floatingStyles } = useFloating({
    elements: { reference: targetElement },
    placement: stepPosition,
    transform: false,
    whileElementsMounted: autoUpdate,
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
  const [hasPositioned, setHasPositioned] = useState(false);

  useEffect(() => {
    if (!active) {
      setHasPositioned(false);
      return;
    }

    const timer = requestAnimationFrame(() => {
      setHasPositioned(true);
    });

    return () => cancelAnimationFrame(timer);
  }, [active]);

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
      const height = el.offsetHeight;
      setCenteredPos({
        top: (window.innerHeight - height) / 2,
        left: (window.innerWidth - constrainedWidth) / 2,
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isCentered, constrainedWidth, displayStepIndex]);

  const showTooltip =
    !!active && (mode === 'guided' || (mode === 'beacon' && beaconOpenStep !== null));

  return {
    steps,
    currentStep,
    setCurrentStep,
    beaconOpenStep,
    setBeaconOpenStep,
    close,
    displayStep,
    displayStepIndex,
    targetRect,
    targetElement,
    floatingStyles,
    floatingRefs,
    isCentered,
    constrainedWidth,
    hasPositioned,
    centeredPos,
    tooltipRef,
    showTooltip,
    lastActiveTargetRef,
  };
}
