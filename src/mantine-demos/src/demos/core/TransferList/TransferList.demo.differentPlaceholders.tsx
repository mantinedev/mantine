import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Wrapper } from './_wrapper';

const code = `
function Demo() {
  return (
    <TransferList
      searchPlaceholder={['Search item to add...', 'Search item to remove...']}
      nothingFound={['Cannot find item to add', 'Cannot find item to remove']}
      placeholder={['No item left to add', 'No item left to remove']}
      {/* ...other props */}
    />
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder={['Search item to add...', 'Search item to remove...']}
      nothingFound={['Cannot find item to add', 'Cannot find item to remove']}
      placeholder={['No item left to add', 'No item left to remove']}
      titles={['Frameworks', 'Libraries']}
      breakpoint="sm"
    />
  );
}

export const differentPlaceholders: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
