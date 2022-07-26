import React from 'react';
import { useScrollLock } from '@mantine/hooks';
import { IconLock, IconLockOpen } from '@tabler/icons';
import { Group, Button } from '@mantine/core';

const code = `
import { useScrollLock } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';
import { IconLock, IconLockOpen } from '@tabler/icons';

function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <IconLock size={16} /> : <IconLockOpen size={16} />}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}`;

function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <IconLock size={16} /> : <IconLockOpen size={16} />}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}

export const useScrollLockDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
