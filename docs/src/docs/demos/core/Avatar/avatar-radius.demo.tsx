import React from 'react';
import { Avatar, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Avatar, ElementsGroup } from '@mantine/core';
import image from './image.png';

function Demo() {
  const images = [0, 'xs', 'sm', 'md', 'lg', 'xl'].map((radius) => (
    <Avatar key={radius} radius={radius} src={image} alt="Unsplash image" />
  ));

  return (
    <ElementsGroup position="center">
      {images}
    </ElementsGroup>
  );
}`;

const image =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

export function AvatarRadiusDemo() {
  const images = ([0, 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => (
    <Avatar key={radius} radius={radius} src={image} alt="Unsplash image" />
  ));

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">{images}</ElementsGroup>
    </CodeDemo>
  );
}
