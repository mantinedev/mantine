import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tooltip, Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`;

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Group position="center">
      <Tooltip label="Ctrl + J" opened={opened}>
        <Button variant="outline" onClick={() => setOpened((o) => !o)}>
          Toggle color scheme
        </Button>
      </Tooltip>
    </Group>
  );
}

export const controlled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
