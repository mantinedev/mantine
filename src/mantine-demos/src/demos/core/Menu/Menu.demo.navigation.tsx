import React from 'react';
import { Menu, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Menu trigger="both" loop={false} withinPortal={false} trapFocus={false} menuItemTabIndex={0}>
        {/* ... menu items */}
      </Menu>
      <Menu trigger="both" loop={false} withinPortal={false} trapFocus={false} menuItemTabIndex={0}>
        {/* ... menu items */}
      </Menu>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Menu trigger="both" loop={false} withinPortal={false} trapFocus={false} menuItemTabIndex={0}>
        <DemoMenuItems />
      </Menu>
      <Menu trigger="both" loop={false} withinPortal={false} trapFocus={false} menuItemTabIndex={0}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const navigation: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
