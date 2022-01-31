import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
