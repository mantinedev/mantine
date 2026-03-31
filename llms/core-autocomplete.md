# Autocomplete
Package: @mantine/core
Import: import { Autocomplete } from '@mantine/core';
Description: Autocomplete user input with any list of options

## Not a searchable select

`Autocomplete` is not a searchable select, it is a text input with suggestions.
Values are not enforced to be one of the suggestions – users can type anything.
If you need a searchable select, use the [Select](https://mantine.dev/llms/core-select.md) component instead.
To learn more about the differences between `Autocomplete` and `Select`, check the
[help center article](https://help.mantine.dev/q/select-autocomplete-difference).

## Usage

`Autocomplete` provides users with a list of suggestions based on the input,
however users are not limited to suggestions and can type anything.

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
```


## Controlled

The `Autocomplete` value must be a string; other types are not supported.
The `onChange` function is called with a string value as a single argument.

```tsx
import { useState } from 'react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <Autocomplete data={[]} value={value} onChange={setValue} />;
}
```

## Uncontrolled

`Autocomplete` can be used with uncontrolled forms the same way as a native `input` element.
Set the `name` attribute to include autocomplete value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `Autocomplete` with `FormData`:

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Autocomplete value:', formData.get('country'));
      }}
    >
      <Autocomplete
        label="Select your country"
        placeholder="Pick one"
        name="country"
        data={['United States', 'Canada', 'Mexico']}
        defaultValue="United States"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Select first option on change

Set the `selectFirstOptionOnChange` prop to automatically select the first option in the dropdown when the input value changes.
This feature allows users to type a value and immediately press `Enter` to select the first matching option,
without needing to press the arrow down key first.

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      selectFirstOptionOnChange
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```


## autoSelectOnBlur

Set the `autoSelectOnBlur` prop to automatically select the highlighted option when the input loses focus.
To see this feature in action: select an option with the up/down arrows, then click outside the input:

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      autoSelectOnBlur
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```


## Data prop

Data that is used in Autocomplete must be an array of strings or objects with value and label properties. You can also specify additional properties that will be available in renderOption function.

## Filtering

Autocomplete provides built-in filtering functionality. You can control filtering behavior with filter prop or implement custom filtering logic.

```tsx
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Autocomplete
      label="Your country"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
    />
  );
}
```


## Sort options

By default, options are sorted by their position in the data array. You can change this behavior
with the `filter` function:

```tsx
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
    />
  );
}
```


## Fuzzy search with fuse.js

You can implement fuzzy search using the [fuse.js](https://fusejs.io/) library to match options
even with typos or partial matches:

```tsx
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';
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
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Ember']}
      filter={optionsFilter}
    />
  );
}
```


## Large datasets

Autocomplete can handle large datasets efficiently. Consider implementing virtualization for datasets with thousands of items to improve performance.

```tsx
import { Autocomplete } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <Autocomplete
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
```


## renderOption

The `renderOption` callback allows you to customize option rendering. It is called with an option object.
The function must return a React node.

```tsx
import { Autocomplete, AutocompleteProps, Avatar, Group, Text } from '@mantine/core';

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

