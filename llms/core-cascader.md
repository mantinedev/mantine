# Cascader
Package: @mantine/core
Import: import { Cascader } from '@mantine/core';
Description: Select a path from hierarchical data with cascading columns

## Usage

`Cascader` lets users select a value from hierarchical data by drilling down through
cascading columns: picking an option in one column reveals its children in a new column
to the right. The value is an ordered path from the root option to the selected node,
for example `['asia', 'jp', 'tokyo']`.

`Cascader` is useful for large hierarchical datasets where a nested dropdown would be hard
to navigate – locations (continent → country → city), categories, organization structures, etc.

All demos on this page switch to the [flat list layout](#flat-list-layout) on small screens, so
the cascading columns and interactions like hover expand and keyboard navigation cannot be fully
tested on mobile devices – open the demos on a larger screen to try them out.

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  // Switch to a flat list on small screens
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
```


## Data prop

Data passed to the `data` prop is an array of `CascaderOption` objects:

* Each option must have a unique `value` across the whole data tree
* `label` is optional, `value` is used when it is not set
* `children` contains an array of nested options
* `disabled` prevents an option from being selected or expanded

```tsx
import { CascaderOption } from '@mantine/core';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      {
        value: 'jp',
        label: 'Japan',
        children: [{ value: 'tokyo', label: 'Tokyo' }],
      },
    ],
  },
];
```

## Value and onChange

`Cascader` value is an ordered array of option values (a path from root to node) or `null`
when nothing is selected. The `onChange` callback is called with the selected path and the
resolved chain of `CascaderOption` objects:

```tsx
import { useState } from 'react';
import { Cascader, CascaderOption } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[] | null>(['europe', 'fr', 'paris']);

  const handleChange = (path: string[] | null, options: CascaderOption[]) => {
    setValue(path);
    console.log(path, options);
  };

  return <Cascader data={data} value={value} onChange={handleChange} />;
}
```

By default, only leaf options (options without children) can be selected. Clicking a parent
option only expands the next column.

## Change on select

Set the `changeOnSelect` prop to allow selecting any option, not only leaves. When enabled,
clicking a parent option both selects its path and expands the next column, so any intermediate
level is a valid value:

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      changeOnSelect
      label="Location"
      placeholder="Pick any level"
      data={data}
    />
  );
}
```


## Close on select

`closeOnSelect` controls whether the dropdown is closed after a value is selected. When it is not
set, it defaults to the opposite of [allowDeselect](#allow-deselect): the dropdown stays open by
default (so the selection can be toggled off), unless `allowDeselect={false}` is set. Set
`closeOnSelect` explicitly to override this behavior:

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      closeOnSelect={false}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
```


## Allow deselect

By default, clicking the selected option again removes the value. Set `allowDeselect={false}` to
disable this behavior:

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      allowDeselect
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
```


## Expand trigger

By default, the next column is opened when an option is clicked. Set `expandTrigger="hover"`
to open the next column on hover instead – selecting a leaf still requires a click:

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      expandTrigger="hover"
      label="Location"
      placeholder="Hover to expand"
      data={data}
    />
  );
}
```


## Flat list layout

Cascading columns require horizontal space and are not ideal for narrow screens, which makes them
a poor fit for mobile layouts. Set `withColumns={false}` to render options as a flat list of full
paths (the same way as search results) instead of columns – this layout works well on mobile:

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      withColumns={false}
      searchable
      label="Location"
      placeholder="Pick location"
      nothingFoundMessage="Nothing found..."
      data={data}
    />
  );
}
```


