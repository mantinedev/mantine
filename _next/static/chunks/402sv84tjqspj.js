(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var i in e)t(n,i,{get:e[i],enumerable:!0});return o||t(n,Symbol.toStringTag,{value:"Module"}),n}])},210200,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(o.default,{ref:i,...e,weights:n}));i.displayName="ChatCircleIcon",e.s(["ChatCircleIcon",0,i],210200)},508780,e=>{"use strict";var t=e.i(648863),o=e.i(391398),n=e.i(577824);let i=`
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
`,a={type:"code",component:function(){return(0,o.jsx)(n.CodeHighlight,{code:i,language:"tsx",radius:"md"})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${i}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
`};var s=e.i(137218);let r=`
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
`,l=`
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
`,d={type:"code",component:function(){return(0,o.jsx)(s.CodeHighlightTabs,{radius:"md",code:[{fileName:"Demo.tsx",code:r,language:"tsx"},{fileName:"Demo.module.css",code:l,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
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
export const tsxCode = \`${r}\`;

export const cssCode = \`${l}\`;
`,language:"tsx"}]};var c=e.i(271270),h=e.i(999479);let g=`
function Button() {
  return <button>Click me</button>;
}
`,m=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,p={type:"code",component:function(){return(0,o.jsx)(s.CodeHighlightTabs,{radius:"md",code:[{fileName:"Button.tsx",code:g,language:"tsx",icon:(0,o.jsx)(h.TypeScriptIcon,{size:14})},{fileName:"Button.module.css",code:m,language:"scss",icon:(0,o.jsx)(c.CssIcon,{size:14})}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${g}\`;

const cssCode = \`${m}\`;

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
`},u=`
function Button() {
  return <button>Click me</button>;
}
`,x=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function f(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,o.jsx)(h.TypeScriptIcon,{size:14}):e.endsWith(".css")?(0,o.jsx)(c.CssIcon,{size:14}):null}let C={type:"code",component:function(){return(0,o.jsx)(s.CodeHighlightTabs,{getFileIcon:f,radius:"md",code:[{fileName:"Button.tsx",code:u,language:"tsx"},{fileName:"Button.module.css",code:x,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${u}\`;

const cssCode = \`${x}\`;

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
`},j=`
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
`,b=`
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
`,y={type:"code",component:function(){return(0,o.jsx)(s.CodeHighlightTabs,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:j,language:"tsx"},{fileName:"Demo.module.css",code:b,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
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

export const cssCode = \`${b}\`;
`,language:"tsx"}]},v=`
function Button() {
  return <button>Click me</button>;
}
`,H={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.CodeHighlight,{code:`// Custom copy label${v}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!",radius:"md"}),(0,o.jsx)(n.CodeHighlight,{code:`// Without copy button${v}`,language:"tsx",withCopyButton:!1,mt:"md",radius:"md"})]})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${v}\`;

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
`};var k=e.i(883364),A=e.i(297800),T=e.i(481178),L=e.i(275519),w=e.i(433512),I=e.i(317477),Z=e.i(44091),M=e.i(391466);let S=(0,T.createVarsResolver)((e,{background:t,radius:o})=>({inlineCodeHighlight:{"--ch-background":t?(0,I.getThemeColor)(t,e):void 0,"--ch-radius":void 0!==o?(0,w.getRadius)(o):void 0}})),N=(0,L.factory)(e=>{let t=(0,Z.useProps)("InlineCodeHighlight",null,e),{classNames:i,className:a,style:s,styles:r,unstyled:l,vars:d,attributes:c,ref:h,...g}=t,m=(0,M.useStyles)({name:"InlineCodeHighlight",classes:A.default,props:t,className:a,style:s,classNames:i,styles:r,unstyled:l,attributes:c,vars:d,varsResolver:S,rootSelector:"inlineCodeHighlight"});return(0,o.jsx)(n.CodeHighlight,{...g,ref:h,...m("inlineCodeHighlight"),__inline:!0})});N.displayName="@mantine/code-highlight/InlineCodeHighlight",N.classes=A.default,N.varsResolver=S;let D={type:"code",component:function(){return(0,o.jsxs)(k.Text,{children:["You can highlight code inline:"," ",(0,o.jsx)(N,{code:'<InlineCodeHighlight code="" language="tsx" />',language:"tsx",withBorder:!0}),". Is that not cool?"]})},code:`
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
`};var E=e.i(210200),P=e.i(191788),B=e.i(171481);let V=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M225.6,62.65l-88-48.18a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.18A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.65ZM164,152v47.72l-24,13.14V135.11l72-39.42v22.92l-41.76,22.86A12,12,0,0,0,164,152ZM85.76,141.47,44,118.61V95.69l72,39.42v77.75L92,199.72V152A12,12,0,0,0,85.76,141.47ZM83.14,61.13l39.1,21.4a11.95,11.95,0,0,0,11.52,0l39.1-21.4L199,75.45l-71,38.87L57,75.45ZM128,36.57l19.87,10.88L128,58.33,108.13,47.45ZM44,146l24,13.14v27.47L44,173.44Zm144,40.61V159.11L212,146v27.47Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M32,125.73,80,152v54.84l-43.84-24a8,8,0,0,1-4.16-7ZM176,152v54.84l43.84-24a8,8,0,0,0,4.16-7v-50.1ZM124.16,25l-41,22.46h0L128,72l44.86-24.56L131.84,25A8,8,0,0,0,124.16,25Z",opacity:"0.2"}),P.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M229.89,72.25v0l0,0a15.93,15.93,0,0,0-6.18-6.06L135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a15.93,15.93,0,0,0-6.18,6.06l0,0v0A16,16,0,0,0,24,80.18v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,229.89,72.25ZM120,219.61,88,202.09V152a8,8,0,0,0-4.16-7L40,121v-32l80,43.8Zm8-100.73L48.66,75.44,83.14,56.57l41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87Zm88,2.1-43.84,24a8,8,0,0,0-4.16,7v50.09l-32,17.52V132.74l80-43.8Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.17A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.28l88,48.17a13.92,13.92,0,0,0,13.44,0l88-48.17A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM128,121.16,44.49,75.44,83.14,54.29l42,23a6,6,0,0,0,5.76,0l42-23,38.65,21.15Zm-1-90.91a2,2,0,0,1,1.92,0l31.4,17.2L128,65.16,95.63,47.45ZM38,175.82v-40l36,19.7v41.16L39,177.57A2,2,0,0,1,38,175.82Zm48,27.46V152a6,6,0,0,0-3.12-5.26L38,122.17V85.57l84,46V223ZM134,223V131.56l84-46v36.6l-44.88,24.57A6,6,0,0,0,170,152v51.28Zm83-45.42-35,19.14V155.55l36-19.7v40A2,2,0,0,1,217,177.57Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM128,123.44l-87.67-48L83.14,52l42.94,23.5a4,4,0,0,0,3.84,0L172.86,52l42.81,23.43ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0l34.61,19L128,67.44l-36.53-20ZM36,175.82V132.47l40,21.9v45.72L38.08,179.33A4,4,0,0,1,36,175.82Zm48,28.65V152a4,4,0,0,0-2.08-3.51L36,123.35V82.19l88,48.18v96Zm48,21.89v-96l88-48.18v41.16l-45.92,25.14A4,4,0,0,0,172,152v52.47Zm85.92-47L180,200.09V154.37l40-21.9v43.35A4,4,0,0,1,217.92,179.33Z"}))]]),F=P.forwardRef((e,t)=>P.createElement(B.default,{ref:t,...e,weights:V}));F.displayName="CodesandboxLogoIcon";var _=e.i(417063);let R=`
function greet() {
  return 'Hello, World!';
}
`,$={type:"code",component:function(){return(0,o.jsx)(n.CodeHighlight,{code:R,language:"tsx",radius:"md",controls:[(0,o.jsx)(_.CodeHighlightControl,{component:"a",href:"https://codesandbox.io",target:"_blank",tooltipLabel:"Open on codesandbox",children:(0,o.jsx)(F,{})},"sandbox"),(0,o.jsx)(_.CodeHighlightControl,{tooltipLabel:"Discuss with GPT",children:(0,o.jsx)(E.ChatCircleIcon,{})},"gpt")]})},code:`
import { CodesandboxLogoIcon, ChatCircleIcon } from '@phosphor-icons/react';
import { CodeHighlight, CodeHighlightControl } from '@mantine/code-highlight';

const exampleCode = \`${R}\`;

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
          <CodesandboxLogoIcon />
        </CodeHighlightControl>,
        <CodeHighlightControl tooltipLabel="Discuss with GPT" key="gpt">
          <ChatCircleIcon />
        </CodeHighlightControl>,
      ]}
    />
  );
}
`},z=`
import { Group, Avatar, Text } from '@mantine/core';

interface ItemProps extends React.ComponentProps<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = ({ image, label, description, ...others }: ItemProps) => (
  <div {...others}>
    <Group noWrap>
      <Avatar src={image} />
      <div>
        <Text size="sm">{label}</Text>
        <Text size="xs" opacity={0.65}>
          {description}
        </Text>
      </div>
    </Group>
  </div>
);
`,G={type:"code",component:function(){return(0,o.jsx)(n.CodeHighlight,{code:z,language:"tsx",withLineNumbers:!0})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`...\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" withLineNumbers />;
}
`};var W=(0,t.__exportAll)({copy:()=>H,customControl:()=>$,expand:()=>y,inline:()=>D,lineNumbers:()=>G,tabs:()=>d,tabsGetIcons:()=>C,tabsIcons:()=>p,usage:()=>a});e.s(["CodeHighlightDemos",0,W],508780)},726189,e=>{"use strict";var t=e.i(391398),o=e.i(38856),n=e.i(508780);e.i(603441);var i=e.i(62558);e.i(457450);var a=e.i(418026);let s=(0,i.Layout)(a.MDX_DATA.CodeHighlight);function r(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{Demo:a,InstallScript:s}=i;return a||l("Demo",!0),s||l("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s,{packages:"@mantine/code-highlight"}),"\n",(0,t.jsx)(i.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import code-highlight styles after core package styles\nimport '@mantine/code-highlight/styles.css';\n"})}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"CodeHighlight"})," component is used to display code snippets with syntax highlighting.\nIt provides a flexible adapter system that allows you to use any code highlighting library\nof your choice."]}),"\n",(0,t.jsxs)(i.p,{children:["Example of code highlighting with ",(0,t.jsx)(i.a,{href:"https://shiki.matsu.io/",children:"shiki"}),":"]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.usage}),"\n",(0,t.jsx)(i.h2,{id:"adapters",children:"Adapters"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"@mantine/code-highlight"})," package does not depend on any specific code highlighting library.\nYou can choose one of the default adapters provided by the package or create your own."]}),"\n",(0,t.jsx)(i.p,{children:"Default adapters:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"createShikiAdapter"})," – creates ",(0,t.jsx)(i.a,{href:"https://shiki.matsu.io/",children:"shiki"})," adapter"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"createHighlightJsAdapter"})," – creates ",(0,t.jsx)(i.a,{href:"https://highlightjs.org/",children:"highlight.js"})," adapter"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"plainTextAdapter"})," – does not highlight code, just displays it as plain text (used by default if no adapter is provided)"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"usage-with-shiki",children:"Usage with shiki"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://shiki.matsu.io/",children:"Shiki"})," library provides the most advanced syntax highlighting\nfor TypeScript and CSS/Sass code. It uses textmate grammars to highlight code (same as in VSCode).\nThe Shiki adapter is recommended if you need to highlight advanced TypeScript (generics, jsx nested in props) or CSS code (custom syntaxes, newest features).\nThe Shiki adapter is used for all code highlighting in Mantine documentation."]}),"\n",(0,t.jsxs)(i.p,{children:["To use the shiki adapter, you need to install the ",(0,t.jsx)(i.code,{children:"shiki"})," package:"]}),"\n",(0,t.jsx)(s,{packages:"shiki"}),"\n",(0,t.jsxs)(i.p,{children:["Then wrap your app with ",(0,t.jsx)(i.code,{children:"CodeHighlightAdapterProvider"})," and provide ",(0,t.jsx)(i.code,{children:"createShikiAdapter"})," as the ",(0,t.jsx)(i.code,{children:"adapter"})," prop:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';\n\n// Shiki requires async code to load the highlighter\nasync function loadShiki() {\n  const { createHighlighter } = await import('shiki');\n  const shiki = await createHighlighter({\n    langs: ['tsx', 'scss', 'html', 'bash', 'json'],\n    // You can load supported themes here\n    themes: [],\n  });\n\n  return shiki;\n}\n\nconst shikiAdapter = createShikiAdapter(loadShiki);\n\nfunction App() {\n  return (\n    <MantineProvider>\n      <CodeHighlightAdapterProvider adapter={shikiAdapter}>\n        {/* Your app here */}\n      </CodeHighlightAdapterProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["After that, you can use the ",(0,t.jsx)(i.code,{children:"CodeHighlight"})," component in your application:"]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.usage}),"\n",(0,t.jsx)(i.p,{children:"All further code highlighting examples on this page use the shiki adapter."}),"\n",(0,t.jsx)(i.h2,{id:"usage-with-highlightjs",children:"Usage with highlight.js"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://highlightjs.org/",children:"Highlight.js"})," provides less accurate highlighting compared to shiki,\nbut it has a smaller bundle size and better performance. Choose the highlight.js adapter if you need\nto highlight basic JavaScript, HTML, and CSS code."]}),"\n",(0,t.jsxs)(i.p,{children:["To use the highlight.js adapter, you need to install the ",(0,t.jsx)(i.code,{children:"highlight.js"})," package:"]}),"\n",(0,t.jsx)(s,{packages:"highlight.js"}),"\n",(0,t.jsxs)(i.p,{children:["Then wrap your app with ",(0,t.jsx)(i.code,{children:"CodeHighlightAdapterProvider"})," and provide ",(0,t.jsx)(i.code,{children:"createHighlightJsAdapter"})," as the ",(0,t.jsx)(i.code,{children:"adapter"})," prop:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { CodeHighlightAdapterProvider, createHighlightJsAdapter } from '@mantine/code-highlight';\nimport hljs from 'highlight.js/lib/core';\nimport tsLang from 'highlight.js/lib/languages/typescript';\n\nhljs.registerLanguage('typescript', tsLang);\n\nconst highlightJsAdapter = createHighlightJsAdapter(hljs);\n\nfunction App() {\n  return (\n    <MantineProvider>\n      <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>\n        {/* Your app here */}\n      </CodeHighlightAdapterProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then you need to add styles from one of the highlight.js themes to your application.\nYou can do that by importing a css file from the ",(0,t.jsx)(i.code,{children:"highlight.js"})," package or adding it via\na CDN link to the head of your application:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'<link\n  rel="stylesheet"\n  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"\n/>\n'})}),"\n",(0,t.jsxs)(i.p,{children:["After that, you can use the ",(0,t.jsx)(i.code,{children:"CodeHighlight"})," component in your application."]}),"\n",(0,t.jsx)(i.h2,{id:"create-custom-adapter",children:"Create custom adapter"}),"\n",(0,t.jsx)(i.p,{children:"You can create a custom adapter if you want to enhance the default behavior of code highlighting\nor use a different library."}),"\n",(0,t.jsx)(i.p,{children:"Example of creating a custom shiki adapter with custom themes and logic:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { type CodeHighlightAdapter, stripShikiCodeBlocks } from '@mantine/code-highlight';\n\n// Shiki transformers can be used to highlight diffs and other notations\n// https://shiki.style/packages/transformers\nimport { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers'\n\n// Shiki themes as objects, you can use any VSCode themes\nimport { darkTheme, lightTheme } from './shiki-themes';\n\nasync function loadShiki() {\n  const { createHighlighter } = await import('shiki');\n  const shiki = await createHighlighter({\n    langs: ['tsx', 'scss', 'html', 'bash', 'json'],\n    themes: [],\n  });\n\n  return shiki;\n}\n\n// Pass this adapter to CodeHighlightAdapterProvider component\nexport const customShikiAdapter: CodeHighlightAdapter = {\n  // loadContext is called on the client side to load the shiki highlighter\n  // It is required to be used if your library requires async initialization\n  // The value returned from loadContext is passed to getHighlighter as ctx argument\n  loadContext: loadShiki,\n\n  // ctx is the value returned from loadContext\n  // or null if loadContext is not used or has not resolved yet\n  getHighlighter: (ctx) => {\n    if (!ctx) {\n      return ({ code }) => ({ highlightedCode: code, isHighlighted: false });\n    }\n\n    return ({ code, language, colorScheme }) => ({\n      isHighlighted: true,\n      // stripShikiCodeBlocks removes <pre> and <code> tags from highlighted code\n      highlightedCode: stripShikiCodeBlocks(\n        ctx.codeToHtml(code, {\n          lang: language,\n          theme: (colorScheme === 'light' ? lightTheme : darkTheme) as any,\n          transformers: [transformerNotationDiff(), transformerNotationHighlight()],\n        })\n      ),\n    });\n  },\n};\n"})}),"\n",(0,t.jsx)(i.h2,{id:"copy-button",children:"Copy button"}),"\n",(0,t.jsxs)(i.p,{children:["You can customize copy button labels with ",(0,t.jsx)(i.code,{children:"copyLabel"})," and ",(0,t.jsx)(i.code,{children:"copiedLabel"})," props.\nIn case you need to remove the copy button, set ",(0,t.jsx)(i.code,{children:"withCopyButton={false}"}),"."]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.copy}),"\n",(0,t.jsx)(i.h2,{id:"with-tabs",children:"With tabs"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"CodeHighlightTabs"})," component allows you to organize multiple code blocks into tabs:"]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.tabs}),"\n",(0,t.jsx)(i.h2,{id:"tabs-with-icons",children:"Tabs with icons"}),"\n",(0,t.jsxs)(i.p,{children:["You can use any React node as tab icon. The example below uses TypeScript and CSS\nicons from the ",(0,t.jsx)(i.code,{children:"@mantinex/dev-icons"})," package, but you can use any other icons library or custom\nicons:"]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.tabsIcons}),"\n",(0,t.jsx)(i.h2,{id:"tabs-icons-based-on-file-name",children:"Tabs icons based on file name"}),"\n",(0,t.jsxs)(i.p,{children:["As an alternative to providing icons manually for each tab, you can use the ",(0,t.jsx)(i.code,{children:"getFileIcon"})," prop\nto assign icons based on file name. ",(0,t.jsx)(i.code,{children:"getFileIcon"})," accepts a file name and must return a React node\nor ",(0,t.jsx)(i.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.tabsGetIcons}),"\n",(0,t.jsx)(i.h2,{id:"line-numbers",children:"Line numbers"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"withLineNumbers"})," prop to display line numbers alongside the code:"]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.lineNumbers}),"\n",(0,t.jsx)(i.h2,{id:"expandable-code",children:"Expandable code"}),"\n",(0,t.jsxs)(i.p,{children:["If the code snippet is too long, you can make it expandable with ",(0,t.jsx)(i.code,{children:"withExpandButton"}),"\nand ",(0,t.jsx)(i.code,{children:"defaultExpanded={false}"})," props. To change the label of the expand/collapse control\ntooltip, use ",(0,t.jsx)(i.code,{children:"expandCodeLabel"})," and ",(0,t.jsx)(i.code,{children:"collapseCodeLabel"}),"."]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.expand}),"\n",(0,t.jsx)(i.h2,{id:"custom-controls",children:"Custom controls"}),"\n",(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.code,{children:"controls"})," prop with the ",(0,t.jsx)(i.code,{children:"CodeHighlightControl"})," component to add custom controls\nto the code block:"]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.customControl}),"\n",(0,t.jsx)(i.h2,{id:"inline-code",children:"Inline code"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"InlineCodeHighlight"})," component allows you to highlight inline code snippets:"]}),"\n",(0,t.jsx)(a,{data:n.CodeHighlightDemos.inline})]})}function l(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})})}])},131707,(e,t,o)=>{let n="/x/code-highlight";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(726189)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);