import React, { useState } from 'react';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened((o) => !o)}>Toggle dialog</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened((o) => !o)}>Toggle dialog</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
