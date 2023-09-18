import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Menu } from '@mantine/core';
import { MenuStylesApi } from '@mantine/styles-api';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo(props: any) {
  return (
    <Menu {...props} opened withArrow position="left">
      <DemoMenuItems />
    </Menu>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: MenuStylesApi,
  component: Demo,
  code,
  centered: true,
};
