import React, { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger({ extraInfo: 'Hello World', currentCount: count }, [count]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger({ extraInfo: 'Hello World', currentCount: count }, [count]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

const optionCode = `
import { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger({ extraInfo: 'Hello World', currentCount: count }, [count], {
    logLevel: 'warn',
    logName: 'Option Test Logger',
  });

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}
`;

function OptionDemo() {
  const [count, setCount] = useState(0);
  useLogger({ extraInfo: 'Hello World', currentCount: count }, [count], {
    logLevel: 'warn',
    logName: 'Option Test Logger',
  });

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

export const useLoggerDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

export const useLoggerOptionsDemo: MantineDemo = {
  type: 'demo',
  code: optionCode,
  component: OptionDemo,
};
