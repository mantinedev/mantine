import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { AspectRatio, Image, rem } from '@mantine/core';

const code = `
import { AspectRatio, Image, rem } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: \`0 0 \${rem(100)}\` }}>
        <Image src="image.png" alt="From unsplash" />
      </AspectRatio>
    </div>
  );
}
`;

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: `0 0 ${rem(100)}` }}>
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          alt="From unsplash"
        />
      </AspectRatio>
    </div>
  );
}

export const flex: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
