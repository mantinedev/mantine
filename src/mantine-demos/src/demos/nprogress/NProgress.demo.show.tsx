import { Button, Group } from '@mantine/core';
import {
  NProgress,
  addNProgress,
  decreaseNProgress,
  setNProgress,
  startNProgress,
  stopNProgress,
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
        <Button
          onClick={() => {
            setNProgress(0);
            stopNProgress();
          }}
        >
          Reset
        </Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NProgress defaultProgress={60} />
      <Group position="center">
        <Button onClick={() => addNProgress(10)}>Add 10%</Button>
        <Button color="red" onClick={() => decreaseNProgress(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => setNProgress(50)}>Set 50%</Button>
        <Button onClick={() => startNProgress()}>Start</Button>
        <Button onClick={() => stopNProgress()}>Stop</Button>
        <Button
          onClick={() => {
            stopNProgress();
            setNProgress(0);
          }}
        >
          Reset
        </Button>
      </Group>
    </>
  );
}

export const show: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
