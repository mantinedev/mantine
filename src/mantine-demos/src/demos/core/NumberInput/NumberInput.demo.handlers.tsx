import React, { useState, useRef } from 'react';
import { MantineDemo } from '@mantine/ds';
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  useMantineTheme,
  rem,
} from '@mantine/core';

const code = `
import { useState, useRef } from 'react';
import { NumberInput, Group, ActionIcon, NumberInputHandlers, rem } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<number | ''>(0);
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Group spacing={5}>
      <ActionIcon size={42} variant="default" onClick={() => handlers.current.decrement()}>
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
        styles={{ input: { width: rem(54), textAlign: 'center' } }}
      />

      <ActionIcon size={42} variant="default" onClick={() => handlers.current.increment()}>
        +
      </ActionIcon>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState<number | ''>(0);
  const handlers = useRef<NumberInputHandlers>();

  const controlStyles = {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[4],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    transitionDuration: '0ms',
  };

  return (
    <Group spacing={5} position="center">
      <ActionIcon
        size={36}
        variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        onClick={() => handlers.current.decrement()}
        style={controlStyles}
      >
        –
      </ActionIcon>
      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        placeholder="0"
        max={10}
        min={0}
        step={2}
        styles={{ input: { width: rem(54), textAlign: 'center' } }}
      />
      <ActionIcon
        size={36}
        variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        onClick={() => handlers.current.increment()}
        style={controlStyles}
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
