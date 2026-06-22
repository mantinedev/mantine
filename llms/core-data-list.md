# DataList
Package: @mantine/core
Import: import { DataList } from '@mantine/core';
Description: Display label-value pairs as a description list

## Usage

`DataList` component renders a description list (`dl`) element with label-value pairs.
It uses semantic `dt` and `dd` HTML elements.

```tsx
import { DataList } from '@mantine/core';

const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
];

function Demo() {
  return (
    <DataList size="md" orientation="vertical" withDivider={false}>
      {data.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList>
  );
}
```


## With divider

Set `withDivider` prop to add a border between items:

```tsx
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList withDivider>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
```


## Vertical orientation

Set `orientation="vertical"` to stack label on top of value within each item:

```tsx
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList orientation="vertical" withDivider>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
```



#### Props

**DataList props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | DataList.Item components |
| gap | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set gap between items |
| labelWidth | MinWidth<string \| number> | - | Controls min-width of the label (dt) element, any valid CSS value |
| orientation | "horizontal" \| "vertical" | - | Controls arrangement of label and value within each item. `horizontal` renders label and value side by side, `vertical` stacks label on top of value |
| size | MantineSize | - | Controls `font-size` and `line-height` |
| withDivider | boolean | - | Adds border between items |


#### Styles API

DataList component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DataList selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-DataList-root | Root `dl` element |
| item | .mantine-DataList-item | DataList.Item root element |
| itemLabel | .mantine-DataList-itemLabel | DataList.ItemLabel `dt` element |
| itemValue | .mantine-DataList-itemValue | DataList.ItemValue `dd` element |

**DataList CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --data-list-fz | Controls `font-size` |
| root | --data-list-lh | Controls `line-height` |
| root | --data-list-gap | Controls gap between items |
| root | --data-list-label-width | Controls `min-width` of `DataList.ItemLabel` |

**DataList data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-orientation | - | Value of `orientation` prop |
| root | data-with-divider | `withDivider` prop is set | - |
