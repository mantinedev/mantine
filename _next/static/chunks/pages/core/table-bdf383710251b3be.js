(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47971],{54657:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return n(73298)}])},73298:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return k}});var t=n(52322),a=n(45392),o=n(49667),i=n(62060),r=n(76706),m=n(2784),T=n(96242),s=n(86608);let c=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,d={type:"configurator",component:function(e){return m.createElement(T.i,{...e},m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Position"),m.createElement(T.i.Th,null,"Name"),m.createElement(T.i.Th,null,"Symbol"))),m.createElement(T.i.Tbody,null,s.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol)))))},code:c,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},b=`
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
`,u={type:"code",code:b,component:function(){let e=s.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass))),l=m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"));return m.createElement(T.i,{captionSide:"bottom"},m.createElement(T.i.Caption,null,"Some elements from periodic table"),m.createElement(T.i.Thead,null,l),m.createElement(T.i.Tbody,null,e),m.createElement(T.i.Tfoot,null,l))}},h=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,p={type:"configurator",component:function(e){return m.createElement(T.i,{...e},m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"))),m.createElement(T.i.Tbody,null,s.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass)))))},code:h,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},E=`
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
`,y={type:"code",code:E,component:function(){let e=s.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass)));return m.createElement(T.i.ScrollContainer,{minWidth:500},m.createElement(T.i,null,m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"))),m.createElement(T.i.Tbody,null,e)))}},f=`
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
`,x={type:"code",code:f,component:function(){let e=s.R.map(e=>m.createElement(T.i.Tr,{key:e.name},m.createElement(T.i.Td,null,e.position),m.createElement(T.i.Td,null,e.name),m.createElement(T.i.Td,null,e.symbol),m.createElement(T.i.Td,null,e.mass)));return m.createElement(T.i.ScrollContainer,{minWidth:500,type:"native"},m.createElement(T.i,null,m.createElement(T.i.Thead,null,m.createElement(T.i.Tr,null,m.createElement(T.i.Th,null,"Element position"),m.createElement(T.i.Th,null,"Element name"),m.createElement(T.i.Th,null,"Symbol"),m.createElement(T.i.Th,null,"Atomic mass"))),m.createElement(T.i.Tbody,null,e)))}};var j=n(76204),w=n(79016),C=n(33638);let S=(0,w.A)(C.us.Table);function g(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:n}=l;return n||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(l.p,{children:"Table data for all examples:"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,t.jsx)(n,{data:o.j}),"\n",(0,t.jsx)(l.h2,{id:"data-prop",children:"data prop"}),"\n",(0,t.jsxs)(l.p,{children:["You can use ",(0,t.jsx)(l.code,{children:"data"})," prop to automatically generate table rows from array of React nodes.\n",(0,t.jsx)(l.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"head"})," – an array of React nodes (",(0,t.jsx)(l.code,{children:"React.ReactNode[]"}),") to render ",(0,t.jsx)(l.code,{children:"Table.Th"})," in ",(0,t.jsx)(l.code,{children:"Table.Thead"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"foot"})," – an array of React nodes (",(0,t.jsx)(l.code,{children:"React.ReactNode[]"}),") to render ",(0,t.jsx)(l.code,{children:"Table.Th"})," in ",(0,t.jsx)(l.code,{children:"Table.Tfoot"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"body"})," - an array of arrays of React nodes (",(0,t.jsx)(l.code,{children:"React.ReactNode[][]"}),") to render ",(0,t.jsx)(l.code,{children:"Table.Td"})," in ",(0,t.jsx)(l.code,{children:"Table.Tbody"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"caption"})," – a React node to render ",(0,t.jsx)(l.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,t.jsx)(n,{data:i.a}),"\n",(0,t.jsx)(l.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:"stickyHeader"})," to make table header sticky. To customize top position of the header use ",(0,t.jsx)(l.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,t.jsx)(n,{data:r._}),"\n",(0,t.jsx)(l.h2,{id:"spacing",children:"Spacing"}),"\n",(0,t.jsxs)(l.p,{children:["To control spacing use ",(0,t.jsx)(l.code,{children:"horizontalSpacing"})," and ",(0,t.jsx)(l.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,t.jsx)(l.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,t.jsx)(n,{data:d}),"\n",(0,t.jsx)(l.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,t.jsxs)(l.p,{children:["Table support tfoot and caption elements. Set ",(0,t.jsx)(l.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsx)(l.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,t.jsx)(n,{data:p}),"\n",(0,t.jsx)(l.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,t.jsxs)(l.p,{children:["To prevent viewport overflow wrap ",(0,t.jsx)(l.code,{children:"Table"})," with ",(0,t.jsx)(l.code,{children:"Table.ScrollContainer"}),".\nThe component accepts ",(0,t.jsx)(l.code,{children:"minWidth"})," prop which sets minimum width below which table will be scrollable."]}),"\n",(0,t.jsx)(n,{data:y}),"\n",(0,t.jsxs)(l.p,{children:["By default, ",(0,t.jsx)(l.code,{children:"Table.ScrollContainer"})," uses ",(0,t.jsx)(l.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,t.jsx)(l.code,{children:'type="native"'}),":"]}),"\n",(0,t.jsx)(n,{data:x}),"\n",(0,t.jsx)(l.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,t.jsx)(n,{data:j.j})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(S,{...e,children:(0,t.jsx)(g,{...e})})}},62060:function(e,l,n){"use strict";n.d(l,{a:function(){return r}});var t=n(2784),a=n(96242);let o=`
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
`,i={caption:"Some elements from periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},r={type:"code",component:function(){return t.createElement(a.i,{data:i})},code:o}},76204:function(e,l,n){"use strict";n.d(l,{j:function(){return m}});var t=n(2784),a=n(96242),o=n(56159);let i=`
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
`,r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],m={type:"code",component:function(){let[e,l]=(0,t.useState)([]),n=r.map(n=>t.createElement(a.i.Tr,{key:n.name,bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0},t.createElement(a.i.Td,null,t.createElement(o.X,{"aria-label":"Select row",checked:e.includes(n.position),onChange:t=>l(t.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})),t.createElement(a.i.Td,null,n.position),t.createElement(a.i.Td,null,n.name),t.createElement(a.i.Td,null,n.symbol),t.createElement(a.i.Td,null,n.mass)));return t.createElement(a.i,null,t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null),t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,n))},defaultExpanded:!1,code:i}},76706:function(e,l,n){"use strict";n.d(l,{_:function(){return r}});var t=n(2784),a=n(96242),o=n(86608);let i=`
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
`,r={type:"code",code:i,component:function(){let e=o.R.map(e=>t.createElement(a.i.Tr,{key:e.name},t.createElement(a.i.Td,null,e.position),t.createElement(a.i.Td,null,e.name),t.createElement(a.i.Td,null,e.symbol),t.createElement(a.i.Td,null,e.mass)));return t.createElement(a.i,{stickyHeader:!0,stickyHeaderOffset:60},t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,e),t.createElement(a.i.Caption,null,"Scroll page to see sticky thead"))}}},49667:function(e,l,n){"use strict";n.d(l,{j:function(){return r}});var t=n(2784),a=n(96242),o=n(86608);let i=`
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
`,r={type:"code",code:i,component:function(){let e=o.R.map(e=>t.createElement(a.i.Tr,{key:e.name},t.createElement(a.i.Td,null,e.position),t.createElement(a.i.Td,null,e.name),t.createElement(a.i.Td,null,e.symbol),t.createElement(a.i.Td,null,e.mass)));return t.createElement(a.i,null,t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,e))}}},86608:function(e,l,n){"use strict";n.d(l,{R:function(){return t}});let t=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=54657)}),_N_E=e.O()}]);