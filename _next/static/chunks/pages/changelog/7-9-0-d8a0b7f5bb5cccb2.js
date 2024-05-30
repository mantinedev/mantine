(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69704],{29380:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-9-0",function(){return n(10316)}])},10316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(52322),o=n(45392),a=n(60417),i=n(4425),l=n(55115),s=n(42351),c=n(53332),d=n(25071),u=n(15019);let m=(0,d.A)(u.us.Changelog790);function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"mantineemotion-package",children:"@mantine/emotion package"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package is now available to simplify migration\nfrom ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x"}),". It includes ",(0,r.jsx)(t.code,{children:"createStyles"})," function and additional\nfunctionality for ",(0,r.jsx)(t.code,{children:"sx"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props for all components similar to what was available\nin ",(0,r.jsx)(t.code,{children:"@mantine/core"})," package in v6."]}),"\n",(0,r.jsxs)(t.p,{children:["If you still haven't migrated to 7.x because of the change in styling approach, you can now\nhave a smoother transition by using ",(0,r.jsx)(t.code,{children:"@mantine/emotion"})," package. To learn more about the package,\nvisit the ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"documentation page"})," and updated ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n,{data:a.j}),"\n",(0,r.jsx)(t.h2,{id:"react-183-support",children:"React 18.3 support"}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/*"})," components and hooks have been updated to support React 18.3. It is\nrecommended to update your application as well to prepare for the upcoming ",(0,r.jsx)(t.a,{href:"https://react.dev/blog/2024/04/25/react-19",children:"React 19 release"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"use-field-hook",children:"use-field hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook is now available in ",(0,r.jsx)(t.code,{children:"@mantine/form"})," package.\nIt can be used as a simpler alternative to ",(0,r.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook to manage state of a single input without the need to create a form.\nThe hook supports most of ",(0,r.jsx)(t.code,{children:"use-form"})," hook features: validation with function, touched and\ndirty state, error message, validation on change/blur and more."]}),"\n",(0,r.jsx)(n,{data:i.Z}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-field"})," hook also supports async validation:"]}),"\n",(0,r.jsx)(n,{data:l.X}),"\n",(0,r.jsx)(t.h2,{id:"custom-postcss-mixins",children:"Custom PostCSS mixins"}),"\n",(0,r.jsxs)(t.p,{children:["You can now define custom mixins that are not included in ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset",children:"mantine-postcss-preset"})," by specifying them\nin the ",(0,r.jsx)(t.code,{children:"mixins"})," option. To learn about mixins syntax, follow ",(0,r.jsx)(t.a,{href:"https://github.com/postcss/postcss-mixins#readme",children:"postcss-mixins documentation"}),".\nNote that this feature is available in ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine"})," starting from version 1.15.0."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of adding ",(0,r.jsx)(t.code,{children:"clearfix"})," and ",(0,r.jsx)(t.code,{children:"circle"})," mixins:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n      mixins: {\n        clearfix: {\n          '&::after': {\n            content: '\"\"',\n            display: 'table',\n            clear: 'both',\n          },\n        },\n        circle: (_mixin, size) => ({\n          borderRadius: '50%',\n          width: size,\n          height: size,\n        }),\n      },\n    },\n    // ... Other plugins\n  },\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then you can use these mixins in your styles:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  @mixin clearfix;\n  @mixin circle 100px;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-matches-hook",children:"use-matches hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"use-matches"})," hook exported from ",(0,r.jsx)(t.code,{children:"@mantine/core"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"}),"\nif you need to match multiple media queries and values. It accepts an object with media queries as keys and\nvalues at given breakpoint as values."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"use-matches"})," hook uses the same logic as ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," under the hood,\nit is not recommended to be used as a primary source of responsive styles, especially if you have ssr in your application."]}),"\n",(0,r.jsx)(t.p,{children:"In the following example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Starting from ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"red.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Between ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"})," and ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"orange.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Below ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"}),", color will be ",(0,r.jsx)(t.code,{children:"blue.9"})]}),"\n"]}),"\n",(0,r.jsx)(n,{data:s.o}),"\n",(0,r.jsx)(t.h2,{id:"barchart-value-label",children:"BarChart value label"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," now supports ",(0,r.jsx)(t.code,{children:"withBarValueLabel"})," prop that allows\ndisplaying value label on top of each bar:"]}),"\n",(0,r.jsx)(n,{data:c.a}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"usage with emotion"})," guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"//guides/6x-to-7x/",children:"6.x -> 7.x"})," guide has been updated to include migration to ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"Uncontrolled form mode"})," examples now include usage of ",(0,r.jsx)(t.code,{children:"form.key()"})," function"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#custom-mixins",children:"Custom PostCSS mixins"})," documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive/#use-matches-hook",children:"use-matches"})," hook documentation has been added to the responsive guide"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Advanced templates now include GitHub workflows to run tests on CI"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/aspect-ratio",children:"AspectRatio"})," component has been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",children:"aspect-ratio"})," CSS property"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,{...e,children:(0,r.jsx)(h,{...e})})}},53332:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(52322),o=n(8132),a=n(9404);let i={type:"code",component:function(){return(0,r.jsx)(o.v,{h:300,data:a.aT,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      withBarValueLabel
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a.op,language:"tsx",fileName:"data.ts"}]}},9404:function(e,t,n){"use strict";n.d(t,{It:function(){return a},K$:function(){return i},aT:function(){return r},op:function(){return o}});let r=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],o=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`,a=[{item:"TaxRate","Effective tax rate in %":21,color:"blue"},{item:"Foreign inc.","Effective tax rate in %":-15.5,color:"teal"},{item:"Perm. diff.","Effective tax rate in %":-3,color:"teal"},{item:"Credits","Effective tax rate in %":-3,color:"teal"},{item:"Loss carryf. ","Effective tax rate in %":-2,color:"teal"},{item:"Law changes","Effective tax rate in %":2,color:"red"},{item:"Reven. adj.","Effective tax rate in %":4,color:"red"},{item:"ETR","Effective tax rate in %":3.5,color:"blue",standalone:!0}],i=`
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
`},60417:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});var r=n(52322),o=n(58898),a=n(95721);let i=`
import { createStyles } from '@mantine/emotion';
import { rem } from '@mantine/core';

