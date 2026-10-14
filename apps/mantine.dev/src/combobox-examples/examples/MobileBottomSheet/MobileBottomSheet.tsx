import { useState } from 'react';
import {
  Combobox,
  Drawer,
  Input,
  InputBase,
  ScrollArea,
  TextInput,
  useCombobox,
} from '@mantine/core';
import { useDidUpdate, useMediaQuery } from '@mantine/hooks';

const countries = [
  'Australia',
  'Brazil',
  'Canada',
  'France',
  'Germany',
  'India',
  'Italy',
  'Japan',
  'Mexico',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
  'Spain',
  'Sweden',
  'United Kingdom',
  'United States',
];

export function MobileBottomSheet() {
  const isMobile = useMediaQuery('(max-width: 48em)');

  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
    onDropdownOpen: () => store.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useDidUpdate(() => {
    setSearch(value || '');
    store.closeDropdown();
  }, [isMobile]);

  const shouldFilterOptions = search.trim() !== '' && search !== value;
  const filteredOptions = shouldFilterOptions
    ? countries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : countries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      {item}
    </Combobox.Option>
  ));

  const optionsList = (
    <Combobox.Options>
      <ScrollArea.Autosize mah={280} type="scroll">
        {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
      </ScrollArea.Autosize>
    </Combobox.Options>
  );

  const handleSubmit = (val: string) => {
    setValue(val);
    setSearch(val);
    store.closeDropdown();
  };

  if (isMobile) {
    return (
      <Combobox store={store} onOptionSubmit={handleSubmit}>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          aria-haspopup="dialog"
          aria-expanded={store.dropdownOpened}
          onClick={() => {
            setSearch('');
            store.openDropdown();
          }}
        >
          {value || <Input.Placeholder>Pick country</Input.Placeholder>}
        </InputBase>

        <Drawer
          opened={store.dropdownOpened}
          onClose={() => store.closeDropdown()}
          title="Pick country"
          position="bottom"
          size="auto"
          offset={5}
          radius="lg"
          withCloseButton={false}
          withHandle
        >
          <Combobox.EventsTarget>
            <TextInput
              data-autofocus
              placeholder="Search country"
              value={search}
              mb="sm"
              onChange={(event) => {
                setSearch(event.currentTarget.value);
                store.updateSelectedOptionIndex();
              }}
            />
          </Combobox.EventsTarget>

          {optionsList}
        </Drawer>
      </Combobox>
    );
  }

  return (
    <Combobox store={store} onOptionSubmit={handleSubmit} withinPortal={false}>
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          placeholder="Pick country"
          value={search}
          onChange={(event) => {
            store.openDropdown();
            store.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => store.openDropdown()}
          onFocus={() => store.openDropdown()}
          onBlur={() => {
            store.closeDropdown();
            setSearch(value || '');
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>{optionsList}</Combobox.Dropdown>
    </Combobox>
  );
}
