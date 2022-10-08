import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RingProgress, Group, Text } from '@mantine/core';

const code = `
import { RingProgress, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        size={170}
        thickness={16}
        label={
          <Text size="xs" align="center" px="xs" sx={{ pointerEvents: 'none' }}>
            Hover sections to see tooltips
          </Text>
        }
        sections={[
          { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
          { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
          { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
        ]}
      />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        size={170}
        thickness={16}
        label={
          <Text size="xs" align="center" px="xs" sx={{ pointerEvents: 'none' }}>
            Hover sections to see tooltips
          </Text>
        }
        sections={[
          { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
          { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
          { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
        ]}
      />
    </Group>
  );
}

export const tooltip: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
