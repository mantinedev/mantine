import { createContext } from 'react';

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
