import React from 'react';
import { IconChevronDown } from '@tabler/icons';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      rightSection={<IconChevronDown size={14} />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        rightSection={<IconChevronDown size={14} />}
        rightSectionWidth={30}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
