(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15028],{9828:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return e(80550)}])},80550:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return z}});var o=e(52322),a=e(45392),i=e(46159);let r={type:"configurator",component:function(t){return(0,o.jsx)(i.t,{total:10,...t})},code:`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var s=e(2784),l=e(8582),c=e(73533);let d=`
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
`,u=function t(n,e){return n.length?[n.slice(0,e),...t(n.slice(e),e)]:[]}(Array(30).fill(0).map((t,n)=>({id:n,name:(0,c.k)()})),5),p={type:"code",component:function(){let[t,n]=(0,s.useState)(1),e=u[t-1].map(t=>(0,o.jsxs)(l.x,{children:["id: ",t.id,", name: ",t.name]},t.id));return(0,o.jsxs)(o.Fragment,{children:[e,(0,o.jsx)(i.t,{total:u.length,value:t,onChange:n,mt:"sm"})]})},code:d,centered:!0};var m=e(22188),g=e(96183),x=e(49884),h=e(35150);let f=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,j={type:"styles-api",data:h.E,component:function(t){return(0,o.jsx)(i.t,{total:10,...t})},code:f,centered:!0};var P=e(93010);let b={type:"code",component:function(){return(0,o.jsx)(i.t.Root,{total:10,children:(0,o.jsxs)(P.Z,{gap:5,justify:"center",children:[(0,o.jsx)(i.t.First,{}),(0,o.jsx)(i.t.Previous,{}),(0,o.jsx)(i.t.Items,{}),(0,o.jsx)(i.t.Next,{}),(0,o.jsx)(i.t.Last,{})]})})},code:`
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
`},y={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.t,{total:10,withEdges:!0,getItemProps:t=>({component:"a",href:`#page-${t}`}),getControlProps:t=>"first"===t?{component:"a",href:"#page-0"}:"last"===t?{component:"a",href:"#page-10"}:"next"===t?{component:"a",href:"#page-2"}:"previous"===t?{component:"a",href:"#page-1"}:{}}),(0,o.jsx)(i.t.Root,{total:10,getItemProps:t=>({component:"a",href:`#page-${t}`}),children:(0,o.jsxs)(P.Z,{gap:7,mt:"xl",children:[(0,o.jsx)(i.t.First,{component:"a",href:"#page-0"}),(0,o.jsx)(i.t.Previous,{component:"a",href:"#page-1"}),(0,o.jsx)(i.t.Items,{}),(0,o.jsx)(i.t.Next,{component:"a",href:"#page-2"}),(0,o.jsx)(i.t.Last,{component:"a",href:"#page-10"})]})})]})},code:`
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

`};var v=e(10631),I=e(66041),w=e(73681),T=(0,w.Z)("outline","arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),k=(0,w.Z)("outline","arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),C=(0,w.Z)("outline","grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let V={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.t,{total:10,withEdges:!0,nextIcon:v.Z,previousIcon:I.Z,firstIcon:T,lastIcon:k,dotsIcon:C}),(0,o.jsx)(i.t.Root,{total:10,children:(0,o.jsxs)(P.Z,{gap:7,mt:"xl",children:[(0,o.jsx)(i.t.First,{icon:T}),(0,o.jsx)(i.t.Previous,{icon:I.Z}),(0,o.jsx)(i.t.Items,{dotsIcon:C}),(0,o.jsx)(i.t.Next,{icon:v.Z}),(0,o.jsx)(i.t.Last,{icon:k})]})})]})},code:`
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
`},A={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.x,{children:"autoContrast: off"}),(0,o.jsx)(i.t,{total:10,color:"lime.4"}),(0,o.jsx)(l.x,{mt:"md",children:"autoContrast: on"}),(0,o.jsx)(i.t,{total:10,autoContrast:!0,color:"lime.4"})]})},code:`
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
}`,centered:!0};var R=e(54078),M=e(15019);let G=(0,R.A)(M.us.Pagination);function _(t){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...t.components},{AutoContrast:e,Demo:i,StylesApiSelectors:s}=n;return e||E("AutoContrast",!0),i||E("Demo",!0),s||E("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(i,{data:r}),"\n",(0,o.jsx)(n.h2,{id:"example-with-chunked-content",children:"Example with chunked content"}),"\n",(0,o.jsx)(i,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(n.p,{children:["To control component state provide ",(0,o.jsx)(n.code,{children:"value"})," and ",(0,o.jsx)(n.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return (\n    <Pagination value={activePage} onChange={setPage} total={10} />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of active item siblings with ",(0,o.jsx)(n.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(i,{data:m.d}),"\n",(0,o.jsx)(n.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(n.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(i,{data:g._}),"\n",(0,o.jsx)(n.h2,{id:"hide-pages-controls",children:"Hide pages controls"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"withPages={false}"})," to hide pages controls:"]}),"\n",(0,o.jsx)(i,{data:x.c}),"\n",(0,o.jsx)(s,{component:"Pagination"}),"\n",(0,o.jsx)(i,{data:j}),"\n",(0,o.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(n.code,{children:"Pagination"})," rendering:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(i,{data:b}),"\n",(0,o.jsx)(n.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(i,{data:y}),"\n",(0,o.jsx)(n.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(i,{data:V}),"\n",(0,o.jsx)(e,{component:"Pagination",withVariant:!1}),"\n",(0,o.jsx)(i,{data:A}),"\n",(0,o.jsx)(n.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(n.p,{children:["If you need more flexibility ",(0,o.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(n.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}function z(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(G,{...t,children:(0,o.jsx)(_,{...t})})}function E(t,n){throw Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},96183:function(t,n,e){"use strict";e.d(n,{_:function(){return r}});var o=e(52322),a=e(8582),i=e(46159);let r={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.x,{mb:"xs",children:"1 boundary (default)"}),(0,o.jsx)(i.t,{total:20,boundaries:1,defaultValue:10}),(0,o.jsx)(a.x,{mt:"xl",mb:"xs",children:"2 boundaries"}),(0,o.jsx)(i.t,{total:20,boundaries:2,defaultValue:10}),(0,o.jsx)(a.x,{mt:"xl",mb:"xs",children:"3 boundaries"}),(0,o.jsx)(i.t,{total:20,boundaries:3,defaultValue:10})]})}}},22188:function(t,n,e){"use strict";e.d(n,{d:function(){return r}});var o=e(52322),a=e(8582),i=e(46159);let r={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.x,{mb:"xs",children:"1 sibling (default)"}),(0,o.jsx)(i.t,{total:20,siblings:1,defaultValue:10}),(0,o.jsx)(a.x,{mb:"xs",mt:"xl",children:"2 siblings"}),(0,o.jsx)(i.t,{total:20,siblings:2,defaultValue:10}),(0,o.jsx)(a.x,{mb:"xs",mt:"xl",children:"3 siblings"}),(0,o.jsx)(i.t,{total:20,siblings:3,defaultValue:10})]})}}},49884:function(t,n,e){"use strict";e.d(n,{c:function(){return c}});var o=e(52322),a=e(2784),i=e(93010),r=e(8582),s=e(46159);let l=Math.ceil(14.5),c={type:"code",component:function(){let[t,n]=(0,a.useState)(1),e=`Showing ${10*(t-1)+1} \u2013 ${Math.min(145,10*t)} of 145`;return(0,o.jsxs)(i.Z,{justify:"flex-end",children:[(0,o.jsx)(r.x,{size:"sm",children:e}),(0,o.jsx)(s.t,{total:l,value:t,onChange:n,withPages:!1})]})},code:`
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
      <Pagination total={totalPages} value={page} onChange={setPage} />
    </Group>
  );
}
`}}},function(t){t.O(0,[61177,66748,61639,46159,92888,49774,40179],function(){return t(t.s=9828)}),_N_E=t.O()}]);