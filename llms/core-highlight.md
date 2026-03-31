# Highlight
Package: @mantine/core
Import: import { Highlight } from '@mantine/core';
Description: Highlight given part of a string with mark

## Usage

Use the Highlight component to highlight substrings within text using the HTML `<mark>` element.

Pass the text as children and specify which substring(s) to highlight with the `highlight` prop.
Matching is **case-insensitive** and highlights all occurrences of the matched substring.

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight color="yellow" highlight="this" children="Highlight This, definitely THIS and also this!">
      {{children}}
    </Highlight>
  );
}
```


## Matching behavior

* **Case-insensitive**: 'hello' matches 'Hello', 'HELLO', 'hElLo', etc.
* **All occurrences**: Every instance of the matched substring is highlighted
* **Special characters**: Regex special characters like `[`, `]`, `(`, `)` are automatically escaped and treated as literal text
* **Whitespace**: Leading and trailing whitespace in highlight strings is trimmed and ignored
* **Empty strings**: Empty or whitespace-only highlight strings are ignored

## Highlight multiple substrings

To highlight multiple substrings, provide an array of values.
When multiple substrings are provided, longer matches take precedence to avoid partial overlaps.

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
```


## Custom colors per term

You can assign different colors to different highlighted terms by providing an array of objects with `text` and `color` properties:

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={[
        { text: 'error', color: 'red' },
        { text: 'warning', color: 'yellow' },
        { text: 'success', color: 'green' },
      ]}
    >
      Error: Invalid input. Warning: Check this field. Success: All tests passed.
    </Highlight>
  );
}
```


## Whole word matching

Use the `wholeWord` prop to match only complete words. When enabled, 'the' will not match 'there' or 'theme':

```tsx
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With whole word matching (wholeWord={'{'}true{'}'})
        </Text>
        <Highlight highlight="the" wholeWord>
          The theme is there
        </Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          Without whole word matching (default)
        </Text>
        <Highlight highlight="the">The theme is there</Highlight>
      </div>
    </Stack>
  );
}
```


## Change highlight styles

Default [Mark](https://mantine.dev/llms/core-mark.md) styles can be overwritten with the `highlightStyles` prop,
which accepts either an object with styles or a function that receives the theme as a parameter and returns styles:

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

Highlight is based on the [Text](https://mantine.dev/llms/core-text.md) component - all Text props except `color` are available.
Use the `color` prop to change the highlight background color, not the text color.

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

**Highlight props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | string | required | String in which to highlight substrings |
| color | string \| (string & {}) | - | Default background color for all highlighted text. Key of `theme.colors` or any valid CSS color, passed to `Mark` component. Can be overridden per term when using HighlightTerm objects. |
| gradient | MantineGradient | - | Gradient configuration, ignored when `variant` is not `gradient` |
| highlight | string \| string[] \| HighlightTerm[] | required | Substring(s) to highlight in `children`. Can be: - string: single term - string[]: multiple terms with same color - HighlightTerm[]: multiple terms with custom colors per term  - Matching is case-insensitive - Regex special characters are automatically escaped - When multiple substrings are provided, longer matches take precedence - Empty strings and whitespace-only strings are ignored |
| highlightStyles | CSSProperties \| ((theme: MantineTheme) => CSSProperties) | - | Styles applied to `mark` elements |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets `line-height` to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize \| (string & {}) | - | Controls `font-size` and `line-height` |
| span | boolean | - | Shorthand for `component="span"` |
| truncate | TextTruncate | - | Side on which Text must be truncated, if `true`, text is truncated from the start |
| wholeWord | boolean | - | Only match whole words (adds word boundaries to regex). When enabled, 'the' will not match 'there'. |


#### Styles API

Highlight component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Highlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Highlight-root | Root element |
