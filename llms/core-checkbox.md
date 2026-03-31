# Checkbox
Package: @mantine/core
Import: import { Checkbox } from '@mantine/core';
Description: Capture boolean input from user

## Usage

```tsx
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
       labelPosition="right" label="I agree to sell my privacy" description="" error="" color="blue" variant="filled" radius="sm" size="sm" disabled={false} indeterminate={false}
    />
  );
}
```


## Controlled state

Use `checked` and `onChange` props to control `Checkbox` state:

```tsx
import { useState } from 'react';
import { Checkbox } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## Checkbox with @mantine/form

Example of using `Checkbox` with [@mantine/form](https://mantine.dev/llms/form-use-form.md):

```tsx
import { Button, Checkbox } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { terms: false },
    validate: {
      terms: isNotEmpty('You must accept terms and conditions'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox
        label="I accept the terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
```


## Checkbox with uncontrolled forms

`Checkbox` can be used with uncontrolled forms the same way as native `input[type="checkbox"]`.
Set the `name` attribute to include checkbox value in `FormData` object on form submission.
To control initial checked state in uncontrolled forms, use `defaultChecked` prop.

Example usage of uncontrolled `Checkbox` with `FormData`:

```tsx
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Checkbox value:', !!formData.get('terms'));
      }}
    >
      <Checkbox label="Accept terms and conditions" name="terms" defaultChecked />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## States

```tsx
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox checked variant="outline" onChange={() => {}} label="Outline checked checkbox" />
      <Checkbox
        variant="outline"
        onChange={() => {}}
        indeterminate
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}
```


## Error state

Use the `error` prop to display error message below the checkbox label.
If you want to apply error styles to checkbox without error message, user boolean `error` prop.
If you want to display error message without applying error styles, set `withErrorStyles={false}`.

```tsx
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox label="With boolean error" error />
      <Checkbox label="With error message" error="Must be checked" />
      <Checkbox label="With error message" error="No error styles" withErrorStyles={false} />
    </Stack>
  );
}
```


## Change icons

```tsx
import { Checkbox, CheckboxIconComponent } from '@mantine/core';
import { BiohazardIcon, RadioactiveIcon } from '@phosphor-icons/react';

const CheckboxIcon: CheckboxIconComponent = ({ indeterminate, ...others }) =>
  indeterminate ? <RadioactiveIcon {...others} /> : <BiohazardIcon {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
```


## Change icon color

Use the `iconColor` prop to change the icon color. You can reference colors from `theme.colors` or use any valid CSS color:

```tsx
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
```


## Indeterminate state

`Checkbox` supports indeterminate state. When the `indeterminate` prop is set,
the `checked` prop is ignored (checkbox always has checked styles):

```tsx
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
```


## Label with link

```tsx
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
```


## Checkbox with tooltip

You can change the target element to which the tooltip is attached with `refProp`:

* If `refProp` is not set, the tooltip is attached to the checkbox input
* If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input and other elements)

```tsx
import { Tooltip, Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
```


## Pointer cursor

