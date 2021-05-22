import React from 'react';
import { Avatar, Group } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function AvatarWrapper(props: React.ComponentPropsWithoutRef<typeof Avatar>) {
  return (
    <Group position="center">
      <Avatar {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Avatar${props} />`;

export function AvatarConfigurator() {
  return (
    <Configurator
      component={AvatarWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        {
          name: 'src',
          type: 'string',
          initialValue:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
        },
      ]}
    />
  );
}
