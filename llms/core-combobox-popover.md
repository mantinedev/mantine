# ComboboxPopover
Package: @mantine/core
Import: import { ComboboxPopover } from '@mantine/core';
Description: Add combobox dropdown to any button element

## Usage

`ComboboxPopover` allows adding a combobox dropdown with selectable options to any button element.
Unlike `Select` and `MultiSelect`, it does not render an input – instead, you provide your own
target element (typically a `Button`) via `ComboboxPopover.Target`.

`ComboboxPopover.Target` child must be a single element or component that accepts a `ref`.
Fragments, strings, and other primitive values are not supported.

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Data format

`ComboboxPopover` supports the same `data` format as [Select](https://mantine.dev/llms/core-select.md) component:
an array of strings, objects with `value` and `label`, or grouped items.

## Data prop

Data that is used in ComboboxPopover must be an array of strings or objects with value and label properties. You can also specify additional properties that will be available in renderOption function.

## Searchable

Set `searchable` prop to enable a search input inside the dropdown that filters options as you type.
Use `nothingFoundMessage` to display a message when no options match the search query.

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
      searchable
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Controlled search value

Use `searchValue` and `onSearchChange` props to control the search input value:

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        searchable
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <Text mt="md" size="sm">
        Search value: <b>{searchValue || '(empty)'}</b>
      </Text>
      <Text size="sm">
        Selected value: <b>{value || '(none)'}</b>
      </Text>
    </>
  );
}
```


## Sort options

Use `filter` prop with `searchable` to provide a custom filtering and sorting function:

```tsx
import { useState } from 'react';
import { Button, ComboboxItem, ComboboxPopover, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      value={value}
      onChange={setValue}
      searchable
      filter={optionsFilter}
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Limit options

Use `limit` prop with `searchable` to limit the number of options displayed at a time.
This is useful for large data sets to improve performance:

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

const largeData = Array(1000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={largeData}
      value={value}
      onChange={setValue}
      searchable
      limit={5}
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select option'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Multiple selection

Set `multiple` prop to allow selecting multiple values. When `multiple` is set,
`value` type changes from `string | null` to `string[]`, and `onChange` callback
receives an array of selected values.

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
      multiple
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          {value.length > 0 ? value.join(', ') : 'Select frameworks'}
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Check icon

```tsx
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
       withCheckIcon={true} withAlignedLabels={false} checkIconPosition="left"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      defaultValue="React"
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200} mb={150}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Allow deselect

By default, the selected option can be deselected by clicking it again.
Set `allowDeselect={false}` to prevent this behavior.

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover, Stack } from '@mantine/core';

function Demo() {
  const [value1, setValue1] = useState<string | null>('React');
  const [value2, setValue2] = useState<string | null>('React');

  return (
    <Stack>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value1}
        onChange={setValue1}
        allowDeselect={false}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>
            {value1 || 'Cannot deselect'}
          </Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value2}
        onChange={setValue2}
        allowDeselect
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>
            {value2 || 'Can deselect (default)'}
          </Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Stack>
  );
}
```


## Nothing found message

Set `nothingFoundMessage` prop to display a message when no options are available:

```tsx
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[]}
      nothingFoundMessage="No options available"
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Disabled options

```tsx
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Groups

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={[
        { group: 'Frontend', items: ['React', 'Angular', 'Vue'] },
        { group: 'Backend', items: ['Node.js', 'Django', 'Rails'] },
      ]}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select technology'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Render option

Use `renderOption` prop to customize option rendering:

```tsx
import { useState } from 'react';
import {
  CheckIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@phosphor-icons/react';
import { Button, ComboboxPopover, ComboboxPopoverProps, Group } from '@mantine/core';

const iconProps = {
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <TextAlignLeftIcon {...iconProps} />,
  center: <TextAlignCenterIcon {...iconProps} />,
  right: <TextAlignRightIcon {...iconProps} />,
  justify: <TextAlignJustifyIcon {...iconProps} />,
};

const renderSelectOption: ComboboxPopoverProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <CheckIcon style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      value={value}
      onChange={setValue}
      renderOption={renderSelectOption}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select alignment'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Large data sets

By default, the dropdown is wrapped with `ScrollArea.Autosize`.
Use `maxDropdownHeight` to control the maximum height:

```tsx
import { Button, ComboboxPopover } from '@mantine/core';

const data = Array(50)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <ComboboxPopover data={data} maxDropdownHeight={200}>
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select option</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Control dropdown opened state

Use `dropdownOpened` prop to control the dropdown state.
Additionally, you can use `onDropdownOpen` and `onDropdownClose` callbacks
to react to dropdown state changes.

```tsx
import { Button, ComboboxPopover, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();

  return (
    <Group>
      <Button onClick={toggle}>Toggle dropdown</Button>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>Select framework</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Group>
  );
}
```


## Dropdown position

```tsx
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown above</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Dropdown width

By default, the dropdown width matches the target element. Use `comboboxProps`
to set a custom width:

```tsx
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 250, position: 'bottom-start' }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Dropdown animation

```tsx
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>With animation</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## Form submission

`ComboboxPopover` renders a hidden input with the selected value for native form submission.
Use `name` prop to set the input name. For multiple selection, values are joined with a comma
by default – use `hiddenInputValuesDivider` to change the separator.

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmitted(formData.get('framework') as string);
      }}
    >
      <Stack>
        <ComboboxPopover
          data={['React', 'Angular', 'Vue', 'Svelte']}
          value={value}
          onChange={setValue}
          name="framework"
        >
          <ComboboxPopover.Target>
            <Button variant="default" miw={200} type="button">
              {value || 'Select framework'}
            </Button>
          </ComboboxPopover.Target>
        </ComboboxPopover>

        <Button type="submit">Submit</Button>
        {submitted && <Text size="sm">Submitted value: <b>{submitted}</b></Text>}
      </Stack>
    </form>
  );
}
```



#### Props

**ComboboxPopover props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Allows deselecting the selected option by clicking it (only for single mode) |
| checkIconPosition | "left" \| "right" | - | Position of the check icon relative to the option label |
| children | React.ReactNode | - | Content of the component |
| comboboxProps | ComboboxProps | - | Props passed down to Combobox component |
| data | ComboboxData<Value> | - | Data used to generate options |
| defaultDropdownOpened | boolean | - | Uncontrolled dropdown initial opened state |
| defaultSearchValue | string | - | Default search value |
| defaultValue | Primitive \| Value[] \| null | - | Uncontrolled component default value |
| dropdownOpened | boolean | - | Controlled dropdown opened state |
| filter | OptionsFilter<Value> | - | Function based on which items are filtered and sorted |
| form | string | - | Hidden input form for form submission |
| hiddenInputProps | React.ComponentProps<"input"> | - | Props passed down to the hidden input |
| hiddenInputValuesDivider | string | - | Divider used to separate values in the hidden input value attribute |
| limit | number | - | Maximum number of options displayed at a time |
| maxDropdownHeight | string \| number | - | max-height of the dropdown |
| multiple | boolean | - | If set, multiple items can be selected at the same time |
| name | string | - | Hidden input name for form submission |
| nothingFoundMessage | React.ReactNode | - | Message displayed when no options match the search query or when there is no data |
| onChange | (value: ComboboxPopoverValue<Multiple, Value>) => void | - | Called when value changes |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onOptionSubmit | (value: Value) => void | - | Called when option is submitted from dropdown with mouse click or Enter key |
| onSearchChange | (value: string) => void | - | Called when search changes |
| renderOption | (item: ComboboxLikeRenderOptionInput<ComboboxItem<string>>) => ReactNode | - | A function to render content of the option, replaces the default content of the option |
| scrollAreaProps | ScrollAreaProps | - | Props passed down to the underlying ScrollArea component in the dropdown |
| searchValue | string | - | Controlled search value |
| searchable | boolean | - | Allows searching through options |
| selectFirstOptionOnDropdownOpen | boolean | - | If set, the first option is selected when dropdown opens |
| value | Primitive \| Value[] \| null | - | Controlled component value |
| withAlignedLabels | boolean | - | Aligns unchecked labels with the checked one |
| withCheckIcon | boolean | - | Displays check icon near the selected option label |
| withScrollArea | boolean | - | Determines whether the options should be wrapped with ScrollArea.AutoSize |