By default, checkbox input and label have `cursor: default` (same as native `input[type="checkbox"]`).
To change the cursor to pointer, set `cursorType` on [theme](https://mantine.dev/llms/theming-theme-object.md):

```tsx
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
```


```tsx
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked label="regular checkbox" size="lg" color="lime.4" />
      <Checkbox autoContrast checked label="autoContrast checkbox" size="lg" color="lime.4" />
    </Stack>
  );
}
```


## Add custom sizes

You can add any number of custom sizes with [data-size](https://mantine.dev/llms/styles-data-attributes.md) attribute:

```tsx
// Demo.tsx
import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}

// Demo.module.css
.root {
  --checkbox-size-xxl: 42px;
  --checkbox-size-xxs: 14px;

  &[data-size='xxl'] {
    .label {
      font-size: 22px;
      line-height: 40px;
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: 10px;
      line-height: 14px;
    }
  }
}
```


## Wrapper props

Checkbox supports additional props that are passed to the wrapper element for more customization options.

## Checkbox.Group

`Checkbox.Group` manages the state of multiple checkboxes, it accepts `value` and `onChange`
props, which are used to control the state of checkboxes inside the group. The `value` prop should be an array of strings, where each string is the value of a checkbox.
The `onChange` prop should be a function that receives the new value as an array of strings.

```tsx
import { useState } from 'react';
import { Checkbox } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Checkbox.Group value={value} onChange={setValue}>
      <Checkbox value="react" label="React" />
      <Checkbox value="svelte" label="Svelte" />
    </Checkbox.Group>
  );
}
```

`Checkbox.Group` component supports all [Input.Wrapper](https://mantine.dev/llms/core-input.md#inputwrapper-component)
props.

```tsx
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
       label="Select your favorite frameworks/libraries" description="This is anonymous" error="" withAsterisk={true}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
```


## Checkbox.Group disabled

```tsx
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group disabled>
      <Stack>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="angular" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Stack>
    </Checkbox.Group>
  );
}
```


## maxSelectedValues

Use `maxSelectedValues` prop to limit the number of selected values in `Checkbox.Group`.
When the limit is reached, the remaining checkboxes are disabled and cannot be selected.

```tsx
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group defaultValue={['react']} maxSelectedValues={2}>
      <Group>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
```


## Checkbox.Group with @mantine/form

Example of using `Checkbox.Group` with [@mantine/form](https://mantine.dev/llms/form-use-form.md):

```tsx
import { Button, Checkbox, Group } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';

interface FormValues {
  frameworks: string[];
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { frameworks: [] },
    validate: {
      frameworks: hasLength({ min: 1 }, 'Select at least one framework'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox.Group
        {...form.getInputProps('frameworks')}
        key={form.key('frameworks')}
        label="Select your favorite frameworks/libraries"
        withAsterisk
      >
        <Group my={5}>
          <Checkbox value="react" label="React" />
          <Checkbox value="svelte" label="Svelte" />
          <Checkbox value="ng" label="Angular" />
          <Checkbox value="vue" label="Vue" />
        </Group>
      </Checkbox.Group>

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
```


## Checkbox.Group with uncontrolled forms

`Checkbox.Group` can be used with uncontrolled forms, it renders a hidden input
which joins all checked values into a single string using `hiddenInputValuesSeparator` prop.

Props for usage with uncontrolled forms:

* `name` – name attribute passed to the hidden input
* `hiddenInputValuesSeparator` – string used to join checked values into a single string, `','` by default
* `hiddenInputProps` – additional props passed to the hidden input

```tsx
export function UncontrolledForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Checkbox group value:', formData.get('frameworks'));
      }}
    >
      <Checkbox.Group label="Frameworks" name="frameworks" hiddenInputValuesSeparator="|">
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Checkbox.Indicator

`Checkbox.Indicator` looks exactly the same as the `Checkbox` component, but it does not
have any semantic meaning, it's just a visual representation of checkbox state. You
can use it in any place where you need to display checkbox state without any interaction
related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Checkbox.Indicator` cannot be focused or selected with keyboard. It is not
accessible and should not be used as a replacement for the `Checkbox` component.

```tsx
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
```


## Example: Table with row selection

```tsx
import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## Example: Customize with Styles API

```tsx
// Demo.tsx
import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}

// Demo.module.css
.root {
  border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
  font-weight: 600;
  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;
  cursor: pointer;

  &[data-checked] {
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }
}
```


## wrapperProps

Most of the `Checkbox` props are passed down to the `input` element.
If you want to pass props to the root element instead, use `wrapperProps` prop.

```tsx
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="My checkbox"
      wrapperProps={{ 'data-root-element': true }}
    />
  );
}
```

## id attribute

By default, `Checkbox` generates a random `id` attribute for the input element
to associate it with the label. You can supply your own `id` attribute with `id` prop.
It will be used in `id` attribute of the input element and `htmlFor` attribute of the label element.

```tsx
import { Checkbox } from '@mantine/core';

function Demo() {
  return <Checkbox id="my-checkbox" label="My checkbox" />;
}
```

## Accessibility

Checkbox component is based on the native `input[type="checkbox"]` element, so it is accessible by default.

Set `aria-label` or `label` prop to make the checkbox accessible for screen readers:

```tsx
import { Checkbox } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Checkbox />;
}

// Ok, input is labelled by aria-label
function GoodAriaLabel() {
  return <Checkbox aria-label="My checkbox" />;
}

