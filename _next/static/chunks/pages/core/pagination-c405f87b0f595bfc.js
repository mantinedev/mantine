(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5028],{70704:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return t(34905)}])},34905:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var o=t(24246),a=t(71670),r=t(3916),i=t(30289),c=t(27378),l=t(78060);let s=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,p={type:"configurator",component:function(e){return c.createElement(l.t,{total:10,...e})},code:s,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var m=t(55574),Text=t(26569);let d=`
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
`,g=function e(n,t){if(!n.length)return[];let o=n.slice(0,t),a=n.slice(t);return[o,...e(a,t)]}(Array(30).fill(0).map((e,n)=>({id:n,name:(0,m.k)()})),5),u={type:"code",component:function(){let[e,n]=(0,c.useState)(1),t=g[e-1].map(e=>c.createElement(Text.x,{key:e.id},"id: ",e.id,", name: ",e.name));return c.createElement(c.Fragment,null,t,c.createElement(l.t,{total:g.length,value:e,onChange:n,mt:"sm"}))},code:d,centered:!0};var h=t(33585),f=t(74360),x=t(37731);let P=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,j={type:"styles-api",data:x.E,component:function(e){return c.createElement(l.t,{total:10,...e})},code:P,centered:!0};var y=t(22971);let v=`
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
`,E={type:"code",component:function(){return c.createElement(l.t.Root,{total:10},c.createElement(y.Z,{gap:5,justify:"center"},c.createElement(l.t.First,null),c.createElement(l.t.Previous,null),c.createElement(l.t.Items,null),c.createElement(l.t.Next,null),c.createElement(l.t.Last,null)))},code:v},I=`
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

`,k={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(l.t,{total:10,withEdges:!0,getItemProps:e=>({component:"a",href:`#page-${e}`}),getControlProps:e=>"first"===e?{component:"a",href:"#page-0"}:"last"===e?{component:"a",href:"#page-10"}:"next"===e?{component:"a",href:"#page-2"}:"previous"===e?{component:"a",href:"#page-1"}:{}}),c.createElement(l.t.Root,{total:10,getItemProps:e=>({component:"a",href:`#page-${e}`})},c.createElement(y.Z,{gap:7,mt:"xl"},c.createElement(l.t.First,{component:"a",href:"#page-0"}),c.createElement(l.t.Previous,{component:"a",href:"#page-1"}),c.createElement(l.t.Items,null),c.createElement(l.t.Next,{component:"a",href:"#page-2"}),c.createElement(l.t.Last,{component:"a",href:"#page-10"}))))},code:I};var w=t(4687),b=t(87393),R=t(54764),A=(0,R.Z)("arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),C=(0,R.Z)("arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),T=(0,R.Z)("grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let M=`
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
`,L={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(l.t,{total:10,withEdges:!0,nextIcon:w.Z,previousIcon:b.Z,firstIcon:A,lastIcon:C,dotsIcon:T}),c.createElement(l.t.Root,{total:10},c.createElement(y.Z,{gap:7,mt:"xl"},c.createElement(l.t.First,{icon:A}),c.createElement(l.t.Previous,{icon:b.Z}),c.createElement(l.t.Items,{dotsIcon:T}),c.createElement(l.t.Next,{icon:w.Z}),c.createElement(l.t.Last,{icon:C}))))},code:M},_=(0,r.A)(i.us.Pagination);function G(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:t,StylesApiSelectors:r}=n;return t||z("Demo",!0),r||z("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"example-with-chunked-content",children:"Example with chunked content"}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(n.p,{children:["To control component state provide ",(0,o.jsx)(n.code,{children:"value"})," and ",(0,o.jsx)(n.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return (\n    <Pagination value={activePage} onChange={setPage} total={10} />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of active item siblings with ",(0,o.jsx)(n.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(t,{data:h.d}),"\n",(0,o.jsx)(n.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(n.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(t,{data:f._}),"\n",(0,o.jsx)(r,{component:"Pagination"}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(n.code,{children:"Modal"})," rendering:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:E}),"\n",(0,o.jsx)(n.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsx)(n.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(t,{data:L}),"\n",(0,o.jsx)(n.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(n.p,{children:["If you need more flexibility ",(0,o.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(n.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(_,{...e,children:(0,o.jsx)(G,{...e})})}function z(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,1457,9774,2888,179],function(){return e(e.s=70704)}),_N_E=e.O()}]);