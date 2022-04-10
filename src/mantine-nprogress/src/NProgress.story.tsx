import { Button, Group, MantineProvider } from '@mantine/core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { useNProgress } from './NProgress.context';
import { NProgressProvider } from './NProgressProvider';

function NProgressDemo() {
  const { start, stop, add, set } = useNProgress();

  return (
    <Group m={16} grow>
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={() => add(10)}>Add 10%</Button>
      <Button onClick={() => add(50)}>Add 50%</Button>
      <Button
        onClick={() => {
          stop();
          set(0);
        }}
      >
        Reset
      </Button>
    </Group>
  );
}

storiesOf('NProgress', module).add('test', () => (
  <React.StrictMode>
    <MantineProvider>
      <NProgressProvider>
        <NProgressDemo />
      </NProgressProvider>
    </MantineProvider>
  </React.StrictMode>
));
