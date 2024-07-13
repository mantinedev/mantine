(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69704],{29380:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-9-0",function(){return t(10316)}])},10316:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(52322),i=t(45392),o=t(60417),a=t(4425),s=t(55115),l=t(42351),c=t(53332),d=t(25071),u=t(15019);let h=(0,d.A)(u.us.Changelog790);function m(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"mantineemotion-package",children:"@mantine/emotion package"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package is now available to simplify migration\nfrom ",(0,r.jsx)(n.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x"}),". It includes ",(0,r.jsx)(n.code,{children:"createStyles"})," function and additional\nfunctionality for ",(0,r.jsx)(n.code,{children:"sx"})," and ",(0,r.jsx)(n.code,{children:"styles"})," props for all components similar to what was available\nin ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package in v6."]}),"\n",(0,r.jsxs)(n.p,{children:["If you still haven't migrated to 7.x because of the change in styling approach, you can now\nhave a smoother transition by using ",(0,r.jsx)(n.code,{children:"@mantine/emotion"})," package. To learn more about the package,\nvisit the ",(0,r.jsx)(n.a,{href:"/styles/emotion",children:"documentation page"})," and updated ",(0,r.jsx)(n.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(t,{data:o.j}),"\n",(0,r.jsx)(n.h2,{id:"react-183-support",children:"React 18.3 support"}),"\n",(0,r.jsxs)(n.p,{children:["All ",(0,r.jsx)(n.code,{children:"@mantine/*"})," components and hooks have been updated to support React 18.3. It is\nrecommended to update your application as well to prepare for the upcoming ",(0,r.jsx)(n.a,{href:"https://react.dev/blog/2024/04/25/react-19",children:"React 19 release"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"use-field-hook",children:"use-field hook"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/form/use-field",children:"use-field"})," hook is now available in ",(0,r.jsx)(n.code,{children:"@mantine/form"})," package.\nIt can be used as a simpler alternative to ",(0,r.jsx)(n.a,{href:"/form/use-form",children:"use-form"})," hook to manage state of a single input without the need to create a form.\nThe hook supports most of ",(0,r.jsx)(n.code,{children:"use-form"})," hook features: validation with function, touched and\ndirty state, error message, validation on change/blur and more."]}),"\n",(0,r.jsx)(t,{data:a.Z}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-field"})," hook also supports async validation:"]}),"\n",(0,r.jsx)(t,{data:s.X}),"\n",(0,r.jsx)(n.h2,{id:"custom-postcss-mixins",children:"Custom PostCSS mixins"}),"\n",(0,r.jsxs)(n.p,{children:["You can now define custom mixins that are not included in ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"mantine-postcss-preset"})," by specifying them\nin the ",(0,r.jsx)(n.code,{children:"mixins"})," option. To learn about mixins syntax, follow ",(0,r.jsx)(n.a,{href:"https://github.com/postcss/postcss-mixins#readme",children:"postcss-mixins documentation"}),".\nNote that this feature is available in ",(0,r.jsx)(n.code,{children:"postcss-preset-mantine"})," starting from version 1.15.0."]}),"\n",(0,r.jsxs)(n.p,{children:["Example of adding ",(0,r.jsx)(n.code,{children:"clearfix"})," and ",(0,r.jsx)(n.code,{children:"circle"})," mixins:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n      mixins: {\n        clearfix: {\n          '&::after': {\n            content: '\"\"',\n            display: 'table',\n            clear: 'both',\n          },\n        },\n        circle: (_mixin, size) => ({\n          borderRadius: '50%',\n          width: size,\n          height: size,\n        }),\n      },\n    },\n    // ... Other plugins\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can use these mixins in your styles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  @mixin clearfix;\n  @mixin circle 100px;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"use-matches-hook",children:"use-matches hook"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.code,{children:"use-matches"})," hook exported from ",(0,r.jsx)(n.code,{children:"@mantine/core"})," is an alternative to ",(0,r.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"}),"\nif you need to match multiple media queries and values. It accepts an object with media queries as keys and\nvalues at given breakpoint as values."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"use-matches"})," hook uses the same logic as ",(0,r.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," under the hood,\nit is not recommended to be used as a primary source of responsive styles, especially if you have ssr in your application."]}),"\n",(0,r.jsx)(n.p,{children:"In the following example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Starting from ",(0,r.jsx)(n.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(n.code,{children:"red.9"})]}),"\n",(0,r.jsxs)(n.li,{children:["Between ",(0,r.jsx)(n.code,{children:"theme.breakpoints.sm"})," and ",(0,r.jsx)(n.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(n.code,{children:"orange.9"})]}),"\n",(0,r.jsxs)(n.li,{children:["Below ",(0,r.jsx)(n.code,{children:"theme.breakpoints.sm"}),", color will be ",(0,r.jsx)(n.code,{children:"blue.9"})]}),"\n"]}),"\n",(0,r.jsx)(t,{data:l.o}),"\n",(0,r.jsx)(n.h2,{id:"barchart-value-label",children:"BarChart value label"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/charts/bar-chart",children:"BarChart"})," now supports ",(0,r.jsx)(n.code,{children:"withBarValueLabel"})," prop that allows\ndisplaying value label on top of each bar:"]}),"\n",(0,r.jsx)(t,{data:c.a}),"\n",(0,r.jsx)(n.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/styles/emotion",children:"usage with emotion"})," guide"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"//guides/6x-to-7x/",children:"6.x -> 7.x"})," guide has been updated to include migration to ",(0,r.jsx)(n.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/form/use-field",children:"use-field"})," hook documentation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/form/uncontrolled",children:"Uncontrolled form mode"})," examples now include usage of ",(0,r.jsx)(n.code,{children:"form.key()"})," function"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/styles/postcss-preset/#custom-mixins",children:"Custom PostCSS mixins"})," documentation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/styles/responsive/#use-matches-hook",children:"use-matches"})," hook documentation has been added to the responsive guide"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advanced templates now include GitHub workflows to run tests on CI"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/aspect-ratio",children:"AspectRatio"})," component has been migrated to ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",children:"aspect-ratio"})," CSS property"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(m,{...e})})}},53332:function(e,n,t){"use strict";t.d(n,{a:function(){return a}});var r=t(52322),i=t(8132),o=t(9404);let a={type:"code",component:function(){return(0,r.jsx)(i.v,{h:300,data:o.aT,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.op,language:"tsx",fileName:"data.ts"}]}},60417:function(e,n,t){"use strict";t.d(n,{j:function(){return l}});var r=t(52322),i=t(58898),o=t(95721);let a=`
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
`,s=(0,o.kc)((e,n,t)=>({wrapper:{maxWidth:(0,i.h)(400),width:"100%",height:(0,i.h)(180),display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",borderRadius:e.radius.sm,[t.light]:{backgroundColor:e.colors.gray[1]},[t.dark]:{backgroundColor:e.colors.dark[5]},[t.smallerThan("sm")]:{[`& .${t.ref("child")}`]:{fontSize:e.fontSizes.xs}}},child:{ref:t.ref("child"),padding:e.spacing.md,borderRadius:e.radius.sm,boxShadow:e.shadows.md,[t.light]:{backgroundColor:e.white,color:e.black},[t.dark]:{backgroundColor:e.colors.dark[8],color:e.white}}})),l={type:"code",component:function(){let{classes:e}=s();return(0,r.jsx)("div",{className:e.wrapper,children:(0,r.jsx)("div",{className:e.child,children:"createStyles demo"})})},code:a,defaultExpanded:!1}},55115:function(e,n,t){"use strict";t.d(n,{X:function(){return c}});var r=t(52322),i=t(74770),o=t(12491),a=t(17115),s=t(50580);function l(e){return new Promise(n=>{window.setTimeout(()=>{n("mantine"===e?null:'Value must be "mantine"')},800)})}let c={type:"code",component:function(){let e=(0,s.U)({initialValue:"",validate:l});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.o,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,r.jsx)(o.a,{size:18}):null,mb:"md"}),(0,r.jsx)(a.z,{onClick:e.validate,children:"Validate async"})]})},code:`
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
`,centered:!0,maxWidth:340}},4425:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(52322),i=t(74770),o=t(50580),a=t(51057);let s={type:"code",component:function(){let e=(0,o.U)({initialValue:"",validateOnChange:!0,validate:(0,a.J)("Invalid email")});return(0,r.jsx)(i.o,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
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
`,centered:!0,maxWidth:340}},42351:function(e,n,t){"use strict";t.d(n,{o:function(){return l}});var r=t(52322),i=t(27780),o=t(68755);let a=["xs","sm","md","lg","xl"];var s=t(28559);let l={type:"code",component:function(){let e=function(e,n){let t=(0,o.rZ)(),r=(0,i.a)(`(min-width: ${t.breakpoints.xs})`,!1,void 0),s=(0,i.a)(`(min-width: ${t.breakpoints.sm})`,!1,void 0),l=(0,i.a)(`(min-width: ${t.breakpoints.md})`,!1,void 0);return function(e,n){if(!n)return e.base;let t=a.indexOf(n);for(;t>=0;){if(a[t]in e)return e[a[t]];t-=1}return e.base}(e,a[[r,s,l,(0,i.a)(`(min-width: ${t.breakpoints.lg})`,!1,n),(0,i.a)(`(min-width: ${t.breakpoints.xl})`,!1,n)].findLastIndex(e=>e)])}({base:"blue.9",sm:"orange.9",lg:"red.9"});return(0,r.jsx)(s.x,{bg:e,c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:`
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
`}},95721:function(e,n,t){"use strict";t.d(n,{kc:function(){return p}});var r=t(65744),i=t(58898),o=t(68755),a=t(74251),s=t(82792),l=t(40489),c=t(29021),d=t(2784);let{cssFactory:u}={cssFactory:function(e){let{cache:n}=e,t=(...e)=>{let{ref:t,args:r}=function(e){let n;if(1!==e.length)return{args:e,ref:n};let[t]=e;if(!(t instanceof Object)||!("ref"in t))return{args:e,ref:n};n=t.ref;let r={...t};return delete r.ref,{args:[r],ref:n}}(e),i=(0,a.O)(r,n.registered);return(0,s.My)(n,i,!1),`${n.key}-${i.name}${void 0===t?"":` ${t}`}`};return{css:t,cx:(...e)=>(function(e,n,t){let r=[],i=(0,s.fp)(e,r,t);return r.length<2?t:i+n(r)})(n.registered,t,(0,l.Z)(e))}}};function h(e){return`___ref-${e||""}`}function m(e,n){return n in e.breakpoints&&"number"!=typeof n?(0,r.px)(e.breakpoints[n]):(0,r.px)(n)}let f=e=>({light:'[data-mantine-color-scheme="light"] &',dark:'[data-mantine-color-scheme="dark"] &',rtl:'[dir="rtl"] &',ltr:'[dir="ltr"] &',notRtl:'[dir="ltr"] &',notLtr:'[dir="rtl"] &',ref:h,smallerThan:n=>`@media (max-width: ${(0,i.em)(m(e,n)-.1)})`,largerThan:n=>`@media (min-width: ${(0,i.em)(m(e,n))})`});function p(e){let n="function"==typeof e?e:()=>e;return function(e){let t=(0,o.rZ)(),r=f(t),i=n(t,e,r),{css:a,cx:s}=function(){let e=(0,c.S2)();return function(e,n){let t=(0,d.useRef)();return(!t.current||n.length!==t.current.prevDeps.length||t.current.prevDeps.map((e,t)=>e===n[t]).indexOf(!1)>=0)&&(t.current={v:e(),prevDeps:[...n]}),t.current.v}(()=>u({cache:e}),[e])}();return{classes:Object.keys(i).reduce((e,n)=>(e[n]=a(i[n]),e),{}),cx:s,theme:t}}}},56624:function(e,n,t){"use strict";t.d(n,{n:function(){return r}});let r="__MANTINE_FORM_INDEX__"},5752:function(e,n,t){"use strict";function r(e){return n=>{if(n){if("function"==typeof n)e(n);else if("object"==typeof n&&"nativeEvent"in n){let{currentTarget:t}=n;t instanceof HTMLInputElement?"checkbox"===t.type?e(t.checked):e(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&e(t.value)}else e(n)}else e(n)}}t.d(n,{E:function(){return r}})},50580:function(e,n,t){"use strict";t.d(n,{U:function(){return a}});var r=t(2784),i=t(5752),o=t(56365);function a({mode:e="controlled",clearErrorOnChange:n=!0,initialValue:t,initialError:a=null,initialTouched:s=!1,onValueChange:l,validateOnChange:c=!1,validateOnBlur:d=!1,validate:u,resolveValidationError:h,type:m="input"}){let[f,p]=(0,r.useState)(t),x=(0,r.useRef)(f),[g,b]=(0,r.useState)(0),[j,v]=(0,r.useState)(a||null),k=(0,r.useRef)(s||!1),[,y]=(0,r.useState)(k.current),[w,C]=(0,r.useState)(!1),S=(0,r.useMemo)(()=>h||(e=>e),[h]),E=(0,r.useCallback)((n,{updateState:t="controlled"===e}={})=>{k.current=n,t&&y(n)},[]),T=(0,r.useCallback)(async(t,{updateKey:r="uncontrolled"===e,updateState:i="controlled"===e}={})=>{x.current!==t&&(x.current=t,l?.(t),n&&null!==j&&v(null),i&&p(t),r&&b(e=>e+1),c&&R())},[j,n]),I=(0,r.useCallback)(()=>{T(t),v(null),E(!1)},[t]),N=(0,r.useCallback)(()=>x.current,[]),_=(0,r.useCallback)(()=>k.current,[]),B=(0,r.useCallback)(()=>x.current!==t,[t]),R=(0,r.useCallback)(async()=>{let e=u?.(x.current);if(!(e instanceof Promise))return v(e),e;C(!0);try{let n=await e;C(!1),v(n)}catch(n){C(!1);let e=S(n);return v(e),e}},[]);return{key:g,getValue:N,setValue:T,reset:I,getInputProps:({withError:n=!0,withFocus:t=!0}={})=>{let r={onChange:(0,i.E)(e=>T(e,{updateKey:!1}))};return n&&(r.error=j),"checkbox"===m?r["controlled"===e?"checked":"defaultChecked"]=x.current:r["controlled"===e?"value":"defaultValue"]=x.current,t&&(r.onFocus=()=>{E(!0)},r.onBlur=()=>{(0,o.i)("",!!d)&&R()}),r},isValidating:w,validate:R,error:j,setError:v,isTouched:_,isDirty:B,resetTouched:(0,r.useCallback)(()=>E(!1),[])}}},56365:function(e,n,t){"use strict";t.d(n,{i:function(){return i}});var r=t(56624);function i(e,n){return!!n&&("boolean"==typeof n?n:!!Array.isArray(n)&&n.includes(e.replace(/[.][0-9]/g,`.${r.n}`)))}},51057:function(e,n,t){"use strict";t.d(n,{J:function(){return i}});var r=t(1328);function i(e){return(0,r.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},1328:function(e,n,t){"use strict";function r(e,n){let t=n||!0;return n=>"string"!=typeof n?t:e.test(n)?null:t}t.d(n,{w:function(){return r}})}},function(e){e.O(0,[61177,16717,79518,66748,11340,40296,92888,49774,40179],function(){return e(e.s=29380)}),_N_E=e.O()}]);