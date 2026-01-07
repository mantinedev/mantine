# Heatmap
Package: @mantine/charts
Import: import { Heatmap } from '@mantine/charts';
Description: Heatmap chart component

## Usage

`Heatmap` is used to display data in a table where each column represents a week.
The only required prop is `data` – object where keys are dates in `YYYY-MM-DD` format and values are numbers.

`startDate` and `endDate` props are optional, they are used to define heatmap range.
If not set, heatmap will display data for the last year.

#### Example: usage

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Data format

`Heatmap` expects data in the following format:

```tsx
export const data = {
  '2025-02-14': 2,
  '2025-02-11': 3,
  '2025-02-06': 4,
  '2025-02-05': 1,
  '2025-02-03': 2,
  '2025-02-01': 2,
  '2025-01-31': 4,
  '2025-01-30': 2,
  // ...
};
```

## With tooltip

Set `withTooltip` and `getTooltipLabel` props to display tooltip when
`Heatmap` cells are hovered. `getTooltipLabel` is called with date and value
and must return string to display in tooltip.

#### Example: tooltip

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        `${dayjs(date).format('DD MMM, YYYY')} – ${value === null || value === 0 ? 'No contributions' : `${value} contribution${value > 1 ? 's' : ''}`}`
      }
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Change colors

`Heatmap` colors can be changed with `colors` prop. It should be an array of any
valid CSS color values (hex, rgba, CSS variables, etc.). By default, `Heatmap`
uses 4 colors to indicate heat level, but you can pass any number of colors.

#### Example: colors

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Colors depending on color scheme

If you want to change colors depending on the color scheme,
you should define those colors in `.css` file:

#### Example: cssColors

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


Note that in this case, you can only use 4 colors without passing `colors` prop.
If you need more colors, you should pass them manually to the component:

```tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
      colors={[
        'var(--heatmap-level-1)',
        'var(--heatmap-level-2)',
        'var(--heatmap-level-3)',
        'var(--heatmap-level-4)',
        'var(--heatmap-level-5)',
        'var(--heatmap-level-6)',
      ]}
    />
  );
}
```

## Values domain

By default, `Heatmap` calculates domain based on data values, for example, for
the following data, the domain will be `[1, 4]`:

```tsx
const data = {
  '2025-02-14': 2,
  '2025-02-11': 3,
  '2025-02-06': 4,
  '2025-02-05': 1,
};
```

Based on the domain, `Heatmap` calculates colors for each rect: 1 – min heat level,
4 – max heat level. To specify domain manually, use `domain` prop. It is useful
when your data does not cover the whole range of possible values. For example,
the subset of data passed to the heatmap has values from 1 to 4, but the actual
range is from 1 to 10. In this case, you can pass `[1, 10]` to `domain` prop:

```tsx
import { Heatmap } from '@mantine/charts';

const data = {
  '2025-02-14': 2,
  '2025-02-11': 3,
  '2025-02-06': 4,
  '2025-02-05': 1,
};

function Demo() {
  return <Heatmap data={data} domain={[1, 10]} />;
}
```

## Weekdays and months labels

Set `withMonthLabels` and `withWeekdayLabels` props to display chart labels:

#### Example: labels

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Change labels text

To change labels, use `weekdayLabels` and `monthLabels` props.
`weekdayLabels` prop must be an array of 7 strings with weekday names starting from Sunday.
`monthLabels` prop must be an array of 12 strings with month names starting from January.

#### Example: labelsText

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['Вс', 'Пн', '', 'Ср', '', 'Пт', '']}
      monthLabels={[
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ]}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Rect size, gap and radius

#### Example: rectSize

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Pass props to rect

Use `getRectProps` to pass props to each rect. For example,
it can be used to add onClick handler to each rect:

#### Example: getRectProps

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Hide outside dates

#### Example: withOutsideDates

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => `${date} – ${value ?? 0} contributions`}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## First day of week

The default first day of the week is Monday, you can change it with `firstDayOfWeek` prop:

#### Example: firstDayOfWeek

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => `${date} – ${value ?? 0} contributions`}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Split months

Use `splitMonths` to separate months visually with a spacer column and show only days that belong to the current month in each column. Month labels will be shifted by one column when `splitMonths` is enabled and months with fewer than 2 weeks are not labeled.

#### Example: splitMonths

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      splitMonths
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| colors | string[] | - | Colors array, used to calculate color for each value, by default 4 shades of green colors are used |
| data | Record<string, number> | required | Heatmap data, key is date in <code>YYYY-MM-DD</code> format (interpreted as a UTC calendar day) |
| domain | [number, number] | - | Heatmap domain, array of 2 numbers, min and max values, calculated from data by default |
| endDate | string | Date | - | Heatmap end date. Current date by default. Date is normalized to UTC midnight of the intended calendar day. |
| firstDayOfWeek | 0 | 2 | 1 | 3 | 4 | 5 | 6 | - | First day of week, 0 – Sunday, 1 – Monday. |
| fontSize | number | - | Font size of month and weekday labels |
| gap | number | - | Gap between rects in px |
| getRectProps | (input: HeatmapRectData) => Omit<SVGProps<SVGRectElement>, "ref"> | - | Props passed down to each rect depending on its date and associated value |
| getTooltipLabel | (input: HeatmapRectData) => ReactNode | - | A function to generate tooltip label based on the hovered rect date and value, required for the tooltip to be visible |
| monthLabels | string[] | - | Month labels, array of 12 elements, can be used for localization |
| monthsLabelsHeight | number | - | Height of month labels row |
| rectRadius | number | - | Rect radius in px |
| rectSize | number | - | Size of day rect in px |
| splitMonths | boolean | - | If set, inserts a spacer column between months |
| startDate | string | Date | - | Heatmap start date. Current date - 1 year by default. Date is normalized to UTC midnight of the intended calendar day. |
| tooltipProps | Partial<TooltipFloatingProps> | - | Props passed down to the <code>Tooltip.Floating</code> component |
| weekdayLabels | string[] | - | Weekday labels, array of 7 elements, can be used for localization |
| weekdaysLabelsWidth | number | - | Width of weekday labels column |
| withMonthLabels | boolean | - | If set, month labels are displayed |
| withOutsideDates | boolean | - | If set, trailing dates that do not fall into the given <code>startDate</code> – <code>endDate</code> range are displayed to fill empty space. |
| withTooltip | boolean | - | If set, tooltip is displayed on rect hover |
| withWeekdayLabels | boolean | - | If set, weekday labels are displayed |


#### Styles API

Heatmap component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Heatmap selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Heatmap-root | Root element |
| weekdayLabel | .mantine-Heatmap-weekdayLabel | Weekday text element |
| monthLabel | .mantine-Heatmap-monthLabel | Month text element |
| rect | .mantine-Heatmap-rect | Rect that represents date |