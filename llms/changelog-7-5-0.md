# Changelog750

## DonutChart component

New [DonutChart](https://mantine.dev/llms/charts-donut-chart.md) component:

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## PieChart component

New [PieChart](https://mantine.dev/llms/charts-pie-chart.md) component:

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## @mantine/dates value formatter

[DatePickerInput](https://mantine.dev/llms/dates-date-picker-input.md), [MonthPickerInput](https://mantine.dev/llms/dates-month-picker-input.md) and
[YearPickerInput](https://mantine.dev/llms/dates-year-picker-input.md) now support `valueFormatter` prop.

`valueFormatter` is a more powerful alternative to `valueFormat` prop.
It allows formatting value label with a custom function.
The function is the same for all component types (`default`, `multiple` and `range`)
– you need to perform additional checks inside the function to handle different types.

Example of using a custom formatter function with `type="multiple"`:



## @mantine/dates consistent weeks

You can now force each month to have 6 weeks by setting `consistentWeeks: true` on
[DatesProvider](https://mantine.dev/llms/dates-getting-started.md). This is useful if you want to avoid layout
shifts when month changes.

```tsx
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
```


## Charts series label

It is now possible to change series labels with `label` property
in `series` object. This feature is supported in [AreaChart](https://mantine.dev/llms/charts-area-chart.md),
[BarChart](https://mantine.dev/llms/charts-bar-chart.md) and [LineChart](https://mantine.dev/llms/charts-line-chart.md) components.

```tsx
// Demo.tsx
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
        { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
        { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Charts value formatter

All `@mantine/charts` components now support `valueFormatter` prop, which allows
formatting value that is displayed on the y axis and inside the tooltip.

```tsx
// Demo.tsx
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Headings text wrap

New [Title](https://mantine.dev/llms/core-title.md) `textWrap` prop sets [text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
CSS property. It controls how text inside an element is wrapped.

```tsx
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3} textWrap="wrap">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
```


You can also set `textWrap` on [theme](https://mantine.dev/llms/theming-theme-object.md):

```tsx
import { createTheme, MantineProvider, Title } from '@mantine/core';

const theme = createTheme({
  headings: {
    textWrap: 'wrap',
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title>Some very long title that should wrap</Title>
    </MantineProvider>
  );
}
```

If set on theme, `textWrap` is also applied to headings in [Typography](https://mantine.dev/llms/core-typography.md)

## mod prop

All components now support `mod` prop, which allows adding data attributes to
the root element:

```tsx
import { Box } from '@mantine/core';

<Box mod="data-button" />;
// -> <div data-button />

<Box mod={{ opened: true }} />;
// -> <div data-opened />

<Box mod={{ opened: false }} />;
// -> <div />

<Box mod={['button', { opened: true }]} />;
// -> <div data-button data-opened />

<Box mod={{ orientation: 'horizontal' }} />;
// -> <div data-orientation="horizontal" />
```

## Documentation updates

* New [testing with Vitest guide](https://mantine.dev/llms/guides-vitest.md)
* [NativeSelect](https://mantine.dev/llms/core-native-select.md#with-dividers) with dividers demo
* [Popover](https://mantine.dev/llms/core-popover.md#middlewares) `shift` and `flip` middlewares documentation
* [Combobox](https://mantine.dev/llms/core-combobox.md#popover-props) props related to [Popover](https://mantine.dev/llms/core-popover.md) documentation
* [Loading styles from CDN guide](https://mantine.dev/llms/styles-mantine-styles.md#loading-styles-from-cdn)
* [Anchor](https://mantine.dev/llms/core-anchor.md#text-props) now includes additional documentation on how to use [Text](https://mantine.dev/llms/core-text.md) props
* [Pagination](https://mantine.dev/llms/core-pagination.md) now includes props tables for all compound components
* A more detailed breakdown of [browser support](https://mantine.dev/llms/about.md#browser-support) has been added to the about page

## Help center updates

New articles added to the [help center](https://help.mantine.dev):

* [Can I use Mantine with Astro?](https://help.mantine.dev/q/can-i-use-mantine-with-astro)
* [How can I contribute to the library?](https://help.mantine.dev/q/how-can-i-contribute)
* [How can I add dynamic CSS styles?](https://help.mantine.dev/q/dynamic-css-styles)
* [How can I load fonts in Next.js?](https://help.mantine.dev/q/next-load-fonts)
* [How can I load fonts in Vite?](https://help.mantine.dev/q/vite-load-fonts)
* [Is there a floating action button component?](https://help.mantine.dev/q/floating-action-button)
* [How to change inputs placeholder color?](https://help.mantine.dev/q/inputs-placeholder-color)
* [I do not have styles in my dates components...](https://help.mantine.dev/q/dates-missing-styles)

## Other changes

* [Checkbox.Group](https://mantine.dev/llms/core-checkbox.md), [Radio.Group](https://mantine.dev/llms/core-radio.md) and [Switch.Group](https://mantine.dev/llms/core-switch.md) now support `readOnly` prop
* [ActionIcon](https://mantine.dev/llms/core-action-icon.md) now has `loading` state animation
* [SegmentedControl](https://mantine.dev/llms/core-segmented-control.md) now supports `withItemsBorder` prop which allows removing border between items
* [Progress](https://mantine.dev/llms/core-progress.md) now supports `transitionDuration` prop which controls section width animation duration
* [Textarea](https://mantine.dev/llms/core-textarea.md) and [JsonInput](https://mantine.dev/llms/core-json-input.md) components now support `resize` prop, which allows setting `resize` CSS property on the input
* `@mantine/hooks` package now exports [readLocalStorageValue and readSessionStorageValue](https://mantine.dev/llms/hooks-use-local-storage.md#read-storage-value) function to get value from storage outside of React components
