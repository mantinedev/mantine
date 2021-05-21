import React from 'react';
import { ThemeIcon, Group, useMantineTheme } from '@mantine/core';
import { RocketIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

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

export function ThemeIconSizesDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo>
      <Group position="center">
        {getSizes({ color: theme.colorScheme === 'dark' ? 'yellow' : 'blue' })}
      </Group>
    </CodeDemo>
  );
}
