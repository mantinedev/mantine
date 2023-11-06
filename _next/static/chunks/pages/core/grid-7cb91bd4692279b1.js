(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4242],{33507:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},88418:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/grid",function(){return r(25473)}])},25473:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return J}});var t=r(85893),o=r(11151),l=r(19905),i=r(9904),s=r(67294),a=r(79521),c=r(39304);let d=`
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
`,p={type:"code",code:d,component:function(){return s.createElement(a.r,null,s.createElement(c.Y,{span:4},"1"),s.createElement(c.Y,{span:4},"2"),s.createElement(c.Y,{span:4},"3"))}};var u=r(42720);let m=`
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
`,h={type:"code",code:m,component:function(){return s.createElement(a.r,{gutter:{base:5,xs:"md",md:"xl",xl:50}},s.createElement(c.Y,{span:4},"1"),s.createElement(c.Y,{span:4},"2"),s.createElement(c.Y,{span:4},"3"))}};var f=Object.defineProperty,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,n,r)=>n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,v=(e,n)=>{for(var r in n||(n={}))j.call(n,r)&&g(e,r,n[r]);if(x)for(var r of x(n))y.call(n,r)&&g(e,r,n[r]);return e};let b=`
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
`,G={type:"configurator",component:function(e){return s.createElement(a.r,v({},e),s.createElement(c.Y,{span:4},"1"),s.createElement(c.Y,{span:4},"2"),s.createElement(c.Y,{span:4},"3"),s.createElement(c.Y,{span:4},"4"),s.createElement(c.Y,{span:4},"5"))},code:b,controls:[{prop:"grow",type:"boolean",initialValue:!0,libraryValue:!1},{prop:"gutter",type:"size",initialValue:"md",libraryValue:"md"}]},w=`
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
`,C={type:"code",code:w,component:function(){return s.createElement(a.r,null,s.createElement(c.Y,{span:3},"1"),s.createElement(c.Y,{span:3},"2"),s.createElement(c.Y,{span:3,offset:3},"3"))}},E=`
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
`,k={type:"code",code:E,component:function(){return s.createElement(a.r,null,s.createElement(c.Y,{span:3,order:{base:2,sm:1,lg:3}},"2"),s.createElement(c.Y,{span:3,order:{base:3,sm:2,lg:2}},"3"),s.createElement(c.Y,{span:3,order:{base:1,sm:3,lg:1}},"1"))}},O=`
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
`,Y={type:"code",code:O,component:function(){return s.createElement(a.r,null,s.createElement(c.Y,{span:4},"1"),s.createElement(c.Y,{span:4},"2"),s.createElement(c.Y,{span:4},"3"),s.createElement(c.Y,{span:4},"4"))}};var M=r(72622),I=Object.defineProperty,P=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,D=(e,n,r)=>n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,V=(e,n)=>{for(var r in n||(n={}))_.call(n,r)&&D(e,r,n[r]);if(N)for(var r of N(n))S.call(n,r)&&D(e,r,n[r]);return e},X=(e,n)=>P(e,Z(n));let z=`
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
`,$={type:"configurator",component:function(e){return s.createElement(a.r,X(V({},e),{id:"grid-configurator"}),s.createElement(c.Y,{span:3,style:{minHeight:(0,M.h)(80)}},"1"),s.createElement(c.Y,{span:3,style:{minHeight:(0,M.h)(120)}},"2"),s.createElement(c.Y,{span:3},"3"))},code:z,controls:[{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}]},{prop:"align",type:"select",initialValue:"stretch",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"stretch",value:"stretch"}]}]},A=`
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
`,L={type:"code",code:A,component:function(){return s.createElement(a.r,null,s.createElement(c.Y,{span:"auto"},"1"),s.createElement(c.Y,{span:6},"2"),s.createElement(c.Y,{span:"auto"},"3"))}},H=`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`,T={type:"code",code:H,component:function(){return s.createElement(a.r,null,s.createElement(c.Y,{span:"content"},"fit content"),s.createElement(c.Y,{span:6},"2"))}},F=`
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
`,q={type:"code",code:F,component:function(){return s.createElement(a.r,{columns:24},s.createElement(c.Y,{span:12},"1"),s.createElement(c.Y,{span:6},"2"),s.createElement(c.Y,{span:6},"3"))}},B=(0,l.A)(i.us.Grid);function R(e){let n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a"},(0,o.ah)(),e.components),{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"columns-span",children:"Columns span"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Grid.Col"})," ",(0,t.jsx)(n.code,{children:"span"})," prop controls the ratio of column width to the total width of the row.\nBy default, grid uses 12 columns layout, so ",(0,t.jsx)(n.code,{children:"span"})," prop can be any number from 1 to 12."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={3} />"})," – 3 / 12 = 25% of row width"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={4} />"})," – 4 / 12 = 33% of row width"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={6} />"})," – 6 / 12 = 50% of row width"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Grid.Col span={12} />"})," – 12 / 12 = 100% of row width"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"span"})," prop also supports object syntax to change column width based on viewport width,\nit accepts ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12. The syntax\nis the same as in ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following example ",(0,t.jsx)(n.code,{children:"span={{ base: 12, md: 6, lg: 3 }}"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base"})," – 12 / 12 = 100% of row width when viewport width is less than ",(0,t.jsx)(n.code,{children:"md"})," breakpoint"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"md"})," – 6 / 12 = 50% of row width when viewport width is between ",(0,t.jsx)(n.code,{children:"md"})," and ",(0,t.jsx)(n.code,{children:"lg"})," breakpoints"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lg"})," – 3 / 12 = 25% of row width when viewport width is greater than ",(0,t.jsx)(n.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:u.j}),"\n",(0,t.jsx)(n.h2,{id:"gutter",children:"Gutter"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"gutter"})," prop to control spacing between columns. The prop works the same\nway as ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," – you can reference ",(0,t.jsx)(n.code,{children:"theme.spacing"})," values\nwith ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," strings and use object syntax to change gutter\nbased on viewport width:"]}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"grow",children:"Grow"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"grow"})," prop is set, column will grow to fill the remaining space in the row:"]}),"\n",(0,t.jsx)(r,{data:G}),"\n",(0,t.jsx)(n.h2,{id:"column-offset",children:"Column offset"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"offset"})," prop on ",(0,t.jsx)(n.code,{children:"Grid.Col"})," component to add gaps to the grid. ",(0,t.jsx)(n.code,{children:"offset"})," prop\nsupports the same syntax as ",(0,t.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,t.jsx)(r,{data:C}),"\n",(0,t.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"order"})," prop on ",(0,t.jsx)(n.code,{children:"Grid.Col"})," component to change the order of columns. ",(0,t.jsx)(n.code,{children:"order"})," prop\nsupports the same syntax as ",(0,t.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"})," and ",(0,t.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,t.jsx)(r,{data:k}),"\n",(0,t.jsx)(n.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,t.jsxs)(n.p,{children:["Once columns ",(0,t.jsx)(n.code,{children:"span"})," and ",(0,t.jsx)(n.code,{children:"offset"})," sum exceeds ",(0,t.jsx)(n.code,{children:"columns"})," prop (12 by default),\ncolumns are moved to the next row:"]}),"\n",(0,t.jsx)(r,{data:Y}),"\n",(0,t.jsx)(n.h2,{id:"justify-and-align",children:"Justify and align"}),"\n",(0,t.jsxs)(n.p,{children:["You can control ",(0,t.jsx)(n.code,{children:"justify-content"})," and ",(0,t.jsx)(n.code,{children:"align-items"})," CSS properties with ",(0,t.jsx)(n.code,{children:"justify"})," and ",(0,t.jsx)(n.code,{children:"align"})," props on ",(0,t.jsx)(n.code,{children:"Grid"})," component:"]}),"\n",(0,t.jsx)(r,{data:$}),"\n",(0,t.jsx)(n.h2,{id:"auto-sized-columns",children:"Auto sized columns"}),"\n",(0,t.jsxs)(n.p,{children:["All columns in a row with ",(0,t.jsx)(n.code,{children:'span="auto"'})," grow as much as they can to fill the row.\nIn the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:"]}),"\n",(0,t.jsx)(r,{data:L}),"\n",(0,t.jsx)(n.h2,{id:"fit-column-content",children:"Fit column content"}),"\n",(0,t.jsxs)(n.p,{children:["If you set ",(0,t.jsx)(n.code,{children:'span="content"'}),", the column's size will automatically adjust to match the width of its content:"]}),"\n",(0,t.jsx)(r,{data:T}),"\n",(0,t.jsx)(n.h2,{id:"change-columns-count",children:"Change columns count"}),"\n",(0,t.jsxs)(n.p,{children:["By default, grid uses 12 columns layout, you can change it by setting ",(0,t.jsx)(n.code,{children:"columns"})," prop on ",(0,t.jsx)(n.code,{children:"Grid"})," component.\nNote that in this case, columns span and offset will be calculated relative to this value."]}),"\n",(0,t.jsx)(n.p,{children:"In the following example, first column takes 50% with 12 span (12/24), second and third take 25% (6/24):"}),"\n",(0,t.jsx)(r,{data:q})]})}var J=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(B,Object.assign({},e,{children:(0,t.jsx)(R,e)}))}},79521:function(e,n,r){"use strict";r.d(n,{r:function(){return q}});var t=r(67294),o=r(40624),l=r(45763);let[i,s]=(0,l.R)("Grid component was not found in tree");var a=r(92925),c=r(43440),d=r(45016),p=r(88313),u=r(57197),m=r(43602);let h=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,f=(e,n,r)=>r||"auto"===e||"content"===e?"unset":h(e,n),x=(e,n)=>{if(e)return"auto"===e||n?"1":void 0},j=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function y({span:e,order:n,offset:r,selector:o}){var l;let i=(0,c.rZ)(),y=s(),g=(0,a.v)(e),v=void 0===g?12:(0,a.v)(e),b=(0,d.L)({"--col-order":null==(l=(0,a.v)(n))?void 0:l.toString(),"--col-flex-grow":x(v,y.grow),"--col-flex-basis":h(v,y.columns),"--col-width":"content"===v?"auto":void 0,"--col-max-width":f(v,y.columns,y.grow),"--col-offset":j((0,a.v)(r),y.columns)}),G=(0,p.X)(i.breakpoints).reduce((t,o)=>{var l;return t[o]||(t[o]={}),"object"==typeof n&&void 0!==n[o]&&(t[o]["--col-order"]=null==(l=n[o])?void 0:l.toString()),"object"==typeof e&&void 0!==e[o]&&(t[o]["--col-flex-grow"]=x(e[o],y.grow),t[o]["--col-flex-basis"]=h(e[o],y.columns),t[o]["--col-width"]="content"===e[o]?"auto":void 0,t[o]["--col-max-width"]=f(e[o],y.columns,y.grow)),"object"==typeof r&&void 0!==r[o]&&(t[o]["--col-offset"]=j(r[o],y.columns)),t},{}),w=(0,u.I)((0,p.X)(G),i).filter(e=>(0,p.X)(G[e.value]).length>0),C=w.map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:G[e.value]}));return t.createElement(m.f,{styles:b,media:C,selector:o})}var g={root:"m-410352e9",inner:"m-dee7bd2f",col:"m-96bdd299"},v=r(3154),b=r(30370),G=r(13035),w=r(81110),C=Object.defineProperty,E=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,Y=(e,n,r)=>n in e?C(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,M=(e,n)=>{for(var r in n||(n={}))k.call(n,r)&&Y(e,r,n[r]);if(E)for(var r of E(n))O.call(n,r)&&Y(e,r,n[r]);return e},I=(e,n)=>{var r={};for(var t in e)k.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&E)for(var t of E(e))0>n.indexOf(t)&&O.call(e,t)&&(r[t]=e[t]);return r};let P={span:12},Z=(0,v.d)((e,n)=>{let r=(0,b.w)("GridCol",P,e),{classNames:l,className:i,style:a,styles:c,vars:d,span:p,order:u,offset:m}=r,h=I(r,["classNames","className","style","styles","vars","span","order","offset"]),f=s(),x=(0,G.m)();return t.createElement(t.Fragment,null,t.createElement(y,{selector:`.${x}`,span:p,order:u,offset:m}),t.createElement(w.x,M(M({ref:n},f.getStyles("col",{className:(0,o.Z)(i,x),style:a,classNames:l,styles:c})),h)))});Z.classes=g,Z.displayName="@mantine/core/GridCol";var N=r(48468);function _({gutter:e,selector:n}){let r=(0,c.rZ)(),o=(0,d.L)({"--grid-gutter":(0,N.bG)((0,a.v)(e))}),l=(0,p.X)(r.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--grid-gutter"]=(0,N.bG)(e[r])),n),{}),i=(0,u.I)((0,p.X)(l),r).filter(e=>(0,p.X)(l[e.value]).length>0),s=i.map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:l[e.value]}));return t.createElement(m.f,{styles:o,media:s,selector:n})}var S=r(86109),D=r(8586),V=Object.defineProperty,X=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,A=(e,n,r)=>n in e?V(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,L=(e,n)=>{for(var r in n||(n={}))z.call(n,r)&&A(e,r,n[r]);if(X)for(var r of X(n))$.call(n,r)&&A(e,r,n[r]);return e},H=(e,n)=>{var r={};for(var t in e)z.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&X)for(var t of X(e))0>n.indexOf(t)&&$.call(e,t)&&(r[t]=e[t]);return r};let T={gutter:"md",grow:!1,columns:12},F=(0,D.Z)((e,{justify:n,align:r})=>({root:{"--grid-justify":n,"--grid-align":r}})),q=(0,v.d)((e,n)=>{let r=(0,b.w)("Grid",T,e),{classNames:o,className:l,style:s,styles:a,unstyled:c,vars:d,grow:p,gutter:u,columns:m,align:h,justify:f,children:x}=r,j=H(r,["classNames","className","style","styles","unstyled","vars","grow","gutter","columns","align","justify","children"]),y=(0,S.y)({name:"Grid",classes:g,props:r,className:l,style:s,classNames:o,styles:a,unstyled:c,vars:d,varsResolver:F}),v=(0,G.m)();return t.createElement(i,{value:{getStyles:y,grow:p,columns:m}},t.createElement(_,L({selector:`.${v}`},r)),t.createElement(w.x,L(L({ref:n},y("root",{className:v})),j),t.createElement("div",L({},y("inner")),x)))});q.classes=g,q.displayName="@mantine/core/Grid",q.Col=Z},92925:function(e,n,r){"use strict";function t(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}r.d(n,{v:function(){return t}})},30514:function(e,n,r){"use strict";r.d(n,{o:function(){return o}});var t=r(91624);function o(e,n){return e in n.breakpoints?(0,t.px)(n.breakpoints[e]):(0,t.px)(e)}},57197:function(e,n,r){"use strict";r.d(n,{I:function(){return o}});var t=r(30514);function o(e,n){let r=e.map(e=>({value:e,px:(0,t.o)(e,n)}));return r.sort((e,n)=>e.px-n.px),r}},42720:function(e,n,r){"use strict";r.d(n,{j:function(){return s}});var t=r(67294),o=r(79521),l=r(39304);let i=`
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
`,s={type:"code",code:i,component:function(){return t.createElement(o.r,null,t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"1"),t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"2"),t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"3"),t.createElement(l.Y,{span:{base:12,md:6,lg:3}},"4"))}}},39304:function(e,n,r){"use strict";r.d(n,{Y:function(){return m}});var t=r(67294),o=r(79521),l={col:"m-548ba23a",label:"m-60a4592e"},i=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))a.call(n,r)&&d(e,r,n[r]);if(s)for(var r of s(n))c.call(n,r)&&d(e,r,n[r]);return e},u=(e,n)=>{var r={};for(var t in e)a.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&s)for(var t of s(e))0>n.indexOf(t)&&c.call(e,t)&&(r[t]=e[t]);return r};function m(e){var{children:n}=e,r=u(e,["children"]);return t.createElement(o.r.Col,p({},r),t.createElement("div",{className:l.col},t.createElement("div",{className:l.label},n)))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=88418)}),_N_E=e.O()}]);