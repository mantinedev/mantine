import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Kbd, TextInput } from '@mantine/core';

const code = `
import { Kbd, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<IconSearch size={16} />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}
`;

function Demo() {
  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<IconSearch size={16} />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}

export const input: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
