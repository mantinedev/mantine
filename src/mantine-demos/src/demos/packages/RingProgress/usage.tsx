import React from 'react';
import { RingProgress, Group, Text } from '@mantine/core';

const code = `
<RingProgress
  label={<Text size="xs" align="center">Application data usage</Text>}
  sections={[
    { value: 40, color: 'cyan' },
    { value: 15, color: 'orange' },
    { value: 15, color: 'grape' },
  ]}
/>
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        label={
          <Text size="xs" align="center">
            Application data usage
          </Text>
        }
        sections={[
          { value: 40, color: 'cyan' },
          { value: 15, color: 'orange' },
          { value: 15, color: 'grape' },
        ]}
      />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
