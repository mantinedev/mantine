import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { ThemeIcon } from '../../ThemeIcon/ThemeIcon';
import { RingProgress } from '../RingProgress';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';
import { Center } from '../../Center/Center';

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
    <Center>
      <ThemeIcon color="teal" variant="light" radius="xl size="xl">
        <CheckIcon style={{ height: 22, width: 22 }} />
      </ThemeIcon>
    </Center>
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
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <CheckIcon style={{ height: 22, width: 22 }} />
            </ThemeIcon>
          </Center>
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
