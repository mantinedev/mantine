(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62920],{2937:(t,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return n(61057)}])},61057:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>G});var o=n(31085),a=n(71184),i=n(48895);let r={type:"configurator",component:function(t){return(0,o.jsx)(i.d,{total:10,...t})},code:`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var s=n(14041),l=n(93065),c=n(63297);let d=`
import { useState } from 'react';
import { randomId } from '@mantine/hooks';
import { Pagination, Text } from '@mantine/core';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

function Demo() {
  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <Text key={item.id}>
      id: {item.id}, name: {item.name}
    </Text>
  ));

  return (
    <>
      {items}
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
`,p=function t(e,n){return e.length?[e.slice(0,n),...t(e.slice(n),n)]:[]}(Array(30).fill(0).map((t,e)=>({id:e,name:(0,c.z)()})),5),g={type:"code",component:function(){let[t,e]=(0,s.useState)(1),n=p[t-1].map(t=>(0,o.jsxs)(l.E,{children:["id: ",t.id,", name: ",t.name]},t.id));return(0,o.jsxs)(o.Fragment,{children:[n,(0,o.jsx)(i.d,{total:p.length,value:t,onChange:e,mt:"sm"})]})},code:d,centered:!0};var h=n(7925),u=n(70506),m=n(81160),x=n(4326);let f=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,v={type:"styles-api",data:x.$,component:function(t){return(0,o.jsx)(i.d,{total:10,...t})},code:f,centered:!0};var j=n(56051);let y={type:"code",component:function(){return(0,o.jsx)(i.d.Root,{total:10,children:(0,o.jsxs)(j.Y,{gap:5,justify:"center",children:[(0,o.jsx)(i.d.First,{}),(0,o.jsx)(i.d.Previous,{}),(0,o.jsx)(i.d.Items,{}),(0,o.jsx)(i.d.Next,{}),(0,o.jsx)(i.d.Last,{})]})})},code:`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`},P={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.d,{total:10,withEdges:!0,getItemProps:t=>({component:"a",href:`#page-${t}`}),getControlProps:t=>"first"===t?{component:"a",href:"#page-0"}:"last"===t?{component:"a",href:"#page-10"}:"next"===t?{component:"a",href:"#page-2"}:"previous"===t?{component:"a",href:"#page-1"}:{}}),(0,o.jsx)(i.d.Root,{total:10,getItemProps:t=>({component:"a",href:`#page-${t}`}),children:(0,o.jsxs)(j.Y,{gap:7,mt:"xl",children:[(0,o.jsx)(i.d.First,{component:"a",href:"#page-0"}),(0,o.jsx)(i.d.Previous,{component:"a",href:"#page-1"}),(0,o.jsx)(i.d.Items,{}),(0,o.jsx)(i.d.Next,{component:"a",href:"#page-2"}),(0,o.jsx)(i.d.Last,{component:"a",href:"#page-10"})]})})]})},code:`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}

`};var k=n(89689),b=n(80502),M=n(73366),I=(0,M.A)("outline","arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),w=(0,M.A)("outline","arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),A=(0,M.A)("outline","grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let T={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.d,{total:10,withEdges:!0,nextIcon:k.A,previousIcon:b.A,firstIcon:I,lastIcon:w,dotsIcon:A}),(0,o.jsx)(i.d.Root,{total:10,children:(0,o.jsxs)(j.Y,{gap:7,mt:"xl",children:[(0,o.jsx)(i.d.First,{icon:I}),(0,o.jsx)(i.d.Previous,{icon:b.A}),(0,o.jsx)(i.d.Items,{dotsIcon:A}),(0,o.jsx)(i.d.Next,{icon:k.A}),(0,o.jsx)(i.d.Last,{icon:w})]})})]})},code:`
import { Group, Pagination } from '@mantine/core';
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        firstIcon={IconArrowBarToLeft}
        lastIcon={IconArrowBarToRight}
        dotsIcon={IconGripHorizontal}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
        </Group>
      </Pagination.Root>
    </>
  );
}
`},C={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.E,{children:"autoContrast: off"}),(0,o.jsx)(i.d,{total:10,color:"lime.4"}),(0,o.jsx)(l.E,{mt:"md",children:"autoContrast: on"}),(0,o.jsx)(i.d,{total:10,autoContrast:!0,color:"lime.4"})]})},code:`
import { Pagination, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>autoContrast: off</Text>
      <Pagination total={10} color="lime.4" />

      <Text mt="md">autoContrast: on</Text>
      <Pagination total={10} autoContrast color="lime.4" />
    </>
  );
}`,centered:!0};var V=n(18675),E=n(20017);let R=(0,V.P)(E.XZ.Pagination);function z(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...t.components},{AutoContrast:n,Demo:i,StylesApiSelectors:s}=e;return n||L("AutoContrast",!0),i||L("Demo",!0),s||L("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(i,{data:r}),"\n",(0,o.jsx)(e.h2,{id:"example-with-chunked-content",children:"Example with chunked content"}),"\n",(0,o.jsx)(i,{data:g}),"\n",(0,o.jsx)(e.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(e.p,{children:["To control component state provide ",(0,o.jsx)(e.code,{children:"value"})," and ",(0,o.jsx)(e.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return (\n    <Pagination value={activePage} onChange={setPage} total={10} />\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(e.p,{children:["Control number of active item siblings with ",(0,o.jsx)(e.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(i,{data:h.w}),"\n",(0,o.jsx)(e.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(e.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(e.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(i,{data:u.l}),"\n",(0,o.jsx)(e.h2,{id:"hide-pages-controls",children:"Hide pages controls"}),"\n",(0,o.jsxs)(e.p,{children:["Set ",(0,o.jsx)(e.code,{children:"withPages={false}"})," to hide pages controls:"]}),"\n",(0,o.jsx)(i,{data:m.h}),"\n",(0,o.jsx)(s,{component:"Pagination"}),"\n",(0,o.jsx)(i,{data:v}),"\n",(0,o.jsx)(e.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(e.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(e.code,{children:"Pagination"})," rendering:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(i,{data:y}),"\n",(0,o.jsx)(e.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(i,{data:P}),"\n",(0,o.jsx)(e.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(i,{data:T}),"\n",(0,o.jsx)(n,{component:"Pagination",withVariant:!1}),"\n",(0,o.jsx)(i,{data:C}),"\n",(0,o.jsx)(e.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(e.p,{children:["If you need more flexibility ",(0,o.jsx)(e.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(e.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}function G(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(R,{...t,children:(0,o.jsx)(z,{...t})})}function L(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var o=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},70506:(t,e,n)=>{"use strict";n.d(e,{l:()=>r});var o=n(31085),a=n(93065),i=n(48895);let r={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.E,{mb:"xs",children:"1 boundary (default)"}),(0,o.jsx)(i.d,{total:20,boundaries:1,defaultValue:10}),(0,o.jsx)(a.E,{mt:"xl",mb:"xs",children:"2 boundaries"}),(0,o.jsx)(i.d,{total:20,boundaries:2,defaultValue:10}),(0,o.jsx)(a.E,{mt:"xl",mb:"xs",children:"3 boundaries"}),(0,o.jsx)(i.d,{total:20,boundaries:3,defaultValue:10})]})}}},7925:(t,e,n)=>{"use strict";n.d(e,{w:()=>r});var o=n(31085),a=n(93065),i=n(48895);let r={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.E,{mb:"xs",children:"1 sibling (default)"}),(0,o.jsx)(i.d,{total:20,siblings:1,defaultValue:10}),(0,o.jsx)(a.E,{mb:"xs",mt:"xl",children:"2 siblings"}),(0,o.jsx)(i.d,{total:20,siblings:2,defaultValue:10}),(0,o.jsx)(a.E,{mb:"xs",mt:"xl",children:"3 siblings"}),(0,o.jsx)(i.d,{total:20,siblings:3,defaultValue:10})]})}}},81160:(t,e,n)=>{"use strict";n.d(e,{h:()=>c});var o=n(31085),a=n(14041),i=n(56051),r=n(93065),s=n(48895);let l=Math.ceil(14.5),c={type:"code",component:function(){let[t,e]=(0,a.useState)(1),n=`Showing ${10*(t-1)+1} \u2013 ${Math.min(145,10*t)} of 145`;return(0,o.jsxs)(i.Y,{justify:"flex-end",children:[(0,o.jsx)(r.E,{size:"sm",children:n}),(0,o.jsx)(s.d,{total:l,value:t,onChange:e,withPages:!1})]})},code:`
import { useState } from 'react';
import { Group, Pagination, Text } from '@mantine/core';

const limit = 10;
const total = 145;
const totalPages = Math.ceil(total / limit);

function Demo() {
  const [page, setPage] = useState(1);
  const message = \`Showing \${limit * (page - 1) + 1} \u2013 \${Math.min(total, limit * page)} of \${total}\`;

  return (
    <Group justify="flex-end">
      <Text size="sm">{message}</Text>
      <Pagination total={totalPages} value={page} onChange={setPage} withPages={false} />
    </Group>
  );
}
`}}},t=>{var e=e=>t(t.s=e);t.O(0,[18675,48895,90636,46593,38792],()=>e(2937)),_N_E=t.O()}]);