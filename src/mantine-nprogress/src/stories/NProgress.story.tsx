/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Group } from '@mantine/core';
import { NProgressProvider, useNProgress } from '../index';

function Demo() {
  const { add, set, start, stop } = useNProgress();

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

storiesOf('@mantine/nprogress', module).add('Test', () => (
  <NProgressProvider>
    <Demo />
  </NProgressProvider>
));
