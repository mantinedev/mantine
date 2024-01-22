import React, { useState } from 'react';
import { Button, Drawer, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');
  const open = (p: typeof position) => {
    setPosition(p);
    setOpened(true);
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        position={position}
        withCloseButton={false}
      >
        Press escape to close the drawer
      </Drawer>

      <Group justify="center">
        <Button onClick={() => open('left')}>Left</Button>
        <Button onClick={() => open('right')}>Right</Button>
        <Button onClick={() => open('top')}>Top</Button>
        <Button onClick={() => open('bottom')}>Bottom</Button>
      </Group>
    </>
  );
}

export const positions: MantineDemo = {
  type: 'code',
  component: Demo,
};
