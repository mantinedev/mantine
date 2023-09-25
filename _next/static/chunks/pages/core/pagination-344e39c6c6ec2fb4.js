(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5028],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},12442:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return n(17062)}])},17062:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var o=n(85893),a=n(11151),r=n(19905),i=n(9904),l=n(67294),s=n(28636),c=Object.defineProperty,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&g(e,n,t[n]);return e};let h=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,f={type:"configurator",component:function(e){return l.createElement(s.t,m({total:10},e))},code:h,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var x=n(43557),v=n(40779),y=n(37068),b=Object.defineProperty,P=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&E(e,n,t[n]);if(P)for(var n of P(t))j.call(t,n)&&E(e,n,t[n]);return e};let w=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,M={type:"styles-api",data:y.E,component:function(e){return l.createElement(s.t,I({total:10},e))},code:w,centered:!0};var Z=n(16262);let T=`
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
`,V={type:"code",component:function(){return l.createElement(s.t.Root,{total:10},l.createElement(Z.Z,{gap:5,justify:"center"},l.createElement(s.t.First,null),l.createElement(s.t.Previous,null),l.createElement(s.t.Items,null),l.createElement(s.t.Next,null),l.createElement(s.t.Last,null)))},code:T},R=`
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

`,A={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(s.t,{total:10,withEdges:!0,getItemProps:e=>({component:"a",href:`#page-${e}`}),getControlProps:e=>"first"===e?{component:"a",href:"#page-0"}:"last"===e?{component:"a",href:"#page-10"}:"next"===e?{component:"a",href:"#page-2"}:"previous"===e?{component:"a",href:"#page-1"}:{}}),l.createElement(s.t.Root,{total:10,getItemProps:e=>({component:"a",href:`#page-${e}`})},l.createElement(Z.Z,{gap:7,mt:"xl"},l.createElement(s.t.First,{component:"a",href:"#page-0"}),l.createElement(s.t.Previous,{component:"a",href:"#page-1"}),l.createElement(s.t.Items,null),l.createElement(s.t.Next,{component:"a",href:"#page-2"}),l.createElement(s.t.Last,{component:"a",href:"#page-10"}))))},code:R};var L=n(4687),C=n(87393),O=n(54764),_=(0,O.Z)("arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),G=(0,O.Z)("arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),N=(0,O.Z)("grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let F=`
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
        position="center"
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
`,z={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(s.t,{total:10,withEdges:!0,nextIcon:L.Z,previousIcon:C.Z,firstIcon:_,lastIcon:G,dotsIcon:N}),l.createElement(s.t.Root,{total:10},l.createElement(Z.Z,{gap:7,mt:"xl"},l.createElement(s.t.First,{icon:_}),l.createElement(s.t.Previous,{icon:C.Z}),l.createElement(s.t.Items,{dotsIcon:N}),l.createElement(s.t.Next,{icon:L.Z}),l.createElement(s.t.Last,{icon:G}))))},code:F},B=(0,r.A)(i.us.Pagination);function D(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components),{Demo:n,StylesApiSelectors:r}=t;return n||H("Demo",!0),r||H("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:["To control component state provide ",(0,o.jsx)(t.code,{children:"value"})," and ",(0,o.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return <Pagination value={activePage} onChange={setPage} total={10} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(t.p,{children:["Control number of active item siblings with ",(0,o.jsx)(t.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(n,{data:x.d}),"\n",(0,o.jsx)(t.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(t.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(t.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(n,{data:v._}),"\n",(0,o.jsx)(r,{component:"Pagination"}),"\n",(0,o.jsx)(n,{data:M}),"\n",(0,o.jsx)(t.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(t.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(t.code,{children:"Modal"})," rendering:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:V}),"\n",(0,o.jsx)(t.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(n,{data:A}),"\n",(0,o.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(n,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(t.p,{children:["If you need more flexibility ",(0,o.jsx)(t.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(t.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(B,Object.assign({},e,{children:(0,o.jsx)(D,e)}))};function H(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87393:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},4687:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},40779:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var o=n(67294),a=n(72039),r=n(28636);let i=`
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
`,l={type:"code",code:i,component:function(){return o.createElement(o.Fragment,null,o.createElement(a.x,{mb:"xs"},"1 boundary (default)"),o.createElement(r.t,{total:20,boundaries:1,defaultValue:10}),o.createElement(a.x,{mt:"xl",mb:"xs"},"2 boundaries"),o.createElement(r.t,{total:20,boundaries:2,defaultValue:10}),o.createElement(a.x,{mt:"xl",mb:"xs"},"3 boundaries"),o.createElement(r.t,{total:20,boundaries:3,defaultValue:10}))}}},43557:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var o=n(67294),a=n(72039),r=n(28636);let i=`
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
`,l={type:"code",code:i,component:function(){return o.createElement(o.Fragment,null,o.createElement(a.x,{mb:"xs"},"1 sibling (default)"),o.createElement(r.t,{total:20,siblings:1,defaultValue:10}),o.createElement(a.x,{mb:"xs",mt:"xl"},"2 siblings"),o.createElement(r.t,{total:20,siblings:2,defaultValue:10}),o.createElement(a.x,{mb:"xs",mt:"xl"},"3 siblings"),o.createElement(r.t,{total:20,siblings:3,defaultValue:10}))}}}},function(e){e.O(0,[8992,178,8636,9774,2888,179],function(){return e(e.s=12442)}),_N_E=e.O()}]);