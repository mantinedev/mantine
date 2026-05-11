# RollingNumber
Package: @mantine/core
Import: import { RollingNumber } from '@mantine/core';
Description: Animate value changes with rolling digits

## Usage

`RollingNumber` animates value changes with rolling digit transitions. Each digit
independently rolls to its new position when the value changes.

```tsx
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(1234);

  return (
    <>
      <RollingNumber value={value} fz="36px" />
      <Group mt="md">
        <Button onClick={() => setValue((v) => v + 1)}>Increment</Button>
        <Button onClick={() => setValue((v) => v - 1)}>Decrement</Button>
        <Button onClick={() => setValue(Math.floor(Math.random() * 10000))}>Random</Button>
      </Group>
    </>
  );
}
```


## Prefix and suffix

Set `prefix` and `suffix` props to add static text before or after the animated number.
Use `thousandSeparator` to separate thousands and `decimalScale` with `fixedDecimalScale`
to control decimal formatting:

```tsx
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(99.99);

  return (
    <>
      <RollingNumber
        value={value}
        prefix="$ "
        suffix=" USD"
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator
        fz="32px"
      />
      <Group mt="md">
        <Button onClick={() => setValue((v) => +(v + 10.5).toFixed(2))}>+10.50</Button>
        <Button onClick={() => setValue((v) => +(v - 10.5).toFixed(2))}>-10.50</Button>
        <Button onClick={() => setValue(+(Math.random() * 10000).toFixed(2))}>Random</Button>
      </Group>
    </>
  );
}
```


## Animation duration

Control animation speed with `animationDuration` prop (in milliseconds, default is `600`).
Use `timingFunction` prop to change the CSS timing function (default is `ease`):

```tsx
import { useState } from 'react';
import { Button, Group, RollingNumber, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(500);

  return (
    <Stack>
      <div>
        <Text size="sm" c="dimmed">200ms</Text>
        <RollingNumber value={value} animationDuration={200} fz="28px" />
      </div>
      <div>
        <Text size="sm" c="dimmed">600ms (default)</Text>
        <RollingNumber value={value} animationDuration={600} fz="28px" />
      </div>
      <div>
        <Text size="sm" c="dimmed">1200ms</Text>
        <RollingNumber value={value} animationDuration={1200} fz="28px" />
      </div>
      <Group>
        <Button onClick={() => setValue(Math.floor(Math.random() * 1000))}>Random</Button>
      </Group>
    </Stack>
  );
}
```



#### Props

**RollingNumber props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animationDuration | number | - | Animation duration in milliseconds |
| decimalScale | number | - | Number of decimal places to display |
| decimalSeparator | string | - | Character used as a decimal separator |
| fixedDecimalScale | boolean | - | If set, trailing zeros are added to match `decimalScale` |
| prefix | string | - | Prefix added before the value |
| suffix | string | - | Suffix added after the value |
| tabularNumbers | boolean | - | If set, use tabular (monospace) numbers |
| thousandSeparator | string \| boolean | - | Character used to separate thousands, set to `true` for `,` |
| timingFunction | string | - | CSS timing function for animation |
| value | number | required | Number value to display |
| withLiveRegion | boolean | - | If set, the root element acts as an `aria-live="polite"` region (`role="status"`) and screen readers announce every value change. When `false`, the root uses `role="img"` so the current value is still accessible but updates are not announced. |