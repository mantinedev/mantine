(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8681],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},6754:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-network",function(){return t(96207)}])},96207:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var l=t(85893),a=t(11151),r=t(19905),o=t(9904),i=t(67294),c=t(10573),s=t(72039),d=t(37662),u=Object.defineProperty,T=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))h.call(n,t)&&p(e,t,n[t]);if(T)for(var t of T(n))v.call(n,t)&&p(e,t,n[t]);return e};function f(){if("undefined"==typeof navigator)return{};let e=navigator,n=e.connection||e.mozConnection||e.webkitConnection;return n?{downlink:null==n?void 0:n.downlink,downlinkMax:null==n?void 0:n.downlinkMax,effectiveType:null==n?void 0:n.effectiveType,rtt:null==n?void 0:n.rtt,saveData:null==n?void 0:n.saveData,type:null==n?void 0:n.type}:{}}let k=`
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
            <Text size="sm" c={networkStatus.online ? 'teal' : 'red'}>
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
            <Text size="sm" c={networkStatus.saveData ? 'teal' : 'red'}>
              {networkStatus.saveData ? 'true' : 'false'}
            </Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`,m={type:"code",component:function(){let e=function(){let[e,n]=(0,i.useState)({online:!0}),t=(0,i.useCallback)(()=>n(e=>b(b({},e),f())),[]);return(0,d.s)("online",()=>n(b({online:!0},f()))),(0,d.s)("offline",()=>n(b({online:!1},f()))),(0,i.useEffect)(()=>{let e=navigator;if(e.connection)return n(b({online:e.onLine},f())),e.connection.addEventListener("change",t),()=>e.connection.removeEventListener("change",t)},[]),e}();return i.createElement(c.i,{maw:300,layout:"fixed",mx:"auto"},i.createElement(c.i.Thead,null,i.createElement(c.i.Tr,null,i.createElement(c.i.Th,null,"Property"),i.createElement(c.i.Th,null,"Value"))),i.createElement(c.i.Tbody,null,i.createElement(c.i.Tr,null,i.createElement(c.i.Td,null,"Online"),i.createElement(c.i.Td,null,i.createElement(s.x,{size:"sm",c:e.online?"teal":"red"},e.online?"Online":"Offline"))),i.createElement(c.i.Tr,null,i.createElement(c.i.Td,null,"rtt"),i.createElement(c.i.Td,null,e.rtt)),i.createElement(c.i.Tr,null,i.createElement(c.i.Td,null,"downlink"),i.createElement(c.i.Td,null,e.downlink)),i.createElement(c.i.Tr,null,i.createElement(c.i.Td,null,"effectiveType"),i.createElement(c.i.Td,null,e.effectiveType)),i.createElement(c.i.Tr,null,i.createElement(c.i.Td,null,"saveData"),i.createElement(c.i.Td,null,i.createElement(s.x,{size:"sm",c:e.saveData?"teal":"red"},e.saveData?"true":"false")))))},code:k},y=(0,r.A)(o.us.useNetwork);function w(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"use-network"})," hook returns an object with current connection status:"]}),"\n",(0,l.jsx)(t,{data:m}),"\n",(0,l.jsx)(n.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"use-network"})," uses experimental ",(0,l.jsx)(n.code,{children:"navigator.connection"}),", see ",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility",children:"browser compatibility table"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"function useNetwork(): {\n  online: boolean;\n  downlink?: number;\n  downlinkMax?: number;\n  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';\n  rtt?: number;\n  saveData?: boolean;\n  type?: 'bluetooth' | 'cellular' | 'ethernet' | 'wifi' | 'wimax' | 'none' | 'other' | 'unknown';\n};\n"})})]})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(y,Object.assign({},e,{children:(0,l.jsx)(w,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=6754)}),_N_E=e.O()}]);