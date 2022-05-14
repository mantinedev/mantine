import React from 'react';
import { Chip } from './Chip';

export default { title: 'Chip' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="radio">Single</Chip>
      <Chip disabled mt="xl">
        Disabled
      </Chip>
      <Chip disabled checked mt="xl">
        Disabled checked
      </Chip>
      <Chip type="checkbox" mt="xl">
        Multiple
      </Chip>
    </div>
  );
}
