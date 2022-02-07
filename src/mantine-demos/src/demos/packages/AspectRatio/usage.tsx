import React from 'react';
import { AspectRatio } from '@mantine/core';

const code = `
<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    alt="Nature"
  />
</AspectRatio>
`;

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <img
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Nature"
      />
    </AspectRatio>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
