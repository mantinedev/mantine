import React, { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        hideCloseButton
        noCloseOnClickOutside
        noFocusTrap
        noScrollLock
        noOverlay
      >
        Press escape to close the drawer
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        hideCloseButton
        noCloseOnClickOutside
        noFocusTrap
        noScrollLock
        noOverlay
      >
        Press escape to close the drawer
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const behavior: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
