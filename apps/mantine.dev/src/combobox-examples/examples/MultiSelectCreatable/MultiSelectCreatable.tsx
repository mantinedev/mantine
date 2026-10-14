import { useState } from 'react';
import { CheckIcon, Combobox, Group, Pill, PillsInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

export function MultiSelectCreatable() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
    onDropdownOpen: () => store.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState(groceries);
  const [value, setValue] = useState<string[]>([]);

  const trimmedSearch = search.trim();
  const canCreate =
    trimmedSearch.length > 0 &&
    !data.some((item) => item.toLowerCase() === trimmedSearch.toLowerCase());

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, trimmedSearch]);
      setValue((current) => [...current, trimmedSearch]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.toLowerCase().includes(trimmedSearch.toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={store} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => store.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => store.openDropdown()}
                onBlur={() => store.closeDropdown()}
                value={search}
                placeholder="Search values"
                aria-label="Search values"
                onChange={(event) => {
                  store.openDropdown();
                  store.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0 && value.length > 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options aria-multiselectable>
          {options}

          {canCreate && <Combobox.Option value="$create">+ Create {trimmedSearch}</Combobox.Option>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
