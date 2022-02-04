import React from 'react';
import { Avatar, AvatarProps, Group } from '@mantine/core';
import { avatars } from './_mockdata';

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
