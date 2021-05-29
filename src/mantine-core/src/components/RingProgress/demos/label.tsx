import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { RingProgress } from '../RingProgress';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';
import { ThemeIcon } from '../../ThemeIcon/ThemeIcon';

const code = `
<RingProgress
  sections={[{ value: 40, color: 'blue' }]}
  label={
    <Text color="blue" weight={700} align="center" size="xl">
      40%
    </Text>
  }
/>

<RingProgress
  sections={[{ value: 100, color: 'teal' }]}
  label={
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ThemeIcon color="teal" variant="light" radius="xl size="xl">
        <CheckIcon style={{ height: 22, width: 22 }} />
      </ThemeIcon>
    </div>
  }
/>
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <CheckIcon style={{ height: 22, width: 22 }} />
            </ThemeIcon>
          </div>
        }
      />
    </Group>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
