import { useRef, useState } from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import { Combobox, Input, InputBase, useVirtualizedCombobox } from '@mantine/core';

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: `value-${index}`,
    label: `Label ${index}`,
    id: `item-${index}`,
    disabled: false,
  }));

export function VirtualizedOptions() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const virtuoso = useRef<VirtuosoHandle>(null);
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const store = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        setSelectedOptionIndex(activeOptionIndex);
        requestAnimationFrame(() => {
          virtuoso.current?.scrollToIndex({ index: activeOptionIndex });
        });
      }
    },
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtuoso.current?.scrollIntoView({ index });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const option = largeData[index];
    setValue(option.value);
    setActiveOptionIndex(index);
    store.closeDropdown();
    store.resetSelectedOption();
  }

  return (
    <Combobox store={store} resetSelectionOnOptionHover={false} keepMounted>
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          aria-label="Pick a value"
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => store.toggleDropdown()}
          onBlur={() => store.closeDropdown()}
        >
          {value || <Input.Placeholder>Pick a value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.ScrollArea
          mah={220}
          viewportProps={{ tabIndex: -1 }}
          viewportRef={setScrollParent}
          onMouseDown={(event) => event.preventDefault()}
        >
          <Combobox.Options>
            <Virtuoso
              data={largeData}
              ref={virtuoso}
              style={{ height: 420 }}
              customScrollParent={scrollParent ?? undefined}
              itemContent={(index, item) => (
                <Combobox.Option
                  value={item.value}
                  key={item.value}
                  id={item.id}
                  active={index === activeOptionIndex}
                  selected={index === selectedOptionIndex}
                  onClick={() => onOptionSubmit(index)}
                >
                  {item.label}
                </Combobox.Option>
              )}
            />
          </Combobox.Options>
        </Combobox.ScrollArea>
      </Combobox.Dropdown>
    </Combobox>
  );
}
