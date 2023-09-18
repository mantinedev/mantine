import React from 'react';
import { useDebouncedState } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { TextInput, Text, Box } from '@mantine/core';

const code = `
import { useDebouncedState } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useDebouncedState('', 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useDebouncedState('', 200);

  return (
    <Box maw={400} mx="auto">
      <TextInput
        label="Enter value to see debounce effect"
        placeholder="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Text mt="sm">
        <Text component="span" c="dimmed" size="sm">
          Debounced value:
        </Text>{' '}
        {value.trim() || '[empty string]'}
      </Text>
    </Box>
  );
}

export const useDebouncedStateUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
