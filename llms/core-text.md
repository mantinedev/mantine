# Text
Package: @mantine/core
Import: import { Text } from '@mantine/core';
Description: Display text

## Usage

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


```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      Gradient Text
    </Text>
  );
}
```


## Truncate

Set the `truncate` prop to add `text-overflow: ellipsis` styles:

```tsx
import { Text, Box } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text truncate="end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
```


## Line clamp

Specify the maximum number of lines with the `lineClamp` prop. This option uses [-webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
CSS property ([caniuse](https://caniuse.com/css-line-clamp)). Note that `padding-bottom` cannot be set on the text element:

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text size="md" lineClamp={4}>
      {/* Text content */}
    </Text>
  );
}
```


Line clamp can also be used with any children (not only strings), for example with [Typography](https://mantine.dev/llms/core-typography.md):

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
but in some cases this is not the desired behavior. To force Text to inherit parent
styles, set the `inherit` prop. For example, highlight part of [Title](https://mantine.dev/llms/core-title.md):

```tsx
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
```


## span prop

Use the `span` prop as a shorthand for `component="span"`:

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

**Text props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| gradient | MantineGradient | - | Gradient configuration, ignored when `variant` is not `gradient` |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets `line-height` to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize \| (string & {}) | - | Controls `font-size` and `line-height` |
| span | boolean | - | Shorthand for `component="span"` |
| truncate | TextTruncate | - | Side on which Text must be truncated, if `true`, text is truncated from the start |

**Text.Input props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

**Text.area props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autosize | boolean | - | If set, enables textarea height growing with its content |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| maxRows | number | - | Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set |
| minRows | number | - | Minimum rows of autosize textarea, ignored if `autosize` prop is not set |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resize | Resize | - | Controls `resize` CSS property |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


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
| root | data-truncate | `truncate` prop is set | Value of `truncate` prop |
| root | data-line-clamp | `lineClamp` prop is a number | - |
| root | data-inline | `inline` prop is set | - |
| root | data-inherit | `inherit` prop is set | - |

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
