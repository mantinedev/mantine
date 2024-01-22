import React from 'react';
import { AspectRatio, Image, rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { AspectRatio, Image, rem } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: \`0 0 \${rem(100)}\` }}>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
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
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
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
