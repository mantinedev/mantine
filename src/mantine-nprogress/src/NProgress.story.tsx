import { Button, Group, MantineProvider } from '@mantine/core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { addNProgress, NProgress, setNProgress, startNProgress, stopNProgress } from './index';

function NProgressDemo() {
  return (
    <Group m={16} grow pb={10000}>
      <Button onClick={startNProgress}>Start</Button>
      <Button onClick={stopNProgress}>Stop</Button>
      <Button onClick={() => addNProgress(10)}>Add 10%</Button>
      <Button onClick={() => addNProgress(50)}>Add 50%</Button>
      <Button
        onClick={() => {
          stopNProgress();
          setNProgress(0);
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
      <NProgress size={2} color="red" />
      <NProgressDemo />
    </MantineProvider>
  </React.StrictMode>
));
