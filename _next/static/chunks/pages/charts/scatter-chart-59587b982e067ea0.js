(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63902],{82493:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/scatter-chart",function(){return t(18574)}])},18574:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return S}});var n=t(52322),r=t(45392),o=t(89882),i=t(63098),s=t(48944);let l={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0,legendProps:{verticalAlign:"bottom",height:20}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},dataKey:{x:"age",y:"BMI"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3400]},valueFormatter:{x:e=>`${e} years`,y:e=>`$${new Intl.NumberFormat("en-US").format(e)}`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",className:"m_f09a294f"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",strokeDasharray:"15 15"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3500]},unit:{y:"$"},labels:{x:"Age",y:"Spending"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]},y={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",labels:{x:"Age",y:"Body mass index"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var x=t(1198),f=t(8582);function I({payload:e}){return e?(0,n.jsx)(x.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:e.map(e=>(0,n.jsxs)(f.x,{fz:"sm",children:[e.name,": ",e.value]},e.name))}):null}let B={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipProps:{content:({payload:e})=>(0,n.jsx)(I,{payload:e})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},M={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withTooltip:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},v={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipAnimationDuration:200})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},b={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",scatterProps:{shape:(0,n.jsx)("circle",{r:3})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},_={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",referenceLines:[{y:14,label:"Underweight ↓",color:"red.7"},{y:19,label:"Normal weight",color:"teal.7"},{y:30,label:"Overweight ↑",color:"red.7"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var j=t(25071),A=t(15019);let w=(0,j.A)(A.us.ScatterChart);function L(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:o.j}),"\n",(0,n.jsx)(a.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,n.jsx)(t,{data:l}),"\n",(0,n.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,n.jsxs)(a.p,{children:["To display chart legend, set ",(0,n.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,n.jsx)(t,{data:c}),"\n",(0,n.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,n.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,n.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,n.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,n.jsx)(t,{data:d}),"\n",(0,n.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"xAxisProps"})," and ",(0,n.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,n.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,n.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value or an\nobject with ",(0,n.jsx)(a.code,{children:"x"})," and ",(0,n.jsx)(a.code,{children:"y"})," keys to format x and y values separately:"]}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,n.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,n.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,n.jsx)(a.code,{children:"gridColor"})," and ",(0,n.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { ScatterChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <ScatterChart\n      h={350}\n      data={data}\n      dataKey={{ x: 'age', y: 'BMI' }}\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,n.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the axis ticks and tooltip values:"]}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(a.h2,{id:"tooltip-labels",children:"Tooltip labels"}),"\n",(0,n.jsxs)(a.p,{children:["To customize labels displayed in the tooltip, use ",(0,n.jsx)(a.code,{children:"labels"})," prop:"]}),"\n",(0,n.jsx)(t,{data:y}),"\n",(0,n.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent:"]}),"\n",(0,n.jsx)(t,{data:B}),"\n",(0,n.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,n.jsxs)(a.p,{children:["To remove tooltip, set ",(0,n.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,n.jsx)(t,{data:M}),"\n",(0,n.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,n.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,n.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,n.jsxs)(a.p,{children:["You can use any shape as a dot by passing props to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/Scatter",children:"Scatter"}),"\ncomponent:"]}),"\n",(0,n.jsx)(t,{data:b}),"\n",(0,n.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,n.jsx)(t,{data:_})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(w,{...e,children:(0,n.jsx)(L,{...e})})}},55484:function(e,a,t){"use strict";t.d(a,{q:function(){return B}});var n=t(2784),r=t(61049),o=t.n(r),i=t(15027),s=t(79376),l=["x1","y1","x2","y2","key"],c=["offset"];function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach(function(a){f(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function u(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,I(n.key),n)}}function y(e,a){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e})(e,a)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,a,t){return(a=I(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function I(e){var a=function(e,a){if("object"!==d(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!==d(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"===d(a)?a:String(a)}var B=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&y(e,a)}(f,e);var a,t,r,p=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=x(f);return e=a?Reflect.construct(t,arguments,x(this).constructor):t.apply(this,arguments),function(e,a){if(a&&("object"===d(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(){return!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,f),p.apply(this,arguments)}return t=[{key:"renderHorizontal",value:function(e){var a=this,t=this.props,r=t.x,o=t.width,i=t.horizontal;if(!e||!e.length)return null;var s=e.map(function(e,t){var n=m(m({},a.props),{},{x1:r,y1:e,x2:r+o,y2:e,key:"line-".concat(t),index:t});return f.renderLineItem(i,n)});return n.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}},{key:"renderVertical",value:function(e){var a=this,t=this.props,r=t.y,o=t.height,i=t.vertical;if(!e||!e.length)return null;var s=e.map(function(e,t){var n=m(m({},a.props),{},{x1:e,y1:r,x2:e,y2:r+o,key:"line-".concat(t),index:t});return f.renderLineItem(i,n)});return n.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}},{key:"renderVerticalStripes",value:function(e){var a=this.props.verticalFill;if(!a||!a.length)return null;var t=this.props,r=t.fillOpacity,o=t.x,i=t.y,s=t.width,l=t.height,c=e.map(function(e){return Math.round(e+o-o)}).sort(function(e,a){return e-a});o!==c[0]&&c.unshift(0);var d=c.map(function(e,t){var d=c[t+1]?c[t+1]-e:o+s-e;if(d<=0)return null;var g=t%a.length;return n.createElement("rect",{key:"react-".concat(t),x:e,y:i,width:d,height:l,stroke:"none",fill:a[g],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return n.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}},{key:"renderHorizontalStripes",value:function(e){var a=this.props.horizontalFill;if(!a||!a.length)return null;var t=this.props,r=t.fillOpacity,o=t.x,i=t.y,s=t.width,l=t.height,c=e.map(function(e){return Math.round(e+i-i)}).sort(function(e,a){return e-a});i!==c[0]&&c.unshift(0);var d=c.map(function(e,t){var d=c[t+1]?c[t+1]-e:i+l-e;if(d<=0)return null;var g=t%a.length;return n.createElement("rect",{key:"react-".concat(t),y:e,x:o,height:d,width:s,stroke:"none",fill:a[g],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return n.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var a=this.props,t=a.fillOpacity,r=a.x,o=a.y,i=a.width,s=a.height;return n.createElement("rect",{x:r,y:o,width:i,height:s,stroke:"none",fill:e,fillOpacity:t,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,a=e.x,t=e.y,r=e.width,s=e.height,l=e.horizontal,c=e.vertical,d=e.horizontalCoordinatesGenerator,g=e.verticalCoordinatesGenerator,h=e.xAxis,p=e.yAxis,u=e.offset,y=e.chartWidth,x=e.chartHeight,f=e.syncWithTicks,I=e.horizontalValues,B=e.verticalValues;if(!(0,i.hj)(r)||r<=0||!(0,i.hj)(s)||s<=0||!(0,i.hj)(a)||a!==+a||!(0,i.hj)(t)||t!==+t)return null;var M=this.props,v=M.horizontalPoints,b=M.verticalPoints;if((!v||!v.length)&&o()(d)){var _=I&&I.length;v=d({yAxis:p?m(m({},p),{},{ticks:_?I:p.ticks}):void 0,width:y,height:x,offset:u},!!_||f)}if((!b||!b.length)&&o()(g)){var j=B&&B.length;b=g({xAxis:h?m(m({},h),{},{ticks:j?B:h.ticks}):void 0,width:y,height:x,offset:u},!!j||f)}return n.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),l&&this.renderHorizontal(v),c&&this.renderVertical(b),l&&this.renderHorizontalStripes(v),c&&this.renderVerticalStripes(b))}}],r=[{key:"renderLineItem",value:function(e,a){var t;if(n.isValidElement(e))t=n.cloneElement(e,a);else if(o()(e))t=e(a);else{var r=a.x1,i=a.y1,d=a.x2,p=a.y2,m=a.key,u=h(a,l),y=(0,s.L6)(u),x=(y.offset,h(y,c));t=n.createElement("line",g({},x,{x1:r,y1:i,x2:d,y2:p,fill:"none",key:m}))}return t}}],t&&u(f.prototype,t),r&&u(f,r),Object.defineProperty(f,"prototype",{writable:!1}),f}(n.PureComponent);f(B,"displayName","CartesianGrid"),f(B,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},25556:function(e,a,t){"use strict";t.d(a,{K:function(){return n}});var n=function(){return null};n.displayName="XAxis",n.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,a,t){"use strict";t.d(a,{B:function(){return n}});var n=function(){return null};n.displayName="YAxis",n.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},89882:function(e,a,t){"use strict";t.d(a,{j:function(){return i}});var n=t(52322),r=t(63098),o=t(48944);let i={type:"code",component:function(){return(0,n.jsx)(r.G,{h:350,data:o.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.op,language:"tsx",fileName:"data.ts"}]}},48944:function(e,a,t){"use strict";t.d(a,{KX:function(){return i},Vl:function(){return o},aT:function(){return n},bI:function(){return r},mA:function(){return l},op:function(){return s}});let n=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]}],r=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]},{color:"red.5",name:"Group 2",data:[{age:26,BMI:21},{age:31,BMI:24},{age:37,BMI:19},{age:42,BMI:27},{age:29,BMI:32},{age:35,BMI:18},{age:40,BMI:23},{age:45,BMI:30},{age:27,BMI:15},{age:33,BMI:20},{age:38,BMI:25},{age:43,BMI:29},{age:30,BMI:16},{age:36,BMI:22},{age:41,BMI:28},{age:46,BMI:33},{age:28,BMI:17},{age:34,BMI:22},{age:39,BMI:26},{age:44,BMI:31},{age:32,BMI:18},{age:38,BMI:23},{age:43,BMI:28},{age:48,BMI:35},{age:25,BMI:14},{age:31,BMI:20},{age:36,BMI:25},{age:41,BMI:30},{age:29,BMI:16}]}],o=[{color:"cyan",name:"Average monthly spending",data:[{age:25,average_monthly_spending:1400},{age:30,average_monthly_spending:2100},{age:35,average_monthly_spending:1800},{age:40,average_monthly_spending:2400},{age:45,average_monthly_spending:2300},{age:28,average_monthly_spending:1600},{age:22,average_monthly_spending:1200},{age:50,average_monthly_spending:3200},{age:32,average_monthly_spending:1900},{age:48,average_monthly_spending:2700},{age:26,average_monthly_spending:1700},{age:38,average_monthly_spending:2200},{age:42,average_monthly_spending:2600},{age:29,average_monthly_spending:1500},{age:34,average_monthly_spending:2e3},{age:44,average_monthly_spending:2500},{age:23,average_monthly_spending:1300},{age:37,average_monthly_spending:2100},{age:49,average_monthly_spending:2900},{age:27,average_monthly_spending:1600},{age:41,average_monthly_spending:2500},{age:31,average_monthly_spending:1800},{age:46,average_monthly_spending:2700},{age:24,average_monthly_spending:1400},{age:33,average_monthly_spending:2100},{age:39,average_monthly_spending:2400},{age:47,average_monthly_spending:2800},{age:36,average_monthly_spending:2200},{age:43,average_monthly_spending:2600},{age:21,average_monthly_spending:1100}]}],i=`
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
  {
    color: 'red.5',
    name: 'Group 2',
    data: [
      { age: 26, BMI: 21 },
      { age: 31, BMI: 24 },
      { age: 37, BMI: 19 },
      { age: 42, BMI: 27 },
      { age: 29, BMI: 32 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 23 },
      { age: 45, BMI: 30 },
      { age: 27, BMI: 15 },
      { age: 33, BMI: 20 },
      { age: 38, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 30, BMI: 16 },
      { age: 36, BMI: 22 },
      { age: 41, BMI: 28 },
      { age: 46, BMI: 33 },
      { age: 28, BMI: 17 },
      { age: 34, BMI: 22 },
      { age: 39, BMI: 26 },
      { age: 44, BMI: 31 },
      { age: 32, BMI: 18 },
      { age: 38, BMI: 23 },
      { age: 43, BMI: 28 },
      { age: 48, BMI: 35 },
      { age: 25, BMI: 14 },
      { age: 31, BMI: 20 },
      { age: 36, BMI: 25 },
      { age: 41, BMI: 30 },
      { age: 29, BMI: 16 },
    ],
  },
];
`,s=`export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];`,l=`export const spendingsData = [
  {
    color: 'cyan',
    name: 'Average monthly spending',
    data: [
      { age: 25, average_monthly_spending: 1400 },
      { age: 30, average_monthly_spending: 2100 },
      { age: 35, average_monthly_spending: 1800 },
      { age: 40, average_monthly_spending: 2400 },
      { age: 45, average_monthly_spending: 2300 },
      { age: 28, average_monthly_spending: 1600 },
      { age: 22, average_monthly_spending: 1200 },
      { age: 50, average_monthly_spending: 3200 },
      { age: 32, average_monthly_spending: 1900 },
      { age: 48, average_monthly_spending: 2700 },
      { age: 26, average_monthly_spending: 1700 },
      { age: 38, average_monthly_spending: 2200 },
      { age: 42, average_monthly_spending: 2600 },
      { age: 29, average_monthly_spending: 1500 },
      { age: 34, average_monthly_spending: 2000 },
      { age: 44, average_monthly_spending: 2500 },
      { age: 23, average_monthly_spending: 1300 },
      { age: 37, average_monthly_spending: 2100 },
      { age: 49, average_monthly_spending: 2900 },
      { age: 27, average_monthly_spending: 1600 },
      { age: 41, average_monthly_spending: 2500 },
      { age: 31, average_monthly_spending: 1800 },
      { age: 46, average_monthly_spending: 2700 },
      { age: 24, average_monthly_spending: 1400 },
      { age: 33, average_monthly_spending: 2100 },
      { age: 39, average_monthly_spending: 2400 },
      { age: 47, average_monthly_spending: 2800 },
      { age: 36, average_monthly_spending: 2200 },
      { age: 43, average_monthly_spending: 2600 },
      { age: 21, average_monthly_spending: 1100 },
    ],
  },
];`},46293:function(e,a,t){"use strict";t.d(a,{Q:function(){return h}});var n=t(52322),r=t(82027),o=t(38483),i=t(46690),s=t(27009),l=t(28559),c=t(64438),d={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let g={},h=(0,r.d)((e,a)=>{let t=(0,o.w)("ChartLegend",g,e),{classNames:r,className:h,style:p,styles:m,unstyled:u,vars:y,payload:x,onHighlight:f,legendPosition:I,mod:B,series:M,showColor:v,centered:b,..._}=t,j=(0,i.y)({name:"ChartLegend",classes:d,props:t,className:h,style:p,classNames:r,styles:m,unstyled:u});if(!x)return null;let A=x.filter(e=>"none"!==e.color),w=(0,c.v)(M),L=A.map((e,a)=>(0,n.jsxs)("div",{...j("legendItem"),onMouseEnter:()=>f(e.dataKey),onMouseLeave:()=>f(null),"data-without-color":!1===v||void 0,children:[(0,n.jsx)(s.b,{color:e.color,size:12,...j("legendItemColor"),withShadow:!1}),(0,n.jsx)("p",{...j("legendItemName"),children:w[e.dataKey]||e.dataKey})]},a));return(0,n.jsx)(l.x,{ref:a,mod:[{position:I,centered:b},B],...j("legend"),..._,children:L})});h.displayName="@mantine/charts/ChartLegend"},50425:function(e,a,t){"use strict";t.d(a,{h:function(){return y},X:function(){return p}});var n=t(52322),r=t(82027),o=t(38483),i=t(68755),s=t(46690),l=t(27009),c=t(13588),d=t(28559),g=t(64438),h={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function p(e,a){let t=e.filter(e=>"none"!==e.fill||!e.color);return a?t.filter(e=>e.name===a):t}function m(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let u={type:"area",showColor:!0},y=(0,r.d)((e,a)=>{let t=(0,o.w)("ChartTooltip",u,e),{classNames:r,className:y,style:x,styles:f,unstyled:I,vars:B,payload:M,label:v,unit:b,type:_,segmentId:j,mod:A,series:w,valueFormatter:L,showColor:S,...C}=t,k=(0,i.rZ)(),N=(0,s.y)({name:"ChartTooltip",classes:h,props:t,className:y,style:x,classNames:r,styles:f,unstyled:I});if(!M)return null;let D=p(M,j),P="scatter"===_?M[0]?.payload?.name:null,O=(0,g.v)(w),K=v||P,T=D.map(e=>(0,n.jsxs)("div",{"data-type":_,...N("tooltipItem"),children:[(0,n.jsxs)("div",{...N("tooltipItemBody"),children:[S&&(0,n.jsx)(l.b,{color:(0,c.p)(e.color,k),size:12,...N("tooltipItemColor"),withShadow:!1}),(0,n.jsx)("div",{...N("tooltipItemName"),children:O[e.name]||e.name})]}),(0,n.jsxs)("div",{...N("tooltipItemData"),children:["function"==typeof L?L(m(e,_)):m(e,_),b||e.unit]})]},e.name));return(0,n.jsxs)(d.x,{...N("tooltip"),mod:[{type:_},A],ref:a,...C,children:[K&&(0,n.jsx)("div",{...N("tooltipLabel"),children:K}),(0,n.jsx)("div",{...N("tooltipBody"),children:T})]})});y.displayName="@mantine/charts/ChartTooltip"},63098:function(e,a,t){"use strict";t.d(a,{G:function(){return S}});var n=t(52322),r=t(2784),o=t(30840),i=t(1510),s=t(18205),l=t(78560),c=t(55484),d=t(25556),g=t(81224),h=t(3131),p=t(21154),m=t(55734),u=t(11200),y=t(13588),x=t(82027),f=t(38483),I=t(68755),B=t(51477),M=t(46690),v=t(28559),b=t(46293),_=t(50425),j=t(7064);function A(e,a){return e===a.x?"x":"y"}let w={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x"},L=(0,u.Z)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,y.p)(a,e):void 0,"--chart-grid-color":t?(0,y.p)(t,e):void 0}})),S=(0,x.d)((e,a)=>{let t=(0,f.w)("ScatterChart",w,e),{classNames:u,className:x,style:S,styles:C,unstyled:k,vars:N,referenceLines:D,dir:P,withLegend:O,withTooltip:K,withXAxis:T,withYAxis:z,xAxisProps:E,yAxisProps:G,orientation:F,scatterChartProps:U,legendProps:X,data:V,gridAxis:R,tickLine:$,strokeDasharray:Y,gridProps:H,tooltipAnimationDuration:W,tooltipProps:Z,children:q,onMouseLeave:Q,dataKey:J,textColor:ee,gridColor:ea,xAxisLabel:et,yAxisLabel:en,unit:er,labels:eo,valueFormatter:ei,scatterProps:es,...el}=t,ec=e=>"function"==typeof ei?ei:ei?.[e],ed=ec("x"),eg=ec("y"),eh=(0,I.rZ)(),ep=V.map(e=>({...e,data:e.data.map(a=>({...a,name:e.name}))})),{resolvedClassNames:em,resolvedStyles:eu}=(0,B.h)({classNames:u,styles:C,props:t}),ey=(0,M.y)({name:"ScatterChart",classes:j.Z,props:t,className:x,style:S,classNames:u,styles:C,unstyled:k,vars:N,varsResolver:L}),[ex,ef]=(0,r.useState)(null),eI=null!==ex,eB=D?.map((e,a)=>{let t=y.p(e.color,eh);return n.jsx(o.d,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ey("referenceLine")},a)}),eM=ep.map((e,a)=>{let t=eI&&ex!==e.name;return(0,n.jsx)(i.b,{data:e.data,fill:(0,y.p)(e.color,eh),isAnimationActive:!1,fillOpacity:t?.1:1,...es},a)});return(0,n.jsx)(v.x,{ref:a,...ey("root"),onMouseLeave:e=>{ef(null),Q?.(e)},dir:P||"ltr",...el,children:(0,n.jsx)(s.h,{...ey("container"),children:(0,n.jsxs)(l.G,{margin:{bottom:et?30:void 0,left:en?10:void 0,right:en?5:void 0},...U,children:[(0,n.jsx)(c.q,{strokeDasharray:Y,vertical:"y"===R||"xy"===R,horizontal:"x"===R||"xy"===R,...ey("grid"),...H}),(0,n.jsxs)(d.K,{type:"number",hide:!T,dataKey:J.x,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==R&&("x"===$||"xy"===$))&&{stroke:"currentColor"},minTickGap:5,unit:er?.x,tickFormatter:ed,...ey("axis"),...E,children:[et&&(0,n.jsx)(g._,{position:"insideBottom",offset:-20,fontSize:12,...ey("axisLabel"),children:et}),E?.children]}),(0,n.jsxs)(h.B,{type:"number",hide:!z,axisLine:!1,dataKey:J.y,tickLine:!!("none"!==R&&("y"===$||"xy"===$))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:er?.y,tickFormatter:eg,...ey("axis"),...G,children:[en&&(0,n.jsx)(g._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ey("axisLabel"),children:en}),G?.children]}),K&&(0,n.jsx)(p.u,{animationDuration:W,isAnimationActive:0!==W,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Y},content:({label:e,payload:a})=>(0,n.jsx)(_.h,{type:"scatter",label:e,payload:eo?a?.map(e=>({...e,name:eo[A(e.name,J)]||e.name,value:ec(A(e.name,J))?.(e.value)??e.value})):a?.map(e=>({...e,value:ec(A(e.name,J))?.(e.value)??e.value})),classNames:em,styles:eu,series:V}),...Z}),O&&(0,n.jsx)(m.D,{verticalAlign:"top",content:e=>(0,n.jsx)(b.Q,{payload:e.payload?.map((e,a)=>({...e,dataKey:V[a].name})),onHighlight:ef,legendPosition:X?.verticalAlign||"top",classNames:em,styles:eu,series:V}),height:44,...X}),eB,eM]})})})});S.displayName="@mantine/charts/ScatterChart",S.classes=j.Z},7064:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(e,a,t){"use strict";function n(e){return e?e.reduce((e,a)=>(e[a.name]=a.label,e),{}):{}}t.d(a,{v:function(){return n}})}},function(e){e.O(0,[61177,16717,78560,66748,11340,92888,49774,40179],function(){return e(e.s=82493)}),_N_E=e.O()}]);