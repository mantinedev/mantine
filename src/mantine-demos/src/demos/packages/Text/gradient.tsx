import React from 'react';
import { Text, Group } from '@mantine/core';

const code = `
<Text
  component="span"
  align="center"
  variant="gradient"
  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
  size="xl"
  weight={700}
  style={{ fontFamily: 'Greycliff CF, sans-serif' }}
>
  Indigo cyan gradient
</Text>
`;

function Demo() {
  return (
    <Group position="center">
      <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size="xl"
        weight={700}
        style={{ fontFamily: 'Greycliff CF, sans-serif' }}
      >
        Indigo cyan gradient
      </Text>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
