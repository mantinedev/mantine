import React, { useState } from 'react';
import { PillsInput, Pill, Input, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';
import { countriesData, flags } from './countries-data';
import { CountryPill } from './CountryPill';

export function MultiSelectValueRenderer() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <CountryPill key={item} value={item} onRemove={() => handleValueRemove(item)}>
      {item}
    </CountryPill>
  ));

  const options = countriesData.map((item) => {
    const OptionFlag = flags[item.value];
    return (
      <Combobox.Option value={item.value} key={item.value} active={value.includes(item.value)}>
        <Group gap="sm">
          {value.includes(item.value) ? <CheckIcon size={12} /> : null}
          <Group gap={7}>
            <OptionFlag />
            <span>{item.label}</span>
          </Group>
        </Group>
      </Combobox.Option>
    );
  });

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
          <Pill.Group>
            {values.length > 0 ? (
              values
            ) : (
              <Input.Placeholder>Pick one or more values</Input.Placeholder>
            )}

            <Combobox.EventsTarget>
              <PillsInput.Field
                type="hidden"
                onBlur={() => combobox.closeDropdown()}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace') {
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
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
