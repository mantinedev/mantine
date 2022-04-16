import { useEffect } from 'react';

type ValueOf<T> = T[keyof T];

interface NProgressProps {
  start: () => void;
  stop: () => void;
  set: (progress: number) => void;
  add: (progress: number) => void;
  decrease: (progress: number) => void;
  reset: () => void;
}

export const NPROGRESS_EVENTS = {
  add: 'mantine:add-nprogress',
  decrease: 'mantine:decrease-nprogress',
  set: 'mantine:set-nprogress',
  start: 'mantine:start-nprogress',
  stop: 'mantine:stop-nprogress',
  reset: 'mantine:reset-nprogress',
} as const;

export function createEvent(type: ValueOf<typeof NPROGRESS_EVENTS>, detail?: any) {
  return new CustomEvent(type, { detail });
}

export function addNProgress(progress: number) {
  window.dispatchEvent(createEvent(NPROGRESS_EVENTS.add, progress));
}

export function decreaseNProgress(progress: number) {
  window.dispatchEvent(createEvent(NPROGRESS_EVENTS.decrease, progress));
}

export function setNProgress(progress: React.SetStateAction<number>) {
  window.dispatchEvent(createEvent(NPROGRESS_EVENTS.set, progress));
}

export function startNProgress() {
  window.dispatchEvent(createEvent(NPROGRESS_EVENTS.start));
}

export function stopNProgress() {
  window.dispatchEvent(createEvent(NPROGRESS_EVENTS.stop));
}

export function resetNProgress() {
  window.dispatchEvent(createEvent(NPROGRESS_EVENTS.reset));
}

export function useNProgressEvents(ctx: NProgressProps) {
  const events = {
    add: (event: any) => ctx.add(event.detail),
    decrease: (event: any) => ctx.decrease(event.detail),
    set: (event: any) => ctx.set(event.detail),
    start: ctx.start,
    stop: ctx.stop,
    reset: ctx.reset,
  };

  useEffect(() => {
    Object.keys(events).forEach((event) => {
      window.addEventListener(NPROGRESS_EVENTS[event], events[event]);
    });

    return () => {
      Object.keys(events).forEach((event) => {
        window.removeEventListener(NPROGRESS_EVENTS[event], events[event]);
      });
    };
  }, []);
}
