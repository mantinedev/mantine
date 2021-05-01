import React from 'react';
import { ThemeIcon, ElementsGroup, useMantineTheme } from '@mantine/core';
import { RocketIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <ThemeIcon key={size} size="xl" radius={size} {...props}>
      <RocketIcon style={{ width: 24, height: 24 }} />
    </ThemeIcon>
  ));

export function ThemeIconRadiusDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo>
      <ElementsGroup position="center">
        {getSizes({ color: theme.colorScheme === 'dark' ? 'yellow' : 'blue' })}
      </ElementsGroup>
    </CodeDemo>
  );
}
