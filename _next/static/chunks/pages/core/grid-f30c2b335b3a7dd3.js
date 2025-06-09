(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14256],{28961:(e,n,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/grid",function(){return r(734)}])},734:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>C});var o=r(31085),s=r(71184),i=r(23489),d=r(19788);let t={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{children:[(0,o.jsx)(d.I,{span:4,children:"1"}),(0,o.jsx)(d.I,{span:4,children:"2"}),(0,o.jsx)(d.I,{span:4,children:"3"})]})}};var l=r(44950);let a={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{gutter:{base:5,xs:"md",md:"xl",xl:50},children:[(0,o.jsx)(d.I,{span:4,children:"1"}),(0,o.jsx)(d.I,{span:4,children:"2"}),(0,o.jsx)(d.I,{span:4,children:"3"})]})}},c={type:"configurator",component:function(e){return(0,o.jsxs)(i.x,{...e,children:[(0,o.jsx)(d.I,{span:4,children:"1"}),(0,o.jsx)(d.I,{span:4,children:"2"}),(0,o.jsx)(d.I,{span:4,children:"3"}),(0,o.jsx)(d.I,{span:4,children:"4"}),(0,o.jsx)(d.I,{span:4,children:"5"})]})},code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"grow",type:"boolean",initialValue:!0,libraryValue:!1},{prop:"gutter",type:"size",initialValue:"md",libraryValue:"md"}]},h={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{children:[(0,o.jsx)(d.I,{span:3,children:"1"}),(0,o.jsx)(d.I,{span:3,children:"2"}),(0,o.jsx)(d.I,{span:3,offset:3,children:"3"})]})}},p={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{children:[(0,o.jsx)(d.I,{span:3,order:{base:2,sm:1,lg:3},children:"2"}),(0,o.jsx)(d.I,{span:3,order:{base:3,sm:2,lg:2},children:"3"}),(0,o.jsx)(d.I,{span:3,order:{base:1,sm:3,lg:1},children:"1"})]})}},x={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{children:[(0,o.jsx)(d.I,{span:4,children:"1"}),(0,o.jsx)(d.I,{span:4,children:"2"}),(0,o.jsx)(d.I,{span:4,children:"3"}),(0,o.jsx)(d.I,{span:4,children:"4"})]})}},u={type:"configurator",component:function(e){return(0,o.jsxs)(i.x,{...e,id:"grid-configurator",children:[(0,o.jsx)(d.I,{span:3,h:80,children:"1"}),(0,o.jsx)(d.I,{span:3,h:120,children:"2"}),(0,o.jsx)(d.I,{span:3,h:100,children:"3"})]})},code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} h={80}>1</Grid.Col>
      <Grid.Col span={3} h={120}>2</Grid.Col>
      <Grid.Col span={3} h={100}>3</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}]},{prop:"align",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"}]}]},m={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span="auto">3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{children:[(0,o.jsx)(d.I,{span:"auto",children:"1"}),(0,o.jsx)(d.I,{span:6,children:"2"}),(0,o.jsx)(d.I,{span:"auto",children:"3"})]})}},j={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{children:[(0,o.jsx)(d.I,{span:"content",children:"fit content"}),(0,o.jsx)(d.I,{span:6,children:"2"})]})}},f={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.x,{columns:24,children:[(0,o.jsx)(d.I,{span:12,children:"1"}),(0,o.jsx)(d.I,{span:6,children:"2"}),(0,o.jsx)(d.I,{span:6,children:"3"})]})}};var g=r(18477),v=r(18675),G=r(20017);let y=(0,v.P)(G.XZ.Grid);function w(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r,{data:t}),"\n",(0,o.jsx)(n.h2,{id:"columns-span",children:"Columns span"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Grid.Col"})," ",(0,o.jsx)(n.code,{children:"span"})," prop controls the ratio of column width to the total width of the row.\nBy default, grid uses 12 columns layout, so ",(0,o.jsx)(n.code,{children:"span"})," prop can be any number from 1 to 12."]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={3} />"})," – 3 / 12 = 25% of row width"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={4} />"})," – 4 / 12 = 33% of row width"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={6} />"})," – 6 / 12 = 50% of row width"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={12} />"})," – 12 / 12 = 100% of row width"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"span"})," prop also supports object syntax to change column width based on viewport width,\nit accepts ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12. The syntax\nis the same as in ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In the following example ",(0,o.jsx)(n.code,{children:"span={{ base: 12, md: 6, lg: 3 }}"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"base"})," – 12 / 12 = 100% of row width when viewport width is less than ",(0,o.jsx)(n.code,{children:"md"})," breakpoint"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"md"})," – 6 / 12 = 50% of row width when viewport width is between ",(0,o.jsx)(n.code,{children:"md"})," and ",(0,o.jsx)(n.code,{children:"lg"})," breakpoints"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"lg"})," – 3 / 12 = 25% of row width when viewport width is greater than ",(0,o.jsx)(n.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:l.n}),"\n",(0,o.jsx)(n.h2,{id:"gutter",children:"Gutter"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"gutter"})," prop to control spacing between columns. The prop works the same\nway as ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," – you can reference ",(0,o.jsx)(n.code,{children:"theme.spacing"})," values\nwith ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," strings and use object syntax to change gutter\nbased on viewport width:"]}),"\n",(0,o.jsx)(r,{data:a}),"\n",(0,o.jsx)(n.h2,{id:"grow",children:"Grow"}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"grow"})," prop is set, column will grow to fill the remaining space in the row:"]}),"\n",(0,o.jsx)(r,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"column-offset",children:"Column offset"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"offset"})," prop on ",(0,o.jsx)(n.code,{children:"Grid.Col"})," component to add gaps to the grid. ",(0,o.jsx)(n.code,{children:"offset"})," prop\nsupports the same syntax as ",(0,o.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,o.jsx)(r,{data:h}),"\n",(0,o.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"order"})," prop on ",(0,o.jsx)(n.code,{children:"Grid.Col"})," component to change the order of columns. ",(0,o.jsx)(n.code,{children:"order"})," prop\nsupports the same syntax as ",(0,o.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,o.jsx)(r,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,o.jsxs)(n.p,{children:["Once columns ",(0,o.jsx)(n.code,{children:"span"})," and ",(0,o.jsx)(n.code,{children:"offset"})," sum exceeds ",(0,o.jsx)(n.code,{children:"columns"})," prop (12 by default),\ncolumns are moved to the next row:"]}),"\n",(0,o.jsx)(r,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"justify-and-align",children:"Justify and align"}),"\n",(0,o.jsxs)(n.p,{children:["You can control ",(0,o.jsx)(n.code,{children:"justify-content"})," and ",(0,o.jsx)(n.code,{children:"align-items"})," CSS properties with ",(0,o.jsx)(n.code,{children:"justify"})," and ",(0,o.jsx)(n.code,{children:"align"})," props on ",(0,o.jsx)(n.code,{children:"Grid"})," component:"]}),"\n",(0,o.jsx)(r,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"auto-sized-columns",children:"Auto sized columns"}),"\n",(0,o.jsxs)(n.p,{children:["All columns in a row with ",(0,o.jsx)(n.code,{children:'span="auto"'})," grow as much as they can to fill the row.\nIn the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:"]}),"\n",(0,o.jsx)(r,{data:m}),"\n",(0,o.jsx)(n.h2,{id:"fit-column-content",children:"Fit column content"}),"\n",(0,o.jsxs)(n.p,{children:["If you set ",(0,o.jsx)(n.code,{children:'span="content"'}),", the column's size will automatically adjust to match the width of its content:"]}),"\n",(0,o.jsx)(r,{data:j}),"\n",(0,o.jsx)(n.h2,{id:"change-columns-count",children:"Change columns count"}),"\n",(0,o.jsxs)(n.p,{children:["By default, grid uses 12 columns layout, you can change it by setting ",(0,o.jsx)(n.code,{children:"columns"})," prop on ",(0,o.jsx)(n.code,{children:"Grid"})," component.\nNote that in this case, columns span and offset will be calculated relative to this value."]}),"\n",(0,o.jsx)(n.p,{children:"In the following example, first column takes 50% with 12 span (12/24), second and third take 25% (6/24):"}),"\n",(0,o.jsx)(r,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,o.jsxs)(n.p,{children:["To use ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,o.jsx)(n.code,{children:'type="container"'}),". With container queries, all responsive values\nare adjusted based on the container width, not the viewport width."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that, when using container queries, it is also required to set ",(0,o.jsx)(n.code,{children:"breakpoints"})," prop\nto the exact container width values."]}),"\n",(0,o.jsx)(n.p,{children:"To see how the grid changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,o.jsx)(r,{data:g.k}),"\n",(0,o.jsx)(n.h2,{id:"overflow-hidden",children:"overflow: hidden"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"Grid"})," has ",(0,o.jsx)(n.code,{children:"overflow: visible"})," style on the root element. In some cases\nyou might want to change it to ",(0,o.jsx)(n.code,{children:"overflow: hidden"})," to prevent negative margins from\noverflowing the grid container. For example, if you use ",(0,o.jsx)(n.code,{children:"Grid"})," without parent container\nwhich has padding."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Grid } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Grid overflow=\"hidden\">\n      <Grid.Col span={6}>1</Grid.Col>\n      <Grid.Col span={6}>2</Grid.Col>\n    </Grid>\n  );\n}\n"})})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,{...e,children:(0,o.jsx)(w,{...e})})}},87186:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,r)=>{"use strict";r.d(n,{A:()=>o});var o=(0,r(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},18477:(e,n,r)=>{"use strict";r.d(n,{k:()=>d});var o=r(31085),s=r(23489),i=r(19788);let d={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only.
    // It is not required in real projects.
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <Grid
        type="container"
        breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
      >
        <Col span={{ base: 12, md: 6, lg: 3 }}>1</Col>
        <Col span={{ base: 12, md: 6, lg: 3 }}>2</Col>
        <Col span={{ base: 12, md: 6, lg: 3 }}>3</Col>
        <Col span={{ base: 12, md: 6, lg: 3 }}>4</Col>
      </Grid>
    </div>
  );
}
`,component:function(){return(0,o.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsxs)(s.x,{type:"container",breakpoints:{xs:"100px",sm:"200px",md:"300px",lg:"400px",xl:"500px"},children:[(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"1"}),(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"2"}),(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"3"}),(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"4"})]})})}}},44950:(e,n,r)=>{"use strict";r.d(n,{n:()=>d});var o=r(31085),s=r(23489),i=r(19788);let d={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.x,{children:[(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"1"}),(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"2"}),(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"3"}),(0,o.jsx)(i.I,{span:{base:12,md:6,lg:3},children:"4"})]})}}},19788:(e,n,r)=>{"use strict";r.d(n,{I:()=>d});var o=r(31085),s=r(23489),i={col:"m_548ba23a",label:"m_60a4592e"};function d({children:e,...n}){return(0,o.jsx)(s.x.Col,{...n,children:(0,o.jsx)("div",{className:i.col,children:(0,o.jsx)("div",{className:i.label,children:e})})})}},23489:(e,n,r)=>{"use strict";r.d(n,{x:()=>N});var o=r(31085);r(14041);var s=r(7098),i=r(29686),d=r(69564),t=r(22448),l=r(34056),a=r(6754);let[c,h]=(0,r(59852).F)("Grid component was not found in tree");var p=r(54357),x=r(93698),u=r(41280),m=r(1300),j=r(2306),f=r(92408),g=r(54212);let v=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,G=(e,n,r)=>r||"auto"===e?"100%":"content"===e?"unset":v(e,n),y=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},w=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function C({span:e,order:n,offset:r,selector:s}){let i=(0,f.xd)(),d=h(),t=d.breakpoints||i.breakpoints,l=void 0===(0,j.D)(e)?12:(0,j.D)(e),a=(0,u.J)({"--col-order":j.D(n)?.toString(),"--col-flex-grow":y(l,d.grow),"--col-flex-basis":v(l,d.columns),"--col-width":"content"===l?"auto":void 0,"--col-max-width":G(l,d.columns,d.grow),"--col-offset":w((0,j.D)(r),d.columns)}),c=(0,x.H)(t).reduce((o,s)=>(o[s]||(o[s]={}),"object"==typeof n&&void 0!==n[s]&&(o[s]["--col-order"]=n[s]?.toString()),"object"==typeof e&&void 0!==e[s]&&(o[s]["--col-flex-grow"]=y(e[s],d.grow),o[s]["--col-flex-basis"]=v(e[s],d.columns),o[s]["--col-width"]="content"===e[s]?"auto":void 0,o[s]["--col-max-width"]=G(e[s],d.columns,d.grow)),"object"==typeof r&&void 0!==r[s]&&(o[s]["--col-offset"]=w(r[s],d.columns)),o),{}),p=(0,m.q)((0,x.H)(c),t).filter(e=>(0,x.H)(c[e.value]).length>0).map(e=>({query:"container"===d.type?`mantine-grid (min-width: ${t[e.value]})`:`(min-width: ${t[e.value]})`,styles:c[e.value]}));return(0,o.jsx)(g.K,{styles:a,media:"container"===d.type?void 0:p,container:"container"===d.type?p:void 0,selector:s})}var b={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};let k={span:12},I=(0,a.P9)((e,n)=>{let{classNames:r,className:s,style:d,styles:a,vars:c,span:x,order:u,offset:m,...j}=(0,i.Y)("GridCol",k,e),f=h(),g=(0,t.C)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{selector:`.${g}`,span:x,order:u,offset:m}),(0,o.jsx)(l.a,{ref:n,...f.getStyles("col",{className:(0,p.A)(s,g),style:d,classNames:r,styles:a}),...j})]})});I.classes=b,I.displayName="@mantine/core/GridCol";var M=r(33450);function A({gutter:e,selector:n,breakpoints:r,type:s}){let i=(0,f.xd)(),d=r||i.breakpoints,t=(0,u.J)({"--grid-gutter":(0,M.GY)((0,j.D)(e))}),l=(0,x.H)(d).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--grid-gutter"]=(0,M.GY)(e[r])),n),{}),a=(0,m.q)((0,x.H)(l),d).filter(e=>(0,x.H)(l[e.value]).length>0).map(e=>({query:"container"===s?`mantine-grid (min-width: ${d[e.value]})`:`(min-width: ${d[e.value]})`,styles:l[e.value]}));return(0,o.jsx)(g.K,{styles:t,media:"container"===s?void 0:a,container:"container"===s?a:void 0,selector:n})}let _={gutter:"md",grow:!1,columns:12},D=(0,s.V)((e,{justify:n,align:r,overflow:o})=>({root:{"--grid-justify":n,"--grid-align":r,"--grid-overflow":o}})),N=(0,a.P9)((e,n)=>{let r=(0,i.Y)("Grid",_,e),{classNames:s,className:a,style:h,styles:p,unstyled:x,vars:u,grow:m,gutter:j,columns:f,align:g,justify:v,children:G,breakpoints:y,type:w,...C}=r,k=(0,d.I)({name:"Grid",classes:b,props:r,className:a,style:h,classNames:s,styles:p,unstyled:x,vars:u,varsResolver:D}),I=(0,t.C)();return"container"===w&&y?(0,o.jsxs)(c,{value:{getStyles:k,grow:m,columns:f,breakpoints:y,type:w},children:[(0,o.jsx)(A,{selector:`.${I}`,...r}),(0,o.jsx)("div",{...k("container"),children:(0,o.jsx)(l.a,{ref:n,...k("root",{className:I}),...C,children:(0,o.jsx)("div",{...k("inner"),children:G})})})]}):(0,o.jsxs)(c,{value:{getStyles:k,grow:m,columns:f,breakpoints:y,type:w},children:[(0,o.jsx)(A,{selector:`.${I}`,...r}),(0,o.jsx)(l.a,{ref:n,...k("root",{className:I}),...C,children:(0,o.jsx)("div",{...k("inner"),children:G})})]})});N.classes=b,N.displayName="@mantine/core/Grid",N.Col=I}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(28961)),_N_E=e.O()}]);