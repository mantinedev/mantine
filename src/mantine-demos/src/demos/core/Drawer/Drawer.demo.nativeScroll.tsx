import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={Drawer.NativeScrollArea}
      >
        {content}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={Drawer.NativeScrollArea}
      >
        {content}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}

export const nativeScroll: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
