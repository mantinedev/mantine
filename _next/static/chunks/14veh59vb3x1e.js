(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var l in e)n(r,l,{get:e[l],enumerable:!0});return t||n(r,Symbol.toStringTag,{value:"Module"}),r}])},188850,e=>{"use strict";var n=e.i(391398),t=e.i(38856),r=e.i(648863),l=e.i(245745),a=e.i(883364),o=e.i(133613),i=e.i(191788);function s(){if("u"<typeof navigator)return{};let e=navigator,n=e.connection||e.mozConnection||e.webkitConnection;return n?{downlink:n?.downlink,downlinkMax:n?.downlinkMax,effectiveType:n?.effectiveType,rtt:n?.rtt,saveData:n?.saveData,type:n?.type}:{}}let T={type:"code",component:function(){let e=function(){let[e,n]=(0,i.useState)({online:!0}),t=(0,i.useCallback)(()=>n(e=>({...e,...s()})),[]);return(0,o.useWindowEvent)("online",()=>n({online:!0,...s()})),(0,o.useWindowEvent)("offline",()=>n({online:!1,...s()})),(0,i.useEffect)(()=>{let e=navigator;if(e.connection)return n({online:e.onLine,...s()}),e.connection.addEventListener("change",t),()=>e.connection.removeEventListener("change",t);"boolean"==typeof e.onLine&&n(n=>({...n,online:e.onLine}))},[]),e}();return(0,n.jsxs)(l.Table,{maw:300,layout:"fixed",mx:"auto",children:[(0,n.jsx)(l.Table.Thead,{children:(0,n.jsxs)(l.Table.Tr,{children:[(0,n.jsx)(l.Table.Th,{children:"Property"}),(0,n.jsx)(l.Table.Th,{children:"Value"})]})}),(0,n.jsxs)(l.Table.Tbody,{children:[(0,n.jsxs)(l.Table.Tr,{children:[(0,n.jsx)(l.Table.Td,{children:"Online"}),(0,n.jsx)(l.Table.Td,{children:(0,n.jsx)(a.Text,{size:"sm",c:e.online?"teal.6":"red.6",children:e.online?"Online":"Offline"})})]}),(0,n.jsxs)(l.Table.Tr,{children:[(0,n.jsx)(l.Table.Td,{children:"rtt"}),(0,n.jsx)(l.Table.Td,{children:e.rtt})]}),(0,n.jsxs)(l.Table.Tr,{children:[(0,n.jsx)(l.Table.Td,{children:"downlink"}),(0,n.jsx)(l.Table.Td,{children:e.downlink})]}),(0,n.jsxs)(l.Table.Tr,{children:[(0,n.jsx)(l.Table.Td,{children:"effectiveType"}),(0,n.jsx)(l.Table.Td,{children:e.effectiveType})]}),(0,n.jsxs)(l.Table.Tr,{children:[(0,n.jsx)(l.Table.Td,{children:"saveData"}),(0,n.jsx)(l.Table.Td,{children:(0,n.jsx)(a.Text,{size:"sm",c:e.saveData?"teal.6":"red.6",children:e.saveData?"true":"false"})})]})]})]})},code:`
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
`};var d=(0,r.__exportAll)({usage:()=>T});e.i(603441);var c=e.i(62558);e.i(457450);var b=e.i(418026);let u=(0,c.Layout)(b.MDX_DATA.useNetwork);function h(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...e.components},{Demo:l}=r;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"use-network"})," hook returns an object with the current connection status:"]}),"\n",(0,n.jsx)(l,{data:d.usage}),"\n",(0,n.jsx)(r.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"use-network"})," uses the experimental ",(0,n.jsx)(r.code,{children:"navigator.connection"})," API. See the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility",children:"browser compatibility table"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"\ninterface UserNetworkReturnValue {\n  online: boolean;\n  downlink?: number;\n  downlinkMax?: number;\n  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';\n  rtt?: number;\n  saveData?: boolean;\n  type?: 'bluetooth' | 'cellular' | 'ethernet' | 'wifi' | 'wimax' | 'none' | 'other' | 'unknown';\n}\n\nfunction useNetwork(): UserNetworkReturnValue;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"UserNetworkReturnValue"})," type is exported from the ",(0,n.jsx)(r.code,{children:"@mantine/hooks"})," package;\nyou can import it in your application:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import type { UserNetworkReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(u,{...e,children:(0,n.jsx)(h,{...e})})}],188850)},154664,(e,n,t)=>{let r="/hooks/use-network";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(188850)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);