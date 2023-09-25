(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7971],{33507:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},46995:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return n(158)}])},158:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return P}});var t=n(85893),a=n(11151),o=n(19905),r=n(9904),i=n(21188),m=n(67294),T=n(10573),c=n(12715),s=Object.defineProperty,b=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,l,n)=>l in e?s(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,h=(e,l)=>{for(var n in l||(l={}))d.call(l,n)&&u(e,n,l[n]);if(b)for(var n of b(l))p.call(l,n)&&u(e,n,l[n]);return e};let y=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,E={type:"configurator",component:function(e){return m.createElement(T.i,h({},e),m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Position"),m.createElement(T.i.Th,null,"Name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Mass"))),m.createElement(T.i.Tbody,null,c.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass)))))},code:y,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},f=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
`,v={type:"code",code:f,component:function(){let e=c.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass))),l=m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"));return m.createElement(T.i,{captionSide:"bottom"},m.createElement(T.i.Caption,null,"Some elements from periodic table"),m.createElement(T.i.Thead,null,l),m.createElement(T.i.Tbody,null,e),m.createElement(T.i.Tfoot,null,l))}};var g=Object.defineProperty,j=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,x=(e,l,n)=>l in e?g(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,S=(e,l)=>{for(var n in l||(l={}))w.call(l,n)&&x(e,n,l[n]);if(j)for(var n of j(l))k.call(l,n)&&x(e,n,l[n]);return e};let M=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,C={type:"configurator",component:function(e){return m.createElement(T.i,S({},e),m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"))),m.createElement(T.i.Tbody,null,c.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass)))))},code:M,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},O=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,V={type:"code",code:O,component:function(){let e=c.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass)));return m.createElement(T.i.ScrollContainer,{minWidth:500},m.createElement(T.i,null,m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"))),m.createElement(T.i.Tbody,null,e)))}},Z=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,A={type:"code",code:Z,component:function(){let e=c.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass)));return m.createElement(T.i.ScrollContainer,{minWidth:500,type:"native"},m.createElement(T.i,null,m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"))),m.createElement(T.i.Tbody,null,e)))}},_=(0,o.A)(r.us.Table);function N(e){let l=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components),{Demo:n}=l;return n||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(l.p,{children:"Table data for all examples:"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,t.jsx)(n,{data:i.j}),"\n",(0,t.jsx)(l.h2,{id:"spacing",children:"Spacing"}),"\n",(0,t.jsxs)(l.p,{children:["To control spacing use ",(0,t.jsx)(l.code,{children:"horizontalSpacing"})," and ",(0,t.jsx)(l.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,t.jsx)(l.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,t.jsx)(n,{data:E}),"\n",(0,t.jsx)(l.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,t.jsxs)(l.p,{children:["Table support tfoot and caption elements. Set ",(0,t.jsx)(l.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,t.jsx)(n,{data:v}),"\n",(0,t.jsx)(l.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,t.jsx)(n,{data:C}),"\n",(0,t.jsx)(l.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,t.jsxs)(l.p,{children:["To prevent viewport overflow wrap ",(0,t.jsx)(l.code,{children:"Table"})," with ",(0,t.jsx)(l.code,{children:"Table.ScrollContainer"}),".\nThe component accepts ",(0,t.jsx)(l.code,{children:"minWidth"})," prop which sets minimum width below which table will be scrollable."]}),"\n",(0,t.jsx)(n,{data:V}),"\n",(0,t.jsxs)(l.p,{children:["By default, ",(0,t.jsx)(l.code,{children:"Table.ScrollContainer"})," uses ",(0,t.jsx)(l.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,t.jsx)(l.code,{children:'type="native"'}),":"]}),"\n",(0,t.jsx)(n,{data:A})]})}var P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(_,Object.assign({},e,{children:(0,t.jsx)(N,e)}))}},21188:function(e,l,n){"use strict";n.d(l,{j:function(){return i}});var t=n(67294),a=n(10573),o=n(12715);let r=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,i={type:"code",code:r,component:function(){let e=o.R.map(e=>t.createElement(a.i.Tr,{key:e.name},t.createElement(a.i.Td,null,e.position),t.createElement(a.i.Td,null,e.name),t.createElement(a.i.Td,null,e.symbol),t.createElement(a.i.Td,null,e.mass)));return t.createElement(a.i,null,t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,e))}}},12715:function(e,l,n){"use strict";n.d(l,{R:function(){return t}});let t=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=46995)}),_N_E=e.O()}]);