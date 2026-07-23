import { use } from 'react';
import { createSafeContext, GetStylesApi, MantineColor } from '../../core';
import type { StepFragmentComponent, StepperRootFactory } from './StepperRoot/StepperRoot';

export interface StepperContextValue {
  getStyles: GetStylesApi<StepperRootFactory>;
  orientation: 'horizontal' | 'vertical' | undefined;
  iconPosition: 'left' | 'right' | undefined;
  active: number;
  stepsCount: number;
  /** @internal */
  setStepsCount: (count: number) => void;
  onStepClick?: (stepIndex: number) => void;
  allowNextStepsSelect: boolean | undefined;
  icon?: React.ReactNode | StepFragmentComponent;
  completedIcon?: React.ReactNode | StepFragmentComponent;
  progressIcon?: React.ReactNode | StepFragmentComponent;
  color: MantineColor | undefined;
  iconSize: number | string | undefined;
  wrap: boolean | undefined;
  keepMounted: boolean | undefined;
}

export const [StepperProvider, useStepperContext] = createSafeContext<StepperContextValue>(
  'Stepper component was not found in tree'
);

export function useOptionalStepperContext() {
  return use(StepperProvider);
}
