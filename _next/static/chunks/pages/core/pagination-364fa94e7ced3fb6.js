(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15028],{9828:function(t,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return o(80550)}])},80550:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return F}});var e=o(52322),a=o(45392),i=o(46159);let r={type:"configurator",component:function(t){return(0,e.jsx)(i.t,{total:10,...t})},code:`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var s=o(2784),l=o(8582),c=o(73533);let d=`
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
`,u=function t(n,o){return n.length?[n.slice(0,o),...t(n.slice(o),o)]:[]}(Array(30).fill(0).map((t,n)=>({id:n,name:(0,c.k)()})),5),p={type:"code",component:function(){let[t,n]=(0,s.useState)(1),o=u[t-1].map(t=>(0,e.jsxs)(l.x,{children:["id: ",t.id,", name: ",t.name]},t.id));return(0,e.jsxs)(e.Fragment,{children:[o,(0,e.jsx)(i.t,{total:u.length,value:t,onChange:n,mt:"sm"})]})},code:d,centered:!0};var m=o(22188),g=o(96183),x=o(35150);let h=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,f={type:"styles-api",data:x.E,component:function(t){return(0,e.jsx)(i.t,{total:10,...t})},code:h,centered:!0};var j=o(93010);let P={type:"code",component:function(){return(0,e.jsx)(i.t.Root,{total:10,children:(0,e.jsxs)(j.Z,{gap:5,justify:"center",children:[(0,e.jsx)(i.t.First,{}),(0,e.jsx)(i.t.Previous,{}),(0,e.jsx)(i.t.Items,{}),(0,e.jsx)(i.t.Next,{}),(0,e.jsx)(i.t.Last,{})]})})},code:`
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
`},b={type:"code",component:function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.t,{total:10,withEdges:!0,getItemProps:t=>({component:"a",href:`#page-${t}`}),getControlProps:t=>"first"===t?{component:"a",href:"#page-0"}:"last"===t?{component:"a",href:"#page-10"}:"next"===t?{component:"a",href:"#page-2"}:"previous"===t?{component:"a",href:"#page-1"}:{}}),(0,e.jsx)(i.t.Root,{total:10,getItemProps:t=>({component:"a",href:`#page-${t}`}),children:(0,e.jsxs)(j.Z,{gap:7,mt:"xl",children:[(0,e.jsx)(i.t.First,{component:"a",href:"#page-0"}),(0,e.jsx)(i.t.Previous,{component:"a",href:"#page-1"}),(0,e.jsx)(i.t.Items,{}),(0,e.jsx)(i.t.Next,{component:"a",href:"#page-2"}),(0,e.jsx)(i.t.Last,{component:"a",href:"#page-10"})]})})]})},code:`
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

`};var y=o(10631),v=o(66041),I=o(73681),T=(0,I.Z)("outline","arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),k=(0,I.Z)("outline","arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),w=(0,I.Z)("outline","grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let V={type:"code",component:function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.t,{total:10,withEdges:!0,nextIcon:y.Z,previousIcon:v.Z,firstIcon:T,lastIcon:k,dotsIcon:w}),(0,e.jsx)(i.t.Root,{total:10,children:(0,e.jsxs)(j.Z,{gap:7,mt:"xl",children:[(0,e.jsx)(i.t.First,{icon:T}),(0,e.jsx)(i.t.Previous,{icon:v.Z}),(0,e.jsx)(i.t.Items,{dotsIcon:w}),(0,e.jsx)(i.t.Next,{icon:y.Z}),(0,e.jsx)(i.t.Last,{icon:k})]})})]})},code:`
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
`},C={type:"code",component:function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.x,{children:"autoContrast: off"}),(0,e.jsx)(i.t,{total:10,color:"lime.4"}),(0,e.jsx)(l.x,{mt:"md",children:"autoContrast: on"}),(0,e.jsx)(i.t,{total:10,autoContrast:!0,color:"lime.4"})]})},code:`
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
}`,centered:!0};var A=o(25071),R=o(15019);let _=(0,A.A)(R.us.Pagination);function E(t){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...t.components},{AutoContrast:o,Demo:i,StylesApiSelectors:s}=n;return o||L("AutoContrast",!0),i||L("Demo",!0),s||L("StylesApiSelectors",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsx)(i,{data:r}),"\n",(0,e.jsx)(n.h2,{id:"example-with-chunked-content",children:"Example with chunked content"}),"\n",(0,e.jsx)(i,{data:p}),"\n",(0,e.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,e.jsxs)(n.p,{children:["To control component state provide ",(0,e.jsx)(n.code,{children:"value"})," and ",(0,e.jsx)(n.code,{children:"onChange"})," props:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return (\n    <Pagination value={activePage} onChange={setPage} total={10} />\n  );\n}\n"})}),"\n",(0,e.jsx)(n.h2,{id:"siblings",children:"Siblings"}),"\n",(0,e.jsxs)(n.p,{children:["Control number of active item siblings with ",(0,e.jsx)(n.code,{children:"siblings"})," prop:"]}),"\n",(0,e.jsx)(i,{data:m.d}),"\n",(0,e.jsx)(n.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,e.jsxs)(n.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,e.jsx)(n.code,{children:"boundaries"})," prop:"]}),"\n",(0,e.jsx)(i,{data:g._}),"\n",(0,e.jsx)(s,{component:"Pagination"}),"\n",(0,e.jsx)(i,{data:f}),"\n",(0,e.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,e.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,e.jsx)(n.code,{children:"Pagination"})," rendering:"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,e.jsx)(i,{data:P}),"\n",(0,e.jsx)(n.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,e.jsx)(i,{data:b}),"\n",(0,e.jsx)(n.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,e.jsx)(i,{data:V}),"\n",(0,e.jsx)(o,{component:"Pagination",withVariant:!1}),"\n",(0,e.jsx)(i,{data:C}),"\n",(0,e.jsx)(n.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,e.jsxs)(n.p,{children:["If you need more flexibility ",(0,e.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,e.jsx)(n.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}function F(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(_,{...t,children:(0,e.jsx)(E,{...t})})}function L(t,n){throw Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},96183:function(t,n,o){"use strict";o.d(n,{_:function(){return r}});var e=o(52322),a=o(8582),i=o(46159);let r={type:"code",code:`
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
`,component:function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.x,{mb:"xs",children:"1 boundary (default)"}),(0,e.jsx)(i.t,{total:20,boundaries:1,defaultValue:10}),(0,e.jsx)(a.x,{mt:"xl",mb:"xs",children:"2 boundaries"}),(0,e.jsx)(i.t,{total:20,boundaries:2,defaultValue:10}),(0,e.jsx)(a.x,{mt:"xl",mb:"xs",children:"3 boundaries"}),(0,e.jsx)(i.t,{total:20,boundaries:3,defaultValue:10})]})}}},22188:function(t,n,o){"use strict";o.d(n,{d:function(){return r}});var e=o(52322),a=o(8582),i=o(46159);let r={type:"code",code:`
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
`,component:function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.x,{mb:"xs",children:"1 sibling (default)"}),(0,e.jsx)(i.t,{total:20,siblings:1,defaultValue:10}),(0,e.jsx)(a.x,{mb:"xs",mt:"xl",children:"2 siblings"}),(0,e.jsx)(i.t,{total:20,siblings:2,defaultValue:10}),(0,e.jsx)(a.x,{mb:"xs",mt:"xl",children:"3 siblings"}),(0,e.jsx)(i.t,{total:20,siblings:3,defaultValue:10})]})}}}},function(t){t.O(0,[61177,66748,11340,46159,92888,49774,40179],function(){return t(t.s=9828)}),_N_E=t.O()}]);