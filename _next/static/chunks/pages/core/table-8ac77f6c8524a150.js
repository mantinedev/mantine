(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74540],{42281:(e,n,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return l(69277)}])},69277:(e,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>S});var a=l(31085),o=l(71184),t=l(41699),s=l(49750),i=l(15688),r=l(75447),T=l(15334);let d={type:"configurator",component:function(e){return(0,a.jsxs)(r.X,{...e,children:[(0,a.jsx)(r.X.Thead,{children:(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Th,{children:"Position"}),(0,a.jsx)(r.X.Th,{children:"Name"}),(0,a.jsx)(r.X.Th,{children:"Symbol"})]})}),(0,a.jsx)(r.X.Tbody,{children:T.Y.map(e=>(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:e.position}),(0,a.jsx)(r.X.Td,{children:e.name}),(0,a.jsx)(r.X.Td,{children:e.symbol})]},e.name))})]})},code:`
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
`,component:function(){let e=T.Y.map(e=>(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:e.position}),(0,a.jsx)(r.X.Td,{children:e.name}),(0,a.jsx)(r.X.Td,{children:e.symbol}),(0,a.jsx)(r.X.Td,{children:e.mass})]},e.name)),n=(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Th,{children:"Element position"}),(0,a.jsx)(r.X.Th,{children:"Element name"}),(0,a.jsx)(r.X.Th,{children:"Symbol"}),(0,a.jsx)(r.X.Th,{children:"Atomic mass"})]});return(0,a.jsxs)(r.X,{captionSide:"bottom",children:[(0,a.jsx)(r.X.Caption,{children:"Some elements from periodic table"}),(0,a.jsx)(r.X.Thead,{children:n}),(0,a.jsx)(r.X.Tbody,{children:e}),(0,a.jsx)(r.X.Tfoot,{children:n})]})}},m={type:"configurator",component:function(e){return(0,a.jsxs)(r.X,{...e,children:[(0,a.jsx)(r.X.Thead,{children:(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Th,{children:"Element position"}),(0,a.jsx)(r.X.Th,{children:"Element name"}),(0,a.jsx)(r.X.Th,{children:"Symbol"}),(0,a.jsx)(r.X.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(r.X.Tbody,{children:T.Y.map(e=>(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:e.position}),(0,a.jsx)(r.X.Td,{children:e.name}),(0,a.jsx)(r.X.Td,{children:e.symbol}),(0,a.jsx)(r.X.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},b={type:"code",code:`
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
`,component:function(){let e=T.Y.map(e=>(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:e.position}),(0,a.jsx)(r.X.Td,{children:e.name}),(0,a.jsx)(r.X.Td,{children:e.symbol}),(0,a.jsx)(r.X.Td,{children:e.mass})]},e.name));return(0,a.jsx)(r.X.ScrollContainer,{minWidth:500,children:(0,a.jsxs)(r.X,{children:[(0,a.jsx)(r.X.Thead,{children:(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Th,{children:"Element position"}),(0,a.jsx)(r.X.Th,{children:"Element name"}),(0,a.jsx)(r.X.Th,{children:"Symbol"}),(0,a.jsx)(r.X.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(r.X.Tbody,{children:e})]})})}},h={type:"code",code:`
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
`,component:function(){let e=T.Y.map(e=>(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Td,{children:e.position}),(0,a.jsx)(r.X.Td,{children:e.name}),(0,a.jsx)(r.X.Td,{children:e.symbol}),(0,a.jsx)(r.X.Td,{children:e.mass})]},e.name));return(0,a.jsx)(r.X.ScrollContainer,{minWidth:500,type:"native",children:(0,a.jsxs)(r.X,{children:[(0,a.jsx)(r.X.Thead,{children:(0,a.jsxs)(r.X.Tr,{children:[(0,a.jsx)(r.X.Th,{children:"Element position"}),(0,a.jsx)(r.X.Th,{children:"Element name"}),(0,a.jsx)(r.X.Th,{children:"Symbol"}),(0,a.jsx)(r.X.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(r.X.Tbody,{children:e})]})})}};var p=l(67960),x=l(21550),j=l(76472),u=l(85954),y=l(38215);let X=(0,u.P)(y.XZ.Table);function f(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"Table data for all examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,a.jsx)(l,{data:t.j}),"\n",(0,a.jsx)(n.h2,{id:"data-prop",children:"data prop"}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"data"})," prop to automatically generate table rows from array of React nodes.\n",(0,a.jsx)(n.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"head"})," – an array of React nodes (",(0,a.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,a.jsx)(n.code,{children:"Table.Th"})," in ",(0,a.jsx)(n.code,{children:"Table.Thead"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"foot"})," – an array of React nodes (",(0,a.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,a.jsx)(n.code,{children:"Table.Th"})," in ",(0,a.jsx)(n.code,{children:"Table.Tfoot"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"body"})," - an array of arrays of React nodes (",(0,a.jsx)(n.code,{children:"React.ReactNode[][]"}),") to render ",(0,a.jsx)(n.code,{children:"Table.Td"})," in ",(0,a.jsx)(n.code,{children:"Table.Tbody"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"caption"})," – a React node to render ",(0,a.jsx)(n.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,a.jsx)(l,{data:s.p}),"\n",(0,a.jsx)(n.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"stickyHeader"})," to make table header sticky. To customize top position of the header use ",(0,a.jsx)(n.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,a.jsx)(l,{data:i.l}),"\n",(0,a.jsx)(n.h2,{id:"spacing",children:"Spacing"}),"\n",(0,a.jsxs)(n.p,{children:["To control spacing use ",(0,a.jsx)(n.code,{children:"horizontalSpacing"})," and ",(0,a.jsx)(n.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,a.jsx)(n.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,a.jsx)(l,{data:d}),"\n",(0,a.jsx)(n.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,a.jsxs)(n.p,{children:["Table support tfoot and caption elements. Set ",(0,a.jsx)(n.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,a.jsx)(l,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,a.jsx)(l,{data:m}),"\n",(0,a.jsx)(n.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,a.jsxs)(n.p,{children:["To prevent viewport overflow wrap ",(0,a.jsx)(n.code,{children:"Table"})," with ",(0,a.jsx)(n.code,{children:"Table.ScrollContainer"}),".\nThe component accepts ",(0,a.jsx)(n.code,{children:"minWidth"})," prop which sets minimum width below which table will be scrollable."]}),"\n",(0,a.jsx)(l,{data:b}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"Table.ScrollContainer"})," uses ",(0,a.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,a.jsx)(n.code,{children:'type="native"'}),":"]}),"\n",(0,a.jsx)(l,{data:h}),"\n",(0,a.jsx)(n.h2,{id:"vertical-variant",children:"Vertical variant"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'variant="vertical"'})," to render table with vertical layout:"]}),"\n",(0,a.jsx)(l,{data:p.V}),"\n",(0,a.jsx)(n.h2,{id:"tabular-numbers",children:"Tabular numbers"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,a.jsx)(n.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers to have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,a.jsx)(l,{data:x.j}),"\n",(0,a.jsx)(n.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,a.jsx)(l,{data:j.P})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(X,{...e,children:(0,a.jsx)(f,{...e})})}},49750:(e,n,l)=>{"use strict";l.d(n,{p:()=>s});var a=l(31085),o=l(75447);let t={caption:"Some elements from periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},s={type:"code",component:function(){return(0,a.jsx)(o.X,{data:t})},code:`
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
`}},76472:(e,n,l)=>{"use strict";l.d(n,{P:()=>r});var a=l(31085),o=l(14041),t=l(75447),s=l(87858);let i=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],r={type:"code",component:function(){let[e,n]=(0,o.useState)([]),l=i.map(l=>(0,a.jsxs)(t.X.Tr,{bg:e.includes(l.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,a.jsx)(t.X.Td,{children:(0,a.jsx)(s.S,{"aria-label":"Select row",checked:e.includes(l.position),onChange:a=>n(a.currentTarget.checked?[...e,l.position]:e.filter(e=>e!==l.position))})}),(0,a.jsx)(t.X.Td,{children:l.position}),(0,a.jsx)(t.X.Td,{children:l.name}),(0,a.jsx)(t.X.Td,{children:l.symbol}),(0,a.jsx)(t.X.Td,{children:l.mass})]},l.name));return(0,a.jsxs)(t.X,{children:[(0,a.jsx)(t.X.Thead,{children:(0,a.jsxs)(t.X.Tr,{children:[(0,a.jsx)(t.X.Th,{}),(0,a.jsx)(t.X.Th,{children:"Element position"}),(0,a.jsx)(t.X.Th,{children:"Element name"}),(0,a.jsx)(t.X.Th,{children:"Symbol"}),(0,a.jsx)(t.X.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(t.X.Tbody,{children:l})]})},defaultExpanded:!1,code:`
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
`}},15688:(e,n,l)=>{"use strict";l.d(n,{l:()=>s});var a=l(31085),o=l(75447),t=l(15334);let s={type:"code",code:`
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
`,component:function(){let e=t.Y.map(e=>(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Td,{children:e.position}),(0,a.jsx)(o.X.Td,{children:e.name}),(0,a.jsx)(o.X.Td,{children:e.symbol}),(0,a.jsx)(o.X.Td,{children:e.mass})]},e.name));return(0,a.jsxs)(o.X,{stickyHeader:!0,stickyHeaderOffset:60,children:[(0,a.jsx)(o.X.Thead,{children:(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Element position"}),(0,a.jsx)(o.X.Th,{children:"Element name"}),(0,a.jsx)(o.X.Th,{children:"Symbol"}),(0,a.jsx)(o.X.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(o.X.Tbody,{children:e}),(0,a.jsx)(o.X.Caption,{children:"Scroll page to see sticky thead"})]})}}},21550:(e,n,l)=>{"use strict";l.d(n,{j:()=>i});var a=l(31085),o=l(75447),t=l(43523);let s=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],i={type:"configurator",component:function(e){let n=s.map(e=>(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Td,{children:e.product}),(0,a.jsx)(o.X.Td,{children:(0,a.jsx)(t.K,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,a.jsxs)(o.X,{...e,children:[(0,a.jsx)(o.X.Thead,{children:(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Product"}),(0,a.jsx)(o.X.Th,{children:"Units sold"})]})}),(0,a.jsx)(o.X.Tbody,{children:n})]})},code:`
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
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]}},41699:(e,n,l)=>{"use strict";l.d(n,{j:()=>s});var a=l(31085),o=l(75447),t=l(15334);let s={type:"code",code:`
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
`,component:function(){let e=t.Y.map(e=>(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Td,{children:e.position}),(0,a.jsx)(o.X.Td,{children:e.name}),(0,a.jsx)(o.X.Td,{children:e.symbol}),(0,a.jsx)(o.X.Td,{children:e.mass})]},e.name));return(0,a.jsxs)(o.X,{children:[(0,a.jsx)(o.X.Thead,{children:(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Element position"}),(0,a.jsx)(o.X.Th,{children:"Element name"}),(0,a.jsx)(o.X.Th,{children:"Symbol"}),(0,a.jsx)(o.X.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(o.X.Tbody,{children:e})]})}}},67960:(e,n,l)=>{"use strict";l.d(n,{V:()=>t});var a=l(31085),o=l(75447);let t={type:"code",code:`
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
`,component:function(){return(0,a.jsx)(o.X,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,a.jsxs)(o.X.Tbody,{children:[(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{w:160,children:"Epic name"}),(0,a.jsx)(o.X.Td,{children:"7.x migration"})]}),(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Status"}),(0,a.jsx)(o.X.Td,{children:"Open"})]}),(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Total issues"}),(0,a.jsx)(o.X.Td,{children:"135"})]}),(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Total story points"}),(0,a.jsx)(o.X.Td,{children:"874"})]}),(0,a.jsxs)(o.X.Tr,{children:[(0,a.jsx)(o.X.Th,{children:"Last updated at"}),(0,a.jsx)(o.X.Td,{children:"September 26, 2024 17:41:26"})]})]})})}}},15334:(e,n,l)=>{"use strict";l.d(n,{Y:()=>a});let a=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},43523:(e,n,l)=>{"use strict";l.d(n,{K:()=>i});var a=l(31085),o=l(57715);l(14041);var t=l(29686);let s={};function i(e){let{value:n,defaultValue:l,...i}=(0,t.Y)("NumberFormatter",s,e);return void 0===n?null:(0,a.jsx)(o.HG,{displayType:"text",value:n,...i})}i.extend=e=>e,i.displayName="@mantine/core/NumberFormatter"}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,57715,39699,68831,90636,46593,38792],()=>n(42281)),_N_E=e.O()}]);