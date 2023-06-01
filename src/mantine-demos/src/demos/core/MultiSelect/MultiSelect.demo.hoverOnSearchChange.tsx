import React from 'react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        searchable
        hoverOnSearchChange
      />
      <MultiSelect
        data={[]}
        creatable
        searchable
        hoverOnSearchChange
        label="[creatable]Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        getCreateLabel={(query) => \`+ Create \${query}\`}
      />
    </>
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
        searchable
        hoverOnSearchChange
      />
      <MultiSelect
        data={[]}
        creatable
        searchable
        hoverOnSearchChange
        label="[creatable]Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        getCreateLabel={(query) => `Add: ${query}`}
      />
    </div>
  );
}

export const hoverOnSearchChange: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
