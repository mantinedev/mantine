import React from 'react';
import { Modal } from './Modal';

export default { title: 'Modal' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" size="md">
        Modal with some content
      </Modal>
    </div>
  );
}
