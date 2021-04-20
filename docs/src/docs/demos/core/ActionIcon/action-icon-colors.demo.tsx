import React from 'react';
import { ActionIcon, ElementsGroup } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/theme';
import { ImageIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getColors = (props: any) =>
  Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <ActionIcon color={color} {...props}>
        <ImageIcon />
      </ActionIcon>
    ));

export function ActionIconColorsDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">{getColors({ variant: 'hover' })}</ElementsGroup>
      <ElementsGroup position="center">{getColors({ variant: 'filled' })}</ElementsGroup>
    </CodeDemo>
  );
}
