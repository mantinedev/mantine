import { useState } from 'react';
import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];

export function SelectDropdownSearch() {
  const [search, setSearch] = useState('');
  const store = useCombobox({
    onDropdownClose: () => {
      store.resetSelectedOption();
      setSearch('');
    },

    onDropdownOpen: () => {
      store.focusSearchInput();
    },
  });

  const [value, setValue] = useState<string | null>(null);

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
        withinPortal={false}
        onOptionSubmit={(val) => {
          setValue(val);
          store.closeDropdown();
          store.focusTarget();
        }}
      >
        <Combobox.Target targetType="button" withAriaAttributes={false}>
          <InputBase
            component="button"
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => store.toggleDropdown()}
            rightSectionPointerEvents="none"
          >
            {value || <Input.Placeholder>Pick value</Input.Placeholder>}
          </InputBase>
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
    </div>
  );
}