The most common use case is to render columns on desktop and the flat list on mobile. Combine
`withColumns` with the [use-matches](https://mantine.dev/hooks/use-matches/) hook to switch between the two layouts
depending on the screen size. All demos on this page use this technique – resize the window to see
the layout change:

```tsx
import { Cascader, useMatches } from '@mantine/core';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return <Cascader withColumns={withColumns} data={data} />;
}
```

## Max displayed levels

Deep hierarchies can produce many columns. Use the `maxDisplayedLevels` prop (`3` by default) to
limit how many columns are displayed next to each other. When you drill deeper than the limit, the
earliest columns are replaced by the deeper ones and a control is displayed on the left. Click it
to reveal the previous levels; a control on the right then lets you return to the deeper levels:

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      maxDisplayedLevels={2}
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
```


## Searchable

Set the `searchable` prop to allow filtering options. In search mode, the columns are replaced
with a flat list of full paths that match the query:

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      searchable
      label="Location"
      placeholder="Search location"
      nothingFoundMessage="Nothing found..."
      data={data}
    />
  );
}
```


Use the `filter` prop to customize how paths are matched and `renderSearchOption` to customize
how search results are rendered:

```tsx
import { Cascader, CascaderOption } from '@mantine/core';

function Demo() {
  return (
    <Cascader
      searchable
      data={data}
      filter={(query, options: CascaderOption[]) =>
        options.some((option) => String(option.label).toLowerCase().includes(query.toLowerCase()))
      }
      renderSearchOption={(query, options) => options.map((option) => option.label).join(' → ')}
    />
  );
}
```

## Controlled search value

Use `searchValue` and `onSearchChange` props to control the search value:

```tsx
import { useState } from 'react';
import { Cascader } from '@mantine/core';

function Demo() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Cascader
      searchable
      data={data}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    />
  );
}
```

## Nothing found

Set the `nothingFoundMessage` prop to display a message when no options match the search query:

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      searchable
      label="Location"
      placeholder="Search location"
      nothingFoundMessage="Nothing found..."
      data={data}
    />
  );
}
```


## Display value

By default, the selected path is displayed in the input as option labels joined by the `separator`
(`/` by default). Use the `separator` prop to change the divider and the `formatValue` prop to
fully customize the input label:

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      separator="›"
      defaultValue={['asia', 'jp', 'tokyo']}
      formatValue={({ options }) => options.map((option) => option.label).join(' › ')}
      data={data}
    />
  );
}
```


## Column width

Use the `columnWidth` prop to set a fixed width for every column and `maxDropdownHeight` to control
the height of a column before it becomes scrollable (`260` by default):

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      columnWidth={140}
      maxDropdownHeight={200}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
```


## Custom option rendering

Use the `renderOption` prop to customize how options are rendered in columns. The function receives
the option and its column level:

```tsx
import { Badge, Cascader, CascaderOption, CascaderProps, Group, useMatches } from '@mantine/core';
import { data } from './data';

const flags: Record<string, string> = {
  jp: '🇯🇵', kr: '🇰🇷', fr: '🇫🇷', de: '🇩🇪', us: '🇺🇸', ca: '🇨🇦',
};

function countCities(option: CascaderOption): number {
  if (!option.children || option.children.length === 0) {
    return 1;
  }
  return option.children.reduce((acc, child) => acc + countCities(child), 0);
}

// Regions display the number of cities, countries display a flag, cities display nothing extra
const renderCascaderOption: CascaderProps['renderOption'] = (option, level) => (
  <Group gap="xs" justify="space-between" wrap="nowrap" flex="1">
    <Group gap={6} wrap="nowrap">
      {level === 1 && <span>{flags[option.value]}</span>}
      <span>{option.label}</span>
    </Group>
    {level === 0 && (
      <Badge size="xs" variant="light" color="gray">
        {countCities(option)} cities
      </Badge>
    )}
  </Group>
);

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      renderOption={renderCascaderOption}
      data={data}
    />
  );
}
```


## Check icon

Use the `withCheckIcon` prop to toggle the check icon on the selected option and `checkIconPosition`
to change its position (`left` or `right`):

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      checkIconPosition="left"
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
```


## Disabled options

Set the `disabled` property on an option to prevent it from being selected or expanded. Disabled
options are skipped during keyboard navigation:

```tsx
import { Cascader, CascaderOption, useMatches } from '@mantine/core';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      { value: 'jp', label: 'Japan', children: [{ value: 'tokyo', label: 'Tokyo' }] },
      { value: 'kr', label: 'South Korea', disabled: true },
    ],
  },
  { value: 'antarctica', label: 'Antarctica', disabled: true },
];

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
```


## Left and right sections

`Cascader` supports `leftSection` and `rightSection` props the same way as other inputs. These
sections are usually used to add icons:

```tsx
import { MapPinIcon } from '@phosphor-icons/react';
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      leftSectionPointerEvents="none"
      leftSection={<MapPinIcon size={16} />}
      data={data}
    />
  );
}
```


## Clearable

Set the `clearable` prop to display the clear button when a value is selected:

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      clearable
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
```


Use the `clearSectionMode` prop to control how the clear button and `rightSection` are rendered:

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      clearable
      clearSectionMode="clear"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
```


## Scrollable columns

