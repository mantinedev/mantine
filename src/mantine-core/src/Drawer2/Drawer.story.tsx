import React from 'react';
import { Drawer } from './Drawer';

export default { title: 'Drawer' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Drawer opened onClose={() => {}} title="A drawer" />
    </div>
  );
}
