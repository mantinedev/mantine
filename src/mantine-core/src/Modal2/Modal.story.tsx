import React from 'react';
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
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" size="md">
        Modal with some content
      </Modal>
    </div>
  );
}

export function WithScroll() {
  return (
    <div style={{ padding: 40 }}>
      <Modal
        opened
        onClose={() => {}}
        title="Just a Modal"
        size="md"
        // scrollAreaComponent={Modal.NativeScrollArea}
      >
        {content}
      </Modal>
    </div>
  );
}
