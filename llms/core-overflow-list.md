# OverflowList
Package: @mantine/core
Import: import { OverflowList } from '@mantine/core';
Description: Hide items that do not fit in a container and display them as a single collapsed item

## Usage

```tsx
// OverflowListDemo.tsx
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}

// data.ts
export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
```


## Data type

`OverflowList` data prop supports an array of any type. By default, `OverflowList` infers
data type from the data array automatically. To specify data type explicitly, pass
generic type argument to the component:

```tsx
import { OverflowList } from '@mantine/core';

function Demo() {
  return (
    <OverflowList<{ value: string; label: string }>
      data={[{ value: '1', label: 'Item 1' }]}
      renderItem={(item) => <div key={item.value}>{item.label}</div>}
      renderOverflow={(items) => <div>+{items.length} more</div>}
    />
  );
}
```

## Max rows

Use `maxRows` to limit visible rows count. By default, 1 row is visible.

```tsx
// OverflowListDemo.tsx
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: 500 }}>
      <OverflowList
        data={data}
        gap={4}
        maxRows={2}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}

// data.ts
export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
```


## Max visible items

Use `maxVisibleItems` to limit visible items count. By default, there is no limit.

```tsx
// OverflowListDemo.tsx
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        maxVisibleItems={5}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}

// data.ts
export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
```


## Example: overflow with hover card

You can use any React components in `renderOverflow` function. Example
of displaying collapsed items inside [HoverCard](https://mantine.dev/llms/core-hover-card.md):

```tsx
// OverflowListDemo.tsx
import { Badge, Center, HoverCard, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
        renderOverflow={(items) => (
          <Center>
            <HoverCard>
              <HoverCard.Target>
                <Badge>+{items.length} more</Badge>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                {items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </HoverCard.Dropdown>
            </HoverCard>
          </Center>
        )}
      />
    </div>
  );
}

// data.ts
export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
```



#### Props

**OverflowList props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | T[] | required | Array of items to display |
| gap | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem |
| maxRows | number | - | Number of rows to display |
| maxVisibleItems | number | - | Maximum number of visible items |
| renderItem | (item: T, index: number) => ReactNode | required | Function to render item |
| renderOverflow | (items: T[]) => ReactNode | required | Function to render hidden items |


#### Styles API

OverflowList component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**OverflowList selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-OverflowList-root | Root element |

**OverflowList CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --ol-gap | Controls gap between items |
