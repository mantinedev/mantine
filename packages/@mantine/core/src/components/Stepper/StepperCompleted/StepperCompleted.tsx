import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import { Activity } from 'react';
import { useOptionalStepperContext } from '../Stepper.context';

export interface StepperCompletedProps extends BoxProps, ElementProps<'div'> {
  /** Content displayed when all steps are completed */
  children: React.ReactNode;

  /** 0-based index at which completed content is displayed. Required with `Stepper.Root`, automatically set by `Stepper`. */
  step?: number;
}

export const StepperCompleted: React.FC<StepperCompletedProps> = ({ children, step, className, style, ...others }) => {
  const ctx = useOptionalStepperContext();

  if (!ctx || step === undefined) {
    return null;
  }

  const active = ctx.active >= step;
  const content = (
    <Box {...ctx.getStyles('content', { className, style })} {...others}>
      {children}
    </Box>
  );
  if (ctx.keepMounted) {
    return <Activity mode={active ? 'visible' : 'hidden'}>{content}</Activity>;
  }

  return active ? content : null;

};

StepperCompleted.displayName = '@mantine/core/StepperCompleted';
