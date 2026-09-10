import { InfoIcon } from '@phosphor-icons/react';
import { Blockquote } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Blockquote } from '@mantine/core';
import { InfoIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <InfoIcon />;
  return (
    <Blockquote{{props}} cite="– Forrest Gump" icon={icon}>
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}
`;

function Wrapper(props: any) {
  const icon = <InfoIcon />;
  return (
    <Blockquote cite="– Forrest Gump" icon={icon} {...props}>
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: [
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    {
      type: 'number',
      prop: 'iconSize',
      initialValue: 24,
      min: 16,
      max: 48,
      step: 1,
      libraryValue: 24,
    },
  ],
};