// Ok, input is labelled by label element
function GoodLabel() {
  return <Checkbox label="My checkbox" />;
}
```


#### Props

**Checkbox props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts icon color based on background color for `filled` variant |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color to set input background color in checked state |
| description | React.ReactNode | - | Description below the label |
| error | React.ReactNode | - | Error message below the label |
| icon | CheckboxIconComponent | - | Icon for checked or indeterminate state |
| iconColor | MantineColor | - | Key of `theme.colors` or any valid CSS color to set icon color. By default, depends on `theme.autoContrast`. |
| id | string | - | Unique input id |
| indeterminate | boolean | - | Indeterminate state of the checkbox. If set, `checked` prop is dismissed. |
| label | React.ReactNode | - | `label` associated with the checkbox |
| labelPosition | "left" \| "right" | - | Position of the label relative to the input |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| rootRef | Ref<HTMLDivElement> | - | Root element ref |
| size | MantineSize | - | Controls size of the component |
| withErrorStyles | boolean | - | If set, applies error styles to the checkbox when `error` prop is set |
| wrapperProps | React.ComponentProps<"div"> | - | Props passed down to the root element |

**Checkbox.Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**Checkbox.Indicator props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts icon color based on background color for `filled` variant |
| checked | boolean | - | Determines whether the component should have checked styles |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color to set input background color in checked state |
| disabled | boolean | - | Indicates disabled state |
| icon | CheckboxIconComponent | - | Icon for checked or indeterminate state |
| iconColor | MantineColor | - | Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` |
| indeterminate | boolean | - | Indeterminate state of the checkbox. If set, `checked` prop is ignored. |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| size | MantineSize | - | Controls size of the component |

**Checkbox.CardContext props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**Checkbox.Card props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | - | Controlled component value |
| defaultChecked | boolean | - | Uncontrolled component default value |
| onChange | (checked: boolean) => void | - | Called when value changes |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| value | string | - | Value of the checkbox, used with `Checkbox.Group` |
| withBorder | boolean | - | Adds border to the root element |


#### Styles API

Checkbox component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Checkbox selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Checkbox-root | Root element |
| input | .mantine-Checkbox-input | Input element (`input[type="checkbox"]`) |
| icon | .mantine-Checkbox-icon | Checkbox icon, used to display checkmark and indeterminate state icon |
| inner | .mantine-Checkbox-inner | Wrapper for `icon` and `input` |
| body | .mantine-Checkbox-body | Input body, contains all other elements |
| labelWrapper | .mantine-Checkbox-labelWrapper | Contains `label`, `description` and `error` |
| label | .mantine-Checkbox-label | Label element |
| description | .mantine-Checkbox-description | Description displayed below the label |
| error | .mantine-Checkbox-error | Error message displayed below the label |

**Checkbox CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --checkbox-color | Controls checked checkbox `background-color` |
| root | --checkbox-radius | Controls checkbox `border-radius` |
| root | --checkbox-size | Controls checkbox `width` and `height` |
| root | --checkbox-icon-color | Controls checkbox icon `color` |

**Checkbox data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-checked | `checked` prop is set | - |
| input | data-error | `error` prop is set | - |
| input | data-indeterminate | `indeterminate` prop is set | - |
| inner | data-label-position | - | Value of `labelPosition` prop |

**Checkbox.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-CheckboxGroup-root | Root element |
| label | .mantine-CheckboxGroup-label | Label element |
| required | .mantine-CheckboxGroup-required | Required asterisk element, rendered inside label |
| description | .mantine-CheckboxGroup-description | Description element |
| error | .mantine-CheckboxGroup-error | Error element |

**Checkbox.Indicator selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| indicator | .mantine-CheckboxIndicator-indicator | Root element |
| icon | .mantine-CheckboxIndicator-icon | Checkbox icon |

**Checkbox.Indicator CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| indicator | --checkbox-color | Controls checked checkbox `background-color` |
| indicator | --checkbox-radius | Controls checkbox `border-radius` |
| indicator | --checkbox-size | Controls checkbox `width` and `height` |
| indicator | --checkbox-icon-color | Controls checkbox icon `color` |

**Checkbox.Indicator data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| indicator | data-checked | `checked` prop is set | - |
| indicator | data-disabled | `disabled` prop is set | - |

**Checkbox.Card selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| card | .mantine-CheckboxCard-card | Root element |

**Checkbox.Card CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| card | --card-radius | Controls card `border-radius` |

**Checkbox.Card data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| card | data-checked | `checked` prop is set | - |
| card | data-with-border | `withBorder` prop is set | - |
