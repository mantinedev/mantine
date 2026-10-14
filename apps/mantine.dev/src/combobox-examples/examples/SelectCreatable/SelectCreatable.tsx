import { useState } from 'react';
import { Combobox, InputBase, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];

export function SelectCreatable() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const [data, setData] = useState(groceries);
  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const trimmedSearch = search.trim();
  const searchIsOptionLabel = data.some((item) => item === search);
  const canCreate =
    trimmedSearch.length > 0 &&
    !data.some((item) => item.toLowerCase() === trimmedSearch.toLowerCase());
  const filteredOptions = searchIsOptionLabel
    ? data
    : data.filter((item) => item.toLowerCase().includes(trimmedSearch.toLowerCase()));

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={store}
      withinPortal={false}
      onOptionSubmit={(val) => {
        if (val === '$create') {
          setData((current) => [...current, trimmedSearch]);
          setValue(trimmedSearch);
          setSearch(trimmedSearch);
        } else {
          setValue(val);
          setSearch(val);
        }

        store.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            store.openDropdown();
            store.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => store.openDropdown()}
          onFocus={() => store.openDropdown()}
          onBlur={() => {
            store.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          aria-label="Search value"
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options}
          {canCreate && <Combobox.Option value="$create">+ Create {trimmedSearch}</Combobox.Option>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
