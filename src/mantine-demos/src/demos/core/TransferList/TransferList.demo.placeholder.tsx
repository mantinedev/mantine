import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Wrapper } from './_wrapper';

const code = `
function Demo() {
  return (
    <TransferList
      nothingFound="Nothing found"
      placeholder="No item left"
      {/* ...other props */}
    />
  );
}
`;

function Demo() {
  return (
    <Wrapper
      nothingFound="Nothing found"
      placeholder="No item left"
      titles={['Frameworks', 'Libraries']}
      breakpoint="sm"
    />
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
