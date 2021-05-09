import React from 'react';
import { Button, Group, DEFAULT_THEME } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <Button key={color} color={color} {...props}>
        {color}
      </Button>
    ));

export function ButtonFilledVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes()}</Group>
    </CodeDemo>
  );
}

export function ButtonOutlineVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes({ variant: 'outline' })}</Group>
    </CodeDemo>
  );
}

export function ButtonLinkVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes({ variant: 'link' })}</Group>
    </CodeDemo>
  );
}
export function ButtonLightVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes({ variant: 'light' })}</Group>
    </CodeDemo>
  );
}
