import React from 'react';
import { storiesOf } from '@storybook/react';
import { SimpleGrid } from './SimpleGrid';

storiesOf('@mantine/core/SimpleGrid', module)
  .add('General usage', () => (
    <>
      <div style={{ backgroundColor: 'gray' }}>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: 980, cols: 2 },
            { maxWidth: 680, cols: 1, spacing: 'xs' },
          ]}
        >
          <div style={{ backgroundColor: 'red' }}>first</div>
          <div style={{ backgroundColor: 'red' }}>second</div>
          <div style={{ backgroundColor: 'red' }}>third</div>
        </SimpleGrid>
      </div>
    </>
  ))
  .add('With min-width', () => (
    <>
      <div style={{ backgroundColor: 'gray' }}>
        <SimpleGrid
          cols={1}
          breakpoints={[
            { minWidth: 680, cols: 2, spacing: 'xs' },
            { minWidth: 980, cols: 3 },
          ]}
        >
          <div style={{ backgroundColor: 'red' }}>first</div>
          <div style={{ backgroundColor: 'red' }}>second</div>
          <div style={{ backgroundColor: 'red' }}>third</div>
        </SimpleGrid>
      </div>
    </>
  ));
