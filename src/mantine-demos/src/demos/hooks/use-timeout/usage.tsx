import React, { useState } from 'react';
import { Stack, Button, Text } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Stack, Button, Text } from '@mantine/core';
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
    <Stack>
      <Text>{triggered ? 'Timer Ticking' : '5 seconds Elapsed'}</Text>
      <Button onClick={handleClick} color={triggered ? 'red' : 'teal'} variant="light">
        {triggered ? 'Clear' : 'Start'}
      </Button>
    </Stack>
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
    <Stack>
      <Text>{triggered ? 'Timer Ticking' : 'Start a 5 second timer'}</Text>
      <Button onClick={handleClick} color={triggered ? 'red' : 'teal'} variant="light">
        {triggered ? 'Clear' : 'Start'}
      </Button>
    </Stack>
  );
}

export const useTimeoutDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
