# TreeSelect
Package: @mantine/core
Import: import { TreeSelect } from '@mantine/core';
Description: Select with hierarchical tree data

## Usage

`TreeSelect` allows picking one or more values from hierarchical tree data.
It supports three selection modes: single, multiple, and checkbox (with parent-child cascade).

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
    />
  );
}
```


## Data prop

Data passed to the `data` prop must follow the same rules as the [Tree](https://mantine.dev/llms/core-tree.md) component:

* Data must be an array of `TreeNodeData` objects
* Each node must have unique `value` and `label` keys
* Each node can have a `children` key with an array of child nodes

```tsx
import { TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    value: 'fruits',
    label: 'Fruits',
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  { value: 'milk', label: 'Milk' },
];
```

## Selection modes

`TreeSelect` supports three selection modes controlled by the `mode` prop:

* `single` (default) – single value selection, renders as an input
* `multiple` – multiple value selection, renders as pills
* `checkbox` – checkbox selection with parent-child cascade, renders as pills

### Multiple mode

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite items"
      placeholder="Pick values"
      data={data}
      mode="multiple"
      defaultExpandAll
    />
  );
}
```


### Checkbox mode

In checkbox mode, checking a parent node automatically checks all its children.
Unchecking a parent unchecks all children. If only some children are checked,
the parent shows an indeterminate state.

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Select categories"
      placeholder="Pick values"
      data={data}
      mode="checkbox"
      defaultExpandAll
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { TreeSelect } from '@mantine/core';

// Single mode
function SingleDemo() {
  const [value, setValue] = useState<string | null>(null);
  return <TreeSelect data={[]} value={value} onChange={setValue} />;
}

// Multiple or checkbox mode
function MultipleDemo() {
  const [value, setValue] = useState<string[]>([]);
  return <TreeSelect data={[]} mode="multiple" value={value} onChange={setValue} />;
}
```

## Searchable

Set the `searchable` prop to allow filtering options by user input.
When searching, matching nodes and their ancestors are shown:

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      searchable
    />
  );
}
```


## Nothing found

Set the `nothingFoundMessage` prop to display a given message when no options match the search query
or there is no data available:

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
```


## Clearable

Set the `clearable` prop to display the clear button in the right section:

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      defaultValue="iphone"
      defaultExpandedValues={['electronics', 'phones']}
      clearable
    />
  );
}
```


## Expand on click

Set the `expandOnClick` prop to also toggle expansion when clicking a parent node
(in addition to the chevron). Behavior depends on the selection mode:

* `single` and `multiple` – clicking a parent only expands/collapses it. Only leaf nodes can be selected.
* `checkbox` – clicking a parent both toggles its checked state and expands it.

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      expandOnClick
    />
  );
}
```


## Connecting lines

`TreeSelect` renders connecting lines between parent and child nodes by default.
Set `withLines={false}` to disable them:

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Without connecting lines"
      placeholder="Pick value"
      data={data}
      defaultExpandAll
      withLines={false}
    />
  );
}
```


## Check strictly

Set `checkStrictly` to disable parent-child cascade in checkbox mode.
Each node's checked state becomes fully independent:

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Select items"
      placeholder="Pick values"
      data={data}
      mode="checkbox"
      checkStrictly
      defaultExpandAll
    />
  );
}
```


## Checked strategy

The `checkedStrategy` prop controls which checked nodes appear in the value and pills
in checkbox mode:

* `child` (default) – only leaf nodes appear in the value
* `all` – all checked nodes (parents and children) appear in the value
* `parent` – only the topmost fully-checked parents appear in the value

```tsx
import { useState } from 'react';
import { Stack, TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  const [childValue, setChildValue] = useState<string[]>([]);
  const [allValue, setAllValue] = useState<string[]>([]);
  const [parentValue, setParentValue] = useState<string[]>([]);

  return (
    <Stack>
      <TreeSelect
        label="checkedStrategy: child (default)"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="child"
        defaultExpandAll
        value={childValue}
        onChange={setChildValue}
      />
      <TreeSelect
        label="checkedStrategy: all"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="all"
        defaultExpandAll
        value={allValue}
        onChange={setAllValue}
      />
      <TreeSelect
        label="checkedStrategy: parent"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="parent"
        defaultExpandAll
        value={parentValue}
        onChange={setParentValue}
      />
    </Stack>
  );
}
```


## Max values

Set the `maxValues` prop to limit the number of selected values in multiple and checkbox modes:

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Pick up to 3 items"
      placeholder="Pick values"
      data={data}
      mode="multiple"
      maxValues={3}
      defaultExpandAll
    />
  );
}
```


