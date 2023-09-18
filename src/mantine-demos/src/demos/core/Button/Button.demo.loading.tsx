import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, Group } from '@mantine/core';

const code = `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
