(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7971],{33507:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var t=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},46995:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return n(158)}])},158:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return _}});var t=n(85893),a=n(11151),o=n(19905),i=n(9904),r=n(21188),m=n(49652),s=n(85947),c=n(67294),T=n(93992),d=n(12715),b=Object.defineProperty,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,y=(e,l,n)=>l in e?b(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,E=(e,l)=>{for(var n in l||(l={}))h.call(l,n)&&y(e,n,l[n]);if(u)for(var n of u(l))p.call(l,n)&&y(e,n,l[n]);return e};let f=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,g={type:"configurator",component:function(e){return c.createElement(T.i,E({},e),c.createElement(T.i.Thead,null,c.createElement(T.i.Tr,null,c.createElement(T.i.Th,null,"Position"),c.createElement(T.i.Th,null,"Name"),c.createElement(T.i.Th,null,"Symbol"),c.createElement(T.i.Th,null,"Mass"))),c.createElement(T.i.Tbody,null,d.R.map(e=>c.createElement(T.i.Tr,{key:e.name},c.createElement(T.i.Td,null,e.position),c.createElement(T.i.Td,null,e.name),c.createElement(T.i.Td,null,e.symbol),c.createElement(T.i.Td,null,e.mass)))))},code:f,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},j=`
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
`,v={type:"code",code:j,component:function(){let e=d.R.map(e=>c.createElement(T.i.Tr,{key:e.name},c.createElement(T.i.Td,null,e.position),c.createElement(T.i.Td,null,e.name),c.createElement(T.i.Td,null,e.symbol),c.createElement(T.i.Td,null,e.mass))),l=c.createElement(T.i.Tr,null,c.createElement(T.i.Th,null,"Element position"),c.createElement(T.i.Th,null,"Element name"),c.createElement(T.i.Th,null,"Symbol"),c.createElement(T.i.Th,null,"Atomic mass"));return c.createElement(T.i,{captionSide:"bottom"},c.createElement(T.i.Caption,null,"Some elements from periodic table"),c.createElement(T.i.Thead,null,l),c.createElement(T.i.Tbody,null,e),c.createElement(T.i.Tfoot,null,l))}};var x=Object.defineProperty,w=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,C=(e,l,n)=>l in e?x(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,M=(e,l)=>{for(var n in l||(l={}))k.call(l,n)&&C(e,n,l[n]);if(w)for(var n of w(l))S.call(l,n)&&C(e,n,l[n]);return e};let R=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,N={type:"configurator",component:function(e){return c.createElement(T.i,M({},e),c.createElement(T.i.Thead,null,c.createElement(T.i.Tr,null,c.createElement(T.i.Th,null,"Element position"),c.createElement(T.i.Th,null,"Element name"),c.createElement(T.i.Th,null,"Symbol"),c.createElement(T.i.Th,null,"Atomic mass"))),c.createElement(T.i.Tbody,null,d.R.map(e=>c.createElement(T.i.Tr,{key:e.name},c.createElement(T.i.Td,null,e.position),c.createElement(T.i.Td,null,e.name),c.createElement(T.i.Td,null,e.symbol),c.createElement(T.i.Td,null,e.mass)))))},code:R,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},O=`
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
`,A={type:"code",code:O,component:function(){let e=d.R.map(e=>c.createElement(T.i.Tr,{key:e.name},c.createElement(T.i.Td,null,e.position),c.createElement(T.i.Td,null,e.name),c.createElement(T.i.Td,null,e.symbol),c.createElement(T.i.Td,null,e.mass)));return c.createElement(T.i.ScrollContainer,{minWidth:500},c.createElement(T.i,null,c.createElement(T.i.Thead,null,c.createElement(T.i.Tr,null,c.createElement(T.i.Th,null,"Element position"),c.createElement(T.i.Th,null,"Element name"),c.createElement(T.i.Th,null,"Symbol"),c.createElement(T.i.Th,null,"Atomic mass"))),c.createElement(T.i.Tbody,null,e)))}},B=`
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
`,Y={type:"code",code:B,component:function(){let e=d.R.map(e=>c.createElement(T.i.Tr,{key:e.name},c.createElement(T.i.Td,null,e.position),c.createElement(T.i.Td,null,e.name),c.createElement(T.i.Td,null,e.symbol),c.createElement(T.i.Td,null,e.mass)));return c.createElement(T.i.ScrollContainer,{minWidth:500,type:"native"},c.createElement(T.i,null,c.createElement(T.i.Thead,null,c.createElement(T.i.Tr,null,c.createElement(T.i.Th,null,"Element position"),c.createElement(T.i.Th,null,"Element name"),c.createElement(T.i.Th,null,"Symbol"),c.createElement(T.i.Th,null,"Atomic mass"))),c.createElement(T.i.Tbody,null,e)))}};var D=n(58091);let V=(0,o.A)(i.us.Table);function Z(e){let l=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components),{Demo:n}=l;return n||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(l.p,{children:"Table data for all examples:"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,t.jsx)(n,{data:r.j}),"\n",(0,t.jsx)(l.h2,{id:"data-prop",children:"data prop"}),"\n",(0,t.jsxs)(l.p,{children:["You can use ",(0,t.jsx)(l.code,{children:"data"})," prop to automatically generate table rows from array of React nodes.\n",(0,t.jsx)(l.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"head"})," – an array of React nodes (",(0,t.jsx)(l.code,{children:"React.ReactNode[]"}),") to render ",(0,t.jsx)(l.code,{children:"Table.Th"})," in ",(0,t.jsx)(l.code,{children:"Table.Thead"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"foot"})," – an array of React nodes (",(0,t.jsx)(l.code,{children:"React.ReactNode[]"}),") to render ",(0,t.jsx)(l.code,{children:"Table.Th"})," in ",(0,t.jsx)(l.code,{children:"Table.Tfoot"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"body"})," - an array of arrays of React nodes (",(0,t.jsx)(l.code,{children:"React.ReactNode[][]"}),") to render ",(0,t.jsx)(l.code,{children:"Table.Td"})," in ",(0,t.jsx)(l.code,{children:"Table.Tbody"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"caption"})," – a React node to render ",(0,t.jsx)(l.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,t.jsx)(n,{data:m.a}),"\n",(0,t.jsx)(l.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:"stickyHeader"})," to make table header sticky. To customize top position of the header use ",(0,t.jsx)(l.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,t.jsx)(n,{data:s._}),"\n",(0,t.jsx)(l.h2,{id:"spacing",children:"Spacing"}),"\n",(0,t.jsxs)(l.p,{children:["To control spacing use ",(0,t.jsx)(l.code,{children:"horizontalSpacing"})," and ",(0,t.jsx)(l.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,t.jsx)(l.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,t.jsx)(n,{data:g}),"\n",(0,t.jsx)(l.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,t.jsxs)(l.p,{children:["Table support tfoot and caption elements. Set ",(0,t.jsx)(l.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,t.jsx)(n,{data:v}),"\n",(0,t.jsx)(l.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,t.jsx)(n,{data:N}),"\n",(0,t.jsx)(l.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,t.jsxs)(l.p,{children:["To prevent viewport overflow wrap ",(0,t.jsx)(l.code,{children:"Table"})," with ",(0,t.jsx)(l.code,{children:"Table.ScrollContainer"}),".\nThe component accepts ",(0,t.jsx)(l.code,{children:"minWidth"})," prop which sets minimum width below which table will be scrollable."]}),"\n",(0,t.jsx)(n,{data:A}),"\n",(0,t.jsxs)(l.p,{children:["By default, ",(0,t.jsx)(l.code,{children:"Table.ScrollContainer"})," uses ",(0,t.jsx)(l.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,t.jsx)(l.code,{children:'type="native"'}),":"]}),"\n",(0,t.jsx)(n,{data:Y}),"\n",(0,t.jsx)(l.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,t.jsx)(n,{data:D.j})]})}var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(V,Object.assign({},e,{children:(0,t.jsx)(Z,e)}))}},49652:function(e,l,n){"use strict";n.d(l,{a:function(){return r}});var t=n(67294),a=n(93992);let o=`
import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
`,i={caption:"Some elements from periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},r={type:"code",component:function(){return t.createElement(a.i,{data:i})},code:o}},58091:function(e,l,n){"use strict";n.d(l,{j:function(){return m}});var t=n(67294),a=n(93992),o=n(19286);let i=`
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
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
          <Table.Th />
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
`,r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],m={type:"code",component:function(){let[e,l]=(0,t.useState)([]),n=r.map(n=>t.createElement(a.i.Tr,{key:n.name,bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0},t.createElement(a.i.Td,null,t.createElement(o.X,{"aria-label":"Select row",checked:e.includes(n.position),onChange:t=>l(t.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})),t.createElement(a.i.Td,null,n.position),t.createElement(a.i.Td,null,n.name),t.createElement(a.i.Td,null,n.symbol),t.createElement(a.i.Td,null,n.mass)));return t.createElement(a.i,null,t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null),t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,n))},defaultExpanded:!1,code:i}},85947:function(e,l,n){"use strict";n.d(l,{_:function(){return r}});var t=n(67294),a=n(93992),o=n(12715);let i=`
import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

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
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
`,r={type:"code",code:i,component:function(){let e=o.R.map(e=>t.createElement(a.i.Tr,{key:e.name},t.createElement(a.i.Td,null,e.position),t.createElement(a.i.Td,null,e.name),t.createElement(a.i.Td,null,e.symbol),t.createElement(a.i.Td,null,e.mass)));return t.createElement(a.i,{stickyHeader:!0,stickyHeaderOffset:60},t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,e),t.createElement(a.i.Caption,null,"Scroll page to see sticky thead"))}}},21188:function(e,l,n){"use strict";n.d(l,{j:function(){return r}});var t=n(67294),a=n(93992),o=n(12715);let i=`
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
`,r={type:"code",code:i,component:function(){let e=o.R.map(e=>t.createElement(a.i.Tr,{key:e.name},t.createElement(a.i.Td,null,e.position),t.createElement(a.i.Td,null,e.name),t.createElement(a.i.Td,null,e.symbol),t.createElement(a.i.Td,null,e.mass)));return t.createElement(a.i,null,t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,e))}}},12715:function(e,l,n){"use strict";n.d(l,{R:function(){return t}});let t=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=46995)}),_N_E=e.O()}]);