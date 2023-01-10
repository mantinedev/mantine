import React from 'react';
import { IconAt } from '@tabler/icons';
import { MantineDemo } from '@mantine/ds';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" icon={<IconAt size={14} />} />;
}
`;

function Demo() {
  return (
    <TextInput
      maw={320}
      mx="auto"
      label="Your email"
      placeholder="Your email"
      icon={<IconAt size={14} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
