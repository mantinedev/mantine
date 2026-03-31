# Changelog790

## @mantine/emotion package

New [@mantine/emotion](https://mantine.dev/llms/styles-emotion.md) package is now available to simplify migration
from [6.x to 7.x](https://mantine.dev/llms/guides-6x-to-7x.md). It includes `createStyles` function and additional
functionality for `sx` and `styles` props for all components similar to what was available
in `@mantine/core` package in v6.

If you still haven't migrated to 7.x because of the change in styling approach, you can now
have a smoother transition by using `@mantine/emotion` package. To learn more about the package,
visit the [documentation page](https://mantine.dev/llms/styles-emotion.md) and updated [6.x to 7.x migration guide](https://mantine.dev/llms/guides-6x-to-7x.md).

```tsx
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  wrapper: {
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Use light and dark selectors to change styles based on color scheme
    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },

    // Reference theme.breakpoints in smallerThan and largerThan functions
    [u.smallerThan('sm')]: {
      // Child reference in nested selectors via ref
      [`& .${u.ref('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // Assign selector to a ref to reference it in other styles
    ref: u.ref('child'),
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,

    [u.light]: {
      backgroundColor: theme.white,
      color: theme.black,
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
```


## React 18.3 support

All `@mantine/*` components and hooks have been updated to support React 18.3. It is
recommended to update your application as well to prepare for the upcoming [React 19 release](https://react.dev/blog/2024/04/25/react-19).

## use-field hook

New [use-field](https://mantine.dev/llms/form-use-field.md) hook is now available in `@mantine/form` package.
It can be used as a simpler alternative to [use-form](https://mantine.dev/llms/form-use-form.md) hook to manage state of a single input without the need to create a form.
The hook supports most of `use-form` hook features: validation with function, touched and
dirty state, error message, validation on change/blur and more.

```tsx
import { TextInput } from '@mantine/core';
import { useField, isEmail } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}
```


`use-field` hook also supports async validation:

```tsx
import { Button, Loader, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function validateAsync(value: string): Promise<string | null> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(value === 'mantine' ? null : 'Value must be "mantine"');
    }, 800);
  });
}

function Demo() {
  const field = useField({
    initialValue: '',
    validate: validateAsync,
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        label="Enter 'mantine'"
        placeholder="Enter 'mantine'"
        rightSection={field.isValidating ? <Loader size={18} /> : null}
        mb="md"
      />
      <Button onClick={field.validate}>Validate async</Button>
    </>
  );
}
```


## Custom PostCSS mixins

You can now define custom mixins that are not included in [mantine-postcss-preset](https://mantine.dev/llms/styles-postcss-preset.md) by specifying them
in the `mixins` option. To learn about mixins syntax, follow [postcss-mixins documentation](https://github.com/postcss/postcss-mixins#readme).
Note that this feature is available in `postcss-preset-mantine` starting from version 1.15.0.

Example of adding `clearfix` and `circle` mixins:

```tsx
module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true,
      mixins: {
        clearfix: {
          '&::after': {
            content: '""',
            display: 'table',
            clear: 'both',
          },
        },
        circle: (_mixin, size) => ({
          borderRadius: '50%',
          width: size,
          height: size,
        }),
      },
    },
    // ... Other plugins
  },
};
```

Then you can use these mixins in your styles:

```scss
.demo {
  @mixin clearfix;
  @mixin circle 100px;
}
```

## use-matches hook

New `use-matches` hook exported from `@mantine/core` is an alternative to [use-media-query](https://mantine.dev/llms/hooks-use-media-query.md)
if you need to match multiple media queries and values. It accepts an object with media queries as keys and
values at given breakpoint as values.

Note that `use-matches` hook uses the same logic as [use-media-query](https://mantine.dev/llms/hooks-use-media-query.md) under the hood,
it is not recommended to be used as a primary source of responsive styles, especially if you have ssr in your application.

In the following example:

* Starting from `theme.breakpoints.lg`, color will be `red.9`
* Between `theme.breakpoints.sm` and `theme.breakpoints.lg`, color will be `orange.9`
* Below `theme.breakpoints.sm`, color will be `blue.9`

```tsx
import { Box, useMatches } from '@mantine/core';

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}
```


## BarChart value label

[BarChart](https://mantine.dev/llms/charts-bar-chart.md) now supports `withBarValueLabel` prop that allows
displaying value label on top of each bar:

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
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      withBarValueLabel
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


## Documentation updates

* New [usage with emotion](https://mantine.dev/llms/styles-emotion.md) guide
* [6.x -> 7.x](https://mantine.dev/llms/guides-6x-to-7x.md) guide has been updated to include migration to [@mantine/emotion](https://mantine.dev/llms/styles-emotion.md) package
* [use-field](https://mantine.dev/llms/form-use-field.md) hook documentation
* [Uncontrolled form mode](https://mantine.dev/llms/form-uncontrolled.md) examples now include usage of `form.key()` function
* [Custom PostCSS mixins](https://mantine.dev/llms/styles-postcss-preset.md#custom-mixins) documentation
* [use-matches](https://mantine.dev/llms/styles-responsive.md#use-matches-hook) hook documentation has been added to the responsive guide

## Other changes

* Advanced templates now include GitHub workflows to run tests on CI
* [AspectRatio](https://mantine.dev/llms/core-aspect-ratio.md) component has been migrated to [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) CSS property
