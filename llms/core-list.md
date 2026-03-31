# List
Package: @mantine/core
Import: import { List } from '@mantine/core';
Description: Display ordered or unordered list

## Usage

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List type="unordered" size="md" withPadding={false}>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}
```


## With icons

You can replace list bullets with an icon. To do so, provide the following props:

* `icon` on the List component will be used as the default icon for all list elements
* `icon` on the List.Item component will override the context icon from List
* `spacing` – spacing between list items from the theme or any valid CSS value to set spacing, defaults to `0`
* `center` – center item content with the icon
* `size` – set font size from the theme

```tsx
import { List, ThemeIcon } from '@mantine/core';
import { CheckCircleIcon, CircleDashedIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <CheckCircleIcon size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <CircleDashedIcon size={16} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
```


## Nested lists

Set the `withPadding` prop to offset nested lists and `listStyleType` to control the bullet type:

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Even more nested</List.Item>
              <List.Item>Even more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}
```


## Ordered list numbering

### Start from specific number

Use the `start` prop to begin numbering from a specific value:

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List type="ordered" start={5}>
      <List.Item>This is item #5</List.Item>
      <List.Item>This is item #6</List.Item>
      <List.Item>This is item #7</List.Item>
      <List.Item>This is item #8</List.Item>
    </List>
  );
}
```


### Reversed numbering

Use the `reversed` prop to create countdown lists:

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List type="ordered" reversed>
      <List.Item>This is item #3</List.Item>
      <List.Item>This is item #2</List.Item>
      <List.Item>This is item #1</List.Item>
    </List>
  );
}
```


### Custom item values

Use the `value` prop on individual `List.Item` components to set specific numbers:

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List type="ordered">
      <List.Item>First item</List.Item>
      <List.Item value={5}>This item is #5</List.Item>
      <List.Item>This item is #6 (continues from previous)</List.Item>
      <List.Item value={10}>This item is #10</List.Item>
      <List.Item>This item is #11</List.Item>
    </List>
  );
}
```



#### Props

**List props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| center | boolean | - | Vertically centers list items with their icons |
| children | React.ReactNode | - | `List.Item` components |
| icon | React.ReactNode | - | Icon to replace default list markers. Applied to all items unless overridden on individual List.Item components |
| listStyleType | ListStyleType | - | Controls CSS `list-style-type` property. Overrides the default list marker style based on list type |
| reversed | boolean | - | Reverses the order of list items (only works with type="ordered") |
| size | MantineSize | - | Controls `font-size` and `line-height` |
| spacing | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set spacing between items |
| start | number | - | Starting value for ordered list numbering (only works with type="ordered") |
| type | "ordered" \| "unordered" | - | List type |
| withPadding | boolean | - | Adds extra horizontal padding to the list, useful for nested lists |

**List.Item props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Item content |
| icon | React.ReactNode | - | Icon to replace item bullet |


#### Styles API

List component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**List selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-List-root | Root element |
| item | .mantine-List-item | ListItem root element |
| itemIcon | .mantine-List-itemIcon | ListItem icon |
| itemLabel | .mantine-List-itemLabel | ListItem content |
| itemWrapper | .mantine-List-itemWrapper | ListItem wrapper element, container, icon and content |

**List CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --list-fz | Controls `font-size` |
| root | --list-lh | Controls `line-height` |
| root | --list-spacing | Controls spacing between items |

**List data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-padding | `withPadding` prop is set | - |
| item | data-centered | `center` prop is set on List component | - |
| item | data-with-icon | `icon` prop is set on ListItem component | - |
