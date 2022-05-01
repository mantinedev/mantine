import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, operations] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Group position="center">
          {Object.keys(operations).map((operation) => (
              <Button onClick={() => operations[operation]()}>operation</Button>
          ))}
      </Group>
      <Text>Count : {count}</Text>
    </>
  );
}`;

function Demo() {
  const [count, operations] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text size="md" align="center" py="xs">
        Count : {count}
      </Text>
      <Group position="center">
        {Object.keys(operations).map((operation) => (
          <Button
            onClick={() => {
              if (operation === 'set') operations[operation](5);
              else operations[operation]();
            }}
          >
            {operation === 'set' ? `${operation}(5)` : operation}
          </Button>
        ))}
      </Group>
    </>
  );
}

export const useCounterDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
