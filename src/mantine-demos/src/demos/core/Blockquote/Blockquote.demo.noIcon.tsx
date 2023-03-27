import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Blockquote } from '@mantine/core';

const code = `
import { Blockquote } from '@mantine/core';

function Demo() {
  return (
    <Blockquote cite="– Your poor i3 from 2012 struggling its best" icon={null}>
      webpack built 40a9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  )
}
`;

function Demo() {
  return (
    <Blockquote maw={420} mx="auto" cite="– Your poor i3 from 2012 struggling its best" icon={null}>
      webpack built 40a9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}

export const noIcon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
