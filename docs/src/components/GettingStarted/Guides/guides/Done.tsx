import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import { Button } from '@mantine/core';

export function MyApp() {
  return <Button>Hello world!</Button>;
}
`.trim();

export function Done() {
  return (
    <div>
      <Text weight={700} mt={20} mb={10}>
        You are ready to build your application with Mantine!
      </Text>
      <Prism language="tsx">{code}</Prism>
    </div>
  );
}
