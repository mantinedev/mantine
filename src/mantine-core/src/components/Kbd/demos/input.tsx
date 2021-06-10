import React from 'react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Kbd, TextInput, useMantineTheme } from '../../../index';

const code = `
import React from 'react';
import { Kbd, TextInput, useMantineTheme } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

function Demo() {
  const theme = useMantineTheme();

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
      icon={<MagnifyingGlassIcon />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}
`;

function Demo() {
  const theme = useMantineTheme();

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
      icon={<MagnifyingGlassIcon />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}

export const input: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
