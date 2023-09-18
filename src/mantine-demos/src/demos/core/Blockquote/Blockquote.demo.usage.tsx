import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

const code = `
import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote{{props}} cite="– Forrest Gump" icon={icon} mt="xl">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}
`;

function Wrapper(props: any) {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote cite="– Forrest Gump" icon={icon} mt="xl" {...props}>
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 380,
  controls: [
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
    {
      type: 'number',
      prop: 'iconSize',
      initialValue: 48,
      min: 30,
      max: 60,
      step: 1,
      libraryValue: 48,
    },
  ],
};
