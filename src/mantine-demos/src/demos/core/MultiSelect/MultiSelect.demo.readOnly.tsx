import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';

const data = [
  //...
];

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Read only multiselect"
      placeholder="Pick all that you like"
      defaultValue={['react', 'ng']}
      readOnly
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Read only multiselect"
        placeholder="Pick all that you like"
        defaultValue={['react', 'ng']}
        readOnly
      />
    </div>
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
