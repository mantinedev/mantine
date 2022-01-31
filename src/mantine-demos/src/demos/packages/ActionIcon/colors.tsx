import React from 'react';
import { ImageIcon } from '@modulz/radix-icons';
import { Group, MANTINE_COLORS, ActionIcon, ActionIconProps } from '@mantine/core';

const getColors = (props: Omit<ActionIconProps<'button'>, 'children'>) =>
  MANTINE_COLORS.slice(1).map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <ImageIcon style={{ width: 16, height: 16 }} />
    </ActionIcon>
  ));

function Demo() {
  return (
    <>
      <Group position="center">{getColors({ variant: 'hover' })}</Group>
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
