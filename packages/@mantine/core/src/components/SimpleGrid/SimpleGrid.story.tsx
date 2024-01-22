import React from 'react';
import { Button } from '../Button';
import { SimpleGrid } from './SimpleGrid';

export default { title: 'SimpleGrid' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <SimpleGrid cols={{ sm: 2, md: 5 }} spacing={{ sm: 100 }} verticalSpacing={{ sm: 10 }}>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Button key={index}>{index}</Button>
          ))}
      </SimpleGrid>
    </div>
  );
}
