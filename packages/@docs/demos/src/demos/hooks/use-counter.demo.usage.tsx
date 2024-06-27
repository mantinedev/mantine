import { Button, Group, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text size="md" ta="center" py="xs">
        Count: {count}
      </Text>
      <Group justify="center">
        <Button size="xs" onClick={handlers.increment}>
          Increment
        </Button>
        <Button size="xs" onClick={handlers.decrement}>
          Decrement
        </Button>
        <Button size="xs" onClick={handlers.reset}>
          Reset
        </Button>
        <Button size="xs" onClick={() => handlers.set(5)}>
          Set 5
        </Button>
      </Group>
    </>
  );
}

export const useCounterDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
