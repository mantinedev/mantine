import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(1234);

  return (
    <>
      <RollingNumber value={value} fz="36px" />
      <Group mt="md">
        <Button onClick={() => setValue((v) => v + 1)}>Increment</Button>
        <Button onClick={() => setValue((v) => v - 1)}>Decrement</Button>
        <Button onClick={() => setValue(Math.floor(Math.random() * 10000))}>Random</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState(1234);

  return (
    <>
      <RollingNumber value={value} fz="36px" />
      <Group mt="md">
        <Button onClick={() => setValue((v) => v + 1)}>Increment</Button>
        <Button onClick={() => setValue((v) => v - 1)}>Decrement</Button>
        <Button onClick={() => setValue(Math.floor(Math.random() * 10000))}>Random</Button>
      </Group>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
