import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Combobox, Input, InputBase, ScrollArea, useVirtualizedCombobox } from '@mantine/core';

const ITEM_HEIGHT = 36;

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: `value-${index}`,
    label: `Label ${index}`,
    id: `item-${index}`,
    disabled: false,
  }));

export function VirtualizedTanstack() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: largeData.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  const store = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        setSelectedOptionIndex(activeOptionIndex);
        requestAnimationFrame(() => {
          virtualizer.scrollToIndex(activeOptionIndex, { align: 'auto' });
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
        virtualizer.scrollToIndex(index, { align: 'auto' });
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
        <ScrollArea.Autosize
          mah={220}
          type="scroll"
          viewportProps={{ tabIndex: -1 }}
          scrollbarSize={4}
          viewportRef={setScrollParent}
          onMouseDown={(event) => event.preventDefault()}
        >
          <Combobox.Options>
            <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
              {virtualizer.getVirtualItems().map((virtualItem) => {
                const item = largeData[virtualItem.index];
                return (
                  <Combobox.Option
                    value={item.value}
                    key={item.value}
                    id={item.id}
                    active={virtualItem.index === activeOptionIndex}
                    selected={virtualItem.index === selectedOptionIndex}
                    onClick={() => onOptionSubmit(virtualItem.index)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: virtualItem.size,
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                  >
                    {item.label}
                  </Combobox.Option>
                );
              })}
            </div>
          </Combobox.Options>
        </ScrollArea.Autosize>
      </Combobox.Dropdown>
    </Combobox>
  );
}
