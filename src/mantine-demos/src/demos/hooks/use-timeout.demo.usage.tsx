import React, { useState } from 'react';
import { Button, Text, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { randomId, useTimeout } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@mantine/core';
import { randomId, useTimeout } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}

export const useTimeoutDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
