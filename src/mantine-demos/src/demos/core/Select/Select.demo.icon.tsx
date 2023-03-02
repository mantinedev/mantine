import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <Select
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size="1rem" />}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size="1rem" />}
      withinPortal
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
