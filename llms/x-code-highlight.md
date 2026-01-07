# CodeHighlight
Package: @mantine/code-highlight
Import: import { CodeHighlight } from '@mantine/code-highlight';
Description: Highlight code with shiki or highlight.js

## Installation

```bash
yarn add @mantine/code-highlight
```

```bash
npm install @mantine/code-highlight
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import code-highlight styles after core package styles
import '@mantine/code-highlight/styles.css';
```

## Example

`CodeHighlight` component is used to display code snippets with syntax highlighting.
It provides a flexible adapter system that allows using any code highlighting library
of your choice.

Example of code highlighting with [shiki](https://shiki.matsu.io/):


```tsx
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
```

#### Example: usage

```tsx
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = `
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
```


## Adapters

`@mantine/code-highlight` package does not depend on any specific code highlighting library.
You can choose one of the default adapters provided by the package or create your own.

Default adapters:

* `createShikiAdapter` – creates [shiki](https://shiki.matsu.io/) adapter
* `createHighlightJsAdapter` – creates [highlight.js](https://highlightjs.org/) adapter
* `plainTextAdapter` – does not highlight code, just displays it as plain text (used by default if no adapter provided)

## Usage with shiki

[Shiki](https://shiki.matsu.io/) library provides the most advanced syntax highlighting
for TypeScript and CSS/Sass code. It uses textmate grammars to highlight code (same as in VSCode).
Shiki adapter is recommended if you need to highlight advanced TypeScript (generics, jsx nested in props) or CSS code (custom syntaxes, newest features).
Shiki adapter is used for all code highlighting in Mantine documentation.

To use shiki adapter you need to install `shiki` package:

```bash
yarn add shiki
```

```bash
npm install shiki
```

Then wrap your app with `CodeHighlightAdapterProvider` and provide `createShikiAdapter` as `adapter` prop:

```tsx
import { MantineProvider } from '@mantine/core';
import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';

// Shiki requires async code to load the highlighter
async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    // You can load supported themes here
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

function App() {
  return (
    <MantineProvider>
      <CodeHighlightAdapterProvider adapter={shikiAdapter}>
        {/* Your app here */}
      </CodeHighlightAdapterProvider>
    </MantineProvider>
  );
}
```

After that, you can use `CodeHighlight` component in your application:


```tsx
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
```

#### Example: usage

```tsx
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = `
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
```


All further code highlighting examples on this page are using shiki adapter.

## Usage with highlight.js

[Highlight.js](https://highlightjs.org/) provides less accurate highlighting compared to shiki,
but it has smaller bundle size and better performance. Choose highlight.js adapter if you need
to highlight basic JavaScript, HTML, and CSS code.

To use highlight.js adapter you need to install `highlight.js` package:

```bash
yarn add highlight.js
```

```bash
npm install highlight.js
```

Then wrap your app with `CodeHighlightAdapterProvider` and provide `createHighlightJsAdapter` as `adapter` prop:

```tsx
import { MantineProvider } from '@mantine/core';
import { CodeHighlightAdapterProvider, createHighlightJsAdapter } from '@mantine/code-highlight';
import hljs from 'highlight.js/lib/core';
import tsLang from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', tsLang);

const highlightJsAdapter = createHighlightJsAdapter(hljs);

function App() {
  return (
    <MantineProvider>
      <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
        {/* Your app here */}
      </CodeHighlightAdapterProvider>
    </MantineProvider>
  );
}
```

Then you need to add styles of one of the highlight.js themes to your application.
You can do that by importing css file from `highlight.js` package or adding it via
CDN link to the head of your application:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
/>
```

After that, you can use `CodeHighlight` component in your application.

## Create custom adapter

You can create a custom adapter if you want to enhance the default behavior of the code highlighting
or use a different library.

Example of creating a custom shiki adapter with custom themes and logic:

```tsx
import { type CodeHighlightAdapter, stripShikiCodeBlocks } from '@mantine/code-highlight';

// Shiki transformers can be used to highlight diffs and other notations
// https://shiki.style/packages/transformers
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers'

// Shiki themes as objects, you can use any VSCode themes
import { darkTheme, lightTheme } from './shiki-themes';

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

// Pass this adapter to CodeHighlightAdapterProvider component
export const customShikiAdapter: CodeHighlightAdapter = {
  // loadContext is called on client side to load shiki highlighter
  // It is required to be used if your library requires async initialization
  // The value returned from loadContext is passed to getHighlighter as ctx argument
  loadContext: loadShiki,

  // ctx is the value returned from loadContext
  // or null if loadContext is not used or has not resolved yet
  getHighlighter: (ctx) => {
    if (!ctx) {
      return ({ code }) => ({ highlightedCode: code, isHighlighted: false });
    }

    return ({ code, language, colorScheme }) => ({
      isHighlighted: true,
      // stripShikiCodeBlocks removes <pre> and <code> tags from highlighted code
      highlightedCode: stripShikiCodeBlocks(
        ctx.codeToHtml(code, {
          lang: language,
          theme: (colorScheme === 'light' ? lightTheme : darkTheme) as any,
          transformers: [transformerNotationDiff(), transformerNotationHighlight()],
        })
      ),
    });
  },
};
```

## Copy button

You can customize copy button labels with `copyLabel` and `copiedLabel` props.
In case you need to remove the copy button, set `withCopyButton={false}`.


```tsx
function Button() {
  return <button>Click me</button>;
}
```

#### Example: copy

```tsx
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = `
function Button() {
  return <button>Click me</button>;
}
`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={`// Custom copy label
function Button() {
  return <button>Click me</button>;
}
`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
        radius="md"
      />
      <CodeHighlight
        code={`// Without copy button
function Button() {
  return <button>Click me</button>;
}
`}
        language="tsx"
        withCopyButton={false}
        mt="md"
        radius="md"
      />
    </>
  );
}
```


## With tabs

`CodeHighlightTabs` component allows organizing multiple code blocks into tabs:

#### Example: tabs

```tsx
// Demo.tsx
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}

