# Changelog740

## @mantine/charts

New [@mantine/charts](https://mantine.dev/llms/charts-getting-started.md) package provides a set of components
to build charts and graphs. All components are based on [recharts](https://recharts.org/en-US/).
Currently, the package provides [AreaChart](https://mantine.dev/llms/charts-area-chart.md), [BarChart](https://mantine.dev/llms/charts-bar-chart.md),
[LineChart](https://mantine.dev/llms/charts-line-chart.md) and [Sparkline](https://mantine.dev/llms/charts-sparkline.md) components.
More components will be added in the next minor releases.

## AreaChart component

New [AreaChart](https://mantine.dev/llms/charts-area-chart.md) component:

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


## LineChart component

New [LineChart](https://mantine.dev/llms/charts-line-chart.md) component:

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
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


## BarChart component

New [BarChart](https://mantine.dev/llms/charts-bar-chart.md) component:

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Sparkline component

New [Sparkline](https://mantine.dev/llms/charts-sparkline.md) component:

```tsx
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
       curveType="linear" color="blue" fillOpacity={0.6} withGradient={true} strokeWidth={2}
    />
  );
}
```


## OKLCH colors support

You can now use [OKLCH](https://oklch.com/) colors in `theme.colors`.
OKLCH color model has [88.18% browser support](https://caniuse.com/mdn-css_types_color_oklch),
it is supported in all modern browsers. OKLCH model provides 30% more colors than HSL model and
has [several other advantages](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl).

Example of adding OKLCH color to the theme:

```tsx
import { MantineProvider, createTheme, Group, Button } from '@mantine/core';

const theme = createTheme({
  colors: {
    'oklch-blue': [
      'oklch(96.27% 0.0217 238.66)',
      'oklch(92.66% 0.0429 240.01)',
      'oklch(86.02% 0.0827 241.66)',
      'oklch(78.2% 0.13 243.83)',
      'oklch(71.8% 0.1686 246.06)',
      'oklch(66.89% 0.1986 248.32)',
      'oklch(62.59% 0.2247 250.29)',
      'oklch(58.56% 0.2209 251.26)',
      'oklch(54.26% 0.2067 251.67)',
      'oklch(49.72% 0.1888 251.59)',
    ],
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button color="oklch-blue">Filled</Button>
        <Button color="oklch-blue" variant="outline">
          Outline
        </Button>
        <Button color="oklch-blue" variant="light">
          Light
        </Button>
      </Group>
    </MantineProvider>
  );
}
```


## autoContrast

New `theme.autoContrast` property controls whether text color should be changed based on the given `color` prop
in the following components:

* [ActionIcon](https://mantine.dev/llms/core-action-icon.md) with `variant="filled"` only
* [Alert](https://mantine.dev/llms/core-alert.md) with `variant="filled"` only
* [Avatar](https://mantine.dev/llms/core-avatar.md) with `variant="filled"` only
* [Badge](https://mantine.dev/llms/core-badge.md) with `variant="filled"` only
* [Button](https://mantine.dev/llms/core-button.md) with `variant="filled"` only
* [Chip](https://mantine.dev/llms/core-chip.md) with `variant="filled"` only
* [NavLink](https://mantine.dev/llms/core-nav-link.md) with `variant="filled"` only
* [ThemeIcon](https://mantine.dev/llms/core-theme-icon.md) with `variant="filled"` only
* [Checkbox](https://mantine.dev/llms/core-checkbox.md) with `variant="filled"` only
* [Radio](https://mantine.dev/llms/core-radio.md) with `variant="filled"` only
* [Tabs](https://mantine.dev/llms/core-tabs.md) with `variant="pills"` only
* [SegmentedControl](https://mantine.dev/llms/core-segmented-control.md)
* [Stepper](https://mantine.dev/llms/core-stepper.md)
* [Pagination](https://mantine.dev/llms/core-pagination.md)
* [Progress](https://mantine.dev/llms/core-progress.md)
* [Indicator](https://mantine.dev/llms/core-indicator.md)
* [Timeline](https://mantine.dev/llms/core-timeline.md)
* [Spotlight](https://mantine.dev/llms/x-spotlight.md)
* All [@mantine/dates](https://mantine.dev/llms/dates-getting-started.md) components that are based on [Calendar](https://mantine.dev/llms/dates-calendar.md) component

`autoContrast` can be set globally on the theme level or individually for each component via `autoContrast` prop,
except for [Spotlight](https://mantine.dev/llms/x-spotlight.md) and [@mantine/dates](https://mantine.dev/llms/dates-getting-started.md) components, which only support global theme setting.

```tsx
import { Button, Code, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code>autoContrast: true</Code>
      <Group mt="xs" mb="lg">
        <Button color="lime.4" autoContrast>
          Lime.4 button
        </Button>
        <Button color="blue.2" autoContrast>
          Blue.2 button
        </Button>
        <Button color="orange.3" autoContrast>
          Orange.3 button
        </Button>
      </Group>

      <Code>autoContrast: false</Code>
      <Group mt="xs">
        <Button color="lime.4">Lime.4 button</Button>
        <Button color="blue.2">Blue.2 button</Button>
        <Button color="orange.3">Orange.3 button</Button>
      </Group>
    </>
  );
}
```


`autoContrast` checks whether the given color luminosity is above or below the `luminanceThreshold` value
and changes text color to either `theme.white` or `theme.black` accordingly:

```tsx
import { Button, createTheme, MantineProvider, Stack } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: 0.3,
});

function Wrapper(props: any) {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color=${
          parseThemeColor({ theme: DEFAULT_THEME, color: props.color }).isThemeColor
            ?
```


## Color functions improvements

`alpha`, `lighten` and `darken` functions now support CSS variables (with [color-mix](https://caniuse.com/mdn-css_types_color_color-mix)) and OKLCH colors.
All functions are available both in `@mantine/core` (`.ts`/`.js` files) and [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md) (`.css` files, requires version 1.12.0 or higher).

In `.css` files:

```scss
.demo-alpha {
  color: alpha(var(--mantine-color-red-4), 0.5);
  border: 1px solid alpha(#ffc, 0.2);
}

.demo-lighten-darken {
  color: lighten(var(--mantine-color-red-4), 0.5);
  border: 1px solid darken(#ffc, 0.2);
}
```

Will be transformed to:

```scss
.demo-alpha {
  color: color-mix(
    in srgb,
    var(--mantine-color-red-4),
    transparent 50%
  );
  border: 1px solid color-mix(in srgb, #ffc, transparent 80%);
}

.demo-lighten-darken {
  color: color-mix(in srgb, var(--mantine-color-red-4), white 50%);
  border: 1px solid color-mix(in srgb, #ffc, black 20%);
}
```

In `.ts`/`.js` files:

```tsx
import { alpha, lighten } from '@mantine/core';

alpha('#4578FC', 0.45); // -> rgba(69, 120, 252, 0.45)
alpha('var(--mantine-color-gray-4)', 0.74);
// -> color-mix(in srgb, var(--mantine-color-gray-4), transparent 26%)

lighten('#4578FC', 0.45); // -> #a3c1ff
lighten('var(--mantine-color-gray-4)', 0.74);
// -> color-mix(in srgb, var(--mantine-color-gray-4), white 74%)
```

Note that `alpha` function is a replacement for `rgba`. It was renamed to
have a more clear meaning, as it can now be used with CSS variables and OKLCH colors.
`rgba` function is still available as an alias for `alpha` function.

## enhanceGetInputProps

`@mantine/form` now supports [enhanceGetInputProps](https://mantine.dev/llms/form-get-input-props.md#enhancegetinputprops). `enhanceGetInputProps` is a function that can be used to add additional props to the object returned by `form.getInputProps`.
You can define it in `useForm` hook options. Its argument is an object with the following properties:

* `inputProps` – object returned by `form.getInputProps` by default
* `field` – field path, first argument of `form.getInputProps`, for example `name`, `user.email`, `users.0.name`
* `options` – second argument of `form.getInputProps`, for example `{ type: 'checkbox' }`, can be used to pass additional
  options to `enhanceGetInputProps` function
* `form` – form instance

Example of using `enhanceGetInputProps` to disable input based on field path:

```tsx
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === 'name',
    }),
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
```


Example of using `enhanceGetInputProps` to add additional props to the input based on option passed to `form.getInputProps`:

```tsx
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (payload.options.fieldType === 'name') {
        return {
          label: 'Your name',
          placeholder: 'Your name',
          withAsterisk: true,
          description: 'Your personal information is stored securely. (Just kidding!)',
        };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name', { fieldType: 'name' })} key={form.key('name')} />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
```


## form.initialize

`@mantine/form` now supports `form.initialize` handler.

When called `form.initialize` handler sets `initialValues` and `values` to the same value
and marks form as initialized. It can be used only once, next `form.initialize` calls
are ignored.

`form.initialize` is useful when you want to sync form values with backend API response:

```tsx
import { Button, NumberInput, TextInput } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function apiRequest(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 25 });
    }, 1000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: 0 },
    validate: {
      name: isNotEmpty('Name is required'),
      age: isInRange({ min: 18 }, 'You must be at least 18 to register'),
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
```


Example with [TanStack Query](https://tanstack.com/query/latest) (react-query):

```tsx
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from '@mantine/form';

function Demo() {
  const query = useQuery({
    queryKey: ['current-user'],
    queryFn: () => fetch('/api/users/me').then((res) => res.json()),
  });

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  useEffect(() => {
    if (query.data) {
      // Even if query.data changes, form will be initialized only once
      form.initialize(query.data);
    }
  }, [query.data]);
}
```

Note that `form.initialize` will erase all values that were set before it was called.
It is usually a good idea to set `readOnly` or `disabled` on all form fields before
`form.initialize` is called to prevent data loss. You can implement this with
[enhanceGetInputProps](https://mantine.dev/llms/form-get-input-props.md#enhancegetinputprops):

```tsx
import { NumberInput, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Your name"
        placeholder="Your name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
```


## valibot form resolver

`@mantine/form` now supports [validbot schema resolver](https://www.npmjs.com/package/mantine-form-valibot-resolver):

```bash
yarn add valibot mantine-form-valibot-resolver
```

```bash
npm install valibot mantine-form-valibot-resolver
```

Basic fields validation:

```tsx
import { valibotResolver } from 'mantine-form-valibot-resolver';
import {
  email,
  minLength,
  minValue,
  number,
  object,
  string,
} from 'valibot';
import { useForm } from '@mantine/form';

const schema = object({
  name: string([minLength(2, 'Name should have at least 2 letters')]),
  email: string([email('Invalid email')]),
  age: number([
    minValue(18, 'You must be at least 18 to create an account'),
  ]),
});

const form = useForm({
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: valibotResolver(schema),
});

form.validate();
form.errors;
// -> {
//  name: 'Name should have at least 2 letters',
//  email: 'Invalid email',
//  age: 'You must be at least 18 to create an account'
// }
```

Nested fields validation

```tsx
import { valibotResolver } from 'mantine-form-valibot-resolver';
import { minLength, object, string } from 'valibot';
import { useForm } from '@mantine/form';

const nestedSchema = object({
  nested: object({
    field: string([
      minLength(2, 'Field should have at least 2 letters'),
    ]),
  }),
});

const form = useForm({
  initialValues: {
    nested: {
      field: '',
    },
  },
  validate: valibotResolver(nestedSchema),
});

form.validate();
form.errors;
// -> {
//  'nested.field': 'Field should have at least 2 letters',
// }
```

List fields validation:

```tsx
import { valibotResolver } from 'mantine-form-valibot-resolver';
import { array, minLength, object, string } from 'valibot';
import { useForm } from '@mantine/form';

const listSchema = object({
  list: array(
    object({
      name: string([
        minLength(2, 'Name should have at least 2 letters'),
      ]),
    })
  ),
});

const form = useForm({
  initialValues: {
    list: [{ name: '' }],
  },
  validate: valibotResolver(listSchema),
});

form.validate();
form.errors;
// -> {
//  'list.0.name': 'Name should have at least 2 letters',
// }
```

## ScrollArea scrollbars prop

[ScrollArea](https://mantine.dev/llms/core-scroll-area.md) now supports `scrollbars` prop, which allows controlling directions at which scrollbars should be rendered.
Supported values are `x`, `y` and `xy`. If `scrollbars="y"` is set, only the vertical scrollbar will be rendered, and it will not be possible to scroll horizontally:

```tsx
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```


## Title lineClamp prop

[Title](https://mantine.dev/llms/core-title.md) component now supports `lineClamp` prop, which allows truncating text after a specified number of lines:

```tsx
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2} lineClamp={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
```


## Primary color CSS variables

CSS variables for primary color are now available, you can use the following variables in your styles:

```scss
--mantine-primary-color-0
--mantine-primary-color-1
--mantine-primary-color-2
--mantine-primary-color-3
--mantine-primary-color-4
--mantine-primary-color-5
--mantine-primary-color-6
--mantine-primary-color-7
--mantine-primary-color-8
--mantine-primary-color-9
--mantine-primary-color-contrast
--mantine-primary-color-filled
--mantine-primary-color-filled-hover
--mantine-primary-color-light
--mantine-primary-color-light-hover
--mantine-primary-color-light-color
```

## Help center

[Help center](https://help.mantine.dev/) is a new website with guides, tutorials and frequently
asked questions. Currently, it has 14 questions, more FAQs will be added in the next releases.

* [Is there DataGrid component that I can use with Mantine?](https://help.mantine.dev/q/data-grid-i-need)
* [MantineProvider was not found in component tree. What should I do?](https://help.mantine.dev/q/mantine-provider-missing)
* [Can I use Mantine components as server components?](https://help.mantine.dev/q/server-components)
* [Can I use Mantine with Create React App (CRA)?](https://help.mantine.dev/q/can-i-use-mantine-with-cra)
* [How can I lint CSS files?](https://help.mantine.dev/q/how-to-setup-stylelint)
* [How to update Mantine dependencies?](https://help.mantine.dev/q/how-to-update-dependencies)
* [How can I add hover styles to an element?](https://help.mantine.dev/q/how-to-add-hover-styles)
* [How can I get current color scheme value in JavaScript?](https://help.mantine.dev/q/how-to-get-color-scheme-value-in-js)
* [Can I use private CSS variables to style components?](https://help.mantine.dev/q/private-css-variables)
* [How can I disable all inputs/inputs group inside form?](https://help.mantine.dev/q/disable-all-inputs-in-form)
* [How to use Dropzone with @mantine/form?](https://help.mantine.dev/q/how-to-use-dropzone-with-form)
* [How to call a function when Modal/Drawer closes and animation completes?](https://help.mantine.dev/q/how-to-call-function-when-modal-closes)
* [How to prevent Modal from closing?](https://help.mantine.dev/q/how-to-prevent-modal-from-closing)
* [What is the difference between searchable Select and Autocomplete?](https://help.mantine.dev/q/select-autocomplete-difference)

## Documentation updates

* [form.getInputProps](https://mantine.dev/llms/form-get-input-props.md) guide now has a separate page. It describes `form.getInputProps`, `enhanceGetInputProps` and how to integrate `form.getInputProps` with custom inputs.
* [assignRef](https://mantine.dev/llms/hooks-use-merged-ref.md#assignref-function) function documentation has been added.
* [clampUseMovePosition](https://mantine.dev/llms/hooks-use-move.md#clampusemoveposition) function documentation has been added.
* Additional documentation about hook arguments and types has been added to [use-hotkeys](https://mantine.dev/llms/hooks-use-hotkeys.md).
* [UseListStateHandlers type](https://mantine.dev/llms/hooks-use-list-state.md#useliststatehandlers-type) documentation has been added.
* [Functions reference](https://mantine.dev/llms/guides-functions-reference.md) page has been added. Currently, it contains all functions that are exported from `@mantine/hooks` package. It is planned to document functions from other packages in next releases.
* Examples on how to change the close icon have been added to [Drawer](https://mantine.dev/llms/core-drawer.md#change-close-icon) and [Modal](https://mantine.dev/llms/core-modal.md#change-close-icon) components.
* `variantColorsResolver` demos have been added to [ActionIcon](https://mantine.dev/llms/core-action-icon.md), [ThemeIcon](https://mantine.dev/llms/core-theme-icon.md) and [Badge](https://mantine.dev/llms/core-badge.md) components.

## Other changes

* [RichTextEditor](https://mantine.dev/llms/x-tiptap.md) no longer depends on `@tabler/icons` package. It is no longer required to install `@tabler/icons` package to use `RichTextEditor` component. Icons used in the editor are now a part of the `@mantine/tiptap` package. This change improves bundling performance in several cases (mostly when using `RichTextEditor` in Next.js apps).
* [Badge](https://mantine.dev/llms/core-badge.md) component now supports `circle` prop which makes the badge round.
* You can now reference theme values in `ff` [style prop](https://mantine.dev/llms/styles-style-props.md) with `mono`, `text` and `heading` values: `<Box ff="mono" />`.
* [RichTextEditor](https://mantine.dev/llms/x-tiptap.md) now has `RichTextEditor.Undo` and `RichTextEditor.Redo` controls.
* A new `luminance` [color function](https://mantine.dev/llms/styles-color-functions.md) was added. It returns color luminance as a number between 0 and 1.
* All components now support new `flex` [style prop](https://mantine.dev/llms/styles-style-props.md) which allows setting `flex` CSS property on the root element.
* [Collapse](https://mantine.dev/llms/core-collapse.md) markup was reduced to single element, it can now be used in contexts that were previously not supported, for example, table rows.
* `stepHoldDelay` and `stepHoldInterval` props have been added to [NumberInput](https://mantine.dev/llms/core-number-input.md).
* [mantine-form-zod-resolver](https://github.com/mantinedev/mantine-form-zod-resolver) now supports `errorPriority` configuration which allows controlling the order of errors specified in the schema. This feature requires updating `mantine-form-zod-resolver` to version 1.1.0 or higher.
* [CloseButton](https://mantine.dev/llms/core-close-button.md) now supports `icon` prop, which allows overriding default icon. It is useful when it is not possible to replace `CloseButton`, for example, in [Drawer](https://mantine.dev/llms/core-drawer.md) component.
* [Select](https://mantine.dev/llms/core-select.md#onchange-handler) component now calls `onChange` with an additional argument – option object. It contains `label`, `value` and optional `disabled` properties.
* It is now possible to define CSS variables in `styles` prop of all components.
* New [use-in-viewport](https://mantine.dev/llms/hooks-use-in-viewport.md) hook
* All Vite templates have been updated to Vite 5.0 and Vitest 1.0
