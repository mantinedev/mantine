import React from 'react';
import { IconMedal } from '@tabler/icons';
import { MantineDemo } from '@mantine/ds';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';
import { IconMedal } from '@tabler/icons';

function Demo() {
  return (
    <NumberInput
      label="Age when you graduated"
      placeholder="Age when you graduated"
      defaultValue={22}
      min={0}
      max={120}
      icon={<IconMedal size={18} />}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      maw={320}
      mx="auto"
      label="Age when you graduated"
      placeholder="Age when you graduated"
      defaultValue={22}
      min={0}
      max={120}
      icon={<IconMedal size={18} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
