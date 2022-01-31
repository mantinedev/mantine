import React from 'react';
import { MixIcon, RocketIcon } from '@modulz/radix-icons';
import { MANTINE_COLORS, Group, ThemeIcon, ThemeIconProps } from '@mantine/core';

const getThemes = (props?: ThemeIconProps) =>
  MANTINE_COLORS.map((color) => <ThemeIcon key={color} color={color} {...props} />);

function Demo() {
  return (
    <>
      <Group position="center">{getThemes({ children: <MixIcon />, variant: 'light' })}</Group>
      <Group position="center" mt="md">
        {getThemes({ children: <RocketIcon />, variant: 'filled' })}
      </Group>
    </>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
