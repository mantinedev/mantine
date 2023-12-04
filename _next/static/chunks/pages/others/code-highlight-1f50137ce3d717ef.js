(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4404],{62258:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/code-highlight",function(){return n(62081)}])},62081:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var o=n(24246),a=n(71670),l=n(3916),i=n(30289),r=n(27378),c=n(40624),s=n(20410),d=n(96739),m=n(6231),u=n(56589),h=n(78131),p=n(99684),g=n(84246),f=n(49849),x=n(2688),y=n(77199),b=n(42595),C=n(17441);let E={...b.Z,root:(0,c.Z)(b.Z.root,C.Z.theme)},v={copyLabel:"Copy code",copiedLabel:"Copied",language:"tsx",withCopyButton:!0},j=(0,s.d)((e,t)=>{let n=(0,d.w)("CodeHighlight",v,e),{classNames:o,className:a,style:l,styles:i,unstyled:c,vars:s,children:b,code:C,copiedLabel:j,copyLabel:H,language:w,withCopyButton:N,highlightOnClient:k,...B}=n,T=(0,m.y)({name:"CodeHighlight",props:n,classes:E,className:a,style:l,classNames:o,styles:i,unstyled:c}),I=function({code:e,language:t,highlightOnClient:n}){let o=x.Z.getLanguage(t)?t:"plaintext",a=()=>x.Z.highlight(e.trim(),{language:o}).value,[l,i]=(0,r.useState)(!n),[c,s]=(0,r.useState)(n?e:a());return(0,r.useEffect)(()=>{n&&(s(a()),i(!0))},[]),(0,r.useEffect)(()=>{s(a())},[e]),()=>l?{dangerouslySetInnerHTML:{__html:c}}:{children:e.trim()}}({code:C,language:w,highlightOnClient:k});return r.createElement(u.x,{...T("root"),ref:t,...B,dir:"ltr"},N&&r.createElement(h.q,{value:C.trim()},({copied:e,copy:t})=>r.createElement(p.u,{label:e?j:H,fz:"sm",position:"left"},r.createElement(g.A,{onClick:t,variant:"none",...T("copy")},r.createElement(y.T,{copied:e})))),r.createElement(f.x,{type:"hover",dir:"ltr",offsetScrollbars:!1},r.createElement("pre",{...T("pre")},r.createElement("code",{...T("code"),...I()}))))});j.displayName="@mantine/core/CodeHighlight",j.classes=E;let H=`
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
`,w=`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${H}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" />;
}
`,N={type:"code",component:function(){return r.createElement(j,{code:H,language:"tsx"})},code:w},k=`
function Button() {
  return <button>Click me</button>;
}
`,B=`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${k}\`;

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
`,T={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(j,{code:`// Custom copy label${k}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!"}),r.createElement(j,{code:`// Without copy button${k}`,language:"tsx",withCopyButton:!1,mt:"md"}))},code:B};var I=n(61209);let L=`
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
`,S=`
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

const tsxCode = \`${L}\`;

const cssCode = \`${S}\`;

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
`,P={type:"code",component:function(){return r.createElement(I.Q,{code:[{fileName:"Demo.tsx",code:L,language:"tsx"},{fileName:"Demo.module.css",code:S,language:"scss"}]})},code:M};var D=n(8858),V=n(96850);let _=`
function Button() {
  return <button>Click me</button>;
}
`,z=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,F=`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${_}\`;

const cssCode = \`${z}\`;

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
`,$={type:"code",component:function(){return r.createElement(I.Q,{code:[{fileName:"Button.tsx",code:_,language:"tsx",icon:r.createElement(D.K,{size:18})},{fileName:"Button.module.css",code:z,language:"scss",icon:r.createElement(V.L,{size:18})}]})},code:F};var W=n(110);let Z=`
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
`,A=`
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
`,G=`
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${Z}\`;

const cssCode = \`${A}\`;

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
`,Q={type:"code",component:function(){return r.createElement(I.Q,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:Z,language:"tsx"},{fileName:"Demo.module.css",code:A,language:"scss"}]})},code:G};var Text=n(26569),R=n(37127);let Y=`
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
`,q={type:"code",component:function(){return r.createElement(Text.x,null,"You can highlight code inline:"," ",r.createElement(R._,{code:"import React from 'react';",language:"tsx"}),". Is not that cool?")},code:Y},K=(0,l.A)(i.us.CodeHighlight);function O(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:n,InstallScript:l}=t;return n||U("Demo",!0),l||U("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(l,{packages:"@mantine/code-highlight"}),"\n",(0,o.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/code-highlight/styles.css';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"CodeHighlight"})," highlight given code with ",(0,o.jsx)(t.a,{href:"https://highlightjs.org/",children:"highlight.js"}),", it accepts\n",(0,o.jsx)(t.code,{children:"code"})," prop with string of code to highlight and ",(0,o.jsx)(t.code,{children:"language"})," prop with language name.\nIf ",(0,o.jsx)(t.code,{children:"language"})," is not provided, ",(0,o.jsx)(t.code,{children:"CodeHighlight"})," will assume that the code language is ",(0,o.jsx)(t.code,{children:"tsx"})," (TypeScript)."]}),"\n",(0,o.jsx)(n,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"copy-button",children:"Copy button"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize copy button labels with ",(0,o.jsx)(t.code,{children:"copyLabel"})," and ",(0,o.jsx)(t.code,{children:"copiedLabel"})," props.\nIn case you need to remove the copy button, set ",(0,o.jsx)(t.code,{children:"withCopyButton={false}"}),"."]}),"\n",(0,o.jsx)(n,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"with-tabs",children:"With tabs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"CodeHighlightTabs"})," component allows organizing multiple code blocks into tabs:"]}),"\n",(0,o.jsx)(n,{data:P}),"\n",(0,o.jsx)(t.h2,{id:"tabs-with-icons",children:"Tabs with icons"}),"\n",(0,o.jsxs)(t.p,{children:["You can use any React node as tab icon. The example below uses TypeScript and CSS\nicons from the ",(0,o.jsx)(t.code,{children:"@mantinex/dev-icons"})," package, but you can use any other icons library or custom\nicons:"]}),"\n",(0,o.jsx)(n,{data:$}),"\n",(0,o.jsx)(t.h2,{id:"tabs-icons-based-on-file-name",children:"Tabs icons based on file name"}),"\n",(0,o.jsxs)(t.p,{children:["As an alternative to providing icons manually for each tab, you can use ",(0,o.jsx)(t.code,{children:"getFileIcon"})," prop\nto assign icons based on file name. ",(0,o.jsx)(t.code,{children:"getFileIcon"})," accepts file name and must React node\nor ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(n,{data:W.H}),"\n",(0,o.jsx)(t.h2,{id:"expandable-code",children:"Expandable code"}),"\n",(0,o.jsxs)(t.p,{children:["If the code snippet is too long, you can make it expandable with ",(0,o.jsx)(t.code,{children:"withExpandButton"}),"\nand ",(0,o.jsx)(t.code,{children:"defaultExpanded={false}"})," props. To change label of the expand/collapse control\ntooltip, use ",(0,o.jsx)(t.code,{children:"expandCodeLabel"})," and ",(0,o.jsx)(t.code,{children:"collapseCodeLabel"}),"."]}),"\n",(0,o.jsx)(n,{data:Q}),"\n",(0,o.jsx)(t.h2,{id:"inline-code",children:"Inline code"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"InlineCodeHighlight"})," component allows highlighting inline code snippets:"]}),"\n",(0,o.jsx)(n,{data:q})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(K,{...e,children:(0,o.jsx)(O,{...e})})}function U(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},110:function(e,t,n){"use strict";n.d(t,{H:function(){return m}});var o=n(27378),a=n(8858),l=n(96850),i=n(61209);let r=`
function Button() {
  return <button>Click me</button>;
}
`,c=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,s=`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${r}\`;

const cssCode = \`${c}\`;

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
`;function d(e){return e.endsWith(".ts")||e.endsWith(".tsx")?o.createElement(a.K,{size:18}):e.endsWith(".css")?o.createElement(l.L,{size:18}):null}let m={type:"code",component:function(){return o.createElement(i.Q,{getFileIcon:d,code:[{fileName:"Button.tsx",code:r,language:"tsx"},{fileName:"Button.module.css",code:c,language:"scss"}]})},code:s}},61209:function(e,t,n){"use strict";n.d(t,{Q:function(){return N}});var o=n(27378),a=n(2688),l=n(40624),i=n(58675),r=n(71078),c=n(83453),s=n(20410),d=n(96739),m=n(6231),u=n(19397),h=n(56589),p=n(49849),g=n(99684),f=n(84246),x=n(78131),y=n(77199);function b({fileIcon:e,fileName:t,getFileIcon:n,className:a,style:l}){return e?o.createElement("span",{className:a,style:l},e):n&&t?o.createElement("span",{className:a,style:l},n(t)):null}function C({expanded:e,style:t,...n}){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,r.h)(18),height:(0,r.h)(18),...t},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...n},e?o.createElement(o.Fragment,null,o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),o.createElement("path",{d:"M9 17l1 0"}),o.createElement("path",{d:"M14 17l1 0"}),o.createElement("path",{d:"M19 17l1 0"}),o.createElement("path",{d:"M4 17l1 0"})):o.createElement(o.Fragment,null,o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),o.createElement("path",{d:"M9 7l1 0"}),o.createElement("path",{d:"M14 7l1 0"}),o.createElement("path",{d:"M19 7l1 0"}),o.createElement("path",{d:"M4 7l1 0"})))}var E=n(42595),v=n(17441);let j={...E.Z,root:(0,l.Z)(E.Z.root,v.Z.theme)},H={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,r.h)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code"},w=(0,c.Z)((e,{maxCollapsedHeight:t})=>({root:{"--ch-max-collapsed-height":(0,r.h)(t)}})),N=(0,s.d)((e,t)=>{let n=(0,d.w)("CodeHighlightTabs",H,e),{classNames:l,className:r,style:c,styles:s,unstyled:E,vars:v,children:N,code:k,defaultActiveTab:B,activeTab:T,onTabChange:I,withHeader:L,copiedLabel:S,copyLabel:M,getFileIcon:P,maxCollapsedHeight:D,expanded:V,defaultExpanded:_,onExpandedChange:z,expandCodeLabel:F,collapseCodeLabel:$,withExpandButton:W,...Z}=n,A=(0,m.y)({name:"CodeHighlightTabs",props:n,classes:j,className:r,style:c,classNames:l,styles:s,unstyled:E,vars:v,varsResolver:w}),[G,Q]=(0,i.C)({defaultValue:B,value:T,finalValue:0,onChange:I}),[R,Y]=(0,i.C)({defaultValue:_,value:V,finalValue:!0,onChange:z}),q=Array.isArray(k)?k:[k],K=q[G],O=a.Z.highlight(K.code.trim(),{language:K.language||"plaintext"}).value,X=q.map((e,t)=>o.createElement(u.k,{...A("file"),key:e.fileName,mod:{active:t===G},onClick:()=>Q(t)},o.createElement(b,{fileIcon:e.icon,getFileIcon:P,fileName:e.fileName,...A("fileIcon")}),o.createElement("span",null,e.fileName)));return o.createElement(h.x,{...A("root"),mod:{collapsed:!R},ref:t,...Z,dir:"ltr"},L&&o.createElement("div",{...A("header")},o.createElement(p.x,{type:"never",dir:"ltr",offsetScrollbars:!1},o.createElement("div",{...A("files")},X)),o.createElement("div",{...A("controls")},W&&o.createElement(g.u,{label:R?$:F,fz:"sm",position:"left"},o.createElement(f.A,{onClick:()=>Y(!R),variant:"none","aria-label":R?$:F,...A("control")},o.createElement(C,{expanded:R}))),o.createElement(x.q,{value:K.code.trim()},({copied:e,copy:t})=>o.createElement(g.u,{label:e?S:M,fz:"sm",position:"left"},o.createElement(f.A,{onClick:t,variant:"none",...A("control"),"aria-label":e?S:M},o.createElement(y.T,{copied:e})))))),o.createElement(p.x,{type:"auto",dir:"ltr",offsetScrollbars:!1},o.createElement(h.x,{...A("codeWrapper"),mod:{expanded:R}},o.createElement("pre",{...A("pre")},o.createElement("code",{...A("code"),dangerouslySetInnerHTML:{__html:O}})))),o.createElement(u.k,{...A("showCodeButton"),mod:{hidden:R},onClick:()=>Y(!0)},F))});N.displayName="@mantine/core/CodeHighlightTabs",N.classes=j},77199:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var o=n(71078),a=n(27378);function l({copied:e,style:t,...n}){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,o.h)(18),height:(0,o.h)(18),...t},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...n},e?a.createElement(a.Fragment,null,a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M5 12l5 5l10 -10"})):a.createElement(a.Fragment,null,a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),a.createElement("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})))}l.displayName="@mantine/code-highlight/CopyIcon"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=62258)}),_N_E=e.O()}]);