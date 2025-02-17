(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13315],{99083:(e,i,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/simple-grid",function(){return n(28959)}])},28959:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>m});var s=n(31085),r=n(71184),o=n(96172),t=n(41624);let c={type:"configurator",component:function(e){return(0,s.jsx)(o.r,{...e,id:"grid-configurator",children:t.A})},code:`
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
`,controls:[{prop:"cols",type:"number",initialValue:3,min:1,max:6,step:1,libraryValue:"__"},{prop:"spacing",type:"size",initialValue:"md",libraryValue:"md"},{prop:"verticalSpacing",type:"size",initialValue:"md",libraryValue:"md"}]};var d=n(99518),a=n(42933),l=n(85954),p=n(38215);let h=(0,l.P)(p.XZ.SimpleGrid);function u(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"SimpleGrid"})," is a responsive grid system with equal-width columns.\nIt uses CSS grid layout. If you need to set different widths for columns, use\n",(0,s.jsx)(i.a,{href:"/core/grid",children:"Grid"})," component instead."]}),"\n",(0,s.jsx)(n,{data:c}),"\n",(0,s.jsx)(i.h2,{id:"spacing-and-verticalspacing-props",children:"spacing and verticalSpacing props"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"spacing"})," prop is used both for horizontal and vertical spacing if ",(0,s.jsx)(i.code,{children:"verticalSpacing"})," is not set:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:'import { SimpleGrid } from \'@mantine/core\';\n\n// `spacing` is used for both horizontal and vertical spacing\nconst Spacing = () => <SimpleGrid spacing="xl" />;\n\n// `spacing` is used for horizontal spacing, `verticalSpacing` for vertical\nconst VerticalSpacing = () => (\n  <SimpleGrid spacing="xl" verticalSpacing="lg" />\n);\n'})}),"\n",(0,s.jsx)(i.h2,{id:"responsive-props",children:"Responsive props"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"cols"}),", ",(0,s.jsx)(i.code,{children:"spacing"})," and ",(0,s.jsx)(i.code,{children:"verticalSpacing"})," props support object notation for responsive values,\nit works the same way as ",(0,s.jsx)(i.a,{href:"/styles/style-props",children:"style props"}),": the object may have ",(0,s.jsx)(i.code,{children:"base"}),", ",(0,s.jsx)(i.code,{children:"xs"}),",\n",(0,s.jsx)(i.code,{children:"sm"}),", ",(0,s.jsx)(i.code,{children:"md"}),", ",(0,s.jsx)(i.code,{children:"lg"})," and ",(0,s.jsx)(i.code,{children:"xl"})," key, and values from those keys will be applied according to current\nviewport width."]}),"\n",(0,s.jsxs)(i.p,{children:["In the following example, ",(0,s.jsx)(i.code,{children:"cols={{ base: 1, sm: 2, lg: 5 }}"})," means:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["1 column if viewport width is less than ",(0,s.jsx)(i.code,{children:"sm"})," breakpoint"]}),"\n",(0,s.jsxs)(i.li,{children:["2 columns if viewport width is between ",(0,s.jsx)(i.code,{children:"sm"})," and ",(0,s.jsx)(i.code,{children:"lg"})," breakpoints"]}),"\n",(0,s.jsxs)(i.li,{children:["5 columns if viewport width is greater than ",(0,s.jsx)(i.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Same logic applies to ",(0,s.jsx)(i.code,{children:"spacing"})," and ",(0,s.jsx)(i.code,{children:"verticalSpacing"})," props."]}),"\n",(0,s.jsx)(n,{data:d.n}),"\n",(0,s.jsx)(i.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,s.jsxs)(i.p,{children:["To use ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,s.jsx)(i.code,{children:'type="container"'}),". With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,s.jsxs)(i.p,{children:["Note that, when using container queries, ",(0,s.jsx)(i.code,{children:"cols"}),", ",(0,s.jsx)(i.code,{children:"spacing"})," and ",(0,s.jsx)(i.code,{children:"verticalSpacing"})," props cannot\nreference ",(0,s.jsx)(i.code,{children:"theme.breakpoints"})," values in keys. It is required to use exact px or em values."]}),"\n",(0,s.jsx)(i.p,{children:"To see how the grid changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,s.jsx)(n,{data:a.k}),"\n",(0,s.jsx)(i.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"SimpleGrid"})," uses ",(0,s.jsx)(i.a,{href:"https://caniuse.com/css-grid",children:"CSS Grid Layout"}),", it is supported in all modern browsers.\nIf you need to support older browsers, use ",(0,s.jsx)(i.a,{href:"/core/grid",children:"Grid"})," (flexbox based) component instead."]}),"\n",(0,s.jsxs)(i.p,{children:["When ",(0,s.jsx)(i.code,{children:'type="container"'})," is set, ",(0,s.jsx)(i.code,{children:"SimpleGrid"})," uses ",(0,s.jsx)(i.a,{href:"https://caniuse.com/css-container-queries",children:"container queries"}),".\nSince February 2023, container queries are supported in all modern browsers. If you need to support older browsers,\ndo not use container queries option."]})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(h,{...e,children:(0,s.jsx)(u,{...e})})}},42933:(e,i,n)=>{"use strict";n.d(i,{k:()=>t});var s=n(31085),r=n(96172),o=n(41624);let t={type:"code",component:function(){return(0,s.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,s.jsx)(r.r,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:o.A})})},code:`
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
`}},99518:(e,i,n)=>{"use strict";n.d(i,{n:()=>t});var s=n(31085),r=n(96172),o=n(41624);let t={type:"code",component:function(){return(0,s.jsx)(r.r,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:o.A})},code:`
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
`}},41624:(e,i,n)=>{"use strict";n.d(i,{A:()=>a});var s=n(31085),r=n(54357),o=n(34056),t=n(93065),c={item:"m_a4dc100e",label:"m_f6c78959"};function d({className:e,children:i,...n}){return(0,s.jsx)(o.a,{className:(0,r.A)(c.item,e),...n,children:(0,s.jsx)(t.E,{className:c.label,children:i})})}let a=[,,,,,].fill(0).map((e,i)=>(0,s.jsx)(d,{children:i+1},i))},96172:(e,i,n)=>{"use strict";n.d(i,{r:()=>S});var s=n(31085);n(14041);var r=n(29686),o=n(69564),t=n(22448),c=n(34056),d=n(6754),a=n(93698),l=n(4749),p=n(41280),h=n(33450),u=n(1300),m=n(2306),x=n(92408),g=n(54212);function v({spacing:e,verticalSpacing:i,cols:n,selector:r}){let o=(0,x.xd)(),t=void 0===i?e:i,c=(0,p.J)({"--sg-spacing-x":(0,h.GY)((0,m.D)(e)),"--sg-spacing-y":(0,h.GY)((0,m.D)(t)),"--sg-cols":m.D(n)?.toString()}),d=(0,a.H)(o.breakpoints).reduce((i,s)=>(i[s]||(i[s]={}),"object"==typeof e&&void 0!==e[s]&&(i[s]["--sg-spacing-x"]=(0,h.GY)(e[s])),"object"==typeof t&&void 0!==t[s]&&(i[s]["--sg-spacing-y"]=(0,h.GY)(t[s])),"object"==typeof n&&void 0!==n[s]&&(i[s]["--sg-cols"]=n[s]),i),{}),l=(0,u.q)((0,a.H)(d),o.breakpoints).filter(e=>(0,a.H)(d[e.value]).length>0).map(e=>({query:`(min-width: ${o.breakpoints[e.value]})`,styles:d[e.value]}));return(0,s.jsx)(g.K,{styles:c,media:l,selector:r})}function j(e){return"object"==typeof e&&null!==e?(0,a.H)(e):[]}function f({spacing:e,verticalSpacing:i,cols:n,selector:r}){let o=void 0===i?e:i,t=(0,p.J)({"--sg-spacing-x":(0,h.GY)((0,m.D)(e)),"--sg-spacing-y":(0,h.GY)((0,m.D)(o)),"--sg-cols":m.D(n)?.toString()}),c=function({spacing:e,verticalSpacing:i,cols:n}){return Array.from(new Set([...j(e),...j(i),...j(n)])).sort((e,i)=>(0,l.px)(e)-(0,l.px)(i))}({spacing:e,verticalSpacing:i,cols:n}),d=c.reduce((i,s)=>(i[s]||(i[s]={}),"object"==typeof e&&void 0!==e[s]&&(i[s]["--sg-spacing-x"]=(0,h.GY)(e[s])),"object"==typeof o&&void 0!==o[s]&&(i[s]["--sg-spacing-y"]=(0,h.GY)(o[s])),"object"==typeof n&&void 0!==n[s]&&(i[s]["--sg-cols"]=n[s]),i),{}),a=c.map(e=>({query:`simple-grid (min-width: ${e})`,styles:d[e]}));return(0,s.jsx)(g.K,{styles:t,container:a,selector:r})}var b={container:"m_925c2d2c",root:"m_2415a157"};let y={cols:1,spacing:"md",type:"media"},S=(0,d.P9)((e,i)=>{let n=(0,r.Y)("SimpleGrid",y,e),{classNames:d,className:a,style:l,styles:p,unstyled:h,vars:u,cols:m,verticalSpacing:x,spacing:g,type:j,...S}=n,w=(0,o.I)({name:"SimpleGrid",classes:b,props:n,className:a,style:l,classNames:d,styles:p,unstyled:h,vars:u}),G=(0,t.C)();return"container"===j?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{...n,selector:`.${G}`}),(0,s.jsx)("div",{...w("container"),children:(0,s.jsx)(c.a,{ref:i,...w("root",{className:G}),...S})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...n,selector:`.${G}`}),(0,s.jsx)(c.a,{ref:i,...w("root",{className:G}),...S})]})});S.classes=b,S.displayName="@mantine/core/SimpleGrid"},2306:(e,i,n)=>{"use strict";function s(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}n.d(i,{D:()=>s})},29814:(e,i,n)=>{"use strict";n.d(i,{r:()=>r});var s=n(4749);function r(e,i){return e in i?(0,s.px)(i[e]):(0,s.px)(e)}},1300:(e,i,n)=>{"use strict";n.d(i,{q:()=>r});var s=n(29814);function r(e,i){let n=e.map(e=>({value:e,px:(0,s.r)(e,i)}));return n.sort((e,i)=>e.px-i.px),n}}},e=>{var i=i=>e(e.s=i);e.O(0,[67456,39699,68831,90636,46593,38792],()=>i(99083)),_N_E=e.O()}]);