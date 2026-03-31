# PasswordInput
Package: @mantine/core
Import: import { PasswordInput } from '@mantine/core';
Description: Capture password data from user

## Usage

PasswordInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. PasswordInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Input placeholder"
    />
  );
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return <PasswordInput placeholder="Your password" loading />;
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

## Uncontrolled

`PasswordInput` can be used with uncontrolled forms the same way as a native `input[type="password"]`.
Set the `name` attribute to include password input value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `PasswordInput` with `FormData`:

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Password value:', formData.get('password'));
      }}
    >
      <PasswordInput
        label="Enter your password"
        name="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Controlled visibility toggle

Control the visibility state with the `visible` and `onVisibilityChange` props.
For example, the props can be used to sync visibility state between two inputs:

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

To change the visibility toggle icon, pass a React component that accepts the `reveal` prop to `visibilityToggleIcon`:

```tsx
import { PasswordInput } from '@mantine/core';
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <EyeSlashIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <EyeIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
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

Password strength meter example with the [Progress](https://mantine.dev/llms/core-progress.md) and [Popover](https://mantine.dev/llms/core-popover.md) components:

```tsx
import { useState } from 'react';
import { XIcon, CheckIcon } from '@phosphor-icons/react';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <CheckIcon size={14} /> : <XIcon size={14} />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
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

If you do not need the visibility toggle button, use the [TextInput](https://mantine.dev/llms/core-text-input.md) component instead:

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput type="password" />;
}
```

## Input sections

PasswordInput supports left and right sections to display icons, buttons or other content alongside the input.

Note that when the `rightSection` prop is used, the visibility toggle button is not rendered.

```tsx
import { PasswordInput } from '@mantine/core';
import { LockIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <LockIcon size={18} />;

  return (
    <>
      <PasswordInput
        leftSection={icon}
        leftSectionPointerEvents="none"
        label="With left section"
        placeholder="With left section"
      />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
```


## Error state

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



#### Props

**PasswordInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultVisible | boolean | - | If set, the input value is visible by default |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| onVisibilityChange | (visible: boolean) => void | - | Called when visibility changes |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| visibilityToggleButtonProps | Record<string, any> | - | Props passed down to the visibility toggle button |
| visibilityToggleIcon | FC<{ reveal: boolean; }> | - | A component to replace the visibility toggle icon |
| visible | boolean | - | If set, the input value is visible |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
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
