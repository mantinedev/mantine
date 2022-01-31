import React from 'react';
import { Text } from '@mantine/core';

const code = `
<Text color="dimmed">Dimmed text</Text>
`;

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}

export const dimmed: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
