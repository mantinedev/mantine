import { useState } from 'react';
import { Combobox, Group, Input, InputBase, Text, useCombobox } from '@mantine/core';

interface Item {
  emoji: string;
  value: string;
  description: string;
}

const groceries: Item[] = [
  { emoji: '🍎', value: 'Apples', description: 'Crisp and refreshing fruit' },
  { emoji: '🍌', value: 'Bananas', description: 'Naturally sweet and potassium-rich fruit' },
  { emoji: '🥦', value: 'Broccoli', description: 'Nutrient-packed green vegetable' },
  { emoji: '🥕', value: 'Carrots', description: 'Crunchy and vitamin-rich root vegetable' },
  { emoji: '🍫', value: 'Chocolate', description: 'Indulgent and decadent treat' },
];

function SelectOption({ emoji, value, description }: Item) {
  return (
    <Group>
      <Text fz={20}>{emoji}</Text>
      <div>
        <Text fz="sm" fw={500}>
          {value}
        </Text>
        <Text fz="xs" opacity={0.6}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function SelectOptionComponent() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const selectedOption = groceries.find((item) => item.value === value);

  const options = groceries.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <SelectOption {...item} />
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
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          multiline
        >
          {selectedOption ? (
            <SelectOption {...selectedOption} />
          ) : (
            <Input.Placeholder>Pick value</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
