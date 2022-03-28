import React from 'react';
import { Photo } from 'tabler-icons-react';
import { MANTINE_COLORS, Group, ThemeIcon, ThemeIconProps } from '@mantine/core';

const getThemes = (props?: ThemeIconProps) =>
  MANTINE_COLORS.map((color) => <ThemeIcon key={color} color={color} {...props} />);

function Demo() {
  return (
    <>
      <Group position="center">
        {getThemes({ children: <Photo size={16} />, variant: 'outline' })}
      </Group>

      <Group position="center" mt="md">
        {getThemes({ children: <Photo size={16} />, variant: 'light' })}
      </Group>

      <Group position="center" mt="md">
        {getThemes({ children: <Photo size={16} />, variant: 'filled' })}
      </Group>
    </>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
