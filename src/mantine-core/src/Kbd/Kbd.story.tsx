import { MANTINE_SIZES } from '@mantine/styles';
import React from 'react';
import { Kbd } from './Kbd';

export default { title: 'Kbd' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Kbd>Shift</Kbd>
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => <Kbd size={size}>size-{size}</Kbd>);
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
