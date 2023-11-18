import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Overlay, AspectRatio } from '@mantine/core';

const code = `
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35}{{props}} />
    </AspectRatio>
  );
}
`;

function Wrapper(props: any) {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35} {...props} />
    </AspectRatio>
  );
}

export const blur: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { type: 'number', prop: 'blur', initialValue: 15, libraryValue: null, min: 0, max: 30 },
  ],
};
