import React from 'react';
import { useHash, randomId } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

const code = `import React from 'react';
import { useHash, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function Demo() {
 const [hash, setHash] = useHash();
  return (
    <Group position="center">
      {/* NOTE: '#' symbol is not required ONLY the string
      value must be passed as below */}
      <Button onClick={() => setHash(randomId())}>Set hash in URL to random id</Button>
    </Group>
  );
}`;

function Demo() {
  const [hash, setHash] = useHash();
  
  return (
    <Group position="center">
      {/* NOTE: '#' symbol is not required ONLY the string
      value must be passed as below */}
      <Button onClick={() => setHash(randomId())}>Set hash in URL to random id</Button>
    </Group>
  );
}

export const useHashHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
