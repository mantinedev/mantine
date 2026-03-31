# How to change background color for FiveM?
Unset body background color and color-scheme styles for FiveM

If you use Mantine in a FiveM UI (NUI), default `body` background and `color-scheme`
styles can affect the background rendering.

Add the following global CSS to override them:

```css
body {
  background-color: unset !important;
}

:root {
  color-scheme: unset !important;
}
```
