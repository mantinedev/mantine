import { useRef, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
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

export function Virtualized() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [value, setValue] = useState('');
  const virtuoso = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const store = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtuoso.current.scrollToIndex({ index, align: 'end' });
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
              viewportRef={viewportRef}
              onMouseDown={(event) => event.preventDefault()}
            >
              <Virtuoso
                data={largeData}
                ref={virtuoso}
                style={{ height: 400 }}
                customScrollParent={viewportRef.current!}
                itemContent={(index, item) => (
                  <Combobox.Option
                    value={item.value}
                    key={item.value}
                    selected={index === selectedOptionIndex}
                    onClick={() => onOptionSubmit(index)}
                  >
                    {item.label}
                  </Combobox.Option>
                )}
              />
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
