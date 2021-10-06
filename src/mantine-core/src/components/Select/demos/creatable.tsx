import React from 'react';
import { Select } from '../Select';

const code = `
  <Select
    label="Creatable Select"
    data={creatableData}
    placeholder="Select items"
    nothingFound="Nothing found"
    searchable
    creatable
  />;
`;

const stringData = ['React', 'Angular', 'Svelte', 'Vue'];

export function Demo() {
  return (
    <Select
      label="Creatable Select"
      data={stringData}
      placeholder="Select items"
      nothingFound="Nothing found"
      searchable
      creatable
      getCreateLabel={(query) => `+ Create ${query}`}
    />
  );
}

export const creatable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
