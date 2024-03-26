(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15028],{9828:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return n(96195)}])},96195:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(52322),a=n(45392),i=n(2784),r=n(46159);let l=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,c={type:"configurator",component:function(e){return i.createElement(r.t,{total:10,...e})},code:l,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var Text=n(8582),s=n(73533);let m=`
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
`,u=function e(t,n){if(!t.length)return[];let o=t.slice(0,n),a=t.slice(n);return[o,...e(a,n)]}(Array(30).fill(0).map((e,t)=>({id:t,name:(0,s.k)()})),5),p={type:"code",component:function(){let[e,t]=(0,i.useState)(1),n=u[e-1].map(e=>i.createElement(Text.x,{key:e.id},"id: ",e.id,", name: ",e.name));return i.createElement(i.Fragment,null,n,i.createElement(r.t,{total:u.length,value:e,onChange:t,mt:"sm"}))},code:m,centered:!0};var d=n(22188),g=n(96183),h=n(35150);let x=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,f={type:"styles-api",data:h.E,component:function(e){return i.createElement(r.t,{total:10,...e})},code:x,centered:!0};var P=n(93010);let b=`
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
`,E={type:"code",component:function(){return i.createElement(r.t.Root,{total:10},i.createElement(P.Z,{gap:5,justify:"center"},i.createElement(r.t.First,null),i.createElement(r.t.Previous,null),i.createElement(r.t.Items,null),i.createElement(r.t.Next,null),i.createElement(r.t.Last,null)))},code:b},y=`
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

`,j={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(r.t,{total:10,withEdges:!0,getItemProps:e=>({component:"a",href:`#page-${e}`}),getControlProps:e=>"first"===e?{component:"a",href:"#page-0"}:"last"===e?{component:"a",href:"#page-10"}:"next"===e?{component:"a",href:"#page-2"}:"previous"===e?{component:"a",href:"#page-1"}:{}}),i.createElement(r.t.Root,{total:10,getItemProps:e=>({component:"a",href:`#page-${e}`})},i.createElement(P.Z,{gap:7,mt:"xl"},i.createElement(r.t.First,{component:"a",href:"#page-0"}),i.createElement(r.t.Previous,{component:"a",href:"#page-1"}),i.createElement(r.t.Items,null),i.createElement(r.t.Next,{component:"a",href:"#page-2"}),i.createElement(r.t.Last,{component:"a",href:"#page-10"}))))},code:y};var v=n(4521),I=n(8113),k=n(99882),w=(0,k.Z)("arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),T=(0,k.Z)("arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),V=(0,k.Z)("grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let C=`
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
`,A={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(r.t,{total:10,withEdges:!0,nextIcon:v.Z,previousIcon:I.Z,firstIcon:w,lastIcon:T,dotsIcon:V}),i.createElement(r.t.Root,{total:10},i.createElement(P.Z,{gap:7,mt:"xl"},i.createElement(r.t.First,{icon:w}),i.createElement(r.t.Previous,{icon:I.Z}),i.createElement(r.t.Items,{dotsIcon:V}),i.createElement(r.t.Next,{icon:v.Z}),i.createElement(r.t.Last,{icon:T}))))},code:C},R=`
function Demo() {
  return (
    <>
      <Text>autoContrast: off</Text>
      <Pagination total={10} color="lime.4" />

      <Text mt="md">autoContrast: on</Text>
      <Pagination total={10} autoContrast color="lime.4" />
    </>
  );
}`,_={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(Text.x,null,"autoContrast: off"),i.createElement(r.t,{total:10,color:"lime.4"}),i.createElement(Text.x,{mt:"md"},"autoContrast: on"),i.createElement(r.t,{total:10,autoContrast:!0,color:"lime.4"}))},code:R,centered:!0};var F=n(79016),L=n(33638);let M=(0,F.A)(L.us.Pagination);function G(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{AutoContrast:n,Demo:i,StylesApiSelectors:r}=t;return n||z("AutoContrast",!0),i||z("Demo",!0),r||z("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(i,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"example-with-chunked-content",children:"Example with chunked content"}),"\n",(0,o.jsx)(i,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:["To control component state provide ",(0,o.jsx)(t.code,{children:"value"})," and ",(0,o.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return (\n    <Pagination value={activePage} onChange={setPage} total={10} />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(t.p,{children:["Control number of active item siblings with ",(0,o.jsx)(t.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(i,{data:d.d}),"\n",(0,o.jsx)(t.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(t.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(t.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(i,{data:g._}),"\n",(0,o.jsx)(r,{component:"Pagination"}),"\n",(0,o.jsx)(i,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(t.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(t.code,{children:"Pagination"})," rendering:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(i,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(i,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(i,{data:A}),"\n",(0,o.jsx)(n,{component:"Pagination",withVariant:!1}),"\n",(0,o.jsx)(i,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(t.p,{children:["If you need more flexibility ",(0,o.jsx)(t.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(t.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(M,{...e,children:(0,o.jsx)(G,{...e})})}function z(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},96183:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var o=n(2784),a=n(8582),i=n(46159);let r=`
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
`,l={type:"code",code:r,component:function(){return o.createElement(o.Fragment,null,o.createElement(a.x,{mb:"xs"},"1 boundary (default)"),o.createElement(i.t,{total:20,boundaries:1,defaultValue:10}),o.createElement(a.x,{mt:"xl",mb:"xs"},"2 boundaries"),o.createElement(i.t,{total:20,boundaries:2,defaultValue:10}),o.createElement(a.x,{mt:"xl",mb:"xs"},"3 boundaries"),o.createElement(i.t,{total:20,boundaries:3,defaultValue:10}))}}},22188:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var o=n(2784),a=n(8582),i=n(46159);let r=`
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
`,l={type:"code",code:r,component:function(){return o.createElement(o.Fragment,null,o.createElement(a.x,{mb:"xs"},"1 sibling (default)"),o.createElement(i.t,{total:20,siblings:1,defaultValue:10}),o.createElement(a.x,{mb:"xs",mt:"xl"},"2 siblings"),o.createElement(i.t,{total:20,siblings:2,defaultValue:10}),o.createElement(a.x,{mb:"xs",mt:"xl"},"3 siblings"),o.createElement(i.t,{total:20,siblings:3,defaultValue:10}))}}}},function(e){e.O(0,[57938,17454,47747,46159,49774,92888,40179],function(){return e(e.s=9828)}),_N_E=e.O()}]);