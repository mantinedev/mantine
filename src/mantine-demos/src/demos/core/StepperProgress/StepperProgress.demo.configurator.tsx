import { StepperProgress, StepperProgressProps } from '@mantine/core';
import React from 'react';
import { codeSteps, mockSteps } from './_mock';

function Wrapper(props: Partial<StepperProgressProps>) {
  return (
    <StepperProgress {...props} active={1}>
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

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'size', type: 'size', initialValue: 'md' },
  ],
};
