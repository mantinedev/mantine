import React from 'react';
import { MixIcon, RocketIcon } from '@modulz/radix-icons';
import { MANTINE_COLORS } from '@mantine/theme';
import { Group } from '../../Group/Group';
import { ThemeIcon, ThemeIconProps } from '../ThemeIcon';

const getThemes = (props?: ThemeIconProps) =>
  MANTINE_COLORS.map((color) => <ThemeIcon key={color} color={color} {...props} />);

function Demo() {
  return (
    <>
      <Group position="center">{getThemes({ children: <MixIcon />, variant: 'light' })}</Group>
      <Group position="center">{getThemes({ children: <RocketIcon />, variant: 'filled' })}</Group>
    </>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
