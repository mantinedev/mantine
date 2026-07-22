import { Activity } from 'react';
import { useOptionalStepperContext } from '../Stepper.context';

export interface StepperCompletedProps {
  /** Content displayed when all steps are completed */
  children: React.ReactNode;

  /** 0-based index at which completed content is displayed. Required with `Stepper.Root`, automatically set by `Stepper`. */
  step?: number;
}

export const StepperCompleted: React.FC<StepperCompletedProps> = ({ children, step }) => {
  const ctx = useOptionalStepperContext();

  if (!ctx || step === undefined) {
    return null;
  }

  const active = ctx.active >= step;

  if (ctx.keepMounted) {
    return (
      <Activity mode={active ? 'visible' : 'hidden'}>
        <div {...ctx.getStyles('content')}>{children}</div>
      </Activity>
    );
  }

  return active ? <div {...ctx.getStyles('content')}>{children}</div> : null;
};

StepperCompleted.displayName = '@mantine/core/StepperCompleted';
