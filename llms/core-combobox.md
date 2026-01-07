# Combobox
Package: @mantine/core
Import: import { Combobox } from '@mantine/core';
Description: Create custom select, autocomplete or multiselect inputs

## Examples

This page contains only a small set of examples, as the full code of the demos is long.
You can find all 50+ examples on a [separate page](https://mantine.dev/combobox?e=BasicSelect).

<ExamplesButton link="/combobox?e=BasicSelect" label="Open Combobox examples page" />

## Usage

`Combobox` provides a set of components and hooks to custom select, multiselect or autocomplete components.
The component is very flexible – you have full control of the rendering and logic.

#### Example: select

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## useCombobox hook

`useCombobox` hook provides combobox store. The store contains the current state of the component
and handlers to update it. Created store must be passed to the `store` prop of `Combobox`:

```tsx
import { Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox();
  return (
    <Combobox store={combobox}>{/* Your implementation */}</Combobox>
  );
}
```

## useCombobox options

`useCombobox` hooks accepts an options object with the following properties:

```tsx
interface UseComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?(opened: boolean): void;

  /** Called when dropdown closes with event source: keyboard, mouse or unknown */
  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;

  /** Called when dropdown opens with event source: keyboard, mouse or unknown */
  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */
  scrollBehavior?: ScrollBehavior;
}
```

You can import `UseComboboxOptions` type from `@mantine/core` package:

```tsx
import type { UseComboboxOptions } from '@mantine/core';
```

## Combobox store

Combobox store is an object with the following properties:

```tsx
interface ComboboxStore {
  /** Current dropdown opened state */
  dropdownOpened: boolean;

  /** Opens dropdown */
  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;

  /** Closes dropdown */
  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;

  /** Toggles dropdown opened state */
  toggleDropdown(
    eventSource?: 'keyboard' | 'mouse' | 'unknown'
  ): void;

  /** Selected option index */
  selectedOptionIndex: number;

  /** Selects `Combobox.Option` by index */
  selectOption(index: number): void;

  /** Selects first `Combobox.Option` with `active` prop.
   *  If there are no such options, the function does nothing.
   */
  selectActiveOption(): string | null;

  /** Selects first `Combobox.Option` that is not disabled.
   *  If there are no such options, the function does nothing.
   * */
  selectFirstOption(): string | null;

  /** Selects next `Combobox.Option` that is not disabled.
   *  If the current option is the last one, the function selects first option, if `loop` is true.
   */
  selectNextOption(): string | null;

  /** Selects previous `Combobox.Option` that is not disabled.
   *  If the current option is the first one, the function selects last option, if `loop` is true.
   * */
  selectPreviousOption(): string | null;

  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */
  resetSelectedOption(): void;

  /** Triggers `onClick` event of selected option.
   *  If there is no selected option, the function does nothing.
   */
  clickSelectedOption(): void;

  /** Updates selected option index to currently selected or active option.
   *  The function is required to be used with searchable components to update selected option index
   *  when options list changes based on search query.
   */
  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;

  /** List id, used for `aria-*` attributes */
  listId: string | null;

  /** Sets list id */
  setListId(id: string): void;

  /** Ref of `Combobox.Search` input */
  searchRef: React.RefObject<HTMLInputElement | null>;

  /** Moves focus to `Combobox.Search` input */
  focusSearchInput(): void;

  /** Ref of the target element */
  targetRef: React.RefObject<HTMLElement | null>;

  /** Moves focus to the target element */
  focusTarget(): void;
}
```

You can import `ComboboxStore` type from `@mantine/core` package:

```tsx
import type { ComboboxStore } from '@mantine/core';
```

## useCombobox handlers

Combobox store handlers can be used to control `Combobox` state.
For example, to open the dropdown, call `openDropdown` handler:

```tsx
import { Button, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox();

  return (
    <Combobox>
      <Combobox.Target>
        <Button onClick={() => combobox.openDropdown()}>
          Open dropdown
        </Button>
      </Combobox.Target>

      {/* Your implementation */}
    </Combobox>
  );
}
```

You can use store handlers in `useCombobox` options. For example, you can
call `selectFirstOption` when the dropdown is opened and `resetSelectedOption`
when it is closed:

```tsx
import { Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.selectFirstOption(),
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  return (
    <Combobox store={combobox}>{/* Your implementation */}</Combobox>
  );
}
```

## Combobox.Target

`Combobox.Target` should be used as a wrapper for the target element or component.
`Combobox.Target` marks its child as a target for dropdown and sets `aria-*` attributes
and adds keyboard event listeners to it.

`Combobox.Target` requires a single child element or component. The child component
must accept `ref` and `...others` props. You can use any Mantine component as a target without
any additional configuration, for example, [Button](https://mantine.dev/core/button/), [TextInput](https://mantine.dev/core/text-input/)
or [InputBase](https://mantine.dev/core/input/#inputbase-component).

Example of using `Combobox.Target` with [TextInput](https://mantine.dev/core/text-input/) component:

#### Example: autocomplete

```tsx
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


Example of using `Combobox.Target` with [Button](https://mantine.dev/core/button) component:

#### Example: button

```tsx
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
```


## Split events and dropdown targets

In some cases, you might need to use different elements as an events target and as a dropdown.
Use `Combobox.EventsTarget` to add `aria-*` attributes and keyboard event handlers, and
`Combobox.DropdownTarget` to position the dropdown relative to the target.

You can have as many `Combobox.EventsTarget` as you need, but only one `Combobox.DropdownTarget`
per `Combobox`.

Example of using `Combobox.EventsTarget` and `Combobox.DropdownTarget` with [PillsInput](https://mantine.dev/core/pills-input) component
to create a searchable multiselect component:

#### Example: searchableMultiselect

```tsx
import { useState } from 'react';
import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0 && value.length > 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Update selected option index

`updateSelectedOptionIndex` handler is required to be called when options list changes.
Usually, the options list changes when options are filtered based on the search query. In this case,
you need to call `updateSelectedOptionIndex` in `onChange` handler of the search input.

Example of using `updateSelectedOptionIndex` handler in searchable select component:

#### Example: searchableSelect

```tsx
import { useState } from 'react';
import { InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const shouldFilterOptions = groceries.every((item) => item !== search);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Search input

If you prefer search input inside the dropdown, use `Combobox.Search` component.
To focus the search input, call `combobox.focusSearchInput`, usually it is done
when the dropdown is opened. To prevent focus loss after the dropdown is closed,
call `combobox.focusTarget`:

#### Example: buttonSearch

```tsx
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
```


## Select first option

Use `combobox.selectFirstOption` function to select the first option. It is useful
if you want to select the first option when user searching for options in the list.
If there are no options available, it will do nothing.

#### Example: selectFirstOption

```tsx
import { useState, useEffect } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Active option

Set `active` prop on `Combobox.Option` component to mark it as active.
By default, an active option does not have any styles, you can use `data-combobox-active`
[data attribute](https://mantine.dev/styles/data-attributes) to style it.

`combobox.selectActiveOption` function selects active option. Usually, it is called
when the dropdown is opened:

#### Example: activeOption

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, CheckIcon, Group } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      if (eventSource === 'keyboard') {
        combobox.selectActiveOption();
      } else {
        combobox.updateSelectedOptionIndex('active');
      }
    },
  });

  const [value, setValue] = useState<string | null>('🥦 Broccoli');

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      <Group gap="xs">
        {item === value && <CheckIcon size={12} />}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      resetSelectionOnOptionHover
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.updateSelectedOptionIndex('active');
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Options groups

Render `Combobox.Option` components inside `Combobox.Group` to create options group.
`Combobox.Group` label will be automatically hidden if the group does not have any
children.

#### Example: groups

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <Combobox.Group label="Fruits">
            <Combobox.Option value="🍎 Apples">🍎 Apples</Combobox.Option>
            <Combobox.Option value="🍌 Bananas">🍌 Bananas</Combobox.Option>
            <Combobox.Option value="🍇 Grape">🍇 Grape</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Vegetables">
            <Combobox.Option value="🥦 Broccoli">🥦 Broccoli</Combobox.Option>
            <Combobox.Option value="🥕 Carrots">🥕 Carrots</Combobox.Option>
            <Combobox.Option value="🥬 Lettuce">🥬 Lettuce</Combobox.Option>
          </Combobox.Group>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Scrollable list

Set `max-height` style on either `Combobox.Dropdown` or `Combobox.Options` to make the
options list scrollable. You can use `mah` [style prop](https://mantine.dev/styles/style-props) to set
`max-height`.

#### Example: nativeScroll

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
          {options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Scrollable list with ScrollArea

You can also use [ScrollArea or ScrollArea.Autosize](https://mantine.dev/core/scroll-area) components
instead of native scrollbars:

#### Example: scrollArea

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={200}>
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Hide dropdown

Set `hidden` prop on `Combobox.Dropdown` to hide the dropdown. For example,
it can be useful when you want to show the dropdown only when there is at least
one option available:

#### Example: hiddenDropdown

```tsx
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={options.length === 0}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Control dropdown opened state

To control the dropdown opened state, pass `opened` to `useCombobox` hook:

#### Example: controlledDropdown

```tsx
import { useState } from 'react';
import { TextInput, Button, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const [opened, setOpened] = useState(false);
  const combobox = useCombobox({ opened });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Button mb="md" onClick={() => setOpened((o) => !o)}>
        Toggle dropdown
      </Button>

      <Combobox store={combobox}>
        <Combobox.Target>
          <TextInput
            label="Autocomplete"
            description="Dropdown is opened/closed when button is clicked"
            placeholder="Click button to toggle dropdown"
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
```


## Popover props

`Combobox` supports most of [Popover](https://mantine.dev/core/popover) props. For example,
you can control dropdown position with `position` prop and disable Floating UI
middlewares with `middlewares` prop:

#### Example: dropdownPosition

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      position="bottom"
      middlewares={{ flip: false, shift: false }}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Without dropdown

You can use `Combobox` without dropdown. To do so, use `Combobox.EventsTarget` instead
of `Combobox.Target`:

#### Example: noDropdown

```tsx
import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSubmit={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
```


#### Example: stylesApi

```tsx
import { Combobox, TextInput, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({ opened: true });

  return (
    <Combobox store={combobox}>
      <Combobox.Target>
        <TextInput placeholder="Pick value" />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Header>Combobox header</Combobox.Header>
        <Combobox.Search placeholder="Search input" />

        <Combobox.Options>
          <Combobox.Group label="First group">
            <Combobox.Option value="1">First</Combobox.Option>
            <Combobox.Option value="2">Second</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Second group">
            <Combobox.Option value="3">Third</Combobox.Option>
            <Combobox.Option value="4">Fourth</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Third group">
            <Combobox.Empty>Nothing found in this group...</Combobox.Empty>
          </Combobox.Group>
        </Combobox.Options>

        <Combobox.Footer>Combobox footer</Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | ArrowPosition | - | Arrow position |
| arrowRadius | number | - | Arrow <code>border-radius</code> in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | Combobox content |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| dropdownPadding | Padding<string | number> | - | Controls <code>padding</code> of the dropdown |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. <code>display: none</code> styles are added instead. |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number | FloatingAxesOffsets | - | Offset of the dropdown element |
| onClose | () => void | - | Called when dropdown closes |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when dropdown opens |
| onOptionSubmit | (value: string, optionProps: ComboboxOptionProps) => void | - | Called when item is selected with the <code>Enter</code> key or by clicking it |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to <code>Overlay</code> component |
| portalProps | BasePortalProps | - | Props to pass down to the <code>Portal</code> when <code>withinPortal</code> is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| positionDependencies | any[] | - | @deprecated : Do not use, will be removed in 9.0 |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius |
| readOnly | boolean | - | Determines whether the <code>Combobox</code> value can be changed |
| resetSelectionOnOptionHover | boolean | - | Determines whether selection should be reset when option is hovered |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of <code>theme.shadows</code> or any other valid CSS <code>box-shadow</code> value |
| size | MantineSize | (string & {}) | - | Controls items <code>font-size</code> and <code>padding</code> |
| store | ComboboxStore | - | Combobox store, can be used to control combobox state |
| transitionProps | TransitionProps | - | Props passed down to the <code>Transition</code> component. Use to configure duration and animation type. |
| width | PopoverWidth | - | Dropdown width, or <code>'target'</code> to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the <code>Portal</code> |
| zIndex | string | number | - | Dropdown <code>z-index</code> |


#### Styles API

Combobox component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Combobox selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| options | .mantine-Combobox-options | `Combobox.Options` component |
| dropdown | .mantine-Combobox-dropdown | `Combobox.Dropdown` component |
| option | .mantine-Combobox-option | `Combobox.Option` component |
| search | .mantine-Combobox-search | `Combobox.Search` input |
| empty | .mantine-Combobox-empty | `Combobox.Empty` component |
| header | .mantine-Combobox-header | `Combobox.Header` component |
| footer | .mantine-Combobox-footer | `Combobox.Footer` component |
| group | .mantine-Combobox-group | `Combobox.Group` component |
| groupLabel | .mantine-Combobox-groupLabel | Label of `Combobox.Group` component |

**Combobox CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| dropdown | --combobox-option-fz | Controls option `font-size` |
| dropdown | --combobox-option-padding | Controls option `padding` |
| dropdown | --combobox-padding | Controls dropdown `padding` |

**Combobox data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | - | - |
| option | data-combobox-disabled | - | - |
| dropdown | data-hidden | - | - |