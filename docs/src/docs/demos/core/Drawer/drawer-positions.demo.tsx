import React, { useState } from 'react';
import { Drawer, Button, Group, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

export function DrawerPositionsDemo() {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');
  const open = (p: typeof position) => {
    setPosition(p);
    setOpened(true);
  };

  return (
    <CodeDemo>
      <Portal zIndex={10}>
        <Drawer opened={opened} onClose={() => setOpened(false)} padding="md" position={position}>
          Press escape to close the drawer
        </Drawer>
      </Portal>

      <Group position="center">
        <Button variant="outline" onClick={() => open('left')}>
          left
        </Button>
        <Button variant="outline" onClick={() => open('right')}>
          right
        </Button>
        <Button variant="outline" onClick={() => open('top')}>
          top
        </Button>
        <Button variant="outline" onClick={() => open('bottom')}>
          bottom
        </Button>
      </Group>
    </CodeDemo>
  );
}
