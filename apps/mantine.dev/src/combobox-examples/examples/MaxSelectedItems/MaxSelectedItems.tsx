import { useState } from 'react';
import { CheckIcon, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

const ITEMS_LIMIT = 2;

export function MaxSelectedItems() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
    onDropdownOpen: () => store.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries.map((item) => (
    <Combobox.Option
      value={item}
      key={item}
      active={value.includes(item)}
      disabled={value.length >= ITEMS_LIMIT && !value.includes(item)}
    >
      <Group gap="sm">
        {value.includes(item) ? <CheckIcon size={12} /> : null}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox store={store} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput pointer onClick={() => store.toggleDropdown()}>
          <Pill.Group>
            {values.length > 0 ? (
              values
            ) : (
              <Input.Placeholder>Pick one or more values</Input.Placeholder>
            )}

            <Combobox.EventsTarget>
              <PillsInput.Field
                type="hidden"
                aria-label="Pick one or more values"
                onBlur={() => store.closeDropdown()}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && value.length > 0) {
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
          You can select up to {ITEMS_LIMIT} items, currently selected: {value.length}
        </Combobox.Header>
        <Combobox.Options aria-multiselectable>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