Each column is scrollable. Use the `maxDropdownHeight` prop to control the height of a column
before it becomes scrollable and `scrollAreaProps` to pass props down to the
[ScrollArea](https://mantine.dev/llms/core-scroll-area.md) in each column:

```tsx
import { Cascader, CascaderOption } from '@mantine/core';

const cities = Array.from({ length: 30 }, (_, index) => ({
  value: `city-${index + 1}`,
  label: `City ${index + 1}`,
}));

const data: CascaderOption[] = [
  { value: 'asia', label: 'Asia', children: [{ value: 'jp', label: 'Japan', children: cities }] },
  { value: 'europe', label: 'Europe', children: [{ value: 'fr', label: 'France', children: cities }] },
];

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp']}
      maxDropdownHeight={180}
      data={data}
    />
  );
}
```


## Control dropdown opened state

Use `dropdownOpened`, `defaultDropdownOpened`, `onDropdownOpen` and `onDropdownClose` props to
control the dropdown opened state:

```tsx
import { Cascader } from '@mantine/core';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  return (
    <Cascader
      data={data}
      dropdownOpened={dropdownOpened}
      onDropdownOpen={() => setDropdownOpened(true)}
      onDropdownClose={() => setDropdownOpened(false)}
    />
  );
}
```

## Dropdown position

Use `comboboxProps` to pass props down to the underlying [Combobox](https://mantine.dev/llms/core-combobox.md) and
[Popover](https://mantine.dev/llms/core-popover.md). For example, set `position` to change the dropdown position:

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ position: 'top-start' }}
      data={data}
    />
  );
}
```


## Dropdown offset

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ offset: 0 }}
      data={data}
    />
  );
}
```


## Dropdown width

In flat list mode (`withColumns={false}`) the dropdown width can be controlled with
`comboboxProps={{ width }}`. In columns mode the dropdown is sized to the columns:

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      withColumns={false}
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ width: 220, position: 'bottom-start' }}
      data={data}
    />
  );
}
```


## Dropdown padding

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

// Dropdown padding is only applied to the flat list (withColumns={false});
// in columns mode each column manages its own padding.
function Demo() {
  return (
    <Cascader
      withColumns={false}
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ dropdownPadding: 12 }}
      data={data}
    />
  );
}
```


## Dropdown shadow

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ shadow: 'md' }}
      data={data}
    />
  );
}
```


## Dropdown animation

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
      data={data}
    />
  );
}
```


## Inside Popover

To use `Cascader` inside a `Popover`, set `comboboxProps={{ withinPortal: false }}`:

```tsx
import { Button, Cascader, Popover } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Popover width={320} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Cascader
          withColumns={false}
          label="Location"
          placeholder="Pick location"
          comboboxProps={{ withinPortal: false }}
          data={data}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Input props

Cascader component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. Cascader documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      withColumns={withColumns}
      placeholder="Pick location"
      data={data}
    />
  );
}
```


## Read only

Set `readOnly` to make the input read only. When `readOnly` is set, `Cascader` will not open the
dropdown and will not call the `onChange` function.

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      readOnly
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
```


## Disabled

Set `disabled` to disable the input. When `disabled` is set, the user cannot interact with the
input and `Cascader` will not open the dropdown.

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      disabled
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
```


## Error state

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      error="Pick a valid location"
      data={data}
    />
  );
}
```


## Success state

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      success="Looks good!"
      data={data}
    />
  );
}
```


## Loading state

Set the `loading` prop to display a loader in the right section instead of the chevron:

```tsx
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      loading
      data={data}
    />
  );
}
```


## Accessibility

`Cascader` columns are rendered as nested listboxes with `option` elements. To make the component
accessible, set the `label` prop or pass `aria-label` to the component:

```tsx
import { Cascader } from '@mantine/core';

// Set aria-label when the input does not have a visible label
function Demo() {
  return <Cascader data={data} aria-label="Pick location" />;
}
```

## Keyboard interactions


#### Props

