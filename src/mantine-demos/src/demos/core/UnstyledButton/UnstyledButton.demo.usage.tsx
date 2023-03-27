import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';

const code = `
import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';

function Demo() {
  return (
    <UnstyledButton>
      <Group>
        <Avatar size={40} color="blue">BH</Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text size="xs" color="dimmed">bob@handsome.inc</Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <UnstyledButton aria-label="Open user menu">
        <Group>
          <Avatar size={40} color="blue">
            BH
          </Avatar>
          <div>
            <Text>Bob Handsome</Text>
            <Text size="xs" color="dimmed">
              bob@handsome.inc
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
