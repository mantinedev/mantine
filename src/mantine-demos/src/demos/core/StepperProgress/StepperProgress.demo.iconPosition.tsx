import { StepperProgress } from '@mantine/core';
import React, { useState } from 'react';
import { codeSteps, mockSteps } from './_mock';

const code = `
import { useState } from 'react';
import { StepperProgress } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <StepperProgress active={active} breakpoint="sm" onStepClick={setActive} iconPosition="right">
      ${codeSteps.trim()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StepperProgress
      active={active}
      breakpoint="sm"
      onStepClick={setActive}
      iconPosition="right"
      control={<></>}
    >
      {mockSteps()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}

export const iconPosition: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
