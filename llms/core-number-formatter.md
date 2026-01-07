# NumberFormatter
Package: @mantine/core
Import: import { NumberFormatter } from '@mantine/core';
Description: Format number with thousands/decimal separators and suffix/prefix

## Usage

Use `NumberFormatter` to format numbers. It supports the same formatting related props
as [NumberInput](https://mantine.dev/core/number-input/) component.

#### Example: usage

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
```


## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the value:

#### Example: prefixSuffix

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
```


## Thousands separator

Set `thousandSeparator` prop to separate thousands with a character. You can control
grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

#### Example: thousandsSeparator

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{' '}
        <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  );
}
```


## Decimal scale

`decimalScale` prop controls the number of allowed decimal places:

#### Example: decimalScale

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowNegative | boolean | - | If set, negative values are allowed |
| decimalScale | number | - | Limits the number of digits that are displayed after the decimal point |
| decimalSeparator | string | - | Character used as a decimal separator, <code>'.'</code> by default |
| fixedDecimalScale | boolean | - | If set, zeros are added after <code>decimalSeparator</code> to match given <code>decimalScale</code>. |
| prefix | string | - | Prefix added before the value |
| suffix | string | - | Suffix added after the value |
| thousandSeparator | string | boolean | - | A character used to separate thousands |
| thousandsGroupStyle | "none" | "thousand" | "lakh" | "wan" | - | Defines the thousand grouping style |
| value | string | number | - | Value to format |