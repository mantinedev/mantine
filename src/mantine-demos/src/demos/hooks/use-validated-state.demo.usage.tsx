import React from 'react';
import { TextInput, Text } from '@mantine/core';
import { useValidatedState } from '@mantine/hooks';

const code = `
import { TextInput, Text } from '@mantine/core';
import { useValidatedState } from '@mantine/hooks';

function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    '',
    (val) => /^\\S+@\\S+$/.test(val),
    true
  );

  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <TextInput
        value={value}
        onChange={(event) => setEmail(event.currentTarget.value)}
        withAsterisk
        error={!valid}
        placeholder="email@example.com"
        label="Your email"
      />

      <Text size="sm" mt="md">
        <Text inherit color="dimmed" component="span">
          Current value:
        </Text>{' '}
        {value || '[empty string]'}
      </Text>
      <Text size="sm">
        <Text inherit color="dimmed" component="span">
          Last valid value:
        </Text>{' '}
        {lastValidValue || '[empty string]'}
      </Text>
    </div>
  );
}
`;

function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    '',
    (val) => /^\S+@\S+$/.test(val),
    true
  );

  return (
    <div style={{ maxWidth: 320, margin: 'auto', overflowWrap: 'break-word' }}>
      <TextInput
        value={value}
        onChange={(event) => setEmail(event.currentTarget.value)}
        withAsterisk
        error={!valid}
        placeholder="email@example.com"
        label="Your email"
      />

      <Text size="sm" mt="md">
        <Text inherit color="dimmed" component="span">
          Current value:
        </Text>{' '}
        {value || '[empty string]'}
      </Text>
      <Text size="sm">
        <Text inherit color="dimmed" component="span">
          Last valid value:
        </Text>{' '}
        {lastValidValue || '[empty string]'}
      </Text>
    </div>
  );
}

export const useValidatedStateDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
