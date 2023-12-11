import React from 'react';
import { Group, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Group, Menu } from '@mantine/core';

function Demo() {
  return (
    <Group>
      {Array(4).fill(0).map((e, i) => (
        <Menu
          key={i}
          trigger="click-hover"
          loop={false}
          withinPortal={false}
          trapFocus={false}
          menuItemTabIndex={0}
        >
          <DemoMenuItems />
        </Menu>
      ))}
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      {Array(4).fill(0).map((e, i) => (
        <Menu
          key={i}
          trigger="click-hover"
          loop={false}
          withinPortal={false}
          trapFocus={false}
          menuItemTabIndex={0}
        >
          <DemoMenuItems />
        </Menu>
      ))}
    </Group>
  );
}

export const navigation: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
