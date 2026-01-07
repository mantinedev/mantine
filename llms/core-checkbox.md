# Checkbox
Package: @mantine/core
Import: import { Checkbox } from '@mantine/core';
Description: Capture boolean input from user

## Usage

#### Example: configurator

```tsx
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      
    />
  );
}
```


## Controlled

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

## States

#### Example: states

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


## Change icons

#### Example: icon

```tsx
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

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

Use `iconColor` prop to change icon color. You can reference colors from `theme.colors` or use any valid CSS color:

#### Example: iconColor

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

`Checkbox` supports indeterminate state. When `indeterminate` prop is set,
`checked` prop is ignored (checkbox always has checked styles):

#### Example: indeterminate

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

#### Example: anchor

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

You can change target element to which tooltip is attached with `refProp`:

* If `refProp` is not set, the tooltip is attached to the checkbox input
* If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input and other elements)

#### Example: tooltip

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
To change cursor to pointer, set `cursorType` on [theme](https://mantine.dev/theming/theme-object/):

#### Example: cursorType

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


## Add custom sizes

You can add any number of custom sizes with [data-size](https://mantine.dev/styles/data-attributes/) attribute:

#### Example: customSize

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


<WrapperProps component="Checkbox" />

## Wrapper props

Checkbox supports additional props that are passed to the wrapper element for more customization options.

## Checkbox.Group

#### Example: groupConfigurator

```tsx
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      
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



## Controlled Checkbox.Group

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

## Checkbox.Indicator

`Checkbox.Indicator` looks exactly the same as `Checkbox` component, but it does not
have any semantic meaning, it's just a visual representation of checkbox state. You
can use it in any place where you need to display checkbox state without any interaction
related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Checkbox.Indicator` cannot be focused or selected with keyboard. It is not
accessible and should not be used as a replacement for `Checkbox` component.

#### Example: indicator

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


## Checkbox.Card component

`Checkbox.Card` component can be used as a replacement for `Checkbox` to build custom
cards/buttons/other things that work as checkboxes. The root element of the component
has `role="checkbox"` attribute, it is accessible by default and supports the same
keyboard interactions as `input[type="checkbox"]`.

#### Example: card

```tsx
import { useState } from 'react';
import { Checkbox, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}
```


You can use `Checkbox.Card` with `Checkbox.Group` the same way as `Checkbox` component:

#### Example: cardGroup

```tsx
import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '–'}
      </Text>
    </>
  );
}
```


<GetElementRef component="Checkbox" refType="input" />

## Get element ref

```tsx
import { useRef } from 'react';
import { Checkbox } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Checkbox ref={ref} />;
}
```

#### Example: stylesApi

```tsx
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     
    />
  );
}
```


## Example: Table with row selection

#### Example: rowSelection

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

#### Example: customize

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
  font-weight: 500;
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


## Accessibility

Set `aria-label` or `label` prop to make the checkbox accessible:

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to set input background color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error message displayed below the label |
| icon | FC<{ indeterminate: boolean; className: string; }> | undefined | - | Icon displayed when checkbox is in checked or indeterminate state |
| iconColor | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to set icon color. By default, depends on <code>theme.autoContrast</code>. |
| id | string | - | Unique input id |
| indeterminate | boolean | - | Indeterminate state of the checkbox. If set, <code>checked</code> prop is ignored. |
| label | React.ReactNode | - | <code>label</code> associated with the checkbox |
| labelPosition | "left" | "right" | - | Position of the label relative to the input |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| rootRef | ForwardedRef<HTMLDivElement> | - | Root element ref |
| size | MantineSize | (string & {}) | - | Controls size of the component |
| wrapperProps | Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |


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
| root | data-checked | - | - |
| input | data-error | - | - |
| input | data-indeterminate | - | - |
| inner | data-label-position | - | Value of  |

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
| indicator | data-checked | - | - |
| indicator | data-disabled | - | - |

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
| card | data-checked | - | - |
| card | data-with-border | - | - |