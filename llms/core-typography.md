# Typography
Package: @mantine/core
Import: import { Typography } from '@mantine/core';
Description: Styles provider for html content

## Usage

Mantine does not include typography global styles.
Use `Typography` to add typography styles to your html content:

```tsx
import { Typography } from '@mantine/core';

function Demo() {
  return (
    <Typography>
      <div
        dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }}
      />
    </Typography>
  );
}
```

## Example

#### Example: usage

```tsx
import { Typography } from '@mantine/core';

const html = '...html content here...';

function Demo() {
  return (
    <Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Typography>
  );
}
```


## All styles demo

`Typography` includes styles for:

* paragraphs
* headings
* lists
* blockquotes
* tables
* links
* images
* hr
* kbd
* code and pre

#### Example: all

```tsx
function Demo() {
  return (
    <Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Typography>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|


#### Styles API

Typography component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Typography selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Typography-root | Root element |