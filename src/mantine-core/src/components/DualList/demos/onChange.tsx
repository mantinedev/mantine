import React from 'react';
import { DualList, DualListData } from '../DualList';

const code = `
import React from 'react';
import { DualList, DualListData } from '@mantine/core';

function Demo() {
  const handleChange = (data: DualListData) => {
    // console.log(data.available);
  };

  return (
    <DualList
      available={['Item 1', 'Item 2', 'Item 3']}
      selected={['Item 01', 'Item 02', 'Item 03']}
      onChange={handleChange}
    />
  );
}
`;

function Demo() {
  const handleChange = (data: DualListData) => {
    // console.log(data.available);
  };

  return (
    <DualList
      available={['Item 1', 'Item 2', 'Item 3']}
      selected={['Item 01', 'Item 02', 'Item 03']}
      onChange={handleChange}
    />
  );
}

export const onChange: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
