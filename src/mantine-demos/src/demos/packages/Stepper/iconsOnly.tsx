import React, { useState } from 'react';
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

const code = `
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheck size={18} />} />
      <Stepper.Step icon={<MailOpened size={18} />} />
      <Stepper.Step icon={<ShieldCheck size={18} />} />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheck size={18} />} />
      <Stepper.Step icon={<MailOpened size={18} />} />
      <Stepper.Step icon={<ShieldCheck size={18} />} />
    </Stepper>
  );
}

export const iconsOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
