(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let o={};for(var i in e)n(o,i,{get:e[i],enumerable:!0});return r||n(o,Symbol.toStringTag,{value:"Module"}),o}])},20035,e=>{"use strict";var n=e.i(481178),r=e.i(44091),o=e.i(391466),i=e.i(83353),s=e.i(275519),d=e.i(232471);let[l,t]=(0,e.i(386179).createSafeContext)("Grid component was not found in tree");var a={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"},c=e.i(76112),p=e.i(931718),h=e.i(230780),x=e.i(496766),m=e.i(951254),u=e.i(871346),j=e.i(391398);let G=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?e===n?"100%":`calc(${100*e/n}% - ${(n-e)/n} * var(--grid-column-gap))`:void 0,f=(e,n,r)=>r||"auto"===e?"100%":"content"===e?"unset":G(e,n),g=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},C=(e,n)=>0===e?"0":e?`calc(${100*e/n}% + ${e/n} * var(--grid-column-gap))`:void 0;function w({span:e,order:n,offset:r,align:o,selector:i}){let s=(0,m.useMantineTheme)(),d=t(),l=d.breakpoints||s.breakpoints,a=(0,x.getBaseValue)(e),y=void 0===a?12:a,b=(0,p.filterProps)({"--col-order":(0,x.getBaseValue)(n)?.toString(),"--col-flex-grow":g(y,d.grow),"--col-flex-basis":G(y,d.columns),"--col-width":"content"===y?"auto":void 0,"--col-max-width":f(y,d.columns,d.grow),"--col-offset":C((0,x.getBaseValue)(r),d.columns),"--col-align-self":(0,x.getBaseValue)(o)}),v=(0,c.keys)(l).reduce((i,s)=>(i[s]||(i[s]={}),"object"==typeof n&&void 0!==n[s]&&(i[s]["--col-order"]=n[s]?.toString()),"object"==typeof e&&void 0!==e[s]&&(i[s]["--col-flex-grow"]=g(e[s],d.grow),i[s]["--col-flex-basis"]=G(e[s],d.columns),i[s]["--col-width"]="content"===e[s]?"auto":void 0,i[s]["--col-max-width"]=f(e[s],d.columns,d.grow)),"object"==typeof r&&void 0!==r[s]&&(i[s]["--col-offset"]=C(r[s],d.columns)),"object"==typeof o&&void 0!==o[s]&&(i[s]["--col-align-self"]=o[s]),i),{}),S=(0,h.getSortedBreakpoints)((0,c.keys)(v),l).filter(e=>(0,c.keys)(v[e.value]).length>0).map(e=>({query:"container"===d.type?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:v[e.value]}));return(0,j.jsx)(u.InlineStyles,{styles:b,media:"container"===d.type?void 0:S,container:"container"===d.type?S:void 0,selector:i})}var y=e.i(56206);let b={span:12},v=(0,s.factory)(e=>{let{classNames:n,className:o,style:s,styles:l,vars:a,span:c,order:p,offset:h,align:x,...m}=(0,r.useProps)("GridCol",b,e),u=t(),G=(0,i.useRandomClassName)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{selector:`.${G}`,span:c,order:p,offset:h,align:x}),(0,j.jsx)(d.Box,{...u.getStyles("col",{className:(0,y.default)(o,G),style:s,classNames:n,styles:l}),...m})]})});v.classes=a,v.displayName="@mantine/core/GridCol";var S=e.i(433512);function D({gap:e,rowGap:n,columnGap:r,selector:o,breakpoints:i,type:s}){let d=(0,m.useMantineTheme)(),l=i||d.breakpoints,t=(0,p.filterProps)({"--grid-gap":(0,S.getSpacing)((0,x.getBaseValue)(e)),"--grid-row-gap":(0,S.getSpacing)((0,x.getBaseValue)(n)),"--grid-column-gap":(0,S.getSpacing)((0,x.getBaseValue)(r))}),a=(0,c.keys)(l).reduce((o,i)=>(o[i]||(o[i]={}),"object"==typeof e&&void 0!==e[i]&&(o[i]["--grid-gap"]=(0,S.getSpacing)(e[i])),"object"==typeof n&&void 0!==n[i]&&(o[i]["--grid-row-gap"]=(0,S.getSpacing)(n[i])),"object"==typeof r&&void 0!==r[i]&&(o[i]["--grid-column-gap"]=(0,S.getSpacing)(r[i])),o),{}),G=(0,h.getSortedBreakpoints)((0,c.keys)(a),l).filter(e=>(0,c.keys)(a[e.value]).length>0).map(e=>({query:"container"===s?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:a[e.value]}));return(0,j.jsx)(u.InlineStyles,{styles:t,media:"container"===s?void 0:G,container:"container"===s?G:void 0,selector:o})}let k={gap:"md",columns:12},_=(0,n.createVarsResolver)((e,{justify:n,align:r,overflow:o})=>({root:{"--grid-justify":n,"--grid-align":r,"--grid-overflow":o}})),q=(0,s.factory)(e=>{let n=(0,r.useProps)("Grid",k,e),{classNames:s,className:t,style:c,styles:p,unstyled:h,vars:x,grow:m,gap:u,rowGap:G,columnGap:f,columns:g,align:C,justify:w,children:y,breakpoints:b,type:v,attributes:S,...q}=n,T=(0,o.useStyles)({name:"Grid",classes:a,props:n,className:t,style:c,classNames:s,styles:p,unstyled:h,attributes:S,vars:x,varsResolver:_}),B=(0,i.useRandomClassName)();return"container"===v&&b?(0,j.jsxs)(l,{value:{getStyles:T,grow:m,columns:g,breakpoints:b,type:v},children:[(0,j.jsx)(D,{selector:`.${B}`,...n}),(0,j.jsx)("div",{...T("container"),children:(0,j.jsx)(d.Box,{...T("root",{className:B}),...q,children:(0,j.jsx)("div",{...T("inner"),children:y})})})]}):(0,j.jsxs)(l,{value:{getStyles:T,grow:m,columns:g,breakpoints:b,type:v},children:[(0,j.jsx)(D,{selector:`.${B}`,...n}),(0,j.jsx)(d.Box,{...T("root",{className:B}),...q,children:(0,j.jsx)("div",{...T("inner"),children:y})})]})});q.classes=a,q.varsResolver=_,q.displayName="@mantine/core/Grid",q.Col=v,e.s(["Grid",0,q],20035)},118981,e=>{"use strict";var n=e.i(648863),r=e.i(20035),o=e.i(391398);function i({children:e,...n}){return(0,o.jsx)(r.Grid.Col,{...n,children:(0,o.jsx)("div",{className:"m_548ba23a",children:(0,o.jsx)("div",{className:"m_60a4592e",children:e})})})}let s={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Grid,{children:[(0,o.jsx)(i,{span:4,children:"1"}),(0,o.jsx)(i,{span:4,children:"2"}),(0,o.jsx)(i,{span:4,children:"3"})]})}},d={type:"configurator",component:function(e){return(0,o.jsxs)(r.Grid,{...e,children:[(0,o.jsx)(i,{span:4,children:"1"}),(0,o.jsx)(i,{span:4,children:"2"}),(0,o.jsx)(i,{span:4,children:"3"}),(0,o.jsx)(i,{span:4,children:"4"}),(0,o.jsx)(i,{span:4,children:"5"})]})},code:`
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
`,controls:[{prop:"grow",type:"boolean",initialValue:!0,libraryValue:!1},{prop:"gap",type:"size",initialValue:"md",libraryValue:"md"}]},l={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Grid,{children:[(0,o.jsx)(i,{span:3,children:"1"}),(0,o.jsx)(i,{span:3,children:"2"}),(0,o.jsx)(i,{span:3,offset:3,children:"3"})]})}},t={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Grid,{children:[(0,o.jsx)(i,{span:3,order:{base:2,sm:1,lg:3},children:"2"}),(0,o.jsx)(i,{span:3,order:{base:3,sm:2,lg:2},children:"3"}),(0,o.jsx)(i,{span:3,order:{base:1,sm:3,lg:1},children:"1"})]})}},a={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Grid,{children:[(0,o.jsx)(i,{span:4,children:"1"}),(0,o.jsx)(i,{span:4,children:"2"}),(0,o.jsx)(i,{span:4,children:"3"}),(0,o.jsx)(i,{span:4,children:"4"})]})}},c={type:"configurator",component:function(e){return(0,o.jsxs)(r.Grid,{...e,id:"grid-configurator",children:[(0,o.jsx)(i,{span:3,h:80,children:"1"}),(0,o.jsx)(i,{span:3,h:120,children:"2"}),(0,o.jsx)(i,{span:3,h:100,children:"3"})]})},code:`
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
`,controls:[{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}]},{prop:"align",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"}]}]},p={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Grid,{children:[(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"1"}),(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"2"}),(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"3"}),(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"4"})]})}},h={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Grid,{columns:24,children:[(0,o.jsx)(i,{span:12,children:"1"}),(0,o.jsx)(i,{span:6,children:"2"}),(0,o.jsx)(i,{span:6,children:"3"})]})}},x={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Grid,{children:[(0,o.jsx)(i,{span:"auto",children:"1"}),(0,o.jsx)(i,{span:6,children:"2"}),(0,o.jsx)(i,{span:"auto",children:"3"})]})}},m={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(r.Grid,{children:[(0,o.jsx)(i,{span:"content",children:"fit content"}),(0,o.jsx)(i,{span:6,children:"2"})]})}},u={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(r.Grid,{gap:{base:5,xs:"md",md:"xl",xl:50},children:[(0,o.jsx)(i,{span:4,children:"1"}),(0,o.jsx)(i,{span:4,children:"2"}),(0,o.jsx)(i,{span:4,children:"3"})]})}},j={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap="md" rowGap="xl" columnGap="sm">
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
      <Grid.Col span={3}>4</Grid.Col>
      <Grid.Col span={3}>5</Grid.Col>
      <Grid.Col span={3}>6</Grid.Col>
      <Grid.Col span={3}>7</Grid.Col>
      <Grid.Col span={3}>8</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(r.Grid,{gap:"md",rowGap:"xl",columnGap:"sm",children:[(0,o.jsx)(i,{span:3,children:"1"}),(0,o.jsx)(i,{span:3,children:"2"}),(0,o.jsx)(i,{span:3,children:"3"}),(0,o.jsx)(i,{span:3,children:"4"}),(0,o.jsx)(i,{span:3,children:"5"}),(0,o.jsx)(i,{span:3,children:"6"}),(0,o.jsx)(i,{span:3,children:"7"}),(0,o.jsx)(i,{span:3,children:"8"})]})}},G={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid align="stretch">
      <Grid.Col span={4} align="flex-start">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-start
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="center">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          center
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="flex-end">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-end
        </div>
      </Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(r.Grid,{align:"stretch",children:[(0,o.jsx)(i,{span:4,align:"flex-start",style:{minHeight:"150px"},children:"flex-start"}),(0,o.jsx)(i,{span:4,align:"center",style:{minHeight:"150px"},children:"center"}),(0,o.jsx)(i,{span:4,align:"flex-end",style:{minHeight:"150px"},children:"flex-end"})]})}},f={type:"code",code:`
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
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      </Grid>
    </div>
  );
}
`,component:function(){return(0,o.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsxs)(r.Grid,{type:"container",breakpoints:{xs:"100px",sm:"200px",md:"300px",lg:"400px",xl:"500px"},children:[(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"1"}),(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"2"}),(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"3"}),(0,o.jsx)(i,{span:{base:12,md:6,lg:3},children:"4"})]})})}};var g=(0,n.__exportAll)({auto:()=>x,columnAlign:()=>G,columns:()=>h,container:()=>f,content:()=>m,flexConfigurator:()=>c,gap:()=>u,growConfigurator:()=>d,offset:()=>l,order:()=>t,responsive:()=>p,rowColumnGap:()=>j,rows:()=>a,usage:()=>s});e.s(["GridDemos",0,g],118981)},558243,e=>{"use strict";var n=e.i(391398),r=e.i(38856),o=e.i(118981);e.i(603441);var i=e.i(62558);e.i(457450);var s=e.i(418026);let d=(0,i.Layout)(s.MDX_DATA.Grid);function l(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:s}=i;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s,{data:o.GridDemos.usage}),"\n",(0,n.jsx)(i.h2,{id:"columns-span",children:"Columns span"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Grid.Col"})," ",(0,n.jsx)(i.code,{children:"span"})," prop controls the ratio of column width to the total width of the row.\nBy default, grid uses a 12 columns layout, so the ",(0,n.jsx)(i.code,{children:"span"})," prop can be any number from 1 to 12."]}),"\n",(0,n.jsx)(i.p,{children:"Examples:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<Grid.Col span={3} />"})," – 3 / 12 = 25% of row width"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<Grid.Col span={4} />"})," – 4 / 12 = 33% of row width"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<Grid.Col span={6} />"})," – 6 / 12 = 50% of row width"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<Grid.Col span={12} />"})," – 12 / 12 = 100% of row width"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"span"})," prop also supports object syntax to change column width based on viewport width.\nIt accepts ",(0,n.jsx)(i.code,{children:"xs"}),", ",(0,n.jsx)(i.code,{children:"sm"}),", ",(0,n.jsx)(i.code,{children:"md"}),", ",(0,n.jsx)(i.code,{children:"lg"})," and ",(0,n.jsx)(i.code,{children:"xl"})," keys and values from 1 to 12. The syntax\nis the same as in ",(0,n.jsx)(i.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["In the following example ",(0,n.jsx)(i.code,{children:"span={{ base: 12, md: 6, lg: 3 }}"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"base"})," – 12 / 12 = 100% of row width when viewport width is less than ",(0,n.jsx)(i.code,{children:"md"})," breakpoint"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"md"})," – 6 / 12 = 50% of row width when viewport width is between ",(0,n.jsx)(i.code,{children:"md"})," and ",(0,n.jsx)(i.code,{children:"lg"})," breakpoints"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"lg"})," – 3 / 12 = 25% of row width when viewport width is greater than ",(0,n.jsx)(i.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.responsive}),"\n",(0,n.jsx)(i.h2,{id:"gap",children:"Gap"}),"\n",(0,n.jsxs)(i.p,{children:["Set the ",(0,n.jsx)(i.code,{children:"gap"})," prop to control spacing between columns and rows. The prop works the same\nway as ",(0,n.jsx)(i.a,{href:"/styles/style-props",children:"style props"})," – you can reference ",(0,n.jsx)(i.code,{children:"theme.spacing"})," values\nwith ",(0,n.jsx)(i.code,{children:"xs"}),", ",(0,n.jsx)(i.code,{children:"sm"}),", ",(0,n.jsx)(i.code,{children:"md"}),", ",(0,n.jsx)(i.code,{children:"lg"})," and ",(0,n.jsx)(i.code,{children:"xl"})," strings and use object syntax to change gap\nbased on viewport width:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.gap}),"\n",(0,n.jsx)(i.h2,{id:"row-and-column-gap",children:"Row and column gap"}),"\n",(0,n.jsxs)(i.p,{children:["Use ",(0,n.jsx)(i.code,{children:"rowGap"})," and ",(0,n.jsx)(i.code,{children:"columnGap"})," props to set different spacing for rows and columns.\n",(0,n.jsx)(i.code,{children:"rowGap"})," and ",(0,n.jsx)(i.code,{children:"columnGap"})," override ",(0,n.jsx)(i.code,{children:"gap"})," prop if both are set:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.rowColumnGap}),"\n",(0,n.jsx)(i.h2,{id:"grow",children:"Grow"}),"\n",(0,n.jsxs)(i.p,{children:["If the ",(0,n.jsx)(i.code,{children:"grow"})," prop is set, the column will grow to fill the remaining space in the row:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.growConfigurator}),"\n",(0,n.jsx)(i.h2,{id:"column-offset",children:"Column offset"}),"\n",(0,n.jsxs)(i.p,{children:["Set the ",(0,n.jsx)(i.code,{children:"offset"})," prop on the ",(0,n.jsx)(i.code,{children:"Grid.Col"})," component to add gaps to the grid. The ",(0,n.jsx)(i.code,{children:"offset"})," prop\nsupports the same syntax as the ",(0,n.jsx)(i.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,n.jsx)(i.code,{children:"xs"}),", ",(0,n.jsx)(i.code,{children:"sm"}),", ",(0,n.jsx)(i.code,{children:"md"}),", ",(0,n.jsx)(i.code,{children:"lg"})," and ",(0,n.jsx)(i.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.offset}),"\n",(0,n.jsx)(i.h2,{id:"order",children:"Order"}),"\n",(0,n.jsxs)(i.p,{children:["Set the ",(0,n.jsx)(i.code,{children:"order"})," prop on the ",(0,n.jsx)(i.code,{children:"Grid.Col"})," component to change the order of columns. The ",(0,n.jsx)(i.code,{children:"order"})," prop\nsupports the same syntax as the ",(0,n.jsx)(i.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,n.jsx)(i.code,{children:"xs"}),", ",(0,n.jsx)(i.code,{children:"sm"}),", ",(0,n.jsx)(i.code,{children:"md"}),", ",(0,n.jsx)(i.code,{children:"lg"})," and ",(0,n.jsx)(i.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.order}),"\n",(0,n.jsx)(i.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,n.jsxs)(i.p,{children:["Once the columns' ",(0,n.jsx)(i.code,{children:"span"})," and ",(0,n.jsx)(i.code,{children:"offset"})," sum exceeds the ",(0,n.jsx)(i.code,{children:"columns"})," prop (12 by default),\ncolumns are moved to the next row:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.rows}),"\n",(0,n.jsx)(i.h2,{id:"justify-and-align",children:"Justify and align"}),"\n",(0,n.jsxs)(i.p,{children:["You can control the ",(0,n.jsx)(i.code,{children:"justify-content"})," and ",(0,n.jsx)(i.code,{children:"align-items"})," CSS properties with the ",(0,n.jsx)(i.code,{children:"justify"})," and ",(0,n.jsx)(i.code,{children:"align"})," props on the ",(0,n.jsx)(i.code,{children:"Grid"})," component:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.flexConfigurator}),"\n",(0,n.jsx)(i.h2,{id:"column-alignment",children:"Column alignment"}),"\n",(0,n.jsxs)(i.p,{children:["Use the ",(0,n.jsx)(i.code,{children:"align"})," prop on individual ",(0,n.jsx)(i.code,{children:"Grid.Col"})," components to control the ",(0,n.jsx)(i.code,{children:"align-self"})," CSS property\nfor each column. This allows you to override the grid's ",(0,n.jsx)(i.code,{children:"align"})," prop for specific columns:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.columnAlign}),"\n",(0,n.jsx)(i.h2,{id:"auto-sized-columns",children:"Auto sized columns"}),"\n",(0,n.jsxs)(i.p,{children:["All columns in a row with ",(0,n.jsx)(i.code,{children:'span="auto"'})," grow as much as they can to fill the row.\nIn the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.auto}),"\n",(0,n.jsx)(i.h2,{id:"fit-column-content",children:"Fit column content"}),"\n",(0,n.jsxs)(i.p,{children:["If you set ",(0,n.jsx)(i.code,{children:'span="content"'}),", the column's size will automatically adjust to match the width of its content:"]}),"\n",(0,n.jsx)(s,{data:o.GridDemos.content}),"\n",(0,n.jsx)(i.h2,{id:"change-columns-count",children:"Change columns count"}),"\n",(0,n.jsxs)(i.p,{children:["By default, grid uses a 12 columns layout. You can change it by setting the ",(0,n.jsx)(i.code,{children:"columns"})," prop on the ",(0,n.jsx)(i.code,{children:"Grid"})," component.\nNote that in this case, columns span and offset will be calculated relative to this value."]}),"\n",(0,n.jsx)(i.p,{children:"In the following example, the first column takes 50% with 12 span (12/24), second and third take 25% (6/24):"}),"\n",(0,n.jsx)(s,{data:o.GridDemos.columns}),"\n",(0,n.jsx)(i.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,n.jsxs)(i.p,{children:["To use ",(0,n.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,n.jsx)(i.code,{children:'type="container"'}),". With container queries, all responsive values\nare adjusted based on the container width, not the viewport width."]}),"\n",(0,n.jsxs)(i.p,{children:["Note that, when using container queries, it is also required to set ",(0,n.jsx)(i.code,{children:"breakpoints"})," prop\nto the exact container width values."]}),"\n",(0,n.jsx)(i.p,{children:"To see how the grid changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,n.jsx)(s,{data:o.GridDemos.container}),"\n",(0,n.jsx)(i.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,n.jsxs)(i.p,{children:["Grid component uses flexbox with native ",(0,n.jsx)(i.code,{children:"gap"})," for layout, which is supported in all modern browsers."]}),"\n",(0,n.jsx)(i.h3,{id:"container-queries-1",children:"Container queries"}),"\n",(0,n.jsxs)(i.p,{children:["When using ",(0,n.jsx)(i.code,{children:'type="container"'}),", the Grid component uses ",(0,n.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"CSS container queries"}),".\nContainer queries are supported in the following browsers:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Chrome 105+"}),"\n",(0,n.jsx)(i.li,{children:"Safari 16+"}),"\n",(0,n.jsx)(i.li,{children:"Firefox 110+"}),"\n",(0,n.jsx)(i.li,{children:"Edge 105+"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["If you need to support older browsers, use the default ",(0,n.jsx)(i.code,{children:'type="media"'})," which uses standard media queries\ninstead of container queries."]}),"\n",(0,n.jsx)(i.p,{children:"Example with media queries (default):"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { Grid } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Grid gap=\"md\">\n      <Grid.Col span={{ base: 12, md: 6 }}>1</Grid.Col>\n      <Grid.Col span={{ base: 12, md: 6 }}>2</Grid.Col>\n    </Grid>\n  );\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"Example with container queries:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { Grid } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Grid\n      type=\"container\"\n      breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}\n      gap=\"md\"\n    >\n      <Grid.Col span={{ base: 12, md: 6 }}>1</Grid.Col>\n      <Grid.Col span={{ base: 12, md: 6 }}>2</Grid.Col>\n    </Grid>\n  );\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(d,{...e,children:(0,n.jsx)(l,{...e})})}])},986872,(e,n,r)=>{let o="/core/grid";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(558243)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);