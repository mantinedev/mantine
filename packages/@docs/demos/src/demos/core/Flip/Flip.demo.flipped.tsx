import { Button, Flip, Paper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import React from 'react';

const code = `
import { Flip } from '@mantine/core';

function Demo() {
  return (
    <Flip h={200} w={200} defaultFlipped>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <Flip.Target>
          <Button>Flip Back</Button>
        </Flip.Target>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Default Back Card</h3>
        <Flip.Target>
          <Button>Flip Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
);
}
`;

function Demo() {
  return (
    <Flip h={200} w={200} defaultFlipped>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <Flip.Target>
          <Button>Flip Back</Button>
        </Flip.Target>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Default Back Card</h3>
        <Flip.Target>
          <Button>Flip Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}

export const flipped: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
  dimmed: true,
};
