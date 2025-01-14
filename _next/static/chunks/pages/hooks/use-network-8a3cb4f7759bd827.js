(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8681],{82821:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-network",function(){return t(61569)}])},61569:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(52322),r=t(45392),o=t(96242),l=t(8582),a=t(2784),s=t(65695);function T(){if("undefined"==typeof navigator)return{};let e=navigator,n=e.connection||e.mozConnection||e.webkitConnection;return n?{downlink:n?.downlink,downlinkMax:n?.downlinkMax,effectiveType:n?.effectiveType,rtt:n?.rtt,saveData:n?.saveData,type:n?.type}:{}}let d={type:"code",component:function(){let e=function(){let[e,n]=(0,a.useState)({online:!0}),t=(0,a.useCallback)(()=>n(e=>({...e,...T()})),[]);return(0,s.s)("online",()=>n({online:!0,...T()})),(0,s.s)("offline",()=>n({online:!1,...T()})),(0,a.useEffect)(()=>{let e=navigator;if(e.connection)return n({online:e.onLine,...T()}),e.connection.addEventListener("change",t),()=>e.connection.removeEventListener("change",t);"boolean"==typeof e.onLine&&n(n=>({...n,online:e.onLine}))},[]),e}();return(0,i.jsxs)(o.i,{maw:300,layout:"fixed",mx:"auto",children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{children:"Property"}),(0,i.jsx)(o.i.Th,{children:"Value"})]})}),(0,i.jsxs)(o.i.Tbody,{children:[(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:"Online"}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(l.x,{size:"sm",c:e.online?"teal.6":"red.6",children:e.online?"Online":"Offline"})})]}),(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:"rtt"}),(0,i.jsx)(o.i.Td,{children:e.rtt})]}),(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:"downlink"}),(0,i.jsx)(o.i.Td,{children:e.downlink})]}),(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:"effectiveType"}),(0,i.jsx)(o.i.Td,{children:e.effectiveType})]}),(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:"saveData"}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(l.x,{size:"sm",c:e.saveData?"teal.6":"red.6",children:e.saveData?"true":"false"})})]})]})]})},code:`
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
`};var c=t(54078),u=t(15019);let b=(0,c.A)(u.us.useNetwork);function h(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-network"})," hook returns an object with current connection status:"]}),"\n",(0,i.jsx)(t,{data:d}),"\n",(0,i.jsx)(n.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-network"})," uses experimental ",(0,i.jsx)(n.code,{children:"navigator.connection"}),", see ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility",children:"browser compatibility table"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function useNetwork(): {\n  online: boolean;\n  downlink?: number;\n  downlinkMax?: number;\n  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';\n  rtt?: number;\n  saveData?: boolean;\n  type?:\n    | 'bluetooth'\n    | 'cellular'\n    | 'ethernet'\n    | 'wifi'\n    | 'wimax'\n    | 'none'\n    | 'other'\n    | 'unknown';\n};\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(b,{...e,children:(0,i.jsx)(h,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=82821)}),_N_E=e.O()}]);