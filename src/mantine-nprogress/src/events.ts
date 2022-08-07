import { createUseExternalEvents } from '@mantine/utils';

export type NavigationProgressEvents = {
  start(): void;
  stop(): void;
  set(progress: number): void;
  increment(progress: number): void;
  decrement(progress: number): void;
  reset(): void;
};

export const [useNavigationProgressEvents, createEvent] =
  createUseExternalEvents<NavigationProgressEvents>('mantine-nprogress');

export const startNavigationProgress = createEvent('start');
export const stopNavigationProgress = createEvent('stop');
export const resetNavigationProgress = createEvent('reset');
export const setNavigationProgress = createEvent('set');
export const incrementNavigationProgress = createEvent('increment');
export const decrementNavigationProgress = createEvent('decrement');
