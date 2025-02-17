(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46045],{30097:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-map",function(){return t(67624)}])},67624:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var a=t(31085),n=t(71184),s=t(15395),o=t(85954),l=t(38215);let c=(0,o.P)(l.XZ.useMap);function d(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"useMap"})," returns ",(0,a.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",children:"Map"}),"\nobject that can be used as React state – ",(0,a.jsx)(r.code,{children:"set"}),", ",(0,a.jsx)(r.code,{children:"clear"})," and ",(0,a.jsx)(r.code,{children:"delete"})," methods update state and trigger rerender."]}),"\n",(0,a.jsx)(t,{data:s.t}),"\n",(0,a.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:"function useMap<T, V>(initialState?: [T, V][]): Map<T, V>;\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(c,{...e,children:(0,a.jsx)(d,{...e})})}},61410:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var a=(0,t(73366).A)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},13660:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var a=(0,t(73366).A)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},15395:(e,r,t)=>{"use strict";t.d(r,{t:()=>h});var a=t(31085),n=t(61410),s=t(13660),o=t(75447),l=t(56051),c=t(22962),d=t(14041),i=t(4755);let h={type:"code",component:function(){let e=function(e){let r=(0,d.useRef)(new Map(e)),t=(0,i.C)();return r.current.set=(...e)=>(Map.prototype.set.apply(r.current,e),t(),r.current),r.current.clear=(...e)=>{Map.prototype.clear.apply(r.current,e),t()},r.current.delete=(...e)=>{let a=Map.prototype.delete.apply(r.current,e);return t(),a},r.current}([["/hooks/use-media-query",4124],["/hooks/use-clipboard",8341],["/hooks/use-fetch",9001]]),r=Array.from(e.entries()).map(([r,t])=>(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Td,{children:r}),(0,a.jsx)(o.X.Td,{children:t}),(0,a.jsx)(o.X.Td,{children:(0,a.jsxs)(l.Y,{children:[(0,a.jsx)(c.M,{variant:"default",onClick:()=>e.set(r,t+1),fw:500,children:(0,a.jsx)(n.A,{stroke:1.5,size:18})}),(0,a.jsx)(c.M,{variant:"default",onClick:()=>e.delete(r),c:"red",children:(0,a.jsx)(s.A,{stroke:1.5,size:18})})]})})]},r));return(0,a.jsxs)(o.X,{layout:"fixed",children:[(0,a.jsx)(o.X.Thead,{children:(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Page"}),(0,a.jsx)(o.X.Th,{children:"Views last month"}),(0,a.jsx)(o.X.Th,{})]})}),(0,a.jsx)(o.X.Tbody,{children:r})]})},code:`
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
`}}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,39699,68831,90636,46593,38792],()=>r(30097)),_N_E=e.O()}]);