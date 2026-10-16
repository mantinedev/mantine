# Custom Component Patterns

## Table of Contents
- [Minimal component (no styles API)](#minimal-component-no-styles-api)
- [Component with CSS variables](#component-with-css-variables)
- [Compound component with context](#compound-component-with-context)
- [Polymorphic component](#polymorphic-component)
- [Generic component](#generic-component)
- [Wrapping a Mantine component](#wrapping-a-mantine-component)
- [Components that share theme configuration](#components-that-share-theme-configuration)
- [Converting an existing component](#converting-an-existing-component)
- [Sub-components that need their index](#sub-components-that-need-their-index)
- [Theme integration](#theme-integration)
- [Namespace exports](#namespace-exports)

---

## Minimal component (no styles API)

When you don't need theming/Styles API support — just Box + useProps.

```tsx
import { Box, BoxProps, ElementProps, factory, Factory, useProps } from '@mantine/core';

export interface MinimalProps extends BoxProps, ElementProps<'div'> {
  label?: string;
}

export type MinimalFactory = Factory<{
  props: MinimalProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {} satisfies Partial<MinimalProps>;

export const Minimal = factory<MinimalFactory>((_props) => {
  const props = useProps('Minimal', defaultProps, _props);
  const { label, children, ...others } = props;

  return (
    <Box {...others}>
      {label && <span>{label}</span>}
      {children}
    </Box>
  );
});

Minimal.displayName = 'Minimal';
```

---

## Component with CSS variables

Full example with Styles API, CSS variables, and theme integration.

**MyComponent.module.css:**
```css
.root {
  border-radius: var(--my-radius);
  padding: var(--my-padding);
}

.inner {
  font-size: var(--my-fz);
}
```

**MyComponent.tsx:**
```tsx
import {
  Box, BoxProps, createVarsResolver, ElementProps, factory, Factory,
  getFontSize, getRadius, getSpacing, MantineFontSize, MantineRadius,
  MantineSpacing, StylesApiProps, useProps, useStyles,
} from '@mantine/core';
import classes from './MyComponent.module.css';

export type MyComponentStylesNames = 'root' | 'inner';
export type MyComponentVariant = 'filled' | 'outline';
export type MyComponentCssVariables = {
  root: '--my-radius' | '--my-padding';
  inner: '--my-fz';
};

export interface MyComponentProps
  extends BoxProps, StylesApiProps<MyComponentFactory>, ElementProps<'div'> {
  radius?: MantineRadius;
  padding?: MantineSpacing;
  size?: MantineFontSize;
}

export type MyComponentFactory = Factory<{
  props: MyComponentProps;
  ref: HTMLDivElement;
  stylesNames: MyComponentStylesNames;
  vars: MyComponentCssVariables;
  variant: MyComponentVariant;
}>;

const defaultProps = {
  radius: 'sm',
  padding: 'md',
  size: 'md',
} satisfies Partial<MyComponentProps>;

const varsResolver = createVarsResolver<MyComponentFactory>((_theme, { radius, padding, size }) => ({
  root: {
    '--my-radius': getRadius(radius),
    '--my-padding': getSpacing(padding),
  },
  inner: {
    '--my-fz': getFontSize(size),
  },
}));

export const MyComponent = factory<MyComponentFactory>((_props) => {
  const props = useProps('MyComponent', defaultProps, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    radius, padding, size,
    children,
    ...others
  } = props;

  const getStyles = useStyles<MyComponentFactory>({
    name: 'MyComponent',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    attributes,
    varsResolver,
  });

  return (
    <Box {...getStyles('root')} {...others}>
      <div {...getStyles('inner')}>{children}</div>
    </Box>
  );
});

MyComponent.displayName = 'MyComponent';
MyComponent.classes = classes;
MyComponent.varsResolver = varsResolver;
```

---

## Compound component with context

Pattern for components with typed sub-components (e.g. `Card.Section`, `Tabs.Tab`).

**MyCard.context.ts:**
```ts
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { MyCardFactory } from './MyCard';

interface MyCardContextValue {
  getStyles: GetStylesApi<MyCardFactory>;
  orientation: 'horizontal' | 'vertical';
}

export const [MyCardProvider, useMyCardContext] = createSafeContext<MyCardContextValue>(
  'MyCard component was not found in tree'
);
```

**MyCardSection.tsx** (sub-component):
```tsx
import {
  Box, BoxProps, CompoundStylesApiProps, ElementProps,
  factory, Factory, useProps, useStyles,
} from '@mantine/core';
import { useMyCardContext } from './MyCard.context';
import classes from './MyCard.module.css';

export type MyCardSectionStylesNames = 'section';

export interface MyCardSectionProps
  extends BoxProps, CompoundStylesApiProps<MyCardSectionFactory>, ElementProps<'div'> {
  withBorder?: boolean;
}

export type MyCardSectionFactory = Factory<{
  props: MyCardSectionProps;
  ref: HTMLDivElement;
  stylesNames: MyCardSectionStylesNames;
  compound: true;   // marks as a compound sub-component
}>;

const defaultProps = {} satisfies Partial<MyCardSectionProps>;

export const MyCardSection = factory<MyCardSectionFactory>((_props) => {
  // The name is the theme key: theme.components.MyCardSection (no dot). Keep it equal to displayName
  const props = useProps('MyCardSection', defaultProps, _props);
  const { className, style, classNames, styles, vars, withBorder, children, ...others } = props;

  // Access styles and shared settings from the parent context.
  // Throws the createSafeContext message when rendered outside MyCard
  const { getStyles, orientation } = useMyCardContext();

  return (
    <Box
      {...getStyles('section', { className, style, classNames, styles, props })}
      mod={{ 'with-border': withBorder, orientation }}
      {...others}
    >
      {children}
    </Box>
  );
});

MyCardSection.displayName = 'MyCardSection';
```

**MyCard.tsx** (root component):
```tsx
import { MyCardProvider } from './MyCard.context';

// ... (same Styles API setup as above)

export type MyCardFactory = Factory<{
  props: MyCardProps;
  ref: HTMLDivElement;
  stylesNames: 'root' | 'section';    // include sub-component selectors too
  staticComponents: {
    Section: typeof MyCardSection;
  };
}>;

export const MyCard = factory<MyCardFactory>((_props) => {
  const props = useProps('MyCard', defaultProps, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    orientation, children, ...others
  } = props;

  const getStyles = useStyles<MyCardFactory>({ ... });

  return (
    <MyCardProvider value={{ getStyles, orientation: orientation ?? 'vertical' }}>
      <Box {...getStyles('root')} {...others}>{children}</Box>
    </MyCardProvider>
  );
});

MyCard.displayName = 'MyCard';
MyCard.classes = classes;
MyCard.Section = MyCardSection;   // attach sub-component
```

How the pieces work together:

- The root's `getStyles` goes into context, so `classNames`, `styles`, `vars` and `unstyled` passed to
  the root reach elements rendered by sub-components. A sub-component's own `classNames` / `styles`
  are merged on top through the `getStyles` options.
- `compound: true` means the sub-component has no styles of its own in the theme: only `defaultProps`
  can be set for it (`MyCardSection: MyCard.Section.extend({ defaultProps })`).
- A sub-component cannot use `vars`. To give one item its own CSS variable (a per-item color), pass it
  through `style`: `getStyles('section', { style: [{ '--section-color': getThemeColor(color, theme) }, style] })`
  with `const theme = useMantineTheme()`.
- Put shared settings (variant, size flags) in the context value next to `getStyles` and turn them
  into data attributes with `mod`.

---

## Polymorphic component

Supports `component` prop to render as any element or React component.

```tsx
import {
  Box, BoxProps, polymorphicFactory, PolymorphicFactory,
  StylesApiProps, useProps, useStyles,
} from '@mantine/core';
import classes from './MyLink.module.css';

export type MyLinkStylesNames = 'root';

export interface MyLinkProps extends BoxProps, StylesApiProps<MyLinkFactory> {
  active?: boolean;
}

export type MyLinkFactory = PolymorphicFactory<{
  props: MyLinkProps;
  defaultRef: HTMLAnchorElement;
  defaultComponent: 'a';            // renders as <a> unless component prop is provided
  stylesNames: MyLinkStylesNames;
}>;

const defaultProps = {} satisfies Partial<MyLinkProps>;

// `component` and `renderRoot` are not part of your props type: add them to the argument type to read them
export const MyLink = polymorphicFactory<MyLinkFactory>((_props: MyLinkProps & { component?: any }) => {
  const props = useProps('MyLink', defaultProps, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    active, ...others
  } = props;

  const getStyles = useStyles<MyLinkFactory>({
    name: 'MyLink', classes, props, className, style,
    classNames, styles, unstyled, vars, attributes,
  });

  return (
    <Box
      component="a"          // default element
      data-active={active || undefined}
      {...getStyles('root')}
      {...others}
    />
  );
});

MyLink.displayName = 'MyLink';
MyLink.classes = classes;
```

**Usage:**
```tsx
<MyLink href="/about">Link</MyLink>
<MyLink component="button" onClick={fn}>As button</MyLink>
<MyLink component={RouterLink} to="/about">Router link</MyLink>
```

---

To set an attribute only for the default element (for example `type="button"`), read `component`:

```tsx
const { component = 'button', ...others } = props;

<Box component={component} type={component === 'button' ? 'button' : undefined} {...getStyles('root', { focusable: true })} {...others} />
```

Callers can use `component="a"` (anchor attributes are then type-checked), `component={Link}` (the
component's own required props are enforced), or `renderRoot={(props) => <a href="/x" {...props} />}`
when `component` cannot be used. The `ref` type follows the rendered element.

---

## Generic component

For components where prop types depend on a generic parameter.

```tsx
import { Box, BoxProps, Factory, genericFactory, StylesApiProps, useProps, useStyles } from '@mantine/core';
import classes from './MySelect.module.css';

type SelectValue<M extends boolean> = M extends true ? string[] : string | null;

export interface MySelectProps<M extends boolean = false>
  extends BoxProps, StylesApiProps<MySelectFactory> {
  multiple?: M;
  value?: SelectValue<M>;
  defaultValue?: SelectValue<M>;
  onChange?: (value: SelectValue<M>) => void;
}

export type MySelectFactory = Factory<{
  props: MySelectProps;
  ref: HTMLDivElement;
  signature: <M extends boolean = false>(props: MySelectProps<M>) => React.JSX.Element;
  stylesNames: 'root';
}>;

const defaultProps = { multiple: false } satisfies Partial<MySelectProps>;

export const MySelect = genericFactory<MySelectFactory>((_props) => {
  const props = useProps('MySelect', defaultProps as any, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, multiple, value, onChange, ...others } = props;

  // Inside the callback, props carry the free type parameter (MySelectProps<M>), which useStyles
  // cannot accept: cast them to the non-generic props. `defaultProps as any` is needed for the same reason
  const getStyles = useStyles<MySelectFactory>({
    name: 'MySelect', classes, props: props as MySelectProps,
    className, style, classNames, styles, unstyled, vars, attributes,
  });

  return <Box {...getStyles('root')} {...others} />;
});

MySelect.displayName = 'MySelect';
```

A generic component can have static sub-components: add `staticComponents` to the same `Factory`
next to `signature` and assign them (`MySelect.Option = MySelectOption`). With several type
parameters (`<T, M extends boolean = false>`), use `props: MySelectProps<any, boolean>` in the
`Factory`. A context cannot be generic: type its value with `any` for the item type
(`createSafeContext<MyContextValue<any>>`) and keep the typed API on the root's props.

**Usage:**
```tsx
// TypeScript infers value as string | null
<MySelect value={val} onChange={(v) => setVal(v)} />

// TypeScript infers value as string[]
<MySelect multiple value={vals} onChange={(v) => setVals(v)} />
```

---

## Wrapping a Mantine component

A component that renders an existing Mantine component inside (an input with something extra
around it) and accepts both its own selectors and the inner component's selectors in one
`classNames` / `styles` prop:

```tsx
import {
  __InputStylesNames, Box, extractStyleProps, Factory, factory, StylesApiProps, TextInput, TextInputProps,
  useMantineTheme, useProps, useResolvedStylesApi, useStyles,
} from '@mantine/core';
import classes from './HintInput.module.css';

export type HintInputStylesNames = 'hint' | __InputStylesNames; // own selectors + inner selectors

export interface HintInputProps
  extends Omit<TextInputProps, 'classNames' | 'styles' | 'vars' | 'attributes' | 'variant' | 'unstyled'>,
    StylesApiProps<HintInputFactory> {
  hint?: string;
}

export type HintInputFactory = Factory<{
  props: HintInputProps;
  ref: HTMLInputElement; // ref goes to the inner input through ...rest
  stylesNames: HintInputStylesNames;
}>;

function mergeByKey<T>(merge: (a: T | undefined, b: T) => T, ...items: (Record<string, T | undefined> | undefined)[]) {
  const result: Record<string, T> = {};
  items.forEach((item) =>
    Object.entries(item || {}).forEach(([key, value]) => {
      if (value) {
        result[key] = merge(result[key], value);
      }
    })
  );
  return result;
}

export const HintInput = factory<HintInputFactory>((_props) => {
  const props = useProps('HintInput', null, _props);
  const { classNames, styles, unstyled, vars, attributes, className, style, hint, ...others } = props;
  const { styleProps, rest } = extractStyleProps(others); // mt, w... go to the outer element only
  const theme = useMantineTheme();

  // Own selectors: theme and props classNames/styles are handled by useStyles
  const getStyles = useStyles<HintInputFactory>({
    name: 'HintInput', classes, props, classNames, styles, unstyled, attributes,
  });

  // Inner selectors: turn function forms into objects, from props and from the theme entry of this component
  const fromProps = useResolvedStylesApi<HintInputFactory>({ classNames, styles, props });
  const fromTheme = useResolvedStylesApi<HintInputFactory>({
    classNames: theme.components.HintInput?.classNames,
    styles: theme.components.HintInput?.styles,
    props,
  });

  return (
    <Box className={className} style={style} {...styleProps}>
      <TextInput
        {...rest}
        unstyled={unstyled}
        classNames={mergeByKey<string>((a, b) => (a ? `${a} ${b}` : b), fromTheme.resolvedClassNames, fromProps.resolvedClassNames)}
        styles={mergeByKey<React.CSSProperties>((a, b) => ({ ...a, ...b }), fromTheme.resolvedStyles, fromProps.resolvedStyles)}
      />
      {hint && <div {...getStyles('hint')}>{hint}</div>}
    </Box>
  );
});

HintInput.displayName = 'HintInput';
HintInput.classes = classes;
```

- The inner component ignores keys that are not its selectors, so the merged objects can be passed whole.
- `className`, `style` and style props are applied once, on the outer element. Everything else
  (`label`, `error`, `value`, `onChange`, `ref`, `variant`, `size`...) goes to the inner component.
- Theme default props of the inner component (`theme.components.TextInput.defaultProps`) still apply to it.
- If no extra outer element is needed, render the inner component as the root and pass `className`,
  `style` and style props straight through with the rest of the props.

---

## Components that share theme configuration

For a family built on one visual base (`Tile`, and `Panel` and `Callout` on top of it), pass the
base name before the component's own name to both hooks:

```tsx
const props = useProps(['Tile', 'Panel'], defaultProps, _props);

const getStyles = useStyles<PanelFactory>({
  name: ['Tile', 'Panel'],
  classes, props, className, style, classNames, styles, unstyled, vars, attributes, varsResolver,
});
```

- Theme `defaultProps` for `Tile` apply to `Panel`; `Panel`'s own theme entry and props passed by
  the caller win over them.
- Theme `classNames`, `styles` and `vars` for `Tile` selectors apply to the same selectors of
  `Panel`, and the root gets both static classes (`mantine-Tile-root mantine-Panel-root`).
- The base name must not be a Mantine component name (`Surface`, `Card`): the theme entry of that
  component would apply to the family.
- Each component keeps its own `extend` and `withProps`.
- Share the look by putting the base rules in one CSS module and adding its class to each
  component's root class (`classes: { ...panelClasses, root: `${base.root} ${panelClasses.root}` }`),
  and share variables by calling one plain function from each component's vars resolver.

---

## Converting an existing component

Checklist for turning a plain React component (`forwardRef`, inline style objects, hard-coded
colors) into a Mantine-style one:

1. `forwardRef((props, ref) => ...)` becomes `factory<MyFactory>((_props) => ...)` with `ref` declared in the `Factory` type. Do not handle `ref` yourself: it flows to the root through `...others`.
2. Default values in the parameter list become `defaultProps` passed to `useProps`, so that the theme can override them.
3. Each static inline style object becomes a class in the CSS module and a selector in `stylesNames`; render the element with `getStyles('selector')`.
4. Each style value computed from props becomes a CSS variable set in the vars resolver and read in CSS (`width: var(--stack-size)`).
5. Size maps (`{ small: 24, medium: 36 }`) become token variables in CSS selected with `getSize(size, 'stack-size')`; boolean look props (`rounded`) become the Mantine prop (`radius` with `getRadius`).
6. Hard-coded colors become semantic theme variables (`--mantine-color-surface-panel`, `--mantine-color-border`, `--mantine-color-hover`) or `light-dark()`; a color prop becomes `color` resolved with `getThemeColor` or `theme.variantColorResolver`; a gray disabled look becomes `opacity: var(--mantine-disabled-opacity)`.
7. State kept only for styling (hovered, expanded) becomes CSS (`:hover`, `:focus-within`) or a `mod` data attribute.
8. Keep `className`, `style` and the remaining props flowing to the root: `<Box {...getStyles('root')} {...others} />`.

---

## Sub-components that need their index

`Stepper`-like components where each child must know its position (and the root the total count)
cannot rely on `Children.map`: it breaks with fragments, conditional rendering and wrapper
components. Let each sub-component register itself instead:

- The root creates a small store once (`useRef`) and puts it in context next to `getStyles`.
- Each sub-component registers its DOM node in the store from a ref callback and removes it on cleanup.
- The store orders nodes by DOM position (`a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING`)
  and notifies subscribers; sub-components read their index and the count with `useSyncExternalStore`.
- Pass the count to `useStyles` as `stylesCtx` (memoized) so that `classNames`, `styles` and `vars`
  functions receive it as `ctx`.
- Keep the context value stable: `useStyles({ ..., stable: true })`, `useMemo` for the value, and a
  ref-backed callback for handlers such as `onStepClick`. Then changing one step does not re-render the others.

---

## Theme integration

Components built with `factory()` automatically get `.extend()` and `.withProps()`.

**`.extend()`** — for theme-level configuration in `createTheme`:
```tsx
const theme = createTheme({
  components: {
    MyComponent: MyComponent.extend({
      // Override default props
      defaultProps: {
        radius: 'xl',
        size: 'lg',
      },
      // Add classes to selectors
      classNames: {
        root: 'my-root-class',
        inner: 'my-inner-class',
      },
      // Add inline styles to selectors: an object, or a callback for theme-aware styles
      styles: (theme) => ({
        root: { border: `1px solid ${theme.colors.blue[6]}` },
      }),
      // Override CSS variables
      vars: (_theme, props) => ({
        root: { '--my-radius': props.radius ? getRadius(props.radius) : undefined },
      }),
    }),
  },
});
```

**`.withProps()`** — create a pre-configured variant at the call site:
```tsx
const BigMyComponent = MyComponent.withProps({ size: 'xl', radius: 'lg' });

// Same as MyComponent but with size and radius pre-set
<BigMyComponent>Content</BigMyComponent>
```

---

## Namespace exports

Add at the bottom of the component file or `index.ts` to let consumers access types without extra imports.

```tsx
export namespace MyComponent {
  export type Props = MyComponentProps;
  export type StylesNames = MyComponentStylesNames;
  export type CssVariables = MyComponentCssVariables;
  export type Factory = MyComponentFactory;
  export type Variant = MyComponentVariant;

  export namespace Section {
    export type Props = MyComponentSectionProps;
    export type StylesNames = MyComponentSectionStylesNames;
    export type Factory = MyComponentSectionFactory;
  }
}
```

**Usage:**
```ts
import { MyComponent } from './MyComponent';

// No need to import MyComponentProps separately
const props: MyComponent.Props = { radius: 'md' };
```