## renderNode

The `renderNode` callback allows you to customize node rendering in the dropdown.
It is called with an object containing `node`, `level`, `expanded`, `hasChildren`,
`selected`, `checked`, and `indeterminate` properties:

```tsx
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, Text, TreeSelect, TreeSelectProps } from '@mantine/core';
import { data } from './data';

const renderTreeNode: TreeSelectProps['renderNode'] = ({ node, hasChildren, expanded }) => (
  <Group gap="xs">
    {hasChildren ? (
      expanded ? (
        <FolderOpenIcon color="var(--mantine-color-yellow-9)" size={16} />
      ) : (
        <FolderSimpleIcon color="var(--mantine-color-yellow-9)" size={16} />
      )
    ) : (
      <FileTextIcon size={16} />
    )}
    <Text size="sm">{node.label}</Text>
  </Group>
);

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      renderNode={renderTreeNode}
      defaultExpandAll
    />
  );
}
```


## Scrollable dropdown

By default, the options list is wrapped with [ScrollArea.Autosize](https://mantine.dev/llms/core-scroll-area.md).
You can control the dropdown max-height with the `maxDropdownHeight` prop:

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      defaultExpandAll
      maxDropdownHeight={200}
    />
  );
}
```


## Control dropdown opened state

You can control the dropdown opened state with the `dropdownOpened` prop. Additionally,
you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

```tsx
import { TreeSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { data } from './data';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <TreeSelect
        label="Your favorite item"
        placeholder="Pick value"
        data={data}
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
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```


## Dropdown width

To change the dropdown width, set the `width` prop in `comboboxProps`. By default,
the dropdown width is equal to the input width.

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
```


## Dropdown offset

To change the dropdown offset, set the `offset` prop in `comboboxProps`:

```tsx
// Demo.tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
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
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```


## Dropdown padding

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <>
      <TreeSelect
        label="Zero padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <TreeSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
```


## Dropdown shadow

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```


## Keyboard navigation

`TreeSelect` supports the following keyboard interactions when the dropdown is open:

* `ArrowRight` – expand the highlighted parent node
* `ArrowLeft` – collapse the highlighted parent node, or move to its parent
* `ArrowUp` / `ArrowDown` – move between options
* `Enter` – select the highlighted option

## Expand state

You can control the expanded state of nodes:

```tsx
import { TreeSelect } from '@mantine/core';

// Expand specific nodes by default
<TreeSelect data={data} defaultExpandedValues={['fruits', 'vegetables']} />

// Expand all nodes by default
<TreeSelect data={data} defaultExpandAll />

// Controlled expanded state
<TreeSelect
  data={data}
  expandedValues={expandedValues}
  onExpandedChange={setExpandedValues}
/>
```

## Input sections

TreeSelect supports left and right sections to display icons, buttons or other content alongside the input.

```tsx
import { TreeSelect } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';
import { data } from './data';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <TreeSelect
        data={data}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite item"
        placeholder="Your favorite item"
      />
      <TreeSelect
        mt="md"
        data={data}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite item"
        placeholder="Your favorite item"
      />
    </>
  );
}
```


## Input props

TreeSelect component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. TreeSelect documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';


function Demo() {
  return (
    <TreeSelect
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Pick value"
      data={data}
    />
  );
}
```


## Read only

Set `readOnly` to make the input read only. When `readOnly` is set,
`TreeSelect` will not show suggestions and will not call the `onChange` function.

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      defaultValue="iphone"
      readOnly
    />
  );
}
```


## Disabled

Set `disabled` to disable the input. When `disabled` is set,
the user cannot interact with the input and `TreeSelect` will not show suggestions.

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      disabled
    />
  );
}
```


## Error state

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <>
      <TreeSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={data}
      />
      <TreeSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid value"
        data={data}
      />
    </>
  );
}
```


## Success state

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <TreeSelect label="Tree Select" placeholder="Tree Select" data={data} success="Looks good!" />;
}
```


## Accessibility

TreeSelect provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

To set `aria-label` on the clear button, use `clearButtonProps`. Note that this is required
only when `clearable` is set.

```tsx
import { TreeSelect } from '@mantine/core';

