import React from 'react';
import { IconSettings } from '@tabler/icons';
import { ActionIcon, Group } from '@mantine/core';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons';

function Demo() {
  return (
    <>
      <ActionIcon variant="transparent"><IconSettings size={16} /></ActionIcon>
      <ActionIcon variant="subtle"><IconSettings size={16} /></ActionIcon>
      <ActionIcon variant="default"><IconSettings size={16} /></ActionIcon>
      <ActionIcon variant="outline"><IconSettings size={16} /></ActionIcon>
      <ActionIcon variant="filled"><IconSettings size={16} /></ActionIcon>
      <ActionIcon variant="light"><IconSettings size={16} /></ActionIcon>
    </>
  );
}
`;

const icon = <IconSettings size={16} />;

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
