import React from 'react';
import { ActionIcon, Group, DEFAULT_THEME } from '@mantine/core';
import { ImageIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getColors = (props: any) =>
  Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <ActionIcon key={color} color={color} {...props}>
        <ImageIcon style={{ width: 16, height: 16 }} />
      </ActionIcon>
    ));

export function ActionIconColorsDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getColors({ variant: 'hover' })}</Group>
      <Group position="center">{getColors({ variant: 'light' })}</Group>
      <Group position="center">{getColors({ variant: 'filled' })}</Group>
      <Group position="center">{getColors({ variant: 'outline' })}</Group>
    </CodeDemo>
  );
}
