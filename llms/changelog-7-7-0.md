# Changelog770

## Virtual colors

Virtual color is a special color which values should be different for light and dark color schemes.
To define a virtual color, use `virtualColor` function which accepts an object with the following
properties as a single argument:

* `name` – color name, must be the same as the key in `theme.colors` object
* `light` – a key of `theme.colors` object for light color scheme
* `dark` – a key of `theme.colors` object for dark color scheme

To see the demo in action, switch between light and dark color schemes (`Ctrl + J`):

```tsx
// App.tsx
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import { Demo } from './Demo';

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}

// Demo.tsx
import { Box } from '@mantine/core';

export function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
```


## FloatingIndicator component

New [FloatingIndicator](https://mantine.dev/llms/core-floating-indicator.md) component:

```tsx
import { useState } from 'react';
import { ArrowDownIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpRightIcon, CircleIcon } from '@phosphor-icons/react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('center');

  const setControlRef = (name: string) => (node: HTMLButtonElement) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <div className={classes.root} dir="ltr" ref={setRootRef}>
      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />

      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-left')}
          ref={setControlRef('up-left')}
          mod={{ active: active === 'up-left' }}
        >
          <ArrowUpLeftIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up')}
          ref={setControlRef('up')}
          mod={{ active: active === 'up' }}
        >
          <ArrowUpIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-right')}
          ref={setControlRef('up-right')}
          mod={{ active: active === 'up-right' }}
        >
          <ArrowUpRightIcon size={26} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('left')}
          ref={setControlRef('left')}
          mod={{ active: active === 'left' }}
        >
          <ArrowLeftIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('center')}
          ref={setControlRef('center')}
          mod={{ active: active === 'center' }}
        >
          <CircleIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('right')}
          ref={setControlRef('right')}
          mod={{ active: active === 'right' }}
        >
          <ArrowRightIcon size={26} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-left')}
          ref={setControlRef('down-left')}
          mod={{ active: active === 'down-left' }}
        >
          <ArrowDownLeftIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down')}
          ref={setControlRef('down')}
          mod={{ active: active === 'down' }}
        >
          <ArrowDownIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-right')}
          ref={setControlRef('down-right')}
          mod={{ active: active === 'down-right' }}
        >
          <ArrowDownRightIcon size={26} />
        </UnstyledButton>
      </div>
    </div>
  );
}
```


## ScatterChart component

New [ScatterChart](https://mantine.dev/llms/charts-scatter-chart.md) component:

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## colorsTuple function

New `colorsTuple` function can be used to:

* Use single color as the same color for all shades
* Transform dynamic string arrays to Mantine color tuple (the array should still have 10 values)

```tsx
import { colorsTuple, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    custom: colorsTuple('#FFC0CB'),
    dynamic: colorsTuple(
      Array.from({ length: 10 }, (_, index) => '#FFC0CB')
    ),
  },
});
```

## use-mutation-observer hook

New [useMutationObserver](https://mantine.dev/llms/hooks-use-mutation-observer.md) hook:

```tsx
import { useState } from 'react';
import { Kbd, Text } from '@mantine/core';
import { useMutationObserverTarget } from '@mantine/hooks';

function Demo() {
  const [lastMutation, setLastMutation] = useState('');

  useMutationObserverTarget(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          mutation.target instanceof HTMLElement &&
            setLastMutation(mutation.target.getAttribute('dir') || '');
        }
      });
    },
    {
      attributes: true,
      attributeFilter: ['dir'],
    },
    () => document.documentElement
  );

  return (
    <>
      <Text>
        Press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>L</Kbd> to change direction
      </Text>

      <Text mt={10}>Direction was changed to: {lastMutation || 'Not changed yet'}</Text>
    </>
  );
}
```


## use-state-history hook

New [useStateHistory](https://mantine.dev/llms/hooks-use-state-history.md) hook:

```tsx
import { Button, Code, Group, Text } from '@mantine/core';
import { useStateHistory } from '@mantine/hooks';

function Demo() {
  const [value, handlers, history] = useStateHistory(1);
  return (
    <>
      <Text>Current value: {value}</Text>
      <Group my="md">
        <Button onClick={() => handlers.set(Math.ceil(Math.random() * 100) + 1)}>Set value</Button>
        <Button onClick={() => handlers.back()}>Back</Button>
        <Button onClick={() => handlers.forward()}>Forward</Button>
        <Button onClick={() => handlers.reset()}>Reset</Button>
      </Group>
      <Code block>{JSON.stringify(history, null, 2)}</Code>
    </>
  );
}
```


## Axis labels

[AreaChart](https://mantine.dev/llms/charts-area-chart.md), [BarChart](https://mantine.dev/llms/charts-bar-chart.md) and [LineChart](https://mantine.dev/llms/charts-line-chart.md)
components now support `xAxisLabel` and `yAxisLabel` props:

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
      xAxisLabel="Date"
      yAxisLabel="Amount"
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


## Documentation updates

* New section has been added to the [responsive guide](https://mantine.dev/llms/styles-responsive.md#hidden-and-visible-from-as-classes) on how to use `mantine-hidden-from-{x}` and `mantine-visible-from-{x}` classes.
* [Jest](https://mantine.dev/llms/guides-jest.md) and [Vitest](https://mantine.dev/llms/guides-vitest.md) guides configuration has been updated to include mocks for `window.HTMLElement.prototype.scrollIntoView`
* [CSS variables](https://mantine.dev/llms/styles-css-variables.md) documentation has been updated to include more information about typography and colors variables

## Help center updates

New articles added to the [help center](https://help.mantine.dev):

* [Can I use SegmentedControl with empty value?](https://help.mantine.dev/q/segmented-control-no-value)
* [Is there a comparison with other libraries?](https://help.mantine.dev/q/other-libs)
* [Can I use Mantine with Vue/Svelte/Angular/etc.?](https://help.mantine.dev/q/vue-svelte-angular)
* [How can I test Select/MultiSelect components?](https://help.mantine.dev/q/combobox-testing)

## Other changes

* [SegmentedControl](https://mantine.dev/llms/core-segmented-control.md) indicator positioning logic has been migrated to [FloatingIndicator](https://mantine.dev/llms/core-floating-indicator.md). It is now more performant and works better when used inside elements with `transform: scale()`.
* New [use-mounted](https://mantine.dev/llms/hooks-use-mounted.md) hook
* [Sparkline](https://mantine.dev/llms/charts-sparkline.md) now supports `connectNulls` and `areaProps` props
* [Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md), [Autocomplete](https://mantine.dev/llms/core-autocomplete.md) and [TagsInput](https://mantine.dev/llms/core-tags-input.md) components now support `scrollAreaProps` prop to pass props down to the [ScrollArea](https://mantine.dev/llms/core-scroll-area.md) component in the dropdown
* [Transition](https://mantine.dev/llms/core-transition.md) component now supports 4 new transitions: `fade-up`, `fade-down`, `fade-left`, `fade-right`
* Default [Modal](https://mantine.dev/llms/core-modal.md) transition was changed to `fade-down`. This change resolves issues with [SegmentedControl](https://mantine.dev/llms/core-segmented-control.md) indicator positioning when used inside modals.
* You can now reference headings font sizes and line heights in `fz` and `lh` style props with `h1`, `h2`, `h3`, `h4`, `h5`, `h6` values
