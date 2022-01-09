import React from 'react';
import { AspectRation } from '../AspectRation';
import { Image } from '../../Image/Image';

const code = `
<AspectRation maxWidth="200" ratio={1}>
  <Image src="https://mantine.dev/favicon.svg?v=c7bf473b30e5d81722ea0acf3a11a107" />
</AspectRation>
`;

function Demo() {
  return (
    <AspectRation maxWidth={200} ratio={1}>
      <Image src="https://mantine.dev/favicon.svg?v=c7bf473b30e5d81722ea0acf3a11a107" />
    </AspectRation>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
