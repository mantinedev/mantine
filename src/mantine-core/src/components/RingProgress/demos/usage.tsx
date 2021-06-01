import React from 'react';
import { RingProgress } from '../RingProgress';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';

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
