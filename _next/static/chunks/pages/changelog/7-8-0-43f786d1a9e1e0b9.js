(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19420],{49114:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},64278:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},69378:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,l=a[o];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},65164:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-8-0",function(){return n(98626)}])},98626:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(52322),o=n(45392),a=n(51509),l=n(1383),s=n(76578),c=n(59292),i=n(72591),u=n(50091),d=n(75929),m=n(91714),h=n(31840),p=n(48976),f=n(38944),x=n(79016),g=n(33638);let v=(0,x.A)(g.us.Changelog780);function b(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"auto-convert-px-to-rem-in-css-files",children:"Auto convert px to rem in .css files"}),"\n",(0,r.jsxs)(t.p,{children:["Start from version ",(0,r.jsx)(t.code,{children:"1.14.4"})," ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nsupports ",(0,r.jsx)(t.code,{children:"autoRem"})," option that can be used to automatically convert all ",(0,r.jsx)(t.code,{children:"px"})," values\nto ",(0,r.jsx)(t.code,{children:"rem"})," units in ",(0,r.jsx)(t.code,{children:".css"})," files."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This option works similar to ",(0,r.jsx)(t.code,{children:"rem"})," function. The following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  font-size: 16px;\n\n  @media (min-width: 320px) {\n    font-size: 32px;\n  }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  font-size: calc(1rem * var(--mantine-scale));\n\n  @media (min-width: 320px) {\n    font-size: calc(2rem * var(--mantine-scale));\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"autoRem"})," converts only CSS properties, values in ",(0,r.jsx)(t.code,{children:"@media"})," queries are\nnot converted automatically – you still need to use ",(0,r.jsx)(t.code,{children:"em"})," function to convert them."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"autoRem"})," option does not convert values in the following cases:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Values in ",(0,r.jsx)(t.code,{children:"calc()"}),", ",(0,r.jsx)(t.code,{children:"var()"}),", ",(0,r.jsx)(t.code,{children:"clamp()"})," and ",(0,r.jsx)(t.code,{children:"url()"})," functions"]}),"\n",(0,r.jsxs)(t.li,{children:["Values in ",(0,r.jsx)(t.code,{children:"content"})," property"]}),"\n",(0,r.jsxs)(t.li,{children:["Values that contain ",(0,r.jsx)(t.code,{children:"rgb()"}),", ",(0,r.jsx)(t.code,{children:"rgba()"}),", ",(0,r.jsx)(t.code,{children:"hsl()"}),", ",(0,r.jsx)(t.code,{children:"hsla()"})," colors"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to convert above values to rem units, use ",(0,r.jsx)(t.code,{children:"rem"})," function manually."]}),"\n",(0,r.jsx)(t.h2,{id:"uncontrolled-form-mode",children:"Uncontrolled form mode"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/form/use-form",children:"useForm"})," hook now supports ",(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"uncontrolled mode"}),".\nUncontrolled mode provides a significant performance improvement by reducing\nthe number of re-renders and the amount of state updates almost to 0. Uncontrolled\nmode is now the recommended way to use the ",(0,r.jsx)(t.code,{children:"useForm"})," hook for almost all use cases."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of uncontrolled form (",(0,r.jsx)(t.code,{children:"form.values"})," are not updated):"]}),"\n",(0,r.jsx)(n,{data:a.G}),"\n",(0,r.jsx)(t.h2,{id:"formgetvalues",children:"form.getValues"}),"\n",(0,r.jsxs)(t.p,{children:["With uncontrolled mode, you can not access ",(0,r.jsx)(t.code,{children:"form.values"})," as a state variable,\ninstead, you can use ",(0,r.jsx)(t.code,{children:"form.getValues()"})," method to get current form values at any time:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: 'John Doe' },\n});\n\nform.getValues(); // { name: 'John Doe' }\n\nform.setValues({ name: 'John Smith' });\nform.getValues(); // { name: 'John Smith' }\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.getValues()"})," always returns the latest form values, it is safe to use it\nafter state updates:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: 'John Doe' },\n});\n\nconst handleNameChange = () => {\n  form.setFieldValue('name', 'Test Name');\n\n  // ❌ Do not use form.values to get the current form values\n  // form.values has stale name value until next rerender in controlled mode\n  // and is always outdated in uncontrolled mode\n  console.log(form.values); // { name: 'John Doe' }\n\n  // ✅ Use form.getValues to get the current form values\n  // form.getValues always returns the latest form values\n  console.log(form.getValues()); // { name: 'Test Name' }\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"formwatch",children:"form.watch"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.watch"})," is an effect function that allows subscribing to changes of a\nspecific form field. It accepts field path and a callback function that is\ncalled with new value, previous value, touched and dirty field states:"]}),"\n",(0,r.jsx)(n,{data:l.Y}),"\n",(0,r.jsx)(t.h2,{id:"customize-popover-middlewares",children:"Customize Popover middlewares"}),"\n",(0,r.jsxs)(t.p,{children:["You can now customize ",(0,r.jsx)(t.code,{children:"middlewares"})," options in ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component and\nin other components (",(0,r.jsx)(t.a,{href:"/core/menu",children:"Menu"}),", ",(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/combobox",children:"Combobox"}),", etc.)\nbased on Popover."]}),"\n",(0,r.jsxs)(t.p,{children:["To customize ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/",children:"Floating UI"})," middlewares options, pass them as\nan object to the ",(0,r.jsx)(t.code,{children:"middlewares"})," prop. For example, to change ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"}),"\nmiddleware padding to ",(0,r.jsx)(t.code,{children:"20px"})," use the following configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover\n      middlewares={{ shift: { padding: 20 } }}\n      position=\"bottom\"\n    >\n      {/* Popover content */}\n    </Popover>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-fetch-hook",children:"use-fetch hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-fetch",children:"use-fetch"})," hook:"]}),"\n",(0,r.jsx)(n,{data:s.u}),"\n",(0,r.jsx)(t.h2,{id:"use-map-hook",children:"use-map hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-map",children:"use-map"})," hook:"]}),"\n",(0,r.jsx)(n,{data:c.a}),"\n",(0,r.jsx)(t.h2,{id:"use-set-hook",children:"use-set hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-set",children:"use-set"})," hook:"]}),"\n",(0,r.jsx)(n,{data:i.E}),"\n",(0,r.jsx)(t.h2,{id:"use-debounced-callback-hook",children:"use-debounced-callback hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-debounced-callback",children:"use-debounced-callback"})," hook:"]}),"\n",(0,r.jsx)(n,{data:u.A}),"\n",(0,r.jsx)(t.h2,{id:"use-throttled-state-hook",children:"use-throttled-state hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-throttled-state",children:"use-throttled-state"})," hook:"]}),"\n",(0,r.jsx)(n,{data:d.V}),"\n",(0,r.jsx)(t.h2,{id:"use-throttled-value-hook",children:"use-throttled-value hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-throttled-value",children:"use-throttled-value"})," hook:"]}),"\n",(0,r.jsx)(n,{data:m.o}),"\n",(0,r.jsx)(t.h2,{id:"use-throttled-callback-hook",children:"use-throttled-callback hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-throttled-callback",children:"use-throttled-callback"})," hook:"]}),"\n",(0,r.jsx)(n,{data:h.H}),"\n",(0,r.jsx)(t.h2,{id:"use-orientation-hook",children:"use-orientation hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-orientation",children:"use-orientation"})," hook:"]}),"\n",(0,r.jsx)(n,{data:p.J}),"\n",(0,r.jsx)(t.h2,{id:"use-is-first-render-hook",children:"use-is-first-render hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-is-first-render",children:"use-is-first-render"})," hook:"]}),"\n",(0,r.jsx)(n,{data:f.C}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"uncontrolled form"})," guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/values/#onvalueschange",children:"onValuesChange"})," documentation has been added"]}),"\n",(0,r.jsxs)(t.li,{children:["A new demo has been added to ",(0,r.jsx)(t.a,{href:"/x/tiptap/#typography-styles",children:"tiptap"})," that shows how to customize typography styles"]}),"\n",(0,r.jsxs)(t.li,{children:["A new guide has been added to customize ",(0,r.jsx)(t.a,{href:"/core/popover/#customize-middleware-options",children:"Popover"})," middlewares"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/number-input",children:"NumberInput"})," now supports ",(0,r.jsx)(t.code,{children:"withKeyboardEvents={false}"})," to disable up/down arrow keys handling"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"})," middleware now has default padding of 5px to offset dropdown near the edge of the viewport"]}),"\n"]})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,{...e,children:(0,r.jsx)(b,{...e})})}},15463:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,a,l=0,s=Object.prototype.toString.call(e);if("[object Object]"===s?a=Object.create(e.__proto__||null):"[object Array]"===s?a=Array(e.length):"[object Set]"===s?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===s?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===s?a=new Date(+e):"[object RegExp]"===s?a=new RegExp(e.source,e.flags):"[object DataView]"===s?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===s?a=e.slice(0):"Array]"===s.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r(a,n[l],Object.getOwnPropertyDescriptor(e,n[l]));for(l=0,n=Object.getOwnPropertyNames(e);l<n.length;l++)Object.hasOwnProperty.call(a,t=n[l])&&a[t]===e[t]||r(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return o}})},51509:function(e,t,n){"use strict";n.d(t,{G:function(){return m}});var r=n(2784),o=n(74770),a=n(17115),l=n(8582),s=n(45909),c=n(59259),i=n(90070),u=n(51057);let d=`
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
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <TextInput {...form.getInputProps('email')} mt="md" label="Email" placeholder="Email" />
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
`,m={type:"code",component:function(){let e=(0,c.c)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:(0,i.d)({min:3},"Must be at least 3 characters"),email:(0,u.J)("Invalid email")}}),[t,n]=(0,r.useState)(null);return r.createElement("form",{onSubmit:e.onSubmit(n)},r.createElement(o.o,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),r.createElement(o.o,{...e.getInputProps("email"),mt:"md",label:"Email",placeholder:"Email"}),r.createElement(a.z,{type:"submit",mt:"md"},"Submit"),r.createElement(l.x,{mt:"md"},"Form values:"),r.createElement(s.E,{block:!0},JSON.stringify(e.values,null,2)),r.createElement(l.x,{mt:"md"},"Submitted values:"),r.createElement(s.E,{block:!0},t?JSON.stringify(t,null,2):"–"))},code:d,maxWidth:500,centered:!0,defaultExpanded:!1}},1383:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var r=n(2784),o=n(74770),a=n(59259);let l=`
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
`,s={type:"code",component:function(){let e=(0,a.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return e.watch("name",({previousValue:e,value:t,touched:n,dirty:r})=>{console.log({previousValue:e,value:t,touched:n,dirty:r})}),r.createElement("div",null,r.createElement(o.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),r.createElement(o.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}))},code:l,centered:!0,maxWidth:340}},50091:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(2784),o=n(74770),a=n(12491),l=n(8582),s=n(64006);let c=`
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
`,i={type:"code",component:function(){let[e,t]=(0,r.useState)(""),[n,c]=(0,r.useState)([]),[i,u]=(0,r.useState)(!1),d=(0,s.y)(async e=>{u(!0),c(await new Promise(t=>{setTimeout(()=>{t(""===e.trim()?[]:[,,,,,].fill(0).map((t,n)=>({id:n,title:`${e} ${n+1}`})))},1e3)})),u(!1)},500);return r.createElement(r.Fragment,null,r.createElement(o.o,{value:e,onChange:e=>{t(e.currentTarget.value),d(e.currentTarget.value)},placeholder:"Search...",rightSection:i&&r.createElement(a.a,{size:20})}),n.map(e=>r.createElement(l.x,{key:e.id,size:"sm"},e.title)))},code:c,centered:!0,maxWidth:340}},76578:function(e,t,n){"use strict";n.d(t,{u:function(){return u}});var r=n(2784),Text=n(8582),o=n(93010),a=n(17115),l=n(28559),s=n(45909),c=n(20992);let i=`
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
`,u={type:"code",component:function(){let{data:e,loading:t,error:n,refetch:i,abort:u}=function(e,{autoInvoke:t=!0,...n}={}){let[o,a]=(0,r.useState)(null),[l,s]=(0,r.useState)(!1),[c,i]=(0,r.useState)(null),u=(0,r.useRef)(null),d=(0,r.useCallback)(()=>{if(e)return u.current&&u.current.abort(),u.current=new AbortController,s(!0),fetch(e,{signal:u.current.signal,...n}).then(e=>e.json()).then(e=>(a(e),s(!1),e)).catch(e=>{throw s(!1),"AbortError"!==e.name&&i(e),e})},[e]),m=(0,r.useCallback)(()=>{u.current&&u.current?.abort()},[]);return(0,r.useEffect)(()=>(t&&d(),()=>{u.current&&u.current.abort()}),[d,t]),{data:o,loading:l,error:c,refetch:d,abort:m}}("https://jsonplaceholder.typicode.com/todos/");return r.createElement("div",null,n&&r.createElement(Text.x,{c:"red"},n.message),r.createElement(o.Z,null,r.createElement(a.z,{onClick:i,color:"blue"},"Refetch"),r.createElement(a.z,{onClick:u,color:"red"},"Abort")),r.createElement(l.x,{pos:"relative",mt:"md"},r.createElement(s.E,{block:!0},e?JSON.stringify(e.slice(0,3),null,2):"Fetching"),r.createElement(c.f,{visible:t})))},code:i}},38944:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var r=n(2784),Text=n(8582),o=n(17115);let a=`
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
`,l={type:"code",component:function(){let[e,t]=(0,r.useState)(0),n=function(){let e=(0,r.useRef)(!0);return!0===e.current?(e.current=!1,!0):e.current}();return r.createElement("div",null,r.createElement(Text.x,null,"Is first render:"," ",r.createElement(Text.x,{span:!0,c:n?"teal":"red"},n?"Yes":"No!")),r.createElement(o.z,{onClick:()=>t(e=>e+1),mt:"sm"},"Rerendered ",e," times, click to rerender"))},code:a}},59292:function(e,t,n){"use strict";n.d(t,{a:function(){return d}});var r=n(2784),o=n(49114),a=n(64278),l=n(96242),s=n(93010),c=n(54813),i=n(59114);let u=`
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
`,d={type:"code",component:function(){let e=function(e){let t=(0,r.useRef)(new Map(e)),n=(0,i.N)();return t.current.set=(...e)=>(Map.prototype.set.apply(t.current,e),n(),t.current),t.current.clear=(...e)=>{Map.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Map.prototype.delete.apply(t.current,e);return n(),r},t.current}([["/hooks/use-media-query",4124],["/hooks/use-clipboard",8341],["/hooks/use-fetch",9001]]),t=Array.from(e.entries()).map(([t,n])=>r.createElement(l.i.Tr,{key:t},r.createElement(l.i.Td,null,t),r.createElement(l.i.Td,null,n),r.createElement(l.i.Td,null,r.createElement(s.Z,null,r.createElement(c.A,{variant:"default",onClick:()=>e.set(t,n+1),fw:500},r.createElement(o.Z,{stroke:1.5,size:18})),r.createElement(c.A,{variant:"default",onClick:()=>e.delete(t),c:"red"},r.createElement(a.Z,{stroke:1.5,size:18}))))));return r.createElement(l.i,{layout:"fixed"},r.createElement(l.i.Thead,null,r.createElement(l.i.Tr,null,r.createElement(l.i.Th,null,"Page"),r.createElement(l.i.Th,null,"Views last month"),r.createElement(l.i.Th,null))),r.createElement(l.i.Tbody,null,t))},code:u}},48976:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var r=n(2784),Text=n(8582),o=n(45909),a=n(64261);let l=`
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
`,s={type:"code",component:function(){let{angle:e,type:t}=function(){let[e,t]=(0,r.useState)({angle:0,type:"landscape-primary"}),n=e=>{let n=e.currentTarget;t({angle:n?.angle||0,type:n?.type||"landscape-primary"})};return(0,a.Y)(()=>(window.screen.orientation?.addEventListener("change",n),()=>window.screen.orientation?.removeEventListener("change",n)),[]),e}();return r.createElement(r.Fragment,null,r.createElement(Text.x,null,"Angle: ",r.createElement(o.E,null,e)),r.createElement(Text.x,null,"Type: ",r.createElement(o.E,null,t)))},code:l}},72591:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(2784),o=n(45909),a=n(74770),l=n(65438),s=n(59114);let c=`
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
`,i={type:"code",component:function(){let[e,t]=(0,r.useState)(""),n=function(e){let t=(0,r.useRef)(new Set(e)),n=(0,s.N)();return t.current.add=(...e)=>{let r=Set.prototype.add.apply(t.current,e);return n(),r},t.current.clear=(...e)=>{Set.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Set.prototype.delete.apply(t.current,e);return n(),r},t.current}(["@mantine","@mantine-tests","@mantinex"]),c=n.has(e.trim().toLowerCase()),i=Array.from(n).map(e=>r.createElement(o.E,{key:e},e));return r.createElement(r.Fragment,null,r.createElement(a.o,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:e,onChange:e=>t(e.currentTarget.value),error:c&&"Scope already exists",onKeyDown:r=>{"Enter"!==r.nativeEvent.code||c||(n.add(e.trim().toLowerCase()),t(""))}}),r.createElement(l.K,{gap:5,align:"flex-start",mt:"md"},i))},code:c}},31840:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var r=n(2784),o=n(74770),Text=n(8582),a=n(7966);let l=`
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
`,s={type:"code",component:function(){let[e,t]=(0,r.useState)(""),n=function(e,t){let n=(0,a.W)(e),o=(0,r.useRef)(!0),l=(0,r.useRef)(-1),s=(0,r.useCallback)((...e)=>{o.current&&(o.current=!1,n(...e),l.current=window.setTimeout(()=>{o.current=!0},t))},[t]);return s}(e=>t(e),1e3);return r.createElement(r.Fragment,null,r.createElement(o.o,{placeholder:"Search",onChange:e=>n(e.currentTarget.value)}),r.createElement(Text.x,null,"Throttled value: ",e||"–"))},code:l}},75929:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var r=n(2784),o=n(74770),Text=n(8582);let a=`
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
`,l={type:"code",component:function(){let[e,t]=function(e,t){let[n,o]=(0,r.useState)(""),a=(0,r.useRef)(null),l=(0,r.useRef)(!0),s=()=>window.clearTimeout(a.current),c=(0,r.useCallback)(e=>{l.current&&(o(e),s(),l.current=!1,a.current=window.setTimeout(()=>{l.current=!0},t))},[t]);return(0,r.useEffect)(()=>s,[]),[n,c]}(0,1e3);return r.createElement(r.Fragment,null,r.createElement(o.o,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),r.createElement(Text.x,null,"Throttled value: ",e||"–"))},code:a}},91714:function(e,t,n){"use strict";n.d(t,{o:function(){return l}});var r=n(2784),o=n(74770),Text=n(8582);let a=`
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
`,l={type:"code",component:function(){let[e,t]=(0,r.useState)(""),n=function(e,t){let[n,o]=(0,r.useState)(e),a=(0,r.useRef)(e),l=(0,r.useRef)(!0),s=(0,r.useRef)(-1);return(0,r.useEffect)(()=>{l.current&&a.current!==e&&(o(e),a.current=e,window.clearTimeout(s.current),l.current=!1,s.current=window.setTimeout(()=>{l.current=!0},1e3))},[e]),(0,r.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n}(e,0);return r.createElement(r.Fragment,null,r.createElement(o.o,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),r.createElement(Text.x,null,"Throttled value: ",n||"–"))},code:a}},20992:function(e,t,n){"use strict";n.d(t,{f:function(){return g}});var r=n(2784),o=n(97263),a=n(11200),l=n(68755),s=n(38483),c=n(62378),i=n(28559),u=n(82027),d=n(12491),m=n(87170),h=n(96321),p={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let f={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,o.w)("overlay")},x=(0,a.Z)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),g=(0,u.d)((e,t)=>{let n=(0,s.w)("LoadingOverlay",f,e),{classNames:o,className:a,style:u,styles:g,unstyled:v,vars:b,transitionProps:j,loaderProps:y,overlayProps:T,visible:k,zIndex:w,...E}=n,S=(0,l.rZ)(),C=(0,c.y)({name:"LoadingOverlay",classes:p,props:n,className:a,style:u,classNames:o,styles:g,unstyled:v,vars:b,varsResolver:x}),I={...f.overlayProps,...T};return r.createElement(h.u,{transition:"fade",...j,mounted:!!k},e=>r.createElement(i.x,{...C("root",{style:e}),ref:t,...E},r.createElement(d.a,{...C("loader"),unstyled:v,...y}),r.createElement(m.a,{...I,...C("overlay"),darkHidden:!0,unstyled:v,color:T?.color||S.white}),r.createElement(m.a,{...I,...C("overlay"),lightHidden:!0,unstyled:v,color:T?.color||S.colors.dark[5]})))});g.classes=p,g.displayName="@mantine/core/LoadingOverlay"},90070:function(e,t,n){"use strict";function r(e,t){if("number"==typeof e)return t.length===e;let{max:n,min:r}=e,o=!0;return"number"==typeof n&&t.length>n&&(o=!1),"number"==typeof r&&t.length<r&&(o=!1),o}function o(e,t){let n=t||!0;return t=>"string"==typeof t?r(e,t.trim())?null:n:"object"==typeof t&&null!==t&&"length"in t&&r(e,t)?null:n}n.d(t,{d:function(){return o}})},51057:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(1328);function o(e){return(0,r.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},1328:function(e,t,n){"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{w:function(){return r}})}},function(e){e.O(0,[57938,17454,47747,59259,49774,92888,40179],function(){return e(e.s=65164)}),_N_E=e.O()}]);