import { StepperProgress, StepperProgressProps } from '@mantine/core';
import React from 'react';
import { codeSteps, mockSteps } from './_mock';

function Wrapper(props: Partial<StepperProgressProps>) {
  return (
    <StepperProgress {...props} active={1} breakpoint="sm" control={<></>}>
      {mockSteps()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}

const codeTemplate = (props: string) => `
import { StepperProgress } from '@mantine/core';

function Demo() {
  return (
    <StepperProgress${props} active={1}>
      ${codeSteps.trim()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}
`;

export const iconSizeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'iconSize',
      type: 'number',
      initialValue: 42,
      defaultValue: 0,
      min: 32,
      max: 62,
      step: 5,
    },
  ],
};
