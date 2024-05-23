(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55539],{69378:function(e){"use strict";e.exports=function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){if(n.constructor!==t.constructor)return!1;if(Array.isArray(n)){if((o=n.length)!=t.length)return!1;for(r=o;0!=r--;)if(!e(n[r],t[r]))return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if((o=(i=Object.keys(n)).length)!==Object.keys(t).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=o;0!=r--;){var o,r,i,a=i[r];if(!e(n[a],t[a]))return!1}return!0}return n!=n&&t!=t}},74107:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-10-0",function(){return t(68806)}])},68806:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var o=t(52322),r=t(45392),i=t(29466),a=t(29397),c=t(66272),s=t(81402),d=t(45992),l=t(78502),u=t(81717),m=t(9380),p=t(70333),h=t(25071),f=t(15019);let x=(0,h.A)(f.us.Changelog7100);function b(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"tree-component",children:"Tree component"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/tree",children:"Tree"})," component:"]}),"\n",(0,o.jsx)(t,{data:i.Q}),"\n",(0,o.jsx)(n.h2,{id:"formgetinputnode",children:"form.getInputNode"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.code,{children:"form.getInputNode(path)"})," handler returns input DOM node for the given field path.\nForm example, it can be used to focus input on form submit if there is an error:"]}),"\n",(0,o.jsx)(t,{data:a.z}),"\n",(0,o.jsx)(n.h2,{id:"container-queries-in-simplegrid",children:"Container queries in SimpleGrid"}),"\n",(0,o.jsxs)(n.p,{children:["You can now use ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,o.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," component. With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,o.jsx)(n.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,o.jsx)(t,{data:c.n}),"\n",(0,o.jsx)(n.h2,{id:"checkbox-and-radio-indicators",children:"Checkbox and Radio indicators"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/checkbox/#checkboxindicator",children:"Checkbox.Indicator"})," and ",(0,o.jsx)(n.a,{href:"/core/radio/#radioindicator",children:"Radio.Indicator"}),"\ncomponents look exactly the same as ",(0,o.jsx)(n.code,{children:"Checkbox"})," and ",(0,o.jsx)(n.code,{children:"Radio"})," components, but they do not\nhave any semantic meaning, they are just visual representations of checkbox and radio states."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Checkbox.Indicator"})," component:"]}),"\n",(0,o.jsx)(t,{data:s._}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Radio.Indicator"})," component:"]}),"\n",(0,o.jsx)(t,{data:d._}),"\n",(0,o.jsx)(n.h2,{id:"checkbox-and-radio-cards",children:"Checkbox and Radio cards"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/checkbox/#checkboxcard-component",children:"Checkbox.Card"})," and ",(0,o.jsx)(n.a,{href:"/core/radio/#radiocard-component",children:"Radio.Card"}),"\ncomponents can be used as replacements for ",(0,o.jsx)(n.code,{children:"Checkbox"})," and ",(0,o.jsx)(n.code,{children:"Radio"})," to build custom cards/buttons/etc.\nthat work as checkboxes and radios. Components are accessible by default and support the same\nkeyboard interactions as ",(0,o.jsx)(n.code,{children:'input[type="checkbox"]'})," and ",(0,o.jsx)(n.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Checkbox.Card"})," component:"]}),"\n",(0,o.jsx)(t,{data:l.I}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Checkbox.Card"})," component with ",(0,o.jsx)(n.code,{children:"Checkbox.Group"}),":"]}),"\n",(0,o.jsx)(t,{data:u.x}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Radio.Card"})," component:"]}),"\n",(0,o.jsx)(t,{data:m.I}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Radio.Card"})," component with ",(0,o.jsx)(n.code,{children:"Radio.Group"}),":"]}),"\n",(0,o.jsx)(t,{data:p.x}),"\n",(0,o.jsx)(n.h2,{id:"bd-style-prop",children:"bd style prop"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/styles/style-props/",children:"bd style prop"})," can be used to set ",(0,o.jsx)(n.code,{children:"border"})," CSS property.\nIt is available in all components that support style props."]}),"\n",(0,o.jsx)(n.p,{children:"Border width value is automatically converted to rem. For border color you can reference\ntheme colors similar to other style props:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return <Box bd=\"1px solid red.5\" />;\n}\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...e,children:(0,o.jsx)(b,{...e})})}},15463:function(e,n,t){"use strict";function o(e,n,t){"object"==typeof t.value&&(t.value=r(t.value)),t.enumerable&&!t.get&&!t.set&&t.configurable&&t.writable&&"__proto__"!==n?e[n]=t.value:Object.defineProperty(e,n,t)}function r(e){if("object"!=typeof e)return e;var n,t,i,a=0,c=Object.prototype.toString.call(e);if("[object Object]"===c?i=Object.create(e.__proto__||null):"[object Array]"===c?i=Array(e.length):"[object Set]"===c?(i=new Set,e.forEach(function(e){i.add(r(e))})):"[object Map]"===c?(i=new Map,e.forEach(function(e,n){i.set(r(n),r(e))})):"[object Date]"===c?i=new Date(+e):"[object RegExp]"===c?i=new RegExp(e.source,e.flags):"[object DataView]"===c?i=new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===c?i=e.slice(0):"Array]"===c.slice(-6)&&(i=new e.constructor(e)),i){for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)o(i,t[a],Object.getOwnPropertyDescriptor(e,t[a]));for(a=0,t=Object.getOwnPropertyNames(e);a<t.length;a++)Object.hasOwnProperty.call(i,n=t[a])&&i[n]===e[n]||o(i,n,Object.getOwnPropertyDescriptor(e,n))}return i||e}t.d(n,{Y:function(){return r}})},78502:function(e,n,t){"use strict";t.d(n,{I:function(){return d}});var o=t(52322),r=t(2784),i=t(95047),a=t(93010),c=t(8582),s=t(16767);let d={type:"code",centered:!0,maxWidth:320,component:function(){let[e,n]=(0,r.useState)(!1);return(0,o.jsx)(i.X.Card,{className:s.Z.root,radius:"md",checked:e,onClick:()=>n(e=>!e),children:(0,o.jsxs)(a.Z,{wrap:"nowrap",align:"flex-start",children:[(0,o.jsx)(i.X.Indicator,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)(c.x,{className:s.Z.label,children:"@mantine/core"}),(0,o.jsx)(c.x,{className:s.Z.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},16767:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o={root:"m_2cb8989f",label:"m_69ff5ed7",description:"m_cf98ad9f"}},81717:function(e,n,t){"use strict";t.d(n,{x:function(){return u}});var o=t(52322),r=t(2784),i=t(95047),a=t(93010),c=t(8582),s=t(65438),d=t(16767);let l=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],u={type:"code",centered:!0,maxWidth:320,component:function(){let[e,n]=(0,r.useState)([]),t=l.map(e=>(0,o.jsx)(i.X.Card,{className:d.Z.root,radius:"md",value:e.name,children:(0,o.jsxs)(a.Z,{wrap:"nowrap",align:"flex-start",children:[(0,o.jsx)(i.X.Indicator,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)(c.x,{className:d.Z.label,children:e.name}),(0,o.jsx)(c.x,{className:d.Z.description,children:e.description})]})]})},e.name));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.X.Group,{value:e,onChange:n,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,o.jsx)(s.K,{pt:"md",gap:"xs",children:t})}),(0,o.jsxs)(c.x,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},81402:function(e,n,t){"use strict";t.d(n,{_:function(){return a}});var o=t(52322),r=t(93010),i=t(95047);let a={type:"code",component:function(){return(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(i.X.Indicator,{}),(0,o.jsx)(i.X.Indicator,{checked:!0}),(0,o.jsx)(i.X.Indicator,{indeterminate:!0}),(0,o.jsx)(i.X.Indicator,{disabled:!0}),(0,o.jsx)(i.X.Indicator,{disabled:!0,checked:!0}),(0,o.jsx)(i.X.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
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
`}},66272:function(e,n,t){"use strict";t.d(n,{n:function(){return a}});var o=t(52322),r=t(26802),i=t(47564);let a={type:"code",component:function(){return(0,o.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsx)(r.M,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:i.a})})},code:`
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
`}},47564:function(e,n,t){"use strict";t.d(n,{a:function(){return s}});var o=t(52322),r=t(40489),i=t(28559),a=t(8582);function c({className:e,children:n,...t}){return(0,o.jsx)(i.x,{className:(0,r.Z)("m_a4dc100e",e),...t,children:(0,o.jsx)(a.x,{className:"m_f6c78959",children:n})})}let s=[,,,,,].fill(0).map((e,n)=>(0,o.jsx)(c,{children:n+1},n))},29397:function(e,n,t){"use strict";t.d(n,{z:function(){return l}});var o=t(52322),r=t(74770),i=t(93010),a=t(17115),c=t(405),s=t(3095),d=t(51057);let l={type:"code",component:function(){let e=(0,c.c)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:(0,s.U)("Name is required"),email:(0,d.J)("Invalid email")}});return(0,o.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e),n=>{let t=Object.keys(n)[0];e.getInputNode(t)?.focus()}),children:[(0,o.jsx)(r.o,{withAsterisk:!0,label:"Your name",placeholder:"Your name",...e.getInputProps("name")},e.key("name")),(0,o.jsx)(r.o,{withAsterisk:!0,label:"Your email",placeholder:"your@email.com",mt:"md",...e.getInputProps("email")},e.key("email")),(0,o.jsx)(i.Z,{justify:"flex-end",mt:"md",children:(0,o.jsx)(a.z,{type:"submit",children:"Submit"})})]})},code:`
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
`,maxWidth:340,centered:!0}},26802:function(e,n,t){"use strict";t.d(n,{M:function(){return k}});var o=t(52322);t(2784);var r=t(38483),i=t(46690),a=t(12063),c=t(28559),s=t(82027),d=t(98446),l=t(65744),u=t(40580),m=t(91482),p=t(54541),h=t(32100),f=t(68755),x=t(9437);function b({spacing:e,verticalSpacing:n,cols:t,selector:r}){let i=(0,f.rZ)(),a=void 0===n?e:n,c=(0,u.L)({"--sg-spacing-x":(0,m.bG)((0,h.v)(e)),"--sg-spacing-y":(0,m.bG)((0,h.v)(a)),"--sg-cols":h.v(t)?.toString()}),s=(0,d.X)(i.breakpoints).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof e&&void 0!==e[o]&&(n[o]["--sg-spacing-x"]=(0,m.bG)(e[o])),"object"==typeof a&&void 0!==a[o]&&(n[o]["--sg-spacing-y"]=(0,m.bG)(a[o])),"object"==typeof t&&void 0!==t[o]&&(n[o]["--sg-cols"]=t[o]),n),{}),l=(0,p.I)((0,d.X)(s),i).filter(e=>(0,d.X)(s[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:s[e.value]}));return(0,o.jsx)(x.f,{styles:c,media:l,selector:r})}function j(e){return"object"==typeof e&&null!==e?(0,d.X)(e):[]}function g({spacing:e,verticalSpacing:n,cols:t,selector:r}){let i=void 0===n?e:n,a=(0,u.L)({"--sg-spacing-x":(0,m.bG)((0,h.v)(e)),"--sg-spacing-y":(0,m.bG)((0,h.v)(i)),"--sg-cols":h.v(t)?.toString()}),c=function({spacing:e,verticalSpacing:n,cols:t}){return Array.from(new Set([...j(e),...j(n),...j(t)])).sort((e,n)=>(0,l.px)(e)-(0,l.px)(n))}({spacing:e,verticalSpacing:n,cols:t}),s=c.reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof e&&void 0!==e[o]&&(n[o]["--sg-spacing-x"]=(0,m.bG)(e[o])),"object"==typeof i&&void 0!==i[o]&&(n[o]["--sg-spacing-y"]=(0,m.bG)(i[o])),"object"==typeof t&&void 0!==t[o]&&(n[o]["--sg-cols"]=t[o]),n),{}),d=c.map(e=>({query:`simple-grid (min-width: ${e})`,styles:s[e]}));return(0,o.jsx)(x.f,{styles:a,container:d,selector:r})}var y={container:"m_925c2d2c",root:"m_2415a157"};let v={cols:1,spacing:"md",type:"media"},k=(0,s.d)((e,n)=>{let t=(0,r.w)("SimpleGrid",v,e),{classNames:s,className:d,style:l,styles:u,unstyled:m,vars:p,cols:h,verticalSpacing:f,spacing:x,type:j,...k}=t,C=(0,i.y)({name:"SimpleGrid",classes:y,props:t,className:d,style:l,classNames:s,styles:u,unstyled:m,vars:p}),w=(0,a.m)();return"container"===j?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{...t,selector:`.${w}`}),(0,o.jsx)("div",{...C("container"),children:(0,o.jsx)(c.x,{ref:n,...C("root",{className:w}),...k})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...t,selector:`.${w}`}),(0,o.jsx)(c.x,{ref:n,...C("root",{className:w}),...k})]})});k.classes=y,k.displayName="@mantine/core/SimpleGrid"},32100:function(e,n,t){"use strict";function o(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}t.d(n,{v:function(){return o}})},99070:function(e,n,t){"use strict";t.d(n,{o:function(){return r}});var o=t(65744);function r(e,n){return e in n.breakpoints?(0,o.px)(n.breakpoints[e]):(0,o.px)(e)}},54541:function(e,n,t){"use strict";t.d(n,{I:function(){return r}});var o=t(99070);function r(e,n){let t=e.map(e=>({value:e,px:(0,o.o)(e,n)}));return t.sort((e,n)=>e.px-n.px),t}},51057:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var o=t(1328);function r(e){return(0,o.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},3095:function(e,n,t){"use strict";function o(e){let n=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:n:Array.isArray(e)?e.length>0?null:n:null==e||!1===e?n:null}t.d(n,{U:function(){return o}})},1328:function(e,n,t){"use strict";function o(e,n){let t=n||!0;return n=>"string"!=typeof n?t:e.test(n)?null:t}t.d(n,{w:function(){return o}})}},function(e){e.O(0,[61177,66748,11340,405,7763,29466,92888,49774,40179],function(){return e(e.s=74107)}),_N_E=e.O()}]);