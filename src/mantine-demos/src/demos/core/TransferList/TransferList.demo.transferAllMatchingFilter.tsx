import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Wrapper } from './_wrapper';

const code = `
<TransferList transferAllMatchingFilter />
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      breakpoint="sm"
      transferAllMatchingFilter
    />
  );
}

export const transferAllMatchingFilter: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
