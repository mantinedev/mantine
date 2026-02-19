import { SlidersHorizontalIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { interactiveVariantsControl } from '../../../shared';

const code = `
import { ActionIcon } from '@mantine/core';
import { SlidersHorizontalIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <SlidersHorizontalIcon style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ActionIcon {...props} aria-label="Settings">
      <SlidersHorizontalIcon style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    interactiveVariantsControl,
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
  ],
};
