import React from 'react';
import { Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useToggle, upperFirst } from '@mantine/hooks';

const code = `
import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
