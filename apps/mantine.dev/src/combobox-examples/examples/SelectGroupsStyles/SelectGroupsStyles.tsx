import { useState } from 'react';
import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import classes from './SelectGroupsStyles.module.css';

export function SelectGroupsStyles() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  return (
    <Combobox
      classNames={classes}
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

      <Combobox.Dropdown>
        <Combobox.Options>
          <Combobox.Group label="Fruits">
            <Combobox.Option value="🍎 Apples">🍎 Apples</Combobox.Option>
            <Combobox.Option value="🍌 Bananas">🍌 Bananas</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Vegetables">
            <Combobox.Option value="🥦 Broccoli">🥦 Broccoli</Combobox.Option>
            <Combobox.Option value="🥕 Carrots">🥕 Carrots</Combobox.Option>
          </Combobox.Group>

          <Combobox.Option value="🥩 Steak">🥩 Steak</Combobox.Option>
          <Combobox.Option value="🍗 Chicken">🍗 Chicken</Combobox.Option>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
