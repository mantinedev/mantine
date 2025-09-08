(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37336],{1498:(e,t,n)=>{"use strict";n.d(t,{e:()=>c});var r=n(6029),o=n(55729),s=n(38774),a=n(45208),l=n(39436);let c={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=function(e,t){let[n,r]=(0,o.useState)(e),s=(0,o.useRef)(e),[a,c]=(0,l.Z)(r,1e3);return(0,o.useEffect)(()=>{e!==s.current&&(s.current=e,a(e))},[a,e]),(0,o.useEffect)(()=>c,[]),n}(e,0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.k,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,r.jsxs)(a.E,{children:["Throttled value: ",n||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledValue } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const throttledValue = useThrottledValue(value, 1000);

  return (
    <>
      <TextInput placeholder="Search" onChange={(event) => setValue(event.currentTarget.value)} />
      <Text>Throttled value: {throttledValue || '\u2013'}</Text>
    </>
  );
}
`}},1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},5224:(e,t,n)=>{"use strict";n.d(t,{w:()=>a});var r=n(6029),o=n(38774),s=n(69329);let a={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return e.watch("name",({previousValue:e,value:t,touched:n,dirty:r})=>{console.log({previousValue:e,value:t,touched:n,dirty:r})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,r.jsx)(o.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email"))]})},code:`
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  form.watch('name', ({ previousValue, value, touched, dirty }) => {
    console.log({ previousValue, value, touched, dirty });
  });

  return (
    <div>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
    </div>
  );
}
`,centered:!0,maxWidth:340}},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},23195:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","plus","Plus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},25770:(e,t,n)=>{"use strict";function r(e,t){if("number"==typeof e)return t.length===e;let{max:n,min:r}=e,o=!0;return"number"==typeof n&&t.length>n&&(o=!1),"number"==typeof r&&t.length<r&&(o=!1),o}function o(e,t){let n=t||!0;return t=>"string"==typeof t?r(e,t.trim())?null:n:"object"==typeof t&&null!==t&&"length"in t&&r(e,t)?null:n}n.d(t,{J:()=>o})},27360:(e,t,n)=>{"use strict";n.d(t,{L:()=>l});var r=n(6029),o=n(55729),s=n(45208),a=n(61087);let l={type:"code",component:function(){let[e,t]=(0,o.useState)(0),n=function(){let e=(0,o.useRef)(!0);return!0===e.current?(e.current=!1,!0):e.current}();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.E,{children:["Is first render:"," ",(0,r.jsx)(s.E,{span:!0,c:n?"teal":"red",children:n?"Yes":"No!"})]}),(0,r.jsxs)(a.$,{onClick:()=>t(e=>e+1),mt:"sm",children:["Rerendered ",e," times, click to rerender"]})]})},code:`
import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { useIsFirstRender } from '@mantine/hooks';

function Demo() {
  const [counter, setCounter] = useState(0);
  const firstRender = useIsFirstRender();
  return (
    <div>
      <Text>
        Is first render:{' '}
        <Text span c={firstRender ? 'teal' : 'red'}>
          {firstRender ? 'Yes' : 'No!'}
        </Text>
      </Text>
      <Button onClick={() => setCounter((c) => c + 1)} mt="sm">
        Rerendered {counter} times, click to rerender
      </Button>
    </div>
  );
}
`}},28851:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(6029),o=n(16285),s=n(81590),a=n(5224),l=n(53850),c=n(30644),i=n(36855),d=n(83897),u=n(81062),h=n(1498),m=n(37134),p=n(48706),f=n(27360),x=n(38547),v=n(5262);let g=(0,x.P)(v.XZ.Changelog780);function j(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"auto-convert-px-to-rem-in-css-files",children:"Auto convert px to rem in .css files"}),"\n",(0,r.jsxs)(t.p,{children:["Start from version ",(0,r.jsx)(t.code,{children:"1.14.4"})," ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nsupports ",(0,r.jsx)(t.code,{children:"autoRem"})," option that can be used to automatically convert all ",(0,r.jsx)(t.code,{children:"px"})," values\nto ",(0,r.jsx)(t.code,{children:"rem"})," units in ",(0,r.jsx)(t.code,{children:".css"})," files."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This option works similar to ",(0,r.jsx)(t.code,{children:"rem"})," function. The following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  font-size: 16px;\n\n  @media (min-width: 320px) {\n    font-size: 32px;\n  }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  font-size: calc(1rem * var(--mantine-scale));\n\n  @media (min-width: 320px) {\n    font-size: calc(2rem * var(--mantine-scale));\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"autoRem"})," converts only CSS properties, values in ",(0,r.jsx)(t.code,{children:"@media"})," queries are\nnot converted automatically – you still need to use ",(0,r.jsx)(t.code,{children:"em"})," function to convert them."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"autoRem"})," option does not convert values in the following cases:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Values in ",(0,r.jsx)(t.code,{children:"calc()"}),", ",(0,r.jsx)(t.code,{children:"var()"}),", ",(0,r.jsx)(t.code,{children:"clamp()"})," and ",(0,r.jsx)(t.code,{children:"url()"})," functions"]}),"\n",(0,r.jsxs)(t.li,{children:["Values in ",(0,r.jsx)(t.code,{children:"content"})," property"]}),"\n",(0,r.jsxs)(t.li,{children:["Values that contain ",(0,r.jsx)(t.code,{children:"rgb()"}),", ",(0,r.jsx)(t.code,{children:"rgba()"}),", ",(0,r.jsx)(t.code,{children:"hsl()"}),", ",(0,r.jsx)(t.code,{children:"hsla()"})," colors"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to convert above values to rem units, use ",(0,r.jsx)(t.code,{children:"rem"})," function manually."]}),"\n",(0,r.jsx)(t.h2,{id:"uncontrolled-form-mode",children:"Uncontrolled form mode"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/form/use-form",children:"useForm"})," hook now supports ",(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"uncontrolled mode"}),".\nUncontrolled mode provides a significant performance improvement by reducing\nthe number of re-renders and the amount of state updates almost to 0. Uncontrolled\nmode is now the recommended way to use the ",(0,r.jsx)(t.code,{children:"useForm"})," hook for almost all use cases."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of uncontrolled form (",(0,r.jsx)(t.code,{children:"form.values"})," are not updated):"]}),"\n",(0,r.jsx)(n,{data:s.U}),"\n",(0,r.jsx)(t.h2,{id:"formgetvalues",children:"form.getValues"}),"\n",(0,r.jsxs)(t.p,{children:["With uncontrolled mode, you can not access ",(0,r.jsx)(t.code,{children:"form.values"})," as a state variable,\ninstead, you can use ",(0,r.jsx)(t.code,{children:"form.getValues()"})," method to get current form values at any time:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: 'John Doe' },\n});\n\nform.getValues(); // { name: 'John Doe' }\n\nform.setValues({ name: 'John Smith' });\nform.getValues(); // { name: 'John Smith' }\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.getValues()"})," always returns the latest form values, it is safe to use it\nafter state updates:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: 'John Doe' },\n});\n\nconst handleNameChange = () => {\n  form.setFieldValue('name', 'Test Name');\n\n  // ❌ Do not use form.values to get the current form values\n  // form.values has stale name value until next rerender in controlled mode\n  // and is always outdated in uncontrolled mode\n  console.log(form.values); // { name: 'John Doe' }\n\n  // ✅ Use form.getValues to get the current form values\n  // form.getValues always returns the latest form values\n  console.log(form.getValues()); // { name: 'Test Name' }\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"formwatch",children:"form.watch"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.watch"})," is an effect function that allows subscribing to changes of a\nspecific form field. It accepts field path and a callback function that is\ncalled with new value, previous value, touched and dirty field states:"]}),"\n",(0,r.jsx)(n,{data:a.w}),"\n",(0,r.jsx)(t.h2,{id:"customize-popover-middlewares",children:"Customize Popover middlewares"}),"\n",(0,r.jsxs)(t.p,{children:["You can now customize ",(0,r.jsx)(t.code,{children:"middlewares"})," options in ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component and\nin other components (",(0,r.jsx)(t.a,{href:"/core/menu",children:"Menu"}),", ",(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/combobox",children:"Combobox"}),", etc.)\nbased on Popover."]}),"\n",(0,r.jsxs)(t.p,{children:["To customize ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/",children:"Floating UI"})," middlewares options, pass them as\nan object to the ",(0,r.jsx)(t.code,{children:"middlewares"})," prop. For example, to change ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"}),"\nmiddleware padding to ",(0,r.jsx)(t.code,{children:"20px"})," use the following configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover\n      middlewares={{ shift: { padding: 20 } }}\n      position=\"bottom\"\n    >\n      {/* Popover content */}\n    </Popover>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-fetch-hook",children:"use-fetch hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-fetch",children:"use-fetch"})," hook:"]}),"\n",(0,r.jsx)(n,{data:l.l}),"\n",(0,r.jsx)(t.h2,{id:"use-map-hook",children:"use-map hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-map",children:"use-map"})," hook:"]}),"\n",(0,r.jsx)(n,{data:c.t}),"\n",(0,r.jsx)(t.h2,{id:"use-set-hook",children:"use-set hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-set",children:"use-set"})," hook:"]}),"\n",(0,r.jsx)(n,{data:i.v}),"\n",(0,r.jsx)(t.h2,{id:"use-debounced-callback-hook",children:"use-debounced-callback hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-debounced-callback",children:"use-debounced-callback"})," hook:"]}),"\n",(0,r.jsx)(n,{data:d.r}),"\n",(0,r.jsx)(t.h2,{id:"use-throttled-state-hook",children:"use-throttled-state hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-throttled-state",children:"use-throttled-state"})," hook:"]}),"\n",(0,r.jsx)(n,{data:u.g}),"\n",(0,r.jsx)(t.h2,{id:"use-throttled-value-hook",children:"use-throttled-value hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-throttled-value",children:"use-throttled-value"})," hook:"]}),"\n",(0,r.jsx)(n,{data:h.e}),"\n",(0,r.jsx)(t.h2,{id:"use-throttled-callback-hook",children:"use-throttled-callback hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-throttled-callback",children:"use-throttled-callback"})," hook:"]}),"\n",(0,r.jsx)(n,{data:m.A}),"\n",(0,r.jsx)(t.h2,{id:"use-orientation-hook",children:"use-orientation hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-orientation",children:"use-orientation"})," hook:"]}),"\n",(0,r.jsx)(n,{data:p.N}),"\n",(0,r.jsx)(t.h2,{id:"use-is-first-render-hook",children:"use-is-first-render hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-is-first-render",children:"use-is-first-render"})," hook:"]}),"\n",(0,r.jsx)(n,{data:f.L}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"uncontrolled form"})," guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/values/#onvalueschange",children:"onValuesChange"})," documentation has been added"]}),"\n",(0,r.jsxs)(t.li,{children:["A new demo has been added to ",(0,r.jsx)(t.a,{href:"/x/tiptap/#typography-styles",children:"tiptap"})," that shows how to customize typography styles"]}),"\n",(0,r.jsxs)(t.li,{children:["A new guide has been added to customize ",(0,r.jsx)(t.a,{href:"/core/popover/#customize-middleware-options",children:"Popover"})," middlewares"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/number-input",children:"NumberInput"})," now supports ",(0,r.jsx)(t.code,{children:"withKeyboardEvents={false}"})," to disable up/down arrow keys handling"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"})," middleware now has default padding of 5px to offset dropdown near the edge of the viewport"]}),"\n"]})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(j,{...e})})}},30644:(e,t,n)=>{"use strict";n.d(t,{t:()=>u});var r=n(6029),o=n(23195),s=n(90993),a=n(19577),l=n(57414),c=n(44572),i=n(55729),d=n(91686);let u={type:"code",component:function(){let e=function(e){let t=(0,i.useRef)(new Map(e)),n=(0,d.C)();return t.current.set=(...e)=>(Map.prototype.set.apply(t.current,e),n(),t.current),t.current.clear=(...e)=>{Map.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Map.prototype.delete.apply(t.current,e);return n(),r},t.current}([["/hooks/use-media-query",4124],["/hooks/use-clipboard",8341],["/hooks/use-fetch",9001]]),t=Array.from(e.entries()).map(([t,n])=>(0,r.jsxs)(a.X.Tr,{children:[(0,r.jsx)(a.X.Td,{children:t}),(0,r.jsx)(a.X.Td,{children:n}),(0,r.jsx)(a.X.Td,{children:(0,r.jsxs)(l.Y,{children:[(0,r.jsx)(c.M,{variant:"default",onClick:()=>e.set(t,n+1),fw:500,children:(0,r.jsx)(o.A,{stroke:1.5,size:18})}),(0,r.jsx)(c.M,{variant:"default",onClick:()=>e.delete(t),c:"red",children:(0,r.jsx)(s.A,{stroke:1.5,size:18})})]})})]},t));return(0,r.jsxs)(a.X,{layout:"fixed",children:[(0,r.jsx)(a.X.Thead,{children:(0,r.jsxs)(a.X.Tr,{children:[(0,r.jsx)(a.X.Th,{children:"Page"}),(0,r.jsx)(a.X.Th,{children:"Views last month"}),(0,r.jsx)(a.X.Th,{})]})}),(0,r.jsx)(a.X.Tbody,{children:t})]})},code:`
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, Table } from '@mantine/core';
import { useMap } from '@mantine/hooks';

function Demo() {
  const map = useMap([
    ['/hooks/use-media-query', 4124],
    ['/hooks/use-clipboard', 8341],
    ['/hooks/use-fetch', 9001],
  ]);

  const rows = Array.from(map.entries()).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td>{key}</Table.Td>
      <Table.Td>{value}</Table.Td>
      <Table.Td>
        <Group>
          <ActionIcon variant="default" onClick={() => map.set(key, value + 1)} fw={500}>
            <IconPlus stroke={1.5} size={18} />
          </ActionIcon>
          <ActionIcon variant="default" onClick={() => map.delete(key)} c="red">
            <IconTrash stroke={1.5} size={18} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table layout="fixed">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Page</Table.Th>
          <Table.Th>Views last month</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`}},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36855:(e,t,n)=>{"use strict";n.d(t,{v:()=>d});var r=n(6029),o=n(55729),s=n(1608),a=n(38774),l=n(72139),c=n(91686);function i(e){if(e instanceof Set)return e;let t=new Set;for(let n of e)t.add(n);return t}let d={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=function(e){let t=(0,o.useRef)(new Set(e)),n=(0,c.C)();return t.current.add=(...e)=>{let r=Set.prototype.add.apply(t.current,e);return n(),r},t.current.clear=(...e)=>{Set.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Set.prototype.delete.apply(t.current,e);return n(),r},t.current.union=e=>{let n=new Set(t.current);return i(e).forEach(e=>n.add(e)),n},t.current.intersection=e=>{let n=new Set,r=i(e);return t.current.forEach(e=>{r.has(e)&&n.add(e)}),n},t.current.difference=e=>{let n=new Set,r=i(e);return t.current.forEach(e=>{r.has(e)||n.add(e)}),n},t.current.symmetricDifference=e=>{let n=new Set,r=i(e);return t.current.forEach(e=>{r.has(e)||n.add(e)}),r.forEach(e=>{t.current.has(e)||n.add(e)}),n},t.current}(["@mantine","@mantine-tests","@mantinex"]),d=n.has(e.trim().toLowerCase()),u=Array.from(n).map(e=>(0,r.jsx)(s.C,{children:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.k,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:e,onChange:e=>t(e.currentTarget.value),error:d&&"Scope already exists",onKeyDown:r=>{"Enter"!==r.nativeEvent.code||d||(n.add(e.trim().toLowerCase()),t(""))}}),(0,r.jsx)(l.B,{gap:5,align:"flex-start",mt:"md",children:u})]})},code:`
import { useState } from 'react';
import { Code, Stack, TextInput } from '@mantine/core';
import { useSet } from '@mantine/hooks';

function Demo() {
  const [input, setInput] = useState('');
  const scopes = useSet<string>(['@mantine', '@mantine-tests', '@mantinex']);

  const isDuplicate = scopes.has(input.trim().toLowerCase());

  const items = Array.from(scopes).map((scope) => <Code key={scope}>{scope}</Code>);

  return (
    <>
      <TextInput
        label="Add new scope"
        placeholder="Enter scope"
        description="Duplicate scopes are not allowed"
        value={input}
        onChange={(event) => setInput(event.currentTarget.value)}
        error={isDuplicate && 'Scope already exists'}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Enter' && !isDuplicate) {
            scopes.add(input.trim().toLowerCase());
            setInput('');
          }
        }}
      />

      <Stack gap={5} align="flex-start" mt="md">
        {items}
      </Stack>
    </>
  );
}
`}},37134:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(6029),o=n(55729),s=n(38774),a=n(45208),l=n(39436);let c={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=(0,l.d)(e=>t(e),1e3);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.k,{placeholder:"Search",onChange:e=>n(e.currentTarget.value)}),(0,r.jsxs)(a.E,{children:["Throttled value: ",e||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledCallback } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setValue] = useState('');
  const throttledSetValue = useThrottledCallback((value) => setValue(value), 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => throttledSetValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '\u2013'}</Text>
    </>
  );
}
`}},39436:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s,d:()=>a});var r=n(55729),o=n(22704);function s(e,t){let n=(0,o.c)(e),s=(0,r.useRef)(null),a=(0,r.useRef)(null),l=(0,r.useRef)(!0),c=(0,r.useRef)(t),i=(0,r.useRef)(-1),d=(0,r.useCallback)((...e)=>{n(...e),s.current=e,a.current=e,l.current=!1},[n]),u=(0,r.useCallback)(()=>{s.current&&s.current!==a.current?(d(...s.current),i.current=window.setTimeout(u,c.current)):l.current=!0},[d]),h=(0,r.useCallback)((...e)=>{l.current?(d(...e),i.current=window.setTimeout(u,c.current)):s.current=e},[d,u]);return(0,r.useEffect)(()=>{c.current=t},[t]),[h,()=>window.clearTimeout(i.current)]}function a(e,t){return s(e,t)[0]}},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},45461:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-8-0",function(){return n(28851)}])},48706:(e,t,n)=>{"use strict";n.d(t,{N:()=>c});var r=n(6029),o=n(45208),s=n(1608),a=n(55729),l=n(93430);let c={type:"code",component:function(){let{angle:e,type:t}=function({defaultAngle:e=0,defaultType:t="landscape-primary",getInitialValueInEffect:n=!0}={}){var r;let[o,s]=(0,a.useState)((r={angle:e,type:t},n?r:"undefined"!=typeof window&&"screen"in window?{angle:window.screen.orientation?.angle??r.angle,type:window.screen.orientation?.type??r.type}:r)),c=e=>{let t=e.currentTarget;s({angle:t?.angle||0,type:t?.type||"landscape-primary"})};return(0,l.o)(()=>(window.screen.orientation?.addEventListener("change",c),()=>window.screen.orientation?.removeEventListener("change",c)),[]),o}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.E,{children:["Angle: ",(0,r.jsx)(s.C,{children:e})]}),(0,r.jsxs)(o.E,{children:["Type: ",(0,r.jsx)(s.C,{children:t})]})]})},code:`
import { Code, Text } from '@mantine/core';
import { useOrientation } from '@mantine/hooks';

