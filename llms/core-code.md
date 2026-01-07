# Code
Package: @mantine/core
Import: import { Code } from '@mantine/core';
Description: Inline and block code

## Usage

By default, Code component renders inline `code` html element:

#### Example: usage

```tsx
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
```


## Block code

To render code in `pre` element pass `block` prop to Code component:

#### Example: block

```tsx
import { Code } from '@mantine/core';

const codeForPreviousDemo = `import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
```


## Custom color

By default, code color is gray, you can change it to any valid CSS color or to one
of the [theme.colors](https://mantine.dev/theming/colors):

#### Example: colors

```tsx
import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| block | boolean | - | If set, code is rendered in <code>pre</code> |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color, controls <code>background-color</code> of the code. By default, calculated based on the color scheme. |


#### Styles API

Code component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Code selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Code-root | Root element |

**Code CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --code-bg | Controls `background-color` |

**Code data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-block | - | - |

**Codehighlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-Codehighlight-codeHighlight | Root element |
| showCodeButton | .mantine-Codehighlight-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-Codehighlight-pre | Pre element, contains code element |
| code | .mantine-Codehighlight-code | Code element |
| control | .mantine-Codehighlight-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-Codehighlight-controlTooltip | Root element of control tooltip |
| controls | .mantine-Codehighlight-controls | A wrapper around controls |
| scrollarea | .mantine-Codehighlight-scrollarea | Scroll area, contains code |

**Codehighlight CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| codeHighlight | --ch-background | Background color |
| codeHighlight | --ch-max-height | Max height of code block in collapsed state |
| codeHighlight | --ch-radius | Border radius |

**Codehighlighttabs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-Codehighlighttabs-codeHighlight | Root element of inner CodeHighlight component |
| showCodeButton | .mantine-Codehighlighttabs-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-Codehighlighttabs-pre | Pre element, contains code element |
| code | .mantine-Codehighlighttabs-code | Code element |
| control | .mantine-Codehighlighttabs-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-Codehighlighttabs-controlTooltip | Root element of control tooltip |
| controls | .mantine-Codehighlighttabs-controls | A wrapper around controls |
| scrollarea | .mantine-Codehighlighttabs-scrollarea | Scroll area, contains code |
| root | .mantine-Codehighlighttabs-root | Root element |
| filesScrollarea | .mantine-Codehighlighttabs-filesScrollarea | Scrollarea with files list |
| files | .mantine-Codehighlighttabs-files | Files names list |
| file | .mantine-Codehighlighttabs-file | File name |
| fileIcon | .mantine-Codehighlighttabs-fileIcon | File icon |