import React from 'react';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import { Group } from '../../Group/Group';
import { Avatar } from '../../Avatar/Avatar';
import { Text } from '../../Text/Text';

const code = `
import { UnstyledButton } from '@mantine/core';

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
