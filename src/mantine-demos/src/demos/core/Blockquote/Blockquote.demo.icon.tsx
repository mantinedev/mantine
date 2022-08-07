import React from 'react';
import { IconFlame } from '@tabler/icons';
import { Blockquote } from '@mantine/core';

const code = `
import { Blockquote } from '@mantine/core';
import { IconFlame } from '@tabler/icons';

function Demo() {
  return (
    <Blockquote
      cite="– Your poor i3 from 2012 struggling its best"
      icon={<IconFlame size={24} />}
    >
      webpack built caa9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <Blockquote
        cite="– Your poor i3 from 2012 struggling its best"
        icon={<IconFlame size={24} />}
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
