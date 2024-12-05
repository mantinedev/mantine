import { useState } from 'react';
import {
  IconCircleCheck,
  IconMailOpened,
  IconShieldCheck,
  IconUserCheck,
} from '@tabler/icons-react';
import { Stepper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<IconCircleCheck size={18} />}
    >
      <Stepper.Step
        icon={<IconUserCheck size={18} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<IconMailOpened size={18} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<IconShieldCheck size={18} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} completedIcon={<IconCircleCheck size={18} />}>
      <Stepper.Step
        icon={<IconUserCheck size={18} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step icon={<IconMailOpened size={18} />} label="Step 2" description="Verify email" />
      <Stepper.Step
        icon={<IconShieldCheck size={18} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}

export const icons: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
