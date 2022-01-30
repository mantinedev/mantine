import React from 'react';
import { RocketIcon } from '@modulz/radix-icons';
import { ThemeIcon, Group } from '@mantine/core';

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
};

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <ThemeIcon key={size} size={size} radius="xl" {...props}>
      <RocketIcon style={{ width: iconSizes[size], height: iconSizes[size] }} />
    </ThemeIcon>
  ));

function Demo() {
  return <Group position="center">{getSizes({ color: 'blue' })}</Group>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
