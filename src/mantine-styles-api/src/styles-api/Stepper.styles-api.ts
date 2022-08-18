import type { StepperStylesNames } from '@mantine/core';

export const Stepper: Record<StepperStylesNames, string> = {
  root: 'Root element',
  steps: 'Steps controls wrapper',
  separator: 'Separator line between step controls',
  verticalSeparator: 'Vertical separator line between step controls',
  separatorActive: 'Separator active modifier',
  verticalSeparatorActive: 'Vertical separator active modifier',
  content: 'Current step content wrapper',
  stepWrapper: 'Wrapper for the step icon and separator',
  step: 'Step control button',
  stepIcon: 'Step icon wrapper',
  stepCompletedIcon: 'Completed step icon, rendered within stepIcon',
  stepBody: 'Contains stepLabel and stepDescription',
  stepLabel: 'Step label',
  stepDescription: 'Step description',
  stepLoader: 'Step loader',
};
