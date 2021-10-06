import React from 'react';
import { MultiSelect } from '../MultiSelect';

const code = `
  <MultiSelect
    label="Creatalbe Multiselect"
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
    <MultiSelect
      label="Creatalbe Multiselect"
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
