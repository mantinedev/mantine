import React, { useCallback } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Autocomplete, AutocompleteItem } from '@mantine/core';

const code = `
import React, { useCallback } from 'react';
import { Autocomplete, AutocompleteItem } from '@mantine/core';

function Demo() {
  const logItem = useCallback((item: AutocompleteItem) => console.log('value:', item.value), []);
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one or create new"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      onItemSubmit={logItem}
      onNewItem={logItem}
    />
  );
}
`;

function Demo() {
  const logItem = useCallback((item: AutocompleteItem) => console.log('value', item.value), []);
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one or create new"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        onItemSubmit={logItem}
        onNewItem={logItem}
      />
    </div>
  );
}

export const newItem: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
