import { useState } from 'react';
import { Button, Drawer, Group, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Drawer, Group, Text } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<'bottom' | 'top' | 'left' | 'right'>('bottom');
  const open = (value: typeof position) => {
    setPosition(value);
    setOpened(true);
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position={position}
        size="auto"
        title="Auto size drawer"
      >
        <Text>The drawer is as large as this content</Text>
      </Drawer>

      <Group justify="center">
        <Button variant="default" onClick={() => open('bottom')}>Bottom</Button>
        <Button variant="default" onClick={() => open('top')}>Top</Button>
        <Button variant="default" onClick={() => open('left')}>Left</Button>
        <Button variant="default" onClick={() => open('right')}>Right</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<'bottom' | 'top' | 'left' | 'right'>('bottom');
  const open = (value: typeof position) => {
    setPosition(value);
    setOpened(true);
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position={position}
        size="auto"
        title="Auto size drawer"
      >
        <Text>The drawer is as large as this content</Text>
      </Drawer>

      <Group justify="center">
        <Button variant="default" onClick={() => open('bottom')}>
          Bottom
        </Button>
        <Button variant="default" onClick={() => open('top')}>
          Top
        </Button>
        <Button variant="default" onClick={() => open('left')}>
          Left
        </Button>
        <Button variant="default" onClick={() => open('right')}>
          Right
        </Button>
      </Group>
    </>
  );
}

export const autoSize: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
