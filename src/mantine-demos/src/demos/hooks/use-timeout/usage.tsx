import React, { useState } from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';

function Demo() {
  const [triggered, setTriggered] = useState(false);
  const { start, clear } = useTimeout(() => setTriggered(false), 5000, { autoInvoke: false });

  const handleClick = () => {
    if (triggered) {
      setTriggered(false);
      clear();
    } else {
      setTriggered(true);
      start();
    }
  };

  return (
    <Group position="center" direction="column">
      <Text>{triggered ? 'Timer Ticking' : '5 seconds Elapsed'}</Text>
      <Button onClick={handleClick} color={triggered ? 'red' : 'teal'} variant="light">
        {triggered ? 'Clear' : 'Start'}
      </Button>
    </Group>
  );
}
`;

function Demo() {
  const [triggered, setTriggered] = useState(false);
  const { start, clear } = useTimeout(() => setTriggered(false), 5000, { autoInvoke: false });

  const handleClick = () => {
    if (triggered) {
      setTriggered(false);
      clear();
    } else {
      setTriggered(true);
      start();
    }
  };

  return (
    <Group position="center" direction="column">
      <Text>{triggered ? 'Timer Ticking' : 'Start a 5 second timer'}</Text>
      <Button onClick={handleClick} color={triggered ? 'red' : 'teal'} variant="light">
        {triggered ? 'Clear' : 'Start'}
      </Button>
    </Group>
  );
}

export const useTimeoutDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
