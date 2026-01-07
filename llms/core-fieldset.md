# Fieldset
Package: @mantine/core
Import: import { Fieldset } from '@mantine/core';
Description: Group related elements in a form

## Usage

#### Example: usage

```tsx
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information">
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
```


## Disabled

Set `disabled` prop to disable all inputs and buttons inside the fieldset:

#### Example: disabled

```tsx
import { Fieldset, TextInput, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| legend | React.ReactNode | - | Fieldset legend |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |


#### Styles API

Fieldset component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Fieldset selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Fieldset-root | Root element |
| legend | .mantine-Fieldset-legend | Legend element |

**Fieldset CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --fieldset-radius | Controls `border-radius` |