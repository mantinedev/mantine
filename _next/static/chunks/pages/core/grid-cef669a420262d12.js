(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84242],{98235:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/grid",function(){return r(29056)}])},29056:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return X}});var t=r(24246),o=r(71670),l=r(27378),i=r(13110),s=r(55956);let d=`
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
`,c={type:"code",code:d,component:function(){return l.createElement(i.r,null,l.createElement(s.Y,{span:4},"1"),l.createElement(s.Y,{span:4},"2"),l.createElement(s.Y,{span:4},"3"))}};var a=r(61804);let p=`
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
`,m={type:"code",code:p,component:function(){return l.createElement(i.r,{gutter:{base:5,xs:"md",md:"xl",xl:50}},l.createElement(s.Y,{span:4},"1"),l.createElement(s.Y,{span:4},"2"),l.createElement(s.Y,{span:4},"3"))}},u=`
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
`,h={type:"configurator",component:function(e){return l.createElement(i.r,{...e},l.createElement(s.Y,{span:4},"1"),l.createElement(s.Y,{span:4},"2"),l.createElement(s.Y,{span:4},"3"),l.createElement(s.Y,{span:4},"4"),l.createElement(s.Y,{span:4},"5"))},code:u,controls:[{prop:"grow",type:"boolean",initialValue:!0,libraryValue:!1},{prop:"gutter",type:"size",initialValue:"md",libraryValue:"md"}]},f=`
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
`,x={type:"code",code:f,component:function(){return l.createElement(i.r,null,l.createElement(s.Y,{span:3},"1"),l.createElement(s.Y,{span:3},"2"),l.createElement(s.Y,{span:3,offset:3},"3"))}},j=`
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
`,G={type:"code",code:j,component:function(){return l.createElement(i.r,null,l.createElement(s.Y,{span:3,order:{base:2,sm:1,lg:3}},"2"),l.createElement(s.Y,{span:3,order:{base:3,sm:2,lg:2}},"3"),l.createElement(s.Y,{span:3,order:{base:1,sm:3,lg:1}},"1"))}},g=`
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
`,w={type:"code",code:g,component:function(){return l.createElement(i.r,null,l.createElement(s.Y,{span:4},"1"),l.createElement(s.Y,{span:4},"2"),l.createElement(s.Y,{span:4},"3"),l.createElement(s.Y,{span:4},"4"))}};var C=r(71078);let y=`
import { Grid, rem } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>1</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
  );
}
`,b={type:"configurator",component:function(e){return l.createElement(i.r,{...e,id:"grid-configurator"},l.createElement(s.Y,{span:3,style:{minHeight:(0,C.h)(80)}},"1"),l.createElement(s.Y,{span:3,style:{minHeight:(0,C.h)(120)}},"2"),l.createElement(s.Y,{span:3},"3"))},code:y,controls:[{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}]},{prop:"align",type:"select",initialValue:"stretch",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"stretch",value:"stretch"}]}]},v=`
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
`,E={type:"code",code:v,component:function(){return l.createElement(i.r,null,l.createElement(s.Y,{span:"auto"},"1"),l.createElement(s.Y,{span:6},"2"),l.createElement(s.Y,{span:"auto"},"3"))}},Y=`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`,k={type:"code",code:Y,component:function(){return l.createElement(i.r,null,l.createElement(s.Y,{span:"content"},"fit content"),l.createElement(s.Y,{span:6},"2"))}},_=`
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
`,D={type:"code",code:_,component:function(){return l.createElement(i.r,{columns:24},l.createElement(s.Y,{span:12},"1"),l.createElement(s.Y,{span:6},"2"),l.createElement(s.Y,{span:6},"3"))}};var N=r(3916),I=r(54568);let S=(0,N.A)(I.us.Grid);function V(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(n.h2,{id:"columns-span",children:"Columns span"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Grid.Col"})," ",(0,t.jsx)(n.code,{children:"span"})," prop controls the ratio of column width to the total width of the row.\nBy default, grid uses 12 columns layout, so ",(0,t.jsx)(n.code,{children:"span"})," prop can be any number from 1 to 12."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={3} />"})," – 3 / 12 = 25% of row width"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={4} />"})," – 4 / 12 = 33% of row width"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={6} />"})," – 6 / 12 = 50% of row width"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={12} />"})," – 12 / 12 = 100% of row width"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"span"})," prop also supports object syntax to change column width based on viewport width,\nit accepts ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12. The syntax\nis the same as in ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following example ",(0,t.jsx)(n.code,{children:"span={{ base: 12, md: 6, lg: 3 }}"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base"})," – 12 / 12 = 100% of row width when viewport width is less than ",(0,t.jsx)(n.code,{children:"md"})," breakpoint"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"md"})," – 6 / 12 = 50% of row width when viewport width is between ",(0,t.jsx)(n.code,{children:"md"})," and ",(0,t.jsx)(n.code,{children:"lg"})," breakpoints"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lg"})," – 3 / 12 = 25% of row width when viewport width is greater than ",(0,t.jsx)(n.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:a.j}),"\n",(0,t.jsx)(n.h2,{id:"gutter",children:"Gutter"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"gutter"})," prop to control spacing between columns. The prop works the same\nway as ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," – you can reference ",(0,t.jsx)(n.code,{children:"theme.spacing"})," values\nwith ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," strings and use object syntax to change gutter\nbased on viewport width:"]}),"\n",(0,t.jsx)(r,{data:m}),"\n",(0,t.jsx)(n.h2,{id:"grow",children:"Grow"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"grow"})," prop is set, column will grow to fill the remaining space in the row:"]}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"column-offset",children:"Column offset"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"offset"})," prop on ",(0,t.jsx)(n.code,{children:"Grid.Col"})," component to add gaps to the grid. ",(0,t.jsx)(n.code,{children:"offset"})," prop\nsupports the same syntax as ",(0,t.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,t.jsx)(r,{data:x}),"\n",(0,t.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"order"})," prop on ",(0,t.jsx)(n.code,{children:"Grid.Col"})," component to change the order of columns. ",(0,t.jsx)(n.code,{children:"order"})," prop\nsupports the same syntax as ",(0,t.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,t.jsx)(r,{data:G}),"\n",(0,t.jsx)(n.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,t.jsxs)(n.p,{children:["Once columns ",(0,t.jsx)(n.code,{children:"span"})," and ",(0,t.jsx)(n.code,{children:"offset"})," sum exceeds ",(0,t.jsx)(n.code,{children:"columns"})," prop (12 by default),\ncolumns are moved to the next row:"]}),"\n",(0,t.jsx)(r,{data:w}),"\n",(0,t.jsx)(n.h2,{id:"justify-and-align",children:"Justify and align"}),"\n",(0,t.jsxs)(n.p,{children:["You can control ",(0,t.jsx)(n.code,{children:"justify-content"})," and ",(0,t.jsx)(n.code,{children:"align-items"})," CSS properties with ",(0,t.jsx)(n.code,{children:"justify"})," and ",(0,t.jsx)(n.code,{children:"align"})," props on ",(0,t.jsx)(n.code,{children:"Grid"})," component:"]}),"\n",(0,t.jsx)(r,{data:b}),"\n",(0,t.jsx)(n.h2,{id:"auto-sized-columns",children:"Auto sized columns"}),"\n",(0,t.jsxs)(n.p,{children:["All columns in a row with ",(0,t.jsx)(n.code,{children:'span="auto"'})," grow as much as they can to fill the row.\nIn the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:"]}),"\n",(0,t.jsx)(r,{data:E}),"\n",(0,t.jsx)(n.h2,{id:"fit-column-content",children:"Fit column content"}),"\n",(0,t.jsxs)(n.p,{children:["If you set ",(0,t.jsx)(n.code,{children:'span="content"'}),", the column's size will automatically adjust to match the width of its content:"]}),"\n",(0,t.jsx)(r,{data:k}),"\n",(0,t.jsx)(n.h2,{id:"change-columns-count",children:"Change columns count"}),"\n",(0,t.jsxs)(n.p,{children:["By default, grid uses 12 columns layout, you can change it by setting ",(0,t.jsx)(n.code,{children:"columns"})," prop on ",(0,t.jsx)(n.code,{children:"Grid"})," component.\nNote that in this case, columns span and offset will be calculated relative to this value."]}),"\n",(0,t.jsx)(n.p,{children:"In the following example, first column takes 50% with 12 span (12/24), second and third take 25% (6/24):"}),"\n",(0,t.jsx)(r,{data:D}),"\n",(0,t.jsx)(n.h2,{id:"overflow-hidden",children:"overflow: hidden"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"Grid"})," has ",(0,t.jsx)(n.code,{children:"overflow: visible"})," style on the root element. In some cases\nyou might want to change it to ",(0,t.jsx)(n.code,{children:"overflow: hidden"})," to prevent negative margins from\noverflowing the grid container. For example, if you use ",(0,t.jsx)(n.code,{children:"Grid"})," without parent container\nwhich has padding."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Grid } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Grid overflow=\"hidden\">\n      <Grid.Col span={6}>1</Grid.Col>\n      <Grid.Col span={6}>2</Grid.Col>\n    </Grid>\n  );\n}\n"})})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(S,{...e,children:(0,t.jsx)(V,{...e})})}},61804:function(e,n,r){"use strict";r.d(n,{j:function(){return s}});var t=r(27378),o=r(13110),l=r(55956);let i=`
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
`,s={type:"code",code:i,component:function(){return t.createElement(o.r,null,t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"1"),t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"2"),t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"3"),t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"4"))}}},55956:function(e,n,r){"use strict";r.d(n,{Y:function(){return l}});var t=r(27378),o=r(13110);function l({children:e,...n}){return t.createElement(o.r.Col,{...n},t.createElement("div",{className:"m-548ba23a"},t.createElement("div",{className:"m-60a4592e"},e)))}},13110:function(e,n,r){"use strict";r.d(n,{r:function(){return S}});var t=r(27378),o=r(83453),l=r(96739),i=r(6231),s=r(40593),d=r(56589),c=r(20410),a=r(71656);let[p,m]=(0,a.R)("Grid component was not found in tree");var u=r(40624),h=r(53007),f=r(86689),x=r(31582),j=r(75001),G=r(2256),g=r(9889);let w=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,C=(e,n,r)=>r||"auto"===e?"100%":"content"===e?"unset":w(e,n),y=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},b=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function v({span:e,order:n,offset:r,selector:o}){let l=(0,G.rZ)(),i=m(),s=(0,j.v)(e),d=void 0===s?12:(0,j.v)(e),c=(0,f.L)({"--col-order":j.v(n)?.toString(),"--col-flex-grow":y(d,i.grow),"--col-flex-basis":w(d,i.columns),"--col-width":"content"===d?"auto":void 0,"--col-max-width":C(d,i.columns,i.grow),"--col-offset":b((0,j.v)(r),i.columns)}),a=(0,h.X)(l.breakpoints).reduce((t,o)=>(t[o]||(t[o]={}),"object"==typeof n&&void 0!==n[o]&&(t[o]["--col-order"]=n[o]?.toString()),"object"==typeof e&&void 0!==e[o]&&(t[o]["--col-flex-grow"]=y(e[o],i.grow),t[o]["--col-flex-basis"]=w(e[o],i.columns),t[o]["--col-width"]="content"===e[o]?"auto":void 0,t[o]["--col-max-width"]=C(e[o],i.columns,i.grow)),"object"==typeof r&&void 0!==r[o]&&(t[o]["--col-offset"]=b(r[o],i.columns)),t),{}),p=(0,x.I)((0,h.X)(a),l).filter(e=>(0,h.X)(a[e.value]).length>0),u=p.map(e=>({query:`(min-width: ${l.breakpoints[e.value]})`,styles:a[e.value]}));return t.createElement(g.f,{styles:c,media:u,selector:o})}var E={root:"m-410352e9",inner:"m-dee7bd2f",col:"m-96bdd299"};let Y={span:12},k=(0,c.d)((e,n)=>{let r=(0,l.w)("GridCol",Y,e),{classNames:o,className:i,style:c,styles:a,vars:p,span:h,order:f,offset:x,...j}=r,G=m(),g=(0,s.m)();return t.createElement(t.Fragment,null,t.createElement(v,{selector:`.${g}`,span:h,order:f,offset:x}),t.createElement(d.x,{ref:n,...G.getStyles("col",{className:(0,u.Z)(i,g),style:c,classNames:o,styles:a}),...j}))});k.classes=E,k.displayName="@mantine/core/GridCol";var _=r(92082);function D({gutter:e,selector:n}){let r=(0,G.rZ)(),o=(0,f.L)({"--grid-gutter":(0,_.bG)((0,j.v)(e))}),l=(0,h.X)(r.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--grid-gutter"]=(0,_.bG)(e[r])),n),{}),i=(0,x.I)((0,h.X)(l),r).filter(e=>(0,h.X)(l[e.value]).length>0),s=i.map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:l[e.value]}));return t.createElement(g.f,{styles:o,media:s,selector:n})}let N={gutter:"md",grow:!1,columns:12},I=(0,o.Z)((e,{justify:n,align:r,overflow:t})=>({root:{"--grid-justify":n,"--grid-align":r,"--grid-overflow":t}})),S=(0,c.d)((e,n)=>{let r=(0,l.w)("Grid",N,e),{classNames:o,className:c,style:a,styles:m,unstyled:u,vars:h,grow:f,gutter:x,columns:j,align:G,justify:g,children:w,...C}=r,y=(0,i.y)({name:"Grid",classes:E,props:r,className:c,style:a,classNames:o,styles:m,unstyled:u,vars:h,varsResolver:I}),b=(0,s.m)();return t.createElement(p,{value:{getStyles:y,grow:f,columns:j}},t.createElement(D,{selector:`.${b}`,...r}),t.createElement(d.x,{ref:n,...y("root",{className:b}),...C},t.createElement("div",{...y("inner")},w)))});S.classes=E,S.displayName="@mantine/core/Grid",S.Col=k},75001:function(e,n,r){"use strict";function t(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}r.d(n,{v:function(){return t}})},10874:function(e,n,r){"use strict";r.d(n,{o:function(){return o}});var t=r(27589);function o(e,n){return e in n.breakpoints?(0,t.px)(n.breakpoints[e]):(0,t.px)(e)}},31582:function(e,n,r){"use strict";r.d(n,{I:function(){return o}});var t=r(10874);function o(e,n){let r=e.map(e=>({value:e,px:(0,t.o)(e,n)}));return r.sort((e,n)=>e.px-n.px),r}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=98235)}),_N_E=e.O()}]);