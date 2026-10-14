import { useState } from 'react';
import {
  Combobox,
  Input,
  InputBase,
  Kbd,
  SegmentedControl,
  Text,
  useCombobox,
  VisuallyHidden,
} from '@mantine/core';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'fruits', label: 'Fruits' },
  { value: 'vegetables', label: 'Vegetables' },
  { value: 'dairy', label: 'Dairy' },
];

const groceries = [
  { value: '🍎 Apples', category: 'fruits' },
  { value: '🍌 Bananas', category: 'fruits' },
  { value: '🍇 Grapes', category: 'fruits' },
  { value: '🍋 Lemon', category: 'fruits' },
  { value: '🥦 Broccoli', category: 'vegetables' },
  { value: '🥕 Carrots', category: 'vegetables' },
  { value: '🥬 Lettuce', category: 'vegetables' },
  { value: '🥛 Milk', category: 'dairy' },
  { value: '🧀 Cheese', category: 'dairy' },
  { value: '🍦 Ice Cream', category: 'dairy' },
];

export function SelectCategoryFilter() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [category, setCategory] = useState('all');

  const filteredOptions =
    category === 'all' ? groceries : groceries.filter((item) => item.category === category);

  const categoryLabel = categories.find((item) => item.value === category)!.label;

  const changeCategory = (next: string) => {
    setCategory(next);
    store.updateSelectedOptionIndex();
  };

  const cycleCategory = (direction: 1 | -1) => {
    const index = categories.findIndex((item) => item.value === category);
    const nextIndex = (index + direction + categories.length) % categories.length;
    changeCategory(categories[nextIndex].value);
  };

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      {item.value}
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
        store={store}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setValue(val);
          store.closeDropdown();
          store.focusTarget();
        }}
      >
        <Combobox.Target targetType="button">
          <InputBase
            component="button"
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => store.toggleDropdown()}
            aria-label="Pick value"
            onKeyDown={(event) => {
              if (!store.isDropdownOpened()) {
                return;
              }

              if (event.key === 'ArrowRight') {
                event.preventDefault();
                cycleCategory(1);
              }

              if (event.key === 'ArrowLeft') {
                event.preventDefault();
                cycleCategory(-1);
              }
            }}
          >
            {value || <Input.Placeholder>Pick value</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Header>
            <SegmentedControl
              size="xs"
              fullWidth
              data={categories}
              value={category}
              onChange={changeCategory}
              onClick={(event) => {
                if (event.detail > 0) {
                  store.focusTarget();
                }
              }}
            />
          </Combobox.Header>

          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>

          <Combobox.Footer>
            <Text fz="xs">
              Press <Kbd size="xs">←</Kbd> / <Kbd size="xs">→</Kbd> to switch category
            </Text>
          </Combobox.Footer>
        </Combobox.Dropdown>
      </Combobox>

      <VisuallyHidden aria-live="polite">
        {categoryLabel}: {filteredOptions.length} options
      </VisuallyHidden>
    </div>
  );
}
