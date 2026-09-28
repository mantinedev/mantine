import { Children, useEffect, useEffectEvent, useRef, useState } from 'react';
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/react';
import { useDirection } from '../../core';
import { getFloatingPosition } from '../../utils/Floating';
import type { TourStepProps } from './TourStep/TourStep';
import { useTargetRect, type TargetRect, type TourTarget } from './use-target-rect';
import { useTourState } from './use-tour-state';

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
  setStep: (step: number) => void;
  beaconOpenStep: number | null;
  openBeaconStep: (step: number) => void;
  close: () => void;
  displayStep: TourStepProps | null;
  displayStepIndex: number;
  targetRect: TargetRect | null;
  targetElement: HTMLElement | null;
  floatingStyles: React.CSSProperties;
  floatingRefs: ReturnType<typeof useFloating>['refs'];
  isCentered: boolean;
  constrainedWidth: number;
  stepMoving: boolean;
  showTooltip: boolean;
  clearExitedTarget: () => void;
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
  stepTransitionDuration,
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

  const {
    setStep,
    beaconOpenStep,
    openBeaconStep,
    showTooltip,
    displayStepIndex,
    close,
    targetRef,
  } = useTourState({
    active,
    onClose,
    step: stepProp,
    defaultStep,
    onStepChange,
    onStepOpen: (index) => {
      onStepOpen?.(index);
      steps[index]?.onStepOpen?.();
    },
    onStepClose: (index) => {
      onStepClose?.(index);
      steps[index]?.onStepClose?.();
    },
    mode: mode!,
    stepsCount: steps.length,
    closeOnEscape,
    withKeyboardNavigation,
  });

  const displayStep = steps[displayStepIndex] || null;
  const activeTarget = showTooltip ? displayStep?.target : undefined;

  const lastActiveTargetRef = useRef<TourTarget>(undefined);
  if (showTooltip) {
    lastActiveTargetRef.current = activeTarget;
  }

  const [, setExitedCount] = useState(0);
  const clearExitedTarget = () => {
    lastActiveTargetRef.current = undefined;
    setExitedCount((count) => count + 1);
  };

  const resolvedTarget = showTooltip ? activeTarget : lastActiveTargetRef.current;
  const { rect: targetRect, element: targetElement } = useTargetRect(resolvedTarget);

  useEffect(() => {
    targetRef.current = targetElement;
  }, [targetElement]);

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

  const stepPosition = getFloatingPosition(dir, displayStep?.position || 'bottom');
  const isSidePlacement = stepPosition.startsWith('left') || stepPosition.startsWith('right');

  const [constrainedWidth, setConstrainedWidth] = useState(maxWidth!);

  const { refs: floatingRefs, floatingStyles } = useFloating({
    elements: { reference: targetElement },
    placement: stepPosition,
    transform: false,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(12),
      flip(isSidePlacement ? { fallbackAxisSideDirection: 'end' } : undefined),
      shift({ padding: 8 }),
      size({
        padding: 8,
        apply({ availableWidth, placement }) {
          const side = placement.split('-')[0];
          setConstrainedWidth(
            side === 'left' || side === 'right' ? maxWidth! : Math.min(maxWidth!, availableWidth)
          );
        },
      }),
    ],
  });

  const isCentered = !targetElement;
  const [hasPositioned, setHasPositioned] = useState(false);
  const [stepMoving, setStepMoving] = useState(false);

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

  const previousStepRef = useRef({ index: displayStepIndex, shown: showTooltip });

  useEffect(() => {
    const previous = previousStepRef.current;
    previousStepRef.current = { index: displayStepIndex, shown: showTooltip };

    if (!showTooltip) {
      setStepMoving(false);
      return undefined;
    }

    if (!hasPositioned || !previous.shown || previous.index === displayStepIndex) {
      return undefined;
    }

    setStepMoving(true);
    const timer = window.setTimeout(() => setStepMoving(false), stepTransitionDuration);
    return () => window.clearTimeout(timer);
  }, [displayStepIndex, showTooltip]);

  return {
    steps,
    setStep,
    beaconOpenStep,
    openBeaconStep,
    close,
    displayStep,
    displayStepIndex,
    targetRect,
    targetElement,
    floatingStyles,
    floatingRefs,
    isCentered,
    constrainedWidth,
    stepMoving: hasPositioned && stepMoving,
    showTooltip,
    clearExitedTarget,
  };
}
