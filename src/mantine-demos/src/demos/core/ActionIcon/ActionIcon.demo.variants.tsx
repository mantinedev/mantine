import React from 'react';
import { IconSettings } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon, Group } from '@mantine/core';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <ActionIcon variant="transparent"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="subtle"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="outline"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="light"><IconSettings size="1rem" /></ActionIcon>
    </>
  );
}
`;

const icon = <IconSettings size="1rem" />;

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
