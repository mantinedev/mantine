import { useState } from 'react';
import { Anchor, Combobox, ScrollArea, Text, TextInput, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
];

export function DropdownFooter() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
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
        onOptionSubmit={(optionValue) => {
          setValue(optionValue);
          store.closeDropdown();
        }}
        store={store}
        withinPortal={false}
      >
        <Combobox.Target>
          <TextInput
            label="Pick value or type anything"
            placeholder="Pick value or type anything"
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              store.openDropdown();
              store.updateSelectedOptionIndex();
            }}
            onClick={() => store.openDropdown()}
            onFocus={() => store.openDropdown()}
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <ScrollArea.Autosize mah={200} type="scroll" viewportProps={{ tabIndex: -1 }}>
            <Combobox.Options>
              {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
            </Combobox.Options>
          </ScrollArea.Autosize>
          <Combobox.Footer>
            <Text fz="xs">
              Search powered by{' '}
              <Anchor fz="xs" href="https://mantine.dev" target="_blank" rel="noopener noreferrer">
                Mantine
              </Anchor>
            </Text>
          </Combobox.Footer>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
