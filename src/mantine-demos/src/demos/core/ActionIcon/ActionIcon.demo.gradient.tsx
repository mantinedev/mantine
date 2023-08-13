import React from 'react';
import { ActionIcon, Group, rem } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { IconSun } from '@tabler/icons-react';

const code = `
import { ActionIcon, Group } from '@mantine/core';
import { Sun } from 'tabler-icons-react';
function Demo() {
  return (
    <>
      <ActionIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'orange', to: 'red' }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}><IconSun size={18} /></ActionIcon>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ActionIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        <IconSun size={rem(18)} />
      </ActionIcon>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
