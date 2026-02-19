import { useState } from 'react';
import { EnvelopeOpenIcon, ShieldCheckIcon, UserCheckIcon } from '@phosphor-icons/react';
import { Stepper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import { UserCheckIcon, EnvelopeOpenIcon, ShieldCheckIcon } from '@phosphor-icons/react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheckIcon size={18} />} />
      <Stepper.Step icon={<EnvelopeOpenIcon size={18} />} />
      <Stepper.Step icon={<ShieldCheckIcon size={18} />} />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheckIcon size={18} />} />
      <Stepper.Step icon={<EnvelopeOpenIcon size={18} />} />
      <Stepper.Step icon={<ShieldCheckIcon size={18} />} />
    </Stepper>
  );
}

export const iconsOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
