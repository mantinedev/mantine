import { Button, Group } from '@mantine/core';
import React from 'react';
import { NProgressProvider, useNProgress } from '../index';

const code = `

`;

function Demo() {
  const { start, stop, add, set } = useNProgress();

  return (
    <Group m={16} grow>
      <Button onClick={() => start()}>Start</Button>
      <Button onClick={() => stop()}>Stop</Button>
      <Button onClick={() => add(10)}>Add 10%</Button>
      <Button onClick={() => add(50)}>Add 50%</Button>
      <Button onClick={() => set(0)}>Reset</Button>
    </Group>
  );
}

function DemoWrapper() {
  return (
    <NProgressProvider color="red">
      <Demo />
    </NProgressProvider>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: DemoWrapper,
};
