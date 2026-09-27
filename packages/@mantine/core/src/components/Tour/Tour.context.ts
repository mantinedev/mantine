import { createContext, use } from 'react';
import type { GetStylesApi } from '../../core';
import type { TransitionOverride } from '../Transition';
import type { TourFactory } from './Tour';
import type { TourRootFactory } from './TourRoot/TourRoot';

export interface TourLabels {
  /** Label for the skip button @default "Skip" */
  skip: string;

  /** Label for the back button @default "Back" */
  back: string;

  /** Label for the next button @default "Next" */
  next: string;

  /** Label for the close/finish button @default "Close" */
  close: string;

  /** Function that returns step counter text @default (current, total) => `${current} of ${total}` */
  stepCounter: (current: number, total: number) => string;

  /** Label for the beacon button, the step title is appended when it is a string @default "Start tour" */
  beacon: string;
}

export const defaultLabels: TourLabels = {
  skip: 'Skip',
  back: 'Back',
  next: 'Next',
  close: 'Close',
  stepCounter: (current, total) => `${current} of ${total}`,
  beacon: 'Start tour',
};

export interface TourContextValue {
  /** Returns styles for the given selector */
  getStyles: GetStylesApi<TourFactory & TourRootFactory>;

  /** Current active step index */
  step: number;

  /** Sets the active step index */
  setStep: (step: number) => void;

  /** Total number of steps */
  stepsCount: number;

  /** Closes the tour */
  close: () => void;

  /** Whether `Tour.Overlay` is rendered */
  withOverlay: boolean;

  /** Whether pointer events pass through the spotlight cutout to the target element */
  withOverlayInteraction: boolean;

  /** Whether `Tour.CloseButton` is rendered */
  withCloseButton: boolean;

  /** Padding around the spotlight cutout in px */
  spotlightPadding: number;

  /** Border radius of the spotlight cutout in px */
  spotlightRadius: number;

  /** Whether clicking the overlay closes the tour */
  closeOnOverlayClick: boolean;

  /** Default transition props of `Tour.Tooltip` */
  transitionProps: TransitionOverride | undefined;

  /** Labels for tour UI elements */
  labels: TourLabels;

  /** Id assigned to `Tour.Title`, referenced by the tooltip `aria-labelledby` */
  titleId: string;

  /** Id assigned to `Tour.Body`, referenced by the tooltip `aria-describedby` */
  bodyId: string;

  /** Whether `Tour.Title` is currently mounted */
  titleMounted: boolean;

  /** Whether `Tour.Body` is currently mounted */
  bodyMounted: boolean;

  /** Registers `Tour.Title` mount state */
  setTitleMounted: (mounted: boolean) => void;

  /** Registers `Tour.Body` mount state */
  setBodyMounted: (mounted: boolean) => void;

  /** Registers the current step target element, used to skip arrow hotkeys fired from inside it */
  setTargetElement: (element: HTMLElement | null) => void;
}

export const TourContext = createContext<TourContextValue | null>(null);

export function useTourContext() {
  const ctx = use(TourContext);

  if (ctx === null) {
    throw new Error('Tour component was not found in tree');
  }

  return ctx;
}

export const TourProvider = TourContext.Provider;
