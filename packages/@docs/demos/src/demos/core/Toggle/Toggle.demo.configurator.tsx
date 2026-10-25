import { TextBIcon } from '@phosphor-icons/react';
import { Toggle } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextBIcon } from '@phosphor-icons/react';
import { Toggle } from '@mantine/core';

function Demo() {
  return (
    <Toggle{{props}} aria-label="Bold">
      <TextBIcon weight="bold" size="100%" />
    </Toggle>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Toggle {...props} aria-label="Bold">
      <TextBIcon weight="bold" size="100%" />
    </Toggle>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'variant',
      type: 'segmented',
      data: ['filled', 'light'],
      initialValue: 'filled',
      libraryValue: 'filled',
    },
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: null },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'autoContrast', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
