import React from 'react';
import { Text, Title } from '@mantine/core';

const code = `
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>
      Title in which you want to
      <Text color="blue" inherit component="span">
        highlight
      </Text>
      something
    </Title>;
}
`;

function Demo() {
  return (
    <Title order={3}>
      Title in which you want to{' '}
      <Text color="blue" inherit component="span">
        highlight
      </Text>{' '}
      something
    </Title>
  );
}

export const inherit: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
