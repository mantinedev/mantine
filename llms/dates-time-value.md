# TimeValue
Package: @mantine/dates
Import: import { TimeValue } from '@mantine/dates';
Description: Display a formatted time value

## Usage

Use `TimeValue` component to display time in different formats:

#### Example: usage

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value="18:45:34" />
      </Text>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" />
      </Text>
    </div>
  );
}
```


## With seconds

Use `withSeconds` prop to display seconds:

#### Example: withSeconds

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" withSeconds />
      </Text>
      <Text>
        24h format: <TimeValue value="18:45:34" withSeconds />
      </Text>
    </div>
  );
}
```


## AM/PM labels

Use `amPmLabels` prop to display AM/PM labels:

#### Example: amPmLabels

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        Custom AM/PM labels:{' '}
        <TimeValue value="18:45:34" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
      </Text>
    </div>
  );
}
```


## Date object

You can use `Date` object instead of string as `value`:

#### Example: dateObject

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
      <Text>
        12h format: <TimeValue format="12h" value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
    </div>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| amPmLabels | { am: string; pm: string } | - | AM/PM labels |
| format | "12h" | "24h" | - | Time format |
| value | string | Date | required | Time to format |
| withSeconds | boolean | - | Determines whether seconds should be displayed |