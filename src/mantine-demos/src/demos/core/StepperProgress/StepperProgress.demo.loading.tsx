import { StepperProgress } from '@mantine/core';
import React from 'react';

const code = `
import { StepperProgress } from '@mantine/core';

function Demo() {
  return (
    <StepperProgress active={1} breakpoint="sm">
      <StepperProgress.Step label="Step 1" description="Create an account">
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step label="Step 2" description="Verify email" loading>
        <div>Step 2 - Content 1</div>
        <div>Step 2 - Content 2</div>
        <div>Step 2 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step label="Step 3" description="Get full access">
        <div>Step 3 - Content 1</div>
        <div>Step 3 - Content 2</div>
        <div>Step 3 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}
`;

function Demo() {
  return (
    <StepperProgress active={1} breakpoint="sm" control={<></>}>
      <StepperProgress.Step label="Step 1" description="Create an account">
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step label="Step 2" description="Verify email" loading>
        <div>Step 2 - Content 1</div>
        <div>Step 2 - Content 2</div>
        <div>Step 2 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step label="Step 3" description="Get full access">
        <div>Step 3 - Content 1</div>
        <div>Step 3 - Content 2</div>
        <div>Step 3 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}

export const loading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
