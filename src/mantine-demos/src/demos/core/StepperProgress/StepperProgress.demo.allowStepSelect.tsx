import { StepperProgress } from '@mantine/core';
import React, { useState } from 'react';

const code = `
import { useState } from 'react';
import { StepperProgress } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <>
      <StepperProgress
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
      >
        <StepperProgress.Step
          label="Fist step"
          description="Create an account"
          allowStepSelect={active > 0}
        >
          <div>Step 1 - Content 1</div>
          <div>Step 1 - Content 2</div>
          <div>Step 1 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={active > 1}
        >
          <div>Step 2 - Content 1</div>
          <div>Step 2 - Content 2</div>
          <div>Step 2 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={active > 2}
        >
          <div>Step 3 - Content 1</div>
          <div>Step 3 - Content 2</div>
          <div>Step 3 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Completed>
          Completed, click back button to get to previous step
        </StepperProgress.Completed>
      </StepperProgress>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <>
      <StepperProgress active={active} onStepClick={setActive} breakpoint="sm">
        <StepperProgress.Step
          label="Fist step"
          description="Create an account"
          allowStepSelect={active > 0}
        >
          <div>Step 1 - Content 1</div>
          <div>Step 1 - Content 2</div>
          <div>Step 1 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={active > 1}
        >
          <div>Step 2 - Content 1</div>
          <div>Step 2 - Content 2</div>
          <div>Step 2 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={active > 2}
        >
          <div>Step 3 - Content 1</div>
          <div>Step 3 - Content 2</div>
          <div>Step 3 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Completed>
          Completed, click back button to get to previous step
        </StepperProgress.Completed>
      </StepperProgress>
    </>
  );
}

export const allowStepSelect: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