// code.ts
export const tsxCode = `
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`;

export const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`;
```


## Tabs with icons

You can use any React node as tab icon. The example below uses TypeScript and CSS
icons from the `@mantinex/dev-icons` package, but you can use any other icons library or custom
icons:

#### Example: tabsIcons

```tsx
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = `
function Button() {
  return <button>Click me</button>;
}
`;

const cssCode = `
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;

function Demo() {
  const tsIcon = <TypeScriptIcon size={14} />;
  const cssIcon = <CssIcon size={14} />;

  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
          icon: tsIcon,
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
          icon: cssIcon,
        },
      ]}
    />
  );
}
```


## Tabs icons based on file name

As an alternative to providing icons manually for each tab, you can use `getFileIcon` prop
to assign icons based on file name. `getFileIcon` accepts file name and must React node
or `null`.

#### Example: tabsGetIcons

```tsx
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = `
function Button() {
  return <button>Click me</button>;
}
`;

const cssCode = `
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
```


## Expandable code

If the code snippet is too long, you can make it expandable with `withExpandButton`
and `defaultExpanded={false}` props. To change label of the expand/collapse control
tooltip, use `expandCodeLabel` and `collapseCodeLabel`.

#### Example: expand

```tsx
// Demo.tsx
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandLabel="Show full code"
      collapseLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}

// code.ts
export const tsxCode = `
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`;

export const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`;
```


## Custom controls

Use `controls` prop with `CodeHighlightControl` component to add custom controls
to the code block:


```tsx
function greet() {
  return 'Hello, World!';
}
```

#### Example: customControl

```tsx
import { IconBrandCodesandbox, IconMessage2 } from '@tabler/icons-react';
import { CodeHighlight, CodeHighlightControl } from '@mantine/code-highlight';

