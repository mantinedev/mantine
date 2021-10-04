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
    <>
      <Text weight={500} mt={30} mb={5} size="lg">
        All done!
      </Text>

      <Prism language="tsx">{code}</Prism>
    </>
  );
}
