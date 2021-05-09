import React from 'react';
import { Menu, MenuItem, Group } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function MenuWrapper(props: React.ComponentPropsWithoutRef<typeof Menu>) {
  return (
    <Group position="center" style={{ height: 200 }}>
      <Menu {...props}>
        <MenuItem>Discard changes</MenuItem>
        <MenuItem>Save draft</MenuItem>
        <MenuItem color="red">Delete</MenuItem>
      </Menu>
    </Group>
  );
}

const codeTemplate = (props: string) => `<Menu${props}>
  <MenuItem>Discard changes</MenuItem>
  <MenuItem>Save draft</MenuItem>
  <MenuItem color="red">Delete</MenuItem>
</Menu>`;

export function MenuConfigurator() {
  return (
    <Configurator
      component={MenuWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'shadow', type: 'size', initialValue: 'md', defaultValue: 'md' },
      ]}
    />
  );
}
