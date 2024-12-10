(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69704],{29380:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-9-0",function(){return n(10316)}])},10316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(52322),i=n(45392),o=n(60417),a=n(4425),l=n(55115),s=n(42351),c=n(53332),u=n(25071),d=n(15019);let h=(0,u.A)(d.us.Changelog790);function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"mantineemotion-package",children:"@mantine/emotion package"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package is now available to simplify migration\nfrom ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x"}),". It includes ",(0,r.jsx)(t.code,{children:"createStyles"})," function and additional\nfunctionality for ",(0,r.jsx)(t.code,{children:"sx"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props for all components similar to what was available\nin ",(0,r.jsx)(t.code,{children:"@mantine/core"})," package in v6."]}),"\n",(0,r.jsxs)(t.p,{children:["If you still haven't migrated to 7.x because of the change in styling approach, you can now\nhave a smoother transition by using ",(0,r.jsx)(t.code,{children:"@mantine/emotion"})," package. To learn more about the package,\nvisit the ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"documentation page"})," and updated ",(0,r.jsx)(t.a,{href:"/guides/6x-to-7x/",children:"6.x to 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n,{data:o.j}),"\n",(0,r.jsx)(t.h2,{id:"react-183-support",children:"React 18.3 support"}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/*"})," components and hooks have been updated to support React 18.3. It is\nrecommended to update your application as well to prepare for the upcoming ",(0,r.jsx)(t.a,{href:"https://react.dev/blog/2024/04/25/react-19",children:"React 19 release"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"use-field-hook",children:"use-field hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook is now available in ",(0,r.jsx)(t.code,{children:"@mantine/form"})," package.\nIt can be used as a simpler alternative to ",(0,r.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook to manage state of a single input without the need to create a form.\nThe hook supports most of ",(0,r.jsx)(t.code,{children:"use-form"})," hook features: validation with function, touched and\ndirty state, error message, validation on change/blur and more."]}),"\n",(0,r.jsx)(n,{data:a.Z}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-field"})," hook also supports async validation:"]}),"\n",(0,r.jsx)(n,{data:l.X}),"\n",(0,r.jsx)(t.h2,{id:"custom-postcss-mixins",children:"Custom PostCSS mixins"}),"\n",(0,r.jsxs)(t.p,{children:["You can now define custom mixins that are not included in ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset",children:"mantine-postcss-preset"})," by specifying them\nin the ",(0,r.jsx)(t.code,{children:"mixins"})," option. To learn about mixins syntax, follow ",(0,r.jsx)(t.a,{href:"https://github.com/postcss/postcss-mixins#readme",children:"postcss-mixins documentation"}),".\nNote that this feature is available in ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine"})," starting from version 1.15.0."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of adding ",(0,r.jsx)(t.code,{children:"clearfix"})," and ",(0,r.jsx)(t.code,{children:"circle"})," mixins:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n      mixins: {\n        clearfix: {\n          '&::after': {\n            content: '\"\"',\n            display: 'table',\n            clear: 'both',\n          },\n        },\n        circle: (_mixin, size) => ({\n          borderRadius: '50%',\n          width: size,\n          height: size,\n        }),\n      },\n    },\n    // ... Other plugins\n  },\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then you can use these mixins in your styles:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scss",children:".demo {\n  @mixin clearfix;\n  @mixin circle 100px;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-matches-hook",children:"use-matches hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"use-matches"})," hook exported from ",(0,r.jsx)(t.code,{children:"@mantine/core"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"}),"\nif you need to match multiple media queries and values. It accepts an object with media queries as keys and\nvalues at given breakpoint as values."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"use-matches"})," hook uses the same logic as ",(0,r.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," under the hood,\nit is not recommended to be used as a primary source of responsive styles, especially if you have ssr in your application."]}),"\n",(0,r.jsx)(t.p,{children:"In the following example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Starting from ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"red.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Between ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"})," and ",(0,r.jsx)(t.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,r.jsx)(t.code,{children:"orange.9"})]}),"\n",(0,r.jsxs)(t.li,{children:["Below ",(0,r.jsx)(t.code,{children:"theme.breakpoints.sm"}),", color will be ",(0,r.jsx)(t.code,{children:"blue.9"})]}),"\n"]}),"\n",(0,r.jsx)(n,{data:s.o}),"\n",(0,r.jsx)(t.h2,{id:"barchart-value-label",children:"BarChart value label"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," now supports ",(0,r.jsx)(t.code,{children:"withBarValueLabel"})," prop that allows\ndisplaying value label on top of each bar:"]}),"\n",(0,r.jsx)(n,{data:c.a}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"usage with emotion"})," guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"//guides/6x-to-7x/",children:"6.x -> 7.x"})," guide has been updated to include migration to ",(0,r.jsx)(t.a,{href:"/styles/emotion",children:"@mantine/emotion"})," package"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/use-field",children:"use-field"})," hook documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/form/uncontrolled",children:"Uncontrolled form mode"})," examples now include usage of ",(0,r.jsx)(t.code,{children:"form.key()"})," function"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#custom-mixins",children:"Custom PostCSS mixins"})," documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive/#use-matches-hook",children:"use-matches"})," hook documentation has been added to the responsive guide"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Advanced templates now include GitHub workflows to run tests on CI"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/aspect-ratio",children:"AspectRatio"})," component has been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",children:"aspect-ratio"})," CSS property"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(m,{...e})})}},55484:function(e,t,n){"use strict";n.d(t,{q:function(){return z}});var r=n(2784),i=n(61049),o=n.n(i),a=n(91745),l=n(15027),s=n(79376),c=n(20092),u=n(22520),d=n(83365),h=n(95926),m=["x1","y1","x2","y2","key"],f=["offset"];function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=p(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==p(t)?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=function(e){var t=e.fill;if(!t||"none"===t)return null;var n=e.fillOpacity,i=e.x,o=e.y,a=e.width,l=e.height,s=e.ry;return r.createElement("rect",{x:i,y:o,ry:s,width:a,height:l,stroke:"none",fill:t,fillOpacity:n,className:"recharts-cartesian-grid-bg"})};function j(e,t){var n;if(r.isValidElement(e))n=r.cloneElement(e,t);else if(o()(e))n=e(t);else{var i=t.x1,a=t.y1,l=t.x2,c=t.y2,u=t.key,d=v(t,m),h=(0,s.L6)(d,!1),p=(h.offset,v(h,f));n=r.createElement("line",y({},p,{x1:i,y1:a,x2:l,y2:c,fill:"none",key:u}))}return n}function w(e){var t=e.x,n=e.width,i=e.horizontal,o=void 0===i||i,a=e.horizontalPoints;if(!o||!a||!a.length)return null;var l=a.map(function(r,i){return j(o,g(g({},e),{},{x1:t,y1:r,x2:t+n,y2:r,key:"line-".concat(i),index:i}))});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function k(e){var t=e.y,n=e.height,i=e.vertical,o=void 0===i||i,a=e.verticalPoints;if(!o||!a||!a.length)return null;var l=a.map(function(r,i){return j(o,g(g({},e),{},{x1:r,y1:t,x2:r,y2:t+n,key:"line-".concat(i),index:i}))});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function O(e){var t=e.horizontalFill,n=e.fillOpacity,i=e.x,o=e.y,a=e.width,l=e.height,s=e.horizontalPoints,c=e.horizontal;if(!(void 0===c||c)||!t||!t.length)return null;var u=s.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==u[0]&&u.unshift(0);var d=u.map(function(e,s){var c=u[s+1]?u[s+1]-e:o+l-e;if(c<=0)return null;var d=s%t.length;return r.createElement("rect",{key:"react-".concat(s),y:e,x:i,height:c,width:a,stroke:"none",fill:t[d],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function C(e){var t=e.vertical,n=e.verticalFill,i=e.fillOpacity,o=e.x,a=e.y,l=e.width,s=e.height,c=e.verticalPoints;if(!(void 0===t||t)||!n||!n.length)return null;var u=c.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==u[0]&&u.unshift(0);var d=u.map(function(e,t){var c=u[t+1]?u[t+1]-e:o+l-e;if(c<=0)return null;var d=t%n.length;return r.createElement("rect",{key:"react-".concat(t),x:e,y:a,width:c,height:s,stroke:"none",fill:n[d],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var E=function(e,t){var n=e.xAxis,r=e.width,i=e.height,o=e.offset;return(0,c.Rf)((0,u.f)(g(g(g({},d.O.defaultProps),n),{},{ticks:(0,c.uY)(n,!0),viewBox:{x:0,y:0,width:r,height:i}})),o.left,o.left+o.width,t)},S=function(e,t){var n=e.yAxis,r=e.width,i=e.height,o=e.offset;return(0,c.Rf)((0,u.f)(g(g(g({},d.O.defaultProps),n),{},{ticks:(0,c.uY)(n,!0),viewBox:{x:0,y:0,width:r,height:i}})),o.top,o.top+o.height,t)},P={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function z(e){var t,n,i,s,c,u,d=(0,h.zn)(),m=(0,h.Mw)(),f=(0,h.qD)(),x=g(g({},e),{},{stroke:null!==(t=e.stroke)&&void 0!==t?t:P.stroke,fill:null!==(n=e.fill)&&void 0!==n?n:P.fill,horizontal:null!==(i=e.horizontal)&&void 0!==i?i:P.horizontal,horizontalFill:null!==(s=e.horizontalFill)&&void 0!==s?s:P.horizontalFill,vertical:null!==(c=e.vertical)&&void 0!==c?c:P.vertical,verticalFill:null!==(u=e.verticalFill)&&void 0!==u?u:P.verticalFill,x:(0,l.hj)(e.x)?e.x:f.left,y:(0,l.hj)(e.y)?e.y:f.top,width:(0,l.hj)(e.width)?e.width:f.width,height:(0,l.hj)(e.height)?e.height:f.height}),v=x.x,j=x.y,z=x.width,A=x.height,N=x.syncWithTicks,T=x.horizontalValues,I=x.verticalValues,_=(0,h.CW)(),F=(0,h.Nf)();if(!(0,l.hj)(z)||z<=0||!(0,l.hj)(A)||A<=0||!(0,l.hj)(v)||v!==+v||!(0,l.hj)(j)||j!==+j)return null;var B=x.verticalCoordinatesGenerator||E,R=x.horizontalCoordinatesGenerator||S,D=x.horizontalPoints,V=x.verticalPoints;if((!D||!D.length)&&o()(R)){var $=T&&T.length,L=R({yAxis:F?g(g({},F),{},{ticks:$?T:F.ticks}):void 0,width:d,height:m,offset:f},!!$||N);(0,a.Z)(Array.isArray(L),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(p(L),"]")),Array.isArray(L)&&(D=L)}if((!V||!V.length)&&o()(B)){var M=I&&I.length,Z=B({xAxis:_?g(g({},_),{},{ticks:M?I:_.ticks}):void 0,width:d,height:m,offset:f},!!M||N);(0,a.Z)(Array.isArray(Z),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(p(Z),"]")),Array.isArray(Z)&&(V=Z)}return r.createElement("g",{className:"recharts-cartesian-grid"},r.createElement(b,{fill:x.fill,fillOpacity:x.fillOpacity,x:x.x,y:x.y,width:x.width,height:x.height,ry:x.ry}),r.createElement(w,y({},x,{offset:f,horizontalPoints:D,xAxis:_,yAxis:F})),r.createElement(k,y({},x,{offset:f,verticalPoints:V,xAxis:_,yAxis:F})),r.createElement(O,y({},x,{horizontalPoints:D})),r.createElement(C,y({},x,{verticalPoints:V})))}z.displayName="CartesianGrid"},80739:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var r=n(71572),i=n(171),o=n(25556),a=n(3131),l=n(69524),s=(0,r.z)({chartName:"BarChart",GraphicalChild:i.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.K},{axisType:"yAxis",AxisComp:a.B}],formatAxisMap:l.t9})},53332:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var r=n(52322),i=n(8132),o=n(9404);let a={type:"code",component:function(){return(0,r.jsx)(i.v,{h:300,data:o.aT,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.op,language:"tsx",fileName:"data.ts"}]}},60417:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});var r=n(52322),i=n(58898),o=n(38655);let a=`
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
`,l=(0,o.kc)((e,t,n)=>({wrapper:{maxWidth:(0,i.h)(400),width:"100%",height:(0,i.h)(180),display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",borderRadius:e.radius.sm,[n.light]:{backgroundColor:e.colors.gray[1]},[n.dark]:{backgroundColor:e.colors.dark[5]},[n.smallerThan("sm")]:{[`& .${n.ref("child")}`]:{fontSize:e.fontSizes.xs}}},child:{ref:n.ref("child"),padding:e.spacing.md,borderRadius:e.radius.sm,boxShadow:e.shadows.md,[n.light]:{backgroundColor:e.white,color:e.black},[n.dark]:{backgroundColor:e.colors.dark[8],color:e.white}}})),s={type:"code",component:function(){let{classes:e}=l();return(0,r.jsx)("div",{className:e.wrapper,children:(0,r.jsx)("div",{className:e.child,children:"createStyles demo"})})},code:a,defaultExpanded:!1}},55115:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(52322),i=n(74770),o=n(12491),a=n(39629),l=n(50580);function s(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let c={type:"code",component:function(){let e=(0,l.U)({initialValue:"",validate:s});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.o,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,r.jsx)(o.a,{size:18}):null,mb:"md"}),(0,r.jsx)(a.z,{onClick:e.validate,children:"Validate async"})]})},code:`
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
`,centered:!0,maxWidth:340}},4425:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(52322),i=n(74770),o=n(50580),a=n(51057);let l={type:"code",component:function(){let e=(0,o.U)({initialValue:"",validateOnChange:!0,validate:(0,a.J)("Invalid email")});return(0,r.jsx)(i.o,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
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
`,centered:!0,maxWidth:340}},42351:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(52322),i=n(27780),o=n(68755);let a=["xs","sm","md","lg","xl"];var l=n(28559);let s={type:"code",component:function(){let e=function(e,t){let n=(0,o.rZ)(),r=(0,i.a)(`(min-width: ${n.breakpoints.xs})`,!1,void 0),l=(0,i.a)(`(min-width: ${n.breakpoints.sm})`,!1,void 0),s=(0,i.a)(`(min-width: ${n.breakpoints.md})`,!1,void 0);return function(e,t){if(!t)return e.base;let n=a.indexOf(t);for(;n>=0;){if(a[n]in e)return e[a[n]];n-=1}return e.base}(e,a[[r,l,s,(0,i.a)(`(min-width: ${n.breakpoints.lg})`,!1,t),(0,i.a)(`(min-width: ${n.breakpoints.xl})`,!1,t)].findLastIndex(e=>e)])}({base:"blue.9",sm:"orange.9",lg:"red.9"});return(0,r.jsx)(l.x,{bg:e,c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:`
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
`}},38655:function(e,t,n){"use strict";n.d(t,{kc:function(){return x}});var r=n(65744),i=n(58898),o=n(68755),a=n(79510),l=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},s=function(e,t,n){l(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do e.insert(t===i?"."+r:"",i,e.sheet,!0),i=i.next;while(void 0!==i)}},c=n(40489),u=n(45241),d=n(2784);let{cssFactory:h}={cssFactory:function(e){let{cache:t}=e,n=(...e)=>{let{ref:n,args:r}=function(e){let t;if(1!==e.length)return{args:e,ref:t};let[n]=e;if(!(n instanceof Object)||!("ref"in n))return{args:e,ref:t};t=n.ref;let r={...n};return delete r.ref,{args:[r],ref:t}}(e),i=(0,a.O)(r,t.registered);return s(t,i,!1),`${t.key}-${i.name}${void 0===n?"":` ${n}`}`};return{css:n,cx:(...e)=>(function(e,t,n){var r;let i=[],o=(r="",n.split(" ").forEach(function(t){void 0!==e[t]?i.push(e[t]+";"):t&&(r+=t+" ")}),r);return i.length<2?n:o+t(i)})(t.registered,n,(0,c.Z)(e))}}};function m(e){return`___ref-${e||""}`}function f(e,t){return t in e.breakpoints&&"number"!=typeof t?(0,r.px)(e.breakpoints[t]):(0,r.px)(t)}let p=e=>({light:'[data-mantine-color-scheme="light"] &',dark:'[data-mantine-color-scheme="dark"] &',rtl:'[dir="rtl"] &',ltr:'[dir="ltr"] &',notRtl:'[dir="ltr"] &',notLtr:'[dir="rtl"] &',ref:m,smallerThan:t=>`@media (max-width: ${(0,i.em)(f(e,t)-.1)})`,largerThan:t=>`@media (min-width: ${(0,i.em)(f(e,t))})`});function x(e){let t="function"==typeof e?e:()=>e;return function(e){let n=(0,o.rZ)(),r=p(n),i=t(n,e,r),{css:a,cx:l}=function(){let e=(0,u.S2)();return function(e,t){let n=(0,d.useRef)(null);return(!n.current||t.length!==n.current.prevDeps.length||n.current.prevDeps.map((e,n)=>e===t[n]).indexOf(!1)>=0)&&(n.current={v:e(),prevDeps:[...t]}),n.current.v}(()=>h({cache:e}),[e])}();return{classes:Object.keys(i).reduce((e,t)=>(e[t]=a(i[t]),e),{}),cx:l,theme:n}}}},56624:function(e,t,n){"use strict";n.d(t,{n:function(){return r}});let r="__MANTINE_FORM_INDEX__"},5752:function(e,t,n){"use strict";function r(e){return t=>{if(t){if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:n}=t;n instanceof HTMLInputElement?"checkbox"===n.type?e(n.checked):e(n.value):(n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement)&&e(n.value)}else e(t)}else e(t)}}n.d(t,{E:function(){return r}})},50580:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(2784),i=n(5752),o=n(56365);function a({mode:e="controlled",clearErrorOnChange:t=!0,initialValue:n,initialError:a=null,initialTouched:l=!1,onValueChange:s,validateOnChange:c=!1,validateOnBlur:u=!1,validate:d,resolveValidationError:h,type:m="input"}){let[f,p]=(0,r.useState)(n),x=(0,r.useRef)(f),[g,y]=(0,r.useState)(0),[v,b]=(0,r.useState)(a||null),j=(0,r.useRef)(l||!1),[,w]=(0,r.useState)(j.current),[k,O]=(0,r.useState)(!1),C=(0,r.useMemo)(()=>h||(e=>e),[h]),E=(0,r.useCallback)((t,{updateState:n="controlled"===e}={})=>{j.current=t,n&&w(t)},[]),S=(0,r.useCallback)((n,{updateKey:r="uncontrolled"===e,updateState:i="controlled"===e}={})=>{x.current!==n&&(x.current=n,s?.(n),t&&null!==v&&b(null),i&&p(n),r&&y(e=>e+1),c&&T())},[v,t]),P=(0,r.useCallback)(()=>{S(n),b(null),E(!1)},[n]),z=(0,r.useCallback)(()=>x.current,[]),A=(0,r.useCallback)(()=>j.current,[]),N=(0,r.useCallback)(()=>x.current!==n,[n]),T=(0,r.useCallback)(async()=>{let e=d?.(x.current);if(!(e instanceof Promise))return b(e),e;O(!0);try{let t=await e;O(!1),b(t)}catch(t){O(!1);let e=C(t);return b(e),e}},[]);return{key:g,getValue:z,setValue:S,reset:P,getInputProps:({withError:t=!0,withFocus:n=!0}={})=>{let r={onChange:(0,i.E)(e=>S(e,{updateKey:!1}))};return t&&(r.error=v),"checkbox"===m?r["controlled"===e?"checked":"defaultChecked"]=x.current:r["controlled"===e?"value":"defaultValue"]=x.current,n&&(r.onFocus=()=>{E(!0)},r.onBlur=()=>{(0,o.i)("",!!u)&&T()}),r},isValidating:k,validate:T,error:v,setError:b,isTouched:A,isDirty:N,resetTouched:(0,r.useCallback)(()=>E(!1),[])}}},56365:function(e,t,n){"use strict";n.d(t,{i:function(){return i}});var r=n(56624);function i(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]+/g,`.${r.n}`)))}},51057:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(1328);function i(e){return(0,r.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},1328:function(e,t,n){"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{w:function(){return r}})}},function(e){e.O(0,[61177,5248,90160,66748,11340,40296,92888,49774,40179],function(){return e(e.s=29380)}),_N_E=e.O()}]);