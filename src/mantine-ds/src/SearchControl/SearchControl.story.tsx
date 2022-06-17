import { noop } from '@mantine/utils';
import React from 'react';
import { SearchControl } from './SearchControl';

export default { title: 'DS/SearchControl' };

export function Usage() {
  return (
    <div style={{ width: 320, padding: 40 }}>
      <SearchControl onClick={noop} />
    </div>
  );
}
