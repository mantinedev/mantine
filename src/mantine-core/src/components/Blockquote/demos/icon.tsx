import React from 'react';
import { LightningBoltIcon } from '@modulz/radix-icons';
import { Blockquote } from '../Blockquote';

const code = `
<Blockquote
  cite="– Your poor i3 from 2012 struggling its best"
  icon={<LightningBoltIcon style={{ width: 18, height: 18 }} />}
>
  webpack built caa9bf3d1a0a0914ed84 in 28259ms
</Blockquote>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <Blockquote
        cite="– Your poor i3 from 2012 struggling its best"
        icon={<LightningBoltIcon style={{ width: 18, height: 18 }} />}
      >
        webpack built 40a9bf3d1a0a0914ed84 in 28259ms
      </Blockquote>
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
