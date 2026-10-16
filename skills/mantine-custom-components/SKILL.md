---
name: mantine-custom-components
description: >
  Build custom components that integrate with Mantine's theming, Styles API, and core features.
  Use this skill when: (1) creating a new component using factory(), polymorphicFactory(), or
  genericFactory(), (2) adding Styles API support (classNames, styles, vars, unstyled), (3)
  implementing CSS variables via createVarsResolver, (4) building compound components with
  sub-components and shared context, (5) registering a component with MantineProvider via
  Component.extend(), or (6) any task involving Factory, useProps, useStyles, BoxProps,
  StylesApiProps, or ElementProps in @mantine/core.
---

# Mantine Custom Components Skill

Written for Mantine 10.x. Upgrading code written for 9.x: see [Coming from 9.x](#coming-from-9x).

## Component template

```tsx
import {
  Box, BoxProps, createVarsResolver, ElementProps,
  factory, Factory, getRadius, MantineRadius,
  StylesApiProps, useProps, useStyles,
} from '@mantine/core';
import classes from './MyComponent.module.css';

export type MyComponentStylesNames = 'root' | 'inner';
export type MyComponentVariant = 'filled' | 'outline';
export type MyComponentCssVariables = { root: '--my-radius' };

export interface MyComponentProps
  extends BoxProps, StylesApiProps<MyComponentFactory>, ElementProps<'div'> {
  radius?: MantineRadius;
}

export type MyComponentFactory = Factory<{
  props: MyComponentProps;
  ref: HTMLDivElement;
  stylesNames: MyComponentStylesNames;
  vars: MyComponentCssVariables;
  variant: MyComponentVariant;
}>;

const defaultProps = {} satisfies Partial<MyComponentProps>;

const varsResolver = createVarsResolver<MyComponentFactory>((_theme, { radius }) => ({
  // undefined leaves the variable unset, so the CSS fallback (theme default radius) applies
  root: { '--my-radius': radius === undefined ? undefined : getRadius(radius) },
}));

export const MyComponent = factory<MyComponentFactory>((_props) => {
  const props = useProps('MyComponent', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, radius, ...others } = props;

  const getStyles = useStyles<MyComponentFactory>({
    name: 'MyComponent', classes, props,
    className, style, classNames, styles, unstyled, vars, attributes, varsResolver,
  });

  return <Box {...getStyles('root')} {...others} />;
});

MyComponent.displayName = 'MyComponent';
MyComponent.classes = classes;
MyComponent.varsResolver = varsResolver;
```

```css
/* MyComponent.module.css */
.root {
  border-radius: var(--my-radius, var(--mantine-radius-default));
}
```

`ref` is a regular prop in React 19: it arrives in `props` and reaches the root element through `...others`.

What you get without extra code:

- Every element rendered with `getStyles('selector')` gets the static class `mantine-MyComponent-selector`.
- `classNames`, `styles`, `vars` and `attributes` props, and the same keys in `MyComponent.extend()` in the theme.
- `unstyled` removes the CSS module classes. Static classes and the CSS variables on the root stay.
- `MyComponent.extend()` and `MyComponent.withProps()` static functions. `withProps` presets props at
  runtime but does not change types: a required prop stays required for TypeScript, so make props you
  intend to preset optional.

## Variants and sizes

Pass `variant` and `size` to `Box`: it sets `data-variant` and `data-size` attributes to style in CSS.
Passing `variant` to `getStyles` additionally applies the `root--{variant}` class when the CSS module defines one:

```tsx
const { variant, size, ...others } = props;

<Box variant={variant} size={size} {...getStyles('root', { variant })} {...others} />
```

```css
.root {
  &[data-variant='outline'] { border: 1px solid var(--my-color); }
  &[data-size='lg'] { height: 50px; }
}
```

Sizes driven by one `size` prop: define the token values in CSS and select one with `getSize`. A
number or any CSS value passed as `size` is used as is (`getSize(60, 'x')` returns `calc(3.75rem * var(--mantine-scale))`).

```tsx
root: { '--card-padding': getSize(size, 'card-padding'), '--card-fz': getFontSize(size) },
```

```css
.root {
  --card-padding-sm: 12px;
  --card-padding-md: 16px;
  --card-padding-lg: 24px;

  padding: var(--card-padding, var(--card-padding-md));
}
```

For colors that follow the theme, resolve them in the vars resolver with
`theme.variantColorResolver({ color: color || theme.primaryColor, theme, variant: variant || 'filled', autoContrast })`
— it returns `background`, `hover` and `color` as colors and `border` as a full `border` shorthand value
(`1px solid transparent`). It knows the variants `filled`, `light`, `outline`, `subtle`, `transparent`, `white` and
`default`; `autoContrast: undefined` falls back to `theme.autoContrast`, which is `true` by default
(9.x: `false`), so `filled` text is black on light colors. For a single color use
`getThemeColor(color, theme)`: it accepts `'blue'`, `'teal.7'` and CSS colors.

```css
.root {
  background-color: var(--my-bg);
  color: var(--my-color);
  border: var(--my-bd); /* the whole shorthand, not border-color */
}
```

Because the resolver comes from the theme, an app can add its own variant (`variant="danger"`) or
recolor an existing one without touching the component. Do not redeclare `variant` in your props
interface: `StylesApiProps` already types it as your variants plus any string.

## Factory variant — which to use

| Scenario | Factory function | Type |
|---|---|---|
| Standard component | `factory()` | `Factory<{}>` |
| Supports `component` prop (polymorphic) | `polymorphicFactory()` | `PolymorphicFactory<{}>` — add `defaultComponent` and `defaultRef` |
| Props change based on a generic (e.g. `multiple`) | `genericFactory()` | `Factory<{ signature: ... }>` |

Use `polymorphicFactory` sparingly — it adds TypeScript overhead and slows IDE autocomplete.
Every factory component also accepts `renderRoot={(props) => <a {...props} />}` as an alternative to `component`.

## Factory type fields

```ts
Factory<{
  props: MyComponentProps;       // required
  ref: HTMLDivElement;           // element type for the forwarded ref
  stylesNames: 'root' | 'inner'; // union of Styles API selectors
  vars: { root: '--my-var' };    // CSS variable map per selector
  variant: 'filled' | 'outline'; // accepted variant strings
  staticComponents: {            // sub-components (compound pattern)
    Item: typeof MyComponentItem;
  };
  compound: true;                // only for sub-components; disables theme classNames/styles/vars
  ctx: { stepsCount: number };   // only if needed; passed to classNames/styles/vars functions as third arg
  signature?: (...) => JSX.Element; // only for genericFactory
}>
```

## Theme integration

Users and the theme can override defaults via `Component.extend()`:

```ts
const theme = createTheme({
  components: {
    MyComponent: MyComponent.extend({
      defaultProps: { radius: 'xl' },
      classNames: { root: 'my-root' },
      styles: { root: { color: 'red' } },
      vars: (_theme, props) => ({ root: { '--my-radius': getRadius(props.radius) } }),
    }),
  },
});
```

In `theme.components`, sub-components are registered without the dot: `MyCardSection: MyCard.Section.extend({ defaultProps })`.

## Coming from 9.x

- `--mantine-color-*` variables and `theme.colors` shades are `oklch()` strings, not hex. Use them
  as CSS values only; `alpha`, `darken` and `lighten` from `@mantine/core` accept them.
- `theme.autoContrast` defaults to `true`: `theme.variantColorResolver` returns black text for light
  `filled` colors unless the component passes `autoContrast: false`.
- Panel backgrounds and borders use semantic variables (`--mantine-color-surface-panel`,
  `--mantine-color-border`, `--mantine-color-hover`, `--mantine-color-neutral-N`) instead of
  `light-dark()` pairs of `gray-N` / `dark-N`. The dark scheme is darker, so retest `dark-N` choices.
- A disabled look is `opacity: var(--mantine-disabled-opacity)`. `--mantine-color-disabled`,
  `--mantine-color-disabled-color` and `--mantine-color-disabled-border` are removed.
- `Paper` is deprecated: render `Surface` instead, it accepts the same props.
- Focus rings use `--mantine-color-focus-ring`; override it, not the primary filled color.

## References

Read the part that matches the task before writing code:

- **[`references/patterns.md`](references/patterns.md)** — complete examples. Read "Compound component with context" for components with sub-components (`Card.Section`), "Wrapping a Mantine component" when the component renders an existing Mantine input or component inside and must forward `classNames` / `styles` to it, "Components that share theme configuration" for a family of components with a common base, "Converting an existing component" when migrating a `forwardRef` component with inline styles, "Polymorphic component" for a `component` prop, "Generic component" for props that depend on a type parameter, "Theme integration" for `extend` and `withProps`
- **[`references/api.md`](references/api.md)** — read it for any component beyond the template above: it is the only place that documents `getStyles` options (`focusable`), the `mod` prop, theme helper outputs, `MantineThemeProvider` and what theme functions receive. Every function and type: `factory` variants, `useProps`, `useStyles` and `getStyles` options, `createVarsResolver`, `createSafeContext`, `StylesApiProps`, `CompoundStylesApiProps`, `BoxProps` (including `mod`), `ElementProps`, theme helpers (`getSize`, `getRadius`, `getThemeColor`...)

## Looking things up

If the references do not cover what you need, do not guess:

- If the Mantine MCP server (`@mantine/mcp-server`) is connected, use `search_docs`, `get_item_doc` and `get_api`
- Otherwise fetch `https://mantine.dev/llms.txt` and open the Styles API, variants and sizes, and custom components pages

