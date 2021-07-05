import React, { useState, useRef } from 'react';
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  useMantineTheme,
} from '../../../index';

const code = `
import React, { useState, useRef } from 'react';
import { NumberInput, Group, ActionIcon, NumberInputHandlers } from '@mantine/core';

function HandlersWrapper() {
  const [value, setValue] = useState(0);
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Group spacing={5}>
      <ActionIcon size={42} variant="outline" onClick={() => handlers.current.decrement()}>
        –
      </ActionIcon>
      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        max={10}
        min={0}
        step={2}
        styles={{ input: { width: 54, textAlign: 'center' } }}
      />
      <ActionIcon size={42} variant="outline" onClick={() => handlers.current.increment()}>
        +
      </ActionIcon>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState(0);
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Group spacing={5} position="center">
      <ActionIcon
        size={42}
        variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        onClick={() => handlers.current.decrement()}
        style={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        }}
      >
        –
      </ActionIcon>
      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        max={10}
        min={0}
        step={2}
        styles={{ input: { width: 54, textAlign: 'center' } }}
        variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
      />
      <ActionIcon
        size={42}
        variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        onClick={() => handlers.current.increment()}
        style={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        }}
      >
        +
      </ActionIcon>
    </Group>
  );
}

export const handlers: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
