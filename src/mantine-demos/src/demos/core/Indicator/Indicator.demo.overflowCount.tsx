import React, { useState } from 'react';
import { Avatar, Indicator, Button, Group } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Avatar, Indicator, Button, Group } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(9);

  return (
    <>
      <Group position="center" spacing="xl">
        <Indicator label={count} inline size={22}>
          <Avatar size="lg" src="avatar.png" />
        </Indicator>

        <Indicator label={count} overflowCount={10} inline size={22}>
          <Avatar size="lg" src="avatar.png" />
        </Indicator>

        <Indicator label={count} showZero={false} dot={false} overflowCount={999} inline size={22}>
          <Avatar size="lg" src="avatar.png" />
        </Indicator>
      </Group>

      <Group position="center" mt="xl">
        <Button variant="outline" onClick={() => setCount((old) => (old > 0 ? old - 1 : old))}>
          Decrement
        </Button>
        <Button variant="outline" onClick={() => setCount((old) => old + 1)}>
          Increment
        </Button>
      </Group>
    </>
  );
}
`;

const avatar =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

function Demo() {
  const [count, setCount] = useState(9);
  return (
    <>
      <Group position="center" spacing="xl">
        <Indicator label={count} inline size={22}>
          <Avatar size="lg" src={avatar} />
        </Indicator>
        <Indicator label={count} overflowCount={10} inline size={22}>
          <Avatar size="lg" src={avatar} />
        </Indicator>
        <Indicator label={count} showZero={false} dot={false} overflowCount={999} inline size={22}>
          <Avatar size="lg" src={avatar} />
        </Indicator>
      </Group>

      <Group position="center" mt="xl">
        <Button variant="outline" onClick={() => setCount((old) => (old > 0 ? old - 1 : old))}>
          Decrement
        </Button>
        <Button variant="outline" onClick={() => setCount((old) => old + 1)}>
          Increment
        </Button>
      </Group>
    </>
  );
}

export const overflowCount: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
