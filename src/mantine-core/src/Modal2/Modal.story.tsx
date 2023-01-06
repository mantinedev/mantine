import React from 'react';
import { Modal } from './Modal';

export default { title: 'Modal' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal">
        Modal with some content
      </Modal>
    </div>
  );
}
