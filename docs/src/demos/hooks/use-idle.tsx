import React from 'react';
import { Group, Text } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

const code = `
import React from 'react';
import { Text } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
    const idleStatus = useIdle(5000);
  
    return (
      <Group position="center">
      <Text weight={700}>Am I Idle : </Text><Text color="blue">{JSON.stringify(idleStatus).toLocaleUpperCase()}</Text>
      </Group>
    );
};`;

function Demo() {
  const idleStatus = useIdle(5000);

  return (
    <Group position="center">
        <Text weight={700}>Am I Idle : </Text><Text color="blue">{`${JSON.stringify(idleStatus).toLocaleUpperCase()} ${!idleStatus ? '( Watch me change after an inactivity of 5 seconds )' : ''}`}</Text>
    </Group>
  );
}

export const useIdleHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
