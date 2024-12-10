(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19051],{91530:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-map",function(){return n(79403)}])},79403:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),a=n(45392),o=n(59292),s=n(25071),i=n(15019);let c=(0,s.A)(i.us.useMap);function l(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useMap"})," returns ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",children:"Map"}),"\nobject that can be used as React state – ",(0,r.jsx)(t.code,{children:"set"}),", ",(0,r.jsx)(t.code,{children:"clear"})," and ",(0,r.jsx)(t.code,{children:"delete"})," methods update state and trigger rerender."]}),"\n",(0,r.jsx)(n,{data:o.a}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useMap<T, V>(initialState?: [T, V][]): Map<T, V>;\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},19407:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(73681).Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},47813:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(73681).Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},59292:function(e,t,n){"use strict";n.d(t,{a:function(){return u}});var r=n(52322),a=n(19407),o=n(47813),s=n(96242),i=n(93010),c=n(15981),l=n(2784),d=n(59114);let u={type:"code",component:function(){let e=function(e){let t=(0,l.useRef)(new Map(e)),n=(0,d.N)();return t.current.set=(...e)=>(Map.prototype.set.apply(t.current,e),n(),t.current),t.current.clear=(...e)=>{Map.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Map.prototype.delete.apply(t.current,e);return n(),r},t.current}([["/hooks/use-media-query",4124],["/hooks/use-clipboard",8341],["/hooks/use-fetch",9001]]),t=Array.from(e.entries()).map(([t,n])=>(0,r.jsxs)(s.i.Tr,{children:[(0,r.jsx)(s.i.Td,{children:t}),(0,r.jsx)(s.i.Td,{children:n}),(0,r.jsx)(s.i.Td,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(c.A,{variant:"default",onClick:()=>e.set(t,n+1),fw:500,children:(0,r.jsx)(a.Z,{stroke:1.5,size:18})}),(0,r.jsx)(c.A,{variant:"default",onClick:()=>e.delete(t),c:"red",children:(0,r.jsx)(o.Z,{stroke:1.5,size:18})})]})})]},t));return(0,r.jsxs)(s.i,{layout:"fixed",children:[(0,r.jsx)(s.i.Thead,{children:(0,r.jsxs)(s.i.Tr,{children:[(0,r.jsx)(s.i.Th,{children:"Page"}),(0,r.jsx)(s.i.Th,{children:"Views last month"}),(0,r.jsx)(s.i.Th,{})]})}),(0,r.jsx)(s.i.Tbody,{children:t})]})},code:`
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
`}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=91530)}),_N_E=e.O()}]);