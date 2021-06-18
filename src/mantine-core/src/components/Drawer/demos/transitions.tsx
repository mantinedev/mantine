import React, { useState } from 'react';
import { Drawer, Button, Group } from '../../../index';
import { AuthenticationForm } from '../../../../demos/AuthenticationForm/AuthenticationForm';

const code = `
import React, { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        title="Register"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
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
        padding="xl"
        size="xl"
        title="Register"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