const useStyles = createStyles((theme, _, u) => ({
  wrapper: {
    maxWidth: rem(400),
    width: '100%',
    height: rem(180),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Use light and dark selectors to change styles based on color scheme
    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },

    // Reference theme.breakpoints in smallerThan and largerThan functions
    [u.smallerThan('sm')]: {
      // Child reference in nested selectors via ref
      [\`& .\${u.ref('child')}\`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // Assign selector to a ref to reference it in other styles
    ref: u.ref('child'),
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,

    [u.light]: {
      backgroundColor: theme.white,
      color: theme.black,
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
`,l=(0,a.kc)((e,t,n)=>({wrapper:{maxWidth:(0,o.h)(400),width:"100%",height:(0,o.h)(180),display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",borderRadius:e.radius.sm,[n.light]:{backgroundColor:e.colors.gray[1]},[n.dark]:{backgroundColor:e.colors.dark[5]},[n.smallerThan("sm")]:{[`& .${n.ref("child")}`]:{fontSize:e.fontSizes.xs}}},child:{ref:n.ref("child"),padding:e.spacing.md,borderRadius:e.radius.sm,boxShadow:e.shadows.md,[n.light]:{backgroundColor:e.white,color:e.black},[n.dark]:{backgroundColor:e.colors.dark[8],color:e.white}}})),s={type:"code",component:function(){let{classes:e}=l();return(0,r.jsx)("div",{className:e.wrapper,children:(0,r.jsx)("div",{className:e.child,children:"createStyles demo"})})},code:i,defaultExpanded:!1}},55115:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(52322),o=n(74770),a=n(12491),i=n(17115),l=n(50580);function s(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let c={type:"code",component:function(){let e=(0,l.U)({initialValue:"",validate:s});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.o,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,r.jsx)(a.a,{size:18}):null,mb:"md"}),(0,r.jsx)(i.z,{onClick:e.validate,children:"Validate async"})]})},code:`
import { Button, Loader, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function validateAsync(value: string): Promise<string | null> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(value === 'mantine' ? null : 'Value must be "mantine"');
    }, 800);
  });
}

function Demo() {
  const field = useField({
    initialValue: '',
    validate: validateAsync,
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        label="Enter 'mantine'"
        placeholder="Enter 'mantine'"
        rightSection={field.isValidating ? <Loader size={18} /> : null}
        mb="md"
      />
      <Button onClick={field.validate}>Validate async</Button>
    </>
  );
}
`,centered:!0,maxWidth:340}},4425:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(52322),o=n(74770),a=n(50580),i=n(51057);let l={type:"code",component:function(){let e=(0,a.U)({initialValue:"",validateOnChange:!0,validate:(0,i.J)("Invalid email")});return(0,r.jsx)(o.o,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
import { TextInput } from '@mantine/core';
import { useField, isEmail } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}
`,centered:!0,maxWidth:340}},42351:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(52322),o=n(27780),a=n(68755);let i=["xs","sm","md","lg","xl"];var l=n(28559);let s={type:"code",component:function(){let e=function(e,t){let n=(0,a.rZ)(),r=(0,o.a)(`(min-width: ${n.breakpoints.xs})`,!1,void 0),l=(0,o.a)(`(min-width: ${n.breakpoints.sm})`,!1,void 0),s=(0,o.a)(`(min-width: ${n.breakpoints.md})`,!1,void 0);return function(e,t){if(!t)return e.base;let n=i.indexOf(t);for(;n>=0;){if(i[n]in e)return e[i[n]];n-=1}return e.base}(e,i[[r,l,s,(0,o.a)(`(min-width: ${n.breakpoints.lg})`,!1,t),(0,o.a)(`(min-width: ${n.breakpoints.xl})`,!1,t)].findLastIndex(e=>e)])}({base:"blue.9",sm:"orange.9",lg:"red.9"});return(0,r.jsx)(l.x,{bg:e,c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:`
import { Box, useMatches } from '@mantine/core';

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}
`}},8132:function(e,t,n){"use strict";n.d(t,{v:function(){return N}});var r=n(52322),o=n(2784),a=n(171),i=n(11011),l=n(30840),s=n(18205),c=n(80739),d=n(55734),u=n(25556),m=n(81224),h=n(3131),f=n(55484),p=n(21154),x=n(11200),g=n(13588),b=n(82027),v=n(38483),y=n(68755),j=n(51477),k=n(46690),w=n(28559),C=n(46293),S=n(50425),T=n(7064);function E(e){return`${(100*e).toFixed(0)}%`}let L={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},I=(0,x.Z)((e,{textColor:t,gridColor:n,cursorFill:r})=>({root:{"--chart-text-color":t?(0,g.p)(t,e):void 0,"--chart-grid-color":n?(0,g.p)(n,e):void 0,"--chart-cursor-fill":r?(0,g.p)(r,e):void 0}}));function _({value:e,valueFormatter:t,...n}){return(0,r.jsx)("text",{...n,dy:-10,fontSize:12,fill:"var(--chart-text-color, var(--mantine-color-dimmed))",textAnchor:"center",children:"function"==typeof t?t(e):e})}let N=(0,b.d)((e,t)=>{let n,x;let b=(0,v.w)("BarChart",L,e),{classNames:N,className:A,style:B,styles:z,unstyled:R,vars:$,data:D,withLegend:F,legendProps:P,series:M,onMouseLeave:O,dataKey:V,withTooltip:Z,withXAxis:K,withYAxis:U,gridAxis:q,tickLine:W,xAxisProps:X,yAxisProps:J,unit:H,tooltipAnimationDuration:G,strokeDasharray:Q,gridProps:Y,tooltipProps:ee,referenceLines:et,fillOpacity:en,barChartProps:er,type:eo,orientation:ea,dir:ei,valueFormatter:el,children:es,barProps:ec,xAxisLabel:ed,yAxisLabel:eu,withBarValueLabel:em,...eh}=b,ef=(0,y.rZ)(),[ep,ex]=(0,o.useState)(null),eg=null!==ep,eb="stacked"===eo||"percent"===eo,{resolvedClassNames:ev,resolvedStyles:ey}=(0,j.h)({classNames:N,styles:z,props:b}),ej="waterfall"===eo?(n=0,x=0,D.map(e=>{if(e.standalone)for(let t in e)"number"==typeof e[t]&&t!==V&&(e[t]=[0,e[t]]);else for(let t in e)"number"==typeof e[t]&&t!==V&&(x+=e[t],e[t]=[n,x],n=x);return e})):D,ek=(0,k.y)({name:"BarChart",classes:T.Z,props:b,className:A,style:B,classNames:N,styles:z,unstyled:R,vars:$,varsResolver:I}),ew=M.map(e=>{let t=(0,g.p)(e.color,ef),n=eg&&ep!==e.name;return(0,o.createElement)(a.$,{...ek("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:n?.1:en,strokeOpacity:n?.2:0,stackId:eb?"stack":void 0,label:em?(0,r.jsx)(_,{valueFormatter:el}):void 0,..."function"==typeof ec?ec(e):ec},ej.map((e,n)=>(0,r.jsx)(i.b,{fill:e.color?(0,g.p)(e.color,ef):t},`cell-${n}`)))}),eC=et?.map((e,t)=>{let n=g.p(e.color,ef);return r.jsx(l.d,{stroke:e.color?n:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?n:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ek("referenceLine")},t)});return(0,r.jsx)(w.x,{ref:t,...ek("root"),onMouseLeave:e=>{ex(null),O?.(e)},dir:ei||"ltr",...eh,children:(0,r.jsx)(s.h,{...ek("container"),children:(0,r.jsxs)(c.v,{data:ej,stackOffset:"percent"===eo?"expand":void 0,layout:ea,margin:{bottom:ed?30:void 0,left:eu?10:void 0,right:eu?5:void 0},...er,children:[F&&(0,r.jsx)(d.D,{verticalAlign:"top",content:e=>(0,r.jsx)(C.Q,{payload:e.payload,onHighlight:ex,legendPosition:P?.verticalAlign||"top",classNames:ev,styles:ey,series:M,showColor:"waterfall"!==eo}),...P}),(0,r.jsxs)(u.K,{hide:!K,..."vertical"===ea?{type:"number"}:{dataKey:V},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==q&&("x"===W||"xy"===W))&&{stroke:"currentColor"},minTickGap:5,...ek("axis"),...X,children:[ed&&(0,r.jsx)(m._,{position:"insideBottom",offset:-20,fontSize:12,...ek("axisLabel"),children:ed}),X?.children]}),(0,r.jsxs)(h.B,{hide:!U,axisLine:!1,..."vertical"===ea?{dataKey:V,type:"category"}:{type:"number"},tickLine:!!("none"!==q&&("y"===W||"xy"===W))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:H,tickFormatter:"percent"===eo?E:el,...ek("axis"),...J,children:[eu&&(0,r.jsx)(m._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:eu}),J?.children]}),(0,r.jsx)(f.q,{strokeDasharray:Q,vertical:"y"===q||"xy"===q,horizontal:"x"===q||"xy"===q,...ek("grid"),...Y}),Z&&(0,r.jsx)(p.u,{animationDuration:G,isAnimationActive:0!==G,position:"vertical"===ea?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Q,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:t})=>(0,r.jsx)(S.h,{label:e,payload:t,type:"waterfall"===eo?"scatter":void 0,unit:H,classNames:ev,styles:ey,series:M,valueFormatter:el}),...ee}),ew,eC,es]})})})});N.displayName="@mantine/charts/BarChart",N.classes=T.Z},46293:function(e,t,n){"use strict";n.d(t,{Q:function(){return m}});var r=n(52322),o=n(82027),a=n(38483),i=n(46690),l=n(27009),s=n(28559),c=n(64438),d={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let u={},m=(0,o.d)((e,t)=>{let n=(0,a.w)("ChartLegend",u,e),{classNames:o,className:m,style:h,styles:f,unstyled:p,vars:x,payload:g,onHighlight:b,legendPosition:v,mod:y,series:j,showColor:k,...w}=n,C=(0,i.y)({name:"ChartLegend",classes:d,props:n,className:m,style:h,classNames:o,styles:f,unstyled:p});if(!g)return null;let S=g.filter(e=>"none"!==e.color),T=(0,c.v)(j),E=S.map((e,t)=>(0,r.jsxs)("div",{...C("legendItem"),onMouseEnter:()=>b(e.dataKey),onMouseLeave:()=>b(null),"data-without-color":!1===k||void 0,children:[(0,r.jsx)(l.b,{color:e.color,size:12,...C("legendItemColor"),withShadow:!1}),(0,r.jsx)("p",{...C("legendItemName"),children:T[e.dataKey]||e.dataKey})]},t));return(0,r.jsx)(s.x,{ref:t,mod:[{position:v},y],...C("legend"),...w,children:E})});m.displayName="@mantine/charts/ChartLegend"},50425:function(e,t,n){"use strict";n.d(t,{h:function(){return x},X:function(){return h}});var r=n(52322),o=n(82027),a=n(38483),i=n(68755),l=n(46690),s=n(27009),c=n(13588),d=n(28559),u=n(64438),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,t){let n=e.filter(e=>"none"!==e.fill||!e.color);return t?n.filter(e=>e.name===t):n}function f(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let p={type:"area"},x=(0,o.d)((e,t)=>{let n=(0,a.w)("ChartTooltip",p,e),{classNames:o,className:x,style:g,styles:b,unstyled:v,vars:y,payload:j,label:k,unit:w,type:C,segmentId:S,mod:T,series:E,valueFormatter:L,...I}=n,_=(0,i.rZ)(),N=(0,l.y)({name:"ChartTooltip",classes:m,props:n,className:x,style:g,classNames:o,styles:b,unstyled:v});if(!j)return null;let A=h(j,S),B="scatter"===C?j[0]?.payload?.name:null,z=(0,u.v)(E),R=k||B,$=A.map(e=>(0,r.jsxs)("div",{"data-type":C,...N("tooltipItem"),children:[(0,r.jsxs)("div",{...N("tooltipItemBody"),children:[(0,r.jsx)(s.b,{color:(0,c.p)(e.color,_),size:12,...N("tooltipItemColor"),withShadow:!1}),(0,r.jsx)("div",{...N("tooltipItemName"),children:z[e.name]||e.name})]}),(0,r.jsxs)("div",{...N("tooltipItemData"),children:["function"==typeof L?L(f(e,C)):f(e,C),w||e.unit]})]},e.name));return(0,r.jsxs)(d.x,{...N("tooltip"),mod:[{type:C},T],ref:t,...I,children:[R&&(0,r.jsx)("div",{...N("tooltipLabel"),children:R}),(0,r.jsx)("div",{...N("tooltipBody"),children:$})]})});x.displayName="@mantine/charts/ChartTooltip"},7064:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d"}},64438:function(e,t,n){"use strict";function r(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}n.d(t,{v:function(){return r}})},95721:function(e,t,n){"use strict";n.d(t,{kc:function(){return p}});var r=n(65744),o=n(58898),a=n(68755),i=n(74251),l=n(82792),s=n(40489),c=n(29021),d=n(2784);let{cssFactory:u}={cssFactory:function(e){let{cache:t}=e,n=(...e)=>{let{ref:n,args:r}=function(e){let t;if(1!==e.length)return{args:e,ref:t};let[n]=e;if(!(n instanceof Object)||!("ref"in n))return{args:e,ref:t};t=n.ref;let r={...n};return delete r.ref,{args:[r],ref:t}}(e),o=(0,i.O)(r,t.registered);return(0,l.My)(t,o,!1),`${t.key}-${o.name}${void 0===n?"":` ${n}`}`};return{css:n,cx:(...e)=>(function(e,t,n){let r=[],o=(0,l.fp)(e,r,n);return r.length<2?n:o+t(r)})(t.registered,n,(0,s.Z)(e))}}};function m(e){return`___ref-${e||""}`}function h(e,t){return t in e.breakpoints&&"number"!=typeof t?(0,r.px)(e.breakpoints[t]):(0,r.px)(t)}let f=e=>({light:'[data-mantine-color-scheme="light"] &',dark:'[data-mantine-color-scheme="dark"] &',rtl:'[dir="rtl"] &',ltr:'[dir="ltr"] &',notRtl:'[dir="ltr"] &',notLtr:'[dir="rtl"] &',ref:m,smallerThan:t=>`@media (max-width: ${(0,o.em)(h(e,t)-.1)})`,largerThan:t=>`@media (min-width: ${(0,o.em)(h(e,t))})`});function p(e){let t="function"==typeof e?e:()=>e;return function(e){let n=(0,a.rZ)(),r=f(n),o=t(n,e,r),{css:i,cx:l}=function(){let e=(0,c.S2)();return function(e,t){let n=(0,d.useRef)();return(!n.current||t.length!==n.current.prevDeps.length||n.current.prevDeps.map((e,n)=>e===t[n]).indexOf(!1)>=0)&&(n.current={v:e(),prevDeps:[...t]}),n.current.v}(()=>u({cache:e}),[e])}();return{classes:Object.keys(o).reduce((e,t)=>(e[t]=i(o[t]),e),{}),cx:l,theme:n}}}},56624:function(e,t,n){"use strict";n.d(t,{n:function(){return r}});let r="__MANTINE_FORM_INDEX__"},5752:function(e,t,n){"use strict";function r(e){return t=>{if(t){if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:n}=t;n instanceof HTMLInputElement?"checkbox"===n.type?e(n.checked):e(n.value):(n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement)&&e(n.value)}else e(t)}else e(t)}}n.d(t,{E:function(){return r}})},50580:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(2784),o=n(5752),a=n(56365);function i({mode:e="controlled",clearErrorOnChange:t=!0,initialValue:n,initialError:i=null,initialTouched:l=!1,onValueChange:s,validateOnChange:c=!1,validateOnBlur:d=!1,validate:u,resolveValidationError:m,type:h="input"}){let[f,p]=(0,r.useState)(n),x=(0,r.useRef)(f),[g,b]=(0,r.useState)(0),[v,y]=(0,r.useState)(i||null),j=(0,r.useRef)(l||!1),[,k]=(0,r.useState)(j.current),[w,C]=(0,r.useState)(!1),S=(0,r.useMemo)(()=>m||(e=>e),[m]),T=(0,r.useCallback)((t,{updateState:n="controlled"===e}={})=>{j.current=t,n&&k(t)},[]),E=(0,r.useCallback)(async(n,{updateKey:r="uncontrolled"===e,updateState:o="controlled"===e}={})=>{x.current!==n&&(x.current=n,s?.(n),t&&null!==v&&y(null),o&&p(n),r&&b(e=>e+1),c&&A())},[v,t]),L=(0,r.useCallback)(()=>{E(n),y(null),T(!1)},[n]),I=(0,r.useCallback)(()=>x.current,[]),_=(0,r.useCallback)(()=>j.current,[]),N=(0,r.useCallback)(()=>x.current!==n,[n]),A=(0,r.useCallback)(async()=>{let e=u?.(x.current);if(!(e instanceof Promise))return y(e),e;C(!0);try{let t=await e;C(!1),y(t)}catch(t){C(!1);let e=S(t);return y(e),e}},[]);return{key:g,getValue:I,setValue:E,reset:L,getInputProps:({withError:t=!0,withFocus:n=!0}={})=>{let r={onChange:(0,o.E)(e=>E(e,{updateKey:!1}))};return t&&(r.error=v),"checkbox"===h?r["controlled"===e?"checked":"defaultChecked"]=x.current:r["controlled"===e?"value":"defaultValue"]=x.current,n&&(r.onFocus=()=>{T(!0)},r.onBlur=()=>{(0,a.i)("",!!d)&&A()}),r},isValidating:w,validate:A,error:v,setError:y,isTouched:_,isDirty:N,resetTouched:(0,r.useCallback)(()=>T(!1),[])}}},56365:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(56624);function o(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,`.${r.n}`)))}},51057:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(1328);function o(e){return(0,r.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},1328:function(e,t,n){"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{w:function(){return r}})}},function(e){e.O(0,[61177,16717,79518,66748,11340,92888,49774,40179],function(){return e(e.s=29380)}),_N_E=e.O()}]);