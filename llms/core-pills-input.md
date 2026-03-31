# PillsInput
Package: @mantine/core
Import: import { PillsInput } from '@mantine/core';
Description: Base component for custom tags inputs and multi selects

## Usage

`PillsInput` is a utility component that can be used to create custom tag inputs, multi-selects, and
other similar components. By itself it does not include any logic; it only renders given children.
Usually, `PillsInput` is used in combination with the [Pill](https://mantine.dev/llms/core-pill.md) component.

```tsx
import { PillsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <PillsInput label="PillsInput">
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { PillsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <PillsInput label="Enter items" loading>
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <PillsInput.Field placeholder="Enter value" />
      </Pill.Group>
    </PillsInput>
  );
}
```


## Input props

PillsInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all div element props. PillsInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { PillsInput, Pill } from '@mantine/core';


function Demo() {
  return (
    <PillsInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
    >
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
```


## Searchable select example

Combine `PillsInput` with [Combobox](https://mantine.dev/llms/core-combobox.md) to create a searchable multiselect:

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


## Accessibility

If `PillsInput` is used without the label prop, it will not be announced properly by screen readers:

```tsx
import { PillsInput } from '@mantine/core';

// Inaccessible input – screen readers will not announce it properly
function Demo() {
  return (
    <PillsInput>
      <PillsInput.Field />
    </PillsInput>
  );
}
```

Set `aria-label` on the `PillsInput.Field` component to make the input accessible.
In this case the label will not be visible, but screen readers will announce it:

```tsx
import { PillsInput } from '@mantine/core';

// Accessible input – it has aria-label
function Demo() {
  return (
    <PillsInput>
      <PillsInput.Field aria-label="Enter tags" />
    </PillsInput>
  );
}
```

If the `label` prop is set, the input will be accessible and it is not required to set `aria-label`:

```tsx
import { PillsInput } from '@mantine/core';

// Accessible input – it has associated label element
function Demo() {
  return (
    <PillsInput label="Enter tags">
      <PillsInput.Field />
    </PillsInput>
  );
}
```


#### Props

**PillsInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

**PillsInput.Field props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| pointer | boolean | - | If set, cursor is changed to pointer |
| type | "hidden" \| "auto" \| "visible" | - | Controls input styles when focused. If `auto` the input is hidden when not focused. If `visible` the input will always remain visible. |


#### Styles API

PillsInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**PillsInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-PillsInput-wrapper | Root element of the Input |
| input | .mantine-PillsInput-input | Input element |
| section | .mantine-PillsInput-section | Left and right sections |
| root | .mantine-PillsInput-root | Root element |
| label | .mantine-PillsInput-label | Label element |
| required | .mantine-PillsInput-required | Required asterisk element, rendered inside label |
| description | .mantine-PillsInput-description | Description element |
| error | .mantine-PillsInput-error | Error element |

**PillsInputfield selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| field | .mantine-PillsInputfield-field | Root element |

**PillsInputfield data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| field | data-type | - | Value of `type` prop |
| field | data-disabled | `disabled` prop is set | - |
