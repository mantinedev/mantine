(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63902],{82493:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/scatter-chart",function(){return a(18574)}])},18574:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var r=a(52322),n=a(45392),o=a(89882),i=a(63098),s=a(48944);let l={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0,legendProps:{verticalAlign:"bottom",height:20}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},dataKey:{x:"age",y:"BMI"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3400]},valueFormatter:{x:e=>`${e} years`,y:e=>`$${new Intl.NumberFormat("en-US").format(e)}`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]};var p=a(70204);let m={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",className:"m_f09a294f"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",strokeDasharray:"15 15"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3500]},unit:{y:"$"},labels:{x:"Age",y:"Spending"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]},y={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",labels:{x:"Age",y:"Body mass index"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var g=a(1198),b=a(8582);function j({payload:e}){return e?(0,r.jsx)(g.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:e.map(e=>(0,r.jsxs)(b.x,{fz:"sm",children:[e.name,": ",e.value]},e.name))}):null}let v={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipProps:{content:({payload:e})=>(0,r.jsx)(j,{payload:e})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withTooltip:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},w={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipAnimationDuration:200})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},L={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",scatterProps:{shape:(0,r.jsx)("circle",{r:3})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},S={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",referenceLines:[{y:14,label:"Underweight ↓",color:"red.7"},{y:19,label:"Normal weight",color:"teal.7"},{y:30,label:"Overweight ↑",color:"red.7"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var I=a(54078),M=a(15019);let B=(0,I.A)(M.us.ScatterChart);function C(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{data:o.j}),"\n",(0,r.jsx)(t.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,r.jsx)(a,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(t.p,{children:["To display chart legend, set ",(0,r.jsx)(t.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"legendProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,r.jsx)(a,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," and ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,r.jsx)(a,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(t.p,{children:["To format values in the tooltip and axis ticks, use ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value or an\nobject with ",(0,r.jsx)(t.code,{children:"x"})," and ",(0,r.jsx)(t.code,{children:"y"})," keys to format x and y values separately:"]}),"\n",(0,r.jsx)(a,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"point-labels",children:"Point labels"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"pointLabels"})," prop to ",(0,r.jsx)(t.code,{children:"x"})," or ",(0,r.jsx)(t.code,{children:"y"})," to display labels on data points for the\ncorresponding axis:"]}),"\n",(0,r.jsx)(a,{data:p.y}),"\n",(0,r.jsx)(t.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"--chart-grid-color"})," and ",(0,r.jsx)(t.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,r.jsx)(t.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,r.jsx)(a,{data:m}),"\n",(0,r.jsxs)(t.p,{children:["If your application has only one color scheme, you can use ",(0,r.jsx)(t.code,{children:"gridColor"})," and ",(0,r.jsx)(t.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { ScatterChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <ScatterChart\n      h={350}\n      data={data}\n      dataKey={{ x: 'age', y: 'BMI' }}\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,r.jsx)(t.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,r.jsx)(a,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"unit"})," prop to render a unit label next to the axis ticks and tooltip values:"]}),"\n",(0,r.jsx)(a,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-labels",children:"Tooltip labels"}),"\n",(0,r.jsxs)(t.p,{children:["To customize labels displayed in the tooltip, use ",(0,r.jsx)(t.code,{children:"labels"})," prop:"]}),"\n",(0,r.jsx)(a,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent:"]}),"\n",(0,r.jsx)(a,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["To remove tooltip, set ",(0,r.jsx)(t.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,r.jsx)(a,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,r.jsx)(t.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,r.jsx)(a,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,r.jsxs)(t.p,{children:["You can use any shape as a dot by passing props to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Scatter",children:"Scatter"}),"\ncomponent:"]}),"\n",(0,r.jsx)(a,{data:L}),"\n",(0,r.jsx)(t.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,r.jsx)(a,{data:S})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(B,{...e,children:(0,r.jsx)(C,{...e})})}},55484:function(e,t,a){"use strict";a.d(t,{q:function(){return C}});var r=a(2784),n=a(61049),o=a.n(n),i=a(91745),s=a(15027),l=a(79376),c=a(20092),d=a(22520),h=a(83365),x=a(95926),p=["x1","y1","x2","y2","key"],m=["offset"];function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach(function(t){var r,n;r=t,n=a[t],(r=function(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=u(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==u(t)?t:t+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j=function(e){var t=e.fill;if(!t||"none"===t)return null;var a=e.fillOpacity,n=e.x,o=e.y,i=e.width,s=e.height,l=e.ry;return r.createElement("rect",{x:n,y:o,ry:l,width:i,height:s,stroke:"none",fill:t,fillOpacity:a,className:"recharts-cartesian-grid-bg"})};function v(e,t){var a;if(r.isValidElement(e))a=r.cloneElement(e,t);else if(o()(e))a=e(t);else{var n=t.x1,i=t.y1,s=t.x2,c=t.y2,d=t.key,h=b(t,p),x=(0,l.L6)(h,!1),u=(x.offset,b(x,m));a=r.createElement("line",g({},u,{x1:n,y1:i,x2:s,y2:c,fill:"none",key:d}))}return a}function A(e){var t=e.x,a=e.width,n=e.horizontal,o=void 0===n||n,i=e.horizontalPoints;if(!o||!i||!i.length)return null;var s=i.map(function(r,n){return v(o,y(y({},e),{},{x1:t,y1:r,x2:t+a,y2:r,key:"line-".concat(n),index:n}))});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function w(e){var t=e.y,a=e.height,n=e.vertical,o=void 0===n||n,i=e.verticalPoints;if(!o||!i||!i.length)return null;var s=i.map(function(r,n){return v(o,y(y({},e),{},{x1:r,y1:t,x2:r,y2:t+a,key:"line-".concat(n),index:n}))});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function L(e){var t=e.horizontalFill,a=e.fillOpacity,n=e.x,o=e.y,i=e.width,s=e.height,l=e.horizontalPoints,c=e.horizontal;if(!(void 0===c||c)||!t||!t.length)return null;var d=l.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==d[0]&&d.unshift(0);var h=d.map(function(e,l){var c=d[l+1]?d[l+1]-e:o+s-e;if(c<=0)return null;var h=l%t.length;return r.createElement("rect",{key:"react-".concat(l),y:e,x:n,height:c,width:i,stroke:"none",fill:t[h],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function S(e){var t=e.vertical,a=e.verticalFill,n=e.fillOpacity,o=e.x,i=e.y,s=e.width,l=e.height,c=e.verticalPoints;if(!(void 0===t||t)||!a||!a.length)return null;var d=c.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==d[0]&&d.unshift(0);var h=d.map(function(e,t){var c=d[t+1]?d[t+1]-e:o+s-e;if(c<=0)return null;var h=t%a.length;return r.createElement("rect",{key:"react-".concat(t),x:e,y:i,width:c,height:l,stroke:"none",fill:a[h],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var I=function(e,t){var a=e.xAxis,r=e.width,n=e.height,o=e.offset;return(0,c.Rf)((0,d.f)(y(y(y({},h.O.defaultProps),a),{},{ticks:(0,c.uY)(a,!0),viewBox:{x:0,y:0,width:r,height:n}})),o.left,o.left+o.width,t)},M=function(e,t){var a=e.yAxis,r=e.width,n=e.height,o=e.offset;return(0,c.Rf)((0,d.f)(y(y(y({},h.O.defaultProps),a),{},{ticks:(0,c.uY)(a,!0),viewBox:{x:0,y:0,width:r,height:n}})),o.top,o.top+o.height,t)},B={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function C(e){var t,a,n,l,c,d,h=(0,x.zn)(),p=(0,x.Mw)(),m=(0,x.qD)(),f=y(y({},e),{},{stroke:null!==(t=e.stroke)&&void 0!==t?t:B.stroke,fill:null!==(a=e.fill)&&void 0!==a?a:B.fill,horizontal:null!==(n=e.horizontal)&&void 0!==n?n:B.horizontal,horizontalFill:null!==(l=e.horizontalFill)&&void 0!==l?l:B.horizontalFill,vertical:null!==(c=e.vertical)&&void 0!==c?c:B.vertical,verticalFill:null!==(d=e.verticalFill)&&void 0!==d?d:B.verticalFill,x:(0,s.hj)(e.x)?e.x:m.left,y:(0,s.hj)(e.y)?e.y:m.top,width:(0,s.hj)(e.width)?e.width:m.width,height:(0,s.hj)(e.height)?e.height:m.height}),b=f.x,v=f.y,C=f.width,N=f.height,P=f.syncWithTicks,k=f.horizontalValues,D=f.verticalValues,O=(0,x.CW)(),T=(0,x.Nf)();if(!(0,s.hj)(C)||C<=0||!(0,s.hj)(N)||N<=0||!(0,s.hj)(b)||b!==+b||!(0,s.hj)(v)||v!==+v)return null;var K=f.verticalCoordinatesGenerator||I,z=f.horizontalCoordinatesGenerator||M,E=f.horizontalPoints,G=f.verticalPoints;if((!E||!E.length)&&o()(z)){var _=k&&k.length,F=z({yAxis:T?y(y({},T),{},{ticks:_?k:T.ticks}):void 0,width:h,height:p,offset:m},!!_||P);(0,i.Z)(Array.isArray(F),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(u(F),"]")),Array.isArray(F)&&(E=F)}if((!G||!G.length)&&o()(K)){var U=D&&D.length,X=K({xAxis:O?y(y({},O),{},{ticks:U?D:O.ticks}):void 0,width:h,height:p,offset:m},!!U||P);(0,i.Z)(Array.isArray(X),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(u(X),"]")),Array.isArray(X)&&(G=X)}return r.createElement("g",{className:"recharts-cartesian-grid"},r.createElement(j,{fill:f.fill,fillOpacity:f.fillOpacity,x:f.x,y:f.y,width:f.width,height:f.height,ry:f.ry}),r.createElement(A,g({},f,{offset:m,horizontalPoints:E,xAxis:O,yAxis:T})),r.createElement(w,g({},f,{offset:m,verticalPoints:G,xAxis:O,yAxis:T})),r.createElement(L,g({},f,{horizontalPoints:E})),r.createElement(S,g({},f,{verticalPoints:G})))}C.displayName="CartesianGrid"},78560:function(e,t,a){"use strict";a.d(t,{G:function(){return c}});var r=a(71572),n=a(1510),o=a(25556),i=a(3131),s=a(18043),l=a(69524),c=(0,r.z)({chartName:"ScatterChart",GraphicalChild:n.b,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:o.K},{axisType:"yAxis",AxisComp:i.B},{axisType:"zAxis",AxisComp:s.d}],formatAxisMap:l.t9})},70204:function(e,t,a){"use strict";a.d(t,{y:function(){return i}});var r=a(52322),n=a(63098),o=a(48944);let i={type:"code",component:function(){return(0,r.jsx)(n.G,{h:350,data:o.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",pointLabels:"x"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.op,language:"tsx",fileName:"data.ts"}]}}},function(e){e.O(0,[61177,5248,90160,1510,66748,61639,89882,92888,49774,40179],function(){return e(e.s=82493)}),_N_E=e.O()}]);