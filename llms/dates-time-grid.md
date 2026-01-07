# TimeGrid
Package: @mantine/dates
Import: import { TimeGrid } from '@mantine/dates';
Description: Captures time value from the user with a predefined set of options

## Usage

Use `TimeGrid` component to capture time value from the user with a
predefined set of time slots:

#### Example: usage

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';


function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
      simpleGridProps={{
        type: 'container',
        cols: { base: 1, '180px': 2, '320px': 3 },
        spacing: 'xs',
      }}
      
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { TimeGrid } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>('10:00');
  return <TimeGrid value={value} onChange={setValue} data={['10:00', '12: 00']} />;
}
```

## data prop

`data` prop accepts an array of time values in 24-hour format. Values
must be unique. To generate time range use `getTimeRange` function
exported from `@mantine/dates` package:

```tsx
import { TimeGrid, getTimeRange } from '@mantine/dates';

function WithArray() {
  return <TimeGrid data={['10:00', '12:00']} />
}

function WithRange() {
  // In this example we generate time range from 10:00 to 14:00 with 1 hour step:
  // ['10:00', '11:00', '12:00', '13:00', '14:00']
  return <TimeGrid data={getTimeRange({ from: '10:00', to: '14:00', step: '01:00' })} />
}
```

## Min and max time

Set `minTime` and `maxTime` props to limit available time range.
Both props accept time values in 24-hour format:

#### Example: minMax

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      minTime="11:00"
      maxTime="18:00"
    />
  );
}
```


## Disable specific controls

You can disable specific time values by providing an array of disabled
values to the `disableTime` prop:

#### Example: disableTime

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '11:45', interval: '00:15' })}
      disableTime={['10:45', '11:00', '11:30']}
    />
  );
}
```


## Allow deselect

Set `allowDeselect` prop to allow deselecting time value by clicking on
the control with selected value:

#### Example: allowDeselect

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '12:00', interval: '01:00' })}
      defaultValue="11:00"
      allowDeselect
    />
  );
}
```


## Change AM/PM labels

#### Example: amPmLabels

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      format="12h"
      amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }}
    />
  );
}
```


## Disabled

Set `disabled` prop to disable all controls:

#### Example: disabled

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      disabled
    />
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether the value can be deselected when the current active option is clicked or activated with keyboard |
| amPmLabels | { am: string; pm: string } | - | Labels used for am/pm values |
| data | string[] | required | Time data in 24h format to be displayed in the grid, for example <code>['10:00', '18:30', '22:00']</code>. Time values must be unique. |
| defaultValue | string | null | - | Uncontrolled component default value |
| disableTime | string[] | ((time: string) => boolean) | - | Array of time values to disable |
| disabled | boolean | - | If set, all controls are disabled |
| format | "12h" | "24h" | - | Time format displayed in the grid |
| getControlProps | (time: string) => React.ComponentPropsWithoutRef<"button"> | - | A function to pass props down to control based on the time value |
| maxTime | string | - | All controls after this time are disabled |
| minTime | string | - | All controls before this time are disabled |
| onChange | (value: string | null) => void | - | Called when value changes |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| simpleGridProps | SimpleGridProps | - | Props passed down to the underlying <code>SimpleGrid</code> component |
| size | MantineSize | - | Control <code>font-size</code> of controls, key of <code>theme.fontSizes</code> or any valid CSS value |
| value | string | null | - | Controlled component value |
| withSeconds | boolean | - | Determines whether the seconds part should be displayed |


#### Styles API

TimeGrid component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TimeGrid selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-TimeGrid-root | Root element |
| control | .mantine-TimeGrid-control | Time grid control |
| simpleGrid | .mantine-TimeGrid-simpleGrid | SimpleGrid component root |

**TimeGrid CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --time-grid-fz | Controls `font-size` property of all controls |
| root | --time-grid-radius | Controls `border-radius` property of all controls |

**TimeGrid data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Current component value is the same as control value | - |
| control | data-disabled | Component is disabled by one of the props:  | - |