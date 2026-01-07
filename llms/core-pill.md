# Pill
Package: @mantine/core
Import: import { Pill } from '@mantine/core';
Description: Removable and non-removable tags

## Usage

#### Example: usage

```tsx
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill>React</Pill>;
}
```


## Inside inputs

`Pill` component is designed to be used inside inputs. It can be used to create custom
multi select or tag inputs.

#### Example: withinInput

```tsx
import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
```


#### Example: stylesApi

```tsx
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill withRemoveButton>Test pill</Pill>;
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | - | Adds disabled attribute, applies disabled styles |
| onRemove | () => void | - | Called when the remove button is clicked |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius. Numbers are converted to rem. |
| removeButtonProps | CloseButtonProps & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | - | Props passed down to the remove button |
| size | MantineSize | - | Controls pill <code>font-size</code> and <code>padding</code> |
| withRemoveButton | boolean | - | Controls visibility of the remove button |


#### Styles API

Pill component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Pill selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Pill-root | Root element |
| label | .mantine-Pill-label | Pill label (children) |
| remove | .mantine-Pill-remove | Remove button |

**Pill CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --pill-height | Controls `height` of the pill |
| root | --pill-fz | Controls `font-size` |
| root | --pill-radius | Controls `border-radius` |

**Pill data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-remove | - | - |
| root | data-disabled | - | - |

**Pill.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-PillGroup-group | Root element |

**Pill.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| group | --pg-gap | Controls `gap` between pills |

**Pillsinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Pillsinput-wrapper | Root element of the Input |
| input | .mantine-Pillsinput-input | Input element |
| section | .mantine-Pillsinput-section | Left and right sections |
| root | .mantine-Pillsinput-root | Root element |
| label | .mantine-Pillsinput-label | Label element |
| required | .mantine-Pillsinput-required | Required asterisk element, rendered inside label |
| description | .mantine-Pillsinput-description | Description element |
| error | .mantine-Pillsinput-error | Error element |

**Pillsinputfield selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| field | .mantine-Pillsinputfield-field | Root element |

**Pillsinputfield data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| field | data-type | - | Value of  |
| field | data-disabled | - | - |