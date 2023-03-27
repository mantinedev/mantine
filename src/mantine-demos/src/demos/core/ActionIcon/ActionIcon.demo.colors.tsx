import React from 'react';
import { IconSun } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Group, MANTINE_COLORS, ActionIcon, ActionIconProps, rem } from '@mantine/core';

const getColors = (props: Omit<ActionIconProps, 'children'>) =>
  MANTINE_COLORS.slice(1).map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <IconSun size={rem(18)} />
    </ActionIcon>
  ));

function Demo() {
  return (
    <>
      <Group position="center">{getColors({ variant: 'subtle' })}</Group>
      <Group position="center" mt="md">
        {getColors({ variant: 'outline' })}
      </Group>
      <Group position="center" mt="md">
        {getColors({ variant: 'light' })}
      </Group>
      <Group position="center" mt="md">
        {getColors({ variant: 'filled' })}
      </Group>
    </>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
