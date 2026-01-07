# CSSFilesList

# CSS files list

This page contains a list of CSS files that you can import from `@mantine/core` package
as a replacement for `@mantine/core/styles.css`.

## Components dependencies

Some components require additional styles to work properly. For example, [Button](https://mantine.dev/core/button/)
component is based on [UnstyledButton](https://mantine.dev/core/unstyled-button/). If you want to use [Button](https://mantine.dev/core/button/),
you need to import styles for `UnstyledButton` as well.

```tsx
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
```

Some components like [Select](https://mantine.dev/core/select/) do not have any styles on their own – they are built
on top of other components. To find out which components are used in a particular component, check
the component source code.

If you are not sure which components are used in a particular component, you can import
all styles for components that are reused in other components:

```tsx
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/InlineInput.css';
import '@mantine/core/styles/Flex.css';
import '@mantine/core/styles/FloatingIndicator.css';
import '@mantine/core/styles/ActionIcon.css';
```

## Global styles

All Mantine components depend on global styles, you need to import them before
all other styles:

* `baseline.css` – a minimal CSS reset, sets `box-sizing: border-box` and changes font properties
* `default-css-variables.css` – contains all CSS variables generated from the default theme
* `global.css` – global classes used in Mantine components

```tsx
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
```

## Import order

It is important to keep correct styles import order. For example, if you want to use
[Button](https://mantine.dev/core/button/) component, you need to import styles for
[UnstyledButton](https://mantine.dev/core/unstyled-button/) first and then import styles for [Button](https://mantine.dev/core/button/).

```tsx
// ✅ Correct order – Button styles will override UnstyledButton styles
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
```

```tsx
// ❌ Incorrect order – UnstyledButton styles will override Button styles
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/UnstyledButton.css';
```

## Files list

Note that if you cannot find a particular file in the list below, it means that
the component does not have any styles on its own or it is built on top of other components.

<CssFilesList />
