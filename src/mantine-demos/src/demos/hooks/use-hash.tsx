import React from 'react';
import { useHash, randomId } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

const code = `
import { useHash, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function Demo() {
  const [hash, setHash] = useHash();
  return <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
}`;

function Demo() {
  const [, setHash] = useHash();

  return (
    <Group position="center">
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
    </Group>
  );
}

export const useHashHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
