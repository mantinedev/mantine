# MultiSelect
Package: @mantine/core
Import: import { MultiSelect } from '@mantine/core';
Description: Custom searchable multi select

## Usage

`MultiSelect` provides a way to enter multiple values.
`MultiSelect` is similar to [TagsInput](https://mantine.dev/llms/core-tags-input.md), but it does not allow entering custom values.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
```


## Controlled

The `MultiSelect` value must be an array of strings; other types are not supported.
The `onChange` function is called with an array of strings as a single argument.

```tsx
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <MultiSelect data={[]} value={value} onChange={setValue} />;
}
```

## Clearable

Set the `clearable` prop to display the clear button in the right section. The button is not displayed
when:

* The component does not have a value
* The component is disabled
* The component is read only

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue={['React']}
      clearable
    />
  );
}
```


```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { MultiSelect, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <MultiSelect
        label="clearSectionMode='both' (default)"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <MultiSelect
        label="clearSectionMode='rightSection'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <MultiSelect
        label="clearSectionMode='clear'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## Searchable

Set the `searchable` prop to allow filtering options by user input:

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
```


## Controlled search value

You can control the search value with the `searchValue` and `onSearchChange` props:

```tsx
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <MultiSelect
      searchable
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      data={[]}
    />
  );
}
```

## Nothing found

Set the `nothingFoundMessage` prop to display a given message when no options match the search query
or there is no data available. If the `nothingFoundMessage` prop is not set, the `MultiSelect` dropdown will be hidden.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
```


## Checked option icon

Set `checkIconPosition` prop to `left` or `right` to control position of check icon in active option.
To remove the check icon, set `withCheckIcon={false}`. To align unchecked labels with checked ones, set `withAlignedLabels` prop.

```tsx
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
       withCheckIcon={true} withAlignedLabels={false} checkIconPosition="left"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
```


## Max selected values

You can limit the number of selected values with the `maxValues` prop. This will not allow adding more values
once the limit is reached.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
```


## Hide selected options

To remove selected options from the list of available options, set the `hidePickedOptions` prop:

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
```


## Data prop

Data that is used in MultiSelect must be an array of strings or objects with value and label properties. You can also specify additional properties that will be available in renderOption function.

## Value type

`MultiSelect` supports primitive values (strings, numbers, booleans) as value type. `MultiSelect` automatically
infers the value type. If you want to set the value type explicitly, pass type argument:

```tsx
import { MultiSelect } from '@mantine/core';

type MultiSelectValue = 'React' | 'Angular' | 'Svelte' | number;

function Demo() {
  return <MultiSelect<MultiSelectValue> data={['React', 'Angular', 'Svelte', 100]} />;
}
```

## Filtering

MultiSelect provides built-in filtering functionality. You can control filtering behavior with filter prop or implement custom filtering logic.

```tsx
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
```


## Sort options

By default, options are sorted by their position in the data array. You can change this behavior
with the `filter` function:

```tsx
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
```


## Fuzzy search with fuse.js

You can implement fuzzy search using the [fuse.js](https://fusejs.io/) library to match options
even with typos or partial matches:

```tsx
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';
import Fuse from 'fuse.js';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  if (!search.trim()) {
    return options;
  }

  const fuse = new Fuse(options as ComboboxItem[], {
    keys: ['label'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  return fuse.search(search).map((result) => result.item);
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States', 'Germany', 'France']}
      filter={optionsFilter}
      searchable
    />
  );
}
```


## Large datasets

MultiSelect can handle large datasets efficiently. Consider implementing virtualization for datasets with thousands of items to improve performance.

```tsx
import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
```


## renderOption

The `renderOption` callback allows you to customize option rendering. It is called with the option object and
checked state. The function must return a React node.

```tsx
import { MultiSelect, MultiSelectProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <MultiSelect
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderMultiSelectOption}
      maxDropdownHeight={300}
      label="Employees of the month"
      placeholder="Search for employee"
      hidePickedOptions
      searchable
    />
  );
}
```


## renderPill

The `renderPill` callback allows you to customize pill rendering. The function receives the option (that was passed to data), value, onRemove and disabled props. It must return a React node.

```tsx
import { MultiSelect, Pill, Avatar } from '@mantine/core';

