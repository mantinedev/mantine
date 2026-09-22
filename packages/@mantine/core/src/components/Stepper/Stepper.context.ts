import { createSafeContext, GetStylesApi, MantineColor } from '../../core';
import type { StepFragmentComponent, StepperFactory } from './Stepper';

export interface StepperContextValue {
  getStyles: GetStylesApi<StepperFactory>;
  orientation: 'horizontal' | 'vertical' | undefined;
  iconPosition: 'left' | 'right' | undefined;
  labelPosition?: 'right' | 'bottom' | undefined;
  active: number;
  icon: React.ReactNode | StepFragmentComponent;
  completedIcon: React.ReactNode | StepFragmentComponent;
  progressIcon: React.ReactNode | StepFragmentComponent;
  color: MantineColor | undefined;
  allowNextStepsSelect: boolean | undefined;
  stepsSelectable: boolean;
  onStepSelect: (step: number) => void;
}

export const [StepperProvider, useStepperContext] = createSafeContext<StepperContextValue>(
  'Stepper component was not found in tree'
);
