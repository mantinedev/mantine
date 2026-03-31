# Pill
Package: @mantine/core
Import: import { Pill } from '@mantine/core';
Description: Removable and non-removable tags

## Usage

```tsx
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill size="md" withRemoveButton={false}>React</Pill>;
}
```



#### Props

**Pill props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | - | Adds disabled attribute, applies disabled styles |
| onRemove | () => void | - | Called when the remove button is clicked |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. |
| removeButtonProps | CloseButtonProps & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> | - | Props passed down to the remove button |
| size | MantineSize | - | Controls pill `font-size` and `padding` |
| withRemoveButton | boolean | - | Controls visibility of the remove button |

**Pill.sInput props**

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

**Pill.Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**Pill.sInputField props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| pointer | boolean | - | If set, cursor is changed to pointer |
| type | "hidden" \| "auto" \| "visible" | - | Controls input styles when focused. If `auto` the input is hidden when not focused. If `visible` the input will always remain visible. |


#### Styles API

Pill component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Pill selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Pill-root | Root element |
| label | .mantine-Pill-label | Pill label (children) |
| remove | .mantine-Pill-remove | Remove button |

**Pill CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --pill-height | Controls `height` of the pill |
| root | --pill-fz | Controls `font-size` |
| root | --pill-radius | Controls `border-radius` |

**Pill data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-remove | `withRemoveButton` prop is set | - |
| root | data-disabled | `disabled` prop is set | - |

**Pill.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-PillGroup-group | Root element |

**Pill.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| group | --pg-gap | Controls `gap` between pills |

**Pillsinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Pillsinput-wrapper | Root element of the Input |
| input | .mantine-Pillsinput-input | Input element |
| section | .mantine-Pillsinput-section | Left and right sections |
| root | .mantine-Pillsinput-root | Root element |
| label | .mantine-Pillsinput-label | Label element |
| required | .mantine-Pillsinput-required | Required asterisk element, rendered inside label |
| description | .mantine-Pillsinput-description | Description element |
| error | .mantine-Pillsinput-error | Error element |

**Pillsinputfield selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| field | .mantine-Pillsinputfield-field | Root element |

**Pillsinputfield data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| field | data-type | - | Value of `type` prop |
| field | data-disabled | `disabled` prop is set | - |
