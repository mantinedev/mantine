# Breadcrumbs
Package: @mantine/core
Import: import { Breadcrumbs } from '@mantine/core';
Description: Separates list of react nodes with given separator

## Usage

`Breadcrumbs` component accepts any number of React nodes as children
and adds a given separator (defaults to `/`) between them:

#### Example: usage

```tsx
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | React nodes that should be separated with <code>separator</code> |
| separator | React.ReactNode | - | Separator between children |
| separatorMargin | MantineSpacing | - | Controls spacing between separator and breadcrumb |


#### Styles API

Breadcrumbs component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Breadcrumbs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Breadcrumbs-root | Root element |
| separator | .mantine-Breadcrumbs-separator | Separator between children |
| breadcrumb | .mantine-Breadcrumbs-breadcrumb | Breadcrumb item |

**Breadcrumbs CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --bc-separator-margin | Control left and right `margin` of separator |