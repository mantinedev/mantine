import { useRef, useState } from 'react';
import { ListRange, Virtuoso } from 'react-virtuoso';
import { Combobox, Input, InputBase, ScrollArea, useVirtualizedCombobox } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef, useState } from 'react';
import { ListRange, Virtuoso } from 'react-virtuoso';
import { Combobox, Input, InputBase, ScrollArea, useVirtualizedCombobox } from '@mantine/core';

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: \`value-\${index}\`,
    label: \`Label \${index}\`,
    id: \`item-\${index}\`,
    disabled: false,
  }));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const virtuoso = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const visibleRangeRef = useRef<ListRange>({
    startIndex: 0,
    endIndex: 0,
  });

  const scrollOptionIntoView = (index: number) => {
    setTimeout(() => {
      const isVisible =
        index >= visibleRangeRef.current.startIndex && index <= visibleRangeRef.current.endIndex;
      if (index !== -1 && !isVisible) {
        virtuoso.current.scrollToIndex({ index, align: 'end' });
      }
    }, 4);
  };

  const combobox = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        combobox.selectActiveOption();
        scrollOptionIntoView(activeOptionIndex);
      }
    },
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      scrollOptionIntoView(index);
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const option = largeData[index];
    setValue(option.value);
    setActiveOptionIndex(index);
    combobox.closeDropdown();
    combobox.resetSelectedOption();
  }

  return (
    <Combobox
      store={combobox}
      resetSelectionOnOptionHover={false}
      keepMounted
      onOptionSubmit={(option) => {
        setValue(option);
        combobox.openDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase component="button" onClick={() => combobox.toggleDropdown()} pointer>
          {value || <Input.Placeholder>Pick a value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize
            mah={220}
            type="scroll"
            scrollbarSize={4}
            viewportRef={viewportRef}
            onMouseDown={(event) => event.preventDefault()}
          >
            <Virtuoso
              data={largeData}
              ref={virtuoso}
              style={{ height: 420 }}
              customScrollParent={viewportRef.current!}
              rangeChanged={(range) => {
                visibleRangeRef.current = range;
              }}
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
  );
}
`;

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: `value-${index}`,
    label: `Label ${index}`,
    id: `item-${index}`,
    disabled: false,
  }));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const virtuoso = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const visibleRangeRef = useRef<ListRange>({
    startIndex: 0,
    endIndex: 0,
  });

  const scrollOptionIntoView = (index: number) => {
    setTimeout(() => {
      const isVisible =
        index >= visibleRangeRef.current.startIndex && index <= visibleRangeRef.current.endIndex;
      if (index !== -1 && !isVisible) {
        virtuoso.current.scrollToIndex({ index, align: 'end' });
      }
    }, 4);
  };

  const combobox = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        combobox.selectActiveOption();
        scrollOptionIntoView(activeOptionIndex);
      }
    },
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      scrollOptionIntoView(index);
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const option = largeData[index];
    setValue(option.value);
    setActiveOptionIndex(index);
    combobox.closeDropdown();
    combobox.resetSelectedOption();
  }

  return (
    <Combobox
      store={combobox}
      resetSelectionOnOptionHover={false}
      keepMounted
      onOptionSubmit={(option) => {
        setValue(option);
        combobox.openDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase component="button" onClick={() => combobox.toggleDropdown()} pointer>
          {value || <Input.Placeholder>Pick a value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize
            mah={220}
            type="scroll"
            scrollbarSize={4}
            viewportRef={viewportRef}
            onMouseDown={(event) => event.preventDefault()}
          >
            <Virtuoso
              data={largeData}
              ref={virtuoso}
              style={{ height: 420 }}
              customScrollParent={viewportRef.current!}
              rangeChanged={(range) => {
                visibleRangeRef.current = range;
              }}
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
  );
}

export const virtualized: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
};
