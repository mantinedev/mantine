import { Children, useEffect, useEffectEvent, useRef, useState } from 'react';
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/react';
import { useFocusReturn, useHotkeys, useUncontrolled, type HotkeyItem } from '@mantine/hooks';
import { useDirection } from '../../core';
import { getFloatingPosition } from '../../utils/Floating';
import type { TourStepProps } from './TourStep/TourStep';
import { useTargetRect, type TargetRect, type TourTarget } from './use-target-rect';

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
  showTooltip: boolean;
  lastActiveTargetRef: React.MutableRefObject<TourTarget>;
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

  const { dir } = useDirection();

  const [currentStep, setCurrentStep] = useUncontrolled({
    value: stepProp,
    defaultValue: defaultStep,
    finalValue: 0,
    onChange: onStepChange,
  });

  const [beaconOpenStep, setBeaconOpenStep] = useState<number | null>(null);

  const showTooltip =
    !!active && (mode === 'guided' || (mode === 'beacon' && beaconOpenStep !== null));
  const displayStepIndex =
    mode === 'beacon' && beaconOpenStep !== null ? beaconOpenStep : currentStep;
  const displayStep = steps[displayStepIndex] || null;
  const openStep = showTooltip && displayStepIndex >= 0 ? displayStepIndex : null;

  const reportedStepRef = useRef<number | null>(null);

  const emitStepClose = useEffectEvent((step: number) => {
    onStepClose?.(step);
    steps[step]?.onStepClose?.();
  });

  const emitStepOpen = useEffectEvent((step: number) => {
    onStepOpen?.(step);
    steps[step]?.onStepOpen?.();
  });

  useEffect(() => {
    const previousStep = reportedStepRef.current;

    if (previousStep === openStep) {
      return;
    }

    reportedStepRef.current = openStep;

    if (previousStep !== null) {
      emitStepClose(previousStep);
    }

    if (openStep !== null) {
      emitStepOpen(openStep);
    }
  }, [openStep]);

  const close = () => {
    const openedStep = reportedStepRef.current;

    if (openedStep !== null) {
      reportedStepRef.current = null;
      onStepClose?.(openedStep);
      steps[openedStep]?.onStepClose?.();
    }

    setBeaconOpenStep(null);
    onClose?.();
  };

  useFocusReturn({ opened: !!active, shouldReturnFocus: true });

  const activeTarget = showTooltip ? displayStep?.target : undefined;

  const lastActiveTargetRef = useRef<TourTarget>(undefined);
  if (active) {
    lastActiveTargetRef.current = activeTarget;
  }

  const resolvedTarget = active ? activeTarget : lastActiveTargetRef.current;
  const { rect: targetRect, element: targetElement } = useTargetRect(resolvedTarget);

  const scrollTargetIntoView = useEffectEvent((element: HTMLElement) => {
    if (scrollToHandler) {
      scrollToHandler(element);
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  useEffect(() => {
    if (active && withScrollIntoView && targetElement) {
      scrollTargetIntoView(targetElement);
    }
  }, [active, targetElement, withScrollIntoView]);

  const isInsideTarget = (event: KeyboardEvent) =>
    !!targetElement && event.target instanceof Node && targetElement.contains(event.target);

  const goToNextStep = (event: KeyboardEvent) => {
    if (isInsideTarget(event)) {
      return;
    }

    event.preventDefault();

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      close();
    }
  };

  const goToPreviousStep = (event: KeyboardEvent) => {
    if (isInsideTarget(event)) {
      return;
    }

    event.preventDefault();

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const hotkeyHandlers: HotkeyItem[] = [];

  if (active && closeOnEscape) {
    hotkeyHandlers.push(['Escape', close]);
  }

  if (active && mode === 'guided' && withKeyboardNavigation) {
    hotkeyHandlers.push([
      dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight',
      goToNextStep,
      { preventDefault: false },
    ]);
    hotkeyHandlers.push([
      dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft',
      goToPreviousStep,
      { preventDefault: false },
    ]);
  }

  useHotkeys(hotkeyHandlers);

  const stepPosition = getFloatingPosition(dir, displayStep?.position || 'bottom');

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
    showTooltip,
    lastActiveTargetRef,
  };
}
