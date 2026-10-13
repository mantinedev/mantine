import { useState } from 'react';
import { Button, Group, Text, useModal } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Text, useModal } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  const modal = useModal({
    title: \`Count: \${count}\`,
    children: (
      <>
        <Text mb="md">The modal is updated every time the parent component renders: {count}</Text>
        <Button fullWidth onClick={() => setCount((c) => c + 1)}>
          Increment
        </Button>
      </>
    ),
  });

  return (
    <Group justify="center">
      <Button onClick={() => modal.open()}>Open modal</Button>
      <Button variant="default" onClick={() => setCount((c) => c + 1)}>
        Increment ({count})
      </Button>
    </Group>
  );
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  const modal = useModal({
    title: `Count: ${count}`,
    children: (
      <>
        <Text mb="md">The modal is updated every time the parent component renders: {count}</Text>
        <Button fullWidth onClick={() => setCount((c) => c + 1)}>
          Increment
        </Button>
      </>
    ),
  });

  return (
    <Group justify="center">
      <Button onClick={() => modal.open()}>Open modal</Button>
      <Button variant="default" onClick={() => setCount((c) => c + 1)}>
        Increment ({count})
      </Button>
    </Group>
  );
}

export const useModalHook: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
