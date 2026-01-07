# List
Package: @mantine/core
Import: import { List } from '@mantine/core';
Description: Display ordered or unordered list

## Usage

#### Example: configurator

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List>
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

You can replace list bullets with icon. To do so provide following props:

* `icon` on List component will be used as default icon for all list elements
* `icon` on List.Item component will override context icon from List
* `spacing` – spacing between list items from theme or any valid CSS value to set spacing, defaults to `0`
* `center` – center item content with icon
* `size` – set font size from theme

#### Example: icon

```tsx
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={16} />
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
            <IconCircleDashed size={16} />
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

Set `withPadding` prop to offset nested lists and `listStyleType` to control bullet type:

#### Example: nested

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
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



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| center | boolean | - | Determines whether items must be centered with their icon |
| children | React.ReactNode | - | <code>List.Item</code> components |
| icon | React.ReactNode | - | Icon to replace list item dot |
| listStyleType | ListStyleType | - | Controls <code>list-style-type</code>, by default inferred from <code>type</code> |
| size | MantineSize | - | Controls <code>font-size</code> and <code>line-height</code> |
| spacing | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value to set spacing between items |
| type | "ordered" | "unordered" | - | List type |
| withPadding | boolean | - | Determines whether list items should be offset with padding |


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
| root | data-with-padding | - | - |
| item | data-centered | - | - |
| item | data-with-icon | - | - |