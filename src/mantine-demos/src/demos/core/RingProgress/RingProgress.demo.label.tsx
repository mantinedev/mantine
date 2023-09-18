import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon, RingProgress, Group, Text, Center, rem } from '@mantine/core';

const code = `
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          </Center>
        }
      />
    </Group>
  );
}

export const label: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
