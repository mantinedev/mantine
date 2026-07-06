import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Text } from '@mantine/core';
import { useHoldRepeatHandlers } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Text } from '@mantine/core';
import { useHoldRepeatHandlers } from '@mantine/hooks';

const interval = (step: number) => Math.max(40, 300 - step * 20);

function Demo() {
  const [count, setCount] = useState(0);

  const increment = useHoldRepeatHandlers(() => setCount((c) => c + 1), { delay: 400, interval });
  const decrement = useHoldRepeatHandlers(() => setCount((c) => c - 1), { delay: 400, interval });

  return (
    <Group>
      <ActionIcon {...decrement} variant="default" size="lg" aria-label="Decrement">
        <MinusIcon size={18} />
      </ActionIcon>
      <Text fw={500} w={60} ta="center">{count}</Text>
      <ActionIcon {...increment} variant="default" size="lg" aria-label="Increment">
        <PlusIcon size={18} />
      </ActionIcon>
    </Group>
  );
}
`;

const interval = (step: number) => Math.max(40, 300 - step * 20);

function Demo() {
  const [count, setCount] = useState(0);

  const increment = useHoldRepeatHandlers(() => setCount((c) => c + 1), { delay: 400, interval });
  const decrement = useHoldRepeatHandlers(() => setCount((c) => c - 1), { delay: 400, interval });

  return (
    <Group>
      <ActionIcon {...decrement} variant="default" size="lg" aria-label="Decrement">
        <MinusIcon size={18} />
      </ActionIcon>
      <Text fw={500} w={60} ta="center">
        {count}
      </Text>
      <ActionIcon {...increment} variant="default" size="lg" aria-label="Increment">
        <PlusIcon size={18} />
      </ActionIcon>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
