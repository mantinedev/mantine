import React from 'react';
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';
import { MantineDemo } from '@mantine/ds';

const code = `
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group position="center">
        <Button onClick={() => nprogress.increment(10)}>Add 10%</Button>
        <Button color="red" onClick={() => nprogress.decrement(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Finish</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group position="center">
        <Button onClick={() => nprogress.increment(10)} variant="outline">
          Add 10%
        </Button>
        <Button onClick={() => nprogress.decrement(10)} variant="outline">
          Decrease 10%
        </Button>
        <Button onClick={() => nprogress.set(50)} variant="outline">
          Set 50%
        </Button>
        <Button onClick={() => nprogress.start()} variant="outline">
          Start
        </Button>
        <Button onClick={() => nprogress.stop()} variant="outline">
          Stop
        </Button>
        <Button onClick={() => nprogress.reset()} variant="outline">
          Reset
        </Button>
        <Button onClick={() => nprogress.complete()} variant="outline">
          Finish
        </Button>
      </Group>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
