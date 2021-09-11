import React from 'react';
import { Title } from '../../Title/Title';
import { Text } from '../Text';

const code = `
<Title order={3}>Highlight <Text color="blue" inherit component="span">something</Text>in title</Title>
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
