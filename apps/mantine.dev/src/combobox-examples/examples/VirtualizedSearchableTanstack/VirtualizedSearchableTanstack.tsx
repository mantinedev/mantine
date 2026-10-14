import { useEffect, useMemo, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Combobox, ScrollArea, TextInput, useVirtualizedCombobox } from '@mantine/core';

const ITEM_HEIGHT = 36;

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: `value-${index}`,
    label: `Label ${index}`,
    id: `item-${index}`,
    disabled: false,
  }));

export function VirtualizedSearchableTanstack() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const filteredData = useMemo(
    () =>
      search.trim() === ''
        ? largeData
        : largeData.filter((item) => item.label.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const virtualizer = useVirtualizer({
    count: filteredData.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  const store = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      setSelectedOptionIndex(0);
    },
    isOptionDisabled: (index) => filteredData[index].disabled,
    totalOptionsCount: filteredData.length,
    getOptionId: (index) => filteredData[index]?.id ?? null,
    selectedOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  useEffect(() => {
    if (opened) {
      store.selectFirstOption();
    }
  }, [filteredData]);

  function onOptionSubmit(index: number) {
    const option = filteredData[index];
    setValue(option.label);
    setSearch(option.label);
    store.closeDropdown();
    store.resetSelectedOption();
  }

  return (
    <Combobox store={store} resetSelectionOnOptionHover={false}>
      <Combobox.Target>
        <TextInput
          placeholder="Search options"
          aria-label="Search options"
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
            store.openDropdown();
          }}
          onFocus={() => store.openDropdown()}
          onBlur={() => {
            store.closeDropdown();
            setSearch(value);
          }}
          onClick={() => store.openDropdown()}
        />
      </Combobox.Target>
      <Combobox.Dropdown hidden={filteredData.length === 0}>
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
                const item = filteredData[virtualItem.index];
                return (
                  <Combobox.Option
                    value={item.value}
                    key={item.value}
                    id={item.id}
                    active={item.label === value}
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
