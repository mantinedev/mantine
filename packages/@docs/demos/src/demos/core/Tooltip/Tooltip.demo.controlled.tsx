import React, { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';
import { Tooltip, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`;

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>Toggle color scheme</Button>
    </Tooltip>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  centered: true,
  code,
  component: Demo,
};
