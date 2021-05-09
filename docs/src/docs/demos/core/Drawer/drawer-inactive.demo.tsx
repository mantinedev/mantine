import React, { useState } from 'react';
import { Drawer, Button, ElementsGroup, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Drawer, Button, ElementsGroup } from '@mantine/core';

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

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </ElementsGroup>
    </>
  );
}`;

export function DrawerInactiveDemo() {
  const [opened, setOpened] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <Portal zIndex={10}>
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
      </Portal>

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
