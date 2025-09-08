(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13315],{767:(e,i,s)=>{"use strict";s.d(i,{n:()=>d});var n=s(6029),r=s(89238),t=s(37873);let d={type:"code",component:function(){return(0,n.jsx)(r.r,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:t.A})},code:`
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
`}},1798:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},15444:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>u});var n=s(6029),r=s(16285),t=s(89238),d=s(37873);let o={type:"configurator",component:function(e){return(0,n.jsx)(t.r,{...e,id:"grid-configurator",children:d.A})},code:`
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
`,controls:[{prop:"cols",type:"number",initialValue:3,min:1,max:6,step:1,libraryValue:"__"},{prop:"spacing",type:"size",initialValue:"md",libraryValue:"md"},{prop:"verticalSpacing",type:"size",initialValue:"md",libraryValue:"md"}]};var a=s(767),l=s(21284),c=s(38547),p=s(5262);let h=(0,c.P)(p.XZ.SimpleGrid);function v(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:s}=i;return s||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"SimpleGrid"})," is a responsive grid system with equal-width columns.\nIt uses CSS grid layout. If you need to set different widths for columns, use\n",(0,n.jsx)(i.a,{href:"/core/grid",children:"Grid"})," component instead."]}),"\n",(0,n.jsx)(s,{data:o}),"\n",(0,n.jsx)(i.h2,{id:"spacing-and-verticalspacing-props",children:"spacing and verticalSpacing props"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"spacing"})," prop is used both for horizontal and vertical spacing if ",(0,n.jsx)(i.code,{children:"verticalSpacing"})," is not set:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'import { SimpleGrid } from \'@mantine/core\';\n\n// `spacing` is used for both horizontal and vertical spacing\nconst Spacing = () => <SimpleGrid spacing="xl" />;\n\n// `spacing` is used for horizontal spacing, `verticalSpacing` for vertical\nconst VerticalSpacing = () => (\n  <SimpleGrid spacing="xl" verticalSpacing="lg" />\n);\n'})}),"\n",(0,n.jsx)(i.h2,{id:"responsive-props",children:"Responsive props"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"cols"}),", ",(0,n.jsx)(i.code,{children:"spacing"})," and ",(0,n.jsx)(i.code,{children:"verticalSpacing"})," props support object notation for responsive values,\nit works the same way as ",(0,n.jsx)(i.a,{href:"/styles/style-props",children:"style props"}),": the object may have ",(0,n.jsx)(i.code,{children:"base"}),", ",(0,n.jsx)(i.code,{children:"xs"}),",\n",(0,n.jsx)(i.code,{children:"sm"}),", ",(0,n.jsx)(i.code,{children:"md"}),", ",(0,n.jsx)(i.code,{children:"lg"})," and ",(0,n.jsx)(i.code,{children:"xl"})," key, and values from those keys will be applied according to current\nviewport width."]}),"\n",(0,n.jsxs)(i.p,{children:["In the following example, ",(0,n.jsx)(i.code,{children:"cols={{ base: 1, sm: 2, lg: 5 }}"})," means:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["1 column if viewport width is less than ",(0,n.jsx)(i.code,{children:"sm"})," breakpoint"]}),"\n",(0,n.jsxs)(i.li,{children:["2 columns if viewport width is between ",(0,n.jsx)(i.code,{children:"sm"})," and ",(0,n.jsx)(i.code,{children:"lg"})," breakpoints"]}),"\n",(0,n.jsxs)(i.li,{children:["5 columns if viewport width is greater than ",(0,n.jsx)(i.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Same logic applies to ",(0,n.jsx)(i.code,{children:"spacing"})," and ",(0,n.jsx)(i.code,{children:"verticalSpacing"})," props."]}),"\n",(0,n.jsx)(s,{data:a.n}),"\n",(0,n.jsx)(i.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,n.jsxs)(i.p,{children:["To use ",(0,n.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,n.jsx)(i.code,{children:'type="container"'}),". With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,n.jsxs)(i.p,{children:["Note that, when using container queries, ",(0,n.jsx)(i.code,{children:"cols"}),", ",(0,n.jsx)(i.code,{children:"spacing"})," and ",(0,n.jsx)(i.code,{children:"verticalSpacing"})," props cannot\nreference ",(0,n.jsx)(i.code,{children:"theme.breakpoints"})," values in keys. It is required to use exact px or em values."]}),"\n",(0,n.jsx)(i.p,{children:"To see how the grid changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,n.jsx)(s,{data:l.k}),"\n",(0,n.jsx)(i.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"SimpleGrid"})," uses ",(0,n.jsx)(i.a,{href:"https://caniuse.com/css-grid",children:"CSS Grid Layout"}),", it is supported in all modern browsers.\nIf you need to support older browsers, use ",(0,n.jsx)(i.a,{href:"/core/grid",children:"Grid"})," (flexbox based) component instead."]}),"\n",(0,n.jsxs)(i.p,{children:["When ",(0,n.jsx)(i.code,{children:'type="container"'})," is set, ",(0,n.jsx)(i.code,{children:"SimpleGrid"})," uses ",(0,n.jsx)(i.a,{href:"https://caniuse.com/css-container-queries",children:"container queries"}),".\nSince February 2023, container queries are supported in all modern browsers. If you need to support older browsers,\ndo not use container queries option."]})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,{...e,children:(0,n.jsx)(v,{...e})})}},21284:(e,i,s)=>{"use strict";s.d(i,{k:()=>d});var n=s(6029),r=s(89238),t=s(37873);let d={type:"code",component:function(){return(0,n.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,n.jsx)(r.r,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:t.A})})},code:`
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
`}},24583:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},37873:(e,i,s)=>{"use strict";s.d(i,{A:()=>l});var n=s(6029),r=s(50212),t=s(76320),d=s(45208),o={item:"m_a4dc100e",label:"m_f6c78959"};function a({className:e,children:i,...s}){return(0,n.jsx)(t.a,{className:(0,r.A)(o.item,e),...s,children:(0,n.jsx)(d.E,{className:o.label,children:i})})}let l=[,,,,,].fill(0).map((e,i)=>(0,n.jsx)(a,{children:i+1},i))},41949:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,i,s)=>{"use strict";s.d(i,{A:()=>n});let n=(0,s(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},89167:(e,i,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/simple-grid",function(){return s(15444)}])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=89167)),_N_E=e.O()}]);