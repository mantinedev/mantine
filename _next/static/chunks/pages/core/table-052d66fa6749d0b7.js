(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74540],{42281:(e,n,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return a(94878)}])},94878:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>C});var s=a(31085),o=a(71184),l=a(41699),i=a(49750),t=a(15688),r=a(75447),m=a(15334);let T={type:"configurator",component:function(e){return(0,s.jsxs)(r.X,{...e,children:[(0,s.jsx)(r.X.Thead,{children:(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Th,{children:"Position"}),(0,s.jsx)(r.X.Th,{children:"Name"}),(0,s.jsx)(r.X.Th,{children:"Symbol"})]})}),(0,s.jsx)(r.X.Tbody,{children:m.Y.map(e=>(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Td,{children:e.position}),(0,s.jsx)(r.X.Td,{children:e.name}),(0,s.jsx)(r.X.Td,{children:e.symbol})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},d={type:"code",code:`
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
`,component:function(){let e=m.Y.map(e=>(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Td,{children:e.position}),(0,s.jsx)(r.X.Td,{children:e.name}),(0,s.jsx)(r.X.Td,{children:e.symbol}),(0,s.jsx)(r.X.Td,{children:e.mass})]},e.name)),n=(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Th,{children:"Element position"}),(0,s.jsx)(r.X.Th,{children:"Element name"}),(0,s.jsx)(r.X.Th,{children:"Symbol"}),(0,s.jsx)(r.X.Th,{children:"Atomic mass"})]});return(0,s.jsxs)(r.X,{captionSide:"bottom",children:[(0,s.jsx)(r.X.Caption,{children:"Some elements from periodic table"}),(0,s.jsx)(r.X.Thead,{children:n}),(0,s.jsx)(r.X.Tbody,{children:e}),(0,s.jsx)(r.X.Tfoot,{children:n})]})}},b={type:"configurator",component:function(e){return(0,s.jsxs)(r.X,{...e,children:[(0,s.jsx)(r.X.Thead,{children:(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Th,{children:"Element position"}),(0,s.jsx)(r.X.Th,{children:"Element name"}),(0,s.jsx)(r.X.Th,{children:"Symbol"}),(0,s.jsx)(r.X.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.X.Tbody,{children:m.Y.map(e=>(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Td,{children:e.position}),(0,s.jsx)(r.X.Td,{children:e.name}),(0,s.jsx)(r.X.Td,{children:e.symbol}),(0,s.jsx)(r.X.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},c={type:"code",code:`
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
`,component:function(){let e=m.Y.map(e=>(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Td,{children:e.position}),(0,s.jsx)(r.X.Td,{children:e.name}),(0,s.jsx)(r.X.Td,{children:e.symbol}),(0,s.jsx)(r.X.Td,{children:e.mass})]},e.name));return(0,s.jsx)(r.X.ScrollContainer,{minWidth:500,children:(0,s.jsxs)(r.X,{children:[(0,s.jsx)(r.X.Thead,{children:(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Th,{children:"Element position"}),(0,s.jsx)(r.X.Th,{children:"Element name"}),(0,s.jsx)(r.X.Th,{children:"Symbol"}),(0,s.jsx)(r.X.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.X.Tbody,{children:e})]})})}},h={type:"code",code:`
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
`,component:function(){let e=m.Y.map(e=>(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Td,{children:e.position}),(0,s.jsx)(r.X.Td,{children:e.name}),(0,s.jsx)(r.X.Td,{children:e.symbol}),(0,s.jsx)(r.X.Td,{children:e.mass})]},e.name));return(0,s.jsx)(r.X.ScrollContainer,{minWidth:500,type:"native",children:(0,s.jsxs)(r.X,{children:[(0,s.jsx)(r.X.Thead,{children:(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Th,{children:"Element position"}),(0,s.jsx)(r.X.Th,{children:"Element name"}),(0,s.jsx)(r.X.Th,{children:"Symbol"}),(0,s.jsx)(r.X.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.X.Tbody,{children:e})]})})}},p={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300}>
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
`,component:function(){let e=m.c.map(e=>(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Td,{children:e.position}),(0,s.jsx)(r.X.Td,{children:e.name}),(0,s.jsx)(r.X.Td,{children:e.symbol}),(0,s.jsx)(r.X.Td,{children:e.mass})]},e.name));return(0,s.jsx)(r.X.ScrollContainer,{minWidth:500,maxHeight:300,children:(0,s.jsxs)(r.X,{children:[(0,s.jsx)(r.X.Thead,{children:(0,s.jsxs)(r.X.Tr,{children:[(0,s.jsx)(r.X.Th,{children:"Element position"}),(0,s.jsx)(r.X.Th,{children:"Element name"}),(0,s.jsx)(r.X.Th,{children:"Symbol"}),(0,s.jsx)(r.X.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.X.Tbody,{children:e})]})})}};var u=a(67960),x=a(21550),y=a(76472),j=a(85954),X=a(38215);let S=(0,j.P)(X.XZ.Table);function f(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Table data for all examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,s.jsx)(a,{data:l.j}),"\n",(0,s.jsx)(n.h2,{id:"data-prop",children:"data prop"}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"data"})," prop to automatically generate table rows from array of React nodes.\n",(0,s.jsx)(n.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"head"})," – an array of React nodes (",(0,s.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,s.jsx)(n.code,{children:"Table.Th"})," in ",(0,s.jsx)(n.code,{children:"Table.Thead"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"foot"})," – an array of React nodes (",(0,s.jsx)(n.code,{children:"React.ReactNode[]"}),") to render ",(0,s.jsx)(n.code,{children:"Table.Th"})," in ",(0,s.jsx)(n.code,{children:"Table.Tfoot"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"body"})," - an array of arrays of React nodes (",(0,s.jsx)(n.code,{children:"React.ReactNode[][]"}),") to render ",(0,s.jsx)(n.code,{children:"Table.Td"})," in ",(0,s.jsx)(n.code,{children:"Table.Tbody"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"caption"})," – a React node to render ",(0,s.jsx)(n.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,s.jsx)(a,{data:i.p}),"\n",(0,s.jsx)(n.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"stickyHeader"})," to make table header sticky. To customize top position of the header use ",(0,s.jsx)(n.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,s.jsx)(a,{data:t.l}),"\n",(0,s.jsx)(n.h2,{id:"spacing",children:"Spacing"}),"\n",(0,s.jsxs)(n.p,{children:["To control spacing use ",(0,s.jsx)(n.code,{children:"horizontalSpacing"})," and ",(0,s.jsx)(n.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,s.jsx)(n.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,s.jsx)(a,{data:T}),"\n",(0,s.jsx)(n.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,s.jsxs)(n.p,{children:["Table support tfoot and caption elements. Set ",(0,s.jsx)(n.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,s.jsx)(a,{data:d}),"\n",(0,s.jsx)(n.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,s.jsx)(a,{data:b}),"\n",(0,s.jsx)(n.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,s.jsxs)(n.p,{children:["To prevent viewport overflow wrap ",(0,s.jsx)(n.code,{children:"Table"})," with ",(0,s.jsx)(n.code,{children:"Table.ScrollContainer"}),".\nThe component accepts ",(0,s.jsx)(n.code,{children:"minWidth"})," prop which sets minimum width below which table will be scrollable."]}),"\n",(0,s.jsx)(a,{data:c}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"Table.ScrollContainer"})," uses ",(0,s.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,s.jsx)(n.code,{children:'type="native"'}),":"]}),"\n",(0,s.jsx)(a,{data:h}),"\n",(0,s.jsxs)(n.p,{children:["You can also set ",(0,s.jsx)(n.code,{children:"maxHeight"})," prop on ",(0,s.jsx)(n.code,{children:"Table.ScrollContainer"})," to limit table height:"]}),"\n",(0,s.jsx)(a,{data:p}),"\n",(0,s.jsx)(n.h2,{id:"vertical-variant",children:"Vertical variant"}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:'variant="vertical"'})," to render table with vertical layout:"]}),"\n",(0,s.jsx)(a,{data:u.V}),"\n",(0,s.jsx)(n.h2,{id:"tabular-numbers",children:"Tabular numbers"}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,s.jsx)(n.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers to have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,s.jsx)(a,{data:x.j}),"\n",(0,s.jsx)(n.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,s.jsx)(a,{data:y.P})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(S,{...e,children:(0,s.jsx)(f,{...e})})}},49750:(e,n,a)=>{"use strict";a.d(n,{p:()=>i});var s=a(31085),o=a(75447);let l={caption:"Some elements from periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},i={type:"code",component:function(){return(0,s.jsx)(o.X,{data:l})},code:`
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
`}},76472:(e,n,a)=>{"use strict";a.d(n,{P:()=>r});var s=a(31085),o=a(14041),l=a(75447),i=a(87858);let t=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],r={type:"code",component:function(){let[e,n]=(0,o.useState)([]),a=t.map(a=>(0,s.jsxs)(l.X.Tr,{bg:e.includes(a.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,s.jsx)(l.X.Td,{children:(0,s.jsx)(i.S,{"aria-label":"Select row",checked:e.includes(a.position),onChange:s=>n(s.currentTarget.checked?[...e,a.position]:e.filter(e=>e!==a.position))})}),(0,s.jsx)(l.X.Td,{children:a.position}),(0,s.jsx)(l.X.Td,{children:a.name}),(0,s.jsx)(l.X.Td,{children:a.symbol}),(0,s.jsx)(l.X.Td,{children:a.mass})]},a.name));return(0,s.jsxs)(l.X,{children:[(0,s.jsx)(l.X.Thead,{children:(0,s.jsxs)(l.X.Tr,{children:[(0,s.jsx)(l.X.Th,{}),(0,s.jsx)(l.X.Th,{children:"Element position"}),(0,s.jsx)(l.X.Th,{children:"Element name"}),(0,s.jsx)(l.X.Th,{children:"Symbol"}),(0,s.jsx)(l.X.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.X.Tbody,{children:a})]})},defaultExpanded:!1,code:`
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
`}},15688:(e,n,a)=>{"use strict";a.d(n,{l:()=>i});var s=a(31085),o=a(75447),l=a(15334);let i={type:"code",code:`
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
`,component:function(){let e=l.Y.map(e=>(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Td,{children:e.position}),(0,s.jsx)(o.X.Td,{children:e.name}),(0,s.jsx)(o.X.Td,{children:e.symbol}),(0,s.jsx)(o.X.Td,{children:e.mass})]},e.name));return(0,s.jsxs)(o.X,{stickyHeader:!0,stickyHeaderOffset:60,children:[(0,s.jsx)(o.X.Thead,{children:(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{children:"Element position"}),(0,s.jsx)(o.X.Th,{children:"Element name"}),(0,s.jsx)(o.X.Th,{children:"Symbol"}),(0,s.jsx)(o.X.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(o.X.Tbody,{children:e}),(0,s.jsx)(o.X.Caption,{children:"Scroll page to see sticky thead"})]})}}},21550:(e,n,a)=>{"use strict";a.d(n,{j:()=>t});var s=a(31085),o=a(75447),l=a(43523);let i=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],t={type:"configurator",component:function(e){let n=i.map(e=>(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Td,{children:e.product}),(0,s.jsx)(o.X.Td,{children:(0,s.jsx)(l.K,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,s.jsxs)(o.X,{...e,children:[(0,s.jsx)(o.X.Thead,{children:(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{children:"Product"}),(0,s.jsx)(o.X.Th,{children:"Units sold"})]})}),(0,s.jsx)(o.X.Tbody,{children:n})]})},code:`
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
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]}},41699:(e,n,a)=>{"use strict";a.d(n,{j:()=>i});var s=a(31085),o=a(75447),l=a(15334);let i={type:"code",code:`
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
`,component:function(){let e=l.Y.map(e=>(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Td,{children:e.position}),(0,s.jsx)(o.X.Td,{children:e.name}),(0,s.jsx)(o.X.Td,{children:e.symbol}),(0,s.jsx)(o.X.Td,{children:e.mass})]},e.name));return(0,s.jsxs)(o.X,{children:[(0,s.jsx)(o.X.Thead,{children:(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{children:"Element position"}),(0,s.jsx)(o.X.Th,{children:"Element name"}),(0,s.jsx)(o.X.Th,{children:"Symbol"}),(0,s.jsx)(o.X.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(o.X.Tbody,{children:e})]})}}},67960:(e,n,a)=>{"use strict";a.d(n,{V:()=>l});var s=a(31085),o=a(75447);let l={type:"code",code:`
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
`,component:function(){return(0,s.jsx)(o.X,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,s.jsxs)(o.X.Tbody,{children:[(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{w:160,children:"Epic name"}),(0,s.jsx)(o.X.Td,{children:"7.x migration"})]}),(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{children:"Status"}),(0,s.jsx)(o.X.Td,{children:"Open"})]}),(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{children:"Total issues"}),(0,s.jsx)(o.X.Td,{children:"135"})]}),(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{children:"Total story points"}),(0,s.jsx)(o.X.Td,{children:"874"})]}),(0,s.jsxs)(o.X.Tr,{children:[(0,s.jsx)(o.X.Th,{children:"Last updated at"}),(0,s.jsx)(o.X.Td,{children:"September 26, 2024 17:41:26"})]})]})})}}},15334:(e,n,a)=>{"use strict";a.d(n,{Y:()=>s,c:()=>o});let s=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],o=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}]},43523:(e,n,a)=>{"use strict";a.d(n,{K:()=>t});var s=a(31085),o=a(57715);a(14041);var l=a(29686);let i={};function t(e){let{value:n,defaultValue:a,...t}=(0,l.Y)("NumberFormatter",i,e);return void 0===n?null:(0,s.jsx)(o.HG,{displayType:"text",value:n,...t})}t.extend=e=>e,t.displayName="@mantine/core/NumberFormatter"}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,57715,39699,68831,90636,46593,38792],()=>n(42281)),_N_E=e.O()}]);