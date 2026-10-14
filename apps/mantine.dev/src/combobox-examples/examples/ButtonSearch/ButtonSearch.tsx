import { useState } from 'react';
import { Box, Button, Combobox, Text, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];

export function ButtonSearch() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const store = useCombobox({
    onDropdownClose: () => {
      store.resetSelectedOption();
      setSearch('');
    },

    onDropdownOpen: () => {
      store.focusSearchInput();
    },
  });

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <div
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          store.closeDropdown();
        }
      }}
    >
      <Combobox
        store={store}
        width={250}
        position="bottom-start"
        withArrow
        withinPortal={false}
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          store.closeDropdown();
          store.focusTarget();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button onClick={() => store.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                store.focusTarget();
              }
            }}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      <Box mt="xs">
        <Text span size="sm">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>
    </div>
  );
}
