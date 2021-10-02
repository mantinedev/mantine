import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { menuItems } from './demos/_menu-items';
import { Menu } from './Menu';
import { DarkStory } from '../../../demos';

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
  .add('Controlled', () => (
    <div style={{ padding: 60 }}>
      <Controlled />
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 60 }}>
        <Menu>{menuItems}</Menu>
      </div>
    </DarkStory>
  ));
