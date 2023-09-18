import React, { useState } from 'react';
import { Combobox, InputBase, Input, useCombobox } from '@mantine/core';
import classes from './SelectedStyles.module.css';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];

export function SelectedStyles() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item, index) => (
    <Combobox.Option
      value={item}
      key={item}
      className={classes.option}
      onMouseOver={() => combobox.selectOption(index)}
    >
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown onMouseLeave={() => combobox.resetSelectedOption()}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
