import { createContext, useContext } from 'react';

export interface NProgressContext {
  start: () => void;
  stop: () => void;
  set: (progress: number) => void;
  add: (progress: number) => void;
  decrease: (progress: number) => void;
}

export const nprogressContext = createContext<NProgressContext>({
  start: () => null,
  stop: () => null,
  set: () => null,
  add: () => null,
  decrease: () => null,
});

export function useNProgress() {
  const ctx = useContext(nprogressContext);

  if (!ctx) {
    throw new Error(
      '[@mantine/nprogress] useNProgress hook was called outside of context, wrap your app with NProgressProvider component'
    );
  }

  return ctx;
}
