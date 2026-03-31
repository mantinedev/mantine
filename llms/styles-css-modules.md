# CSSModules

# CSS modules

All Mantine components use CSS modules for styling.
It is recommended to use CSS modules in your project as well, but it is not required –
Mantine components are fully compatible with any third-party styling solution and native CSS.

## Usage

CSS modules are supported out of the box by all major frameworks and build tools. Usually, all you need
to do is create a `*.module.css` file:

```css
/* Button.module.css */
.button {
  color: red;
}
```

And then import it in your component:

```tsx
import classes from './Button.module.css';

function Demo() {
  return (
    <button className={classes.button} type="button">
      Button
    </button>
  );
}
```

## How CSS modules work

When you create a `*.module.css` file, your build tool will generate a unique class name for each class in your file.
For example, when you import the following file in your `.js`/`.ts` file:

```css
/* Button.module.css */
.button {
  color: red;
}

.text {
  color: blue;
}
```

You will get an object with unique class names:

```tsx
import classes from './Button.module.css';

console.log(classes);
// -> Object of scoped class names: key is the class name, value is the generated unique class name
// { button: 'button-Xh3s7ER', text: 'text-js65s3Se' }
// Note that the generated class names may vary depending on your build tool
```

With CSS modules, you do not need to worry about class name collisions. You can use any class name you want.

## Referencing global class names

To reference global class names in CSS Modules, you can use the `:global` selector:

```scss
.test {
  & :global(.global-class-name) {
    color: red;
  }
}
```

The code above will compile to the following CSS:

```css
.m-dj3w33 .global-class-name {
  color: red;
}
```

## Adding styles to Mantine components

You can add styles to most Mantine components using the `className` prop
– the same way as you would with a regular HTML element.
To set properties to your [theme](https://mantine.dev/llms/theming-theme-object.md) values, you can use [Mantine CSS variables](https://mantine.dev/llms/styles-css-variables.md):

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


To apply styles to inner elements of Mantine components with CSS modules, you can use the `classNames` prop
(see [Styles API](https://mantine.dev/llms/styles-styles-api.md) for more information):

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


## Styling Mantine components without CSS modules

All Mantine components are fully compatible with any third-party styling solution and native CSS.
There are two main strategies to apply styles with a third-party library:

* `className`, `classNames`, `style` and `styles` props
* with static selectors, for example `.mantine-Text-root`

Example of applying styles with a utility CSS library:

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      classNames={{
        root: 'mt-4',
        input: 'bg-red-500 text-white',
      }}
    />
  );
}
```

Example of applying styles with global CSS:

```css
/* styles.css */

/* Note that these styles are not scoped and
   will be applied to all TextInput components */
.mantine-TextInput-root {
  margin-top: 0.8rem;
}

.mantine-TextInput-input {
  background-color: var(--mantine-color-red-filled);
  color: var(--mantine-color-white);
}
```

You can combine both approaches to achieve the desired results. For example,
the `@emotion/styled` and `styled-components` packages will pass the `className` prop to
a given component, and you can use static selectors to style inner elements:

```tsx
import styled from '@emotion/styled';
import { Slider } from '@mantine/core';

const StyledSlider = styled(Slider)`
  & .mantine-Slider-bar {
    background-color: var(--mantine-color-pink-5);
  }

  & .mantine-Slider-thumb {
    border-color: var(--mantine-color-pink-5);
    background-color: white;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function Demo() {
  return <StyledSlider defaultValue={40} />;
}
```

> **Consider using CSS modules first**
>
> CSS modules are the recommended way of styling Mantine components.
> Before choosing another styling solution, make sure that CSS modules do not fit your needs.
> Other solutions have limitations, for example:
>
> * It is hard to customize styles based on [data-\* attributes](https://mantine.dev/llms/styles-data-attributes.md) when using utility-based CSS libraries
> * It is impossible to style inner elements of Mantine components with static selectors when using styled-components and other similar libraries if the component uses [Portal](https://mantine.dev/llms/core-portal.md) because some elements will be rendered outside of the component root and inner elements are not part of the component tree
