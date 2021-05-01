import React from 'react';
import { ActionIcon, ElementsGroup, DEFAULT_THEME } from '@mantine/core';
import { ImageIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getColors = (props: any) =>
  Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <ActionIcon key={color} color={color} {...props}>
        <ImageIcon />
      </ActionIcon>
    ));

export function ActionIconColorsDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">{getColors({ variant: 'hover' })}</ElementsGroup>
      <ElementsGroup position="center">{getColors({ variant: 'light' })}</ElementsGroup>
      <ElementsGroup position="center">{getColors({ variant: 'filled' })}</ElementsGroup>
      <ElementsGroup position="center">{getColors({ variant: 'outline' })}</ElementsGroup>
    </CodeDemo>
  );
}
