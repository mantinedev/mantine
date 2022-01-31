import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
<MultiSelect
  data={data}
  label="Your favorite frameworks/libraries"
  placeholder="Pick all that you like"
  defaultValue={['react', 'next']}
  clearButtonLabel="Clear selection"
  clearable
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        defaultValue={['react', 'next']}
        clearButtonLabel="Clear selection"
        clearable
      />
    </div>
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
