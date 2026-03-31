# Code
Package: @mantine/core
Import: import { Code } from '@mantine/core';
Description: Inline and block code

## Usage

By default, the Code component renders an inline `code` html element:

```tsx
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
```


## Block code

To render code in a `pre` element, pass the `block` prop to the Code component:

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

By default, the code color is gray. You can change it to any valid CSS color or to one
of the [theme.colors](https://mantine.dev/llms/theming-colors.md):

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

**Code props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| block | boolean | - | If set, code is rendered in `pre` |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color, controls `background-color` of the code. By default, calculated based on the color scheme. |

**Code.Highlight props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| background | MantineColor | - | Controls background color of the code. By default, the value depends on color scheme. |
| code | string | required | Code to highlight |
| codeColorScheme | (string & {}) \| "dark" \| "light" | - | Set to use dark or light color scheme. When using shiki adapter, you can use loaded themes here |
| collapseCodeLabel | string | - | Label for collapse button |
| controls | ReactNode[] | - | Extra controls to display in the controls list |
| copiedLabel | string | - | Label for copy button in copied state |
| copyLabel | string | - | Label for copy button in default state |
| defaultExpanded | boolean | - | Uncontrolled expanded default state |
| expandCodeLabel | string | - | Label for expand button |
| expanded | boolean | - | Controlled expanded state |
| language | string | - | Language of the code, used for syntax highlighting |
| maxCollapsedHeight | string \| number | - | Max height of collapsed state |
| onExpandedChange | (expanded: boolean) => void | - | Called when expanded state changes |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| withBorder | boolean | - | Adds border to the root element |
| withCopyButton | boolean | - | Determines whether the copy button should be displayed |
| withExpandButton | boolean | - | Determines whether the expand/collapse button should be displayed |

**Code.HighlightTabs props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeTab | number | - | Index of controlled active tab state |
| background | MantineColor | - | Controls background color of the code. By default, the value depends on color scheme. |
| code | CodeHighlightTabsCode[] | required | Code to highlight with meta data (file name and icon) |
| codeColorScheme | (string & {}) \| "dark" \| "light" | - | Set to use dark or light color scheme. When using shiki adapter, you can use loaded themes here |
| collapseCodeLabel | string | - | Label for collapse button |
| controls | ReactNode[] | - | Extra controls to display in the controls list |
| copiedLabel | string | - | Label for copy button in copied state |
| copyLabel | string | - | Label for copy button in default state |
| defaultActiveTab | number | - | Default active tab index |
| defaultExpanded | boolean | - | Uncontrolled expanded default state |
| expandCodeLabel | string | - | Label for expand button |
| expanded | boolean | - | Controlled expanded state |
| getFileIcon | (fileName: string) => ReactNode | - | Function that returns icon based on file name |
| maxCollapsedHeight | string \| number | - | Max height of collapsed state |
| onExpandedChange | (expanded: boolean) => void | - | Called when expanded state changes |
| onTabChange | (tab: number) => void | - | Called when tab changes |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| withBorder | boolean | - | Adds border to the root element |
| withCopyButton | boolean | - | Determines whether the copy button should be displayed |
| withExpandButton | boolean | - | Determines whether the expand/collapse button should be displayed |


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
| root | data-block | `block` prop is set | - |

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
