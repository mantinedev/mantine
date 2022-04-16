import { Button, Group } from '@mantine/core';
import {
  NProgress,
  addNProgress,
  decreaseNProgress,
  setNProgress,
  startNProgress,
  stopNProgress,
  resetNProgress,
} from '@mantine/nprogress';
import React from 'react';

const code = `
import { Button, Group } from '@mantine/core';
import {
  NProgress,
  addNProgress,
  decreaseNProgress,
  setNProgress,
  startNProgress,
  stopNProgress,
  resetNProgress,
} from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NProgress />
      <Group position="center">
        <Button onClick={() => addNProgress(10)}>Add 10%</Button>
        <Button color="red" onClick={() => decreaseNProgress(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => setNProgress(50)}>Set 50%</Button>
        <Button onClick={() => startNProgress()}>Start</Button>
        <Button onClick={() => stopNProgress()}>Stop</Button>
        <Button onClick={() => resetNProgress()}>Reset</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NProgress />
      <Group position="center">
        <Button onClick={() => addNProgress(10)}>Add 10%</Button>
        <Button color="red" onClick={() => decreaseNProgress(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => setNProgress(50)}>Set 50%</Button>
        <Button onClick={() => startNProgress()}>Start</Button>
        <Button onClick={() => stopNProgress()}>Stop</Button>
        <Button onClick={() => resetNProgress()}>Reset</Button>
      </Group>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
