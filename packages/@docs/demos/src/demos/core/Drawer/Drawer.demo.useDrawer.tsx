import { useState } from 'react';
import { Button, Group, Text, useDrawer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Text, useDrawer } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  const drawer = useDrawer({
    title: \`Count: \${count}\`,
    position: 'right',
    children: (
      <>
        <Text mb="md">The drawer is updated every time the parent component renders: {count}</Text>
        <Button fullWidth onClick={() => setCount((c) => c + 1)}>
          Increment
        </Button>
      </>
    ),
  });

  return (
    <Group justify="center">
      <Button onClick={() => drawer.open()}>Open drawer</Button>
      <Button variant="default" onClick={() => drawer.open({ position: 'left' })}>
        Open on the left
      </Button>
      <Button variant="default" onClick={() => setCount((c) => c + 1)}>
        Increment ({count})
      </Button>
    </Group>
  );
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  const drawer = useDrawer({
    title: `Count: ${count}`,
    position: 'right',
    children: (
      <>
        <Text mb="md">The drawer is updated every time the parent component renders: {count}</Text>
        <Button fullWidth onClick={() => setCount((c) => c + 1)}>
          Increment
        </Button>
      </>
    ),
  });

  return (
    <Group justify="center">
      <Button onClick={() => drawer.open()}>Open drawer</Button>
      <Button variant="default" onClick={() => drawer.open({ position: 'left' })}>
        Open on the left
      </Button>
      <Button variant="default" onClick={() => setCount((c) => c + 1)}>
        Increment ({count})
      </Button>
    </Group>
  );
}

export const useDrawerHook: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