function Demo() {
  return (
    <TreeSelect
      data={[]}
      clearable
      clearButtonProps={{
        'aria-label': 'Clear input',
      }}
    />
  );
}
```


#### Props

**TreeSelect props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Allows deselecting in single mode |
| checkStrictly | boolean | - | Disables parent-child cascade in checkbox mode |
| checkedStrategy | CheckedStrategy | - | Controls which checked nodes appear in value/pills in checkbox mode |
| chevronAriaLabels | TreeSelectChevronAriaLabels | - | aria-label values for the expand/collapse chevron button |
| chevronColor | MantineColor | - | Controls the default chevron color |
| clearButtonProps | InputClearButtonProps | - | Props for the clear button |
| clearSearchOnChange | boolean | - | Clear search on selection change |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | Shows clear button |
| comboboxProps | Record<string, any> | - | Props passed to the underlying Combobox |
| data | TreeNodeData[] | required | Tree data |
| defaultDropdownOpened | boolean | - | Default dropdown state |
| defaultExpandAll | boolean | - | Expand all nodes by default |
| defaultExpandedValues | string[] | - | Default expanded node values |
| defaultSearchValue | string | - | Default search value |
| defaultValue | string \| string[] \| null | - | Default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| dropdownOpened | boolean | - | Controlled dropdown state |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| expandOnClick | boolean | - | Also toggle expand when clicking a parent node (not just the chevron). In `single` and `multiple` modes, parent clicks only expand; only leaves can be selected. In `checkbox` mode, parent clicks both check and expand. |
| expandedValues | string[] | - | Controlled expanded state |
| filter | (query: string, node: TreeNodeData) => boolean | - | Custom filter function |
| hiddenInputProps | React.ComponentProps<"input"> | - | Props for the hidden input |
| hiddenInputValuesDivider | string | - | Divider for hidden input values |
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
| maxDisplayedValues | number | - | Maximum displayed pills before "+N more" |
| maxDisplayedValuesContent | ReactNode \| ((overflow: number) => ReactNode) | - | Content shown when values overflow maxDisplayedValues |
| maxDropdownHeight | string \| number | - | Max dropdown height |
| maxValues | number | - | Maximum selectable values (multiple/checkbox mode) |
| mode | TreeSelectMode | - | Selection mode: 'single', 'multiple', or 'checkbox' (with cascade) |
| nothingFoundMessage | React.ReactNode | - | Message when no nodes match search |
| onChange | (value: TreeSelectValue<Mode>) => void | - | Called when value changes |
| onClear | () => void | - | Called when clear button is clicked |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onExpandedChange | (values: string[]) => void | - | Called when expanded state changes |
| onRemove | (value: string) => void | - | Called with removed value in multiple/checkbox mode |
| onSearchChange | (value: string) => void | - | Called when search changes |
| openOnFocus | boolean | - | Opens dropdown on focus (searchable mode) |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| renderNode | (payload: TreeSelectRenderNodePayload) => ReactNode | - | Custom node rendering in the dropdown |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props for the ScrollArea in the dropdown |
| searchValue | string | - | Controlled search value |
| searchable | boolean | - | Enables search filtering |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| success | React.ReactNode | - | Contents of `Input.Success` component. If not set, success is not displayed. |
| successProps | InputSuccessProps & DataAttributes | - | Props passed down to the `Input.Success` component |
| value | string \| string[] \| null | - | Controlled value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withLines | boolean | - | Show tree connection lines between parent and child nodes |
| withSuccessStyles | boolean | - | Determines whether the input should have green border when the `success` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

TreeSelect component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TreeSelect selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-TreeSelect-wrapper | Root element of the Input |
| input | .mantine-TreeSelect-input | Input element |
| section | .mantine-TreeSelect-section | Left and right sections |
| bottomSection | .mantine-TreeSelect-bottomSection | Bottom section element, rendered inside the input border at the bottom |
| root | .mantine-TreeSelect-root | Root element |
| label | .mantine-TreeSelect-label | Label element |
| required | .mantine-TreeSelect-required | Required asterisk element, rendered inside label |
| description | .mantine-TreeSelect-description | Description element |
| error | .mantine-TreeSelect-error | Error element |
| success | .mantine-TreeSelect-success | Success element |
| pill | .mantine-TreeSelect-pill | Value pill |
| inputField | .mantine-TreeSelect-inputField | Input field |
| pillsList | .mantine-TreeSelect-pillsList | List of pills, also contains input field |

**TreeSelect data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | Options was activated by keyboard | - |
| option | data-combobox-disabled | Option is disabled | - |
