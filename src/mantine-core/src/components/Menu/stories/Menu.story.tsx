import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { paragraph } from '@mantine/mockdata';
import { WithinOverlays, RtlProvider } from '@mantine/ds/src';
import { menuItems } from '../demos/_menu-items';
import { TextInput } from '../../TextInput';
import { Container } from '../../Container';
import { Divider } from '../../Divider';
import { Menu } from '../Menu';

function Controlled() {
  const [opened, setOpened] = useState(false);
  return (
    <Menu opened={opened} onOpen={() => setOpened(true)} onClose={() => setOpened(false)}>
      {menuItems}
    </Menu>
  );
}

const content = Array(10)
  .fill(0)
  .map((_, i) => <p key={i}>{paragraph}</p>);

function WithScroll() {
  return (
    <Container size="sm">
      <Controlled />
      {content}
      <Controlled />
      {content}
      <Controlled />
      {content}
      <Controlled />
    </Container>
  );
}

storiesOf('@mantine/core/Menu/stories', module)
  .add('Focus behavior', () => (
    <div style={{ padding: 40 }}>
      <TextInput placeholder="Focus me when menu is opened" mb="xl" />
      <Controlled />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 40 }}>
      <Controlled />
    </div>
  ))
  .add('Within scroll container', () => <WithScroll />)
  .add('Within overlays', () => (
    <WithinOverlays>
      <Menu withinPortal={false}>{menuItems}</Menu>
    </WithinOverlays>
  ))
  .add('Disabled items', () => (
    <Menu>
      <Menu.Item disabled>Zero Item</Menu.Item>
      <Menu.Label>Items</Menu.Label>
      <Menu.Item>First Item</Menu.Item>
      <Menu.Item disabled>Second Item</Menu.Item>
      <Menu.Label>Items 2</Menu.Label>
      <Menu.Item disabled>Third Item</Menu.Item>
      <Menu.Item>Forth Item</Menu.Item>
      <Divider />
      <Menu.Item>Last Item</Menu.Item>
    </Menu>
  ))
  .add('RTL', () => (
    <RtlProvider>
      <Menu>{menuItems}</Menu>
    </RtlProvider>
  ));