function Demo() {
  const { angle, type } = useOrientation();
  return (
    <>
      <Text>
        Angle: <Code>{angle}</Code>
      </Text>
      <Text>
        Type: <Code>{type}</Code>
      </Text>
    </>
  );
}
`}},53850:(e,t,n)=>{"use strict";n.d(t,{l:()=>u});var r=n(6029),o=n(45208),s=n(57414),a=n(61087),l=n(76320),c=n(1608),i=n(97707),d=n(55729);let u={type:"code",component:function(){let{data:e,loading:t,error:n,refetch:u,abort:h}=function(e,{autoInvoke:t=!0,...n}={}){let[r,o]=(0,d.useState)(null),[s,a]=(0,d.useState)(!1),[l,c]=(0,d.useState)(null),i=(0,d.useRef)(null),u=(0,d.useCallback)(()=>(i.current&&i.current.abort(),i.current=new AbortController,a(!0),fetch(e,{signal:i.current.signal,...n}).then(e=>e.json()).then(e=>(o(e),a(!1),e)).catch(e=>(a(!1),"AbortError"!==e.name&&c(e),e))),[e]),h=(0,d.useCallback)(()=>{i.current&&i.current?.abort("")},[]);return(0,d.useEffect)(()=>(t&&u(),()=>{i.current&&i.current.abort("")}),[u,t]),{data:r,loading:s,error:l,refetch:u,abort:h}}("https://jsonplaceholder.typicode.com/todos/");return(0,r.jsxs)("div",{children:[n&&(0,r.jsx)(o.E,{c:"red",children:n.message}),(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(a.$,{onClick:u,color:"blue",children:"Refetch"}),(0,r.jsx)(a.$,{onClick:h,color:"red",children:"Abort"})]}),(0,r.jsxs)(l.a,{pos:"relative",mt:"md",children:[(0,r.jsx)(c.C,{block:!0,children:e?JSON.stringify(e.slice(0,3),null,2):"Fetching"}),(0,r.jsx)(i.p,{visible:t})]})]})},code:`
import { Box, Button, Code, Group, LoadingOverlay, Text } from '@mantine/core';
import { useFetch } from '@mantine/hooks';

