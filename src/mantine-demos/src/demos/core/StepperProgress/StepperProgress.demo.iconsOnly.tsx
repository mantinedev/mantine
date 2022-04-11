import { StepperProgress } from '@mantine/core';
import React, { useState } from 'react';
import { MailOpened, ShieldCheck, UserCheck } from 'tabler-icons-react';

const code = `
import { useState } from 'react';
import { StepperProgress } from '@mantine/core';
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <StepperProgress active={active} onStepClick={setActive}>
      <StepperProgress.Step icon={<UserCheck size={18} />}>
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step icon={<MailOpened size={18} />}>
        <div>Step 2 - Content 1</div>
        <div>Step 2 - Content 2</div>
        <div>Step 2 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step icon={<ShieldCheck size={18} />}>
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
  const [active, setActive] = useState(0);
  return (
    <StepperProgress active={active} onStepClick={setActive} control={<></>}>
      <StepperProgress.Step icon={<UserCheck size={18} />}>
        <div>Step 1 - Content 1</div>
        <div>Step 1 - Content 2</div>
        <div>Step 1 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step icon={<MailOpened size={18} />}>
        <div>Step 2 - Content 1</div>
        <div>Step 2 - Content 2</div>
        <div>Step 2 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Step icon={<ShieldCheck size={18} />}>
        <div>Step 3 - Content 1</div>
        <div>Step 3 - Content 2</div>
        <div>Step 3 - Content 3</div>
      </StepperProgress.Step>
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StepperProgress>
  );
}

export const iconsOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
