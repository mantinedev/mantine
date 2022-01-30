import React from 'react';
import { RocketIcon } from '@modulz/radix-icons';
import { ThemeIcon, Group } from '@mantine/core';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <ThemeIcon key={size} size="xl" radius={size} {...props}>
      <RocketIcon style={{ width: 24, height: 24 }} />
    </ThemeIcon>
  ));

function Demo() {
  return <Group position="center">{getSizes({ color: 'blue' })}</Group>;
}

export const radius: MantineDemo = {
  type: 'demo',
  component: Demo,
};
