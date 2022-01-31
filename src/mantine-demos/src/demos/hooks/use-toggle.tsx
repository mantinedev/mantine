import React from 'react';
import { Button, Group } from '@mantine/core';
import { useToggle, upperFirst } from '@mantine/hooks';

const code = `
import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
