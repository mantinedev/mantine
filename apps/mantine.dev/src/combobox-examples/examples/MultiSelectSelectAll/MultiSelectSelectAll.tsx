import { useRef, useState } from 'react';
import { Checkbox, Combobox, Group, Pill, PillsInput, Text, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
];

export function MultiSelectSelectAll() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
    onDropdownOpen: () => store.updateSelectedOptionIndex('active'),
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const filteredOptions = groceries.filter((item) =>
    item.toLowerCase().includes(search.trim().toLowerCase())
  );

  const selectedCount = filteredOptions.filter((item) => value.includes(item)).length;
  const allSelected = filteredOptions.length > 0 && selectedCount === filteredOptions.length;
  const someSelected = selectedCount > 0 && !allSelected;

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const handleSelectAll = () =>
    setValue((current) =>
      allSelected
        ? current.filter((item) => !filteredOptions.includes(item))
        : [...current, ...filteredOptions.filter((item) => !current.includes(item))]
    );

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)}>
      <Group gap="sm">
        <Checkbox
          checked={value.includes(item)}
          onChange={() => {}}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <div
      ref={rootRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          store.closeDropdown();
        }
      }}
    >
      <Combobox store={store} onOptionSubmit={handleValueSelect} withinPortal={false}>
        <Combobox.DropdownTarget>
          <PillsInput onClick={() => store.openDropdown()}>
            <Pill.Group>
              {values}

              <Combobox.EventsTarget>
                <PillsInput.Field
                  onFocus={(event) => {
                    if (!rootRef.current?.contains(event.relatedTarget)) {
                      store.openDropdown();
                    }
                  }}
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
          <Combobox.Header>
            <Group justify="space-between" px="var(--combobox-padding)">
              <Checkbox
                label={allSelected ? 'Deselect all' : 'Select all'}
                checked={allSelected}
                indeterminate={someSelected}
                disabled={filteredOptions.length === 0}
                onChange={handleSelectAll}
                onClick={(event) => {
                  if (event.detail > 0) {
                    store.focusTarget();
                  }
                }}
              />
              <Text fz="xs">
                {selectedCount} of {filteredOptions.length} selected
              </Text>
            </Group>
          </Combobox.Header>

          <Combobox.Options aria-multiselectable>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
