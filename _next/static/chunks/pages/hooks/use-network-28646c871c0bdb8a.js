(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15333],{39185:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-network",function(){return t(57717)}])},57717:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>x});var r=t(31085),o=t(71184),l=t(75447),a=t(93065),i=t(14041),s=t(93739);function T(){if("undefined"==typeof navigator)return{};let e=navigator,n=e.connection||e.mozConnection||e.webkitConnection;return n?{downlink:n?.downlink,downlinkMax:n?.downlinkMax,effectiveType:n?.effectiveType,rtt:n?.rtt,saveData:n?.saveData,type:n?.type}:{}}let d={type:"code",component:function(){let e=function(){let[e,n]=(0,i.useState)({online:!0}),t=(0,i.useCallback)(()=>n(e=>({...e,...T()})),[]);return(0,s.M)("online",()=>n({online:!0,...T()})),(0,s.M)("offline",()=>n({online:!1,...T()})),(0,i.useEffect)(()=>{let e=navigator;if(e.connection)return n({online:e.onLine,...T()}),e.connection.addEventListener("change",t),()=>e.connection.removeEventListener("change",t);"boolean"==typeof e.onLine&&n(n=>({...n,online:e.onLine}))},[]),e}();return(0,r.jsxs)(l.X,{maw:300,layout:"fixed",mx:"auto",children:[(0,r.jsx)(l.X.Thead,{children:(0,r.jsxs)(l.X.Tr,{children:[(0,r.jsx)(l.X.Th,{children:"Property"}),(0,r.jsx)(l.X.Th,{children:"Value"})]})}),(0,r.jsxs)(l.X.Tbody,{children:[(0,r.jsxs)(l.X.Tr,{children:[(0,r.jsx)(l.X.Td,{children:"Online"}),(0,r.jsx)(l.X.Td,{children:(0,r.jsx)(a.E,{size:"sm",c:e.online?"teal.6":"red.6",children:e.online?"Online":"Offline"})})]}),(0,r.jsxs)(l.X.Tr,{children:[(0,r.jsx)(l.X.Td,{children:"rtt"}),(0,r.jsx)(l.X.Td,{children:e.rtt})]}),(0,r.jsxs)(l.X.Tr,{children:[(0,r.jsx)(l.X.Td,{children:"downlink"}),(0,r.jsx)(l.X.Td,{children:e.downlink})]}),(0,r.jsxs)(l.X.Tr,{children:[(0,r.jsx)(l.X.Td,{children:"effectiveType"}),(0,r.jsx)(l.X.Td,{children:e.effectiveType})]}),(0,r.jsxs)(l.X.Tr,{children:[(0,r.jsx)(l.X.Td,{children:"saveData"}),(0,r.jsx)(l.X.Td,{children:(0,r.jsx)(a.E,{size:"sm",c:e.saveData?"teal.6":"red.6",children:e.saveData?"true":"false"})})]})]})]})},code:`
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
`};var c=t(85954),b=t(38215);let h=(0,c.P)(b.XZ.useNetwork);function u(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-network"})," hook returns an object with current connection status:"]}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(n.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-network"})," uses experimental ",(0,r.jsx)(n.code,{children:"navigator.connection"}),", see ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility",children:"browser compatibility table"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useNetwork(): {\n  online: boolean;\n  downlink?: number;\n  downlinkMax?: number;\n  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';\n  rtt?: number;\n  saveData?: boolean;\n  type?:\n    | 'bluetooth'\n    | 'cellular'\n    | 'ethernet'\n    | 'wifi'\n    | 'wimax'\n    | 'none'\n    | 'other'\n    | 'unknown';\n};\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(u,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(39185)),_N_E=e.O()}]);