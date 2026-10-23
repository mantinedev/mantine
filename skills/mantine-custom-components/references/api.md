# Custom Components API Reference

## Table of Contents
- [Imports cheatsheet](#imports-cheatsheet)
- [factory / polymorphicFactory / genericFactory](#factory--polymorphicfactory--genericfactory)
- [Factory type fields](#factory-type-fields)
- [useProps](#useprops)
- [useStyles](#usestyles)
- [createVarsResolver](#createvarsresolver)
- [StylesApiProps and CompoundStylesApiProps](#stylesapiprops-and-compoundstylesapiprops)
- [BoxProps and ElementProps](#boxprops-and-elementprops)
- [createSafeContext](#createsafecontext)
- [Theme helper functions](#theme-helper-functions)
- [Static properties](#static-properties)
- [Data attributes with `mod`](#data-attributes-with-mod)
- [Theme for a part of the tree](#theme-for-a-part-of-the-tree)
- [Theme functions: what they receive](#theme-functions-what-they-receive)
- [Custom variant colors](#custom-variant-colors)
- [Writing the CSS module](#writing-the-css-module)

---

## Imports cheatsheet

```ts
import {
  // Factory functions
  factory,
  polymorphicFactory,
  genericFactory,

  // Types
  Factory,
  PolymorphicFactory,
  StylesApiProps,
  CompoundStylesApiProps,
  BoxProps,
  ElementProps,

  // Hooks
  useProps,
  useStyles,

  // Vars
  createVarsResolver,

  // Context
  createSafeContext,

  // Base component
  Box,

  // Theme helpers
  getSize,
  getSpacing,
  getRadius,
  getFontSize,
  getLineHeight,
  getShadow,
  rem,
  em,
  getThemeColor,
  alpha, // derive colors from oklch() shades and var() references
  darken,
  lighten,

  // Theme
  useMantineTheme, // theme object inside a component body
  MantineThemeProvider, // theme override for a part of the tree
} from '@mantine/core';
```

---

## factory / polymorphicFactory / genericFactory

### factory()

Standard factory for non-polymorphic components.

```ts
factory<Payload extends FactoryPayload>(
  ui: (props: Payload['props'] & { ref?: React.Ref<Payload['ref']> }) => React.ReactNode
): MantineComponent<Payload>
```

The returned component has static properties: `.extend()`, `.withProps()`, `.classes`, `.displayName`, `.varsResolver` (if vars are used), and any sub-components assigned.

### polymorphicFactory()

For components that accept a `component` prop to render as a different element. Same signature as `factory()`, but uses `PolymorphicFactory` type.

```ts
// Type uses PolymorphicFactory<{}> instead of Factory<{}>
export type MyFactory = PolymorphicFactory<{
  props: MyProps;
  defaultRef: HTMLButtonElement;    // default ref type
  defaultComponent: 'button';       // default element
  stylesNames: ...;
  vars: ...;
}>;

export const My = polymorphicFactory<MyFactory>((_props) => { ... });
```

### genericFactory()

For components whose prop types depend on a generic argument.

```ts
// Factory uses 'signature' field
export type MyFactory = Factory<{
  props: MyProps<boolean>;
  signature: <T extends boolean = false>(props: MyProps<T>) => React.JSX.Element;
  ref: HTMLDivElement;
  // ... other fields
}>;

export const My = genericFactory<MyFactory>((_props) => { ... });
```

---

## Factory type fields

All fields except `props` are optional.

```ts
Factory<{
  props: MyComponentProps;

  // Forwarded ref element type
  ref: HTMLDivElement;

  // Union of Styles API selector strings (must match CSS module class names)
  stylesNames: 'root' | 'label' | 'icon';

  // CSS variables definition: { selectorName: '--var-name' | '--other-var' }
  vars: {
    root: '--my-height' | '--my-color';
    label: '--my-label-fz';
  };

  // Accepted values for the variant prop
  variant: 'filled' | 'outline' | 'subtle';

  // Sub-components for compound pattern
  staticComponents: {
    Item: typeof MyItem;
    Label: typeof MyLabel;
  };

  // Set to true for sub-components — disables theme classNames/styles/vars for this component
  compound: true;

  // Context type passed as 3rd argument to styles/vars resolvers
  ctx: { opened: boolean };

  // Generic signature (genericFactory only)
  signature: <T extends boolean = false>(props: MyProps<T>) => React.JSX.Element;
}>
```

---

## useProps

Merges default props from three sources in priority order (highest → lowest):
1. Props passed by the user
2. Default props from `MantineProvider` theme (`components.MyComponent.defaultProps`)
3. Component-level `defaultProps`

```ts
useProps<T extends Record<string, any>, U extends Partial<T> | null>(
  component: string | (string | undefined)[], // must match the name used in theme.components
  defaultProps: U,                             // object or null
  props: T
): T // keys present in defaultProps become non-optional in the result
```

**Important:** Always call `useProps` before destructuring. Always use `satisfies Partial<Props>` (not `: Partial<Props>`) for `defaultProps` to preserve narrowed types. Pass `null` when the component has no default props.

An array of names shares theme configuration between components. Later names win:
`useProps(['Input', 'MyInput'], defaultProps, _props)` applies `theme.components.Input.defaultProps` first, then `MyInput`.

```ts
const defaultProps = { size: 'md', variant: 'filled' } satisfies Partial<MyProps>;

const props = useProps('MyComponent', defaultProps, _props);
const { className, style, classNames, styles, unstyled, vars, attributes, ...others } = props;
```

---

## useStyles

Returns a `getStyles` function that provides `className` and `style` for each Styles API selector.

```ts
useStyles<Payload extends FactoryPayload>(input: {
  name: string | (string | undefined)[]; // component name(s). With an array, theme classNames, styles and vars of
                                         // every name are applied in order and each name gets a static class
                                         // (mantine-Tile-root mantine-Panel-root)
  classes: Record<string, string>; // CSS module classes object
  props: Payload['props'];
  stylesCtx?: Payload['ctx'];    // optional context for styles/vars resolvers
  className?: string;            // spread to rootSelector
  style?: MantineStyleProp;      // spread to rootSelector
  rootSelector?: string;         // which selector gets className/style (default: 'root')
  unstyled?: boolean;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
  vars?: PartialVarsResolver<Payload>;
  varsResolver?: VarsResolver<Payload>;
  attributes?: Attributes<Payload>;
  stable?: boolean;              // keep the same getStyles function between renders until one of its inputs
                                 // (classNames, styles, vars, unstyled, stylesCtx, theme...) changes. Use it when
                                 // getStyles goes into a context value, and memoize that value and stylesCtx yourself
}): GetStylesApi<Payload>
```

**`getStyles` function:**
```ts
getStyles(
  selector: StylesNames,
  options?: {
    className?: string;      // additional className merged in
    style?: MantineStyleProp; // additional style merged in
    classNames?: ClassNames;  // Styles API overrides of a parent, used in compound components
    styles?: Styles;
    props?: Record<string, any>; // props passed to classNames/styles functions
    variant?: string;         // applies the `{selector}--{variant}` class from the CSS module, if defined
    focusable?: boolean;      // adds the Mantine focus ring class (theme.focusRing) to this element
    active?: boolean;         // adds the Mantine active (pressed) style class
    withStaticClass?: boolean; // false to skip the static mantine-Name-selector class
  }
): { className: string; style: CSSProperties }
```

Usage:
```tsx
<Box {...getStyles('root')} {...others} />
<div {...getStyles('label', { className: cx(extraClass), style: { color: 'red' } })} />
```

---

## createVarsResolver

Defines how component props map to CSS variables.

```ts
createVarsResolver<Payload extends FactoryPayload>(
  resolver: (
    theme: MantineTheme,
    props: Payload['props'],
    ctx: Payload['ctx']    // only if Factory has ctx field
  ) => TransformVars<Payload['vars']>
): VarsResolver<Payload>
```

The resolver must return an object matching the `vars` structure defined in `Factory`:

```ts
// Factory vars: { root: '--my-height' | '--my-color' }
const varsResolver = createVarsResolver<MyFactory>((_theme, { size, color }) => ({
  root: {
    '--my-height': getSize(size, 'my-height'),
    '--my-color': color ?? undefined,   // undefined = CSS var not set (uses CSS fallback)
  },
}));
```

Assign to the component after creation:
```ts
MyComponent.varsResolver = varsResolver;
```

---

## StylesApiProps and CompoundStylesApiProps

**`StylesApiProps`** — extend on the root/main component's props interface:
```ts
interface StylesApiProps<Payload extends FactoryPayload> {
  unstyled?: boolean;
  variant?: Payload['variant'] | (string & {});
  classNames?: ClassNames<Payload>;    // { root: 'my-class', inner: 'other' } or callback
  styles?: Styles<Payload>;            // { root: { color: 'red' } } or callback
  vars?: PartialVarsResolver<Payload>; // (theme, props) => { root: { '--my-var': '...' } }
  attributes?: Attributes<Payload>;    // { root: { 'data-custom': value } }
}
```

**`CompoundStylesApiProps`** — extend on sub-component (compound) props instead. Subset of `StylesApiProps` — no `unstyled` or `attributes`.

```ts
interface CompoundStylesApiProps<Payload extends FactoryPayload>
  extends Omit<StylesApiProps<Payload>, 'unstyled' | 'attributes'> {}
```

Compound sub-components also use `Factory<{ ..., compound: true }>` and access styles via the parent context's `getStyles`.

---

## BoxProps and ElementProps

**`BoxProps`** — extends `MantineStyleProps`, adds:
```ts
interface BoxProps extends MantineStyleProps {
  className?: string;
  style?: MantineStyleProp;           // accepts function: (theme) => CSSProperties
  mod?: string | Record<string, any> | (string | Record<string, any>)[]; // data-* attributes
  hiddenFrom?: MantineBreakpoint;     // hidden at this breakpoint and above
  visibleFrom?: MantineBreakpoint;    // visible only at this breakpoint and above
  lightHidden?: boolean;              // hidden in light color scheme
  darkHidden?: boolean;               // hidden in dark color scheme
}
```

**`MantineStyleProps`** — shorthand style props (all accept responsive `{ base, sm, md, lg, xl }` objects):

| Prop | CSS property | Prop | CSS property |
|---|---|---|---|
| `m` `mt` `mb` `ml` `mr` `mx` `my` `ms` `me` | margin variants | `p` `pt` `pb` `pl` `pr` `px` `py` `ps` `pe` | padding variants |
| `w` `miw` `maw` | width | `h` `mih` `mah` | height |
| `c` | color | `bg` | background |
| `fz` | font-size | `fw` | font-weight |
| `ff` | font-family | `fs` | font-style |
| `lh` | line-height | `lts` | letter-spacing |
| `ta` | text-align | `tt` | text-transform |
| `td` | text-decoration | `bd` | border |
| `bdrs` | border-radius | `opacity` | opacity |
| `pos` | position | `top` `left` `bottom` `right` `inset` | positioning |
| `display` | display | `flex` | flex |
| `mis` `mie` `pis` `pie` | margin/padding inline start/end | `bgsz` `bgp` `bgr` `bga` | background size/position/repeat/attachment |

**`ElementProps`** — gets HTML element props, remapping `style` to Mantine's type:
```ts
// Include all div props except style (remapped) and any conflicting props
interface MyProps extends ElementProps<'div'> {}

// Omit conflicting HTML attrs (e.g. input has native 'size' and 'color')
interface MyProps extends ElementProps<'input', 'size' | 'color'> {
  size?: MantineSize;
  color?: MantineColor;
}

// Can also accept a React component type instead of element string
interface MyProps extends ElementProps<typeof OtherComponent> {}
```

---

## createSafeContext

Used inside compound components to share state from the parent to sub-components.

```ts
createSafeContext<ContextValue>(
  errorMessage: string   // thrown when hook is used outside the provider
): [
  Provider: React.ComponentType<{ value: ContextValue; children: React.ReactNode }>,
  useContext: () => ContextValue     // throws errorMessage if used outside provider
]
```

**Usage pattern (in ComponentName.context.ts):**
```ts
import { createSafeContext, GetStylesApi } from '@mantine/core';
import { MyFactory } from './MyComponent';

interface MyContextValue {
  getStyles: GetStylesApi<MyFactory>;
  // other shared state...
}

export const [MyProvider, useMyContext] = createSafeContext<MyContextValue>(
  'MyComponent was not found in tree'
);
```

In the root component:
```tsx
return (
  <MyProvider value={{ getStyles }}>
    <Box {...getStyles('root')} {...others}>{children}</Box>
  </MyProvider>
);
```

In sub-components:
```tsx
const { getStyles } = useMyContext();
return <div {...getStyles('item')} />;
```

---

## Theme helper functions

Use these in `createVarsResolver` to convert Mantine size tokens to CSS values:

| Function | Input | Output example |
|---|---|---|
| `getSize(size, prefix)` | `'sm'`, `'button-height'` | `'var(--button-height-sm)'` (define `--button-height-sm` etc. in your CSS) |
| `getSpacing(size)` | `'md'` or `16` | `'var(--mantine-spacing-md)'` or `'calc(1rem * var(--mantine-scale))'` |
| `getRadius(size)` | `'sm'` or `4` | `'var(--mantine-radius-sm)'` or `'calc(0.25rem * var(--mantine-scale))'` |
| `getFontSize(size)` | `'sm'` | `'var(--mantine-font-size-sm)'` |
| `getLineHeight(size)` | `'sm'` | `'var(--mantine-line-height-sm)'` |
| `getShadow(size)` | `'md'` | `'var(--mantine-shadow-md)'` |
| `rem(value)` | `16` | `'calc(1rem * var(--mantine-scale))'` |
| `em(value)` | `16` | `'1em'` |
| `getThemeColor(color, theme)` | `'blue'`, `'blue.7'`, `'#fff'` | CSS color value for a theme color, shade or any CSS color |

Return `undefined` from a var resolver entry to leave that CSS variable unset (CSS fallback applies).
The same holds for `vars` in the theme and in props: a key that is `undefined` keeps the component's own value.
`getSize(undefined)`, `getFontSize(undefined)` and `getSpacing(undefined)` return `undefined`.
`getSize(undefined)` returns `undefined`, but `getRadius(undefined)` returns `'var(--mantine-radius-default)'`:
use `radius === undefined ? undefined : getRadius(radius)` when the CSS has its own fallback.

`theme.colors.blue[6]` and the `--mantine-color-*` variables are `oklch()` strings (9.x: hex). Use
them as CSS values; to derive a color call `alpha(color, 0.5)`, `darken` or `lighten` from
`@mantine/core`, which accept `oklch()` and `var()` input. Do not parse them as hex.

---

## Static properties

Set these on every component after creation (`varsResolver` only when the component has one):

```ts
MyComponent.displayName = 'MyComponent';
MyComponent.classes = classes;                          // CSS module classes object
MyComponent.varsResolver = varsResolver;               // only if component defines vars

// Sub-components (compound pattern)
MyComponent.Item = MyItem;
MyComponent.Label = MyLabel;
```

`.extend()` and `.withProps()` are added automatically by `factory()`.

---

## Data attributes with `mod`

`Box` turns the `mod` prop into `data-*` attributes; falsy values are omitted. Use it for states that
CSS should react to:

```tsx
<Box mod={{ active, disabled, orientation }} {...getStyles('root')} />
// active={true} orientation="vertical" -> data-active data-orientation="vertical"
```

```css
.root {
  &[data-active] { background-color: var(--mantine-primary-color-light); }
  &[data-orientation='vertical'] { flex-direction: column; }
}
```

`variant` and `size` passed to `Box` become `data-variant` and `data-size` (size only for non-numeric values).
Keys are written in camelCase or kebab-case (`expandOnHover` becomes `data-expand-on-hover`). To keep a
`mod` passed by the user, merge with an array: `mod={[{ active }, mod]}`.

Type a size prop that accepts tokens and custom values as `MantineSize | (string & {}) | number`.

---

## Theme for a part of the tree

To apply `theme.components` overrides to one subtree (a story, a section of a page), wrap it in
`MantineThemeProvider`. It merges with the parent theme and does not inject CSS variables again,
unlike a nested `MantineProvider`:

```tsx
<MantineThemeProvider theme={{ components: { MyComponent: MyComponent.extend({ defaultProps: { radius: 'xl' } }) } }}>
  <MyComponent />
</MantineThemeProvider>
```

---

## Theme functions: what they receive

`classNames`, `styles` and `vars` in `Component.extend()` and in props can be functions:

```ts
MyComponent.extend({
  classNames: (theme, props, ctx) => ({ root: props.variant === 'outline' ? 'is-outline' : undefined }),
  styles: (theme, props, ctx) => ({ label: props.size === 'lg' ? { letterSpacing: 1 } : {} }),
  vars: (theme, props, ctx) => ({ root: { '--my-height': props.size === 'lg' ? '50px' : undefined } }),
});
```

`props` are the component props after default props are applied. `ctx` is the `stylesCtx` passed to
`useStyles` (declare its type as `ctx` in the `Factory`). In a compound component the root's functions
are also called for elements rendered by sub-components, with the root's `ctx`.

## Custom variant colors

`theme.variantColorResolver` is typed `VariantColorsResolver`; delegate to `defaultVariantColorsResolver`
for the variants you do not change:

```ts
import { defaultVariantColorsResolver, VariantColorsResolver } from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  if (input.variant === 'danger') {
    return { background: '#e03131', hover: '#c92a2a', color: '#fff', border: '2px solid #c92a2a' };
  }
  return defaultVariantColorsResolver(input);
};
```

---

## Writing the CSS module

The project CSS goes through `postcss-preset-mantine`, which adds:

```css
.root {
  background-color: var(--mantine-color-surface-panel);
  border: 1px solid var(--mantine-color-border);
  padding: rem(12px); /* px to rem that follows theme.scale */
  /* value for light scheme, value for dark scheme, for colors without a semantic variable */
  color: light-dark(var(--mantine-color-blue-9), var(--mantine-color-blue-1));

  @mixin hover {
    /* :hover on devices with a pointer, :active on touch devices */
    background-color: var(--mantine-color-hover);
  }

  &[data-active] { /* attributes from the mod prop */ }

  &:disabled,
  &[data-disabled] {
    opacity: var(--mantine-disabled-opacity);
  }
}
```

Semantic variables follow the color scheme by themselves, prefer them to `gray-N` / `dark-N` pairs:
`--mantine-color-surface-page` (page, modals and dropdowns, also `--mantine-color-body`),
`--mantine-color-surface-panel` and `--mantine-color-surface-panel-2` (cards, nested cards),
`--mantine-color-surface-input` (inputs and other editable fields),
`--mantine-color-surface-sunken`, `--mantine-color-surface-muted` (code), `--mantine-color-border`,
`--mantine-color-border-subtle`, `--mantine-color-border-strong`, `--mantine-color-hover`,
`--mantine-color-active`, `--mantine-color-selected`, `--mantine-color-track`, `--mantine-color-text`,
`--mantine-color-text-muted` (same as `--mantine-color-dimmed`), `--mantine-color-focus-ring`,
`--mantine-color-neutral-0` to `--mantine-color-neutral-9` (a gray ladder that flips with the scheme),
`--mantine-color-default-border`, `--mantine-primary-color-filled`, `--mantine-primary-color-light`,
`--mantine-color-{name}-filled`, `--mantine-color-{name}-light`, `--mantine-color-{name}-light-color`.
9.x: only the last five and `--mantine-color-body`, `--mantine-color-text`, `--mantine-color-dimmed`
exist; use `light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))` pairs instead.

Disabled elements keep their colors and get `opacity: var(--mantine-disabled-opacity)`
(`theme.disabledOpacity`). 9.x: `--mantine-color-disabled` background and
`--mantine-color-disabled-color` text, both removed in 10.x.

A container with a panel background renders `Surface` as the root instead of `Box`:
`<Surface {...getStyles('root')} {...others} />`. Each nested `Surface` is one shade lighter in dark
scheme, `radius`, `shadow` and `withBorder` come with it. `Paper` is deprecated in 10.x (9.x: `Paper`).
A component that must match the surface it is rendered in without being one calls
`useSurfaceDepth()`: it returns the level of the closest parent `Surface` (`0` outside any).

The `vars` prop and `vars` in the theme are functions: `vars={(theme, props) => ({ root: { '--my-ring': 'hotpink' } })}`.
A variable that is declared in the `Factory` `vars` type but never set by the resolver is fine: give
it a fallback in CSS (`var(--my-ring, var(--mantine-color-body))`) and users can still set it.
