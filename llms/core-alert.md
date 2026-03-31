# Alert
Package: @mantine/core
Import: import { Alert } from '@mantine/core';
Description: Attract user attention with important static message

## Accessibility

* Root element role set to `alert`
* `aria-describedby` set to body element id, `aria-labelledby` set to title element id if `title` is provided
* Set `closeButtonLabel` prop to make close button accessible

```tsx
import { Alert } from '@mantine/core';

function Invalid() {
  // -> not ok
  return <Alert withCloseButton />;
}

function Valid() {
  // -> ok
  return <Alert withCloseButton closeButtonLabel="Dismiss" />;
}

function AlsoValid() {
  // -> ok, without close button, closeButtonLabel is not needed
  return <Alert />;
}
```


#### Props

**Alert props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| closeButtonLabel | string | - | Close button `aria-label` |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| icon | React.ReactNode | - | Icon displayed next to the title |
| onClose | () => void | - | Called when the close button is clicked |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| title | React.ReactNode | - | Alert title |
| withCloseButton | boolean | - | Determines whether close button should be displayed |


#### Styles API

Alert component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Alert selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Alert-root | Root element |
| wrapper | .mantine-Alert-wrapper | Wrapper around `body` and `icon` |
| body | .mantine-Alert-body | Body element, contains `title` and `message` |
| title | .mantine-Alert-title | Title element, contains `label` and `icon` |
| label | .mantine-Alert-label | Title label |
| message | .mantine-Alert-message | Alert message |
| icon | .mantine-Alert-icon | Icon element |
| closeButton | .mantine-Alert-closeButton | Close button |

**Alert CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --alert-bd | Controls `border` |
| root | --alert-bg | Controls `background` |
| root | --alert-color | Controls `color` |
| root | --alert-radius | Controls `border-radius` |

**Alert data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| title | data-with-close-button | `withCloseButton` prop is set | - |
