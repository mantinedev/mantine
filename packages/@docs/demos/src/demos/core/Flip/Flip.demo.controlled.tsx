import { Button, Flip, Group, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import React from 'react';

const code = `
import { Button, Flip, Group, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [flipped, flip] = useDisclosure(false);
  
  return (

    <Paper radius="md" withBorder p="lg">
      <Flip flipped={flipped} h={200} w={200}>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
        </Paper>

      </Flip>

      <Group>
        <Button onClick={flip.toggle}>Flip</Button>
      </Group>
    </Paper>
  );
}
`;

function Demo() {
  const [flipped, flip] = useDisclosure(false);

  return (

    <Paper radius="md" withBorder p="lg">
      <Flip flipped={flipped} h={200} w={200}>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
        </Paper>
      </Flip>

      <Group justify="right">
        <Button onClick={flip.toggle}>Flip</Button>
      </Group>
    </Paper>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
  dimmed: true,
};
