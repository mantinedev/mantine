# NumberInput
Package: @mantine/core
Import: import { NumberInput } from '@mantine/core';
Description: Capture number from user

## Usage

`NumberInput` is based on [react-number-format](https://www.npmjs.com/package/react-number-format).
It supports most of the props from the `NumericFormat` component in the original package.

NumberInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. NumberInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
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
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput placeholder="Age" loading />;
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

## Uncontrolled

`NumberInput` can be used with uncontrolled forms the same way as a native `input[type="number"]`.
Set the `name` attribute to include number input value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `NumberInput` with `FormData`:

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Number input value:', formData.get('quantity'));
      }}
    >
      <NumberInput
        label="Enter quantity"
        name="quantity"
        defaultValue="1"
        min="1"
        max="100"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Value type

The `value`, `defaultValue`, and `onChange` props can be either string or number. In all cases
when the `NumberInput` value can be represented as a number, the `onChange` function is called
with a number (for example `55`, `1.28`, `-100`, etc.). But there are several cases when
it is not possible to represent the value as a number:

* Empty state is represented as an empty string – `''`
* Numbers that are larger than `Number.MAX_SAFE_INTEGER - 1` or smaller than `Number.MIN_SAFE_INTEGER + 1` are represented as strings – `'90071992547409910'`
* Numbers with trailing decimal separators or trailing decimal zeros are represented as strings – `0.`, `0.0`, `-0.00`, etc.

## BigInt values

`NumberInput` also supports `bigint` values. BigInt mode is inferred from `value` or `defaultValue`:

* `value`/`defaultValue` can be `bigint | string`
* `onChange` receives `bigint | string`
* `min`, `max`, `step`, and `startValue` support `bigint`
* BigInt mode is integer-only (`allowDecimal`/decimal formatting props do not enable decimal parsing)

`string` is still used as a fallback for intermediate states (for example `''` or `'-'`).

```tsx
import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<bigint | string>(BigInt('12345678901234567890'));

  return (
    <NumberInput
      label="BigInt value"
      description="BigInt mode is inferred from defaultValue/value"
      value={value}
      onChange={setValue}
      step={BigInt(10)}
      min={BigInt(0)}
      thousandSeparator=","
      prefix="$"
    />
  );
}
```


## onChange vs onValueChange

`NumberInput` provides two callback props for handling value changes:

* **`onChange`**: Receives a simplified value (`number | string` in default mode, `bigint | string` in BigInt mode). This is the recommended callback for most use cases. The value is a number/bigint when possible, and a string in edge cases (empty input, very large numbers, trailing decimals, intermediate BigInt input states).

* **`onValueChange`**: Receives the full payload from `react-number-format`, which includes:
  * `floatValue`: The numeric value (or `undefined`)
  * `formattedValue`: The formatted string value (with prefix/suffix/separators)
  * `value`: The raw unformatted string value
  * Additional metadata about the change source

Use `onValueChange` when you need access to the formatted value or metadata about the change (e.g., whether it came from user typing, increment/decrement buttons, or programmatic changes). For simple form handling, `onChange` is sufficient.

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      prefix="$"
      thousandSeparator=","
      // onChange receives: 1234
      onChange={(value) => console.log('Simple value:', value)}
      // onValueChange receives: { floatValue: 1234, formattedValue: '$1,234', value: '1234' }
      onValueChange={(payload) => console.log('Full payload:', payload)}
    />
  );
}
```

## min and max

Set the `min` and `max` props to limit the input value:

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
it will not be possible to enter a value outside of the min/max range. Note that this option
may cause issues if you have tight `min` and `max`, for example `min={10}` and `max={20}`.
If you need to disable value clamping entirely, set `clampBehavior="none"`.

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Strict clamping between 0 and 100"
      placeholder="Enter a number"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
```


## Prefix and suffix

Set the `prefix` and `suffix` props to add a given string to the start or end of the input value:

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

The `decimalScale` controls how many decimal places are allowed:

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more than 2"
      decimalScale={2}
    />
  );
}
```


## Fixed decimal scale

Set `fixedDecimalScale` to always display a fixed number of decimal places:

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

Set `decimalSeparator` to change the decimal separator character:

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

Set the `thousandSeparator` prop to separate thousands with a character. You can control
the grouping logic with `thousandsGroupStyle`, which accepts: `thousand`, `lakh`, `wan`, `none` values.

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Thousands are separated with a comma"
        placeholder="Thousands are separated with a comma"
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


## Trim leading zeros on blur

By default, leading zeros are removed when the input loses focus (e.g., `00100` becomes `100`).
You can disable this behavior by setting `trimLeadingZeroesOnBlur={false}`:

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Leading zeros removed on blur"
        placeholder="Type 00100 and click outside"
        trimLeadingZeroesOnBlur
        defaultValue="00100"
      />

      <NumberInput
        label="Leading zeros preserved"
        placeholder="Type 00100 and click outside"
        trimLeadingZeroesOnBlur={false}
        defaultValue="00100"
        mt="md"
      />
    </>
  );
}
```


