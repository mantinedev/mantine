import React from 'react';
import { useDebouncedState } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

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
        style={{ flex: 1 }}
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
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          maxWidth: 400,
          margin: 'auto',
        }}
      >
        <TextInput
          label="Enter value to see debounce effect"
          placeholder="Enter value to see debounce effect"
          defaultValue={value}
          style={{ flex: 1 }}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </div>
      <div style={{ maxWidth: 400, margin: 'auto', marginTop: 15 }}>
        <Text>
          <Text component="span" color="dimmed" size="sm">
            Debounced value:
          </Text>{' '}
          {value.trim() || '[empty string]'}
        </Text>
      </div>
    </>
  );
}

export const useDebouncedStateUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
