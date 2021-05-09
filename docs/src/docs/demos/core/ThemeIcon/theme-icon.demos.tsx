import React from 'react';
import { ThemeIcon, Group, useMantineTheme } from '@mantine/core';
import { MixIcon, RocketIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Group, ThemeIcon, useMantineTheme } from '@mantine/core';
import { MixIcon, RocketIcon } from '@modulz/radix-icons';

function Demo() {
  const theme = useMantineTheme();

  const filledIcons = Object.keys(theme.colors).map((color) => (
    <ThemeIcon color={color} key={color}>
      <MixIcon />
    </ThemeIcon>
  ));

  const lightIcon = Object.keys(theme.colors).map((color) => (
    <ThemeIcon color={color} key={color} variant="light">
      <RocketIcon />
    </ThemeIcon>
  ));

  return (
    <>
      <Group position="center">{lightIcon}</Group>
      <Group position="center">{filledIcons}</Group>
    </>
  );
}`;

export function ThemeIconBaseDemo() {
  const theme = useMantineTheme();

  const filledIcons = Object.keys(theme.colors).map((color) => (
    <ThemeIcon color={color} key={color}>
      <MixIcon />
    </ThemeIcon>
  ));

  const lightIcon = Object.keys(theme.colors).map((color) => (
    <ThemeIcon color={color} key={color} variant="light">
      <RocketIcon />
    </ThemeIcon>
  ));

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">{lightIcon}</Group>
      <Group position="center">{filledIcons}</Group>
    </CodeDemo>
  );
}
