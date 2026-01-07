# StylesPerformance

# Styles performance

## CSS modules

[CSS modules](https://mantine.dev/styles/css-modules) is the most performant way to apply styles –
this approach generates static CSS that is never re-evaluated. 99% of Mantine components
styles are generated with CSS modules – components are optimized out of the box.

In most cases, it is recommended to use [CSS modules](https://mantine.dev/styles/css-modules) to style your components as well.
You can apply styles to HTML elements with `className` prop and to Mantine components with `className`,
`classNames` props.

Applying styles with `className`:

#### Example: className

```tsx
import { Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
```


Applying styles with `classNames` (see [Styles API guide](https://mantine.dev/styles/styles-api) to learn more):

#### Example: classNames

```tsx
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ 'data-floating': floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```


## Inline styles

Inline styles (`style` and `styles` props) are less performant than CSS modules, but still
performant enough to be used in most cases if it is your preferred way of styling in your project.

Inline styles caveats:

* Styles are not reused between components, each component will generate its own styles, for example,
  if you have 100 buttons with the same styles, CSS modules will generate 1 class for all of them,
  inline styles will generate 100 `style` attributes
* If inline styles are overused, it can increase bundle size and output HTML size
* *Not performance related*: inline styles have higher specificity than CSS modules, so if you want
  to override inline styles you will have to use `!important` or use another inline styles

Example of inline styles:

#### Example: styles

```tsx
import { Button } from '@mantine/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: 2,
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--mantine-color-body)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      Gradient button
    </Button>
  );
}
```


## Style props

[Style props](https://mantine.dev/styles/style-props) transform component props into inline styles. Style props have
the same caveats as inline styles, it is not recommended to use them as the primary means of styling
your components. Usually, style props are used to apply 1–3 styles to a component – using them
this way does not impact performance.

## Responsive style props

Responsive [style props](https://mantine.dev/styles/style-props) have worse performance than regular style props
because they require injecting `<style />` tag next to the component. It is fine to use responsive
style props to apply styles to several components, but it is not recommended to use
them in large lists of components, for example, if you have 1000 inputs with responsive margins,
it is better to refactor to use `classNames` prop:

```tsx
import { TextInput } from '@mantine/core';

// Ok, style props are used to apply margin-top property to several components
function StyleProps() {
  return (
    <>
      <TextInput label="Input 1" />
      <TextInput label="Input 2" mt={{ base: 10, md: 20 }} />
      <TextInput label="Input 3" mt={{ base: 10, md: 20 }} />
    </>
  );
}

// Worse, 1000 separate `<style />` tags will be generated
// Better to refactor to use className prop
function StylePropsArray() {
  const inputs = Array(1000)
    .fill(0)
    .map((_, index) => (
      <TextInput
        key={index}
        label={`Input ${index}`}
        mt={{ base: 10, md: 20 }}
      />
    ));

  return <>{inputs}</>;
}
```

## Components responsive props

Some components, like [SimpleGrid](https://mantine.dev/core/simple-grid) and [Grid](https://mantine.dev/core/grid)
rely on the same mechanism as responsive style props to apply styles. The limitations are the same
– it is fine to use these several of these components on a page, but it is not recommended to use
them in large lists of components.
