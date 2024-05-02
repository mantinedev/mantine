(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69704],{29380:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-9-0",function(){return n(10316)}])},10316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(52322),o=n(45392),i=n(60417),a=n(4425),s=n(55115),l=n(42351),c=n(53332),d=n(79016),u=n(33638);let h=(0,d.A)(u.us.Changelog790);function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"mantineemotion-package",children:"@mantine/emotion package"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package is now available to simplify migration\nfrom ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x"}),". It includes ",(0,r.jsx)(t.code,{children:"createStyles"})," function and additional\nfunctionality for ",(0,r.jsx)(t.code,{children:"sx"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props for all components similar to what was available\nin ",(0,r.jsx)(t.code,{children:"@mantine/core"})," package in v6."]}),"\n",(0,r.jsxs)(t.p,{children:["If you still haven't migrated to 7.x because of the change in styling approach, you can now\nhave a smoother transition by using ",(0,r.jsx)(t.code,{children:"@mantine/emotion"})," package. To learn more about the package,\nvisit the ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"documentation page"})," and updated ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n,{data:i.j}),"\n",(0,r.jsx)(t.h2,{id:"react-183-support",children:"React 18.3 support"}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/*"})," components and hooks have been updated to support React 18.3. It is\nrecommended to update your application as well to prepare for the upcoming ",(0,r.jsx)(t.a,{href:"https://react.dev/blog/2024/04/25/react-19",children:"React 19 release"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"use-field-hook",children:"use-field hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook is now available in ",(0,r.jsx)(t.code,{children:"@mantine/form"})," package.\nIt can be used as a simpler alternative to ",(0,r.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook to manage state of a single input without the need to create a form.\nThe hook supports most of ",(0,r.jsx)(t.code,{children:"use-form"})," hook features: validation with function, touched and\ndirty state, error message, validation on change/blur and more."]}),"\n",(0,r.jsx)(n,{data:a.Z}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-field"})," hook also supports async validation:"]}),"\n",(0,r.jsx)(n,{data:s.X}),"\n",(0,r.jsx)(t.h2,{id:"custom-postcss-mixins",children:"Custom PostCSS mixins"}),"\n",(0,r.jsxs)(t.p,{children:["You can now define custom mixins that are not included in ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset",children:"mantine-postcss-preset"})," by specifying them\nin the ",(0,r.jsx)(t.code,{children:"mixins"})," option. To learn about mixins syntax, follow ",(0,r.jsx)(t.a,{href:"https://github.com/postcss/postcss-mixins#readme",children:"postcss-mixins documentation"}),".\nNote that this feature is available in ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine"})," starting from version 1.15.0."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of adding ",(0,r.jsx)(t.code,{children:"clearfix"})," and ",(0,r.jsx)(t.code,{children:"circle"})," mixins:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n      mixins: {\n        clearfix: {\n          '&::after': {\n            content: '\"\"',\n            display: 'table',\n            clear: 'both',\n          },\n        },\n        circle: (_mixin, size) => ({\n          borderRadius: '50%',\n          width: size,\n          height: size,\n        }),\n      },\n    },\n    // ... Other plugins\n  },\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then you can use these mixins in your styles:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  @mixin clearfix;\n  @mixin circle 100px;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-matches-hook",children:"use-matches hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"use-matches"})," hook exported from ",(0,r.jsx)(t.code,{children:"@mantine/core"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"}),"\nif you need to match multiple media queries and values. It accepts an object with media queries as keys and\nvalues at given breakpoint as values."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"use-matches"})," hook uses the same logic as ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," under the hood,\nit is not recommended to be used as a primary source of responsive styles, especially if you have ssr in your application."]}),"\n",(0,r.jsx)(t.p,{children:"In the following example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Starting from ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"red.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Between ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"})," and ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"orange.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Below ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"}),", color will be ",(0,r.jsx)(t.code,{children:"blue.9"})]}),"\n"]}),"\n",(0,r.jsx)(n,{data:l.o}),"\n",(0,r.jsx)(t.h2,{id:"barchart-value-label",children:"BarChart value label"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," now supports ",(0,r.jsx)(t.code,{children:"withBarValueLabel"})," prop that allows\ndisplaying value label on top of each bar:"]}),"\n",(0,r.jsx)(n,{data:c.a}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"usage with emotion"})," guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"//guides/6x-to-7x/",children:"6.x -> 7.x"})," guide has been updated to include migration to ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"Uncontrolled form mode"})," examples now include usage of ",(0,r.jsx)(t.code,{children:"form.key()"})," function"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#custom-mixins",children:"Custom PostCSS mixins"})," documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive/#use-matches-hook",children:"use-matches"})," hook documentation has been added to the responsive guide"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Advanced templates now include GitHub workflows to run tests on CI"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/aspect-ratio",children:"AspectRatio"})," component has been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",children:"aspect-ratio"})," CSS property"]}),"\n"]})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(m,{...e})})}},53332:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(52322),o=n(8132),i=n(9404);let a=`
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
`,s={type:"code",component:function(){return(0,r.jsx)(o.v,{h:300,data:i.a,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:a,language:"tsx",fileName:"Demo.tsx"},{code:i.o,language:"tsx",fileName:"data.ts"}]}},9404:function(e,t,n){"use strict";n.d(t,{a:function(){return r},o:function(){return o}});let r=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],o=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`},60417:function(e,t,n){"use strict";n.d(t,{j:function(){return l}});var r=n(52322),o=n(58898),i=n(95721);let a=`
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
`,s=(0,i.kc)((e,t,n)=>({wrapper:{maxWidth:(0,o.h)(400),width:"100%",height:(0,o.h)(180),display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",borderRadius:e.radius.sm,[n.light]:{backgroundColor:e.colors.gray[1]},[n.dark]:{backgroundColor:e.colors.dark[5]},[n.smallerThan("sm")]:{[`& .${n.ref("child")}`]:{fontSize:e.fontSizes.xs}}},child:{ref:n.ref("child"),padding:e.spacing.md,borderRadius:e.radius.sm,boxShadow:e.shadows.md,[n.light]:{backgroundColor:e.white,color:e.black},[n.dark]:{backgroundColor:e.colors.dark[8],color:e.white}}})),l={type:"code",component:function(){let{classes:e}=s();return(0,r.jsx)("div",{className:e.wrapper,children:(0,r.jsx)("div",{className:e.child,children:"createStyles demo"})})},code:a,defaultExpanded:!1}},55115:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(52322),o=n(74770),i=n(12491),a=n(17115),s=n(50580);let l=`
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
`;function c(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let d={type:"code",component:function(){let e=(0,s.U)({initialValue:"",validate:c});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.o,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,r.jsx)(i.a,{size:18}):null,mb:"md"}),(0,r.jsx)(a.z,{onClick:e.validate,children:"Validate async"})]})},code:l,centered:!0,maxWidth:340}},4425:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(52322),o=n(74770),i=n(50580),a=n(51057);let s=`
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
`,l={type:"code",component:function(){let e=(0,i.U)({initialValue:"",validateOnChange:!0,validate:(0,a.J)("Invalid email")});return(0,r.jsx)(o.o,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:s,centered:!0,maxWidth:340}},42351:function(e,t,n){"use strict";n.d(t,{o:function(){return c}});var r=n(52322),o=n(27780),i=n(68755);let a=["xs","sm","md","lg","xl"];var s=n(28559);let l=`
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
`,c={type:"code",component:function(){let e=function(e,t){let n=(0,i.rZ)(),r=(0,o.a)(`(min-width: ${n.breakpoints.xs})`,!1,t),s=(0,o.a)(`(min-width: ${n.breakpoints.sm})`,!1,t),l=(0,o.a)(`(min-width: ${n.breakpoints.md})`,!1,t),c=(0,o.a)(`(min-width: ${n.breakpoints.lg})`,!1,t),d=(0,o.a)(`(min-width: ${n.breakpoints.xl})`,!1,t),u=[r,s,l,c,d].findLastIndex(e=>e);return function(e,t){if(!t)return e.base;let n=a.indexOf(t);for(;n>=0;){if(a[n]in e)return e[a[n]];n-=1}return e.base}(e,a[u])}({base:"blue.9",sm:"orange.9",lg:"red.9"});return(0,r.jsx)(s.x,{bg:e,c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:l}},8132:function(e,t,n){"use strict";n.d(t,{v:function(){return N}});var r=n(52322),o=n(2784),i=n(171),a=n(30840),s=n(18205),l=n(80739),c=n(55734),d=n(25556),u=n(81224),h=n(3131),m=n(55484),p=n(21154),f=n(11200),x=n(13588),g=n(82027),b=n(38483),j=n(68755),y=n(51477),v=n(46690),k=n(28559),w=n(46293),S=n(50425),C=n(7064);function L(e){return`${(100*e).toFixed(0)}%`}let I={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},T=(0,f.Z)((e,{textColor:t,gridColor:n,cursorFill:r})=>({root:{"--chart-text-color":t?(0,x.p)(t,e):void 0,"--chart-grid-color":n?(0,x.p)(n,e):void 0,"--chart-cursor-fill":r?(0,x.p)(r,e):void 0}}));function _({value:e,valueFormatter:t,...n}){return(0,r.jsx)("text",{...n,dy:-10,fontSize:12,fill:"var(--chart-text-color, var(--mantine-color-dimmed))",textAnchor:"center",children:"function"==typeof t?t(e):e})}let N=(0,g.d)((e,t)=>{let n=(0,b.w)("BarChart",I,e),{classNames:f,className:g,style:N,styles:E,unstyled:A,vars:B,data:z,withLegend:D,legendProps:R,series:$,onMouseLeave:F,dataKey:M,withTooltip:O,withXAxis:P,withYAxis:V,gridAxis:Z,tickLine:K,xAxisProps:U,yAxisProps:q,unit:W,tooltipAnimationDuration:X,strokeDasharray:J,gridProps:H,tooltipProps:G,referenceLines:Q,fillOpacity:Y,barChartProps:ee,type:et,orientation:en,dir:er,valueFormatter:eo,children:ei,barProps:ea,xAxisLabel:es,yAxisLabel:el,withBarValueLabel:ec,...ed}=n,eu=(0,j.rZ)(),[eh,em]=(0,o.useState)(null),ep=null!==eh,ef="stacked"===et||"percent"===et,{resolvedClassNames:ex,resolvedStyles:eg}=(0,y.h)({classNames:f,styles:E,props:n}),eb=(0,v.y)({name:"BarChart",classes:C.Z,props:n,className:g,style:N,classNames:f,styles:E,unstyled:A,vars:B,varsResolver:T}),ej=$.map(e=>{let t=(0,x.p)(e.color,eu),n=ep&&eh!==e.name;return(0,o.createElement)(i.$,{...eb("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:n?.1:Y,strokeOpacity:n?.2:0,stackId:ef?"stack":void 0,label:ec?(0,r.jsx)(_,{valueFormatter:eo}):void 0,..."function"==typeof ea?ea(e):ea})}),ey=Q?.map((e,t)=>{let n=x.p(e.color,eu);return r.jsx(a.d,{stroke:e.color?n:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?n:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eb("referenceLine")},t)});return(0,r.jsx)(k.x,{ref:t,...eb("root"),onMouseLeave:e=>{em(null),F?.(e)},dir:er||"ltr",...ed,children:(0,r.jsx)(s.h,{...eb("container"),children:(0,r.jsxs)(l.v,{data:z,stackOffset:"percent"===et?"expand":void 0,layout:en,margin:{bottom:es?30:void 0,left:el?10:void 0,right:el?5:void 0},...ee,children:[D&&(0,r.jsx)(c.D,{verticalAlign:"top",content:e=>(0,r.jsx)(w.Q,{payload:e.payload,onHighlight:em,legendPosition:R?.verticalAlign||"top",classNames:ex,styles:eg,series:$}),...R}),(0,r.jsxs)(d.K,{hide:!P,..."vertical"===en?{type:"number"}:{dataKey:M},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==Z&&("x"===K||"xy"===K))&&{stroke:"currentColor"},minTickGap:5,...eb("axis"),...U,children:[es&&(0,r.jsx)(u._,{position:"insideBottom",offset:-20,fontSize:12,...eb("axisLabel"),children:es}),U?.children]}),(0,r.jsxs)(h.B,{hide:!V,axisLine:!1,..."vertical"===en?{dataKey:M,type:"category"}:{type:"number"},tickLine:!!("none"!==Z&&("y"===K||"xy"===K))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:W,tickFormatter:"percent"===et?L:eo,...eb("axis"),...q,children:[el&&(0,r.jsx)(u._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eb("axisLabel"),children:el}),q?.children]}),(0,r.jsx)(m.q,{strokeDasharray:J,vertical:"y"===Z||"xy"===Z,horizontal:"x"===Z||"xy"===Z,...eb("grid"),...H}),O&&(0,r.jsx)(p.u,{animationDuration:X,isAnimationActive:0!==X,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:J,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:t})=>(0,r.jsx)(S.h,{label:e,payload:t,unit:W,classNames:ex,styles:eg,series:$,valueFormatter:eo}),...G}),ej,ey,ei]})})})});N.displayName="@mantine/charts/BarChart",N.classes=C.Z},46293:function(e,t,n){"use strict";n.d(t,{Q:function(){return h}});var r=n(52322),o=n(82027),i=n(38483),a=n(46690),s=n(27009),l=n(28559),c=n(64438),d={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemName:"m_8ff56c0d"};let u={},h=(0,o.d)((e,t)=>{let n=(0,i.w)("ChartLegend",u,e),{classNames:o,className:h,style:m,styles:p,unstyled:f,vars:x,payload:g,onHighlight:b,legendPosition:j,mod:y,series:v,...k}=n,w=(0,a.y)({name:"ChartLegend",classes:d,props:n,className:h,style:m,classNames:o,styles:p,unstyled:f});if(!g)return null;let S=g.filter(e=>"none"!==e.color),C=(0,c.v)(v),L=S.map((e,t)=>(0,r.jsxs)("div",{...w("legendItem"),onMouseEnter:()=>b(e.dataKey),onMouseLeave:()=>b(null),children:[(0,r.jsx)(s.b,{color:e.color,size:12,...w("legendItemColor"),withShadow:!1}),(0,r.jsx)("p",{...w("legendItemName"),children:C[e.dataKey]||e.dataKey})]},t));return(0,r.jsx)(l.x,{ref:t,mod:[{position:j},y],...w("legend"),...k,children:L})});h.displayName="@mantine/charts/ChartLegend"},50425:function(e,t,n){"use strict";n.d(t,{h:function(){return x},X:function(){return m}});var r=n(52322),o=n(82027),i=n(38483),a=n(68755),s=n(46690),l=n(27009),c=n(13588),d=n(28559),u=n(64438),h={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function m(e,t){let n=e.filter(e=>"none"!==e.fill||!e.color);return t?n.filter(e=>e.name===t):n}function p(e,t){return"radial"===t||"scatter"===t?e.value:e.payload[e.dataKey]}let f={type:"area"},x=(0,o.d)((e,t)=>{let n=(0,i.w)("ChartTooltip",f,e),{classNames:o,className:x,style:g,styles:b,unstyled:j,vars:y,payload:v,label:k,unit:w,type:S,segmentId:C,mod:L,series:I,valueFormatter:T,..._}=n,N=(0,a.rZ)(),E=(0,s.y)({name:"ChartTooltip",classes:h,props:n,className:x,style:g,classNames:o,styles:b,unstyled:j});if(!v)return null;let A=m(v,C),B="scatter"===S?v[0]?.payload?.name:null,z=(0,u.v)(I),D=k||B,R=A.map(e=>(0,r.jsxs)("div",{"data-type":S,...E("tooltipItem"),children:[(0,r.jsxs)("div",{...E("tooltipItemBody"),children:[(0,r.jsx)(l.b,{color:(0,c.p)(e.color,N),size:12,...E("tooltipItemColor"),withShadow:!1}),(0,r.jsx)("div",{...E("tooltipItemName"),children:z[e.name]||e.name})]}),(0,r.jsxs)("div",{...E("tooltipItemData"),children:["function"==typeof T?T(p(e,S)):p(e,S),w||e.unit]})]},e.name));return(0,r.jsxs)(d.x,{...E("tooltip"),mod:[{type:S},L],ref:t,..._,children:[D&&(0,r.jsx)("div",{...E("tooltipLabel"),children:D}),(0,r.jsx)("div",{...E("tooltipBody"),children:R})]})});x.displayName="@mantine/charts/ChartTooltip"},7064:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d"}},64438:function(e,t,n){"use strict";function r(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}n.d(t,{v:function(){return r}})},95721:function(e,t,n){"use strict";n.d(t,{kc:function(){return f}});var r=n(65744),o=n(58898),i=n(68755),a=n(74251),s=n(82792),l=n(40489),c=n(29021),d=n(2784);let{cssFactory:u}={cssFactory:function(e){let{cache:t}=e,n=(...e)=>{let{ref:n,args:r}=function(e){let t;if(1!==e.length)return{args:e,ref:t};let[n]=e;if(!(n instanceof Object)||!("ref"in n))return{args:e,ref:t};t=n.ref;let r={...n};return delete r.ref,{args:[r],ref:t}}(e),o=(0,a.O)(r,t.registered);return(0,s.My)(t,o,!1),`${t.key}-${o.name}${void 0===n?"":` ${n}`}`};return{css:n,cx:(...e)=>(function(e,t,n){let r=[],o=(0,s.fp)(e,r,n);return r.length<2?n:o+t(r)})(t.registered,n,(0,l.Z)(e))}}};function h(e){return`___ref-${e||""}`}function m(e,t){return t in e.breakpoints&&"number"!=typeof t?(0,r.px)(e.breakpoints[t]):(0,r.px)(t)}let p=e=>({light:'[data-mantine-color-scheme="light"] &',dark:'[data-mantine-color-scheme="dark"] &',rtl:'[dir="rtl"] &',ltr:'[dir="ltr"] &',notRtl:'[dir="ltr"] &',notLtr:'[dir="rtl"] &',ref:h,smallerThan:t=>`@media (max-width: ${(0,o.em)(m(e,t)-.1)})`,largerThan:t=>`@media (min-width: ${(0,o.em)(m(e,t))})`});function f(e){let t="function"==typeof e?e:()=>e;return function(e){let n=(0,i.rZ)(),r=p(n),o=t(n,e,r),{css:a,cx:s}=function(){let e=(0,c.S2)();return function(e,t){let n=(0,d.useRef)();return(!n.current||t.length!==n.current.prevDeps.length||n.current.prevDeps.map((e,n)=>e===t[n]).indexOf(!1)>=0)&&(n.current={v:e(),prevDeps:[...t]}),n.current.v}(()=>u({cache:e}),[e])}(),l=Object.keys(o).reduce((e,t)=>(e[t]=a(o[t]),e),{});return{classes:l,cx:s,theme:n}}}},56624:function(e,t,n){"use strict";n.d(t,{n:function(){return r}});let r="__MANTINE_FORM_INDEX__"},5752:function(e,t,n){"use strict";function r(e){return t=>{if(t){if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:n}=t;n instanceof HTMLInputElement?"checkbox"===n.type?e(n.checked):e(n.value):(n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement)&&e(n.value)}else e(t)}else e(t)}}n.d(t,{E:function(){return r}})},50580:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(2784),o=n(5752),i=n(56365);function a({mode:e="controlled",clearErrorOnChange:t=!0,initialValue:n,initialError:a=null,initialTouched:s=!1,onValueChange:l,validateOnChange:c=!1,validateOnBlur:d=!1,validate:u,resolveValidationError:h,type:m="input"}){let[p,f]=(0,r.useState)(n),x=(0,r.useRef)(p),[g,b]=(0,r.useState)(0),[j,y]=(0,r.useState)(a||null),v=(0,r.useRef)(s||!1),[,k]=(0,r.useState)(v.current),[w,S]=(0,r.useState)(!1),C=(0,r.useMemo)(()=>h||(e=>e),[h]),L=(0,r.useCallback)((t,{updateState:n="controlled"===e}={})=>{v.current=t,n&&k(t)},[]),I=(0,r.useCallback)(async(n,{updateKey:r="uncontrolled"===e,updateState:o="controlled"===e}={})=>{x.current!==n&&(x.current=n,l?.(n),t&&null!==j&&y(null),o&&f(n),r&&b(e=>e+1),c&&A())},[j,t]),T=(0,r.useCallback)(()=>{I(n),y(null),L(!1)},[n]),_=(0,r.useCallback)(()=>x.current,[]),N=(0,r.useCallback)(()=>v.current,[]),E=(0,r.useCallback)(()=>x.current!==n,[n]),A=(0,r.useCallback)(async()=>{let e=u?.(x.current);if(!(e instanceof Promise))return y(e),e;S(!0);try{let t=await e;S(!1),y(t)}catch(t){S(!1);let e=C(t);return y(e),e}},[]),B=(0,r.useCallback)(()=>L(!1),[]);return{key:g,getValue:_,setValue:I,reset:T,getInputProps:({withError:t=!0,withFocus:n=!0}={})=>{let r=(0,o.E)(e=>I(e,{updateKey:!1})),a={onChange:r};return t&&(a.error=j),"checkbox"===m?a["controlled"===e?"checked":"defaultChecked"]=x.current:a["controlled"===e?"value":"defaultValue"]=x.current,n&&(a.onFocus=()=>{L(!0)},a.onBlur=()=>{(0,i.i)("",!!d)&&A()}),a},isValidating:w,validate:A,error:j,setError:y,isTouched:N,isDirty:E,resetTouched:B}}},56365:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(56624);function o(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,`.${r.n}`)))}},51057:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(1328);function o(e){return(0,r.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},1328:function(e,t,n){"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{w:function(){return r}})}},function(e){e.O(0,[57938,16717,79518,17454,47747,49774,92888,40179],function(){return e(e.s=29380)}),_N_E=e.O()}]);