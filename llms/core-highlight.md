# Highlight
Package: @mantine/core
Import: import { Highlight } from '@mantine/core';
Description: Highlight given part of a string with mark

## Usage

Use Highlight component to highlight a substring in a given string with a mark tag.

Pass the main string as children to Highlight component and string part that should be highlighted to `highlight` prop.
If the main string does not include `highlight` part, it will be ignored.
`Highlight` ignores trailing whitespace and highlights all matched characters sequences.

#### Example: usage

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight>
      {{children}}
    </Highlight>
  );
}
```


## Highlight multiple substrings

To highlight multiple substrings, provide an array of values:

#### Example: multiple

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
```


## Change highlight styles

Default [Mark](https://mantine.dev/core/mark/) styles can be overwritten with `highlightStyles` prop, it accepts either a function with a subscription to theme
or an object with styles:

#### Example: styles

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
```


## Text props

Highlight is based on [Text](https://mantine.dev/core/text/) component, all its props are available:

#### Example: props

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | string | required | String parts of which must be highlighted |
| color | string | (string & {}) | - | Key of <code>theme.colors</code> or any valid CSS color, passed to <code>Mark</code> component <code>color</code> prop |
| gradient | MantineGradient | - | Gradient configuration, ignored when <code>variant</code> is not <code>gradient</code> |
| highlight | string | string[] | required | Substring or a list of substrings to highlight in <code>children</code> |
| highlightStyles | CSSProperties | ((theme: MantineTheme) => CSSProperties) | - | Styles applied to <code>mark</code> elements |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets <code>line-height</code> to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize | (string & {}) | - | Controls <code>font-size</code> and <code>line-height</code> |
| span | boolean | - | Shorthand for <code>component="span"</code> |
| truncate | TextTruncate | - | Side on which Text must be truncated, if <code>true</code>, text is truncated from the start |


#### Styles API

Highlight component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Highlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Highlight-root | Root element |