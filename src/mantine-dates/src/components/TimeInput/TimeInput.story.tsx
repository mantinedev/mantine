import React from 'react';
import { TimeInput } from './TimeInput';

export default { title: 'TimeInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TimeInput />
    </div>
  );
}

export function WithSeconds() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TimeInput withSeconds />
    </div>
  );
}
