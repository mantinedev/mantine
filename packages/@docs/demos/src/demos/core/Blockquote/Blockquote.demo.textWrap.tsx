import { InfoIcon } from '@phosphor-icons/react';
import { Blockquote } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Blockquote } from '@mantine/core';
import { InfoIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <InfoIcon />;
  return (
    <Blockquote icon={icon} cite="– Forrest Gump"{{props}}>
      Life is like a box of chocolates. You never know what you are gonna get. But whatever you
      get, you should make the most of it and enjoy every moment.
    </Blockquote>
  );
}
`;

function Wrapper(props: any) {
  const icon = <InfoIcon />;
  return (
    <Blockquote icon={icon} cite="– Forrest Gump" {...props}>
      Life is like a box of chocolates. You never know what you are gonna get. But whatever you get,
      you should make the most of it and enjoy every moment.
    </Blockquote>
  );
}

export const textWrap: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'segmented',
      prop: 'textWrap',
      initialValue: 'wrap',
      libraryValue: '__',
      data: [
        { value: 'wrap', label: 'wrap' },
        { value: 'balance', label: 'balance' },
      ],
    },
  ],
};
