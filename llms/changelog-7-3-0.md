# Changelog730

## smaller-than and larger-than mixins

`smaller-than` and `larger-than` mixins can be used to create styles that will be applied only when the screen is smaller or larger than specified breakpoint.
Note that to use these mixins, you need to update [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md) to version `1.11.0` or higher.

```scss
.demo {
  @mixin smaller-than 320px {
    color: red;
  }

  @mixin larger-than 320px {
    color: blue;
  }
}
```

Will be transformed to:

```scss
// Breakpoint values are converted to em units
// In smaller-than mixin 0.1px is subtracted from breakpoint value
// to avoid intersection with larger-than mixin
@media (max-width: 19.99375em) {
  .demo {
    color: red;
  }
}

@media (min-width: 20em) {
  .demo {
    color: blue;
  }
}
```

You can also use `smaller-than` and `larger-than` mixins with [mantine breakpoints](https://mantine.dev/llms/styles-responsive.md#breakpoints-variables-in-css-modules):

```scss
.demo {
  @mixin smaller-than $mantine-breakpoint-sm {
    color: red;
  }

  @mixin larger-than $mantine-breakpoint-sm {
    color: blue;
  }
}
```

## Form schema resolvers packages

`@mantine/form` schema validation resolver packages are now available as [separate packages](https://mantine.dev/llms/form-schema-validation.md).
Moving resolvers to separate packages allows making them type-safe and fully tested.
Old resolvers are still exported from `@mantine/form` package – you will be able to use them without any changes
until 8.0.0 release.

The new packages are drop-in replacements for old resolvers, they have the same API and can be used in the same way.

Example of zod resolver:

```bash
yarn add zod mantine-form-zod-resolver
```

```bash
npm install zod mantine-form-zod-resolver
```

```tsx
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { useForm } from '@mantine/form';

const schema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, {
    message: 'You must be at least 18 to create an account',
  }),
});

const form = useForm({
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: zodResolver(schema),
});

form.validate();
form.errors;
// -> {
//  name: 'Name should have at least 2 letters',
//  email: 'Invalid email',
//  age: 'You must be at least 18 to create an account'
// }
```

## rem/em functions improvements

[rem and em](https://mantine.dev/llms/styles-rem.md) function now support space-separated values. This feature is available
both in `rem` function exported from `@mantine/core` package and [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md).
Note that you need to update [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md) to `1.11.0` to use this feature.

```tsx
import { rem } from '@mantine/core';

rem('16px 32px');
// -> calc(1rem * var(--mantine-scale)) calc(2rem * var(--mantine-scale))
```

All components props that are converted to `rem` units now support space-separated values as well.
For example, space-separated values can be used in `radius` prop of [Modal](https://mantine.dev/llms/core-modal.md) component:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return <Modal radius="10px 10px 0 0" opened onClose={() => {}} />;
}
```

## component and renderRoot props for non-polymorphic components

All Mantine components now support `component` and `renderRoot` props event if they are not [polymorphic](https://mantine.dev/llms/guides-polymorphic.md).
The difference between polymorphic and non-polymorphic components is that polymorphic components
include the full set of props of the component passed to the `component` prop, while non-polymorphic
components only include props that are specific to the original component. It is done this way to
improve TypeScript performance.

```tsx
import { Group } from '@mantine/core';

// Group is not polymorphic component,
// but it still supports component and renderRoot props
function Demo() {
  return (
    <Group component="nav">
      <a>Item 1</a>
      <a>Item 2</a>
      <a>Item 3</a>
    </Group>
  );
}
```

## Outline Checkbox and Radio variant

[Checkbox](https://mantine.dev/llms/core-checkbox.md) and [Radio](https://mantine.dev/llms/core-radio.md) components now support `outline` variant:

```tsx
import { Radio, Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="outline" label="Outline Checkbox" defaultChecked />
      <Checkbox variant="outline" label="Outline indeterminate Checkbox" indeterminate />
      <Radio variant="outline" label="Outline Radio" defaultChecked />
    </Stack>
  );
}
```


## HueSlider and AlphaSlider components

[HueSlider and AlphaSlider](https://mantine.dev/llms/core-color-picker.md) components were added back:

```tsx
import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
```


```tsx
import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
```


## Button loading state animation

[Button](https://mantine.dev/llms/core-button.md) component now has loading state animation:

```tsx
import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```


## Drawer offset

[Drawer](https://mantine.dev/llms/core-drawer.md) now supports `offset` prop. It changes drawer offset from the edge of the viewport:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## z-index CSS variables

You can now use Mantine z-index CSS variables:

* `--mantine-z-index-app` – value `100`
* `--mantine-z-index-modal` – value `200`
* `--mantine-z-index-popover` – value `300`
* `--mantine-z-index-overlay` – value `400`
* `--mantine-z-index-max` – value `9999`

Example of using `--mantine-z-index-modal` variable:

```css
/* Display content above the modal */
.my-content {
  z-index: calc(var(--mantine-z-index-modal) + 1);
}
```

## Improved dark color scheme colors

`theme.colors.dark` colors were slightly changed to improve contrast and make it easier to read text.
You can preview new colors on [this page](https://mantine.dev/llms/theming-colors.md#default-colors). New colors values are:

```scss
--mantine-color-dark-0: #c9c9c9;
--mantine-color-dark-1: #b8b8b8;
--mantine-color-dark-2: #828282;
--mantine-color-dark-3: #696969;
--mantine-color-dark-4: #424242;
--mantine-color-dark-5: #3b3b3b;
--mantine-color-dark-6: #2e2e2e;
--mantine-color-dark-7: #242424;
--mantine-color-dark-8: #1f1f1f;
--mantine-color-dark-9: #141414;
```

If you prefer old colors, change theme settings on `MantineProvider`:

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5c5f66',
      '#373A40',
      '#2C2E33',
      '#25262b',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Documentation updates

* Schema-based validation with `@mantine/form` now has a [dedicated page](https://mantine.dev/llms/form-schema-validation.md). It includes more examples for basic, nested and list fields validation for each resolver.
* [Autocomplete](https://mantine.dev/llms/core-autocomplete.md), [Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md) and [TagsInput](https://mantine.dev/llms/core-tags-input.md) now include new demos that show how to customize dropdown behavior and styles.
* Example of using Mantine with disabled JavaScript was added to the [color schemes guide](https://mantine.dev/llms/theming-color-schemes.md#with-disabled-javascript).
* [Pagination](https://mantine.dev/llms/core-pagination.md) now includes an additional example with chunked content handling.
* A new section about dayjs localization with Next.js app router and server components has been added to the [dates getting started page](https://mantine.dev/llms/dates-getting-started.md#localization-and-server-components)
* [Modals manager](https://mantine.dev/llms/x-modals.md#modal-props) now includes a guide on how to pass props down to the underlying [Modal](https://mantine.dev/llms/core-modal.md) component.
* [Slider](https://mantine.dev/llms/core-slider.md) now has sections about decimal values and `minRange` prop.
* You can now view all 200+ releases with release dates on the [all releases page](https://mantine.dev/llms/changelog-all-releases.md).

## Other changes

* [use-hash](https://mantine.dev/llms/hooks-use-hash.md) hook now supports `getInitialValueInEffect: false` option to get initial value during state initialization.
* New `useMantineColorScheme({ keepTransitions: true })` option allows keeping transitions when color scheme changes. Note that it is `false` by default.
* All templates were migrated to [yarn v4](https://yarnpkg.com/blog/release/4.0) – this change significantly improves installation speed.
* [Typography](https://mantine.dev/llms/core-typography.md) now has styles for `<kbd />` element.
* [MultiSelect](https://mantine.dev/llms/core-multi-select.md) and [TagsInput](https://mantine.dev/llms/core-tags-input.md) components now support `hiddenValuesDivider` prop. It allows customizing divider character between values in `value` prop of the hidden input.
* [Grid](https://mantine.dev/llms/core-grid.md) component now supports `overflow` prop, which allows controlling `overflow` CSS property on the root element. It is `hidden` by default.
* [Modal](https://mantine.dev/llms/core-modal.md) and [Drawer](https://mantine.dev/llms/core-drawer.md) components now support `removeScrollProps` prop. It allows configuring [react-remove-scroll](https://github.com/theKashey/react-remove-scroll).
* [AppShell](https://mantine.dev/llms/core-app-shell.md) now supports `offsetScrollbars` prop. It determines whether scrollbars should be offset, it is `true` by default. The logic of scrollbars offset is controlled by [react-remove-scroll](https://github.com/theKashey/react-remove-scroll).
* [Menu](https://mantine.dev/llms/core-menu.md) now supports `trigger="click-hover"` prop, to open menu both on click and on hover.
* It is now possible to set `keepMounted` prop on [Tabs.Panel](https://mantine.dev/llms/core-tabs.md) components individually, not only on `Tabs` component.
* [mantine-flagpack](https://mantinedev.github.io/mantine-flagpack/) has been migrated to support `7.x` versions of `@mantine/core`. To use it, update `mantine-flagpack` to `4.0.0`.
* [vite-template](https://github.com/mantinedev/vite-template) was migrated from Jest to [Vitest](https://vitest.dev/).
* The main [Mantine repository](https://github.com/mantinedev/mantine) was migrated to [yarn v4](https://yarnpkg.com/blog/release/4.0). The process of getting started locally [was changed](https://mantine.dev/llms/contribute.md#get-started-with-mantine-locally)
* `@mantine/ds` package has been deprecated. You can use `@mantinex/mantine-logo` package to use `MantineLogo` component in your project.
