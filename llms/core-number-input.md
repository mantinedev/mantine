# NumberInput
Package: @mantine/core
Import: import { NumberInput } from '@mantine/core';
Description: Capture number from user

## Usage

`NumberInput` is based on [react-number-format](https://www.npmjs.com/package/react-number-format).
It supports most of the props from the `NumericFormat` component in the original package.

<InputFeatures component="NumberInput" element="input" />

NumberInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. NumberInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      
      placeholder="Input placeholder"
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | number>('');
  return <NumberInput value={value} onChange={setValue} />;
}
```

## Value type

`value`, `defaultValue` and `onChange` props can be either string or number. In all cases
when `NumberInput` value can be represented as a number, `onChange` function is called
with a number (for example `55`, `1.28`, `-100`, etc.). But there are several cases when
it is not possible to represent value as a number:

* Empty state is represented as an empty string – `''`
* Numbers that are larger than `Number.MAX_SAFE_INTEGER - 1` or smaller than `Number.MIN_SAFE_INTEGER + 1` are represented as strings – `'90071992547409910'`
* Numbers that consist of only multiple zeros are represented as strings – `0.`, `0.0`, `-0.00`, etc.

## min and max

Set `min` and `max` props to limit the input value:

#### Example: minMax

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
```


## Clamp behavior

By default, the value is clamped when the input is blurred. If you set `clampBehavior="strict"`,
it will not be possible to enter value outside of min/max range. Note that this option
may cause issues if you have tight `min` and `max`, for example `min={10}` and `max={20}`.
If you need to disable value clamping entirely, set `clampBehavior="none"`.

#### Example: strictClamp

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
```


## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the input value:

#### Example: prefixSuffix

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
```


## Negative numbers

By default, negative numbers are allowed. Set `allowNegative={false}` to allow only positive numbers.

#### Example: allowNegative

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
```


## Decimal numbers

By default, decimal numbers are allowed. Set `allowDecimal={false}` to allow only integers.

#### Example: allowDecimal

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
```


## Decimal scale

`decimalScale` controls how many decimal places are allowed:

#### Example: decimalScale

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
```


## Fixed decimal scale

Set `fixedDecimalScale` to always display fixed number of decimal places:

#### Example: fixedDecimalScale

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
```


## Decimal separator

Set `decimalSeparator` to change decimal separator character:

#### Example: decimalSeparator

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
```


## Thousand separator

Set `thousandSeparator` prop to separate thousands with a character. You can control
grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

#### Example: thousandsSeparator

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Thousands are separated with a coma"
        placeholder="Thousands are separated with a coma"
        thousandSeparator=","
        defaultValue={1_000_000}
      />

      <NumberInput
        label="Thousands are separated with a space"
        placeholder="Thousands are separated with a space"
        thousandSeparator=" "
        defaultValue={1_000_000}
        mt="md"
      />
    </>
  );
}
```


<InputSections component="NumberInput" />

## Input sections

NumberInput supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { NumberInput } from '@mantine/core';
import { IconCurrencyDram } from '@tabler/icons-react';

