(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{90963:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/code-highlight",function(){return t(34859)}])},34859:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>X});var n=t(31085),s=t(71184),i=t(54357),a=t(6754),l=t(29686),c=t(69564),r=t(34056),d=t(8727),h=t(2912),u=t(22962),p=t(37950),m=t(22376),g=t(14041),x=t(30127),f=t(17386),j=t(30569);let y={...f.A,root:(0,i.A)(f.A.root,j.A.theme)},C={copyLabel:"Copy code",copiedLabel:"Copied",language:"tsx",withCopyButton:!0},b=(0,a.P9)((e,o)=>{let t=(0,l.Y)("CodeHighlight",C,e),{classNames:s,className:i,style:a,styles:f,unstyled:j,vars:b,children:v,code:H,copiedLabel:w,copyLabel:N,language:B,withCopyButton:k,highlightOnClient:I,...T}=t,D=(0,c.I)({name:"CodeHighlight",props:t,classes:y,className:i,style:a,classNames:s,styles:f,unstyled:j}),M=function({code:e,language:o,highlightOnClient:t}){let n=x.A.getLanguage(o)?o:"plaintext",s=()=>x.A.highlight(e.trim(),{language:n}).value,[i,a]=(0,g.useState)(!t),[l,c]=(0,g.useState)(t?e:s());return(0,g.useEffect)(()=>{t&&(c(s()),a(!0))},[]),(0,g.useEffect)(()=>{c(s())},[e]),()=>i?{dangerouslySetInnerHTML:{__html:l}}:{children:e.trim()}}({code:H,language:B,highlightOnClient:I});return(0,n.jsxs)(r.a,{...D("root"),ref:o,...T,dir:"ltr",children:[k&&(0,n.jsx)(d.i,{value:H.trim(),children:({copied:e,copy:o})=>(0,n.jsx)(h.m,{label:e?w:N,fz:"sm",position:"left",children:(0,n.jsx)(u.M,{onClick:o,variant:"none",...D("copy"),children:(0,n.jsx)(m.T,{copied:e})})})}),(0,n.jsx)(p.F,{type:"hover",dir:"ltr",offsetScrollbars:!1,children:(0,n.jsx)("pre",{...D("pre"),children:(0,n.jsx)("code",{...D("code"),...M()})})})]})});b.displayName="@mantine/core/CodeHighlight",b.classes=y;let v=`
// VisuallyHidden component source code

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
`,H={type:"code",component:function(){return(0,n.jsx)(b,{code:v,language:"tsx"})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${v}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" />;
}
`},w=`
function Button() {
  return <button>Click me</button>;
}
`,N={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{code:`// Custom copy label${w}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!"}),(0,n.jsx)(b,{code:`// Without copy button${w}`,language:"tsx",withCopyButton:!1,mt:"md"})]})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${w}\`;

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
`};var B=t(82306);let k=`
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
`,T={type:"code",component:function(){return(0,n.jsx)(B.o,{code:[{fileName:"Demo.tsx",code:k,language:"tsx"},{fileName:"Demo.module.css",code:I,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${k}\`;

const cssCode = \`${I}\`;

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
`};var D=t(6464),M=t(54948);let P=`
function Button() {
  return <button>Click me</button>;
}
`,S=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,L={type:"code",component:function(){return(0,n.jsx)(B.o,{code:[{fileName:"Button.tsx",code:P,language:"tsx",icon:(0,n.jsx)(D.$,{size:18})},{fileName:"Button.module.css",code:S,language:"scss",icon:(0,n.jsx)(M.R,{size:18})}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${P}\`;

const cssCode = \`${S}\`;

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
`};var E=t(71689);let V=`
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
`,F=`
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
`,z={type:"code",component:function(){return(0,n.jsx)(B.o,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:V,language:"tsx"},{fileName:"Demo.module.css",code:F,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${V}\`;

const cssCode = \`${F}\`;

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
`};var _=t(23004),A=t(93065);let $={type:"code",component:function(){return(0,n.jsxs)(A.E,{children:["You can highlight code inline:"," ",(0,n.jsx)(_.P,{code:'<InlineCodeHighlight code="" language="tsx" />',language:"tsx"}),". Is that not cool?"]})},code:`
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code='<InlineCodeHighlight code="" language="tsx" />' language="tsx" />.
      Is that not cool?
    </Text>
  );
}
`};var W=t(85954),G=t(38215);let Y=(0,W.P)(G.XZ.CodeHighlight);function R(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:t,InstallScript:i}=o;return t||Z("Demo",!0),i||Z("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(i,{packages:"@mantine/code-highlight"}),"\n",(0,n.jsx)(o.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import '@mantine/code-highlight/styles.css';\n"})}),"\n",(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"CodeHighlight"})," highlight given code with ",(0,n.jsx)(o.a,{href:"https://highlightjs.org/",children:"highlight.js"}),", it accepts\n",(0,n.jsx)(o.code,{children:"code"})," prop with string of code to highlight and ",(0,n.jsx)(o.code,{children:"language"})," prop with language name.\nIf ",(0,n.jsx)(o.code,{children:"language"})," is not provided, ",(0,n.jsx)(o.code,{children:"CodeHighlight"})," will assume that the code language is ",(0,n.jsx)(o.code,{children:"tsx"})," (TypeScript)."]}),"\n",(0,n.jsx)(t,{data:H}),"\n",(0,n.jsx)(o.h2,{id:"copy-button",children:"Copy button"}),"\n",(0,n.jsxs)(o.p,{children:["You can customize copy button labels with ",(0,n.jsx)(o.code,{children:"copyLabel"})," and ",(0,n.jsx)(o.code,{children:"copiedLabel"})," props.\nIn case you need to remove the copy button, set ",(0,n.jsx)(o.code,{children:"withCopyButton={false}"}),"."]}),"\n",(0,n.jsx)(t,{data:N}),"\n",(0,n.jsx)(o.h2,{id:"with-tabs",children:"With tabs"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"CodeHighlightTabs"})," component allows organizing multiple code blocks into tabs:"]}),"\n",(0,n.jsx)(t,{data:T}),"\n",(0,n.jsx)(o.h2,{id:"tabs-with-icons",children:"Tabs with icons"}),"\n",(0,n.jsxs)(o.p,{children:["You can use any React node as tab icon. The example below uses TypeScript and CSS\nicons from the ",(0,n.jsx)(o.code,{children:"@mantinex/dev-icons"})," package, but you can use any other icons library or custom\nicons:"]}),"\n",(0,n.jsx)(t,{data:L}),"\n",(0,n.jsx)(o.h2,{id:"tabs-icons-based-on-file-name",children:"Tabs icons based on file name"}),"\n",(0,n.jsxs)(o.p,{children:["As an alternative to providing icons manually for each tab, you can use ",(0,n.jsx)(o.code,{children:"getFileIcon"})," prop\nto assign icons based on file name. ",(0,n.jsx)(o.code,{children:"getFileIcon"})," accepts file name and must React node\nor ",(0,n.jsx)(o.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(t,{data:E.l}),"\n",(0,n.jsx)(o.h2,{id:"expandable-code",children:"Expandable code"}),"\n",(0,n.jsxs)(o.p,{children:["If the code snippet is too long, you can make it expandable with ",(0,n.jsx)(o.code,{children:"withExpandButton"}),"\nand ",(0,n.jsx)(o.code,{children:"defaultExpanded={false}"})," props. To change label of the expand/collapse control\ntooltip, use ",(0,n.jsx)(o.code,{children:"expandCodeLabel"})," and ",(0,n.jsx)(o.code,{children:"collapseCodeLabel"}),"."]}),"\n",(0,n.jsx)(t,{data:z}),"\n",(0,n.jsx)(o.h2,{id:"inline-code",children:"Inline code"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"InlineCodeHighlight"})," component allows highlighting inline code snippets:"]}),"\n",(0,n.jsx)(t,{data:$})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(Y,{...e,children:(0,n.jsx)(R,{...e})})}function Z(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},71689:(e,o,t)=>{"use strict";t.d(o,{l:()=>d});var n=t(31085),s=t(82306),i=t(6464),a=t(54948);let l=`
function Button() {
  return <button>Click me</button>;
}
`,c=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function r(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,n.jsx)(i.$,{size:18}):e.endsWith(".css")?(0,n.jsx)(a.R,{size:18}):null}let d={type:"code",component:function(){return(0,n.jsx)(s.o,{getFileIcon:r,code:[{fileName:"Button.tsx",code:l,language:"tsx"},{fileName:"Button.module.css",code:c,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${l}\`;

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
`}},82306:(e,o,t)=>{"use strict";t.d(o,{o:()=>k});var n=t(31085),s=t(14041),i=t(54357),a=t(30127),l=t(39735),c=t(7098),r=t(6754),d=t(29686),h=t(69564),u=t(33970),p=t(34056),m=t(37950),g=t(2912),x=t(22962),f=t(8727),j=t(82307),y=t(22376);function C({expanded:e,style:o,...t}){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,l.D)(18),height:(0,l.D)(18),...o},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...t,children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),(0,n.jsx)("path",{d:"M9 17l1 0"}),(0,n.jsx)("path",{d:"M14 17l1 0"}),(0,n.jsx)("path",{d:"M19 17l1 0"}),(0,n.jsx)("path",{d:"M4 17l1 0"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),(0,n.jsx)("path",{d:"M9 7l1 0"}),(0,n.jsx)("path",{d:"M14 7l1 0"}),(0,n.jsx)("path",{d:"M19 7l1 0"}),(0,n.jsx)("path",{d:"M4 7l1 0"})]})})}function b({fileIcon:e,fileName:o,getFileIcon:t,className:s,style:i}){return e?(0,n.jsx)("span",{className:s,style:i,children:e}):t&&o?(0,n.jsx)("span",{className:s,style:i,children:t(o)}):null}var v=t(17386),H=t(30569);let w={...v.A,root:(0,i.A)(v.A.root,H.A.theme)},N={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,l.D)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code",withCopyButton:!0},B=(0,c.V)((e,{maxCollapsedHeight:o})=>({root:{"--ch-max-collapsed-height":(0,l.D)(o)}})),k=(0,r.P9)((e,o)=>{let t=(0,d.Y)("CodeHighlightTabs",N,e),{classNames:i,className:l,style:c,styles:r,unstyled:v,vars:H,children:k,code:I,defaultActiveTab:T,activeTab:D,onTabChange:M,withHeader:P,copiedLabel:S,copyLabel:L,getFileIcon:E,maxCollapsedHeight:V,expanded:F,defaultExpanded:z,onExpandedChange:_,expandCodeLabel:A,collapseCodeLabel:$,withExpandButton:W,withCopyButton:G,mod:Y,...R}=t,X=(0,h.I)({name:"CodeHighlightTabs",props:t,classes:w,className:l,style:c,classNames:i,styles:r,unstyled:v,vars:H,varsResolver:B}),[Z,O]=(0,j.Z)({defaultValue:T,value:D,finalValue:0,onChange:M}),[U,q]=(0,j.Z)({defaultValue:z,value:F,finalValue:!0,onChange:_}),J=Array.isArray(I)?I:[I],K=J[Z],Q=a.A.highlight(K.code.trim(),{language:K.language||"plaintext"}).value,ee=J.map((e,o)=>(0,s.createElement)(u.N,{...X("file"),key:e.fileName,mod:{active:o===Z},onClick:()=>O(o)},(0,n.jsx)(b,{fileIcon:e.icon,getFileIcon:E,fileName:e.fileName,...X("fileIcon")}),(0,n.jsx)("span",{children:e.fileName})));return(0,n.jsxs)(p.a,{...X("root"),mod:[{collapsed:!U},Y],ref:o,...R,dir:"ltr",children:[P&&(0,n.jsxs)("div",{...X("header"),children:[(0,n.jsx)(m.F,{type:"never",dir:"ltr",offsetScrollbars:!1,children:(0,n.jsx)("div",{...X("files"),children:ee})}),(0,n.jsxs)("div",{...X("controls"),children:[W&&(0,n.jsx)(g.m,{label:U?$:A,fz:"sm",position:"left",children:(0,n.jsx)(x.M,{onClick:()=>q(!U),variant:"none","aria-label":U?$:A,...X("control"),children:(0,n.jsx)(C,{expanded:U})})}),G&&(0,n.jsx)(f.i,{value:K.code.trim(),children:({copied:e,copy:o})=>(0,n.jsx)(g.m,{label:e?S:L,fz:"sm",position:"left",children:(0,n.jsx)(x.M,{onClick:o,variant:"none",...X("control"),"aria-label":e?S:L,children:(0,n.jsx)(y.T,{copied:e})})})})]})]}),(0,n.jsx)(m.F,{type:"auto",dir:"ltr",offsetScrollbars:!1,children:(0,n.jsx)(p.a,{...X("codeWrapper"),mod:{expanded:U},children:(0,n.jsx)("pre",{...X("pre"),children:(0,n.jsx)("code",{...X("code"),dangerouslySetInnerHTML:{__html:Q}})})})}),(0,n.jsx)(u.N,{...X("showCodeButton"),mod:{hidden:U},onClick:()=>q(!0),children:A})]})});k.displayName="@mantine/core/CodeHighlightTabs",k.classes=w},22376:(e,o,t)=>{"use strict";t.d(o,{T:()=>i});var n=t(31085),s=t(39735);function i({copied:e,style:o,...t}){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,s.D)(18),height:(0,s.D)(18),...o},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...t,children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M5 12l5 5l10 -10"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),(0,n.jsx)("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})]})})}i.displayName="@mantine/code-highlight/CopyIcon"}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,39699,68831,90636,46593,38792],()=>o(90963)),_N_E=e.O()}]);