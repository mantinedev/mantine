import React, { useState } from 'react';
import { Select } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Select } from '@mantine/core';

export function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

  return (
    <Select
      label="Creatable Select"
      data={data}
      placeholder="Select items"
      nothingFound="Nothing found"
      searchable
      creatable
      getCreateLabel={(query) => \`+ Create \${query}\`}
      onCreate={(query) => setData((current) => [...current, query])}
    />
  );
}
`;

export function Demo() {
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Creatable Select"
        data={data}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => {
          const item = { value: query, label: query };
          setData((current) => [...current, item]);
          return item;
        }}
      />
    </div>
  );
}

export const creatable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
