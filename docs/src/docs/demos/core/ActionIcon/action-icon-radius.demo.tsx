import React from 'react';
import { useMantineTheme, ActionIcon, ElementsGroup } from '@mantine/core';
import { ImageIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <ActionIcon key={size} size="xl" variant="outline" radius={size} {...props}>
      <ImageIcon style={{ width: 28, height: 28 }} />
    </ActionIcon>
  ));

export function ActionIconRadiusDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo>
      <ElementsGroup position="center">
        {getSizes({ color: theme.colorScheme === 'dark' ? 'yellow' : 'blue' })}
      </ElementsGroup>
    </CodeDemo>
  );
}
