(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62851],{48541:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/code-highlight",function(){return n(14096)}])},14096:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return X}});var t=n(52322),s=n(45392),i=n(40489),a=n(82027),l=n(38483),c=n(46690),r=n(28559),d=n(87385),h=n(893),u=n(54813),p=n(38405),g=n(56179),m=n(2784),x=n(61183),f=n(44144),j=n(989);let y={...f.Z,root:(0,i.Z)(f.Z.root,j.Z.theme)},C={copyLabel:"Copy code",copiedLabel:"Copied",language:"tsx",withCopyButton:!0},b=(0,a.d)((e,o)=>{let n=(0,l.w)("CodeHighlight",C,e),{classNames:s,className:i,style:a,styles:f,unstyled:j,vars:b,children:v,code:H,copiedLabel:w,copyLabel:N,language:B,withCopyButton:k,highlightOnClient:T,...I}=n,L=(0,c.y)({name:"CodeHighlight",props:n,classes:y,className:i,style:a,classNames:s,styles:f,unstyled:j}),S=function({code:e,language:o,highlightOnClient:n}){let t=x.Z.getLanguage(o)?o:"plaintext",s=()=>x.Z.highlight(e.trim(),{language:t}).value,[i,a]=(0,m.useState)(!n),[l,c]=(0,m.useState)(n?e:s());return(0,m.useEffect)(()=>{n&&(c(s()),a(!0))},[]),(0,m.useEffect)(()=>{c(s())},[e]),()=>i?{dangerouslySetInnerHTML:{__html:l}}:{children:e.trim()}}({code:H,language:B,highlightOnClient:T});return(0,t.jsxs)(r.x,{...L("root"),ref:o,...I,dir:"ltr",children:[k&&(0,t.jsx)(d.q,{value:H.trim(),children:({copied:e,copy:o})=>(0,t.jsx)(h.u,{label:e?w:N,fz:"sm",position:"left",children:(0,t.jsx)(u.A,{onClick:o,variant:"none",...L("copy"),children:(0,t.jsx)(g.T,{copied:e})})})}),(0,t.jsx)(p.x,{type:"hover",dir:"ltr",offsetScrollbars:!1,children:(0,t.jsx)("pre",{...L("pre"),children:(0,t.jsx)("code",{...L("code"),...S()})})})]})});b.displayName="@mantine/core/CodeHighlight",b.classes=y;let v=`
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
`,H=`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${v}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" />;
}
`,w={type:"code",component:function(){return(0,t.jsx)(b,{code:v,language:"tsx"})},code:H},N=`
function Button() {
  return <button>Click me</button>;
}
`,B=`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${N}\`;

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
`,k={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{code:`// Custom copy label${N}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!"}),(0,t.jsx)(b,{code:`// Without copy button${N}`,language:"tsx",withCopyButton:!1,mt:"md"})]})},code:B};var T=n(62119);let I=`
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
`,L=`
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
`,S=`
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${I}\`;

const cssCode = \`${L}\`;

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
`,M={type:"code",component:function(){return(0,t.jsx)(T.Q,{code:[{fileName:"Demo.tsx",code:I,language:"tsx"},{fileName:"Demo.module.css",code:L,language:"scss"}]})},code:S};var P=n(60142),D=n(60934);let E=`
function Button() {
  return <button>Click me</button>;
}
`,V=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,_=`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${E}\`;

const cssCode = \`${V}\`;

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
`,z={type:"code",component:function(){return(0,t.jsx)(T.Q,{code:[{fileName:"Button.tsx",code:E,language:"tsx",icon:(0,t.jsx)(P.K,{size:18})},{fileName:"Button.module.css",code:V,language:"scss",icon:(0,t.jsx)(D.L,{size:18})}]})},code:_};var F=n(72472);let $=`
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
`,W=`
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
`,Z=`
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${$}\`;

const cssCode = \`${W}\`;

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
`,A={type:"code",component:function(){return(0,t.jsx)(T.Q,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:$,language:"tsx"},{fileName:"Demo.module.css",code:W,language:"scss"}]})},code:Z};var G=n(23522),Text=n(8582);let Q=`
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code={'<InlineCodeHighlight code="" language="tsx" />'} language="tsx" />
      . Is not that cool?
    </Text>
  );
}
`,Y={type:"code",component:function(){return(0,t.jsxs)(Text.x,{children:["You can highlight code inline:"," ",(0,t.jsx)(G._,{code:'<InlineCodeHighlight code="" language="tsx" />',language:"tsx"}),". Is not that cool?"]})},code:Q};var q=n(79016),K=n(33638);let O=(0,q.A)(K.us.CodeHighlight);function R(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:n,InstallScript:i}=o;return n||U("Demo",!0),i||U("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i,{packages:"@mantine/code-highlight"}),"\n",(0,t.jsx)(o.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import '@mantine/code-highlight/styles.css';\n"})}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"CodeHighlight"})," highlight given code with ",(0,t.jsx)(o.a,{href:"https://highlightjs.org/",children:"highlight.js"}),", it accepts\n",(0,t.jsx)(o.code,{children:"code"})," prop with string of code to highlight and ",(0,t.jsx)(o.code,{children:"language"})," prop with language name.\nIf ",(0,t.jsx)(o.code,{children:"language"})," is not provided, ",(0,t.jsx)(o.code,{children:"CodeHighlight"})," will assume that the code language is ",(0,t.jsx)(o.code,{children:"tsx"})," (TypeScript)."]}),"\n",(0,t.jsx)(n,{data:w}),"\n",(0,t.jsx)(o.h2,{id:"copy-button",children:"Copy button"}),"\n",(0,t.jsxs)(o.p,{children:["You can customize copy button labels with ",(0,t.jsx)(o.code,{children:"copyLabel"})," and ",(0,t.jsx)(o.code,{children:"copiedLabel"})," props.\nIn case you need to remove the copy button, set ",(0,t.jsx)(o.code,{children:"withCopyButton={false}"}),"."]}),"\n",(0,t.jsx)(n,{data:k}),"\n",(0,t.jsx)(o.h2,{id:"with-tabs",children:"With tabs"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"CodeHighlightTabs"})," component allows organizing multiple code blocks into tabs:"]}),"\n",(0,t.jsx)(n,{data:M}),"\n",(0,t.jsx)(o.h2,{id:"tabs-with-icons",children:"Tabs with icons"}),"\n",(0,t.jsxs)(o.p,{children:["You can use any React node as tab icon. The example below uses TypeScript and CSS\nicons from the ",(0,t.jsx)(o.code,{children:"@mantinex/dev-icons"})," package, but you can use any other icons library or custom\nicons:"]}),"\n",(0,t.jsx)(n,{data:z}),"\n",(0,t.jsx)(o.h2,{id:"tabs-icons-based-on-file-name",children:"Tabs icons based on file name"}),"\n",(0,t.jsxs)(o.p,{children:["As an alternative to providing icons manually for each tab, you can use ",(0,t.jsx)(o.code,{children:"getFileIcon"})," prop\nto assign icons based on file name. ",(0,t.jsx)(o.code,{children:"getFileIcon"})," accepts file name and must React node\nor ",(0,t.jsx)(o.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n,{data:F.H}),"\n",(0,t.jsx)(o.h2,{id:"expandable-code",children:"Expandable code"}),"\n",(0,t.jsxs)(o.p,{children:["If the code snippet is too long, you can make it expandable with ",(0,t.jsx)(o.code,{children:"withExpandButton"}),"\nand ",(0,t.jsx)(o.code,{children:"defaultExpanded={false}"})," props. To change label of the expand/collapse control\ntooltip, use ",(0,t.jsx)(o.code,{children:"expandCodeLabel"})," and ",(0,t.jsx)(o.code,{children:"collapseCodeLabel"}),"."]}),"\n",(0,t.jsx)(n,{data:A}),"\n",(0,t.jsx)(o.h2,{id:"inline-code",children:"Inline code"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"InlineCodeHighlight"})," component allows highlighting inline code snippets:"]}),"\n",(0,t.jsx)(n,{data:Y})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(O,{...e,children:(0,t.jsx)(R,{...e})})}function U(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},72472:function(e,o,n){"use strict";n.d(o,{H:function(){return h}});var t=n(52322),s=n(62119),i=n(60142),a=n(60934);let l=`
function Button() {
  return <button>Click me</button>;
}
`,c=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,r=`
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
`;function d(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,t.jsx)(i.K,{size:18}):e.endsWith(".css")?(0,t.jsx)(a.L,{size:18}):null}let h={type:"code",component:function(){return(0,t.jsx)(s.Q,{getFileIcon:d,code:[{fileName:"Button.tsx",code:l,language:"tsx"},{fileName:"Button.module.css",code:c,language:"scss"}]})},code:r}},62119:function(e,o,n){"use strict";n.d(o,{Q:function(){return k}});var t=n(52322),s=n(2784),i=n(40489),a=n(61183),l=n(58898),c=n(11200),r=n(82027),d=n(38483),h=n(46690),u=n(63409),p=n(28559),g=n(38405),m=n(893),x=n(54813),f=n(87385),j=n(9341),y=n(56179);function C({expanded:e,style:o,...n}){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,l.h)(18),height:(0,l.h)(18),...o},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...n,children:e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),(0,t.jsx)("path",{d:"M9 17l1 0"}),(0,t.jsx)("path",{d:"M14 17l1 0"}),(0,t.jsx)("path",{d:"M19 17l1 0"}),(0,t.jsx)("path",{d:"M4 17l1 0"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),(0,t.jsx)("path",{d:"M9 7l1 0"}),(0,t.jsx)("path",{d:"M14 7l1 0"}),(0,t.jsx)("path",{d:"M19 7l1 0"}),(0,t.jsx)("path",{d:"M4 7l1 0"})]})})}function b({fileIcon:e,fileName:o,getFileIcon:n,className:s,style:i}){return e?(0,t.jsx)("span",{className:s,style:i,children:e}):n&&o?(0,t.jsx)("span",{className:s,style:i,children:n(o)}):null}var v=n(44144),H=n(989);let w={...v.Z,root:(0,i.Z)(v.Z.root,H.Z.theme)},N={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,l.h)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code",withCopyButton:!0},B=(0,c.Z)((e,{maxCollapsedHeight:o})=>({root:{"--ch-max-collapsed-height":(0,l.h)(o)}})),k=(0,r.d)((e,o)=>{let n=(0,d.w)("CodeHighlightTabs",N,e),{classNames:i,className:l,style:c,styles:r,unstyled:v,vars:H,children:k,code:T,defaultActiveTab:I,activeTab:L,onTabChange:S,withHeader:M,copiedLabel:P,copyLabel:D,getFileIcon:E,maxCollapsedHeight:V,expanded:_,defaultExpanded:z,onExpandedChange:F,expandCodeLabel:$,collapseCodeLabel:W,withExpandButton:Z,withCopyButton:A,mod:G,...Q}=n,Y=(0,h.y)({name:"CodeHighlightTabs",props:n,classes:w,className:l,style:c,classNames:i,styles:r,unstyled:v,vars:H,varsResolver:B}),[q,K]=(0,j.C)({defaultValue:I,value:L,finalValue:0,onChange:S}),[O,R]=(0,j.C)({defaultValue:z,value:_,finalValue:!0,onChange:F}),X=Array.isArray(T)?T:[T],U=X[q],J=a.Z.highlight(U.code.trim(),{language:U.language||"plaintext"}).value,ee=X.map((e,o)=>(0,s.createElement)(u.k,{...Y("file"),key:e.fileName,mod:{active:o===q},onClick:()=>K(o)},(0,t.jsx)(b,{fileIcon:e.icon,getFileIcon:E,fileName:e.fileName,...Y("fileIcon")}),(0,t.jsx)("span",{children:e.fileName})));return(0,t.jsxs)(p.x,{...Y("root"),mod:[{collapsed:!O},G],ref:o,...Q,dir:"ltr",children:[M&&(0,t.jsxs)("div",{...Y("header"),children:[(0,t.jsx)(g.x,{type:"never",dir:"ltr",offsetScrollbars:!1,children:(0,t.jsx)("div",{...Y("files"),children:ee})}),(0,t.jsxs)("div",{...Y("controls"),children:[Z&&(0,t.jsx)(m.u,{label:O?W:$,fz:"sm",position:"left",children:(0,t.jsx)(x.A,{onClick:()=>R(!O),variant:"none","aria-label":O?W:$,...Y("control"),children:(0,t.jsx)(C,{expanded:O})})}),A&&(0,t.jsx)(f.q,{value:U.code.trim(),children:({copied:e,copy:o})=>(0,t.jsx)(m.u,{label:e?P:D,fz:"sm",position:"left",children:(0,t.jsx)(x.A,{onClick:o,variant:"none",...Y("control"),"aria-label":e?P:D,children:(0,t.jsx)(y.T,{copied:e})})})})]})]}),(0,t.jsx)(g.x,{type:"auto",dir:"ltr",offsetScrollbars:!1,children:(0,t.jsx)(p.x,{...Y("codeWrapper"),mod:{expanded:O},children:(0,t.jsx)("pre",{...Y("pre"),children:(0,t.jsx)("code",{...Y("code"),dangerouslySetInnerHTML:{__html:J}})})})}),(0,t.jsx)(u.k,{...Y("showCodeButton"),mod:{hidden:O},onClick:()=>R(!0),children:$})]})});k.displayName="@mantine/core/CodeHighlightTabs",k.classes=w},56179:function(e,o,n){"use strict";n.d(o,{T:function(){return i}});var t=n(52322),s=n(58898);function i({copied:e,style:o,...n}){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,s.h)(18),height:(0,s.h)(18),...o},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...n,children:e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M5 12l5 5l10 -10"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),(0,t.jsx)("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})]})})}i.displayName="@mantine/code-highlight/CopyIcon"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=48541)}),_N_E=e.O()}]);