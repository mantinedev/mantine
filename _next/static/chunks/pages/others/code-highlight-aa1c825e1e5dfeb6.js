(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4404],{33507:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},37207:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/code-highlight",function(){return o(13325)}])},13325:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return _}});var n=o(85893),s=o(11151),a=o(19905),i=o(9904),c=o(67294),l=o(82185);let r=`
// VisuallyHidden component source code
import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  Factory,
} from '../../core';
import classes from './VisuallyHidden.module.css';

export type VisuallyHiddenStylesNames = 'root';

export interface VisuallyHiddenProps
  extends BoxProps,
    StylesApiProps<VisuallyHiddenFactory>,
    ElementProps<'div'> {}

export type VisuallyHiddenFactory = Factory<{
  props: VisuallyHiddenProps;
  ref: HTMLDivElement;
  stylesNames: VisuallyHiddenStylesNames;
}>;

const defaultProps: Partial<VisuallyHiddenProps> = {};

export const VisuallyHidden = factory<VisuallyHiddenFactory>((_props, ref) => {
  const props = useProps('VisuallyHidden', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<VisuallyHiddenFactory>({
    name: 'VisuallyHidden',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  return <Box component="span" ref={ref} {...getStyles('root')} {...others} />;
});

VisuallyHidden.classes = classes;
VisuallyHidden.displayName = '@mantine/core/VisuallyHidden';
`,d=`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${r}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" />;
}
`,u={type:"code",component:function(){return c.createElement(l.P,{code:r,language:"tsx"})},code:d},h=`
function Button() {
  return <button>Click me</button>;
}
`,p=`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${h}\`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={\`// Custom copy label\${exampleCode}\`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
      />
      <CodeHighlight
        code={\`// Without copy button\${exampleCode}\`}
        language="tsx"
        withCopyButton={false}
        mt="md"
      />
    </>
  );
}
`,m={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(l.P,{code:`// Custom copy label${h}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!"}),c.createElement(l.P,{code:`// Without copy button${h}`,language:"tsx",withCopyButton:!1,mt:"md"}))},code:p};var g=o(45301);let f=`
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
`,x=`
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
`,y=`
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${f}\`;

const cssCode = \`${x}\`;

function Demo() {
  return (
    <CodeHighlightTabs
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,v={type:"code",component:function(){return c.createElement(g.Q,{code:[{fileName:"Demo.tsx",code:f,language:"tsx"},{fileName:"Demo.module.css",code:x,language:"scss"}]})},code:y};var b=o(97378),C=o(69458);let j=`
function Button() {
  return <button>Click me</button>;
}
`,k=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,H=`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantine/ds';

const tsxCode = \`${j}\`;

const cssCode = \`${k}\`;

function Demo() {
  const tsIcon = <TypeScriptIcon size={18} />;
  const cssIcon = <CssIcon size={18} />;

  return (
    <CodeHighlightTabs
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
`,w={type:"code",component:function(){return c.createElement(g.Q,{code:[{fileName:"Button.tsx",code:j,language:"tsx",icon:c.createElement(b.K,{size:18})},{fileName:"Button.module.css",code:k,language:"scss",icon:c.createElement(C.L,{size:18})}]})},code:H};var N=o(33775);let B=`
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
`,I=`
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
`,M=`
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${B}\`;

const cssCode = \`${I}\`;

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandCodeLabel="Show full code"
      collapseCodeLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,E={type:"code",component:function(){return c.createElement(g.Q,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:B,language:"tsx"},{fileName:"Demo.module.css",code:I,language:"scss"}]})},code:M};var T=o(72039),P=o(32976);let D=`
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code="import React from 'react';" language="tsx" />. Is not that cool?
    </Text>
  );
}
`,S={type:"code",component:function(){return c.createElement(T.x,null,"You can highlight code inline:"," ",c.createElement(P._,{code:"import React from 'react';",language:"tsx"}),". Is not that cool?")},code:D},L=(0,a.A)(i.us.CodeHighlight);function V(e){let t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,s.ah)(),e.components),{InstallScript:o,Demo:a}=t;return a||Z("Demo",!0),o||Z("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(o,{packages:"@mantine/code-highlight"}),"\n",(0,n.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/code-highlight/styles.css';\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"CodeHighlight"})," highlight given code with ",(0,n.jsx)(t.a,{href:"https://highlightjs.org/",children:"highlight.js"}),", it accepts\n",(0,n.jsx)(t.code,{children:"code"})," prop with string of code to highlight and ",(0,n.jsx)(t.code,{children:"language"})," prop with language name.\nIf ",(0,n.jsx)(t.code,{children:"language"})," is not provided, ",(0,n.jsx)(t.code,{children:"CodeHighlight"})," will assume that the code language is ",(0,n.jsx)(t.code,{children:"tsx"})," (TypeScript)."]}),"\n",(0,n.jsx)(a,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"copy-button",children:"Copy button"}),"\n",(0,n.jsxs)(t.p,{children:["You can customize copy button labels with ",(0,n.jsx)(t.code,{children:"copyLabel"})," and ",(0,n.jsx)(t.code,{children:"copiedLabel"})," props.\nIn case you need to remove the copy button, set ",(0,n.jsx)(t.code,{children:"withCopyButton={false}"}),"."]}),"\n",(0,n.jsx)(a,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"with-tabs",children:"With tabs"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"CodeHighlightTabs"})," component allows organizing multiple code blocks into tabs:"]}),"\n",(0,n.jsx)(a,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"tabs-with-icons",children:"Tabs with icons"}),"\n",(0,n.jsxs)(t.p,{children:["You can use any React node as tab icon. The example below uses TypeScript and CSS\nicons from the ",(0,n.jsx)(t.code,{children:"@mantine/ds"})," package, but you can use any other icons library or custom\nicons:"]}),"\n",(0,n.jsx)(a,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"tabs-icons-based-on-file-name",children:"Tabs icons based on file name"}),"\n",(0,n.jsxs)(t.p,{children:["As an alternative to providing icons manually for each tab, you can use ",(0,n.jsx)(t.code,{children:"getFileIcon"})," prop\nto assign icons based on file name. ",(0,n.jsx)(t.code,{children:"getFileIcon"})," accepts file name and must React node\nor ",(0,n.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(a,{data:N.H}),"\n",(0,n.jsx)(t.h2,{id:"expandable-code",children:"Expandable code"}),"\n",(0,n.jsxs)(t.p,{children:["If the code snippet is too long, you can make it expandable with ",(0,n.jsx)(t.code,{children:"withExpandButton"}),"\nand ",(0,n.jsx)(t.code,{children:"defaultExpanded={false}"})," props. To change label of the expand/collapse control\ntooltip, use ",(0,n.jsx)(t.code,{children:"expandCodeLabel"})," and ",(0,n.jsx)(t.code,{children:"collapseCodeLabel"}),"."]}),"\n",(0,n.jsx)(a,{data:E}),"\n",(0,n.jsx)(t.h2,{id:"inline-code",children:"Inline code"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"InlineCodeHighlight"})," component allows highlighting inline code snippets:"]}),"\n",(0,n.jsx)(a,{data:S})]})}var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(L,Object.assign({},e,{children:(0,n.jsx)(V,e)}))};function Z(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},33775:function(e,t,o){"use strict";o.d(t,{H:function(){return u}});var n=o(67294),s=o(97378),a=o(69458),i=o(45301);let c=`
function Button() {
  return <button>Click me</button>;
}
`,l=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,r=`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantine/ds';

const tsxCode = \`${c}\`;

const cssCode = \`${l}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
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
`;function d(e){return e.endsWith(".ts")||e.endsWith(".tsx")?n.createElement(s.K,{size:18}):e.endsWith(".css")?n.createElement(a.L,{size:18}):null}let u={type:"code",component:function(){return n.createElement(i.Q,{getFileIcon:d,code:[{fileName:"Button.tsx",code:c,language:"tsx"},{fileName:"Button.module.css",code:l,language:"scss"}]})},code:r}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=37207)}),_N_E=e.O()}]);