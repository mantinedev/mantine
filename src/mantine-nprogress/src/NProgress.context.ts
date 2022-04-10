import { createSafeContext } from '@mantine/utils';
import { NPROGRESS_ERRORS } from './NProgress.errors';

export interface NProgressContext {
  start: () => void;
  stop: () => void;
  set: (progress: number) => void;
  add: (progress: number) => void;
  decrease: (progress: number) => void;
}

export const [NProgressContextProvider, useNProgress] = createSafeContext<NProgressContext>(
  NPROGRESS_ERRORS.context.message
);
