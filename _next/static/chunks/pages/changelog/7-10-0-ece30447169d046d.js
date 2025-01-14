(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55539],{69378:function(e){"use strict";e.exports=function e(n,o){if(n===o)return!0;if(n&&o&&"object"==typeof n&&"object"==typeof o){if(n.constructor!==o.constructor)return!1;if(Array.isArray(n)){if((t=n.length)!=o.length)return!1;for(r=t;0!=r--;)if(!e(n[r],o[r]))return!1;return!0}if(n.constructor===RegExp)return n.source===o.source&&n.flags===o.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===o.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===o.toString();if((t=(i=Object.keys(n)).length)!==Object.keys(o).length)return!1;for(r=t;0!=r--;)if(!Object.prototype.hasOwnProperty.call(o,i[r]))return!1;for(r=t;0!=r--;){var t,r,i,a=i[r];if(!e(n[a],o[a]))return!1}return!0}return n!=n&&o!=o}},74107:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-10-0",function(){return o(68806)}])},68806:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return j}});var t=o(52322),r=o(45392),i=o(29466),a=o(29397),c=o(66272),s=o(81402),l=o(45992),d=o(78502),m=o(81717),u=o(9380),p=o(70333),h=o(54078),f=o(15019);let x=(0,h.A)(f.us.Changelog7100);function b(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"tree-component",children:"Tree component"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.a,{href:"/core/tree",children:"Tree"})," component:"]}),"\n",(0,t.jsx)(o,{data:i.Q}),"\n",(0,t.jsx)(n.h2,{id:"formgetinputnode",children:"form.getInputNode"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.code,{children:"form.getInputNode(path)"})," handler returns input DOM node for the given field path.\nForm example, it can be used to focus input on form submit if there is an error:"]}),"\n",(0,t.jsx)(o,{data:a.z}),"\n",(0,t.jsx)(n.h2,{id:"container-queries-in-simplegrid",children:"Container queries in SimpleGrid"}),"\n",(0,t.jsxs)(n.p,{children:["You can now use ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,t.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," component. With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,t.jsx)(n.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,t.jsx)(o,{data:c.n}),"\n",(0,t.jsx)(n.h2,{id:"checkbox-and-radio-indicators",children:"Checkbox and Radio indicators"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.a,{href:"/core/checkbox/#checkboxindicator",children:"Checkbox.Indicator"})," and ",(0,t.jsx)(n.a,{href:"/core/radio/#radioindicator",children:"Radio.Indicator"}),"\ncomponents look exactly the same as ",(0,t.jsx)(n.code,{children:"Checkbox"})," and ",(0,t.jsx)(n.code,{children:"Radio"})," components, but they do not\nhave any semantic meaning, they are just visual representations of checkbox and radio states."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Checkbox.Indicator"})," component:"]}),"\n",(0,t.jsx)(o,{data:s._}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Radio.Indicator"})," component:"]}),"\n",(0,t.jsx)(o,{data:l._}),"\n",(0,t.jsx)(n.h2,{id:"checkbox-and-radio-cards",children:"Checkbox and Radio cards"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.a,{href:"/core/checkbox/#checkboxcard-component",children:"Checkbox.Card"})," and ",(0,t.jsx)(n.a,{href:"/core/radio/#radiocard-component",children:"Radio.Card"}),"\ncomponents can be used as replacements for ",(0,t.jsx)(n.code,{children:"Checkbox"})," and ",(0,t.jsx)(n.code,{children:"Radio"})," to build custom cards/buttons/etc.\nthat work as checkboxes and radios. Components are accessible by default and support the same\nkeyboard interactions as ",(0,t.jsx)(n.code,{children:'input[type="checkbox"]'})," and ",(0,t.jsx)(n.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Checkbox.Card"})," component:"]}),"\n",(0,t.jsx)(o,{data:d.I}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Checkbox.Card"})," component with ",(0,t.jsx)(n.code,{children:"Checkbox.Group"}),":"]}),"\n",(0,t.jsx)(o,{data:m.x}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Radio.Card"})," component:"]}),"\n",(0,t.jsx)(o,{data:u.I}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Radio.Card"})," component with ",(0,t.jsx)(n.code,{children:"Radio.Group"}),":"]}),"\n",(0,t.jsx)(o,{data:p.x}),"\n",(0,t.jsx)(n.h2,{id:"bd-style-prop",children:"bd style prop"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.a,{href:"/styles/style-props/",children:"bd style prop"})," can be used to set ",(0,t.jsx)(n.code,{children:"border"})," CSS property.\nIt is available in all components that support style props."]}),"\n",(0,t.jsx)(n.p,{children:"Border width value is automatically converted to rem. For border color you can reference\ntheme colors similar to other style props:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return <Box bd=\"1px solid red.5\" />;\n}\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(x,{...e,children:(0,t.jsx)(b,{...e})})}},15463:function(e,n,o){"use strict";function t(e,n,o){"object"==typeof o.value&&(o.value=r(o.value)),o.enumerable&&!o.get&&!o.set&&o.configurable&&o.writable&&"__proto__"!==n?e[n]=o.value:Object.defineProperty(e,n,o)}function r(e){if("object"!=typeof e)return e;var n,o,i,a=0,c=Object.prototype.toString.call(e);if("[object Object]"===c?i=Object.create(e.__proto__||null):"[object Array]"===c?i=Array(e.length):"[object Set]"===c?(i=new Set,e.forEach(function(e){i.add(r(e))})):"[object Map]"===c?(i=new Map,e.forEach(function(e,n){i.set(r(n),r(e))})):"[object Date]"===c?i=new Date(+e):"[object RegExp]"===c?i=new RegExp(e.source,e.flags):"[object DataView]"===c?i=new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===c?i=e.slice(0):"Array]"===c.slice(-6)&&(i=new e.constructor(e)),i){for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t(i,o[a],Object.getOwnPropertyDescriptor(e,o[a]));for(a=0,o=Object.getOwnPropertyNames(e);a<o.length;a++)Object.hasOwnProperty.call(i,n=o[a])&&i[n]===e[n]||t(i,n,Object.getOwnPropertyDescriptor(e,n))}return i||e}o.d(n,{Y:function(){return r}})},78502:function(e,n,o){"use strict";o.d(n,{I:function(){return l}});var t=o(52322),r=o(2784),i=o(95047),a=o(93010),c=o(8582),s=o(16767);let l={type:"code",centered:!0,maxWidth:320,component:function(){let[e,n]=(0,r.useState)(!1);return(0,t.jsx)(i.X.Card,{className:s.Z.root,radius:"md",checked:e,onClick:()=>n(e=>!e),children:(0,t.jsxs)(a.Z,{wrap:"nowrap",align:"flex-start",children:[(0,t.jsx)(i.X.Indicator,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)(c.x,{className:s.Z.label,children:"@mantine/core"}),(0,t.jsx)(c.x,{className:s.Z.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]}},16767:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t={root:"m_2cb8989f",label:"m_69ff5ed7",description:"m_cf98ad9f"}},81717:function(e,n,o){"use strict";o.d(n,{x:function(){return m}});var t=o(52322),r=o(2784),i=o(95047),a=o(93010),c=o(8582),s=o(65438),l=o(16767);let d=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],m={type:"code",centered:!0,maxWidth:320,component:function(){let[e,n]=(0,r.useState)([]),o=d.map(e=>(0,t.jsx)(i.X.Card,{className:l.Z.root,radius:"md",value:e.name,children:(0,t.jsxs)(a.Z,{wrap:"nowrap",align:"flex-start",children:[(0,t.jsx)(i.X.Indicator,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)(c.x,{className:l.Z.label,children:e.name}),(0,t.jsx)(c.x,{className:l.Z.description,children:e.description})]})]})},e.name));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.X.Group,{value:e,onChange:n,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,t.jsx)(s.K,{pt:"md",gap:"xs",children:o})}),(0,t.jsxs)(c.x,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '\u2013'}
      </Text>
    </>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]}},81402:function(e,n,o){"use strict";o.d(n,{_:function(){return a}});var t=o(52322),r=o(93010),i=o(95047);let a={type:"code",component:function(){return(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(i.X.Indicator,{}),(0,t.jsx)(i.X.Indicator,{checked:!0}),(0,t.jsx)(i.X.Indicator,{indeterminate:!0}),(0,t.jsx)(i.X.Indicator,{disabled:!0}),(0,t.jsx)(i.X.Indicator,{disabled:!0,checked:!0}),(0,t.jsx)(i.X.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
`}},66272:function(e,n,o){"use strict";o.d(n,{n:function(){return a}});var t=o(52322),r=o(26802),i=o(47564);let a={type:"code",component:function(){return(0,t.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,t.jsx)(r.M,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:i.a})})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
`}},47564:function(e,n,o){"use strict";o.d(n,{a:function(){return s}});var t=o(52322),r=o(40489),i=o(28559),a=o(8582);function c({className:e,children:n,...o}){return(0,t.jsx)(i.x,{className:(0,r.Z)("m_a4dc100e",e),...o,children:(0,t.jsx)(a.x,{className:"m_f6c78959",children:n})})}let s=[,,,,,].fill(0).map((e,n)=>(0,t.jsx)(c,{children:n+1},n))},29466:function(e,n,o){"use strict";o.d(n,{Q:function(){return x}});var t=o(52322),r=o(73681),i=(0,r.Z)("outline","folder-open","IconFolderOpen",[["path",{d:"M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2",key:"svg-0"}]]),a=(0,r.Z)("outline","folder","IconFolder",[["path",{d:"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",key:"svg-0"}]]),c=o(93010),s=o(15601),l=o(82106),d=o(55709),m=o(60934),u=o(76947),p={root:"m_78f70933",label:"m_a58f00c3"};function h({name:e,isFolder:n,expanded:o}){return e.endsWith("package.json")?(0,t.jsx)(l._,{size:14}):e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith("tsconfig.json")?(0,t.jsx)(d.s,{size:14}):e.endsWith(".css")?(0,t.jsx)(m.L,{size:14}):n?o?(0,t.jsx)(i,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):(0,t.jsx)(a,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):null}function f({node:e,expanded:n,hasChildren:o,elementProps:r}){return(0,t.jsxs)(c.Z,{gap:5,...r,children:[(0,t.jsx)(h,{name:e.value,isFolder:o,expanded:n}),(0,t.jsx)("span",{children:e.label})]})}let x={type:"code",component:function(){return(0,t.jsx)(s.m,{classNames:p,selectOnClick:!0,clearSelectionOnOutsideClick:!0,data:u.a,renderNode:e=>(0,t.jsx)(f,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { IconFolder, IconFolderOpen } from '@tabler/icons-react';
import { Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { CssIcon, NpmIcon, TypeScriptCircleIcon } from '@mantinex/dev-icons';
import { data, dataCode } from './data';
import classes from './Demo.module.css';

interface FileIconProps {
  name: string;
  isFolder: boolean;
  expanded: boolean;
}

function FileIcon({ name, isFolder, expanded }: FileIconProps) {
  if (name.endsWith('package.json')) {
    return <NpmIcon size={14} />;
  }

  if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('tsconfig.json')) {
    return <TypeScriptCircleIcon size={14} />;
  }

  if (name.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  if (isFolder) {
    return expanded ? (
      <IconFolderOpen color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
    ) : (
      <IconFolder color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
    );
  }

  return null;
}

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      <FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} />
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  return (
    <Tree
      classNames={classes}
      selectOnClick
      clearSelectionOnOutsideClick
      data={data}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  font-family: var(--mantine-font-family-monospace);
  font-size: 13px;
}

.label {
  padding-block: 3px;

  &[data-hovered] {
    @mixin where-light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin where-dark {
      background-color: var(--mantine-color-dark-6);
      color: var(--mantine-color-white);
    }
  }

  &[data-selected] {
    font-weight: 700;

    @mixin light {
      background-color: var(--mantine-color-blue-0);
      color: var(--mantine-color-black);
    }

    @mixin dark {
      background-color: alpha(var(--mantine-color-blue-8), 0.35);
      color: var(--mantine-color-blue-0);
    }
  }
}`},{fileName:"data.ts",language:"tsx",code:u.o}]}},29397:function(e,n,o){"use strict";o.d(n,{z:function(){return d}});var t=o(52322),r=o(74770),i=o(93010),a=o(39629),c=o(43092),s=o(3095),l=o(51057);let d={type:"code",component:function(){let e=(0,c.c)({mode:"uncontrolled",name:"register-form",initialValues:{name:"",email:""},validate:{name:(0,s.U)("Name is required"),email:(0,l.J)("Invalid email")}});return(0,t.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e),n=>{let o=Object.keys(n)[0];e.getInputNode(o)?.focus()}),children:[(0,t.jsx)(r.o,{withAsterisk:!0,label:"Your name",placeholder:"Your name",...e.getInputProps("name")},e.key("name")),(0,t.jsx)(r.o,{withAsterisk:!0,label:"Your email",placeholder:"your@email.com",mt:"md",...e.getInputProps("email")},e.key("email")),(0,t.jsx)(i.Z,{justify:"flex-end",mt:"md",children:(0,t.jsx)(a.z,{type:"submit",children:"Submit"})})]})},code:`
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    name: 'register-form',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0}},26802:function(e,n,o){"use strict";o.d(n,{M:function(){return k}});var t=o(52322);o(2784);var r=o(38483),i=o(46690),a=o(12063),c=o(28559),s=o(82027),l=o(98446),d=o(65744),m=o(40580),u=o(91482),p=o(54541),h=o(32100),f=o(68755),x=o(9437);function b({spacing:e,verticalSpacing:n,cols:o,selector:r}){let i=(0,f.rZ)(),a=void 0===n?e:n,c=(0,m.L)({"--sg-spacing-x":(0,u.bG)((0,h.v)(e)),"--sg-spacing-y":(0,u.bG)((0,h.v)(a)),"--sg-cols":h.v(o)?.toString()}),s=(0,l.X)(i.breakpoints).reduce((n,t)=>(n[t]||(n[t]={}),"object"==typeof e&&void 0!==e[t]&&(n[t]["--sg-spacing-x"]=(0,u.bG)(e[t])),"object"==typeof a&&void 0!==a[t]&&(n[t]["--sg-spacing-y"]=(0,u.bG)(a[t])),"object"==typeof o&&void 0!==o[t]&&(n[t]["--sg-cols"]=o[t]),n),{}),d=(0,p.I)((0,l.X)(s),i.breakpoints).filter(e=>(0,l.X)(s[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:s[e.value]}));return(0,t.jsx)(x.f,{styles:c,media:d,selector:r})}function j(e){return"object"==typeof e&&null!==e?(0,l.X)(e):[]}function g({spacing:e,verticalSpacing:n,cols:o,selector:r}){let i=void 0===n?e:n,a=(0,m.L)({"--sg-spacing-x":(0,u.bG)((0,h.v)(e)),"--sg-spacing-y":(0,u.bG)((0,h.v)(i)),"--sg-cols":h.v(o)?.toString()}),c=function({spacing:e,verticalSpacing:n,cols:o}){return Array.from(new Set([...j(e),...j(n),...j(o)])).sort((e,n)=>(0,d.px)(e)-(0,d.px)(n))}({spacing:e,verticalSpacing:n,cols:o}),s=c.reduce((n,t)=>(n[t]||(n[t]={}),"object"==typeof e&&void 0!==e[t]&&(n[t]["--sg-spacing-x"]=(0,u.bG)(e[t])),"object"==typeof i&&void 0!==i[t]&&(n[t]["--sg-spacing-y"]=(0,u.bG)(i[t])),"object"==typeof o&&void 0!==o[t]&&(n[t]["--sg-cols"]=o[t]),n),{}),l=c.map(e=>({query:`simple-grid (min-width: ${e})`,styles:s[e]}));return(0,t.jsx)(x.f,{styles:a,container:l,selector:r})}var v={container:"m_925c2d2c",root:"m_2415a157"};let y={cols:1,spacing:"md",type:"media"},k=(0,s.d5)((e,n)=>{let o=(0,r.w)("SimpleGrid",y,e),{classNames:s,className:l,style:d,styles:m,unstyled:u,vars:p,cols:h,verticalSpacing:f,spacing:x,type:j,...k}=o,C=(0,i.y)({name:"SimpleGrid",classes:v,props:o,className:l,style:d,classNames:s,styles:m,unstyled:u,vars:p}),w=(0,a.m)();return"container"===j?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{...o,selector:`.${w}`}),(0,t.jsx)("div",{...C("container"),children:(0,t.jsx)(c.x,{ref:n,...C("root",{className:w}),...k})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{...o,selector:`.${w}`}),(0,t.jsx)(c.x,{ref:n,...C("root",{className:w}),...k})]})});k.classes=v,k.displayName="@mantine/core/SimpleGrid"},32100:function(e,n,o){"use strict";function t(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}o.d(n,{v:function(){return t}})},99070:function(e,n,o){"use strict";o.d(n,{o:function(){return r}});var t=o(65744);function r(e,n){return e in n?(0,t.px)(n[e]):(0,t.px)(e)}},54541:function(e,n,o){"use strict";o.d(n,{I:function(){return r}});var t=o(99070);function r(e,n){let o=e.map(e=>({value:e,px:(0,t.o)(e,n)}));return o.sort((e,n)=>e.px-n.px),o}},51057:function(e,n,o){"use strict";o.d(n,{J:function(){return r}});var t=o(1328);function r(e){return(0,t.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},3095:function(e,n,o){"use strict";function t(e){let n=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:n:Array.isArray(e)?e.length>0?null:n:null==e||!1===e?n:null}o.d(n,{U:function(){return t}})},1328:function(e,n,o){"use strict";function t(e,n){let o=n||!0;return n=>"string"!=typeof n?o:e.test(n)?null:o}o.d(n,{w:function(){return t}})}},function(e){e.O(0,[61177,66748,61639,43092,59133,7763,92888,49774,40179],function(){return e(e.s=74107)}),_N_E=e.O()}]);