import { Avatar } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { staticVariantsControl } from '../../../shared';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Avatar,
  centered: true,
  code,
  controls: [
    staticVariantsControl,
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: '100%' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'color', type: 'color', initialValue: 'gray', libraryValue: 'gray' },
    {
      prop: 'src',
      type: 'string',
      initialValue: '',
      libraryValue: null,
    },
  ],
};
