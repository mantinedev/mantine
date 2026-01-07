# Rating
Package: @mantine/core
Import: import { Rating } from '@mantine/core';
Description: Pick and display rating

## Usage

#### Example: configurator

```tsx
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2} />
}
```


## Controlled

```tsx
import { useState } from 'react';
import { Rating } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(0);
  return <Rating value={value} onChange={setValue} />;
}
```

## Read only

#### Example: readOnly

```tsx
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
```


## Fractions

#### Example: fractions

```tsx
import { Rating, Group, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Group>
        <div>Fractions: 2</div>
        <Rating fractions={2} defaultValue={1.5} />
      </Group>
      <Group>
        <div>Fractions: 3</div>
        <Rating fractions={3} defaultValue={2.33333333} />
      </Group>
      <Group>
        <div>Fractions: 4</div>
        <Rating fractions={4} defaultValue={3.75} />
      </Group>
    </Stack>
  );
}
```


## Custom symbol

#### Example: symbol

```tsx
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size={16} />} fullSymbol={<IconMoon size={16} />} />;
}
```


## Symbols for each item

#### Example: customSymbol

```tsx
import { Rating } from '@mantine/core';
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

const getIconStyle = (color?: string) => ({
  width: 24,
  height: 24,
  color: color ? `var(--mantine-color-${color}-7)` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <IconMoodCry style={iconStyle} />;
    case 2:
      return <IconMoodSad style={iconStyle} />;
    case 3:
      return <IconMoodSmile style={iconStyle} />;
    case 4:
      return <IconMoodHappy style={iconStyle} />;
    case 5:
      return <IconMoodCrazyHappy style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <IconMoodCry style={getIconStyle('red')} />;
    case 2:
      return <IconMoodSad style={getIconStyle('orange')} />;
    case 3:
      return <IconMoodSmile style={getIconStyle('yellow')} />;
    case 4:
      return <IconMoodHappy style={getIconStyle('lime')} />;
    case 5:
      return <IconMoodCrazyHappy style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of <code>theme.colors</code> or any CSS color value |
| count | number | - | Number of controls |
| defaultValue | number | - | Uncontrolled component default value |
| emptySymbol | ReactNode | ((value: number) => ReactNode) | - | Icon displayed when the symbol is empty |
| fractions | number | - | Number of fractions each item can be divided into |
| fullSymbol | ReactNode | ((value: number) => ReactNode) | - | Icon displayed when the symbol is full |
| getSymbolLabel | (index: number) => string | - | A function to assign <code>aria-label</code> of the the control at index given in the argument. If not specified, control index is used as <code>aria-label</code>. |
| highlightSelectedOnly | boolean | - | If set, only the selected symbol changes to full symbol when selected |
| name | string | - | <code>name</code> attribute passed down to all inputs. By default, <code>name</code> is generated randomly. |
| onChange | (value: number) => void | - | Called when value changes |
| onHover | (value: number) => void | - | Called when one of the controls is hovered |
| readOnly | boolean | - | If set, the user cannot interact with the component |
| size | number | MantineSize | (string & {}) | - | Controls component size |
| value | number | - | Controlled component value |


#### Styles API

Rating component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Rating selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Rating-root | Root element |
| starSymbol | .mantine-Rating-starSymbol | Default star icon |
| input | .mantine-Rating-input | Item input, hidden by default |
| label | .mantine-Rating-label | Item label, used to display star icon |
| symbolBody | .mantine-Rating-symbolBody | Wrapper around star icon for centering |
| symbolGroup | .mantine-Rating-symbolGroup | Group of symbols, used to display fractions |

**Rating CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --rating-color | Controls filled star icon color |
| root | --rating-size | Controls star icon width and height |

**Rating data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| label | data-read-only | - | - |
| input | data-active | Input value is the same as component value | - |
| starSymbol | data-filled | Associated input value is less or equal to the component value | - |