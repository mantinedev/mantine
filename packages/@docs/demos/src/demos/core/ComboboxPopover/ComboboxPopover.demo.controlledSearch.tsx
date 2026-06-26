import { useState } from 'react';
import { Button, ComboboxPopover, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, ComboboxPopover, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        searchable
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <Text mt="md" size="sm">
        Search value: <b>{searchValue || '(empty)'}</b>
      </Text>
      <Text size="sm">
        Selected value: <b>{value || '(none)'}</b>
      </Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        searchable
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>
            {value || 'Select framework'}
          </Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <Text mt="md" size="sm">
        Search value: <b>{searchValue || '(empty)'}</b>
      </Text>
      <Text size="sm">
        Selected value: <b>{value || '(none)'}</b>
      </Text>
    </>
  );
}

export const controlledSearch: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