const exampleCode = `
function greet() {
  return 'Hello, World!';
}
`;

function Demo() {
  return (
    <CodeHighlight
      code={exampleCode}
      language="tsx"
      radius="md"
      controls={[
        <CodeHighlightControl
          component="a"
          href="https://codesandbox.io"
          target="_blank"
          tooltipLabel="Open on codesandbox"
          key="sandbox"
        >
          <IconBrandCodesandbox />
        </CodeHighlightControl>,
        <CodeHighlightControl tooltipLabel="Discuss with GPT" key="gpt">
          <IconMessage2 />
        </CodeHighlightControl>,
      ]}
    />
  );
}
```


## Inline code

`InlineCodeHighlight` component allows highlighting inline code snippets:

#### Example: inline

```tsx
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight
        code='<InlineCodeHighlight code="" language="tsx" />'
        language="tsx"
        withBorder
      />
      . Is that not cool?
    </Text>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| background | MantineColor | - | Controls background color of the code. By default, the value depends on color scheme. |
| code | string | required | Code to highlight |
| codeColorScheme | (string & {}) | "dark" | "light" | - | Set to use dark or light color scheme. When using shiki adapter, you can use loaded themes here |
| collapseCodeLabel | string | - | Label for collapse button |
| controls | ReactNode[] | - | Extra controls to display in the controls list |
| copiedLabel | string | - | Label for copy button in copied state |
| copyLabel | string | - | Label for copy button in default state |
| defaultExpanded | boolean | - | Uncontrolled expanded default state |
| expandCodeLabel | string | - | Label for expand button |
| expanded | boolean | - | Controlled expanded state |
| language | string | - | Language of the code, used for syntax highlighting |
| maxCollapsedHeight | string | number | - | Max height of collapsed state |
| onExpandedChange | (expanded: boolean) => void | - | Called when expanded state changes |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius |
| withBorder | boolean | - | Adds border to the root element |
| withCopyButton | boolean | - | Determines whether the copy button should be displayed |
| withExpandButton | boolean | - | Determines whether the expand/collapse button should be displayed |


#### Styles API

CodeHighlight component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**CodeHighlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-CodeHighlight-codeHighlight | Root element |
| showCodeButton | .mantine-CodeHighlight-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-CodeHighlight-pre | Pre element, contains code element |
| code | .mantine-CodeHighlight-code | Code element |
| control | .mantine-CodeHighlight-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-CodeHighlight-controlTooltip | Root element of control tooltip |
| controls | .mantine-CodeHighlight-controls | A wrapper around controls |
| scrollarea | .mantine-CodeHighlight-scrollarea | Scroll area, contains code |

**CodeHighlight CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| codeHighlight | --ch-background | Background color |
| codeHighlight | --ch-max-height | Max height of code block in collapsed state |
| codeHighlight | --ch-radius | Border radius |

**CodeHighlight.Tabs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-CodeHighlightTabs-codeHighlight | Root element of inner CodeHighlight component |
| showCodeButton | .mantine-CodeHighlightTabs-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-CodeHighlightTabs-pre | Pre element, contains code element |
| code | .mantine-CodeHighlightTabs-code | Code element |
| control | .mantine-CodeHighlightTabs-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-CodeHighlightTabs-controlTooltip | Root element of control tooltip |
| controls | .mantine-CodeHighlightTabs-controls | A wrapper around controls |
| scrollarea | .mantine-CodeHighlightTabs-scrollarea | Scroll area, contains code |
| root | .mantine-CodeHighlightTabs-root | Root element |
| filesScrollarea | .mantine-CodeHighlightTabs-filesScrollarea | Scrollarea with files list |
| files | .mantine-CodeHighlightTabs-files | Files names list |
| file | .mantine-CodeHighlightTabs-file | File name |
| fileIcon | .mantine-CodeHighlightTabs-fileIcon | File icon |