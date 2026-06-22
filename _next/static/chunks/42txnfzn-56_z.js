(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var i=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var r in e)i(o,r,{get:e[r],enumerable:!0});return n||i(o,Symbol.toStringTag,{value:"Module"}),o}])},604531,e=>{"use strict";var i=e.i(648863),n=e.i(232471),o=e.i(883364),r=e.i(391398),s=e.i(56206);function t({className:e,children:i,...d}){return(0,r.jsx)(n.Box,{className:(0,s.default)("m_a4dc100e",e),...d,children:(0,r.jsx)(o.Text,{className:"m_f6c78959",children:i})})}let d=[,,,,,].fill(0).map((e,i)=>(0,r.jsx)(t,{children:i+1},i));var l=e.i(140763);let c={type:"configurator",component:function(e){return(0,r.jsx)(l.SimpleGrid,{...e,id:"grid-configurator",children:d})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`,controls:[{prop:"cols",type:"number",initialValue:3,min:1,max:6,step:1,libraryValue:"__"},{prop:"spacing",type:"size",initialValue:"md",libraryValue:"md"},{prop:"verticalSpacing",type:"size",initialValue:"md",libraryValue:"md"}]},a={type:"code",component:function(){return(0,r.jsx)(l.SimpleGrid,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:d})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`},p={type:"code",component:function(){return(0,r.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)(l.SimpleGrid,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:d})})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
`},h={type:"code",component:function(){return(0,r.jsx)(l.SimpleGrid,{minColWidth:"200px",children:d})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid minColWidth="200px">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var m=e.i(671640);let u=`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* auto-fill: empty tracks are preserved, items do not stretch */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fill">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>

      {/* auto-fit: empty tracks are collapsed, items stretch to fill the row */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fit">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>
    </>
  );
}
`,x=[,,,].fill(0).map((e,i)=>(0,r.jsx)(t,{children:i+1},i)),v={type:"code",component:function(){return(0,r.jsxs)(m.Stack,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Text,{mb:"xs",fw:500,children:"auto-fill"}),(0,r.jsx)(l.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fill",children:x})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Text,{mb:"xs",fw:500,children:"auto-fit"}),(0,r.jsx)(l.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fit",children:x})]})]})},code:u},j={type:"code",component:function(){return(0,r.jsx)(l.SimpleGrid,{cols:3,autoRows:"minmax(100px, auto)",children:d})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var f=(0,i.__exportAll)({autoFlow:()=>v,autoRows:()=>j,container:()=>p,minColWidth:()=>h,responsive:()=>a,usage:()=>c});e.s(["SimpleGridDemos",0,f],604531)},406767,e=>{"use strict";var i=e.i(391398),n=e.i(38856),o=e.i(604531);e.i(603441);var r=e.i(62558);e.i(457450);var s=e.i(418026);let t=(0,r.Layout)(s.MDX_DATA.SimpleGrid);function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:s}=r;return s||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"SimpleGrid"})," is a responsive grid system with equal-width columns.\nIt uses CSS grid layout. If you need to set different widths for columns, use\n",(0,i.jsx)(r.a,{href:"/core/grid",children:"Grid"})," component instead."]}),"\n",(0,i.jsx)(s,{data:o.SimpleGridDemos.usage}),"\n",(0,i.jsx)(r.h2,{id:"spacing-and-verticalspacing-props",children:"spacing and verticalSpacing props"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"spacing"})," prop controls horizontal spacing between columns. By default, it is also used\nfor vertical spacing between rows. If you want different vertical spacing, set the\n",(0,i.jsx)(r.code,{children:"verticalSpacing"})," prop explicitly:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:'import { SimpleGrid } from \'@mantine/core\';\n\n// `spacing` is used for both horizontal and vertical spacing\nconst Spacing = () => <SimpleGrid spacing="xl" />;\n\n// `spacing` is used for horizontal spacing, `verticalSpacing` for vertical\nconst VerticalSpacing = () => (\n  <SimpleGrid spacing="xl" verticalSpacing="lg" />\n);\n'})}),"\n",(0,i.jsx)(r.h2,{id:"responsive-props",children:"Responsive props"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"cols"}),", ",(0,i.jsx)(r.code,{children:"spacing"})," and ",(0,i.jsx)(r.code,{children:"verticalSpacing"})," props support object notation for responsive values,\nit works the same way as ",(0,i.jsx)(r.a,{href:"/styles/style-props",children:"style props"}),": the object may have ",(0,i.jsx)(r.code,{children:"base"}),", ",(0,i.jsx)(r.code,{children:"xs"}),",\n",(0,i.jsx)(r.code,{children:"sm"}),", ",(0,i.jsx)(r.code,{children:"md"}),", ",(0,i.jsx)(r.code,{children:"lg"})," and ",(0,i.jsx)(r.code,{children:"xl"})," key, and values from those keys will be applied according to current\nviewport width."]}),"\n",(0,i.jsxs)(r.p,{children:["In the following example, ",(0,i.jsx)(r.code,{children:"cols={{ base: 1, sm: 2, lg: 5 }}"})," means:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["1 column if viewport width is less than ",(0,i.jsx)(r.code,{children:"sm"})," breakpoint"]}),"\n",(0,i.jsxs)(r.li,{children:["2 columns if viewport width is between ",(0,i.jsx)(r.code,{children:"sm"})," and ",(0,i.jsx)(r.code,{children:"lg"})," breakpoints"]}),"\n",(0,i.jsxs)(r.li,{children:["5 columns if viewport width is greater than ",(0,i.jsx)(r.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Same logic applies to ",(0,i.jsx)(r.code,{children:"spacing"})," and ",(0,i.jsx)(r.code,{children:"verticalSpacing"})," props."]}),"\n",(0,i.jsx)(s,{data:o.SimpleGridDemos.responsive}),"\n",(0,i.jsx)(r.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,i.jsxs)(r.p,{children:["To use ",(0,i.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,i.jsx)(r.code,{children:'type="container"'}),". With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,i.jsxs)(r.p,{children:["Note that, when using container queries, ",(0,i.jsx)(r.code,{children:"cols"}),", ",(0,i.jsx)(r.code,{children:"spacing"})," and ",(0,i.jsx)(r.code,{children:"verticalSpacing"})," props cannot\nreference ",(0,i.jsx)(r.code,{children:"theme.breakpoints"})," values in keys. It is required to use exact px or em values."]}),"\n",(0,i.jsx)(r.p,{children:"To see how the grid changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,i.jsx)(s,{data:o.SimpleGridDemos.container}),"\n",(0,i.jsx)(r.h2,{id:"auto-fill-columns",children:"Auto-fill columns"}),"\n",(0,i.jsxs)(r.p,{children:["Set the ",(0,i.jsx)(r.code,{children:"minColWidth"})," prop to use CSS Grid ",(0,i.jsx)(r.code,{children:"auto-fill"})," to automatically adjust the number\nof columns based on available space and minimum column width. When ",(0,i.jsx)(r.code,{children:"minColWidth"})," is set,\nthe ",(0,i.jsx)(r.code,{children:"cols"})," prop is ignored."]}),"\n",(0,i.jsx)(s,{data:o.SimpleGridDemos.minColWidth}),"\n",(0,i.jsx)(r.h2,{id:"auto-fill-vs-auto-fit",children:"auto-fill vs auto-fit"}),"\n",(0,i.jsxs)(r.p,{children:["By default, ",(0,i.jsx)(r.code,{children:"minColWidth"})," uses ",(0,i.jsx)(r.code,{children:"auto-fill"})," behavior. You can change it to ",(0,i.jsx)(r.code,{children:"auto-fit"})," with the\n",(0,i.jsx)(r.code,{children:"autoFlow"})," prop. The difference between the two:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"auto-fill"})," creates as many tracks as possible without overflowing the container, leaving empty tracks if items don't fill the row"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"auto-fit"})," works the same way but collapses empty tracks, allowing items to stretch and fill the remaining space"]}),"\n"]}),"\n",(0,i.jsx)(s,{data:o.SimpleGridDemos.autoFlow}),"\n",(0,i.jsx)(r.h2,{id:"auto-rows",children:"Auto rows"}),"\n",(0,i.jsxs)(r.p,{children:["Set the ",(0,i.jsx)(r.code,{children:"autoRows"})," prop to control the size of implicitly created grid rows.\nThis is useful when you need all rows to have equal height or a minimum height."]}),"\n",(0,i.jsx)(s,{data:o.SimpleGridDemos.autoRows}),"\n",(0,i.jsx)(r.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"SimpleGrid"})," uses ",(0,i.jsx)(r.a,{href:"https://caniuse.com/css-grid",children:"CSS Grid Layout"}),", it is supported in all modern browsers.\nIf you need to support older browsers, use ",(0,i.jsx)(r.a,{href:"/core/grid",children:"Grid"})," (flexbox based) component instead."]}),"\n",(0,i.jsxs)(r.p,{children:["When ",(0,i.jsx)(r.code,{children:'type="container"'})," is set, ",(0,i.jsx)(r.code,{children:"SimpleGrid"})," uses ",(0,i.jsx)(r.a,{href:"https://caniuse.com/css-container-queries",children:"container queries"}),".\nSince February 2023, container queries are supported in all modern browsers. If you need to support older browsers,\ndo not use container queries option."]})]})}e.s(["default",0,function(e={}){return(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})})}])},93878,(e,i,n)=>{let o="/core/simple-grid";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(406767)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(i=>Promise.all(["static/chunks/22379_btw709h.js"].map(i=>e.l(i))).then(()=>i(493594)))},828805,e=>{e.v(i=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(i=>e.l(i))).then(()=>i(879466)))}]);