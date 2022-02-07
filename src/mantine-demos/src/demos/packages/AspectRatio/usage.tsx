import React from 'react';
import { AspectRatio, Image } from '@mantine/core';

const code = `
<AspectRatio maxWidth="200" ratio={1}>
  <Image src="https://mantine.dev/favicon.svg?v=c7bf473b30e5d81722ea0acf3a11a107" />
</AspectRatio>
`;

function Demo() {
  return (
    <AspectRatio maxWidth={200} ratio={1}>
      <Image src="https://mantine.dev/favicon.svg?v=c7bf473b30e5d81722ea0acf3a11a107" />
    </AspectRatio>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
