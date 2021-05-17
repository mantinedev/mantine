import React from 'react';
import { ActionIcon, Group } from '@mantine/core';
import { ImageIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <ActionIcon key={size} size="xl" variant="outline" radius={size} {...props}>
      <ImageIcon style={{ width: 28, height: 28 }} />
    </ActionIcon>
  ));

export function ActionIconRadiusDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getSizes({ color: 'blue' })}</Group>
    </CodeDemo>
  );
}
