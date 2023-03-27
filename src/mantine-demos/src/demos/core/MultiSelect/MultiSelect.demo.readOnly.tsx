import React from 'react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
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
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Read only multiselect"
      placeholder="Pick all that you like"
      defaultValue={['react', 'ng']}
      readOnly
    />
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
