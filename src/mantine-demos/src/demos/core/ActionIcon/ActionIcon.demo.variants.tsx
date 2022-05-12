import React from 'react';
import { Settings } from 'tabler-icons-react';
import { ActionIcon, Group } from '@mantine/core';

const code = `
import { ActionIcon } from '@mantine/core';
import { Settings } from 'tabler-icons-react';

function Demo() {
  return (
    <>
      <ActionIcon variant="transparent"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="subtle"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="default"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="outline"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="filled"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="light"><Settings size={16} /></ActionIcon>
    </>
  );
}
`;

const icon = <Settings size={16} />;

export function Demo() {
  return (
    <Group position="center">
      <ActionIcon variant="transparent" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="subtle" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="default" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="outline" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="filled" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="light" color="blue">
        {icon}
      </ActionIcon>
    </Group>
  );
}

export const variants: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