function Demo() {
  const icon = <IconCurrencyDram size={20} stroke={1.5} />;
  return (
    <>
      <NumberInput leftSection={icon} label="With left section" placeholder="With left section" />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
```


## Increment/decrement controls

By default, the right section is occupied by increment and decrement buttons.
To hide them, set `hideControls` prop. You can also use `rightSection` prop to render anything
in the right section to replace the default controls.

#### Example: rightSection

```tsx
import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
```


## Increment/decrement on hold

Set `stepHoldDelay` and `stepHoldInterval` props to define behavior when increment/decrement controls are clicked and hold:

#### Example: hold

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Step on hold"
        description="Step value when clicking and holding increment/decrement buttons"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />

      <NumberInput
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
```


## Custom increment and decrement controls

You can get a ref with `increment` and `decrement` functions to create custom controls:

#### Example: handlers

```tsx
import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@mantine/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
```


## Error state

#### Example: error

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```


## Disabled state

#### Example: disabled

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```


#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      
    />
  );
}
```


<GetElementRef component="NumberInput" refType="input" />

## Get element ref

```tsx
import { useRef } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <NumberInput ref={ref} />;
}
```

<InputAccessibility component="NumberInput" />

## Accessibility

NumberInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDecimal | boolean | - | If set, decimal values are allowed |
| allowLeadingZeros | boolean | - | Determines whether leading zeros are allowed. If set to <code>false</code>, leading zeros are removed when the input value becomes a valid number. |
| allowNegative | boolean | - | If set, negative values are allowed |
| allowedDecimalSeparators | string[] | - | Characters which when pressed result in a decimal separator |
| clampBehavior | "none" | "blur" | "strict" | - | Controls how value is clamped, <code>strict</code> – user is not allowed to enter values that are not in <code>[min, max]</code> range, <code>blur</code> – user is allowed to enter any values, but the value is clamped when the input loses focus (default behavior), <code>none</code> – lifts all restrictions, <code>[min, max]</code> range is applied only for controls and up/down keys |
| decimalScale | number | - | Limits the number of digits that can be entered after the decimal point |
| decimalSeparator | string | - | Character used as a decimal separator |
| defaultValue | string | number | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| fixedDecimalScale | boolean | - | If set, 0s are added after <code>decimalSeparator</code> to match given <code>decimalScale</code>. |
| handlersRef | ForwardedRef<NumberInputHandlers> | undefined | - | Increment/decrement handlers |
| hideControls | boolean | - | If set, the up/down controls are hidden |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| isAllowed | (values: NumberFormatValues) => boolean | - | A function to validate the input value. If this function returns <code>false</code>, the <code>onChange</code> will not be called and the input value will not change. |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| max | number | - | Maximum possible value |
| min | number | - | Minimum possible value |
| onChange | (value: string | number) => void | - | Called when value changes |
| onValueChange | OnValueChange | - | Called when value changes with <code>react-number-format</code> payload |
| prefix | string | - | Prefix added before the input value |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| startValue | number | - | Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty |
| step | number | - | Number by which value will be incremented/decremented with up/down controls and keyboard arrows |
| stepHoldDelay | number | - | Initial delay in milliseconds before stepping the value. |
| stepHoldInterval | number | ((stepCount: number) => number) | - | Delay before stepping the value. Can be a number of milliseconds or a function that receives the current step count and returns the delay in milliseconds. |
| suffix | string | - | Suffix added after the input value |
| thousandSeparator | string | boolean | - | A character used to separate thousands |
| thousandsGroupStyle | "none" | "thousand" | "lakh" | "wan" | - | Defines the thousand grouping style. |
| trimLeadingZeroesOnBlur | boolean | - | If set, leading zeros are removed on blur. For example, <code>00100</code> -> <code>100</code> |
| type | "text" | "tel" | "password" | - | Controls input <code>type</code> attribute |
| value | string | number | - | Controlled component value |
| valueIsNumericString | boolean | - | If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as <code>true</code>. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| withKeyboardEvents | boolean | - | If set, up/down keyboard events increment/decrement value |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

NumberInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**NumberInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-NumberInput-wrapper | Root element of the Input |
| input | .mantine-NumberInput-input | Input element |
| section | .mantine-NumberInput-section | Left and right sections |
| root | .mantine-NumberInput-root | Root element |
| label | .mantine-NumberInput-label | Label element |
| required | .mantine-NumberInput-required | Required asterisk element, rendered inside label |
| description | .mantine-NumberInput-description | Description element |
| error | .mantine-NumberInput-error | Error element |
| controls | .mantine-NumberInput-controls | Increment and decrement buttons wrapper |
| control | .mantine-NumberInput-control | Increment and decrement buttons |

**NumberInput CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| controls | --ni-chevron-size | Controls `width` and `height` of the default chevron icon |

**NumberInput data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-direction | - | - |