import { createSafeContext, GetStylesApi } from '../../core';
import type { TimerFactory } from './Timer';
import type { UseTimerReturnValue } from './use-timer';

export interface TimerContextValue {
  getStyles: GetStylesApi<TimerFactory>;
  controller: UseTimerReturnValue;
}

export const [TimerProvider, useTimerContext] = createSafeContext<TimerContextValue>(
  'Timer component was not found in tree'
);
