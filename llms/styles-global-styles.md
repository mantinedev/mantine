# GlobalStyles

# Global styles

The `@mantine/core` package includes some global styles that are required for components to work correctly.
If you override these styles, some components might not work as expected.

Global styles are automatically imported with:

```tsx
import '@mantine/core/styles.css';
```

If you want to import styles [per component](https://mantine.dev/llms/styles-css-files-list.md), you need to import all global
styles manually:

```tsx
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
```

## CSS reset

The `@mantine/core` package includes minimal CSS reset – it includes only basic styles required for components to work
in modern browsers. If you need to support older browsers, you can additionally include [normalize.css](https://necolas.github.io/normalize.css/)
or any other CSS reset of your choice.

```css
body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  font: inherit;
}

button,
select {
  text-transform: none;
}
```

## Body and :root elements styles

The `@mantine/core` package includes the following `body` and `:root` element styles:

```css
:root {
  color-scheme: var(--mantine-color-scheme);
}

body {
  font-family: var(--mantine-font-family);
  font-size: var(--mantine-font-size-md);
  line-height: var(--mantine-line-height);
  background-color: var(--mantine-color-body);
  color: var(--mantine-color-text);

  -webkit-font-smoothing: var(--mantine-webkit-font-smoothing);
  -moz-osx-font-smoothing: var(--mantine-moz-font-smoothing);
}
```

## Static classes

The `@mantine/core` package includes the following static classes:

* `mantine-active` – contains `:active` styles
* `mantine-focus-auto` – contains `:focus-visible` styles
* `mantine-focus-always` – contains `:focus` styles
* `mantine-focus-never` – removes default browser focus ring
* `mantine-visible-from-{breakpoint}` – shows element when screen width is greater than the breakpoint, for example `mantine-visible-from-sm`
* `mantine-hidden-from-{breakpoint}` – hides element when screen width is greater than the breakpoint, for example `mantine-hidden-from-sm`

You can use these classes with any components or elements:

```tsx
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <button type="button" className="mantine-focus-auto">
        Focus auto
      </button>
      <button type="button" className="mantine-focus-always">
        Focus always
      </button>
      <button type="button" className="mantine-focus-never">
        Focus never
      </button>
      <button type="button" className="mantine-active">
        Active
      </button>
    </Group>
  );
}
```


## Add global styles in your application

It is recommended to use [CSS modules](https://mantine.dev/llms/styles-css-modules.md) to apply styles to Mantine components
with the `className` prop or with [Styles API](https://mantine.dev/llms/styles-styles-api.md). CSS modules file names usually
end with `.module.css`. If you want to add global styles to your application, create a file with
a `.css` extension but without the `.module` part, for example `global.css`.

In global `.css` files you can reference all Mantine [CSS variables](https://mantine.dev/llms/styles-css-variables.md) and
change styles of `<body />`, `:root`, and other elements. For example, to change the body background-color:

```css
body {
  background-color: var(--mantine-color-red-filled);
}
```
