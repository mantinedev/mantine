import type { MantineColor } from '../../../core';
import type { StepFragmentComponent } from '../Stepper';
import type { StepperContextValue } from '../Stepper.context';

export type StepperStepState = 'stepInactive' | 'stepProgress' | 'stepCompleted';

export interface ResolveStepPropsInput {
  step: number | undefined;
  state: StepperStepState | undefined;
  allowStepClick: boolean | undefined;
  allowStepSelect: boolean | undefined;
  color: MantineColor | undefined;
  icon: React.ReactNode | StepFragmentComponent;
  completedIcon: React.ReactNode | StepFragmentComponent;
  progressIcon: React.ReactNode | StepFragmentComponent;
  iconPosition: 'right' | 'left' | undefined;
  orientation: 'vertical' | 'horizontal' | undefined;
}

export interface ResolvedStepProps {
  state: StepperStepState;
  allowStepClick: boolean;
  color: MantineColor | undefined;
  icon: React.ReactNode | StepFragmentComponent;
  completedIcon: React.ReactNode | StepFragmentComponent;
  iconPosition: 'right' | 'left' | undefined;
  orientation: 'vertical' | 'horizontal' | undefined;
}

export function getStepState(step: number | undefined, active: number): StepperStepState {
  if (step === undefined) {
    return 'stepInactive';
  }

  if (step === active) {
    return 'stepProgress';
  }

  return step < active ? 'stepCompleted' : 'stepInactive';
}

function isStepSelectable(
  input: ResolveStepPropsInput,
  ctx: StepperContextValue,
  state: StepperStepState
) {
  if (input.step === undefined || !ctx.stepsSelectable) {
    return false;
  }

  return input.allowStepSelect ?? (state === 'stepCompleted' || !!ctx.allowNextStepsSelect);
}

export function resolveStepProps(
  input: ResolveStepPropsInput,
  ctx: StepperContextValue
): ResolvedStepProps {
  const state = input.state ?? getStepState(input.step, ctx.active);
  const selectable = isStepSelectable(input, ctx, state);
  const stepIcon =
    input.icon || ctx.icon || (input.step === undefined ? undefined : input.step + 1);

  return {
    state,
    allowStepClick: (input.allowStepClick ?? true) && selectable,
    color: input.color || ctx.color,
    icon: state === 'stepProgress' ? input.progressIcon || ctx.progressIcon || stepIcon : stepIcon,
    completedIcon: input.completedIcon || ctx.completedIcon,
    iconPosition: input.iconPosition || ctx.iconPosition,
    orientation: input.orientation || ctx.orientation,
  };
}
