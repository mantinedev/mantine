import React, { useState } from 'react';
import { Drawer, Button, ElementsGroup, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Drawer, Button, ElementsGroup } from '@mantine/core';

export function DrawerDemo() {
  const [opened, setOpened] = useState(false);
  
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
      >
        Press escape to close drawer
      </Drawer>

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </ElementsGroup>
    </>
  );
}`;

export function DrawerBaseDemo() {
  const [opened, setOpened] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <Portal zIndex={10}>
        <Drawer opened={opened} onClose={() => setOpened(false)} padding="md">
          Press escape to close drawer
        </Drawer>
      </Portal>

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
