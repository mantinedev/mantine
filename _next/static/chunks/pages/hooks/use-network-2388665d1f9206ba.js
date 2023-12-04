(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8681],{34066:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-network",function(){return t(2740)}])},2740:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var l=t(24246),a=t(71670),r=t(3916),o=t(30289),i=t(27378),T=t(28862),Text=t(26569),c=t(56617);function u(){if("undefined"==typeof navigator)return{};let e=navigator,n=e.connection||e.mozConnection||e.webkitConnection;return n?{downlink:n?.downlink,downlinkMax:n?.downlinkMax,effectiveType:n?.effectiveType,rtt:n?.rtt,saveData:n?.saveData,type:n?.type}:{}}let s=`
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
`,d={type:"code",component:function(){let e=function(){let[e,n]=(0,i.useState)({online:!0}),t=(0,i.useCallback)(()=>n(e=>({...e,...u()})),[]);return(0,c.s)("online",()=>n({online:!0,...u()})),(0,c.s)("offline",()=>n({online:!1,...u()})),(0,i.useEffect)(()=>{let e=navigator;if(e.connection)return n({online:e.onLine,...u()}),e.connection.addEventListener("change",t),()=>e.connection.removeEventListener("change",t)},[]),e}();return i.createElement(T.i,{maw:300,layout:"fixed",mx:"auto"},i.createElement(T.i.Thead,null,i.createElement(T.i.Tr,null,i.createElement(T.i.Th,null,"Property"),i.createElement(T.i.Th,null,"Value"))),i.createElement(T.i.Tbody,null,i.createElement(T.i.Tr,null,i.createElement(T.i.Td,null,"Online"),i.createElement(T.i.Td,null,i.createElement(Text.x,{size:"sm",c:e.online?"teal.6":"red.6"},e.online?"Online":"Offline"))),i.createElement(T.i.Tr,null,i.createElement(T.i.Td,null,"rtt"),i.createElement(T.i.Td,null,e.rtt)),i.createElement(T.i.Tr,null,i.createElement(T.i.Td,null,"downlink"),i.createElement(T.i.Td,null,e.downlink)),i.createElement(T.i.Tr,null,i.createElement(T.i.Td,null,"effectiveType"),i.createElement(T.i.Td,null,e.effectiveType)),i.createElement(T.i.Tr,null,i.createElement(T.i.Td,null,"saveData"),i.createElement(T.i.Td,null,i.createElement(Text.x,{size:"sm",c:e.saveData?"teal.6":"red.6"},e.saveData?"true":"false")))))},code:s},b=(0,r.A)(o.us.useNetwork);function f(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"use-network"})," hook returns an object with current connection status:"]}),"\n",(0,l.jsx)(t,{data:d}),"\n",(0,l.jsx)(n.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"use-network"})," uses experimental ",(0,l.jsx)(n.code,{children:"navigator.connection"}),", see ",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility",children:"browser compatibility table"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"function useNetwork(): {\n  online: boolean;\n  downlink?: number;\n  downlinkMax?: number;\n  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';\n  rtt?: number;\n  saveData?: boolean;\n  type?:\n    | 'bluetooth'\n    | 'cellular'\n    | 'ethernet'\n    | 'wifi'\n    | 'wimax'\n    | 'none'\n    | 'other'\n    | 'unknown';\n};\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(b,{...e,children:(0,l.jsx)(f,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=34066)}),_N_E=e.O()}]);