const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({ option }) => (
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
    <Autocomplete
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderAutocompleteOption}
      maxDropdownHeight={300}
      label="Employee of the month"
      placeholder="Search for employee"
    />
  );
}
```


## Nothing found message

The `Autocomplete` component does not support a nothing found message. It is designed to
accept any string as a value, so it does not make sense to show a nothing found message.
If you want to limit user input to suggestions, you can use a searchable [Select](https://mantine.dev/llms/core-select.md)
component instead. To learn more about the differences between `Autocomplete` and `Select`, check the
[help center article](https://help.mantine.dev/q/select-autocomplete-difference).

## Scrollable dropdown

By default, the options list is wrapped with [ScrollArea.Autosize](https://mantine.dev/llms/core-scroll-area.md).
You can control the dropdown max-height with the `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case,
you will need to change the dropdown styles with [Styles API](https://mantine.dev/llms/styles-styles-api.md).

```tsx
import { Autocomplete } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <Autocomplete
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <Autocomplete
        label="With native scroll"
        placeholder="Pick value or enter anything"
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
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

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
      ]}
    />
  );
}
```


## Inside Popover

To use `Autocomplete` inside popover, you need to set `withinPortal: false`:

```tsx
import { Popover, Button, Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Autocomplete
          label="Your favorite library"
          placeholder="Pick value or enter anything"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Clearable

Set the `clearable` prop to display the clear button in the right section. The button is not displayed
when:

* The component does not have a value
* The component is disabled
* The component is read only

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      clearable
      defaultValue="React"
      data={['React', 'Angular']}
      label="Clearable autocomplete"
      placeholder="Clearable autocomplete"
    />
  );
}
```


```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { Autocomplete, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Autocomplete
        label="clearSectionMode='both' (default)"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <Autocomplete
        label="clearSectionMode='rightSection'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <Autocomplete
        label="clearSectionMode='clear'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## Control dropdown opened state

You can control the dropdown opened state with the `dropdownOpened` prop. Additionally,
you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

```tsx
import { Autocomplete, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Autocomplete
        label="Your favorite library"
        placeholder="Pick value or enter anything"
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

Example of dropdown that is always displayed above the input:

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```


## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`,
which will be passed down to the underlying [Transition](https://mantine.dev/llms/core-transition.md) component.

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```


## Dropdown padding

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Autocomplete
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```


## Input sections

Autocomplete supports left and right sections to display icons, buttons or other content alongside the input.

```tsx
import { Autocomplete } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <Autocomplete
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Autocomplete
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
```


## Input props

Autocomplete component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. Autocomplete documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { Autocomplete } from '@mantine/core';


function Demo() {
  return (
    <Autocomplete
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Autocomplete placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```


## Read only

Set `readOnly` to make the input read only. When `readOnly` is set,
`Autocomplete` will not show suggestions and will not call the `onChange` function.

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
```


## Disabled

Set `disabled` to disable the input. When `disabled` is set,
users cannot interact with the input and `Autocomplete` will not show suggestions.

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
```



#### Props

**Autocomplete props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoSelectOnBlur | boolean | - | If set, the highlighted option is selected when the input loses focus |
| clearButtonProps | InputClearButtonProps | - | Props passed down to the clear button |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | If set, the clear button is displayed when the component has a value |
| comboboxProps | ComboboxProps | - | Props passed down to `Combobox` component |
| data | ComboboxGenericData | - | Data used to display options. Values must be unique. |
| defaultDropdownOpened | boolean | - | Uncontrolled dropdown initial opened state |
| defaultValue | string | - | Default value for uncontrolled component |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| dropdownOpened | boolean | - | Controlled dropdown opened state |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| filter | OptionsFilter<string> | - | Function based on which items are filtered and sorted |
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
| onChange | (value: string) => void | - | Called when value changes |
| onClear | () => void | - | Called when the clear button is clicked |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onOptionSubmit | (value: string) => void | - | Called when option is submitted from dropdown with mouse click or `Enter` key |
| openOnFocus | boolean | - | If set, the dropdown opens when the input receives focus |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| renderOption | RenderAutocompleteOption | - | Function to render custom option content |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed to the underlying `ScrollArea` component in the dropdown |
| selectFirstOptionOnChange | boolean | - | If set, the first option is selected when value changes, `false` by default |
| selectFirstOptionOnDropdownOpen | boolean | - | If set, the first option is selected when dropdown opens, `false` by default |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withScrollArea | boolean | - | Determines whether the options should be wrapped with `ScrollArea.AutoSize`, `true` by default |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

Autocomplete component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Autocomplete selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Autocomplete-wrapper | Root element of the Input |
| input | .mantine-Autocomplete-input | Input element |
| section | .mantine-Autocomplete-section | Left and right sections |
| root | .mantine-Autocomplete-root | Root element |
| label | .mantine-Autocomplete-label | Label element |
| required | .mantine-Autocomplete-required | Required asterisk element, rendered inside label |
| description | .mantine-Autocomplete-description | Description element |
| error | .mantine-Autocomplete-error | Error element |

**Autocomplete data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | Options was activated by keyboard | - |
| option | data-combobox-disabled | Option is disabled | - |
