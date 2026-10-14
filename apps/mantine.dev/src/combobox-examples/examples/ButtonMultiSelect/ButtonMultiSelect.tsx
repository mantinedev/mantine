import { useState } from 'react';
import { Box, Button, CheckIcon, Combobox, Group, Text, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];

export function ButtonMultiSelect() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item} active={selectedItems.includes(item)}>
      <Group>
        {selectedItems.includes(item) && <CheckIcon size={12} />}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm">
          Selected items:{' '}
        </Text>

        <Text span size="sm">
          {selectedItems.length > 0 ? selectedItems.join(', ') : 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={store}
        width={250}
        position="bottom-start"
        withArrow
        withinPortal={false}
        onOptionSubmit={(val) => {
          setSelectedItems((current) =>
            current.includes(val) ? current.filter((item) => item !== val) : [...current, val]
          );
        }}
      >
        <Combobox.Target targetType="button">
          <Button
            aria-label="Pick item"
            onClick={() => store.toggleDropdown()}
            onBlur={() => store.closeDropdown()}
          >
            Pick item
          </Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options aria-multiselectable>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
