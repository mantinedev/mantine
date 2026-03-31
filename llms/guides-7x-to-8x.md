# SevenToEight

# 7.x → 8.x migration guide

## Global styles imports

If you used separate styles imports from `@mantine/core/styles/global.css`, you need to update imports to use new files.
Note that if you previously imported `@mantine/core/styles.css`, no changes are required – all new files are already included in `styles.css`.

7.x version import:

```tsx
// ❌ No longer includes all global styles
import '@mantine/core/styles/global.css';
```

8.x version import:

```tsx
// ✅ Import all global styles separately
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
```

If you used `@mantine/core/styles.css`, no changes are required;
the import works the same in 7.x and 8.x versions:

```tsx
// 👍 No changes needed if you used styles.css
import '@mantine/core/styles.css';
```

## Portal reuseTargetNode

The `reuseTargetNode` prop of the [Portal](https://mantine.dev/llms/core-portal.md) component is now enabled by default.
This option improves performance by reusing the target node between portal renders, but
in some edge cases, it might cause issues with `z-index` stacking context.

If you experience issues with `z-index`, change the `reuseTargetNode` prop to `false` in theme:

```tsx
import { createTheme, Portal } from '@mantine/core';

export const theme = createTheme({
  components: {
    Portal: Portal.extend({
      defaultProps: {
        // ✅ Disable reuseTargetNode by default if your application has z-index issues
        reuseTargetNode: false,
      },
    }),
  }
});
```

## Switch withThumbIndicator

The [Switch](https://mantine.dev/llms/core-switch.md) component's default styles have been updated; it now
includes a checked state indicator inside the thumb. If you want to use the
old styles without the indicator, set the `withThumbIndicator` prop to `false` in the theme:

```tsx
import { createTheme, Switch } from '@mantine/core';

export const theme = createTheme({
  components: {
    Switch: Switch.extend({
      defaultProps: {
        // ✅ Disable withThumbIndicator if you want to use old styles
        withThumbIndicator: false,
      },
    }),
  }
});
```

## Date string values

`@mantine/dates` components now use date string values in `onChange` and other callbacks.
If you want to continue using `@mantine/dates` components the same way as in 7.x, you need
to convert callback values to `Date` objects:

```tsx
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export function Demo7x() {
  const [value, setValue] = useState<Date | null>(null);
  // ⛔ 7.x – onChange is called with Date object
  return <DatePicker value={value} onChange={setValue} />
}

export function Demo8x() {
  const [value, setValue] = useState<Date | null>(null);
  // ✅ 8.x – onChange is called with string date value (for example '1994-08-21')
  // You can either
  // 1. Convert it to Date object to preserve old behavior
  // 2. Update your code to use date string values instead
  return <DatePicker value={value} onChange={val => setValue(new Date(val))} />
}
```

## DatesProvider timezone

The `DatesProvider` component no longer supports the `timezone` option:

```tsx
import { DatesProvider } from '@mantine/dates';

function Demo7x() {
  // ❌ The timezone option is no longer supported
  return (
    <DatesProvider settings={{ timezone: 'UTC', consistentWeeks: true }}>
      App
    </DatesProvider>
  );
}

function Demo8x() {
  // ✅ Remove the timezone option
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      App
    </DatesProvider>
  );
}
```

If you need to handle timezones in your application, you can use a dedicated date library
([dayjs](https://day.js.org/), [luxon](https://moment.github.io/luxon/#/), [date-fns](https://date-fns.org/))
to update timezone values. Example of using Mantine components with [dayjs](https://day.js.org/):

```tsx
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>('2022-08-21');

  // Mantine components use strings as values; you can pass these
  // strings to a date library of your choice to assign a timezone
  const dateWithTimeZone = dayjs(value).tz("America/Toronto").toDate();

  return <DatePicker value={value} onChange={setValue} />;
}
```

## DateTimePicker timeInputProps

The [DateTimePicker](https://mantine.dev/llms/dates-date-time-picker.md) component no longer accepts the `timeInputProps` prop,
as the underlying [TimeInput](https://mantine.dev/llms/dates-time-input.md) component was replaced with [TimePicker](https://mantine.dev/llms/dates-time-picker.md).
To pass props down to the [TimePicker](https://mantine.dev/llms/dates-time-picker.md) component, use the `timePickerProps` prop instead.

7.x version:

```tsx
import { DateTimePicker } from '@mantine/dates';
import { ClockIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <DateTimePicker
      // ❌ timeInputProps is no longer available
      timeInputProps={{
        leftSection: <ClockIcon size={16} />,
      }}
    />
  );
}
```

8.x version:

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      // ✅ Use timePickerProps instead of timeInputProps
      timePickerProps={{
        leftSection: <ClockIcon size={16} />,
        minutesStep: 5,
        withDropdown: true,
      }}
    />
  );
}
```

## CodeHighlight usage

The [@mantine/code-highlight](https://mantine.dev/llms/x-code-highlight.md) package no longer depends on [highlight.js](https://highlightjs.org).
You can follow the [updated documentation](https://mantine.dev/llms/x-code-highlight.md) to set up syntax highlighting with [shiki](https://shiki.matsu.io/).

If you want to continue using [highlight.js](https://highlightjs.org/) in your application,
install the `highlight.js` package:

```bash
yarn add highlight.js
```

```bash
npm install highlight.js
```

Then wrap your app with `CodeHighlightAdapterProvider` and provide `createHighlightJsAdapter` as the `adapter` prop:

```tsx
import { MantineProvider } from '@mantine/core';
import { CodeHighlightAdapterProvider, createHighlightJsAdapter } from '@mantine/code-highlight';
import hljs from 'highlight.js/lib/core';
import tsLang from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', tsLang);

const highlightJsAdapter = createHighlightJsAdapter(hljs);

function App() {
  return (
    <MantineProvider>
      <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
        {/* Your app here */}
      </CodeHighlightAdapterProvider>
    </MantineProvider>
  );
}
```

Then you need to add styles from one of the highlight.js themes to your application.
You can do that by importing a CSS file from the `highlight.js` package or adding it via a
CDN link to the head of your application:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
/>
```

After that, you can use the `CodeHighlight` component in your application the same way you did in the 7.x version.

## Menu data-hovered attribute

[Menu.Item](https://mantine.dev/llms/core-menu.md) no longer uses the `data-hovered` attribute to indicate hovered state.
If you used `data-hovered` in your styles, you need to change it to `:hover` and `:focus` selectors
instead:

```scss
// ❌ 7.x – styles with `data-hovered`,
// no longer works in 8.x
.item {
  &[data-hovered] {
    background-color: red;
  }
}

// ✅ 8.x – use styles with `:hover` and `:focus`
.item {
  &:hover,
  &:focus {
    background-color: red;
  }
}
```

## Popover hideDetached

[Popover](https://mantine.dev/llms/core-popover.md) now supports the `hideDetached` prop to automatically close the popover when the target element is removed from the DOM:

```tsx
import { Box, Button, Group, Popover } from '@mantine/core';

function Demo() {
  return (
    <Box
      bd="1px solid var(--mantine-color-dimmed)"
      p="xl"
      w={{ base: 340, sm: 400 }}
      h={200}
      style={{ overflow: 'auto' }}
    >
      <Box w={1000} h={400}>
        <Group>
          <Popover width="target" position="bottom" opened>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is hidden when detached</Popover.Dropdown>
          </Popover>

          <Popover width="target" position="bottom" opened hideDetached={false}>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is visible when detached</Popover.Dropdown>
          </Popover>
        </Group>
      </Box>
    </Box>
  );
}
```


By default, `hideDetached` is enabled – the behavior has changed from the 7.x version.
If you prefer to keep the old behavior, you can disable `hideDetached` for all components:

```tsx
import { createTheme, Popover } from '@mantine/core';

export const theme = createTheme({
  components: {
    Popover: Popover.extend({
      defaultProps: {
        // ✅ Disable hideDetached by default
        // if you want to keep the old behavior
        hideDetached: false,
      },
    }),
  }
});
```

## Carousel changes

Starting from the 8.x version, the [@mantine/carousel](https://mantine.dev/llms/x-carousel.md) package requires
`embla-carousel` and `embla-carousel-react` packages with version 8.x.

You need to update embla dependencies:

```bash
yarn add embla-carousel@^8.5.2 embla-carousel-react@^8.5.2
```

```bash
npm install embla-carousel@^8.5.2 embla-carousel-react@^8.5.2
```

Update embla props that were previously passed to the `Carousel` component
to `emblaOptions`. Full list of props:

* `loop`
* `align`
* `slidesToScroll`
* `dragFree`
* `inViewThreshold`
* `skipSnaps`
* `containScroll`
* `speed` and `draggable` props were removed – they are no longer supported by embla

```tsx
import { Carousel } from '@mantine/carousel';

// ❌ 7.x – embla options passed as props,
// no longer works in 8.x
function Demo7x() {
  return <Carousel loop dragFree align="start" />
}

// ✅ 8.x – use emblaOptions to pass options to embla
function Demo8x() {
  return <Carousel emblaOptions={{ loop: true, dragFree: true, align: 'start' }} />
}
```

The `useAnimationOffsetEffect` hook was removed; it is no longer required, and you need to
remove it from your code:

```tsx
// ❌ 7.x – useAnimationOffsetEffect is no longer available in 8.x
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';

function Demo7x() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  useAnimationOffsetEffect(embla, TRANSITION_DURATION);
  return <Carousel getEmblaApi={setEmbla} />;
}

// ✅ 8.x – remove useAnimationOffsetEffect entirely; it is not required
import { Carousel } from '@mantine/carousel';

function Demo8x() {
  return <Carousel />;
}
```

The `Embla` type is no longer exported from the `@mantine/carousel` package;
you need to change this import to reference the `embla-carousel` package instead:

```tsx
// ❌ 7.x – The Embla type is no longer available in 8.x
import { Carousel, Embla } from '@mantine/carousel';

function Demo7x() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  return <Carousel getEmblaApi={setEmbla} />;
}

// ✅ 8.x – replace the Embla type import
import { Carousel } from '@mantine/carousel';
import { EmblaCarouselType } from 'embla-carousel';

function Demo8x() {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  return <Carousel getEmblaApi={setEmbla} />;
}
```
