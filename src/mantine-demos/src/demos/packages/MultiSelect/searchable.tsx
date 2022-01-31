import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
<MultiSelect
  data={data}
  label="Your favorite frameworks/libraries"
  placeholder="Pick all that you like"
  searchable
  nothingFound="Nothing found"
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        searchable
        nothingFound="Nothing found"
      />
    </div>
  );
}

export const searchable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
