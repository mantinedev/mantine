(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47971],{54657:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return i(73298)}])},73298:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return E}});var l=i(52322),a=i(45392),o=i(49667),s=i(62060),t=i(76706),r=i(96242),T=i(86608);let d=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,c={type:"configurator",component:function(e){return(0,l.jsxs)(r.i,{...e,children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Position"}),(0,l.jsx)(r.i.Th,{children:"Name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"})]})}),(0,l.jsx)(r.i.Tbody,{children:T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol})]},e.name))})]})},code:d,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},m=`
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
`,h={type:"code",code:m,component:function(){let e=T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name)),n=(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]});return(0,l.jsxs)(r.i,{captionSide:"bottom",children:[(0,l.jsx)(r.i.Caption,{children:"Some elements from periodic table"}),(0,l.jsx)(r.i.Thead,{children:n}),(0,l.jsx)(r.i.Tbody,{children:e}),(0,l.jsx)(r.i.Tfoot,{children:n})]})}},b=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,p={type:"configurator",component:function(e){return(0,l.jsxs)(r.i,{...e,children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(r.i.Tbody,{children:T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name))})]})},code:b,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},x=`
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
`,j={type:"code",code:x,component:function(){let e=T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name));return(0,l.jsx)(r.i.ScrollContainer,{minWidth:500,children:(0,l.jsxs)(r.i,{children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(r.i.Tbody,{children:e})]})})}},u=`
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
`,y={type:"code",code:u,component:function(){let e=T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name));return(0,l.jsx)(r.i.ScrollContainer,{minWidth:500,type:"native",children:(0,l.jsxs)(r.i,{children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(r.i.Tbody,{children:e})]})})}};var f=i(76204),w=i(79016),S=i(33638);let C=(0,w.A)(S.us.Table);function g(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.p,{children:"Table data for all examples:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,l.jsx)(i,{data:o.j}),"\n",(0,l.jsx)(n.h2,{id:"data-prop",children:"data prop"}),"\n",(0,l.jsxs)(n.p,{children:["You can use ",(0,l.jsx)(n.code,{children:"data"})," prop to automatically generate table rows from array of React nodes.\n",(0,l.jsx)(n.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"head"})," – an array of React nodes (",(0,l.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,l.jsx)(n.code,{children:"Table.Th"})," in ",(0,l.jsx)(n.code,{children:"Table.Thead"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"foot"})," – an array of React nodes (",(0,l.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,l.jsx)(n.code,{children:"Table.Th"})," in ",(0,l.jsx)(n.code,{children:"Table.Tfoot"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"body"})," - an array of arrays of React nodes (",(0,l.jsx)(n.code,{children:"React.ReactNode[][]"}),") to render ",(0,l.jsx)(n.code,{children:"Table.Td"})," in ",(0,l.jsx)(n.code,{children:"Table.Tbody"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"caption"})," – a React node to render ",(0,l.jsx)(n.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,l.jsx)(i,{data:s.a}),"\n",(0,l.jsx)(n.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"stickyHeader"})," to make table header sticky. To customize top position of the header use ",(0,l.jsx)(n.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,l.jsx)(i,{data:t._}),"\n",(0,l.jsx)(n.h2,{id:"spacing",children:"Spacing"}),"\n",(0,l.jsxs)(n.p,{children:["To control spacing use ",(0,l.jsx)(n.code,{children:"horizontalSpacing"})," and ",(0,l.jsx)(n.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,l.jsx)(n.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,l.jsx)(i,{data:c}),"\n",(0,l.jsx)(n.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,l.jsxs)(n.p,{children:["Table support tfoot and caption elements. Set ",(0,l.jsx)(n.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,l.jsx)(i,{data:h}),"\n",(0,l.jsx)(n.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,l.jsx)(i,{data:p}),"\n",(0,l.jsx)(n.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,l.jsxs)(n.p,{children:["To prevent viewport overflow wrap ",(0,l.jsx)(n.code,{children:"Table"})," with ",(0,l.jsx)(n.code,{children:"Table.ScrollContainer"}),".\nThe component accepts ",(0,l.jsx)(n.code,{children:"minWidth"})," prop which sets minimum width below which table will be scrollable."]}),"\n",(0,l.jsx)(i,{data:j}),"\n",(0,l.jsxs)(n.p,{children:["By default, ",(0,l.jsx)(n.code,{children:"Table.ScrollContainer"})," uses ",(0,l.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,l.jsx)(n.code,{children:'type="native"'}),":"]}),"\n",(0,l.jsx)(i,{data:y}),"\n",(0,l.jsx)(n.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,l.jsx)(i,{data:f.j})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(C,{...e,children:(0,l.jsx)(g,{...e})})}},62060:function(e,n,i){"use strict";i.d(n,{a:function(){return t}});var l=i(52322),a=i(96242);let o=`
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
`,s={caption:"Some elements from periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},t={type:"code",component:function(){return(0,l.jsx)(a.i,{data:s})},code:o}},76204:function(e,n,i){"use strict";i.d(n,{j:function(){return T}});var l=i(52322),a=i(2784),o=i(96242),s=i(56159);let t=`
import { useState } from 'react';
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
`,r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],T={type:"code",component:function(){let[e,n]=(0,a.useState)([]),i=r.map(i=>(0,l.jsxs)(o.i.Tr,{bg:e.includes(i.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,l.jsx)(o.i.Td,{children:(0,l.jsx)(s.X,{"aria-label":"Select row",checked:e.includes(i.position),onChange:l=>n(l.currentTarget.checked?[...e,i.position]:e.filter(e=>e!==i.position))})}),(0,l.jsx)(o.i.Td,{children:i.position}),(0,l.jsx)(o.i.Td,{children:i.name}),(0,l.jsx)(o.i.Td,{children:i.symbol}),(0,l.jsx)(o.i.Td,{children:i.mass})]},i.name));return(0,l.jsxs)(o.i,{children:[(0,l.jsx)(o.i.Thead,{children:(0,l.jsxs)(o.i.Tr,{children:[(0,l.jsx)(o.i.Th,{}),(0,l.jsx)(o.i.Th,{children:"Element position"}),(0,l.jsx)(o.i.Th,{children:"Element name"}),(0,l.jsx)(o.i.Th,{children:"Symbol"}),(0,l.jsx)(o.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(o.i.Tbody,{children:i})]})},defaultExpanded:!1,code:t}},76706:function(e,n,i){"use strict";i.d(n,{_:function(){return t}});var l=i(52322),a=i(96242),o=i(86608);let s=`
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
`,t={type:"code",code:s,component:function(){let e=o.R.map(e=>(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Td,{children:e.position}),(0,l.jsx)(a.i.Td,{children:e.name}),(0,l.jsx)(a.i.Td,{children:e.symbol}),(0,l.jsx)(a.i.Td,{children:e.mass})]},e.name));return(0,l.jsxs)(a.i,{stickyHeader:!0,stickyHeaderOffset:60,children:[(0,l.jsx)(a.i.Thead,{children:(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Element position"}),(0,l.jsx)(a.i.Th,{children:"Element name"}),(0,l.jsx)(a.i.Th,{children:"Symbol"}),(0,l.jsx)(a.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(a.i.Tbody,{children:e}),(0,l.jsx)(a.i.Caption,{children:"Scroll page to see sticky thead"})]})}}},49667:function(e,n,i){"use strict";i.d(n,{j:function(){return t}});var l=i(52322),a=i(96242),o=i(86608);let s=`
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
`,t={type:"code",code:s,component:function(){let e=o.R.map(e=>(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Td,{children:e.position}),(0,l.jsx)(a.i.Td,{children:e.name}),(0,l.jsx)(a.i.Td,{children:e.symbol}),(0,l.jsx)(a.i.Td,{children:e.mass})]},e.name));return(0,l.jsxs)(a.i,{children:[(0,l.jsx)(a.i.Thead,{children:(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Element position"}),(0,l.jsx)(a.i.Th,{children:"Element name"}),(0,l.jsx)(a.i.Th,{children:"Symbol"}),(0,l.jsx)(a.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(a.i.Tbody,{children:e})]})}}},86608:function(e,n,i){"use strict";i.d(n,{R:function(){return l}});let l=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=54657)}),_N_E=e.O()}]);