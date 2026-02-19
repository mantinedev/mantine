import { useState } from 'react';
import {
  CheckCircleIcon,
  EnvelopeOpenIcon,
  ShieldCheckIcon,
  UserCheckIcon,
} from '@phosphor-icons/react';
import { Stepper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { UserCheckIcon, EnvelopeOpenIcon, ShieldCheckIcon, CheckCircleIcon } from '@phosphor-icons/react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<CheckCircleIcon size={18} />}
    >
      <Stepper.Step
        icon={<UserCheckIcon size={18} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<EnvelopeOpenIcon size={18} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<ShieldCheckIcon size={18} />}
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
    <Stepper active={active} onStepClick={setActive} completedIcon={<CheckCircleIcon size={18} />}>
      <Stepper.Step
        icon={<UserCheckIcon size={18} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<EnvelopeOpenIcon size={18} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<ShieldCheckIcon size={18} />}
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
