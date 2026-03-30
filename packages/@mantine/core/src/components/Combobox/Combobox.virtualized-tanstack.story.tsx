import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ScrollArea } from '../ScrollArea';
import { TextInput } from '../TextInput';
import { Combobox } from './Combobox';
import { useVirtualizedCombobox } from './use-combobox/use-virtualized-combobox';

export default { title: 'Combobox' };

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: `value-${index}`,
    label: `Label ${index}`,
    id: `item-${index}`,
    disabled: false,
  }));

const ITEM_HEIGHT = 36;

export function VirtualizedTanstack() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const activeIndex = largeData.findIndex((item) => item.value === value);

  const virtualizer = useVirtualizer({
    count: largeData.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  const store = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    activeOptionIndex: activeIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onDropdownOpen: () => {
      if (activeIndex !== -1) {
        setSelectedOptionIndex(activeIndex);
        requestAnimationFrame(() => {
          virtualizer.scrollToIndex(activeIndex, { align: 'auto' });
        });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const option = largeData[index];
    setValue(option.value);
    store.closeDropdown();
    store.resetSelectedOption();
  }

  return (
    <div style={{ padding: 40 }}>
      <Combobox store={store} withinPortal={false} resetSelectionOnOptionHover={false}>
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              store.openDropdown();
            }}
            onClick={() => store.openDropdown()}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options>
            <ScrollArea.Autosize
              mah={300}
              type="scroll"
              scrollbarSize={4}
              viewportRef={setScrollParent}
              onMouseDown={(event) => event.preventDefault()}
            >
              <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
                {virtualizer.getVirtualItems().map((virtualItem) => {
                  const item = largeData[virtualItem.index];
                  return (
                    <Combobox.Option
                      value={item.value}
                      key={item.value}
                      active={virtualItem.index === activeIndex}
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
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
