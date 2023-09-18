import React from 'react';
import { Button, Text, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useForceUpdate, randomId } from '@mantine/hooks';

const code = `
import { Button, Text, Group } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