**Cascader props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | If set, the selected value can be deselected by selecting it again |
| changeOnSelect | boolean | - | If set, any intermediate option can be selected, not only leaf options |
| checkIconPosition | "left" \| "right" | - | Position of the check icon relative to the option label |
| chevronColor | MantineColor | - | Controls the default chevron color |
| clearButtonProps | InputClearButtonProps | - | Props passed down to the clear button |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and `rightSection` are rendered |
| clearable | boolean | - | If set, the clear button is displayed when a value is selected |
| closeOnSelect | boolean | - | Determines whether the dropdown should be closed when a value is selected, defaults to `!allowDeselect` |
| columnWidth | string \| number | - | Width of each column |
| comboboxProps | Record<string, any> | - | Props passed down to the underlying `Combobox` component |
| data | CascaderOption[] | required | Hierarchical options data |
| defaultDropdownOpened | boolean | - | Uncontrolled dropdown opened state |
| defaultSearchValue | string | - | Uncontrolled search value |
| defaultValue | string[] \| null | - | Uncontrolled selected path from root to node |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| dropdownOpened | boolean | - | Controlled dropdown opened state |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| expandTrigger | "hover" \| "click" | - | Determines how the next column is opened |
| filter | (query: string, options: CascaderOption[]) => boolean | - | Custom search filter, matched against the full option path |
| formatValue | CascaderFormatValue | - | A function to format the selected path displayed in the input, should return a string |
| hiddenInputProps | React.ComponentProps<"input"> | - | Props passed down to the hidden input |
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
| maxDisplayedLevels | number | - | Maximum number of columns (levels) displayed next to each other, deeper levels replace earlier ones |
| maxDropdownHeight | string \| number | - | Max height of a column before it becomes scrollable |
| nextLevelsControlLabel | string | - | `aria-label` and `title` of the control that reveals levels hidden after the visible ones by `maxDisplayedLevels` |
| nothingFoundMessage | React.ReactNode | - | Message displayed when there are no options or search results |
| onChange | (value: string[] \| null, options: CascaderOption[]) => void | - | Called when the selected path changes with the path and the resolved option chain |
| onClear | () => void | - | Called when the clear button is clicked |
| onDropdownClose | () => void | - | Called when the dropdown closes |
| onDropdownOpen | () => void | - | Called when the dropdown opens |
| onSearchChange | (value: string) => void | - | Called when the search value changes |
| openOnFocus | boolean | - | Opens the dropdown when the input is focused in `searchable` mode |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| previousLevelsControlLabel | string | - | `aria-label` and `title` of the control that reveals levels hidden before the visible ones by `maxDisplayedLevels` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| renderOption | (option: CascaderOption, level: number) => ReactNode | - | Custom rendering of an option in columns |
| renderSearchOption | (query: string, options: CascaderOption[]) => ReactNode | - | Custom rendering of a search result row |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed down to the dropdown `ScrollArea` |
| searchValue | string | - | Controlled search value |
| searchable | boolean | - | If set, options can be searched by their flattened paths |
| separator | React.ReactNode | - | Path separator displayed in the input and search results |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| success | React.ReactNode | - | Contents of `Input.Success` component. If not set, success is not displayed. |
| successProps | InputSuccessProps & DataAttributes | - | Props passed down to the `Input.Success` component |
| value | string[] \| null | - | Controlled selected path from root to node |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withCheckIcon | boolean | - | If set, the check icon is displayed on the selected option |
| withColumns | boolean | - | Renders the dropdown as cascading columns. When `false`, options are rendered as a flat list of paths, the same way as search results (useful for narrow/mobile layouts) |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withSuccessStyles | boolean | - | Determines whether the input should have green border when the `success` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

Cascader component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Cascader selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Cascader-wrapper | Root element of the Input |
| input | .mantine-Cascader-input | Input element |
| section | .mantine-Cascader-section | Left and right sections |
| bottomSection | .mantine-Cascader-bottomSection | Bottom section element, rendered inside the input border at the bottom |
| root | .mantine-Cascader-root | Root element |
| label | .mantine-Cascader-label | Label element |
| required | .mantine-Cascader-required | Required asterisk element, rendered inside label |
| description | .mantine-Cascader-description | Description element |
| error | .mantine-Cascader-error | Error element |
| success | .mantine-Cascader-success | Success element |
| columnsList | .mantine-Cascader-columnsList | Wrapper of all cascading columns in the dropdown |
| columnsOverflow | .mantine-Cascader-columnsOverflow | Control displayed to reveal levels hidden by `maxDisplayedLevels` |
| column | .mantine-Cascader-column | Single cascading column |
| columnScroll | .mantine-Cascader-columnScroll | Scrollable options area of a column |
| columnOption | .mantine-Cascader-columnOption | Option control inside a column |
| columnOptionLabel | .mantine-Cascader-columnOptionLabel | Label of the column option |
| columnOptionIcon | .mantine-Cascader-columnOptionIcon | Expand chevron of the column option |
| columnOptionCheck | .mantine-Cascader-columnOptionCheck | Check icon displayed on the selected leaf option |
| columnEmpty | .mantine-Cascader-columnEmpty | Empty state of a column |
| flatOption | .mantine-Cascader-flatOption | Option content in the flat list (search results / `withColumns={false}`) |

**Cascader data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| columnOption | data-active | Option is highlighted in the column that is currently being navigated | - |
| columnOption | data-in-path | Option is highlighted in one of the previous (ancestor) columns | - |
| columnOption | data-selected | Option is the selected value | - |
| columnOption | data-disabled | Option is disabled | - |
