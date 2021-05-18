import React, { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

export function DrawerSizesDemo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<number | string>('top');
  const open = (s: typeof size) => {
    setSize(s);
    setOpened(true);
  };

  const controls = (['xs', 'sm', 'md', 'lg', 'xl', 'full', 800, '25%'] as const).map((s) => (
    <Button variant="outline" onClick={() => open(s)} key={s}>
      {typeof s === 'string' ? s : `${s}px`}
    </Button>
  ));

  return (
    <CodeDemo>
      <Drawer opened={opened} onClose={() => setOpened(false)} padding="md" size={size}>
        Press escape to close the drawer
      </Drawer>

      <Group position="center">{controls}</Group>
    </CodeDemo>
  );
}
