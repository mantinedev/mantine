(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15333],{39185:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-network",function(){return t(57717)}])},57717:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var a=t(31085),l=t(71184),r=t(75447),s=t(93065),o=t(14041),i=t(93739);function d(){if("undefined"==typeof navigator)return{};let e=navigator,n=e.connection||e.mozConnection||e.webkitConnection;return n?{downlink:n?.downlink,downlinkMax:n?.downlinkMax,effectiveType:n?.effectiveType,rtt:n?.rtt,saveData:n?.saveData,type:n?.type}:{}}let c={type:"code",component:function(){let e=function(){let[e,n]=(0,o.useState)({online:!0}),t=(0,o.useCallback)(()=>n(e=>({...e,...d()})),[]);return(0,i.M)("online",()=>n({online:!0,...d()})),(0,i.M)("offline",()=>n({online:!1,...d()})),(0,o.useEffect)(()=>{let e=navigator;if(e.connection)return n({online:e.onLine,...d()}),e.connection.addEventListener("change",t),()=>e.connection.removeEventListener("change",t);"boolean"==typeof e.onLine&&n(n=>({...n,online:e.onLine}))},[]),e}();return(0,a.jsxs)(r.X,{maw:300,layout:"fixed",mx:"auto",children:[(0,a.jsx)(r.X.Thead,{children:(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Th,{children:"Property"}),(0,a.jsx)(r.X.Th,{children:"Value"})]})}),(0,a.jsxs)(r.X.Tbody,{children:[(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:"Online"}),(0,a.jsx)(r.X.Td,{children:(0,a.jsx)(s.E,{size:"sm",c:e.online?"teal.6":"red.6",children:e.online?"Online":"Offline"})})]}),(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:"rtt"}),(0,a.jsx)(r.X.Td,{children:e.rtt})]}),(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:"downlink"}),(0,a.jsx)(r.X.Td,{children:e.downlink})]}),(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:"effectiveType"}),(0,a.jsx)(r.X.Td,{children:e.effectiveType})]}),(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:"saveData"}),(0,a.jsx)(r.X.Td,{children:(0,a.jsx)(s.E,{size:"sm",c:e.saveData?"teal.6":"red.6",children:e.saveData?"true":"false"})})]})]})]})},code:`
import { Text, Table } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';

function Demo() {
  const networkStatus = useNetwork();

  return (
    <Table maw={300} layout="fixed" mx="auto">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Property</Table.Th>
          <Table.Th>Value</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Online</Table.Td>
          <Table.Td>
            <Text size="sm" c={networkStatus.online ? 'teal.6' : 'red.6'}>
              {networkStatus.online ? 'Online' : 'Offline'}
            </Text>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>rtt</Table.Td>
          <Table.Td>{networkStatus.rtt}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>downlink</Table.Td>
          <Table.Td>{networkStatus.downlink}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>effectiveType</Table.Td>
          <Table.Td>{networkStatus.effectiveType}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>saveData</Table.Td>
          <Table.Td>
            <Text size="sm" c={networkStatus.saveData ? 'teal.6' : 'red.6'}>
              {networkStatus.saveData ? 'true' : 'false'}
            </Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`};var h=t(18675),T=t(20017);let v=(0,h.P)(T.XZ.useNetwork);function u(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"use-network"})," hook returns an object with current connection status:"]}),"\n",(0,a.jsx)(t,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"use-network"})," uses experimental ",(0,a.jsx)(n.code,{children:"navigator.connection"}),", see ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility",children:"browser compatibility table"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function useNetwork(): {\n  online: boolean;\n  downlink?: number;\n  downlinkMax?: number;\n  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';\n  rtt?: number;\n  saveData?: boolean;\n  type?:\n    | 'bluetooth'\n    | 'cellular'\n    | 'ethernet'\n    | 'wifi'\n    | 'wimax'\n    | 'none'\n    | 'other'\n    | 'unknown';\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(v,{...e,children:(0,a.jsx)(u,{...e})})}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(39185)),_N_E=e.O()}]);