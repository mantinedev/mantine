# PasswordInput
Package: @mantine/core
Import: import { PasswordInput } from '@mantine/core';
Description: Capture password data from user

## Usage

<InputFeatures component="PasswordInput" element="input" />

PasswordInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. PasswordInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      
      placeholder="Input placeholder"
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <PasswordInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Controlled visibility toggle

Control visibility state with `visible` and `onVisibilityChange` props,
for example, the props can be used to sync visibility state between two inputs:

#### Example: controlledVisibility

```tsx
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
```


## Change visibility toggle icon

To change visibility toggle icon, pass a React component that accepts `reveal` prop to `visibilityToggleIcon`:

#### Example: visibilityIcon

```tsx
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  );

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={VisibilityToggleIcon}
    />
  );
}
```


## Strength meter example

Password strength meter example with [Progress](https://mantine.dev/core/progress/) and [Popover](https://mantine.dev/core/popover/) components:

#### Example: strengthMeter

```tsx
import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[DEMOPLACEHOLDER::PasswordInputDemos.strengthMeter::END+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Usage without visibility toggle

If you do not need visibility toggle button, use [TextInput](https://mantine.dev/core/text-input/) component instead:

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput type="password" />;
}
```

<InputSections component="PasswordInput" />

## Input sections

PasswordInput supports left and right sections to display icons, buttons or other content alongside the input.

Note that when `rightSection` prop is used, visibility toggle button is not rendered.

#### Example: sections

```tsx
import { PasswordInput } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock size={18} stroke={1.5} />;

  return (
    <>
      <PasswordInput leftSection={icon} label="With left section" placeholder="With left section" />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
```


## Error state

#### Example: error

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput label="Boolean error" placeholder="Boolean error" error />
      <PasswordInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```


## Disabled

When `disabled` prop is set, visibility toggle button is hidden:

#### Example: disabled

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
```


#### Example: stylesApi

```tsx
import { IconLock } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock size={18} />}
      
    />
  );
}
```


<GetElementRef component="PasswordInput" refType="input" />

## Get element ref

```tsx
import { useRef } from 'react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <PasswordInput ref={ref} />;
}
```

<InputAccessibility component="PasswordInput" />

## Accessibility

PasswordInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

To set `aria-label` on the visibility toggle button, use `visibilityToggleButtonProps` prop:

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Password"
      visibilityToggleButtonProps={{
        'aria-label': 'Toggle password visibility',
      }}
    />
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultVisible | boolean | - | If set, the input value is visible by default |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| onVisibilityChange | (visible: boolean) => void | - | Called when visibility changes |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| visibilityToggleButtonProps | Record<string, any> | - | Props passed down to the visibility toggle button |
| visibilityToggleIcon | FC<{ reveal: boolean; }> | - | A component to replace the visibility toggle icon |
| visible | boolean | - | If set, the input value is visible visible |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

PasswordInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**PasswordInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-PasswordInput-wrapper | Root element of the Input |
| input | .mantine-PasswordInput-input | Input element |
| section | .mantine-PasswordInput-section | Left and right sections |
| root | .mantine-PasswordInput-root | Root element |
| label | .mantine-PasswordInput-label | Label element |
| required | .mantine-PasswordInput-required | Required asterisk element, rendered inside label |
| description | .mantine-PasswordInput-description | Description element |
| error | .mantine-PasswordInput-error | Error element |
| innerInput | .mantine-PasswordInput-innerInput | Actual input element |
| visibilityToggle | .mantine-PasswordInput-visibilityToggle | Visibility toggle button |

**PasswordInput CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --psi-button-size | Controls visibility toggle button `width` and `height` |
| root | --psi-icon-size | Controls visibility toggle icon `width` and `height` |