## Input sections

NumberInput supports left and right sections to display icons, buttons or other content alongside the input.

```tsx
import { NumberInput } from '@mantine/core';
import { CurrencyEthIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <CurrencyEthIcon size={20} />;
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
To hide them, set the `hideControls` prop. You can also use the `rightSection` prop to render anything
in the right section to replace the default controls.

```tsx
import { NumberInput } from '@mantine/core';
import { ChartScatterIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<ChartScatterIcon />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
```


## Increment/decrement on hold

Set the `stepHoldDelay` and `stepHoldInterval` props to define behavior when increment/decrement controls are clicked and held:

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
        description="Steps get faster over time when holding the control button"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
```


## Custom increment and decrement controls

You can get a ref with `increment` and `decrement` functions to create custom controls:

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



#### Props

**NumberInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDecimal | boolean | - | If set, decimal values are allowed |
| allowLeadingZeros | boolean | - | Determines whether leading zeros are allowed during input. If `false`, leading zeros are removed as you type (e.g., typing `007` results in `7`). Works in conjunction with `trimLeadingZeroesOnBlur`. |
| allowNegative | boolean | - | Determines whether negative numbers are allowed. If `false`, the input will not accept negative values, and the decrement button will stop at `0` (when `min` is not set). |
| allowedDecimalSeparators | string[] | - | Characters which when pressed result in a decimal separator. These characters will be replaced by the `decimalSeparator` in the input value. |
| clampBehavior | "none" \| "blur" \| "strict" | - | Controls how values are clamped to the `min`/`max` range: - `'blur'` (default): User can type any value, but it's clamped when the input loses focus - `'strict'`: User cannot type values outside the range - `'none'`: No clamping; `min`/`max` only apply to increment/decrement controls and arrow keys |
| decimalScale | number | - | Limits the number of digits that can be entered after the decimal point |
| decimalSeparator | string | - | Character used as a decimal separator. Generally used with `allowedDecimalSeparators` prop. |
| defaultValue | string \| NumberInputNumericType | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| fixedDecimalScale | boolean | - | If `true`, automatically pads the decimal part with zeros to match `decimalScale` (e.g., with `decimalScale={2}`, typing `5.1` displays as `5.10`). Requires `decimalScale` to be set. |
| handlersRef | Ref<NumberInputHandlers> \| undefined | - | Increment/decrement handlers |
| hideControls | boolean | - | If set, the up/down controls are hidden |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| isAllowed | (values: NumberFormatValues) => boolean | - | A function to validate the input value. If this function returns `false`, the `onChange` will not be called and the input value will not change. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| max | NumberInputNumericType | - | Maximum possible value |
| min | NumberInputNumericType | - | Minimum possible value |
| onChange | (value: NumberInputValue<T>) => void | - | Called when value changes |
| onMaxReached | () => void | - | Called when the decrement button or arrow down key is pressed and the value has reached the minimum |
| onMinReached | () => void | - | Called when the increment button or arrow up key is pressed and the value has reached the maximum |
| onValueChange | OnValueChange | - | Called when value changes with `react-number-format` payload |
| prefix | string | - | Prefix added before the input value |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| selectAllOnFocus | boolean | - | If set, all text is selected when the input receives focus |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| startValue | NumberInputNumericType | - | Value used when incrementing/decrementing an empty input. If `min` is set and `startValue < min`, `min` is used instead. |
| step | NumberInputNumericType | - | Number by which value will be incremented/decremented with up/down controls and keyboard arrows |
| stepHoldDelay | number | - | Initial delay in milliseconds before stepping the value. |
| stepHoldInterval | number \| ((stepCount: number) => number) | - | Interval in milliseconds between value steps when increment/decrement button is held down. Can be a number or a function `(stepCount) => number` for dynamic intervals. Requires `stepHoldDelay` to be set. |
| suffix | string | - | Suffix added after the input value |
| thousandSeparator | string \| boolean | - | A character used to separate thousands |
| thousandsGroupStyle | "none" \| "thousand" \| "lakh" \| "wan" | - | Defines the thousand grouping style. 'thousand' (1,000), 'lakh' (1,00,000), 'wan' (1,0000), 'none'. |
| trimLeadingZeroesOnBlur | boolean | - | If set, leading zeros are removed on blur. For example, `00100` -> `100` |
| type | "text" \| "tel" \| "password" | - | Controls input `type` attribute |
| value | string \| NumberInputNumericType | - | Controlled component value |
| valueIsNumericString | boolean | - | Advanced: Set to `true` if you're passing numeric strings (e.g., `"12345"`) and using formatting props like `prefix` or `suffix`. In most cases, you don't need this prop. See [react-number-format docs](https://www.npmjs.com/package/react-number-format) for details. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
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
| control | data-direction | - | `up` or `down` depending on the control |
