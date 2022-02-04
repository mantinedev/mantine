import React, { useState, useEffect } from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useInterval } from '@mantine/hooks';

const code = `import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Group position="center" direction="column">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? 'red' : 'teal'}
        variant="light"
      >
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Group>
  );
}`;

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Group position="center" direction="column">
      <Text>
        Page loaded <b>{seconds}</b> seconds ago
      </Text>
      <Button onClick={interval.toggle} color={interval.active ? 'red' : 'teal'} variant="light">
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Group>
  );
}

export const useIntervalHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
