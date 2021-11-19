import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Wrapper } from './_wrapper';

const code = `
import { Scrollbars } from 'react-custom-scrollbars';
import { TransferList } from '@mantine/core';

function Demo() {
  return (
    <TransferList
      {/* ...other props */}
      listHeight={100}
      listComponent={(props) => (
        <Scrollbars style={{ height: 100 }}>
          <div {...props} />
        </Scrollbars>
      )}
    />
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      listHeight={100}
      breakpoint="sm"
      listComponent={(props) => (
        <Scrollbars style={{ height: 100 }}>
          <div {...props} />
        </Scrollbars>
      )}
    />
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
