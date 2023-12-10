import React, { useState } from 'react';
import { IconMailOpened, IconShieldCheck, IconUserCheck } from '@tabler/icons-react';
import { rem, Stepper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />} />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />} />
    </Stepper>
  );
}

export const iconsOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
