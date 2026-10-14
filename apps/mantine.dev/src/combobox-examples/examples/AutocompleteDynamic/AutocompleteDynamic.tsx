import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

export function AutocompleteDynamic() {
  const store = useCombobox();
  const [value, setValue] = useState('');

  const showOptions = value.trim().length > 0 && !value.includes('@');

  const options = showOptions
    ? ['gmail.com', 'outlook.com', 'mantine.dev'].map((item) => (
        <Combobox.Option value={`${value}@${item}`} key={item}>
          {`${value}@${item}`}
        </Combobox.Option>
      ))
    : null;

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        store.closeDropdown();
      }}
      store={store}
      withinPortal={false}
    >
      <Combobox.Target>
        <TextInput
          label="Your email"
          placeholder="Your email"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            store.openDropdown();
            store.updateSelectedOptionIndex();
          }}
          onClick={() => store.openDropdown()}
          onFocus={() => store.openDropdown()}
          onBlur={() => store.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={!showOptions}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
