import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider } from '@mantine/styles';
import { Button } from '../Button';
import { Drawer } from './Drawer';

export default { title: 'Drawer' };

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';
const content = Array(40)
  .fill(0)
  .map((_, index) => (
    <p key={index} style={{ margin: 0 }}>
      {lorem}
    </p>
  ));

export function Usage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open drawer</Button>
      {content}
      <Button onClick={open}>Open drawer</Button>
      <Drawer opened={opened} onClose={close} title="A drawer" position="right">
        Content
      </Drawer>
    </div>
  );
}

export function Scroll() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open drawer</Button>
      {content}
      <Button onClick={open}>Open drawer</Button>
      <Drawer opened={opened} onClose={close} title="A drawer" position="right">
        {content}
      </Drawer>
    </div>
  );
}

export function StylesApiOnMantineProvider() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Drawer: {
            styles: {
              header: { background: 'red' },
              content: { background: 'blue' },
            },
          },
        },
      }}
    >
      <div style={{ padding: 40 }}>
        <Button onClick={open}>Open drawer</Button>
        {content}
        <Button onClick={open}>Open drawer</Button>
        <Drawer opened={opened} onClose={close} title="A drawer" position="right">
          Content
        </Drawer>
      </div>
    </MantineProvider>
  );
}
