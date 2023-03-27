import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '../Button';
import { Modal } from './Modal';

export default { title: 'Modal' };

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';
const content = Array(20)
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
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Modal opened={opened} onClose={close} title="Just a Modal" size="md" zIndex={73812}>
        <input data-autofocus />
      </Modal>
    </div>
  );
}

export function CustomTransition() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Just a Modal"
        size="md"
        transitionProps={{ transition: 'fade', duration: 200 }}
        overlayProps={{ blur: 10 }}
      >
        Modal with some content
      </Modal>
    </div>
  );
}

export function Centered() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" centered>
        Centered modal
      </Modal>
    </div>
  );
}

export function FullScreen() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" fullScreen>
        Fullscreen modal
      </Modal>
    </div>
  );
}

export function WithScroll() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" size="md">
        {content}
      </Modal>
    </div>
  );
}

export function NativeScrollArea() {
  return (
    <div style={{ padding: 40 }}>
      <Modal
        opened
        onClose={() => {}}
        title="Just a Modal"
        size="md"
        scrollAreaComponent={Modal.NativeScrollArea}
      >
        {content}
      </Modal>
    </div>
  );
}
