import React from 'react';
import { avatars } from '@mantine/mockdata';
import { Avatar, AvatarProps } from '../Avatar';
import { Group } from '../../Group/Group';

function Wrapper(props: AvatarProps<'div'>) {
  return (
    <Group position="center">
      <Avatar {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Avatar${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'src',
      type: 'string',
      initialValue: avatars[1],
    },
  ],
};
