import { Button, Group } from '@mantine/core';
import {
  NavigationProgress,
  incrementNavigationProgress,
  decrementNavigationProgress,
  setNavigationProgress,
  startNavigationProgress,
  stopNavigationProgress,
  resetNavigationProgress,
} from '@mantine/nprogress';
import React from 'react';

const code = `
import { Button, Group } from '@mantine/core';
import {
  NavigationProgress,
  incrementNavigationProgress,
  decrementNavigationProgress,
  setNavigationProgress,
  startNavigationProgress,
  stopNavigationProgress,
  resetNavigationProgress,
} from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group position="center">
        <Button onClick={() => incrementNavigationProgress(10)}>Add 10%</Button>
        <Button color="red" onClick={() => decrementNavigationProgress(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => setNavigationProgress(50)}>Set 50%</Button>
        <Button onClick={() => startNavigationProgress()}>Start</Button>
        <Button onClick={() => stopNavigationProgress()}>Stop</Button>
        <Button onClick={() => resetNavigationProgress()}>Reset</Button>
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
        <Button onClick={() => incrementNavigationProgress(10)} variant="outline">
          Add 10%
        </Button>
        <Button onClick={() => decrementNavigationProgress(10)} variant="outline">
          Decrease 10%
        </Button>
        <Button onClick={() => setNavigationProgress(50)} variant="outline">
          Set 50%
        </Button>
        <Button onClick={() => startNavigationProgress()} variant="outline">
          Start
        </Button>
        <Button onClick={() => stopNavigationProgress()} variant="outline">
          Stop
        </Button>
        <Button onClick={() => resetNavigationProgress()} variant="outline">
          Reset
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
