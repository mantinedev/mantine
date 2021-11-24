import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { menuItems } from './demos/_menu-items';
import { TextInput } from '../TextInput';
import { Menu } from './Menu';

function Controlled() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu opened={opened} onOpen={() => setOpened(true)} onClose={() => setOpened(false)}>
      {menuItems}
    </Menu>
  );
}

storiesOf('@mantine/core/Menu', module)
  .add('General Usage', () => (
    <div style={{ padding: 60 }}>
      <Menu position="right" withArrow closeOnItemClick>
        {menuItems}
      </Menu>
    </div>
  ))
  .add('Focus behavior', () => (
    <div style={{ padding: 60 }}>
      <TextInput placeholder="Focus me when menu is opened" mb="xl" />
      <Controlled />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 60 }}>
      <Controlled />
    </div>
  ))
  .add('Without Portal', () => (
    <div style={{ padding: 60 }}>
      <Menu position="right" withArrow closeOnItemClick withinPortal={false}>
        {menuItems}
      </Menu>
    </div>
  ));
