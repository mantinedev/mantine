(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47971],{54657:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return i(73298)}])},73298:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return w}});var l=i(52322),a=i(45392),o=i(49667),t=i(62060),s=i(76706),r=i(96242),T=i(86608);let d={type:"configurator",component:function(e){return(0,l.jsxs)(r.i,{...e,children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Position"}),(0,l.jsx)(r.i.Th,{children:"Name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"})]})}),(0,l.jsx)(r.i.Tbody,{children:T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},c={type:"code",code:`
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
`,component:function(){let e=T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name)),n=(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]});return(0,l.jsxs)(r.i,{captionSide:"bottom",children:[(0,l.jsx)(r.i.Caption,{children:"Some elements from periodic table"}),(0,l.jsx)(r.i.Thead,{children:n}),(0,l.jsx)(r.i.Tbody,{children:e}),(0,l.jsx)(r.i.Tfoot,{children:n})]})}},m={type:"configurator",component:function(e){return(0,l.jsxs)(r.i,{...e,children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(r.i.Tbody,{children:T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},h={type:"code",code:`
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
`,component:function(){let e=T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name));return(0,l.jsx)(r.i.ScrollContainer,{minWidth:500,children:(0,l.jsxs)(r.i,{children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(r.i.Tbody,{children:e})]})})}},b={type:"code",code:`
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
`,component:function(){let e=T.R.map(e=>(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Td,{children:e.position}),(0,l.jsx)(r.i.Td,{children:e.name}),(0,l.jsx)(r.i.Td,{children:e.symbol}),(0,l.jsx)(r.i.Td,{children:e.mass})]},e.name));return(0,l.jsx)(r.i.ScrollContainer,{minWidth:500,type:"native",children:(0,l.jsxs)(r.i,{children:[(0,l.jsx)(r.i.Thead,{children:(0,l.jsxs)(r.i.Tr,{children:[(0,l.jsx)(r.i.Th,{children:"Element position"}),(0,l.jsx)(r.i.Th,{children:"Element name"}),(0,l.jsx)(r.i.Th,{children:"Symbol"}),(0,l.jsx)(r.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(r.i.Tbody,{children:e})]})})}};var p=i(31463),u=i(34738),x=i(76204),j=i(54078),y=i(15019);let f=(0,j.A)(y.us.Table);function S(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.p,{children:"Table data for all examples:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,l.jsx)(i,{data:o.j}),"\n",(0,l.jsx)(n.h2,{id:"data-prop",children:"data prop"}),"\n",(0,l.jsxs)(n.p,{children:["You can use ",(0,l.jsx)(n.code,{children:"data"})," prop to automatically generate table rows from array of React nodes.\n",(0,l.jsx)(n.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"head"})," – an array of React nodes (",(0,l.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,l.jsx)(n.code,{children:"Table.Th"})," in ",(0,l.jsx)(n.code,{children:"Table.Thead"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"foot"})," – an array of React nodes (",(0,l.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,l.jsx)(n.code,{children:"Table.Th"})," in ",(0,l.jsx)(n.code,{children:"Table.Tfoot"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"body"})," - an array of arrays of React nodes (",(0,l.jsx)(n.code,{children:"React.ReactNode[][]"}),") to render ",(0,l.jsx)(n.code,{children:"Table.Td"})," in ",(0,l.jsx)(n.code,{children:"Table.Tbody"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"caption"})," – a React node to render ",(0,l.jsx)(n.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,l.jsx)(i,{data:t.a}),"\n",(0,l.jsx)(n.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"stickyHeader"})," to make table header sticky. To customize top position of the header use ",(0,l.jsx)(n.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,l.jsx)(i,{data:s._}),"\n",(0,l.jsx)(n.h2,{id:"spacing",children:"Spacing"}),"\n",(0,l.jsxs)(n.p,{children:["To control spacing use ",(0,l.jsx)(n.code,{children:"horizontalSpacing"})," and ",(0,l.jsx)(n.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,l.jsx)(n.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,l.jsx)(i,{data:d}),"\n",(0,l.jsx)(n.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,l.jsxs)(n.p,{children:["Table support tfoot and caption elements. Set ",(0,l.jsx)(n.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,l.jsx)(i,{data:c}),"\n",(0,l.jsx)(n.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,l.jsx)(i,{data:m}),"\n",(0,l.jsx)(n.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,l.jsxs)(n.p,{children:["To prevent viewport overflow wrap ",(0,l.jsx)(n.code,{children:"Table"})," with ",(0,l.jsx)(n.code,{children:"Table.ScrollContainer"}),".\nThe component accepts ",(0,l.jsx)(n.code,{children:"minWidth"})," prop which sets minimum width below which table will be scrollable."]}),"\n",(0,l.jsx)(i,{data:h}),"\n",(0,l.jsxs)(n.p,{children:["By default, ",(0,l.jsx)(n.code,{children:"Table.ScrollContainer"})," uses ",(0,l.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,l.jsx)(n.code,{children:'type="native"'}),":"]}),"\n",(0,l.jsx)(i,{data:b}),"\n",(0,l.jsx)(n.h2,{id:"vertical-variant",children:"Vertical variant"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:'variant="vertical"'})," to render table with vertical layout:"]}),"\n",(0,l.jsx)(i,{data:p.K}),"\n",(0,l.jsx)(n.h2,{id:"tabular-numbers",children:"Tabular numbers"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,l.jsx)(n.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers to have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,l.jsx)(i,{data:u.A}),"\n",(0,l.jsx)(n.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,l.jsx)(i,{data:x.j})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(f,{...e,children:(0,l.jsx)(S,{...e})})}},62060:function(e,n,i){"use strict";i.d(n,{a:function(){return t}});var l=i(52322),a=i(96242);let o={caption:"Some elements from periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},t={type:"code",component:function(){return(0,l.jsx)(a.i,{data:o})},code:`
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
`}},76204:function(e,n,i){"use strict";i.d(n,{j:function(){return r}});var l=i(52322),a=i(2784),o=i(96242),t=i(95047);let s=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],r={type:"code",component:function(){let[e,n]=(0,a.useState)([]),i=s.map(i=>(0,l.jsxs)(o.i.Tr,{bg:e.includes(i.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,l.jsx)(o.i.Td,{children:(0,l.jsx)(t.X,{"aria-label":"Select row",checked:e.includes(i.position),onChange:l=>n(l.currentTarget.checked?[...e,i.position]:e.filter(e=>e!==i.position))})}),(0,l.jsx)(o.i.Td,{children:i.position}),(0,l.jsx)(o.i.Td,{children:i.name}),(0,l.jsx)(o.i.Td,{children:i.symbol}),(0,l.jsx)(o.i.Td,{children:i.mass})]},i.name));return(0,l.jsxs)(o.i,{children:[(0,l.jsx)(o.i.Thead,{children:(0,l.jsxs)(o.i.Tr,{children:[(0,l.jsx)(o.i.Th,{}),(0,l.jsx)(o.i.Th,{children:"Element position"}),(0,l.jsx)(o.i.Th,{children:"Element name"}),(0,l.jsx)(o.i.Th,{children:"Symbol"}),(0,l.jsx)(o.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(o.i.Tbody,{children:i})]})},defaultExpanded:!1,code:`
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
`}},76706:function(e,n,i){"use strict";i.d(n,{_:function(){return t}});var l=i(52322),a=i(96242),o=i(86608);let t={type:"code",code:`
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
`,component:function(){let e=o.R.map(e=>(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Td,{children:e.position}),(0,l.jsx)(a.i.Td,{children:e.name}),(0,l.jsx)(a.i.Td,{children:e.symbol}),(0,l.jsx)(a.i.Td,{children:e.mass})]},e.name));return(0,l.jsxs)(a.i,{stickyHeader:!0,stickyHeaderOffset:60,children:[(0,l.jsx)(a.i.Thead,{children:(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Element position"}),(0,l.jsx)(a.i.Th,{children:"Element name"}),(0,l.jsx)(a.i.Th,{children:"Symbol"}),(0,l.jsx)(a.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(a.i.Tbody,{children:e}),(0,l.jsx)(a.i.Caption,{children:"Scroll page to see sticky thead"})]})}}},34738:function(e,n,i){"use strict";i.d(n,{A:function(){return s}});var l=i(52322),a=i(96242),o=i(49934);let t=[{product:"Apples",unitsSold:2214411234},{product:"Oranges",unitsSold:9983812411},{product:"Bananas",unitsSold:1234567890},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:9933771111}],s={type:"configurator",component:function(e){let n=t.map(e=>(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Td,{children:e.product}),(0,l.jsx)(a.i.Td,{children:(0,l.jsx)(o.e,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,l.jsxs)(a.i,{...e,children:[(0,l.jsx)(a.i.Thead,{children:(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Product"}),(0,l.jsx)(a.i.Th,{children:"Units sold"})]})}),(0,l.jsx)(a.i.Tbody,{children:n})]})},code:`
import { NumberFormatter, Table } from '@mantine/core';

const data = [
  { product: 'Apples', unitsSold: 2214411234 },
  { product: 'Oranges', unitsSold: 9983812411 },
  { product: 'Bananas', unitsSold: 1234567890 },
  { product: 'Pineapples', unitsSold: 9948810000 },
  { product: 'Pears', unitsSold: 9933771111 },
];

function Demo() {
  const rows = data.map((item) => (
    <Table.Tr key={item.product}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>
        <NumberFormatter value={item.unitsSold} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table{{props}}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Units sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]}},49667:function(e,n,i){"use strict";i.d(n,{j:function(){return t}});var l=i(52322),a=i(96242),o=i(86608);let t={type:"code",code:`
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
`,component:function(){let e=o.R.map(e=>(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Td,{children:e.position}),(0,l.jsx)(a.i.Td,{children:e.name}),(0,l.jsx)(a.i.Td,{children:e.symbol}),(0,l.jsx)(a.i.Td,{children:e.mass})]},e.name));return(0,l.jsxs)(a.i,{children:[(0,l.jsx)(a.i.Thead,{children:(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Element position"}),(0,l.jsx)(a.i.Th,{children:"Element name"}),(0,l.jsx)(a.i.Th,{children:"Symbol"}),(0,l.jsx)(a.i.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(a.i.Tbody,{children:e})]})}}},31463:function(e,n,i){"use strict";i.d(n,{K:function(){return o}});var l=i(52322),a=i(96242);let o={type:"code",code:`
import { Table } from '@mantine/core';

export function Demo() {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160}>Epic name</Table.Th>
          <Table.Td>7.x migration</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Td>Open</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total issues</Table.Th>
          <Table.Td>135</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total story points</Table.Th>
          <Table.Td>874</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Last updated at</Table.Th>
          <Table.Td>September 26, 2024 17:41:26</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`,component:function(){return(0,l.jsx)(a.i,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,l.jsxs)(a.i.Tbody,{children:[(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{w:160,children:"Epic name"}),(0,l.jsx)(a.i.Td,{children:"7.x migration"})]}),(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Status"}),(0,l.jsx)(a.i.Td,{children:"Open"})]}),(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Total issues"}),(0,l.jsx)(a.i.Td,{children:"135"})]}),(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Total story points"}),(0,l.jsx)(a.i.Td,{children:"874"})]}),(0,l.jsxs)(a.i.Tr,{children:[(0,l.jsx)(a.i.Th,{children:"Last updated at"}),(0,l.jsx)(a.i.Td,{children:"September 26, 2024 17:41:26"})]})]})})}}},86608:function(e,n,i){"use strict";i.d(n,{R:function(){return l}});let l=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},49934:function(e,n,i){"use strict";i.d(n,{e:function(){return s}});var l=i(52322),a=i(9462);i(2784);var o=i(38483);let t={};function s(e){let{value:n,defaultValue:i,...s}=(0,o.w)("NumberFormatter",t,e);return void 0===n?null:(0,l.jsx)(a.h3,{displayType:"text",value:n,...s})}s.extend=e=>e,s.displayName="@mantine/core/NumberFormatter"}},function(e){e.O(0,[61177,9462,66748,61639,92888,49774,40179],function(){return e(e.s=54657)}),_N_E=e.O()}]);