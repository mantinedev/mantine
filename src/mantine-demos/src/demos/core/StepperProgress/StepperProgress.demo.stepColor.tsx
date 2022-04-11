import { StepperProgress } from '@mantine/core';
import React from 'react';
import { CircleX } from 'tabler-icons-react';

const code = `
import { StepperProgress } from '@mantine/core';
import { CircleX } from 'tabler-icons-react';

function Demo() {
  return (
    <StepperProgress active={2} breakpoint="sm">
      <StepperProgress.Step label="Step 1" description="Create an account">
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<CircleX />}
      >
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
    <StepperProgress active={2} breakpoint="sm">
      <StepperProgress.Step label="Step 1" description="Create an account">
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<CircleX />}
      >
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

export const stepColor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
