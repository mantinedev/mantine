# Rating
Package: @mantine/core
Import: import { Rating } from '@mantine/core';
Description: Pick and display rating

## Usage

```tsx
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2} color="yellow" size="md" count={5} highlightSelectedOnly={false} />
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

## Uncontrolled

`Rating` can be used with uncontrolled forms the same way as a native input element.
Set the `name` attribute to include rating value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `Rating` with `FormData`:

```tsx
import { Rating } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Rating value:', formData.get('rating'));
      }}
    >
      <Rating name="rating" defaultValue={0} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Read only

```tsx
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
```


## Allow clear

Set `allowClear` prop to allow users to reset the rating to 0 by clicking the same rating value again.
This is useful when you want to give users the ability to undo their rating selection:

```tsx
import { useState } from 'react';
import { Group, Rating, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(3);

  return (
    <Stack gap="md" align="center">
      <Text size="sm">Click the same star to clear the rating</Text>
      <Rating value={value} onChange={setValue} allowClear />
      <Group gap="xs">
        <Text size="sm" c="dimmed">
          Current rating:
        </Text>
        <Text size="sm" fw={600}>
          {value === 0 ? 'Not rated' : value}
        </Text>
      </Group>
    </Stack>
  );
}
```


## Fractions

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

```tsx
import { Rating } from '@mantine/core';
import { SunIcon, MoonIcon } from '@phosphor-icons/react';

function Demo() {
  return <Rating emptySymbol={<SunIcon size={16} />} fullSymbol={<MoonIcon size={16} />} />;
}
```


## Symbols for each item

```tsx
import { Rating } from '@mantine/core';
import { SmileySadIcon, SmileyNervousIcon, SmileyIcon, SmileyMehIcon, SmileyWinkIcon } from '@phosphor-icons/react';

const getIconStyle = (color?: string) => ({
  width: 24,
  height: 24,
  color: color ? `var(--mantine-color-${color}-7)` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <SmileySadIcon style={iconStyle} />;
    case 2:
      return <SmileyNervousIcon style={iconStyle} />;
    case 3:
      return <SmileyIcon style={iconStyle} />;
    case 4:
      return <SmileyMehIcon style={iconStyle} />;
    case 5:
      return <SmileyWinkIcon style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <SmileySadIcon style={getIconStyle('red')} />;
    case 2:
      return <SmileyNervousIcon style={getIconStyle('orange')} />;
    case 3:
      return <SmileyIcon style={getIconStyle('yellow')} />;
    case 4:
      return <SmileyMehIcon style={getIconStyle('lime')} />;
    case 5:
      return <SmileyWinkIcon style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}
```



#### Props

**Rating props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowClear | boolean | - | When true, clicking the same rating value clears the rating to 0, default is false |
| color | MantineColor | - | Key of theme.colors or any CSS color value, default is 'yellow' |
| count | number | - | Number of rating items (stars), default is 5 |
| defaultValue | number | - | Uncontrolled component default value |
| emptySymbol | ReactNode \| ((value: number) => ReactNode) | - | Icon displayed for unselected rating items. Can be a function that receives the rating value. |
| fractions | number | - | Number of fractions each item can be divided into, default is 1 |
| fullSymbol | ReactNode \| ((value: number) => ReactNode) | - | Icon displayed for selected rating items. Can be a function that receives the rating value. |
| getSymbolLabel | (index: number) => string | - | Function to generate aria-label for each rating value. Receives the rating value as argument, default is (value) => String(value) |
| highlightSelectedOnly | boolean | - | When true, only the clicked rating item is highlighted, not all items up to the selected value, default is false |
| name | string | - | Name attribute for form submission. If not provided, a unique id will be generated. |
| onChange | (value: number) => void | - | Called when value changes |
| onHover | (value: number) => void | - | Called when rating item is hovered. Receives -1 when hover ends. |
| readOnly | boolean | - | When true, rating cannot be changed by user interaction, default is false |
| size | MantineSize \| number | - | Controls component size |
| value | number | - | Controlled component value |


#### Styles API

Rating component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Rating selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Rating-root | Root element |
| starSymbol | .mantine-Rating-starSymbol | Symbol element (star icon by default, or custom symbol) |
| input | .mantine-Rating-input | Item input, hidden by default |
| label | .mantine-Rating-label | Item label, used to display star icon |
| symbolBody | .mantine-Rating-symbolBody | Wrapper around star icon, used for clip-path masking in fractional ratings |
| symbolGroup | .mantine-Rating-symbolGroup | Container for all fractional symbols of a single rating unit |

**Rating CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --rating-color | Controls filled star icon color |

**Rating data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| label | data-read-only | `readOnly` prop is set | - |
| input | data-active | Input value is the same as component value | - |
| symbolGroup | data-active | Symbol group is being hovered | - |
| starSymbol | data-filled | Associated input value is less or equal to the component value | - |
