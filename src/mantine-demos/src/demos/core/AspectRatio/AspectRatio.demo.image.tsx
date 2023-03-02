import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { AspectRatio, Image } from '@mantine/core';

const code = `
import { AspectRatio, Image } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={720 / 1080} maw={300} mx="auto">
      <Image
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>
  );
}
`;

function Demo() {
  return (
    <AspectRatio ratio={720 / 1080} maw={300} mx="auto">
      <Image
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>
  );
}

export const image: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
