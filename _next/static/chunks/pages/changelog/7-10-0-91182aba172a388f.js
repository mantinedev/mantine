(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4673],{38792:e=>{"use strict";e.exports=function e(o,n){if(o===n)return!0;if(o&&n&&"object"==typeof o&&"object"==typeof n){if(o.constructor!==n.constructor)return!1;if(Array.isArray(o)){if((r=o.length)!=n.length)return!1;for(t=r;0!=t--;)if(!e(o[t],n[t]))return!1;return!0}if(o.constructor===RegExp)return o.source===n.source&&o.flags===n.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===n.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===n.toString();if((r=(a=Object.keys(o)).length)!==Object.keys(n).length)return!1;for(t=r;0!=t--;)if(!Object.prototype.hasOwnProperty.call(n,a[t]))return!1;for(t=r;0!=t--;){var r,t,a,i=a[t];if(!e(o[i],n[i]))return!1}return!0}return o!=o&&n!=n}},51151:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-10-0",function(){return n(26860)}])},26860:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>j});var r=n(31085),t=n(71184),a=n(45757),i=n(51458),s=n(42933),c=n(56761),l=n(75393),d=n(90920),m=n(47177),p=n(4448),u=n(5441),h=n(18675),x=n(20017);let f=(0,h.P)(x.XZ.Changelog7100);function b(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"tree-component",children:"Tree component"}),"\n",(0,r.jsxs)(o.p,{children:["New ",(0,r.jsx)(o.a,{href:"/core/tree",children:"Tree"})," component:"]}),"\n",(0,r.jsx)(n,{data:a.a}),"\n",(0,r.jsx)(o.h2,{id:"formgetinputnode",children:"form.getInputNode"}),"\n",(0,r.jsxs)(o.p,{children:["New ",(0,r.jsx)(o.code,{children:"form.getInputNode(path)"})," handler returns input DOM node for the given field path.\nForm example, it can be used to focus input on form submit if there is an error:"]}),"\n",(0,r.jsx)(n,{data:i.V}),"\n",(0,r.jsx)(o.h2,{id:"container-queries-in-simplegrid",children:"Container queries in SimpleGrid"}),"\n",(0,r.jsxs)(o.p,{children:["You can now use ",(0,r.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,r.jsx)(o.a,{href:"/core/simple-grid",children:"SimpleGrid"})," component. With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,r.jsx)(o.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,r.jsx)(n,{data:s.k}),"\n",(0,r.jsx)(o.h2,{id:"checkbox-and-radio-indicators",children:"Checkbox and Radio indicators"}),"\n",(0,r.jsxs)(o.p,{children:["New ",(0,r.jsx)(o.a,{href:"/core/checkbox/#checkboxindicator",children:"Checkbox.Indicator"})," and ",(0,r.jsx)(o.a,{href:"/core/radio/#radioindicator",children:"Radio.Indicator"}),"\ncomponents look exactly the same as ",(0,r.jsx)(o.code,{children:"Checkbox"})," and ",(0,r.jsx)(o.code,{children:"Radio"})," components, but they do not\nhave any semantic meaning, they are just visual representations of checkbox and radio states."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Checkbox.Indicator"})," component:"]}),"\n",(0,r.jsx)(n,{data:c.q}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Radio.Indicator"})," component:"]}),"\n",(0,r.jsx)(n,{data:l.q}),"\n",(0,r.jsx)(o.h2,{id:"checkbox-and-radio-cards",children:"Checkbox and Radio cards"}),"\n",(0,r.jsxs)(o.p,{children:["New ",(0,r.jsx)(o.a,{href:"/core/checkbox/#checkboxcard-component",children:"Checkbox.Card"})," and ",(0,r.jsx)(o.a,{href:"/core/radio/#radiocard-component",children:"Radio.Card"}),"\ncomponents can be used as replacements for ",(0,r.jsx)(o.code,{children:"Checkbox"})," and ",(0,r.jsx)(o.code,{children:"Radio"})," to build custom cards/buttons/etc.\nthat work as checkboxes and radios. Components are accessible by default and support the same\nkeyboard interactions as ",(0,r.jsx)(o.code,{children:'input[type="checkbox"]'})," and ",(0,r.jsx)(o.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Checkbox.Card"})," component:"]}),"\n",(0,r.jsx)(n,{data:d.N}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Checkbox.Card"})," component with ",(0,r.jsx)(o.code,{children:"Checkbox.Group"}),":"]}),"\n",(0,r.jsx)(n,{data:m.k}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Radio.Card"})," component:"]}),"\n",(0,r.jsx)(n,{data:p.N}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Radio.Card"})," component with ",(0,r.jsx)(o.code,{children:"Radio.Group"}),":"]}),"\n",(0,r.jsx)(n,{data:u.k}),"\n",(0,r.jsx)(o.h2,{id:"bd-style-prop",children:"bd style prop"}),"\n",(0,r.jsxs)(o.p,{children:["New ",(0,r.jsx)(o.a,{href:"/styles/style-props/",children:"bd style prop"})," can be used to set ",(0,r.jsx)(o.code,{children:"border"})," CSS property.\nIt is available in all components that support style props."]}),"\n",(0,r.jsx)(o.p,{children:"Border width value is automatically converted to rem. For border color you can reference\ntheme colors similar to other style props:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return <Box bd=\"1px solid red.5\" />;\n}\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,{...e,children:(0,r.jsx)(b,{...e})})}},74015:(e,o,n)=>{"use strict";function r(e,o,n){"object"==typeof n.value&&(n.value=t(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==o?e[o]=n.value:Object.defineProperty(e,o,n)}function t(e){if("object"!=typeof e)return e;var o,n,a,i=0,s=Object.prototype.toString.call(e);if("[object Object]"===s?a=Object.create(e.__proto__||null):"[object Array]"===s?a=Array(e.length):"[object Set]"===s?(a=new Set,e.forEach(function(e){a.add(t(e))})):"[object Map]"===s?(a=new Map,e.forEach(function(e,o){a.set(t(o),t(e))})):"[object Date]"===s?a=new Date(+e):"[object RegExp]"===s?a=new RegExp(e.source,e.flags):"[object DataView]"===s?a=new e.constructor(t(e.buffer)):"[object ArrayBuffer]"===s?a=e.slice(0):"Array]"===s.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r(a,n[i],Object.getOwnPropertyDescriptor(e,n[i]));for(i=0,n=Object.getOwnPropertyNames(e);i<n.length;i++)Object.hasOwnProperty.call(a,o=n[i])&&a[o]===e[o]||r(a,o,Object.getOwnPropertyDescriptor(e,o))}return a||e}n.d(o,{Q:()=>t})},90920:(e,o,n)=>{"use strict";n.d(o,{N:()=>l});var r=n(31085),t=n(14041),a=n(87858),i=n(56051),s=n(93065),c=n(58345);let l={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,t.useState)(!1);return(0,r.jsx)(a.S.Card,{className:c.A.root,radius:"md",checked:e,onClick:()=>o(e=>!e),children:(0,r.jsxs)(i.Y,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(a.S.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.E,{className:c.A.label,children:"@mantine/core"}),(0,r.jsx)(s.E,{className:c.A.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},58345:(e,o,n)=>{"use strict";n.d(o,{A:()=>r});var r={root:"m_2cb8989f",label:"m_69ff5ed7",description:"m_cf98ad9f"}},47177:(e,o,n)=>{"use strict";n.d(o,{k:()=>m});var r=n(31085),t=n(14041),a=n(87858),i=n(56051),s=n(93065),c=n(75390),l=n(58345);let d=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],m={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,t.useState)([]),n=d.map(e=>(0,r.jsx)(a.S.Card,{className:l.A.root,radius:"md",value:e.name,children:(0,r.jsxs)(i.Y,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(a.S.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.E,{className:l.A.label,children:e.name}),(0,r.jsx)(s.E,{className:l.A.description,children:e.description})]})]})},e.name));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.S.Group,{value:e,onChange:o,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,r.jsx)(c.B,{pt:"md",gap:"xs",children:n})}),(0,r.jsxs)(s.E,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},56761:(e,o,n)=>{"use strict";n.d(o,{q:()=>i});var r=n(31085),t=n(56051),a=n(87858);let i={type:"code",component:function(){return(0,r.jsxs)(t.Y,{children:[(0,r.jsx)(a.S.Indicator,{}),(0,r.jsx)(a.S.Indicator,{checked:!0}),(0,r.jsx)(a.S.Indicator,{indeterminate:!0}),(0,r.jsx)(a.S.Indicator,{disabled:!0}),(0,r.jsx)(a.S.Indicator,{disabled:!0,checked:!0}),(0,r.jsx)(a.S.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
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
`}},42933:(e,o,n)=>{"use strict";n.d(o,{k:()=>i});var r=n(31085),t=n(96172),a=n(41624);let i={type:"code",component:function(){return(0,r.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)(t.r,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:a.A})})},code:`
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
`}},41624:(e,o,n)=>{"use strict";n.d(o,{A:()=>l});var r=n(31085),t=n(54357),a=n(34056),i=n(93065),s={item:"m_a4dc100e",label:"m_f6c78959"};function c({className:e,children:o,...n}){return(0,r.jsx)(a.a,{className:(0,t.A)(s.item,e),...n,children:(0,r.jsx)(i.E,{className:s.label,children:o})})}let l=[,,,,,].fill(0).map((e,o)=>(0,r.jsx)(c,{children:o+1},o))},45757:(e,o,n)=>{"use strict";n.d(o,{a:()=>f});var r=n(31085),t=n(73366),a=(0,t.A)("outline","folder-open","IconFolderOpen",[["path",{d:"M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2",key:"svg-0"}]]),i=(0,t.A)("outline","folder","IconFolder",[["path",{d:"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",key:"svg-0"}]]),s=n(56051),c=n(70781),l=n(96370),d=n(44728),m=n(54948),p=n(41507),u={root:"m_78f70933",label:"m_a58f00c3"};function h({name:e,isFolder:o,expanded:n}){return e.endsWith("package.json")?(0,r.jsx)(l.X,{size:14}):e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith("tsconfig.json")?(0,r.jsx)(d.j,{size:14}):e.endsWith(".css")?(0,r.jsx)(m.R,{size:14}):o?n?(0,r.jsx)(a,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):(0,r.jsx)(i,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):null}function x({node:e,expanded:o,hasChildren:n,elementProps:t}){return(0,r.jsxs)(s.Y,{gap:5,...t,children:[(0,r.jsx)(h,{name:e.value,isFolder:n,expanded:o}),(0,r.jsx)("span",{children:e.label})]})}let f={type:"code",component:function(){return(0,r.jsx)(c.P,{classNames:u,selectOnClick:!0,clearSelectionOnOutsideClick:!0,data:p.p,renderNode:e=>(0,r.jsx)(x,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`},{fileName:"data.ts",language:"tsx",code:p.k}]}},51458:(e,o,n)=>{"use strict";n.d(o,{V:()=>d});var r=n(31085),t=n(90275),a=n(56051),i=n(52022),s=n(23719),c=n(84097),l=n(28887);let d={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",name:"register-form",initialValues:{name:"",email:""},validate:{name:(0,c.h)("Name is required"),email:(0,l.x)("Invalid email")}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e),o=>{let n=Object.keys(o)[0];e.getInputNode(n)?.focus()}),children:[(0,r.jsx)(t.k,{withAsterisk:!0,label:"Your name",placeholder:"Your name",...e.getInputProps("name")},e.key("name")),(0,r.jsx)(t.k,{withAsterisk:!0,label:"Your email",placeholder:"your@email.com",mt:"md",...e.getInputProps("email")},e.key("email")),(0,r.jsx)(a.Y,{justify:"flex-end",mt:"md",children:(0,r.jsx)(i.$,{type:"submit",children:"Submit"})})]})},code:`
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
`,maxWidth:340,centered:!0}},28887:(e,o,n)=>{"use strict";n.d(o,{x:()=>t});var r=n(27351);function t(e){return(0,r.c)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},84097:(e,o,n)=>{"use strict";function r(e){let o=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:o:Array.isArray(e)?e.length>0?null:o:null==e||!1===e?o:null}n.d(o,{h:()=>r})},27351:(e,o,n)=>{"use strict";function r(e,o){let n=o||!0;return o=>"string"!=typeof o?n:e.test(o)?null:n}n.d(o,{c:()=>r})}},e=>{var o=o=>e(e.s=o);e.O(0,[18675,23719,82383,89792,90636,46593,38792],()=>o(51151)),_N_E=e.O()}]);