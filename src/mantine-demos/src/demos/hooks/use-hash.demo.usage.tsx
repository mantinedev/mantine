import React from 'react';
import { useHash, randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Group, Button, Text, Code } from '@mantine/core';

const code = `
import { useHash, randomId } from '@mantine/hooks';
import { Button, Text, Code } from '@mantine/core';

function Demo() {
  const [hash, setHash] = useHash();
  return (
    <>
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>Current hash: <Code>{hash}</Code></Text>
    </>
  );
}`;

function Demo() {
  const [hash, setHash] = useHash();

  return (
    <>
      <Group justify="center">
        <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      </Group>

      <Text ta="center" mt="md">
        Current hash: <Code>{hash}</Code>
      </Text>
    </>
  );
}

export const useHashDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
