# Changelog7110

## withProps function

All Mantine components now have `withProps` static function that can be used to
add default props to the component:

```tsx
import { IMaskInput } from 'react-imask';
import { Button, InputBase } from '@mantine/core';

const LinkButton = Button.withProps({
  component: 'a',
  target: '_blank',
  rel: 'noreferrer',
  variant: 'subtle',
});

const PhoneInput = InputBase.withProps({
  mask: '+7 (000) 000-0000',
  component: IMaskInput,
  label: 'Your phone number',
  placeholder: 'Your phone number',
});

function Demo() {
  return (
    <>
      {/* You can pass additional props to components created with `withProps` */}
      <LinkButton href="https://mantine.dev">
        Mantine website
      </LinkButton>

      {/* Component props override default props defined in `withProps` */}
      <PhoneInput placeholder="Personal phone" />
    </>
  );
}
```

## Avatar initials

[Avatar](https://mantine.dev/llms/core-avatar.md) component now supports displaying initials with auto generated color based on the given `name` value.
To display initials instead of the default placeholder, set `name` prop
to the name of the person, for example, `name="John Doe"`. If the name
is set, you can use `color="initials"` to generate color based on the name:

```tsx
import { Avatar, Group } from '@mantine/core';

${namesCode}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
```


## BubbleChart component

New [BubbleChart](https://mantine.dev/llms/charts-bubble-chart.md) component:

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```


## BarChart waterfall type

[BarChart](https://mantine.dev/llms/charts-bar-chart.md) component now supports `waterfall` type
which is useful for visualizing changes in values over time:

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="item"
      type="waterfall"
      series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      withLegend
    />
  );
}

// data.ts
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
```


## LineChart gradient type

[LineChart](https://mantine.dev/llms/charts-line-chart.md) component now supports `gradient` type
which renders line chart with gradient fill:

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      series={[{ name: 'temperature', label: 'Avg. Temperature' }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: 0, color: 'red.6' },
        { offset: 20, color: 'orange.6' },
        { offset: 40, color: 'yellow.5' },
        { offset: 70, color: 'lime.5' },
        { offset: 80, color: 'cyan.5' },
        { offset: 100, color: 'blue.5' },
      ]}
      strokeWidth={5}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => `${value}°C`}
    />
  );
}

// data.ts
export const data = [
  { date: 'Jan', temperature: -25 },
  { date: 'Feb', temperature: -10 },
  { date: 'Mar', temperature: 5 },
  { date: 'Apr', temperature: 15 },
  { date: 'May', temperature: 30 },
  { date: 'Jun', temperature: 15 },
  { date: 'Jul', temperature: 30 },
  { date: 'Aug', temperature: 40 },
  { date: 'Sep', temperature: 15 },
  { date: 'Oct', temperature: 20 },
  { date: 'Nov', temperature: 0 },
  { date: 'Dec', temperature: -10 },
];
```


## Right Y axis

[LineChart](https://mantine.dev/llms/charts-line-chart.md), [BarChart](https://mantine.dev/llms/charts-bar-chart.md) and [AreaChart](https://mantine.dev/llms/charts-area-chart.md) components
now support `rightYAxis` prop which renders additional Y axis on the right side of the chart:

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}

// data.ts
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
```


## RadarChart legend

[RadarChart](https://mantine.dev/llms/charts-radar-chart.md) component now supports legend:

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      withLegend
      series={[
        { name: 'Sales January', color: 'blue.6', opacity: 0.2 },
        { name: 'Sales February', color: 'orange.6', opacity: 0.2 },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## TagsInput acceptValueOnBlur

[TagsInput](https://mantine.dev/llms/core-tags-input.md) component behavior has been changed. Now By default,
if the user types in a value and blurs the input, the value is added to the list.
You can change this behavior by setting `acceptValueOnBlur` to `false`. In this case, the value is added
only when the user presses `Enter` or clicks on a suggestion.

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Value IS accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur
      />
      <TagsInput
        label="Value IS NOT accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur={false}
        mt="md"
      />
    </>
  );
}
```


## Transition delay

[Transition](https://mantine.dev/llms/core-transition.md) component now supports `enterDelay` and `exitDelay` props to delay transition start:

```tsx
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}
```


## Documentation updates

* New [segmented progress](https://mantine.dev/llms/core-progress.md#example-progress-with-segments) example has been added to `Progress` component documentation
* [Select](https://mantine.dev/llms/core-select.md), [TagsInput](https://mantine.dev/llms/core-tags-input.md) and [MultiSelect](https://mantine.dev/llms/core-multi-select.md) components documentation now includes additional demo on how to change the dropdown width
* New [DatePicker](https://mantine.dev/llms/dates-date-picker.md#exclude-dates) example for `excludeDate` prop

## Other changes

* [Pagination](https://mantine.dev/llms/core-pagination.md) component now supports `hideWithOnePage` prop which hides pagination when there is only one page
* [Spoiler](https://mantine.dev/llms/core-spoiler.md) component now supports controlled expanded state with `expanded` and `onExpandedChange` props
* [Burger](https://mantine.dev/llms/core-burger.md) component now supports `lineSize` prop to change lines height
* [Calendar](https://mantine.dev/llms/dates-calendar.md), [DatePicker](https://mantine.dev/llms/dates-date-picker.md) and other similar components now support `highlightToday` prop to highlight today's date
