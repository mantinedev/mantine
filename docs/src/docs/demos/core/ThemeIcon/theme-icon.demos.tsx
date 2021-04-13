import React from 'react';
import { ThemeIcon, ElementsGroup } from '@mantine/core';
import { MixIcon, RocketIcon } from '@modulz/radix-icons';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { ThemeIcon } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import { MixIcon, RocketIcon } from '@modulz/radix-icons';

export function ThemeIconDemo() {
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
      <ElementsGroup position="center">{lightIcon}</ElementsGroup>
      <ElementsGroup position="center">{filledIcons}</ElementsGroup>
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
      <ElementsGroup position="center">{lightIcon}</ElementsGroup>
      <ElementsGroup position="center">{filledIcons}</ElementsGroup>
    </CodeDemo>
  );
}
