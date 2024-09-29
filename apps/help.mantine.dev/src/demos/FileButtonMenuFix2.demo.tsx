/* eslint-disable no-console */
import React from 'react';
import { Button, FileButton, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, FileButton, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => (
            <Menu.Item {...props} closeMenuOnClick={false}>
              Upload Image
            </Menu.Item>
          )}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => (
            <Menu.Item {...props} closeMenuOnClick={false}>
              Upload Image
            </Menu.Item>
          )}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}

export const FileButtonMenuFix2: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
