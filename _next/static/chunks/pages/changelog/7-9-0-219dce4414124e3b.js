(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97237],{85780:(e,t,n)=>{"use strict";function r(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")}),r}n.d(t,{Rk:()=>r,sk:()=>a});var i=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},a=function(e,t,n){i(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next;while(void 0!==a)}}},53301:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-9-0",function(){return n(94140)}])},94140:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(31085),i=n(71184),a=n(63295),o=n(24674),l=n(23932),s=n(14967),c=n(44972),d=n(18675),u=n(20017);let h=(0,d.P)(u.XZ.Changelog790);function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"mantineemotion-package",children:"@mantine/emotion package"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package is now available to simplify migration\nfrom ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x"}),". It includes ",(0,r.jsx)(t.code,{children:"createStyles"})," function and additional\nfunctionality for ",(0,r.jsx)(t.code,{children:"sx"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props for all components similar to what was available\nin ",(0,r.jsx)(t.code,{children:"@mantine/core"})," package in v6."]}),"\n",(0,r.jsxs)(t.p,{children:["If you still haven't migrated to 7.x because of the change in styling approach, you can now\nhave a smoother transition by using ",(0,r.jsx)(t.code,{children:"@mantine/emotion"})," package. To learn more about the package,\nvisit the ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"documentation page"})," and updated ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n,{data:a.C}),"\n",(0,r.jsx)(t.h2,{id:"react-183-support",children:"React 18.3 support"}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/*"})," components and hooks have been updated to support React 18.3. It is\nrecommended to update your application as well to prepare for the upcoming ",(0,r.jsx)(t.a,{href:"https://react.dev/blog/2024/04/25/react-19",children:"React 19 release"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"use-field-hook",children:"use-field hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook is now available in ",(0,r.jsx)(t.code,{children:"@mantine/form"})," package.\nIt can be used as a simpler alternative to ",(0,r.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook to manage state of a single input without the need to create a form.\nThe hook supports most of ",(0,r.jsx)(t.code,{children:"use-form"})," hook features: validation with function, touched and\ndirty state, error message, validation on change/blur and more."]}),"\n",(0,r.jsx)(n,{data:o.I}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-field"})," hook also supports async validation:"]}),"\n",(0,r.jsx)(n,{data:l.A}),"\n",(0,r.jsx)(t.h2,{id:"custom-postcss-mixins",children:"Custom PostCSS mixins"}),"\n",(0,r.jsxs)(t.p,{children:["You can now define custom mixins that are not included in ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset",children:"mantine-postcss-preset"})," by specifying them\nin the ",(0,r.jsx)(t.code,{children:"mixins"})," option. To learn about mixins syntax, follow ",(0,r.jsx)(t.a,{href:"https://github.com/postcss/postcss-mixins#readme",children:"postcss-mixins documentation"}),".\nNote that this feature is available in ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine"})," starting from version 1.15.0."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of adding ",(0,r.jsx)(t.code,{children:"clearfix"})," and ",(0,r.jsx)(t.code,{children:"circle"})," mixins:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n      mixins: {\n        clearfix: {\n          '&::after': {\n            content: '\"\"',\n            display: 'table',\n            clear: 'both',\n          },\n        },\n        circle: (_mixin, size) => ({\n          borderRadius: '50%',\n          width: size,\n          height: size,\n        }),\n      },\n    },\n    // ... Other plugins\n  },\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then you can use these mixins in your styles:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  @mixin clearfix;\n  @mixin circle 100px;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-matches-hook",children:"use-matches hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"use-matches"})," hook exported from ",(0,r.jsx)(t.code,{children:"@mantine/core"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"}),"\nif you need to match multiple media queries and values. It accepts an object with media queries as keys and\nvalues at given breakpoint as values."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"use-matches"})," hook uses the same logic as ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," under the hood,\nit is not recommended to be used as a primary source of responsive styles, especially if you have ssr in your application."]}),"\n",(0,r.jsx)(t.p,{children:"In the following example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Starting from ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"red.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Between ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"})," and ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"orange.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Below ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"}),", color will be ",(0,r.jsx)(t.code,{children:"blue.9"})]}),"\n"]}),"\n",(0,r.jsx)(n,{data:s.I}),"\n",(0,r.jsx)(t.h2,{id:"barchart-value-label",children:"BarChart value label"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," now supports ",(0,r.jsx)(t.code,{children:"withBarValueLabel"})," prop that allows\ndisplaying value label on top of each bar:"]}),"\n",(0,r.jsx)(n,{data:c.P}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"usage with emotion"})," guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x -> 7.x"})," guide has been updated to include migration to ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"Uncontrolled form mode"})," examples now include usage of ",(0,r.jsx)(t.code,{children:"form.key()"})," function"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#custom-mixins",children:"Custom PostCSS mixins"})," documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive/#use-matches-hook",children:"use-matches"})," hook documentation has been added to the responsive guide"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Advanced templates now include GitHub workflows to run tests on CI"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/aspect-ratio",children:"AspectRatio"})," component has been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",children:"aspect-ratio"})," CSS property"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(m,{...e})})}},12012:(e,t,n)=>{"use strict";n.d(t,{d:()=>A});var r=n(14041),i=n(93655),a=n.n(i),o=n(13157),l=n(81649),s=n(41762),c=n(68706),d=n(47915),u=n(50241),h=n(51732),m=["x1","y1","x2","y2","key"],f=["offset"];function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=p(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==p(t)?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=function(e){var t=e.fill;if(!t||"none"===t)return null;var n=e.fillOpacity,i=e.x,a=e.y,o=e.width,l=e.height,s=e.ry;return r.createElement("rect",{x:i,y:a,ry:s,width:o,height:l,stroke:"none",fill:t,fillOpacity:n,className:"recharts-cartesian-grid-bg"})};function j(e,t){var n;if(r.isValidElement(e))n=r.cloneElement(e,t);else if(a()(e))n=e(t);else{var i=t.x1,o=t.y1,l=t.x2,c=t.y2,d=t.key,u=v(t,m),h=(0,s.J9)(u,!1),p=(h.offset,v(h,f));n=r.createElement("line",y({},p,{x1:i,y1:o,x2:l,y2:c,fill:"none",key:d}))}return n}function k(e){var t=e.x,n=e.width,i=e.horizontal,a=void 0===i||i,o=e.horizontalPoints;if(!a||!o||!o.length)return null;var l=o.map(function(r,i){return j(a,g(g({},e),{},{x1:t,y1:r,x2:t+n,y2:r,key:"line-".concat(i),index:i}))});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function w(e){var t=e.y,n=e.height,i=e.vertical,a=void 0===i||i,o=e.verticalPoints;if(!a||!o||!o.length)return null;var l=o.map(function(r,i){return j(a,g(g({},e),{},{x1:r,y1:t,x2:r,y2:t+n,key:"line-".concat(i),index:i}))});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function E(e){var t=e.horizontalFill,n=e.fillOpacity,i=e.x,a=e.y,o=e.width,l=e.height,s=e.horizontalPoints,c=e.horizontal;if(!(void 0===c||c)||!t||!t.length)return null;var d=s.map(function(e){return Math.round(e+a-a)}).sort(function(e,t){return e-t});a!==d[0]&&d.unshift(0);var u=d.map(function(e,s){var c=d[s+1]?d[s+1]-e:a+l-e;if(c<=0)return null;var u=s%t.length;return r.createElement("rect",{key:"react-".concat(s),y:e,x:i,height:c,width:o,stroke:"none",fill:t[u],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},u)}function C(e){var t=e.vertical,n=e.verticalFill,i=e.fillOpacity,a=e.x,o=e.y,l=e.width,s=e.height,c=e.verticalPoints;if(!(void 0===t||t)||!n||!n.length)return null;var d=c.map(function(e){return Math.round(e+a-a)}).sort(function(e,t){return e-t});a!==d[0]&&d.unshift(0);var u=d.map(function(e,t){var c=d[t+1]?d[t+1]-e:a+l-e;if(c<=0)return null;var u=t%n.length;return r.createElement("rect",{key:"react-".concat(t),x:e,y:o,width:c,height:s,stroke:"none",fill:n[u],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},u)}var O=function(e,t){var n=e.xAxis,r=e.width,i=e.height,a=e.offset;return(0,c.PW)((0,d.f)(g(g(g({},u.u.defaultProps),n),{},{ticks:(0,c.Rh)(n,!0),viewBox:{x:0,y:0,width:r,height:i}})),a.left,a.left+a.width,t)},P=function(e,t){var n=e.yAxis,r=e.width,i=e.height,a=e.offset;return(0,c.PW)((0,d.f)(g(g(g({},u.u.defaultProps),n),{},{ticks:(0,c.Rh)(n,!0),viewBox:{x:0,y:0,width:r,height:i}})),a.top,a.top+a.height,t)},S={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function A(e){var t,n,i,s,c,d,u=(0,h.yi)(),m=(0,h.rY)(),f=(0,h.hj)(),x=g(g({},e),{},{stroke:null!==(t=e.stroke)&&void 0!==t?t:S.stroke,fill:null!==(n=e.fill)&&void 0!==n?n:S.fill,horizontal:null!==(i=e.horizontal)&&void 0!==i?i:S.horizontal,horizontalFill:null!==(s=e.horizontalFill)&&void 0!==s?s:S.horizontalFill,vertical:null!==(c=e.vertical)&&void 0!==c?c:S.vertical,verticalFill:null!==(d=e.verticalFill)&&void 0!==d?d:S.verticalFill,x:(0,l.Et)(e.x)?e.x:f.left,y:(0,l.Et)(e.y)?e.y:f.top,width:(0,l.Et)(e.width)?e.width:f.width,height:(0,l.Et)(e.height)?e.height:f.height}),v=x.x,j=x.y,A=x.width,z=x.height,N=x.syncWithTicks,T=x.horizontalValues,I=x.verticalValues,_=(0,h.pj)(),R=(0,h.$G)();if(!(0,l.Et)(A)||A<=0||!(0,l.Et)(z)||z<=0||!(0,l.Et)(v)||v!==+v||!(0,l.Et)(j)||j!==+j)return null;var F=x.verticalCoordinatesGenerator||O,B=x.horizontalCoordinatesGenerator||P,$=x.horizontalPoints,V=x.verticalPoints;if((!$||!$.length)&&a()(B)){var D=T&&T.length,L=B({yAxis:R?g(g({},R),{},{ticks:D?T:R.ticks}):void 0,width:u,height:m,offset:f},!!D||N);(0,o.R)(Array.isArray(L),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(p(L),"]")),Array.isArray(L)&&($=L)}if((!V||!V.length)&&a()(F)){var M=I&&I.length,U=F({xAxis:_?g(g({},_),{},{ticks:M?I:_.ticks}):void 0,width:u,height:m,offset:f},!!M||N);(0,o.R)(Array.isArray(U),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(p(U),"]")),Array.isArray(U)&&(V=U)}return r.createElement("g",{className:"recharts-cartesian-grid"},r.createElement(b,{fill:x.fill,fillOpacity:x.fillOpacity,x:x.x,y:x.y,width:x.width,height:x.height,ry:x.ry}),r.createElement(k,y({},x,{offset:f,horizontalPoints:$,xAxis:_,yAxis:R})),r.createElement(w,y({},x,{offset:f,verticalPoints:V,xAxis:_,yAxis:R})),r.createElement(E,y({},x,{horizontalPoints:$})),r.createElement(C,y({},x,{verticalPoints:V})))}A.displayName="CartesianGrid"},46421:(e,t,n)=>{"use strict";n.d(t,{E:()=>s});var r=n(10626),i=n(48094),a=n(98331),o=n(51492),l=n(14713),s=(0,r.gu)({chartName:"BarChart",GraphicalChild:i.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:a.W},{axisType:"yAxis",AxisComp:o.h}],formatAxisMap:l.pr})},44972:(e,t,n)=>{"use strict";n.d(t,{P:()=>o});var r=n(31085),i=n(40702),a=n(79301);let o={type:"code",component:function(){return(0,r.jsx)(i.E,{h:300,data:a.p,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:a.kZ,language:"tsx",fileName:"data.ts"}]}},63295:(e,t,n)=>{"use strict";n.d(t,{C:()=>l});var r=n(31085),i=n(9353);let a=`
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  wrapper: {
    maxWidth: 400,
    width: '100%',
    height: 180,
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
`,o=(0,i.rU)((e,t,n)=>({wrapper:{maxWidth:400,width:"100%",height:180,display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",borderRadius:e.radius.sm,[n.light]:{backgroundColor:e.colors.gray[1]},[n.dark]:{backgroundColor:e.colors.dark[5]},[n.smallerThan("sm")]:{[`& .${n.ref("child")}`]:{fontSize:e.fontSizes.xs}}},child:{ref:n.ref("child"),padding:e.spacing.md,borderRadius:e.radius.sm,boxShadow:e.shadows.md,[n.light]:{backgroundColor:e.white,color:e.black},[n.dark]:{backgroundColor:e.colors.dark[8],color:e.white}}})),l={type:"code",component:function(){let{classes:e}=o();return(0,r.jsx)("div",{className:e.wrapper,children:(0,r.jsx)("div",{className:e.child,children:"createStyles demo"})})},code:a,defaultExpanded:!1}},23932:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(31085),i=n(90275),a=n(25810),o=n(52022),l=n(83064);function s(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let c={type:"code",component:function(){let e=(0,l.M)({initialValue:"",validate:s});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.k,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,r.jsx)(a.a,{size:18}):null,mb:"md"}),(0,r.jsx)(o.$,{onClick:e.validate,children:"Validate async"})]})},code:`
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
`,centered:!0,maxWidth:340}},24674:(e,t,n)=>{"use strict";n.d(t,{I:()=>l});var r=n(31085),i=n(90275),a=n(83064),o=n(28887);let l={type:"code",component:function(){let e=(0,a.M)({initialValue:"",validateOnChange:!0,validate:(0,o.x)("Invalid email")});return(0,r.jsx)(i.k,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
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
`,centered:!0,maxWidth:340}},14967:(e,t,n)=>{"use strict";n.d(t,{I:()=>s});var r=n(31085),i=n(80955),a=n(92408);let o=["xs","sm","md","lg","xl"];var l=n(34056);let s={type:"code",component:function(){let e=function(e,t){let n=(0,a.xd)(),r=(0,i.U)(`(min-width: ${n.breakpoints.xs})`,!1,void 0),l=(0,i.U)(`(min-width: ${n.breakpoints.sm})`,!1,void 0),s=(0,i.U)(`(min-width: ${n.breakpoints.md})`,!1,void 0);return function(e,t){if(!t)return e.base;let n=o.indexOf(t);for(;n>=0;){if(o[n]in e)return e[o[n]];n-=1}return e.base}(e,o[[r,l,s,(0,i.U)(`(min-width: ${n.breakpoints.lg})`,!1,t),(0,i.U)(`(min-width: ${n.breakpoints.xl})`,!1,t)].findLastIndex(e=>e)])}({base:"blue.9",sm:"orange.9",lg:"red.9"});return(0,r.jsx)(l.a,{bg:e,c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:`
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
`}},9353:(e,t,n)=>{"use strict";n.d(t,{rU:()=>p});var r=n(4749),i=n(39735),a=n(92408),o=n(93135),l=n(85780),s=n(54357),c=n(36906),d=n(14041);let{cssFactory:u}={cssFactory:function(e){let{cache:t}=e,n=(...e)=>{let{ref:n,args:r}=function(e){let t;if(1!==e.length)return{args:e,ref:t};let[n]=e;if(!(n instanceof Object)||!("ref"in n))return{args:e,ref:t};t=n.ref;let r={...n};return delete r.ref,{args:[r],ref:t}}(e),i=(0,o.J)(r,t.registered);return(0,l.sk)(t,i,!1),`${t.key}-${i.name}${void 0===n?"":` ${n}`}`};return{css:n,cx:(...e)=>(function(e,t,n){let r=[],i=(0,l.Rk)(e,r,n);return r.length<2?n:i+t(r)})(t.registered,n,(0,s.A)(e))}}};function h(e){return`___ref-${e||""}`}function m(e,t){return t in e.breakpoints&&"number"!=typeof t?(0,r.px)(e.breakpoints[t]):(0,r.px)(t)}let f=e=>({light:'[data-mantine-color-scheme="light"] &',dark:'[data-mantine-color-scheme="dark"] &',rtl:'[dir="rtl"] &',ltr:'[dir="ltr"] &',notRtl:'[dir="ltr"] &',notLtr:'[dir="rtl"] &',ref:h,smallerThan:t=>`@media (max-width: ${(0,i.em)(m(e,t)-.1)})`,largerThan:t=>`@media (min-width: ${(0,i.em)(m(e,t))})`});function p(e){let t="function"==typeof e?e:()=>e;return function(e){let n=(0,a.xd)(),r=f(n),i=t(n,e,r),{css:o,cx:l}=function(){let e=(0,c.ZO)();return function(e,t){let n=(0,d.useRef)(null);return(!n.current||t.length!==n.current.prevDeps.length||n.current.prevDeps.map((e,n)=>e===t[n]).indexOf(!1)>=0)&&(n.current={v:e(),prevDeps:[...t]}),n.current.v}(()=>u({cache:e}),[e])}();return{classes:Object.keys(i).reduce((e,t)=>(e[t]=o(i[t]),e),{}),cx:l,theme:n}}}},21775:(e,t,n)=>{"use strict";n.d(t,{K:()=>r});let r="__MANTINE_FORM_INDEX__"},12195:(e,t,n)=>{"use strict";function r(e){return t=>{if(t){if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:n}=t;n instanceof HTMLInputElement?"checkbox"===n.type?e(n.checked):e(n.value):(n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement)&&e(n.value)}else e(t)}else e(t)}}n.d(t,{_:()=>r})},83064:(e,t,n)=>{"use strict";n.d(t,{M:()=>o});var r=n(14041),i=n(12195),a=n(5058);function o({mode:e="controlled",clearErrorOnChange:t=!0,initialValue:n,initialError:o=null,initialTouched:l=!1,onValueChange:s,validateOnChange:c=!1,validateOnBlur:d=!1,validate:u,resolveValidationError:h,type:m="input"}){let[f,p]=(0,r.useState)(n),x=(0,r.useRef)(f),[g,y]=(0,r.useState)(0),[v,b]=(0,r.useState)(o||null),j=(0,r.useRef)(l||!1),[,k]=(0,r.useState)(j.current),[w,E]=(0,r.useState)(!1),C=(0,r.useMemo)(()=>h||(e=>e),[h]),O=(0,r.useCallback)((t,{updateState:n="controlled"===e}={})=>{j.current=t,n&&k(t)},[]),P=(0,r.useCallback)((n,{updateKey:r="uncontrolled"===e,updateState:i="controlled"===e}={})=>{x.current!==n&&(x.current=n,s?.(n),t&&null!==v&&b(null),i&&p(n),r&&y(e=>e+1),c&&T())},[v,t,s]),S=(0,r.useCallback)(()=>{P(n),b(null),O(!1)},[n]),A=(0,r.useCallback)(()=>x.current,[]),z=(0,r.useCallback)(()=>j.current,[]),N=(0,r.useCallback)(()=>x.current!==n,[n]),T=(0,r.useCallback)(async()=>{let e=u?.(x.current);if(!(e instanceof Promise))return b(e),e;E(!0);try{let t=await e;E(!1),b(t)}catch(t){E(!1);let e=C(t);return b(e),e}},[]);return{key:g,getValue:A,setValue:P,reset:S,getInputProps:({withError:t=!0,withFocus:n=!0}={})=>{let r={onChange:(0,i._)(e=>P(e,{updateKey:!1}))};return t&&(r.error=v),"checkbox"===m?r["controlled"===e?"checked":"defaultChecked"]=x.current:r["controlled"===e?"value":"defaultValue"]=x.current,n&&(r.onFocus=()=>{O(!0)},r.onBlur=()=>{(0,a.P)("",!!d)&&T()}),r},isValidating:w,validate:T,error:v,setError:b,isTouched:z,isDirty:N,resetTouched:(0,r.useCallback)(()=>O(!1),[])}}},5058:(e,t,n)=>{"use strict";n.d(t,{P:()=>i});var r=n(21775);function i(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]+/g,`.${r.K}`)))}},28887:(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var r=n(27351);function i(e){return(0,r.c)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},27351:(e,t,n)=>{"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{c:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,[35115,28054,18675,17650,90636,46593,38792],()=>t(53301)),_N_E=e.O()}]);