interface Item {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Demo() {
  const { data, loading, error, refetch, abort } = useFetch<Item[]>(
    'https://jsonplaceholder.typicode.com/todos/'
  );

  return (
    <div>
      {error && <Text c="red">{error.message}</Text>}

      <Group>
        <Button onClick={refetch} color="blue">
          Refetch
        </Button>
        <Button onClick={abort} color="red">
          Abort
        </Button>
      </Group>
      <Box pos="relative" mt="md">
        <Code block>{data ? JSON.stringify(data.slice(0, 3), null, 2) : 'Fetching'}</Code>
        <LoadingOverlay visible={loading} />
      </Box>
    </div>
  );
}
`}},55272:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;0!=o--;){var r,o,s,a=s[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},62114:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var r=n(73186);function o(e){return(0,r.c)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},73186:(e,t,n)=>{"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{c:()=>r})},81062:(e,t,n)=>{"use strict";n.d(t,{g:()=>c});var r=n(6029),o=n(38774),s=n(45208),a=n(55729),l=n(39436);let c={type:"code",component:function(){let[e,t]=function(e,t){let[n,r]=(0,a.useState)(""),[o,s]=(0,l.Z)(r,1e3);return(0,a.useEffect)(()=>s,[]),[n,o]}(0,0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.k,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,r.jsxs)(s.E,{children:["Throttled value: ",e||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledState } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setThrottledValue] = useThrottledState('', 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => setThrottledValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '\u2013'}</Text>
    </>
  );
}
`}},81590:(e,t,n)=>{"use strict";n.d(t,{U:()=>h});var r=n(6029),o=n(55729),s=n(38774),a=n(61087),l=n(45208),c=n(1608),i=n(69329),d=n(25770),u=n(62114);let h={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:(0,d.J)({min:3},"Must be at least 3 characters"),email:(0,u.x)("Invalid email")}}),[t,n]=(0,o.useState)(null);return(0,r.jsxs)("form",{onSubmit:e.onSubmit(n),children:[(0,o.createElement)(s.k,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,o.createElement)(s.k,{...e.getInputProps("email"),key:e.key("email"),mt:"md",label:"Email",placeholder:"Email"}),(0,r.jsx)(a.$,{type:"submit",mt:"md",children:"Submit"}),(0,r.jsx)(l.E,{mt:"md",children:"Form values:"}),(0,r.jsx)(c.C,{block:!0,children:JSON.stringify(e.values,null,2)}),(0,r.jsx)(l.E,{mt:"md",children:"Submitted values:"}),(0,r.jsx)(c.C,{block:!0,children:t?JSON.stringify(t,null,2):"–"})]})},code:`
import { useState } from 'react';
import { Button, Code, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <TextInput
        {...form.getInputProps('email')}
        key={form.key('email')}
        mt="md"
        label="Email"
        placeholder="Email"
      />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '\u2013'}</Code>
    </form>
  );
}
`,maxWidth:500,centered:!0,defaultExpanded:!1}},83897:(e,t,n)=>{"use strict";n.d(t,{r:()=>i});var r=n(6029),o=n(55729),s=n(38774),a=n(10109),l=n(45208),c=n(11886);let i={type:"code",component:function(){let[e,t]=(0,o.useState)(""),[n,i]=(0,o.useState)([]),[d,u]=(0,o.useState)(!1),h=(0,c.Y)(async e=>{u(!0),i(await new Promise(t=>{setTimeout(()=>{t(""===e.trim()?[]:[,,,,,].fill(0).map((t,n)=>({id:n,title:`${e} ${n+1}`})))},1e3)})),u(!1)},500);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.k,{value:e,onChange:e=>{t(e.currentTarget.value),h(e.currentTarget.value)},placeholder:"Search...",rightSection:d&&(0,r.jsx)(a.a,{size:20})}),n.map(e=>(0,r.jsx)(l.E,{size:"sm",children:e.title},e.id))]})},code:`
import { useState } from 'react';
import { Loader, Text, TextInput } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

function getSearchResults(query: string): Promise<{ id: number; title: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        query.trim() === ''
          ? []
          : Array(5)
              .fill(0)
              .map((_, index) => ({ id: index, title: \`\${query} \${index + 1}\` }))
      );
    }, 1000);
  });
}

function Demo() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback(async (query: string) => {
    setLoading(true);
    setSearchResults(await getSearchResults(query));
    setLoading(false);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    handleSearch(event.currentTarget.value);
  };

  return (
    <>
      <TextInput
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        rightSection={loading && <Loader size={20} />}
      />
      {searchResults.map((result) => (
        <Text key={result.id} size="sm">
          {result.title}
        </Text>
      ))}
    </>
  );
}
`,centered:!0,maxWidth:340}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},86874:(e,t,n)=>{"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,s,a=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?s=Object.create(e.__proto__||null):"[object Array]"===l?s=Array(e.length):"[object Set]"===l?(s=new Set,e.forEach(function(e){s.add(o(e))})):"[object Map]"===l?(s=new Map,e.forEach(function(e,t){s.set(o(t),o(e))})):"[object Date]"===l?s=new Date(+e):"[object RegExp]"===l?s=new RegExp(e.source,e.flags):"[object DataView]"===l?s=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?s=e.slice(0):"Array]"===l.slice(-6)&&(s=new e.constructor(e)),s){for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r(s,n[a],Object.getOwnPropertyDescriptor(e,n[a]));for(a=0,n=Object.getOwnPropertyNames(e);a<n.length;a++)Object.hasOwnProperty.call(s,t=n[a])&&s[t]===e[t]||r(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}n.d(t,{Q:()=>o})},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90993:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","trash","Trash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},97707:(e,t,n)=>{"use strict";n.d(t,{p:()=>v});var r=n(6029);n(55729);var o=n(26237),s=n(33987),a=n(49643),l=n(38919),c=n(15583),i=n(76320),d=n(8411),u=n(10109),h=n(70421),m=n(89184),p={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let f={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,o.I)("overlay")},x=(0,s.V)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),v=(0,d.P9)((e,t)=>{let n=(0,l.Y)("LoadingOverlay",f,e),{classNames:o,className:s,style:d,styles:v,unstyled:g,vars:j,transitionProps:y,loaderProps:k,overlayProps:b,visible:T,zIndex:w,attributes:S,...C}=n,A=(0,a.xd)(),E=(0,c.I)({name:"LoadingOverlay",classes:p,props:n,className:s,style:d,classNames:o,styles:v,unstyled:g,attributes:S,vars:j,varsResolver:x}),M={...f.overlayProps,...b};return(0,r.jsx)(m.e,{transition:"fade",...y,mounted:!!T,children:e=>(0,r.jsxs)(i.a,{...E("root",{style:e}),ref:t,...C,children:[(0,r.jsx)(u.a,{...E("loader"),unstyled:g,...k}),(0,r.jsx)(h.h,{...M,...E("overlay"),darkHidden:!0,unstyled:g,color:b?.color||A.white}),(0,r.jsx)(h.h,{...M,...E("overlay"),lightHidden:!0,unstyled:g,color:b?.color||A.colors.dark[5]})]})})});v.classes=p,v.displayName="@mantine/core/LoadingOverlay"}},e=>{e.O(0,[38547,69329,90636,46593,38792],()=>e(e.s=45461)),_N_E=e.O()}]);