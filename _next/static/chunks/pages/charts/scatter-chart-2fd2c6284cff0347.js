(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63902],{82493:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/scatter-chart",function(){return a(18574)}])},18574:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var r=a(52322),n=a(45392),o=a(89882),i=a(63098),s=a(48944);let l={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3400]},valueFormatter:{x:e=>`${e} years`,y:e=>`$${new Intl.NumberFormat("en-US").format(e)}`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",className:"m_f09a294f"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",strokeDasharray:"15 15"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3500]},unit:{y:"$"},labels:{x:"Age",y:"Spending"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",labels:{x:"Age",y:"Body mass index"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var y=a(1198),g=a(8582);function b({payload:e}){return e?(0,r.jsx)(y.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:e.map(e=>(0,r.jsxs)(g.x,{fz:"sm",children:[e.name,": ",e.value]},e.name))}):null}let j={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipProps:{content:({payload:e})=>(0,r.jsx)(b,{payload:e})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},v={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withTooltip:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipAnimationDuration:200})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},w={type:"code",component:function(){return(0,r.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",scatterProps:{shape:(0,r.jsx)("circle",{r:3})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var L=a(25071),I=a(15019);let B=(0,L.A)(I.us.ScatterChart);function O(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{data:o.j}),"\n",(0,r.jsx)(t.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,r.jsx)(a,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(t.p,{children:["To display chart legend, set ",(0,r.jsx)(t.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"legendProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,r.jsx)(a,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," and ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,r.jsx)(a,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(t.p,{children:["To format values in the tooltip and axis ticks, use ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value or an\nobject with ",(0,r.jsx)(t.code,{children:"x"})," and ",(0,r.jsx)(t.code,{children:"y"})," keys to format x and y values separately:"]}),"\n",(0,r.jsx)(a,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"--chart-grid-color"})," and ",(0,r.jsx)(t.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,r.jsx)(t.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,r.jsx)(a,{data:u}),"\n",(0,r.jsxs)(t.p,{children:["If your application has only one color scheme, you can use ",(0,r.jsx)(t.code,{children:"gridColor"})," and ",(0,r.jsx)(t.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { ScatterChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <ScatterChart\n      h={350}\n      data={data}\n      dataKey={{ x: 'age', y: 'BMI' }}\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,r.jsx)(t.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,r.jsx)(a,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"unit"})," prop to render a unit label next to the axis ticks and tooltip values:"]}),"\n",(0,r.jsx)(a,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-labels",children:"Tooltip labels"}),"\n",(0,r.jsxs)(t.p,{children:["To customize labels displayed in the tooltip, use ",(0,r.jsx)(t.code,{children:"labels"})," prop:"]}),"\n",(0,r.jsx)(a,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent:"]}),"\n",(0,r.jsx)(a,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["To remove tooltip, set ",(0,r.jsx)(t.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,r.jsx)(a,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,r.jsx)(t.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,r.jsx)(a,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,r.jsxs)(t.p,{children:["You can use any shape as a dot by passing props to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Scatter",children:"Scatter"}),"\ncomponent:"]}),"\n",(0,r.jsx)(a,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,r.jsx)(a,{data:S})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(B,{...e,children:(0,r.jsx)(O,{...e})})}},55484:function(e,t,a){"use strict";a.d(t,{q:function(){return j}});var r=a(2784),n=a(61049),o=a.n(n),i=a(15027),s=a(79376),l=["x1","y1","x2","y2","key"],c=["offset"];function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach(function(t){g(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,a){return(t=b(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==d(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(g,e);var t,a,n,u=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=y(g);return e=t?Reflect.construct(a,arguments,y(this).constructor):a.apply(this,arguments),function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function g(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,g),u.apply(this,arguments)}return a=[{key:"renderHorizontal",value:function(e){var t=this,a=this.props,n=a.x,o=a.width,i=a.horizontal;if(!e||!e.length)return null;var s=e.map(function(e,a){var r=x(x({},t.props),{},{x1:n,y1:e,x2:n+o,y2:e,key:"line-".concat(a),index:a});return g.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}},{key:"renderVertical",value:function(e){var t=this,a=this.props,n=a.y,o=a.height,i=a.vertical;if(!e||!e.length)return null;var s=e.map(function(e,a){var r=x(x({},t.props),{},{x1:e,y1:n,x2:e,y2:n+o,key:"line-".concat(a),index:a});return g.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}},{key:"renderVerticalStripes",value:function(e){var t=this.props.verticalFill;if(!t||!t.length)return null;var a=this.props,n=a.fillOpacity,o=a.x,i=a.y,s=a.width,l=a.height,c=e.map(function(e){return Math.round(e+o-o)}).sort(function(e,t){return e-t});o!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:o+s-e;if(d<=0)return null;var h=a%t.length;return r.createElement("rect",{key:"react-".concat(a),x:e,y:i,width:d,height:l,stroke:"none",fill:t[h],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}},{key:"renderHorizontalStripes",value:function(e){var t=this.props.horizontalFill;if(!t||!t.length)return null;var a=this.props,n=a.fillOpacity,o=a.x,i=a.y,s=a.width,l=a.height,c=e.map(function(e){return Math.round(e+i-i)}).sort(function(e,t){return e-t});i!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:i+l-e;if(d<=0)return null;var h=a%t.length;return r.createElement("rect",{key:"react-".concat(a),y:e,x:o,height:d,width:s,stroke:"none",fill:t[h],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var t=this.props,a=t.fillOpacity,n=t.x,o=t.y,i=t.width,s=t.height;return r.createElement("rect",{x:n,y:o,width:i,height:s,stroke:"none",fill:e,fillOpacity:a,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.width,s=e.height,l=e.horizontal,c=e.vertical,d=e.horizontalCoordinatesGenerator,h=e.verticalCoordinatesGenerator,p=e.xAxis,u=e.yAxis,m=e.offset,f=e.chartWidth,y=e.chartHeight,g=e.syncWithTicks,b=e.horizontalValues,j=e.verticalValues;if(!(0,i.hj)(n)||n<=0||!(0,i.hj)(s)||s<=0||!(0,i.hj)(t)||t!==+t||!(0,i.hj)(a)||a!==+a)return null;var v=this.props,A=v.horizontalPoints,w=v.verticalPoints;if((!A||!A.length)&&o()(d)){var S=b&&b.length;A=d({yAxis:u?x(x({},u),{},{ticks:S?b:u.ticks}):void 0,width:f,height:y,offset:m},!!S||g)}if((!w||!w.length)&&o()(h)){var L=j&&j.length;w=h({xAxis:p?x(x({},p),{},{ticks:L?j:p.ticks}):void 0,width:f,height:y,offset:m},!!L||g)}return r.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),l&&this.renderHorizontal(A),c&&this.renderVertical(w),l&&this.renderHorizontalStripes(A),c&&this.renderVerticalStripes(w))}}],n=[{key:"renderLineItem",value:function(e,t){var a;if(r.isValidElement(e))a=r.cloneElement(e,t);else if(o()(e))a=e(t);else{var n=t.x1,i=t.y1,d=t.x2,u=t.y2,x=t.key,m=p(t,l),f=(0,s.L6)(m),y=(f.offset,p(f,c));a=r.createElement("line",h({},y,{x1:n,y1:i,x2:d,y2:u,fill:"none",key:x}))}return a}}],a&&m(g.prototype,a),n&&m(g,n),Object.defineProperty(g,"prototype",{writable:!1}),g}(r.PureComponent);g(j,"displayName","CartesianGrid"),g(j,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},25556:function(e,t,a){"use strict";a.d(t,{K:function(){return r}});var r=function(){return null};r.displayName="XAxis",r.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,t,a){"use strict";a.d(t,{B:function(){return r}});var r=function(){return null};r.displayName="YAxis",r.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}}},function(e){e.O(0,[61177,16717,78560,66748,11340,89882,92888,49774,40179],function(){return e(e.s=82493)}),_N_E=e.O()}]);