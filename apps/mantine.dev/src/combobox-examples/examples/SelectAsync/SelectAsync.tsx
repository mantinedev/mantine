import { useState } from 'react';
import { Combobox, Input, InputBase, Loader, useCombobox } from '@mantine/core';

const MOCKDATA = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];

function getAsyncData() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(MOCKDATA), 2000);
  });
}

export function SelectAsync() {
  const [value, setValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
    onDropdownOpen: () => {
      if (data.length === 0 && !loading) {
        setLoading(true);
        getAsyncData().then((response) => {
          setData(response);
          setLoading(false);
          store.resetSelectedOption();
        });
      }
    },
  });

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={store}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        store.closeDropdown();
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          aria-label="Pick value"
          pointer
          rightSection={loading ? <Loader size={18} /> : <Combobox.Chevron />}
          onClick={() => store.toggleDropdown()}
          onBlur={() => store.closeDropdown()}
          rightSectionPointerEvents="none"
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {loading ? <Combobox.Empty>Loading…</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
