import React, { useState } from 'react';
import { UserCheck, MailOpened, ShieldCheck, CircleCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

const code = `
import { UserCheck, MailOpened, ShieldCheck, CircleCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <Stepper active={active} onStepClick={setActive} completedIcon={<CircleCheck />}>
      <Stepper.Step icon={<UserCheck size={18} />} label="Step 1" description="Create an account" />
      <Stepper.Step icon={<MailOpened size={18} />} label="Step 2" description="Verify email" />
      <Stepper.Step icon={<ShieldCheck size={18} />} label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<CircleCheck />}
      breakpoint="sm"
    >
      <Stepper.Step icon={<UserCheck size={18} />} label="Step 1" description="Create an account" />
      <Stepper.Step icon={<MailOpened size={18} />} label="Step 2" description="Verify email" />
      <Stepper.Step icon={<ShieldCheck size={18} />} label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
