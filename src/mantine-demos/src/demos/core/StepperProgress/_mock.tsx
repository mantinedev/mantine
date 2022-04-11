import { StepperProgress } from '@mantine/core';
import React from 'react';

const itemsContent = (step: number) =>
  Array(3)
    .fill(0)
    .map((_, index) => <div key={index}>{`Step - ${step} - Content ${index + 1}`}</div>);

export const mockSteps = (count = 3) =>
  Array(count)
    .fill(0)
    .map((_, index) => (
      <StepperProgress.Step label={`Step ${index + 1}`} key={index}>
        {itemsContent(index + 1)}
      </StepperProgress.Step>
    ));

export const codeSteps = `
        <StepperProgress.Step>
          <div>Step 1 - Content 1</div>
          <div>Step 1 - Content 2</div>
          <div>Step 1 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Step>
          <div>Step 2 - Content 1</div>
          <div>Step 2 - Content 2</div>
          <div>Step 2 - Content 3</div>
        </StepperProgress.Step>
        <StepperProgress.Step>
          <div>Step 3 - Content 1</div>
          <div>Step 3 - Content 2</div>
          <div>Step 3 - Content 3</div>
        </StepperProgress.Step>
`;
