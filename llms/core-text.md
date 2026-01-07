# Text
Package: @mantine/core
Import: import { Text } from '@mantine/core';
Description: Display text

## Usage

#### Example: usage

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
```


<Gradient component="Text" />

## Gradient

Text supports Mantine color format in color prop. Color can be specified as:
- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')

#### Example: gradient

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
    >
      Gradient Text
    </Text>
  );
}
```


## Truncate

Set `truncate` prop to add `text-overflow: ellipsis` styles:

#### Example: truncate

```tsx
import { Text, Box } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
```


## Line clamp

Specify maximum number of lines with `lineClamp` prop. This option uses [-webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
CSS property ([caniuse](https://caniuse.com/css-line-clamp)). Note that `padding-bottom` cannot be set on text element:

#### Example: linesConfigurator

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      {/* Text content */}
    </Text>
  );
}
```


Line clamp can also be used with any children (not only strings), for example with [Typography](https://mantine.dev/core/typography/):

#### Example: lineClamp

```tsx
import { Typography, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <Typography>
        <h3>Line clamp with Typography</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </Typography>
    </Text>
  );
}
```


## Inherit styles

Text always applies font-size, font-family and line-height styles,
but in some cases this is not a desired behavior. To force Text to inherit parent
styles set `inherit` prop. For example, highlight part of [Title](https://mantine.dev/core/title/):

#### Example: inherit

```tsx
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
```


<Polymorphic defaultElement="p" changeToElement="a" component="Text" />

## Polymorphic component

Text is a polymorphic component – its default root element is p, but it can be changed to any other element or component with component prop:

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return <Text component="a" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, TextProps does not extend React.ComponentPropsWithoutRef<'p'> although p is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

## span prop

Use `span` prop as a shorthand for `component="span"`:

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text span>Same as below</Text>
      <Text component="span">Same as above</Text>
    </>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | @deprecated Use <code>c</code> prop instead |
| gradient | MantineGradient | - | Gradient configuration, ignored when <code>variant</code> is not <code>gradient</code> |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets <code>line-height</code> to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize | (string & {}) | - | Controls <code>font-size</code> and <code>line-height</code> |
| span | boolean | - | Shorthand for <code>component="span"</code> |
| truncate | TextTruncate | - | Side on which Text must be truncated, if <code>true</code>, text is truncated from the start |


#### Styles API

Text component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Text selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Text-root | Root element |

**Text CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --text-fz | Controls `font-size` property |
| root | --text-lh | Controls `line-height` property |
| root | --text-gradient | Text fill gradient |
| root | --text-line-clamp | Number of lines that should be visible |

**Text data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-truncate | - | Value of  |
| root | data-line-clamp | - | - |
| root | data-inline | - | - |
| root | data-inherit | - | - |

**Textinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Textinput-wrapper | Root element of the Input |
| input | .mantine-Textinput-input | Input element |
| section | .mantine-Textinput-section | Left and right sections |
| root | .mantine-Textinput-root | Root element |
| label | .mantine-Textinput-label | Label element |
| required | .mantine-Textinput-required | Required asterisk element, rendered inside label |
| description | .mantine-Textinput-description | Description element |
| error | .mantine-Textinput-error | Error element |

**Textarea selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Textarea-wrapper | Root element of the Input |
| input | .mantine-Textarea-input | Input element |
| section | .mantine-Textarea-section | Left and right sections |
| root | .mantine-Textarea-root | Root element |
| label | .mantine-Textarea-label | Label element |
| required | .mantine-Textarea-required | Required asterisk element, rendered inside label |
| description | .mantine-Textarea-description | Description element |
| error | .mantine-Textarea-error | Error element |