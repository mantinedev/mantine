import React, { useState } from 'react';
import { TextInput, Combobox, useCombobox, Checkbox, Group } from '@mantine/core';
import classes from './SelectList.module.css';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

export function SelectList() {
  const combobox = useCombobox();

  const [value, setValue] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option
        value={item}
        key={item}
        active={value.includes(item)}
        onMouseOver={() => combobox.resetSelectedOption()}
      >
        <Group gap="sm">
          <Checkbox
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Search groceries"
          classNames={{ input: classes.input }}
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
            combobox.updateSelectedOptionIndex();
          }}
        />
      </Combobox.EventsTarget>

      <div className={classes.list}>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found....</Combobox.Empty>}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
