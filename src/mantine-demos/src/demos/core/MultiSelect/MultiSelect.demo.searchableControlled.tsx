import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      searchable
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      nothingFound="Nothing found"
    />
  );
}
`;

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      searchable
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      nothingFound="Nothing found"
    />
  );
}

export const searchableControlled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
