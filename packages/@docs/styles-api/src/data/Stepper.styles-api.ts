import type { StepperFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const StepperStylesApi: StylesApiData<StepperFactory> = {
  selectors: {
    root: 'Root element',
    steps: 'Steps controls wrapper',
    separator: 'Separator line between step controls',
    verticalSeparator: 'Vertical separator line between step controls',
    content: 'Current step content wrapper',
    stepWrapper: 'Wrapper for the step icon and separator',
    step: 'Step control button',
    stepIcon: 'Step icon wrapper',
    stepCompletedIcon: 'Completed step icon, rendered within stepIcon',
    stepBody: 'Contains stepLabel and stepDescription',
    stepLabel: 'Step label',
    stepDescription: 'Step description',
    stepLoader: 'Step loader',
  },

  vars: {
    root: {
      '--stepper-color': 'Controls color of the active step and separator',
      '--stepper-icon-color': 'Controls `color` of the step icon',
      '--stepper-icon-size': 'Controls `width` and `height` of the icons',
      '--stepper-content-padding': 'Controls `padding-top` of the content',
      '--stepper-radius': 'Controls `border-radius` of the step icon',
      '--stepper-fz': 'Controls `font-size` of various elements',
      '--stepper-spacing': 'Controls various spacings',
    },
  },

  modifiers: [
    { modifier: 'data-progress', selector: 'stepIcon', condition: 'Step is current' },
    { modifier: 'data-completed', selector: 'stepIcon', condition: 'Step is completed' },
  ],
};
