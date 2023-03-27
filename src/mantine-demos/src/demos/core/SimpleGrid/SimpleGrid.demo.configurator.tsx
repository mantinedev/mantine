import React from 'react';
import { SimpleGrid, SimpleGridProps } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { defaultItems } from './_Item';

function Wrapper(props: SimpleGridProps) {
  return (
    <SimpleGrid {...props} id="grid-configurator">
      {defaultItems}
    </SimpleGrid>
  );
}

const codeTemplate = (props: string) => `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid${props}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'cols', type: 'number', initialValue: 3, min: 1, max: 6, step: 1 },
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'verticalSpacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
  ],
};
