import { StepperProgress, StepperProgressProps } from '@mantine/core';
import React, { useState } from 'react';
import { codeSteps, mockSteps } from './_mock';

const code = `
import { useState } from 'react';
import { StepperProgress, StepperProgressProps } from '@mantine/core';

function StyledStepperProgress(props: StepperProgressProps) {
  return (
    <StepperProgress
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
          zIndex: 1,
        },

        stepIcon: {
          borderWidth: 4,
        },

        separator: {
          marginLeft: -2,
          marginRight: -2,
          height: 10,
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);
  
  return (
    <StyledStepperProgress active={active} onStepClick={setActive}>
      ${codeSteps.trim()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StyledStepperProgress>
  );
}
`;

function StyledStepperProgress(props: StepperProgressProps) {
  return (
    <StepperProgress
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
          zIndex: 1,
        },

        stepIcon: {
          borderWidth: 3,
        },

        separator: {
          marginLeft: -2,
          marginRight: -2,
          height: 6,
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <StyledStepperProgress active={active} onStepClick={setActive}>
      {mockSteps()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StyledStepperProgress>
  );
}

export const stylesApi2: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
