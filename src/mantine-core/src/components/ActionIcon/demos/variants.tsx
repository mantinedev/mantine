import React from 'react';
import { GearIcon } from '@modulz/radix-icons';
import { ActionIcon } from '../ActionIcon';
import { Group } from '../../Group/Group';

const code = `
<ActionIcon variant="transparent"><GearIcon /></ActionIcon>
<ActionIcon variant="hover"><GearIcon /></ActionIcon>
<ActionIcon variant="outline"><GearIcon /></ActionIcon>
<ActionIcon variant="filled"><GearIcon /></ActionIcon>
<ActionIcon variant="light"><GearIcon /></ActionIcon>
`;

export function Demo() {
  const icon = <GearIcon style={{ width: 16, height: 16 }} />;

  return (
    <Group position="center">
      <ActionIcon variant="transparent" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="hover" color="blue">
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
