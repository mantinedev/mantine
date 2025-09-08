(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46045],{1798:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},20790:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var s=a(6029),l=a(16285),r=a(30644),d=a(38547),n=a(5262);let o=(0,d.P)(n.XZ.useMap);function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useMap"})," returns ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",children:"Map"}),"\nobject that can be used as React state – ",(0,s.jsx)(t.code,{children:"set"}),", ",(0,s.jsx)(t.code,{children:"clear"})," and ",(0,s.jsx)(t.code,{children:"delete"})," methods update state and trigger rerender."]}),"\n",(0,s.jsx)(a,{data:r.t}),"\n",(0,s.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"function useMap<T, V>(initialState?: [T, V][]): Map<T, V>;\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})})}},23195:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","plus","Plus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},24583:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},30644:(e,t,a)=>{"use strict";a.d(t,{t:()=>c});var s=a(6029),l=a(23195),r=a(90993),d=a(19577),n=a(57414),o=a(44572),h=a(55729),i=a(91686);let c={type:"code",component:function(){let e=function(e){let t=(0,h.useRef)(new Map(e)),a=(0,i.C)();return t.current.set=(...e)=>(Map.prototype.set.apply(t.current,e),a(),t.current),t.current.clear=(...e)=>{Map.prototype.clear.apply(t.current,e),a()},t.current.delete=(...e)=>{let s=Map.prototype.delete.apply(t.current,e);return a(),s},t.current}([["/hooks/use-media-query",4124],["/hooks/use-clipboard",8341],["/hooks/use-fetch",9001]]),t=Array.from(e.entries()).map(([t,a])=>(0,s.jsxs)(d.X.Tr,{children:[(0,s.jsx)(d.X.Td,{children:t}),(0,s.jsx)(d.X.Td,{children:a}),(0,s.jsx)(d.X.Td,{children:(0,s.jsxs)(n.Y,{children:[(0,s.jsx)(o.M,{variant:"default",onClick:()=>e.set(t,a+1),fw:500,children:(0,s.jsx)(l.A,{stroke:1.5,size:18})}),(0,s.jsx)(o.M,{variant:"default",onClick:()=>e.delete(t),c:"red",children:(0,s.jsx)(r.A,{stroke:1.5,size:18})})]})})]},t));return(0,s.jsxs)(d.X,{layout:"fixed",children:[(0,s.jsx)(d.X.Thead,{children:(0,s.jsxs)(d.X.Tr,{children:[(0,s.jsx)(d.X.Th,{children:"Page"}),(0,s.jsx)(d.X.Th,{children:"Views last month"}),(0,s.jsx)(d.X.Th,{})]})}),(0,s.jsx)(d.X.Tbody,{children:t})]})},code:`
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
`}},34891:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},78201:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-map",function(){return a(20790)}])},84276:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90993:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41495).A)("outline","trash","Trash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=78201)),_N_E=e.O()}]);