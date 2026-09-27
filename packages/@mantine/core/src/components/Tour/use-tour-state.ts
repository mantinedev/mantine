import { useEffect, useEffectEvent, useRef, useState } from 'react';
import {
  useFocusReturn,
  useHotkeys,
  useUncontrolled,
  useWindowEvent,
  type HotkeyItem,
} from '@mantine/hooks';
import { useDirection } from '../../core';

export interface UseTourStateInput {
  active: boolean | undefined;
  onClose: (() => void) | undefined;
  step: number | undefined;
  defaultStep: number | undefined;
  onStepChange: ((step: number) => void) | undefined;
  onStepOpen: (step: number) => void;
  onStepClose: (step: number) => void;
  mode: 'guided' | 'beacon';
  stepsCount: number;
  closeOnEscape: boolean | undefined;
  withKeyboardNavigation: boolean | undefined;
}

export function useTourState({
  active,
  onClose,
  step,
  defaultStep,
  onStepChange,
  onStepOpen,
  onStepClose,
  mode,
  stepsCount,
  closeOnEscape,
  withKeyboardNavigation,
}: UseTourStateInput) {
  const { dir } = useDirection();
  const targetRef = useRef<HTMLElement | null>(null);

  const [currentStep, setCurrentStep] = useUncontrolled({
    value: step,
    defaultValue: defaultStep,
    finalValue: 0,
    onChange: onStepChange,
  });

  const [beaconOpenStep, setBeaconOpenStep] = useState<number | null>(null);

  const showTooltip = !!active && (mode === 'guided' || beaconOpenStep !== null);
  const displayStepIndex =
    mode === 'beacon' && beaconOpenStep !== null ? beaconOpenStep : currentStep;
  const openStep = showTooltip && displayStepIndex >= 0 ? displayStepIndex : null;

  const reportedStepRef = useRef<number | null>(null);
  const emitStepClose = useEffectEvent((index: number) => onStepClose(index));
  const emitStepOpen = useEffectEvent((index: number) => onStepOpen(index));

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
      onStepClose(openedStep);
    }

    setBeaconOpenStep(null);
    onClose?.();
  };

  const setStep = (index: number) => {
    if (mode === 'beacon' && beaconOpenStep !== null) {
      setBeaconOpenStep(index);
    }
    setCurrentStep(index);
  };

  const openBeaconStep = (index: number) => {
    setBeaconOpenStep(index);
    setCurrentStep(index);
  };

  useFocusReturn({ opened: !!active, shouldReturnFocus: true });

  const isInsideTarget = (event: KeyboardEvent) =>
    !!targetRef.current && event.target instanceof Node && targetRef.current.contains(event.target);

  const goToNextStep = (event: KeyboardEvent) => {
    if (isInsideTarget(event)) {
      return;
    }

    event.preventDefault();

    if (currentStep < stepsCount - 1) {
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

  const arrowHotkeys: HotkeyItem[] = [];

  if (active && mode === 'guided' && withKeyboardNavigation) {
    arrowHotkeys.push([
      dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight',
      goToNextStep,
      { preventDefault: false },
    ]);
    arrowHotkeys.push([
      dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft',
      goToPreviousStep,
      { preventDefault: false },
    ]);
  }

  useHotkeys(arrowHotkeys);
  useWindowEvent(
    'keydown',
    (event) => {
      if (
        event.key === 'Escape' &&
        active &&
        closeOnEscape &&
        !event.isComposing &&
        (event.target as HTMLElement | null)?.getAttribute?.('data-mantine-stop-propagation') !==
          'true'
      ) {
        close();
      }
    },
    { capture: true }
  );

  return {
    currentStep,
    setStep,
    beaconOpenStep,
    openBeaconStep,
    showTooltip,
    displayStepIndex,
    close,
    targetRef,
  };
}
