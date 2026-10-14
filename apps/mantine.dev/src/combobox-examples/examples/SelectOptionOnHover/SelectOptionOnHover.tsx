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

export function SelectOptionOnHover() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item, index) => (
    <Combobox.Option value={item} key={item} onMouseOver={() => store.selectOption(index)}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={store}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        store.closeDropdown();
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          aria-label="Pick value"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => store.toggleDropdown()}
          onBlur={() => store.closeDropdown()}
          rightSectionPointerEvents="none"
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown onMouseLeave={() => store.resetSelectedOption()}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
