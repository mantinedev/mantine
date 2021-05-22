import React from 'react';
import { ThemeIcon, Group, useMantineTheme } from '@mantine/core';
import { MixIcon, RocketIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

export function ThemeIconBaseDemo() {
  const theme = useMantineTheme();
  const colors = Object.keys(theme.colors).filter((color) => color !== 'dark');

  const filledIcons = colors.map((color) => (
    <ThemeIcon color={color} key={color}>
      <MixIcon />
    </ThemeIcon>
  ));

  const lightIcon = colors.map((color) => (
    <ThemeIcon color={color} key={color} variant="light">
      <RocketIcon />
    </ThemeIcon>
  ));

  return (
    <CodeDemo>
      <Group position="center">{lightIcon}</Group>
      <Group position="center">{filledIcons}</Group>
    </CodeDemo>
  );
}
