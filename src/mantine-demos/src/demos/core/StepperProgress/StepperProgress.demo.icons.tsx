import { StepperProgress } from '@mantine/core';
import React, { useState } from 'react';
import { CircleCheck, Flag, MailOpened, ShieldCheck, UserCheck } from 'tabler-icons-react';

const code = `
import { useState } from 'react';
import { StepperProgress } from '@mantine/core';
import { CircleCheck, Flag, MailOpened, ShieldCheck, UserCheck } from 'tabler-icons-react';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <StepperProgress
      active={active}
      onStepClick={setActive}
      completedIcon={<CircleCheck />}
      breakpoint="sm"
    >
      <StepperProgress.Step
        icon={<UserCheck size={18} />}
        label="Step 1"
        description="Create an account"
      >
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step
        icon={<MailOpened size={18} />}
        label="Step 2"
        description="Verify email"
      >
        <div>Step 2 - Content 1</div>
        <div>Step 2 - Content 2</div>
        <div>Step 2 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step
        icon={<ShieldCheck size={18} />}
        label="Step 3"
        description="Get full access"
      >
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
  const [active, setActive] = useState(1);
  return (
    <StepperProgress
      active={active}
      onStepClick={setActive}
      completedIcon={<CircleCheck />}
      finishStepIcon={<Flag size={18} />}
      breakpoint="sm"
    >
      <StepperProgress.Step
        icon={<UserCheck size={18} />}
        label="Step 1"
        description="Create an account"
      >
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step
        icon={<MailOpened size={18} />}
        label="Step 2"
        description="Verify email"
      >
        <div>Step 2 - Content 1</div>
        <div>Step 2 - Content 2</div>
        <div>Step 2 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step
        icon={<ShieldCheck size={18} />}
        label="Step 3"
        description="Get full access"
      >
        <div>Step 3 - Content 1</div>
        <div>Step 3 - Content 2</div>
        <div>Step 3 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
