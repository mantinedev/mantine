(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15028],{70704:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return t(34905)}])},34905:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var o=t(24246),a=t(71670),r=t(27378),i=t(41307);let c=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,l={type:"configurator",component:function(e){return r.createElement(i.t,{total:10,...e})},code:c,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var Text=t(26569),s=t(55574);let p=`
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
`,m=function e(n,t){if(!n.length)return[];let o=n.slice(0,t),a=n.slice(t);return[o,...e(a,t)]}(Array(30).fill(0).map((e,n)=>({id:n,name:(0,s.k)()})),5),d={type:"code",component:function(){let[e,n]=(0,r.useState)(1),t=m[e-1].map(e=>r.createElement(Text.x,{key:e.id},"id: ",e.id,", name: ",e.name));return r.createElement(r.Fragment,null,t,r.createElement(i.t,{total:m.length,value:e,onChange:n,mt:"sm"}))},code:p,centered:!0};var g=t(33585),u=t(74360),h=t(37731);let f=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,x={type:"styles-api",data:h.E,component:function(e){return r.createElement(i.t,{total:10,...e})},code:f,centered:!0};var P=t(22971);let j=`
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
`,y={type:"code",component:function(){return r.createElement(i.t.Root,{total:10},r.createElement(P.Z,{gap:5,justify:"center"},r.createElement(i.t.First,null),r.createElement(i.t.Previous,null),r.createElement(i.t.Items,null),r.createElement(i.t.Next,null),r.createElement(i.t.Last,null)))},code:j},v=`
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

`,E={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(i.t,{total:10,withEdges:!0,getItemProps:e=>({component:"a",href:`#page-${e}`}),getControlProps:e=>"first"===e?{component:"a",href:"#page-0"}:"last"===e?{component:"a",href:"#page-10"}:"next"===e?{component:"a",href:"#page-2"}:"previous"===e?{component:"a",href:"#page-1"}:{}}),r.createElement(i.t.Root,{total:10,getItemProps:e=>({component:"a",href:`#page-${e}`})},r.createElement(P.Z,{gap:7,mt:"xl"},r.createElement(i.t.First,{component:"a",href:"#page-0"}),r.createElement(i.t.Previous,{component:"a",href:"#page-1"}),r.createElement(i.t.Items,null),r.createElement(i.t.Next,{component:"a",href:"#page-2"}),r.createElement(i.t.Last,{component:"a",href:"#page-10"}))))},code:v};var I=t(4687),k=t(87393),w=t(54764),b=(0,w.Z)("arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),R=(0,w.Z)("arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),A=(0,w.Z)("grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let C=`
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
`,T={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(i.t,{total:10,withEdges:!0,nextIcon:I.Z,previousIcon:k.Z,firstIcon:b,lastIcon:R,dotsIcon:A}),r.createElement(i.t.Root,{total:10},r.createElement(P.Z,{gap:7,mt:"xl"},r.createElement(i.t.First,{icon:b}),r.createElement(i.t.Previous,{icon:k.Z}),r.createElement(i.t.Items,{dotsIcon:A}),r.createElement(i.t.Next,{icon:I.Z}),r.createElement(i.t.Last,{icon:R}))))},code:C};var L=t(3916),M=t(54568);let _=(0,L.A)(M.us.Pagination);function G(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:t,StylesApiSelectors:r}=n;return t||z("Demo",!0),r||z("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(n.h2,{id:"example-with-chunked-content",children:"Example with chunked content"}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(n.p,{children:["To control component state provide ",(0,o.jsx)(n.code,{children:"value"})," and ",(0,o.jsx)(n.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return (\n    <Pagination value={activePage} onChange={setPage} total={10} />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of active item siblings with ",(0,o.jsx)(n.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(t,{data:g.d}),"\n",(0,o.jsx)(n.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(n.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(t,{data:u._}),"\n",(0,o.jsx)(r,{component:"Pagination"}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(n.code,{children:"Pagination"})," rendering:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(n.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(t,{data:E}),"\n",(0,o.jsx)(n.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(t,{data:T}),"\n",(0,o.jsx)(n.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(n.p,{children:["If you need more flexibility ",(0,o.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(n.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(_,{...e,children:(0,o.jsx)(G,{...e})})}function z(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[30370,15819,2775,91457,49774,92888,40179],function(){return e(e.s=70704)}),_N_E=e.O()}]);