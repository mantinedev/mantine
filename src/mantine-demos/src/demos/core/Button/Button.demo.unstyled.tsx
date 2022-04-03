import React from 'react';
import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';

const code = `
import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';

function Demo() {
  return (
    <UnstyledButton onClick={() => console.log('try focusing button with tab')}>
      <Group>
        <Avatar size={40} color="blue">BH</Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text size="xs" color="gray">bob@handsome.inc</Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <UnstyledButton aria-label="Open user menu" onClick={() => {}}>
        <Group>
          <Avatar size={40} color="blue">
            BH
          </Avatar>
          <div>
            <Text>Bob Handsome</Text>
            <Text size="xs" color="gray">
              bob@handsome.inc
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Group>
  );
}

export const unstyled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
