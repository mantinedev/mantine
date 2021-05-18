import React, { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
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
}`;

export function DrawerInactiveDemo() {
  const [opened, setOpened] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
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
    </CodeDemo>
  );
}
