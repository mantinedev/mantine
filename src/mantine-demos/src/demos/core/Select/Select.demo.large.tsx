import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <Select
      label="What item is the best?"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      maxDropdownHeight={280}
      data={data}
    />
  );
}
`;

function Demo() {
  const data = Array(50)
    .fill(0)
    .map((_, index) => `Item ${index}`);

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="What item is the best?"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        maxDropdownHeight={280}
        data={data}
      />
    </div>
  );
}

export const large: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
