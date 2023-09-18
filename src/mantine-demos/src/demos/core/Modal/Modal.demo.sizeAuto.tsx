import React from 'react';
import { useDisclosure, useCounter } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

const code = `
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button variant="outline" onClick={increment}>
            Add badge
          </Button>
          <Button variant="outline" onClick={decrement}>
            Remove badge
          </Button>
        </Group>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button variant="outline" onClick={increment}>
            Add badge
          </Button>
          <Button variant="outline" onClick={decrement}>
            Remove badge
          </Button>
        </Group>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const sizeAuto: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