const users = [
  { value: 'Emily Johnson', label: 'Emily Johnson', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png' },
  { value: 'Ava Rodriguez', label: 'Ava Rodriguez', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png' },
  { value: 'Olivia Chen', label: 'Olivia Chen', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png' },
  { value: 'Ethan Barnes', label: 'Ethan Barnes', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png' },
  { value: 'Mason Taylor', label: 'Mason Taylor', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png' },
];

const usersMap = new Map(users.map((user) => [user.value.toString(), user]));

function Demo() {
  return (
    <MultiSelect
      data={users}
      label="Candidates"
      placeholder="Select candidates"
      defaultValue={['Emily Johnson', 'Ava Rodriguez']}
      renderPill={({ option, onRemove }) => {
        const user = usersMap.get(option?.value.toString());
        return (
          <Pill withRemoveButton onRemove={onRemove}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar src={user?.image} size={16} />
              {option?.label}
            </div>
          </Pill>
        );
      }}
    />
  );
}
```


## Scrollable dropdown

By default, the options list is wrapped with [ScrollArea.Autosize](https://mantine.dev/llms/core-scroll-area.md).
You can control the dropdown max-height with the `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case,
you will need to change the dropdown styles with [Styles API](https://mantine.dev/llms/styles-styles-api.md).

```tsx
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
```


## Group options

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
```


## Disabled options

When an option is disabled, it cannot be selected and is ignored in keyboard navigation.
Note that the user can still enter a disabled option as a value. If you want to prohibit certain values,
use a controlled component and filter them out in the `onChange` function.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
```


## Inside Popover

To use `MultiSelect` inside popover, you need to set `withinPortal: false`:

```tsx
import { Popover, Button, MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick values"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Control dropdown opened state

You can control the dropdown opened state with the `dropdownOpened` prop. Additionally,
you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

```tsx
import { MultiSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
```


## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.
You can change this behavior by setting the `position` and `middlewares` props, which are passed down to the
underlying [Popover](https://mantine.dev/llms/core-popover.md) component.

Example of a dropdown that is always displayed above the input:

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```


## Dropdown width

To change the dropdown width, set the `width` prop in `comboboxProps`. By default,
the dropdown width is equal to the input width.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
```


## Dropdown offset

To change the dropdown offset, set the `offset` prop in `comboboxProps`:

```tsx
// Demo.tsx
import { MultiSelect } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}

// Demo.module.css
.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
```


## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`,
which will be passed down to the underlying [Transition](https://mantine.dev/llms/core-transition.md) component.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```


## Dropdown padding

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <MultiSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
```


## Dropdown shadow

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```


## Input sections

MultiSelect supports left and right sections to display icons, buttons or other content alongside the input.

```tsx
import { MultiSelect } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <MultiSelect
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
      <MultiSelect
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
    </>
  );
}
```


## Input props

MultiSelect component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. MultiSelect documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```


## Read only

Set `readOnly` to make the input read-only. When `readOnly` is set,
`MultiSelect` will not show suggestions and will not call the `onChange` function.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
```


## Disabled

Set `disabled` to disable the input. When `disabled` is set,
the user cannot interact with the input and `MultiSelect` will not show suggestions.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
```


## Backspace key

When the search input is empty and the user presses the `Backspace` key, the last selected item is removed. This behavior is built-in and cannot be disabled.


#### Props

**MultiSelect props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checkIconPosition | "left" \| "right" | - | Position of the checkmark icon shown next to selected options in the dropdown |
| chevronColor | MantineColor | - | Controls color of the default chevron |
| clearButtonProps | InputClearButtonProps | - | Props passed down to the clear button |
| clearSearchOnChange | boolean | - | Clear search value when item is selected |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | When enabled, displays a clear button to remove all selected values (hidden when component is empty, disabled, or read-only) |
| comboboxProps | ComboboxProps | - | Props passed down to `Combobox` component |
| data | ComboboxData<Value> | - | Data used to generate options. Values must be unique, otherwise an error will be thrown and component will not render. |
| defaultDropdownOpened | boolean | - | Uncontrolled dropdown initial opened state |
| defaultSearchValue | string | - | Default search value |
| defaultValue | Value[] | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| dropdownOpened | boolean | - | Controlled dropdown opened state |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| filter | OptionsFilter<Value> | - | Function based on which items are filtered and sorted |
| hiddenInputProps | Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value"> | - | Props passed down to the hidden input |
| hiddenInputValuesDivider | string | - | Divider used to separate values in the hidden input `value` attribute |
| hidePickedOptions | boolean | - | When enabled, selected options are hidden from the dropdown list |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| limit | number | - | Maximum number of options displayed at a time, `Infinity` by default |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| maxDropdownHeight | string \| number | - | `max-height` of the dropdown, only applicable when `withScrollArea` prop is `true`, `250` by default |
| maxValues | number | - | Maximum number of values, no limit if not set |
| nothingFoundMessage | React.ReactNode | - | Message displayed when no options match the search query (when searchable is enabled) or when the data array is empty. If not set, the dropdown will be hidden instead. |
| onChange | (value: Value[]) => void | - | Called when value changes |
| onClear | () => void | - | Called when the clear button is clicked |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onMaxValues | () => void | - | Called when user attemps to select more values than allowed |
| onOptionSubmit | (value: Value) => void | - | Called when option is submitted from dropdown with mouse click or `Enter` key |
| onRemove | (value: Value) => void | - | Called with `value` of the removed item |
| onSearchChange | (value: string) => void | - | Called when search changes |
| openOnFocus | boolean | - | Controls whether dropdown opens when the input receives focus |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| renderOption | (item: ComboboxLikeRenderOptionInput<ComboboxItem<Value>>) => ReactNode | - | A function to render content of the option, replaces the default content of the option |
| renderPill | (props: ComboboxRenderPillInput<Value>) => ReactNode | - | A function to render content of the pill |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed down to the underlying `ScrollArea` component in the dropdown |
| searchValue | string | - | Controlled search value |
| searchable | boolean | - | Allows searching through options by user input |
| selectFirstOptionOnChange | boolean | - | If set, the first option is selected when value changes, `false` by default |
| selectFirstOptionOnDropdownOpen | boolean | - | If set, the first option is selected when dropdown opens, `false` by default |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| value | Value[] | - | Controlled component value |
| withAlignedLabels | boolean | - | If set, unchecked labels are aligned with checked ones |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withCheckIcon | boolean | - | If set, the check icon is displayed near the selected option label |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withScrollArea | boolean | - | Determines whether the options should be wrapped with `ScrollArea.AutoSize`, `true` by default |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

MultiSelect component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MultiSelect selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-MultiSelect-wrapper | Root element of the Input |
| input | .mantine-MultiSelect-input | Input element |
| section | .mantine-MultiSelect-section | Left and right sections |
| root | .mantine-MultiSelect-root | Root element |
| label | .mantine-MultiSelect-label | Label element |
| required | .mantine-MultiSelect-required | Required asterisk element, rendered inside label |
| description | .mantine-MultiSelect-description | Description element |
| error | .mantine-MultiSelect-error | Error element |
| pill | .mantine-MultiSelect-pill | Value pill |
| inputField | .mantine-MultiSelect-inputField | Input field |
| pillsList | .mantine-MultiSelect-pillsList | List of pills, also contains input field |

**MultiSelect data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | Options was activated by keyboard | - |
| option | data-combobox-disabled | Option is disabled | - |
