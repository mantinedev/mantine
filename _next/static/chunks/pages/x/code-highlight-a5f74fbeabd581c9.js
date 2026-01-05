(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34727:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/code-highlight",function(){return n(88696)}])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},68065:(e,t,n)=>{"use strict";n.d(t,{C:()=>a});var o=n(6029),i=n(67297);let s=`
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
`,a={type:"code",component:function(){return(0,o.jsx)(i.q,{code:s,language:"tsx",radius:"md"})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${s}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
`}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88696:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>W});var o=n(6029),i=n(16285),s=n(68065),a=n(67297);let d=`
function Button() {
  return <button>Click me</button>;
}
`,r={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.q,{code:`// Custom copy label${d}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!",radius:"md"}),(0,o.jsx)(a.q,{code:`// Without copy button${d}`,language:"tsx",withCopyButton:!1,mt:"md",radius:"md"})]})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${d}\`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={\`// Custom copy label\${exampleCode}\`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
        radius="md"
      />
      <CodeHighlight
        code={\`// Without copy button\${exampleCode}\`}
        language="tsx"
        withCopyButton={false}
        mt="md"
        radius="md"
      />
    </>
  );
}
`};var l=n(72567);let h=`
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
`,c=`
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
`,g={type:"code",component:function(){return(0,o.jsx)(l.o,{radius:"md",code:[{fileName:"Demo.tsx",code:h,language:"tsx"},{fileName:"Demo.module.css",code:c,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${h}\`;

export const cssCode = \`${c}\`;
`,language:"tsx"}]};var p=n(6253),u=n(78153);let m=`
function Button() {
  return <button>Click me</button>;
}
`,x=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,f={type:"code",component:function(){return(0,o.jsx)(l.o,{radius:"md",code:[{fileName:"Button.tsx",code:m,language:"tsx",icon:(0,o.jsx)(p.$,{size:14})},{fileName:"Button.module.css",code:x,language:"scss",icon:(0,o.jsx)(u.R,{size:14})}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${m}\`;

const cssCode = \`${x}\`;

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
`};var y=n(95696);let j=`
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
`,v=`
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
`,k={type:"code",component:function(){return(0,o.jsx)(l.o,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:j,language:"tsx"},{fileName:"Demo.module.css",code:v,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${j}\`;

export const cssCode = \`${v}\`;
`,language:"tsx"}]};var C=n(41495);let b=(0,C.A)("outline","brand-codesandbox","BrandCodesandbox",[["path",{d:"M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z",key:"svg-0"}],["path",{d:"M12 12l4 -2.25l4 -2.25",key:"svg-1"}],["path",{d:"M12 12l0 9",key:"svg-2"}],["path",{d:"M12 12l-4 -2.25l-4 -2.25",key:"svg-3"}],["path",{d:"M20 12l-4 2v4.75",key:"svg-4"}],["path",{d:"M4 12l4 2l0 4.75",key:"svg-5"}],["path",{d:"M8 5.25l4 2.25l4 -2.25",key:"svg-6"}]]),H=(0,C.A)("outline","message-2","Message2",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z",key:"svg-2"}]]);var M=n(74170);let A=`
function greet() {
  return 'Hello, World!';
}
`,w={type:"code",component:function(){return(0,o.jsx)(a.q,{code:A,language:"tsx",radius:"md",controls:[(0,o.jsx)(M.T,{component:"a",href:"https://codesandbox.io",target:"_blank",tooltipLabel:"Open on codesandbox",children:(0,o.jsx)(b,{})},"sandbox"),(0,o.jsx)(M.T,{tooltipLabel:"Discuss with GPT",children:(0,o.jsx)(H,{})},"gpt")]})},code:`
import { IconBrandCodesandbox, IconMessage2 } from '@tabler/icons-react';
import { CodeHighlight, CodeHighlightControl } from '@mantine/code-highlight';

const exampleCode = \`${A}\`;

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
`};var T=n(33987),S=n(21351),N=n(14163),I=n(8411),B=n(38919),P=n(15583),D=n(86547);let L=(0,T.V)((e,{background:t,radius:n})=>({inlineCodeHighlight:{"--ch-background":t?(0,S.r)(t,e):void 0,"--ch-radius":void 0!==n?(0,N.nJ)(n):void 0}})),E=(0,I.P9)((e,t)=>{let n=(0,B.Y)("InlineCodeHighlight",null,e),{classNames:i,className:s,style:d,styles:r,unstyled:l,vars:h,attributes:c,...g}=n,p=(0,P.I)({name:"InlineCodeHighlight",classes:D.A,props:n,className:s,style:d,classNames:i,styles:r,unstyled:l,attributes:c,vars:h,varsResolver:L,rootSelector:"inlineCodeHighlight"});return(0,o.jsx)(a.q,{...g,ref:t,...p("inlineCodeHighlight"),__inline:!0})});E.displayName="@mantine/code-highlight/InlineCodeHighlight",E.classes=D.A;var $=n(45208);let z={type:"code",component:function(){return(0,o.jsxs)($.E,{children:["You can highlight code inline:"," ",(0,o.jsx)(E,{code:'<InlineCodeHighlight code="" language="tsx" />',language:"tsx",withBorder:!0}),". Is that not cool?"]})},code:`
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
`};var _=n(38547),F=n(5262);let R=(0,_.P)(F.XZ.CodeHighlight);function Y(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Demo:n,InstallScript:a}=t;return n||q("Demo",!0),a||q("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(a,{packages:"@mantine/code-highlight"}),"\n",(0,o.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import code-highlight styles after core package styles\nimport '@mantine/code-highlight/styles.css';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"CodeHighlight"})," component is used to display code snippets with syntax highlighting.\nIt provides a flexible adapter system that allows using any code highlighting library\nof your choice."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of code highlighting with ",(0,o.jsx)(t.a,{href:"https://shiki.matsu.io/",children:"shiki"}),":"]}),"\n",(0,o.jsx)(n,{data:s.C}),"\n",(0,o.jsx)(t.h2,{id:"adapters",children:"Adapters"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"@mantine/code-highlight"})," package does not depend on any specific code highlighting library.\nYou can choose one of the default adapters provided by the package or create your own."]}),"\n",(0,o.jsx)(t.p,{children:"Default adapters:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"createShikiAdapter"})," – creates ",(0,o.jsx)(t.a,{href:"https://shiki.matsu.io/",children:"shiki"})," adapter"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"createHighlightJsAdapter"})," – creates ",(0,o.jsx)(t.a,{href:"https://highlightjs.org/",children:"highlight.js"})," adapter"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"plainTextAdapter"})," – does not highlight code, just displays it as plain text (used by default if no adapter provided)"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"usage-with-shiki",children:"Usage with shiki"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://shiki.matsu.io/",children:"Shiki"})," library provides the most advanced syntax highlighting\nfor TypeScript and CSS/Sass code. It uses textmate grammars to highlight code (same as in VSCode).\nShiki adapter is recommended if you need to highlight advanced TypeScript (generics, jsx nested in props) or CSS code (custom syntaxes, newest features).\nShiki adapter is used for all code highlighting in Mantine documentation."]}),"\n",(0,o.jsxs)(t.p,{children:["To use shiki adapter you need to install ",(0,o.jsx)(t.code,{children:"shiki"})," package:"]}),"\n",(0,o.jsx)(a,{packages:"shiki"}),"\n",(0,o.jsxs)(t.p,{children:["Then wrap your app with ",(0,o.jsx)(t.code,{children:"CodeHighlightAdapterProvider"})," and provide ",(0,o.jsx)(t.code,{children:"createShikiAdapter"})," as ",(0,o.jsx)(t.code,{children:"adapter"})," prop:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';\n\n// Shiki requires async code to load the highlighter\nasync function loadShiki() {\n  const { createHighlighter } = await import('shiki');\n  const shiki = await createHighlighter({\n    langs: ['tsx', 'scss', 'html', 'bash', 'json'],\n    // You can load supported themes here\n    themes: [],\n  });\n\n  return shiki;\n}\n\nconst shikiAdapter = createShikiAdapter(loadShiki);\n\nfunction App() {\n  return (\n    <MantineProvider>\n      <CodeHighlightAdapterProvider adapter={shikiAdapter}>\n        {/* Your app here */}\n      </CodeHighlightAdapterProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After that, you can use ",(0,o.jsx)(t.code,{children:"CodeHighlight"})," component in your application:"]}),"\n",(0,o.jsx)(n,{data:s.C}),"\n",(0,o.jsx)(t.p,{children:"All further code highlighting examples on this page are using shiki adapter."}),"\n",(0,o.jsx)(t.h2,{id:"usage-with-highlightjs",children:"Usage with highlight.js"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://highlightjs.org/",children:"Highlight.js"})," provides less accurate highlighting compared to shiki,\nbut it has smaller bundle size and better performance. Choose highlight.js adapter if you need\nto highlight basic JavaScript, HTML, and CSS code."]}),"\n",(0,o.jsxs)(t.p,{children:["To use highlight.js adapter you need to install ",(0,o.jsx)(t.code,{children:"highlight.js"})," package:"]}),"\n",(0,o.jsx)(a,{packages:"highlight.js"}),"\n",(0,o.jsxs)(t.p,{children:["Then wrap your app with ",(0,o.jsx)(t.code,{children:"CodeHighlightAdapterProvider"})," and provide ",(0,o.jsx)(t.code,{children:"createHighlightJsAdapter"})," as ",(0,o.jsx)(t.code,{children:"adapter"})," prop:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { CodeHighlightAdapterProvider, createHighlightJsAdapter } from '@mantine/code-highlight';\nimport hljs from 'highlight.js/lib/core';\nimport tsLang from 'highlight.js/lib/languages/typescript';\n\nhljs.registerLanguage('typescript', tsLang);\n\nconst highlightJsAdapter = createHighlightJsAdapter(hljs);\n\nfunction App() {\n  return (\n    <MantineProvider>\n      <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>\n        {/* Your app here */}\n      </CodeHighlightAdapterProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then you need to add styles of one of the highlight.js themes to your application.\nYou can do that by importing css file from ",(0,o.jsx)(t.code,{children:"highlight.js"})," package or adding it via\nCDN link to the head of your application:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<link\n  rel="stylesheet"\n  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"\n/>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["After that, you can use ",(0,o.jsx)(t.code,{children:"CodeHighlight"})," component in your application."]}),"\n",(0,o.jsx)(t.h2,{id:"create-custom-adapter",children:"Create custom adapter"}),"\n",(0,o.jsx)(t.p,{children:"You can create a custom adapter if you want to enhance the default behavior of the code highlighting\nor use a different library."}),"\n",(0,o.jsx)(t.p,{children:"Example of creating a custom shiki adapter with custom themes and logic:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { type CodeHighlightAdapter, stripShikiCodeBlocks } from '@mantine/code-highlight';\n\n// Shiki transformers can be used to highlight diffs and other notations\n// https://shiki.style/packages/transformers\nimport { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers'\n\n// Shiki themes as objects, you can use any VSCode themes\nimport { darkTheme, lightTheme } from './shiki-themes';\n\nasync function loadShiki() {\n  const { createHighlighter } = await import('shiki');\n  const shiki = await createHighlighter({\n    langs: ['tsx', 'scss', 'html', 'bash', 'json'],\n    themes: [],\n  });\n\n  return shiki;\n}\n\n// Pass this adapter to CodeHighlightAdapterProvider component\nexport const customShikiAdapter: CodeHighlightAdapter = {\n  // loadContext is called on client side to load shiki highlighter\n  // It is required to be used if your library requires async initialization\n  // The value returned from loadContext is passed to getHighlighter as ctx argument\n  loadContext: loadShiki,\n\n  // ctx is the value returned from loadContext\n  // or null if loadContext is not used or has not resolved yet\n  getHighlighter: (ctx) => {\n    if (!ctx) {\n      return ({ code }) => ({ highlightedCode: code, isHighlighted: false });\n    }\n\n    return ({ code, language, colorScheme }) => ({\n      isHighlighted: true,\n      // stripShikiCodeBlocks removes <pre> and <code> tags from highlighted code\n      highlightedCode: stripShikiCodeBlocks(\n        ctx.codeToHtml(code, {\n          lang: language,\n          theme: (colorScheme === 'light' ? lightTheme : darkTheme) as any,\n          transformers: [transformerNotationDiff(), transformerNotationHighlight()],\n        })\n      ),\n    });\n  },\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"copy-button",children:"Copy button"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize copy button labels with ",(0,o.jsx)(t.code,{children:"copyLabel"})," and ",(0,o.jsx)(t.code,{children:"copiedLabel"})," props.\nIn case you need to remove the copy button, set ",(0,o.jsx)(t.code,{children:"withCopyButton={false}"}),"."]}),"\n",(0,o.jsx)(n,{data:r}),"\n",(0,o.jsx)(t.h2,{id:"with-tabs",children:"With tabs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"CodeHighlightTabs"})," component allows organizing multiple code blocks into tabs:"]}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"tabs-with-icons",children:"Tabs with icons"}),"\n",(0,o.jsxs)(t.p,{children:["You can use any React node as tab icon. The example below uses TypeScript and CSS\nicons from the ",(0,o.jsx)(t.code,{children:"@mantinex/dev-icons"})," package, but you can use any other icons library or custom\nicons:"]}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"tabs-icons-based-on-file-name",children:"Tabs icons based on file name"}),"\n",(0,o.jsxs)(t.p,{children:["As an alternative to providing icons manually for each tab, you can use ",(0,o.jsx)(t.code,{children:"getFileIcon"})," prop\nto assign icons based on file name. ",(0,o.jsx)(t.code,{children:"getFileIcon"})," accepts file name and must React node\nor ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(n,{data:y.l}),"\n",(0,o.jsx)(t.h2,{id:"expandable-code",children:"Expandable code"}),"\n",(0,o.jsxs)(t.p,{children:["If the code snippet is too long, you can make it expandable with ",(0,o.jsx)(t.code,{children:"withExpandButton"}),"\nand ",(0,o.jsx)(t.code,{children:"defaultExpanded={false}"})," props. To change label of the expand/collapse control\ntooltip, use ",(0,o.jsx)(t.code,{children:"expandCodeLabel"})," and ",(0,o.jsx)(t.code,{children:"collapseCodeLabel"}),"."]}),"\n",(0,o.jsx)(n,{data:k}),"\n",(0,o.jsx)(t.h2,{id:"custom-controls",children:"Custom controls"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"controls"})," prop with ",(0,o.jsx)(t.code,{children:"CodeHighlightControl"})," component to add custom controls\nto the code block:"]}),"\n",(0,o.jsx)(n,{data:w}),"\n",(0,o.jsx)(t.h2,{id:"inline-code",children:"Inline code"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"InlineCodeHighlight"})," component allows highlighting inline code snippets:"]}),"\n",(0,o.jsx)(n,{data:z})]})}function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(R,{...e,children:(0,o.jsx)(Y,{...e})})}function q(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},95696:(e,t,n)=>{"use strict";n.d(t,{l:()=>h});var o=n(6029),i=n(72567),s=n(6253),a=n(78153);let d=`
function Button() {
  return <button>Click me</button>;
}
`,r=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function l(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,o.jsx)(s.$,{size:14}):e.endsWith(".css")?(0,o.jsx)(a.R,{size:14}):null}let h={type:"code",component:function(){return(0,o.jsx)(i.o,{getFileIcon:l,radius:"md",code:[{fileName:"Button.tsx",code:d,language:"tsx"},{fileName:"Button.module.css",code:r,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${d}\`;

const cssCode = \`${r}\`;

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
`}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=34727)),_N_E=e.O()}]);