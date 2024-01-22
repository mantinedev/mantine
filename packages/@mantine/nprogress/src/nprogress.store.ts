import { clamp } from '@mantine/hooks';
import { createStore, MantineStore, useStore } from '@mantine/store';

function getIntervalProgressValue(currentProgress: number) {
  let next = 0.5;

  if (currentProgress >= 0 && currentProgress <= 20) {
    next = 10;
  } else if (currentProgress >= 20 && currentProgress <= 50) {
    next = 4;
  } else if (currentProgress >= 50 && currentProgress <= 80) {
    next = 2;
  } else if (currentProgress >= 80 && currentProgress <= 99) {
    next = 1;
  } else if (currentProgress >= 99 && currentProgress <= 100) {
    next = 0;
  }

  return currentProgress + next;
}

export interface NprogressState {
  mounted: boolean;
  progress: number;
  interval: number;
  step: number;
  stepInterval: number;
  timeouts: number[];
}

export type NprogressStore = MantineStore<NprogressState>;

export const createNprogressStore = () =>
  createStore<NprogressState>({
    mounted: false,
    progress: 0,
    interval: 0,
    step: 1,
    stepInterval: 100,
    timeouts: [],
  });

export const useNprogress = (store: NprogressStore) => useStore(store);

export function updateNavigationProgressStateAction(
  update: (state: NprogressState) => Partial<NprogressState>,
  store: NprogressStore
) {
  const state = store.getState();
  store.setState({ ...state, ...update(store.getState()) });
}

export function decrementNavigationProgressAction(store: NprogressStore) {
  updateNavigationProgressStateAction(
    (state) => ({ progress: Math.max(state.progress - state.step, 0) }),
    store
  );
}

export function setNavigationProgressAction(value: number, store: NprogressStore) {
  updateNavigationProgressStateAction(
    () => ({ progress: clamp(value, 0, 100), mounted: true }),
    store
  );
}

export function cleanupNavigationProgressAction(store: NprogressStore) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    state.timeouts.forEach((timeout) => window.clearTimeout(timeout));
    return { timeouts: [] };
  }, store);
}

export function completeNavigationProgressAction(store: NprogressStore) {
  cleanupNavigationProgressAction(store);

  updateNavigationProgressStateAction((state) => {
    const mountedTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ mounted: false }), store);
    }, 50);

    const resetTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ progress: 0 }), store);
    }, state.stepInterval + 50);

    return { progress: 100, timeouts: [mountedTimeout, resetTimeout] };
  }, store);
}

export function startNavigationProgressAction(store: NprogressStore) {
  updateNavigationProgressStateAction(
    (s) => ({ progress: getIntervalProgressValue(s.progress), mounted: true }),
    store
  );

  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);

    const interval = window.setInterval(() => {
      updateNavigationProgressStateAction(
        (s) => ({ progress: getIntervalProgressValue(s.progress), mounted: true }),
        store
      );
    }, state.stepInterval);

    return { interval, mounted: true };
  }, store);
}

export function stopNavigationProgressAction(store: NprogressStore) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    return { interval: -1 };
  }, store);
}

export function resetNavigationProgressAction(store: NprogressStore) {
  cleanupNavigationProgressAction(store);
  stopNavigationProgressAction(store);
  updateNavigationProgressStateAction(() => ({ progress: 0, mounted: false }), store);
}

export function incrementNavigationProgressAction(store: NprogressStore) {
  updateNavigationProgressStateAction((state) => {
    const nextValue = Math.min(state.progress + state.step, 100);
    const nextMounted = nextValue !== 100 && nextValue !== 0;

    if (!nextMounted) {
      const timeout = window.setTimeout(
        () => resetNavigationProgressAction(store),
        state.stepInterval + 50
      );

      return {
        progress: nextValue,
        mounted: nextMounted,
        timeouts: [...state.timeouts, timeout],
      };
    }

    return {
      progress: nextValue,
      mounted: nextMounted,
    };
  }, store);
}

export function createNprogress() {
  const store = createNprogressStore();
  const actions = {
    start: () => startNavigationProgressAction(store),
    stop: () => stopNavigationProgressAction(store),
    reset: () => resetNavigationProgressAction(store),
    set: (value: number) => setNavigationProgressAction(value, store),
    increment: () => incrementNavigationProgressAction(store),
    decrement: () => decrementNavigationProgressAction(store),
    complete: () => completeNavigationProgressAction(store),
    cleanup: () => cleanupNavigationProgressAction(store),
  };

  return [store, actions] as const;
}

export const [nprogressStore, nprogress] = createNprogress();
export const {
  start: startNavigationProgress,
  stop: stopNavigationProgress,
  reset: resetNavigationProgress,
  set: setNavigationProgress,
  increment: incrementNavigationProgress,
  decrement: decrementNavigationProgress,
  complete: completeNavigationProgress,
  cleanup: cleanupNavigationProgress,
} = nprogress;
