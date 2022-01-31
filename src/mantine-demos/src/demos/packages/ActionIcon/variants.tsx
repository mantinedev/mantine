import React from 'react';
import { GearIcon } from '@modulz/radix-icons';
import { ActionIcon, Group } from '@mantine/core';

const code = `
<ActionIcon variant="transparent"><GearIcon /></ActionIcon>
<ActionIcon variant="hover"><GearIcon /></ActionIcon>
<ActionIcon variant="default"><GearIcon /></ActionIcon>
<ActionIcon variant="outline"><GearIcon /></ActionIcon>
<ActionIcon variant="filled"><GearIcon /></ActionIcon>
<ActionIcon variant="light"><GearIcon /></ActionIcon>
`;

const icon = <GearIcon style={{ width: 16, height: 16 }} />;

export function Demo() {
  return (
    <Group position="center">
      <ActionIcon variant="transparent" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="hover" color="blue">
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
