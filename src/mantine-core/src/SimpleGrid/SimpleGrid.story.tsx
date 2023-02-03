import React from 'react';
import { SimpleGrid } from './SimpleGrid';

export default { title: 'SimpleGrid' };

export function ZeroSpacing() {
  return (
    <div style={{ padding: 40 }}>
      <SimpleGrid
        cols={2}
        spacing={100}
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 0, verticalSpacing: 0 },
          { maxWidth: 'xs', cols: 1, spacing: 0, verticalSpacing: 0 },
        ]}
      >
        <div style={{ border: '1px solid' }}>1</div>
        <div style={{ border: '1px solid' }}>2</div>
      </SimpleGrid>
    </div>
  );
}
