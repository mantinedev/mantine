import { createContext, use } from 'react';
import type { GetStylesApi } from '../../core';
import type { TourFactory } from './Tour';

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

  /** Label for the beacon button @default "Start tour" */
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
  getStyles: GetStylesApi<TourFactory>;

  /** Current active step index */
  step: number;

  /** Sets the active step index */
  setStep: (step: number) => void;

  /** Total number of steps */
  stepsCount: number;

  /** Closes the tour */
  close: () => void;

  /** Tour mode: guided (sequential) or beacon (click-to-open) */
  mode: 'guided' | 'beacon';

  /** Whether the overlay is displayed */
  withOverlay: boolean;

  /** Whether target elements can be interacted with through the overlay */
  withOverlayInteraction: boolean;

  /** Whether the close button is displayed */
  withCloseButton: boolean;

  /** Whether keyboard navigation is enabled */
  withKeyboardNavigation: boolean;

  /** Whether the target element is scrolled into view */
  withScrollIntoView: boolean;

  /** Custom scroll handler */
  scrollToHandler: ((element: HTMLElement) => void) | undefined;

  /** Padding around the spotlight cutout in px */
  spotlightPadding: number;

  /** Border radius of the spotlight cutout in px */
  spotlightRadius: number;

  /** Whether pressing Escape closes the tour */
  closeOnEscape: boolean;

  /** Whether clicking the overlay closes the tour */
  closeOnOverlayClick: boolean;

  /** Labels for tour UI elements */
  labels: TourLabels;
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
