import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { defaultItems } from './_Item';

const code = `
<SimpleGrid
  cols={4}
  spacing="lg"
  breakpoints={[
    { maxWidth: 980, cols: 3, spacing: 'md' },
    { maxWidth: 755, cols: 2, spacing: 'sm' },
    { maxWidth: 600, cols: 1, spacing: 'sm' },
  ]}
>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</SimpleGrid>
`;

function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      id="grid-breakpoints"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      {defaultItems}
    </SimpleGrid>
  );
}

export const breakpoints: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
