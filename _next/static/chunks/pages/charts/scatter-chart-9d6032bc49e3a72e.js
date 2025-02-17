(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92523],{81851:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/scatter-chart",function(){return a(14505)}])},14505:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var r=a(31085),n=a(71184),o=a(8439),i=a(79932),s=a(52118);let l={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.wV,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.H1,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.wV,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.H1,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.wV,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0,legendProps:{verticalAlign:"bottom",height:20}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 20 }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.H1,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},dataKey:{x:"age",y:"BMI"}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      dataKey={{ x: 'age', y: 'BMI' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.Qk,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3400]},valueFormatter:{x:e=>`${e} years`,y:e=>`$${new Intl.NumberFormat("en-US").format(e)}`}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'average_monthly_spending' }}
      yAxisProps={{ domain: [800, 3400] }}
      valueFormatter={{
        x: (value) => \`\${value} years\`,
        y: (value) => \`$\${new Intl.NumberFormat('en-US').format(value)}\`,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.p1,language:"tsx",fileName:"data.ts"}]};var p=a(75413),m={root:"m_f09a294f"};let u={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",className:m.root})},code:[{code:`
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      className={classes.root}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},y={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",strokeDasharray:"15 15"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      strokeDasharray="15 15"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.Qk,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3500]},unit:{y:"$"},labels:{x:"Age",y:"Spending"}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'average_monthly_spending' }}
      yAxisProps={{ domain: [800, 3500] }}
      unit={{ y: '$' }}
      labels={{ x: 'Age', y: 'Spending' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.p1,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",labels:{x:"Age",y:"Body mass index"}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      labels={{ x: 'Age', y: 'Body mass index' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]};var b=a(58120),v=a(93065);function j({payload:e}){return e?(0,r.jsx)(b.t,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:e.map(e=>(0,r.jsxs)(v.E,{fz:"sm",children:[e.name,": ",e.value]},e.name))}):null}let A={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipProps:{content:({payload:e})=>(0,r.jsx)(j,{payload:e})}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      {payload.map((item: any) => (
        <Text key={item.name} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      tooltipProps={{
        content: ({ payload }) => <ChartTooltip payload={payload} />,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},w={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withTooltip:!1})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withTooltip={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},L={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipAnimationDuration:200})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      tooltipAnimationDuration={200}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},S={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",scatterProps:{shape:(0,r.jsx)("circle",{r:3})}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      scatterProps={{ shape: <circle r={3} /> }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},k={type:"code",component:function(){return(0,r.jsx)(i.t,{h:350,data:s.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",referenceLines:[{y:14,label:"Underweight ↓",color:"red.7"},{y:19,label:"Normal weight",color:"teal.7"},{y:30,label:"Overweight ↑",color:"red.7"}]})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      referenceLines={[
        { y: 14, label: 'Underweight \u2193', color: 'red.7' },
        { y: 19, label: 'Normal weight', color: 'teal.7' },
        { y: 30, label: 'Overweight \u2191', color: 'red.7' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]};var C=a(85954),M=a(38215);let B=(0,C.P)(M.XZ.ScatterChart);function I(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{data:o.C}),"\n",(0,r.jsx)(t.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,r.jsx)(a,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(t.p,{children:["To display chart legend, set ",(0,r.jsx)(t.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"legendProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,r.jsx)(a,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," and ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,r.jsx)(a,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(t.p,{children:["To format values in the tooltip and axis ticks, use ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value or an\nobject with ",(0,r.jsx)(t.code,{children:"x"})," and ",(0,r.jsx)(t.code,{children:"y"})," keys to format x and y values separately:"]}),"\n",(0,r.jsx)(a,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"point-labels",children:"Point labels"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"pointLabels"})," prop to ",(0,r.jsx)(t.code,{children:"x"})," or ",(0,r.jsx)(t.code,{children:"y"})," to display labels on data points for the\ncorresponding axis:"]}),"\n",(0,r.jsx)(a,{data:p.k}),"\n",(0,r.jsx)(t.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"--chart-grid-color"})," and ",(0,r.jsx)(t.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,r.jsx)(t.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,r.jsx)(a,{data:u}),"\n",(0,r.jsxs)(t.p,{children:["If your application has only one color scheme, you can use ",(0,r.jsx)(t.code,{children:"gridColor"})," and ",(0,r.jsx)(t.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { ScatterChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <ScatterChart\n      h={350}\n      data={data}\n      dataKey={{ x: 'age', y: 'BMI' }}\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,r.jsx)(t.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,r.jsx)(a,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"unit"})," prop to render a unit label next to the axis ticks and tooltip values:"]}),"\n",(0,r.jsx)(a,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-labels",children:"Tooltip labels"}),"\n",(0,r.jsxs)(t.p,{children:["To customize labels displayed in the tooltip, use ",(0,r.jsx)(t.code,{children:"labels"})," prop:"]}),"\n",(0,r.jsx)(a,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent:"]}),"\n",(0,r.jsx)(a,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["To remove tooltip, set ",(0,r.jsx)(t.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,r.jsx)(a,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,r.jsx)(t.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,r.jsx)(a,{data:L}),"\n",(0,r.jsx)(t.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,r.jsxs)(t.p,{children:["You can use any shape as a dot by passing props to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Scatter",children:"Scatter"}),"\ncomponent:"]}),"\n",(0,r.jsx)(a,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,r.jsx)(a,{data:k})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(B,{...e,children:(0,r.jsx)(I,{...e})})}},12012:(e,t,a)=>{"use strict";a.d(t,{d:()=>B});var r=a(14041),n=a(93655),o=a.n(n),i=a(13157),s=a(81649),l=a(41762),c=a(68706),d=a(47915),h=a(50241),x=a(51732),p=["x1","y1","x2","y2","key"],m=["offset"];function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach(function(t){var r,n;r=t,n=a[t],(r=function(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=u(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==u(t)?t:t+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var v=function(e){var t=e.fill;if(!t||"none"===t)return null;var a=e.fillOpacity,n=e.x,o=e.y,i=e.width,s=e.height,l=e.ry;return r.createElement("rect",{x:n,y:o,ry:l,width:i,height:s,stroke:"none",fill:t,fillOpacity:a,className:"recharts-cartesian-grid-bg"})};function j(e,t){var a;if(r.isValidElement(e))a=r.cloneElement(e,t);else if(o()(e))a=e(t);else{var n=t.x1,i=t.y1,s=t.x2,c=t.y2,d=t.key,h=b(t,p),x=(0,l.J9)(h,!1),u=(x.offset,b(x,m));a=r.createElement("line",f({},u,{x1:n,y1:i,x2:s,y2:c,fill:"none",key:d}))}return a}function A(e){var t=e.x,a=e.width,n=e.horizontal,o=void 0===n||n,i=e.horizontalPoints;if(!o||!i||!i.length)return null;var s=i.map(function(r,n){return j(o,g(g({},e),{},{x1:t,y1:r,x2:t+a,y2:r,key:"line-".concat(n),index:n}))});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function w(e){var t=e.y,a=e.height,n=e.vertical,o=void 0===n||n,i=e.verticalPoints;if(!o||!i||!i.length)return null;var s=i.map(function(r,n){return j(o,g(g({},e),{},{x1:r,y1:t,x2:r,y2:t+a,key:"line-".concat(n),index:n}))});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function L(e){var t=e.horizontalFill,a=e.fillOpacity,n=e.x,o=e.y,i=e.width,s=e.height,l=e.horizontalPoints,c=e.horizontal;if(!(void 0===c||c)||!t||!t.length)return null;var d=l.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==d[0]&&d.unshift(0);var h=d.map(function(e,l){var c=d[l+1]?d[l+1]-e:o+s-e;if(c<=0)return null;var h=l%t.length;return r.createElement("rect",{key:"react-".concat(l),y:e,x:n,height:c,width:i,stroke:"none",fill:t[h],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function S(e){var t=e.vertical,a=e.verticalFill,n=e.fillOpacity,o=e.x,i=e.y,s=e.width,l=e.height,c=e.verticalPoints;if(!(void 0===t||t)||!a||!a.length)return null;var d=c.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==d[0]&&d.unshift(0);var h=d.map(function(e,t){var c=d[t+1]?d[t+1]-e:o+s-e;if(c<=0)return null;var h=t%a.length;return r.createElement("rect",{key:"react-".concat(t),x:e,y:i,width:c,height:l,stroke:"none",fill:a[h],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var k=function(e,t){var a=e.xAxis,r=e.width,n=e.height,o=e.offset;return(0,c.PW)((0,d.f)(g(g(g({},h.u.defaultProps),a),{},{ticks:(0,c.Rh)(a,!0),viewBox:{x:0,y:0,width:r,height:n}})),o.left,o.left+o.width,t)},C=function(e,t){var a=e.yAxis,r=e.width,n=e.height,o=e.offset;return(0,c.PW)((0,d.f)(g(g(g({},h.u.defaultProps),a),{},{ticks:(0,c.Rh)(a,!0),viewBox:{x:0,y:0,width:r,height:n}})),o.top,o.top+o.height,t)},M={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function B(e){var t,a,n,l,c,d,h=(0,x.yi)(),p=(0,x.rY)(),m=(0,x.hj)(),y=g(g({},e),{},{stroke:null!==(t=e.stroke)&&void 0!==t?t:M.stroke,fill:null!==(a=e.fill)&&void 0!==a?a:M.fill,horizontal:null!==(n=e.horizontal)&&void 0!==n?n:M.horizontal,horizontalFill:null!==(l=e.horizontalFill)&&void 0!==l?l:M.horizontalFill,vertical:null!==(c=e.vertical)&&void 0!==c?c:M.vertical,verticalFill:null!==(d=e.verticalFill)&&void 0!==d?d:M.verticalFill,x:(0,s.Et)(e.x)?e.x:m.left,y:(0,s.Et)(e.y)?e.y:m.top,width:(0,s.Et)(e.width)?e.width:m.width,height:(0,s.Et)(e.height)?e.height:m.height}),b=y.x,j=y.y,B=y.width,I=y.height,P=y.syncWithTicks,N=y.horizontalValues,D=y.verticalValues,O=(0,x.pj)(),E=(0,x.$G)();if(!(0,s.Et)(B)||B<=0||!(0,s.Et)(I)||I<=0||!(0,s.Et)(b)||b!==+b||!(0,s.Et)(j)||j!==+j)return null;var K=y.verticalCoordinatesGenerator||k,T=y.horizontalCoordinatesGenerator||C,z=y.horizontalPoints,_=y.verticalPoints;if((!z||!z.length)&&o()(T)){var F=N&&N.length,U=T({yAxis:E?g(g({},E),{},{ticks:F?N:E.ticks}):void 0,width:h,height:p,offset:m},!!F||P);(0,i.R)(Array.isArray(U),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(u(U),"]")),Array.isArray(U)&&(z=U)}if((!_||!_.length)&&o()(K)){var Z=D&&D.length,R=K({xAxis:O?g(g({},O),{},{ticks:Z?D:O.ticks}):void 0,width:h,height:p,offset:m},!!Z||P);(0,i.R)(Array.isArray(R),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(u(R),"]")),Array.isArray(R)&&(_=R)}return r.createElement("g",{className:"recharts-cartesian-grid"},r.createElement(v,{fill:y.fill,fillOpacity:y.fillOpacity,x:y.x,y:y.y,width:y.width,height:y.height,ry:y.ry}),r.createElement(A,f({},y,{offset:m,horizontalPoints:z,xAxis:O,yAxis:E})),r.createElement(w,f({},y,{offset:m,verticalPoints:_,xAxis:O,yAxis:E})),r.createElement(L,f({},y,{horizontalPoints:z})),r.createElement(S,f({},y,{verticalPoints:_})))}B.displayName="CartesianGrid"},65344:(e,t,a)=>{"use strict";a.d(t,{t:()=>c});var r=a(20904),n=a(69928),o=a(98331),i=a(51492),s=a(1693),l=a(14713),c=(0,r.gu)({chartName:"ScatterChart",GraphicalChild:n.X,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:o.W},{axisType:"yAxis",AxisComp:i.h},{axisType:"zAxis",AxisComp:s.K}],formatAxisMap:l.pr})},75413:(e,t,a)=>{"use strict";a.d(t,{k:()=>i});var r=a(31085),n=a(79932),o=a(52118);let i={type:"code",component:function(){return(0,r.jsx)(n.t,{h:350,data:o.p,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",pointLabels:"x"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      pointLabels="x"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.kZ,language:"tsx",fileName:"data.ts"}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,53417,28054,69928,39699,68831,8439,90636,46593,38792],()=>t(81851)),_N_E=e.O()}]);