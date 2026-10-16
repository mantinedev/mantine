# Combobox Implementation Patterns

## Table of Contents
- [Basic select (button trigger)](#basic-select-button-trigger)
- [Searchable select (input trigger)](#searchable-select-input-trigger)
- [Multi-select with pills](#multi-select-with-pills)
- [Options with groups](#options-with-groups)
- [Custom option rendering](#custom-option-rendering)
- [Clear button](#clear-button)
- [Form integration (hidden input)](#form-integration-hidden-input)
- [Highlight the current value on open](#highlight-the-current-value-on-open)
- [Creatable option](#creatable-option)
- [Async search](#async-search)
- [Free-text input with suggestions](#free-text-input-with-suggestions)
- [Button inside an option](#button-inside-an-option)
- [Suggestions for a textarea](#suggestions-for-a-textarea)
- [Custom styles](#custom-styles)
- [Virtualized list](#virtualized-list)
- [Custom form input](#custom-form-input)
- [Search inside the dropdown](#search-inside-the-dropdown)
- [Dropdown that fits the viewport](#dropdown-that-fits-the-viewport)
- [Nothing found message](#nothing-found-message)

---

## Basic select (button trigger)

```tsx
function CustomSelect({ data }: { data: string[] }) {
  const [value, setValue] = useState<string | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
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

---

## Searchable select (input trigger)

Input acts as both trigger and search field. Filter options based on the typed value.

```tsx
function SearchableSelect({ data }: { data: string[] }) {
  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.selectFirstOption(),
  });

  // When the input holds the label of the selected value, show the full list instead of filtering by it
  const shouldFilterOptions = data.every((item) => item !== search);
  const filtered = shouldFilterOptions
    ? data.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : data;

  const options = filtered.length > 0
    ? filtered.map((item) => (
        <Combobox.Option value={item} key={item}>{item}</Combobox.Option>
      ))
    : <Combobox.Empty>Nothing found</Combobox.Empty>;

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
          value={search}
          onChange={(e) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(e.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

---

## Multi-select with pills

Use `Combobox.DropdownTarget` for the outer container and `Combobox.EventsTarget` around the text input inside it.

```tsx
function MultiSelect({ data }: { data: string[] }) {
  const combobox = useCombobox({ onDropdownClose: () => combobox.resetSelectedOption() });
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  const pills = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {pills}
            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(e) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(e.currentTarget.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && search.length === 0) {
                    e.preventDefault();
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
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

---

## Options with groups

```tsx
const groups = data.map((group) => (
  <Combobox.Group label={group.group} key={group.group}>
    {group.items.map((item) => (
      <Combobox.Option value={item.value} key={item.value}>
        {item.label}
      </Combobox.Option>
    ))}
  </Combobox.Group>
));

// Inside Combobox.Dropdown:
<Combobox.Options>{groups}</Combobox.Options>
```

---

## Custom option rendering

Render any content inside `Combobox.Option`:

```tsx
const options = data.map((item) => (
  <Combobox.Option value={item.value} key={item.value}>
    <Group>
      <Avatar src={item.avatar} size="sm" />
      <div>
        <Text size="sm">{item.label}</Text>
        <Text size="xs">{item.email}</Text>
      </div>
    </Group>
  </Combobox.Option>
));
```

---

## Clear button

```tsx
const rightSection = value ? (
  <Combobox.ClearButton onClear={() => { setValue(null); setSearch(''); }} />
) : (
  <Combobox.Chevron />
);

<InputBase
  rightSection={rightSection}
  rightSectionPointerEvents={value ? 'all' : 'none'}
/>
```

---

## Form integration (hidden input)

```tsx
// Single value
<Combobox.HiddenInput value={value} name="framework" />

// Multiple values (joined by comma by default)
<Combobox.HiddenInput value={selectedValues} name="frameworks" valuesDivider="," />
```

---

## Highlight the current value on open

Mark the option that holds the value with `active`, then highlight it and scroll it into view when
the dropdown opens:

```tsx
const combobox = useCombobox({
  onDropdownClose: () => combobox.resetSelectedOption(),
  onDropdownOpen: () => {
    combobox.selectActiveOption(); // highlight
    combobox.updateSelectedOptionIndex('active', { scrollIntoView: true }); // scroll to it
  },
});

<Combobox.Option value={item} key={item} active={item === value}>
  <Group gap="xs">
    {item === value && <CheckIcon size={12} />}
    {item}
  </Group>
</Combobox.Option>
```

`updateSelectedOptionIndex('active')` alone does not show a highlight.

---

## Creatable option

Add a regular option with a reserved value and handle it in `onOptionSubmit`:

```tsx
const exactMatch = data.some((item) => item.toLowerCase() === search.trim().toLowerCase());

<Combobox
  store={combobox}
  onOptionSubmit={(val) => {
    if (val === '$create') {
      onCreate(search.trim());
    } else {
      onChange(val);
    }
    setSearch('');
  }}
>
  {/* target */}
  <Combobox.Dropdown>
    <Combobox.Options>
      {options}
      {!exactMatch && search.trim().length > 0 && (
        <Combobox.Option value="$create">+ Create "{search.trim()}"</Combobox.Option>
      )}
    </Combobox.Options>
  </Combobox.Dropdown>
</Combobox>
```

---

## Async search

Keep the request state next to the search value. Highlight the first option in an effect when
results arrive, hide the dropdown for an empty query with `hidden`, and keep focus in the input
when the user clicks Retry.

```tsx
const [search, setSearch] = useState('');
const [debounced] = useDebouncedValue(search, 300);
const [state, setState] = useState<{ status: 'idle' | 'loading' | 'error' | 'done'; items: User[] }>({
  status: 'idle',
  items: [],
});
const requestId = useRef(0);

const load = (query: string) => {
  const id = ++requestId.current;
  setState((current) => ({ ...current, status: 'loading' }));
  searchUsers(query).then(
    (items) => id === requestId.current && setState({ status: 'done', items }),
    () => id === requestId.current && setState({ status: 'error', items: [] })
  );
};

useEffect(() => {
  if (debounced.trim()) {
    load(debounced);
  }
}, [debounced]);

useEffect(() => {
  combobox.selectFirstOption(); // after results render; skips disabled options
}, [state.items]);

<Combobox store={combobox} onOptionSubmit={handleSubmit}>
  <Combobox.Target>
    <TextInput
      value={search}
      rightSection={state.status === 'loading' ? <Loader size="xs" /> : null}
      onChange={(event) => {
        setSearch(event.currentTarget.value);
        combobox.openDropdown();
      }}
      onBlur={() => combobox.closeDropdown()}
    />
  </Combobox.Target>

  <Combobox.Dropdown hidden={search.trim() === '' || state.status === 'idle'}>
    <Combobox.Options>
      {state.status === 'error' ? (
        <Combobox.Empty>
          Could not load users{' '}
          <Anchor
            component="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => load(debounced)}
          >
            Retry
          </Anchor>
        </Combobox.Empty>
      ) : state.status === 'done' && state.items.length === 0 ? (
        <Combobox.Empty>No users found</Combobox.Empty>
      ) : (
        state.items.map((user) => (
          <Combobox.Option value={user.id} key={user.id} disabled={!user.active}>
            {user.name}
          </Combobox.Option>
        ))
      )}
    </Combobox.Options>
  </Combobox.Dropdown>
</Combobox>
```

---

## Free-text input with suggestions

For a search box the user must be able to submit text that matches no option. Do not highlight
anything automatically; Enter with no highlighted option is not handled by Combobox, so handle it
in your own `onKeyDown`, which runs before the built-in handling:

```tsx
<Combobox store={combobox} onOptionSubmit={handleOptionSubmit}>
  <Combobox.Target>
    <TextInput
      value={query}
      onChange={(event) => {
        setQuery(event.currentTarget.value);
        combobox.resetSelectedOption(); // typing removes the highlight
        combobox.openDropdown();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && combobox.getSelectedOptionIndex() === -1) {
          onSearch(query);
          combobox.closeDropdown();
        }
      }}
      onFocus={() => combobox.openDropdown()}
      onBlur={() => combobox.closeDropdown()}
    />
  </Combobox.Target>

  <Combobox.Dropdown hidden={suggestions.length === 0 && query.trim() === ''}>
    <Combobox.Options>
      {suggestions}
      {query.trim() !== '' && <Combobox.Option value="$search">Search for "{query}"</Combobox.Option>}
    </Combobox.Options>
    <Combobox.Footer>↑↓ to navigate · ↵ to select · esc to close</Combobox.Footer>
  </Combobox.Dropdown>
</Combobox>
```

Unlike a select, do not restore the previous value on blur and do not call `selectFirstOption()`.

---

## Button inside an option

A button inside `Combobox.Option` (remove a recent item) must not submit the option or take focus:

```tsx
<Combobox.Option value={item} key={item}>
  <Group justify="space-between" wrap="nowrap">
    {item}
    <CloseButton
      size="sm"
      aria-label={`Remove ${item}`}
      onMouseDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onClick={(event) => {
        event.stopPropagation();
        onRemove(item);
      }}
    />
  </Group>
</Combobox.Option>
```

---

## Suggestions for a textarea

For @mentions or /commands the target is a `Textarea` and the dropdown opens from the text around
the caret, not from focus. Turn the built-in keyboard handling off so that arrows and Enter work
normally while the dropdown is closed:

```tsx
const combobox = useCombobox();
// trigger: { start, query } for the "@word" at the caret, or null. Compute it in onChange, onSelect and onClick.

useEffect(() => {
  if (trigger && matches.length > 0) {
    combobox.openDropdown();
    combobox.selectFirstOption(); // after the options render
  } else {
    combobox.closeDropdown();
  }
}, [trigger?.query, matches.length]);

<Combobox store={combobox} width={260} position="bottom-start" onOptionSubmit={insertMention}>
  <Combobox.Target withKeyboardNavigation={false}>
    <Textarea
      value={value}
      onChange={handleChange}
      onBlur={() => combobox.closeDropdown()}
      onKeyDown={(event) => {
        if (!combobox.dropdownOpened) {
          return;
        }
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          combobox.selectNextOption();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          combobox.selectPreviousOption();
        } else if (event.key === 'Enter' || event.key === 'Tab') {
          event.preventDefault();
          combobox.clickSelectedOption();
        } else if (event.key === 'Escape') {
          combobox.closeDropdown();
        }
      }}
    />
  </Combobox.Target>
  <Combobox.Dropdown>
    <Combobox.Options>{options}</Combobox.Options>
  </Combobox.Dropdown>
</Combobox>
```

In `insertMention`, replace the text from `trigger.start` to the caret and restore the caret with
`setSelectionRange` after the value updates. Clicking an option keeps focus in the textarea.

---

## Custom styles

Style the dropdown with `classNames` and a CSS module. Default option rules have zero specificity,
so these classes override them without `!important`. See "Default styles" in api.md for what you
are overriding.

```tsx
<Combobox
  store={combobox}
  size="md"
  dropdownPadding={8}
  radius={12}
  shadow="lg"
  offset={6}
  transitionProps={{ transition: 'pop-top-left', duration: 150 }}
  classNames={{ options: classes.options, option: classes.option }}
>
  <Combobox.Target targetType="button">
    <InputBase component="button" type="button" pointer className={classes.trigger} rightSection={<Combobox.Chevron />}>
      {label}
    </InputBase>
  </Combobox.Target>
  {/* dropdown */}
</Combobox>
```

```css
.options {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.option {
  border-radius: 8px;

  /* keyboard highlight: replace the default primary background (9.x: light-dark(gray-1, dark-5)) */
  &[data-combobox-selected] {
    background-color: var(--mantine-color-hover-strong);
    color: inherit;
  }

  /* option that holds the value */
  &[data-combobox-active] {
    background-color: var(--mantine-primary-color-light);
  }

  &[data-combobox-active][data-combobox-selected] {
    background-color: var(--mantine-primary-color-light-hover);
  }

  &[data-combobox-disabled] {
    opacity: 0.5;
  }
}

/* open state: the target element gets data-expanded */
.trigger [data-expanded] {
  border-color: var(--mantine-primary-color-filled);
}
```

---

## Virtualized list

For thousands of options render only the visible rows. Example with `@tanstack/react-virtual`:

```tsx
const ITEM_HEIGHT = 36;

function Demo({ data }: { data: { value: string; label: string }[] }) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1); // keyboard highlight
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1); // option that holds the value
  const [value, setValue] = useState('');
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  const combobox = useVirtualizedCombobox({
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        setSelectedOptionIndex(activeOptionIndex);
        requestAnimationFrame(() => virtualizer.scrollToIndex(activeOptionIndex, { align: 'auto' }));
      }
    },
    totalOptionsCount: data.length,
    getOptionId: (index) => `option-${data[index].value}`,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onSelectedOptionSubmit: handleSubmit,
  });

  function handleSubmit(index: number) {
    setValue(data[index].value);
    setActiveOptionIndex(index);
    combobox.closeDropdown();
    combobox.resetSelectedOption();
  }

  return (
    <Combobox store={combobox} resetSelectionOnOptionHover={false} keepMounted>
      <Combobox.Target targetType="button">
        <InputBase component="button" type="button" pointer onClick={() => combobox.toggleDropdown()}>
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
            <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
              {virtualizer.getVirtualItems().map((row) => (
                <Combobox.Option
                  value={data[row.index].value}
                  key={data[row.index].value}
                  id={`option-${data[row.index].value}`}
                  active={row.index === activeOptionIndex}
                  selected={row.index === selectedOptionIndex}
                  onClick={() => handleSubmit(row.index)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: row.size,
                    transform: `translateY(${row.start}px)`,
                  }}
                >
                  {data[row.index].label}
                </Combobox.Option>
              ))}
            </div>
          </Combobox.Options>
        </Combobox.ScrollArea>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

- 9.x: no `Combobox.ScrollArea`, use `<ScrollArea.Autosize mah={220} type="scroll" viewportRef={setScrollParent}>` inside `Combobox.Options`.
- `keepMounted` keeps the scroll element in the DOM so that `scrollToIndex` works when the dropdown opens.
- With search, filter the data first and pass the filtered length as `totalOptionsCount`. After the
  query changes, set `selectedOptionIndex` to `0` and call `virtualizer.scrollToIndex(0)`.
- When the value can be set from outside, derive `activeOptionIndex` from the value
  (`data.findIndex(...)`) instead of storing it, so that opening scrolls to the right row.

---

## Custom form input

A select built on `Combobox` that works with `form.getInputProps` from `@mantine/form` accepts
`value`, `defaultValue`, `onChange`, `error`, `onFocus` and `onBlur`. Use `useUncontrolled` for the
value, and report blur only when focus leaves both the trigger and the dropdown search:

```tsx
function CountrySelect({ value, defaultValue, onChange, onFocus, onBlur, error, label, readOnly, ...others }: CountrySelectProps) {
  const [current, setCurrent] = useUncontrolled<string | null>({ value, defaultValue, finalValue: null, onChange });
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.focusSearchInput(),
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const isInside = (node: EventTarget | null) =>
    node !== null && (node === combobox.targetRef.current || node === combobox.searchRef.current);

  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (!isInside(event.relatedTarget)) {
      onBlur?.(event);
    }
  };

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setCurrent(val);
        combobox.closeDropdown();
        combobox.focusTarget();
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          label={label}
          error={error}
          rightSection={<Combobox.Chevron />}
          onClick={() => !readOnly && combobox.toggleDropdown()}
          onFocus={onFocus}
          onBlur={handleBlur}
          {...others}
        >
          {current || <Input.Placeholder>Pick country</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Search value={search} onChange={handleSearchChange} onBlur={handleBlur} />
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

<CountrySelect label="Country" {...form.getInputProps('country')} />
```

Spread the remaining props onto the trigger: `getInputProps` also passes `data-path`, which
`form.getInputNode` uses to find and focus the field.

`useUncontrolled` subscribes the component to its form field, so it updates after
`form.setFieldValue` and `form.reset` and rerenders alone in the default uncontrolled form mode.
9.x: add `key={form.key('country')}` so the form can remount the input on reset.

`Combobox.Target` can also wrap a small button inside the `leftSection` of a `TextInput` (a country
code picker in a phone input): the dropdown is positioned relative to that button.

---

## Search inside the dropdown

Button trigger with `Combobox.Search` in the dropdown. The button opens the dropdown with its own
`onClick` and the search input handles the keyboard, so `targetType="button"` is not needed here and
`withAriaAttributes={false}` keeps combobox ARIA attributes off the button. Focus the search input when the dropdown
opens and return focus to the target when it closes. Call `combobox.updateSelectedOptionIndex()`
whenever the options list changes, otherwise keyboard navigation keeps the old index.

```tsx
const [search, setSearch] = useState('');
const [value, setValue] = useState<string | null>(null);

const combobox = useCombobox({
  onDropdownClose: () => {
    combobox.resetSelectedOption();
    combobox.focusTarget();
    setSearch('');
  },
  onDropdownOpen: () => combobox.focusSearchInput(),
});

const options = data
  .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
  .map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

<Combobox
  store={combobox}
  width={250}
  position="bottom-start"
  onOptionSubmit={(val) => {
    setValue(val);
    combobox.closeDropdown();
  }}
>
  <Combobox.Target withAriaAttributes={false}>
    <Button onClick={() => combobox.toggleDropdown()}>{value || 'Pick item'}</Button>
  </Combobox.Target>

  <Combobox.Dropdown>
    <Combobox.Search
      value={search}
      onChange={(event) => {
        combobox.updateSelectedOptionIndex();
        setSearch(event.currentTarget.value);
      }}
      placeholder="Search"
    />
    <Combobox.Options>
      {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
    </Combobox.Options>
  </Combobox.Dropdown>
</Combobox>
```

If no custom option markup is needed, `<ComboboxPopover searchable data={data} />` does the same
without any of this code.

---

## Dropdown that fits the viewport

For long lists, let the dropdown take the available viewport height and scroll inside it:

```tsx
<Combobox store={combobox} floatingHeight="viewport" onOptionSubmit={handleSubmit}>
  <Combobox.Target>{/* ... */}</Combobox.Target>
  <Combobox.Dropdown>
    <Combobox.ScrollArea mah="var(--combobox-floating-options-max-height)" viewportProps={{ tabIndex: -1 }}>
      <Combobox.Options>{options}</Combobox.Options>
    </Combobox.ScrollArea>
  </Combobox.Dropdown>
</Combobox>
```

9.x: `<ScrollArea.Autosize mah="var(--combobox-floating-options-max-height)" type="scroll">` inside `Combobox.Options`.

---

## Nothing found message

```tsx
<Combobox.Dropdown>
  <Combobox.Options>
    {filteredOptions.length > 0
      ? filteredOptions
      : <Combobox.Empty>Nothing found for "{search}"</Combobox.Empty>}
  </Combobox.Options>
</Combobox.Dropdown>
```
