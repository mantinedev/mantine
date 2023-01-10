import React from 'react';
import { IconChevronDown } from '@tabler/icons';
import { MantineDemo } from '@mantine/ds';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';

function Demo() {
  return (
    <NativeSelect
      label="Your favorite library/framework"
      placeholder="Your favorite library/framework"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      rightSection={<IconChevronDown size={14} />}
      rightSectionWidth={40}
    />
  );
}
`;

function Demo() {
  return (
    <NativeSelect
      maw={320}
      mx="auto"
      label="Your favorite library/framework"
      placeholder="Your favorite library/framework"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      rightSection={<IconChevronDown size={14} />}
      rightSectionWidth={30}
    />
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
