import React from 'react';
import { IconLock } from '@tabler/icons';
import { MantineDemo } from '@mantine/ds';
import { PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';
import { IconLock } from '@tabler/icons';

function Demo() {
  return (
    <PasswordInput
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size={16} />}
    />
  );
}
`;

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size={16} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
