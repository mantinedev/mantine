import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { WithinOverlays } from '@mantine/storybook';
import { TextInput } from '../TextInput';
import { Container } from '../Container';
import { Divider } from '../Divider';
import { Menu } from './Menu';

const menuItems = [<Menu.Item>first</Menu.Item>, <Menu.Item icon="$">second</Menu.Item>];

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
  .map((_, i) => (
    <p key={i}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nam praesentium? Est
      voluptates dolore eius iusto, accusamus ipsa quam eligendi excepturi sint praesentium officia,
      magni recusandae nisi deserunt maiores repudiandae.
    </p>
  ));

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

function ItemsAsFragments() {
  return (
    <Menu>
      <>
        <Menu.Item>Fragment 1</Menu.Item>
        <Menu.Item>Fragment 2</Menu.Item>
      </>
      <Menu.Item>Regular 1</Menu.Item>
      <Menu.Item>Regular 2</Menu.Item>
      <>
        <Menu.Item>Fragment 3</Menu.Item>
        <Menu.Item>Fragment 4</Menu.Item>
      </>
    </Menu>
  );
}

const variableItems = (
  <>
    <Menu.Item>Variable 1</Menu.Item>
    <Menu.Item>Variable 2</Menu.Item>
  </>
);

function ItemsAsVariables() {
  return (
    <Menu>
      {variableItems}
      <Menu.Item>Regular 1</Menu.Item>
      <Menu.Item>Regular 2</Menu.Item>
    </Menu>
  );
}

function WrapperItem({ index }: { index: number }) {
  return <Menu.Item>Wrapped Item {index}</Menu.Item>;
}

function WrappedItems() {
  return (
    <Menu>
      <WrapperItem index={1} />
      <WrapperItem index={2} />
      <Menu.Item>Regular 1</Menu.Item>
      <Menu.Item>Regular 2</Menu.Item>
    </Menu>
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
  .add('Items in fragments', () => (
    <div style={{ padding: 40 }}>
      <ItemsAsFragments />
    </div>
  ))
  .add('Items in a variable', () => (
    <div style={{ padding: 40 }}>
      <ItemsAsVariables />
    </div>
  ))
  .add('Wrapped items', () => (
    <div style={{ padding: 40 }}>
      <WrappedItems />
    </div>
  ));
