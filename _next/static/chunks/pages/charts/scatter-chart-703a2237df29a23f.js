(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63902],{82493:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/scatter-chart",function(){return t(18574)}])},18574:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return S}});var n=t(52322),o=t(45392),r=t(89882),i=t(63098),s=t(48944);let l={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.bI,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0,legendProps:{verticalAlign:"bottom",height:20}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.KX,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},dataKey:{x:"age",y:"BMI"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3400]},valueFormatter:{x:e=>`${e} years`,y:e=>`$${new Intl.NumberFormat("en-US").format(e)}`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",className:"m_f09a294f"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",strokeDasharray:"15 15"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.Vl,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3500]},unit:{y:"$"},labels:{x:"Age",y:"Spending"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.mA,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",labels:{x:"Age",y:"Body mass index"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var y=t(1198),I=t(8582);function B({payload:e}){return e?(0,n.jsx)(y.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:e.map(e=>(0,n.jsxs)(I.x,{fz:"sm",children:[e.name,": ",e.value]},e.name))}):null}let M={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipProps:{content:({payload:e})=>(0,n.jsx)(B,{payload:e})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withTooltip:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},_={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipAnimationDuration:200})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},v={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",scatterProps:{shape:(0,n.jsx)("circle",{r:3})}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},j={type:"code",component:function(){return(0,n.jsx)(i.G,{h:350,data:s.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",referenceLines:[{y:14,label:"Underweight ↓",color:"red.7"},{y:19,label:"Normal weight",color:"teal.7"},{y:30,label:"Overweight ↑",color:"red.7"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var A=t(25071),b=t(15019);let L=(0,A.A)(b.us.ScatterChart);function C(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:r.j}),"\n",(0,n.jsx)(a.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,n.jsx)(t,{data:l}),"\n",(0,n.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,n.jsxs)(a.p,{children:["To display chart legend, set ",(0,n.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,n.jsx)(t,{data:d}),"\n",(0,n.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,n.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,n.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,n.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"xAxisProps"})," and ",(0,n.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,n.jsx)(t,{data:c}),"\n",(0,n.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,n.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,n.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value or an\nobject with ",(0,n.jsx)(a.code,{children:"x"})," and ",(0,n.jsx)(a.code,{children:"y"})," keys to format x and y values separately:"]}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,n.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,n.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,n.jsx)(a.code,{children:"gridColor"})," and ",(0,n.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { ScatterChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <ScatterChart\n      h={350}\n      data={data}\n      dataKey={{ x: 'age', y: 'BMI' }}\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,n.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the axis ticks and tooltip values:"]}),"\n",(0,n.jsx)(t,{data:x}),"\n",(0,n.jsx)(a.h2,{id:"tooltip-labels",children:"Tooltip labels"}),"\n",(0,n.jsxs)(a.p,{children:["To customize labels displayed in the tooltip, use ",(0,n.jsx)(a.code,{children:"labels"})," prop:"]}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent:"]}),"\n",(0,n.jsx)(t,{data:M}),"\n",(0,n.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,n.jsxs)(a.p,{children:["To remove tooltip, set ",(0,n.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,n.jsx)(t,{data:f}),"\n",(0,n.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,n.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,n.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,n.jsx)(t,{data:_}),"\n",(0,n.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,n.jsxs)(a.p,{children:["You can use any shape as a dot by passing props to recharts ",(0,n.jsx)(a.a,{href:"https://recharts.org/en-US/api/Scatter",children:"Scatter"}),"\ncomponent:"]}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,n.jsx)(t,{data:j})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(L,{...e,children:(0,n.jsx)(C,{...e})})}},25556:function(e,a,t){"use strict";t.d(a,{K:function(){return n}});var n=function(){return null};n.displayName="XAxis",n.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,a,t){"use strict";t.d(a,{B:function(){return n}});var n=function(){return null};n.displayName="YAxis",n.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},89882:function(e,a,t){"use strict";t.d(a,{j:function(){return i}});var n=t(52322),o=t(63098),r=t(48944);let i={type:"code",component:function(){return(0,n.jsx)(o.G,{h:350,data:r.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r.op,language:"tsx",fileName:"data.ts"}]}},48944:function(e,a,t){"use strict";t.d(a,{KX:function(){return i},Vl:function(){return r},aT:function(){return n},bI:function(){return o},mA:function(){return l},op:function(){return s}});let n=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]}],o=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]},{color:"red.5",name:"Group 2",data:[{age:26,BMI:21},{age:31,BMI:24},{age:37,BMI:19},{age:42,BMI:27},{age:29,BMI:32},{age:35,BMI:18},{age:40,BMI:23},{age:45,BMI:30},{age:27,BMI:15},{age:33,BMI:20},{age:38,BMI:25},{age:43,BMI:29},{age:30,BMI:16},{age:36,BMI:22},{age:41,BMI:28},{age:46,BMI:33},{age:28,BMI:17},{age:34,BMI:22},{age:39,BMI:26},{age:44,BMI:31},{age:32,BMI:18},{age:38,BMI:23},{age:43,BMI:28},{age:48,BMI:35},{age:25,BMI:14},{age:31,BMI:20},{age:36,BMI:25},{age:41,BMI:30},{age:29,BMI:16}]}],r=[{color:"cyan",name:"Average monthly spending",data:[{age:25,average_monthly_spending:1400},{age:30,average_monthly_spending:2100},{age:35,average_monthly_spending:1800},{age:40,average_monthly_spending:2400},{age:45,average_monthly_spending:2300},{age:28,average_monthly_spending:1600},{age:22,average_monthly_spending:1200},{age:50,average_monthly_spending:3200},{age:32,average_monthly_spending:1900},{age:48,average_monthly_spending:2700},{age:26,average_monthly_spending:1700},{age:38,average_monthly_spending:2200},{age:42,average_monthly_spending:2600},{age:29,average_monthly_spending:1500},{age:34,average_monthly_spending:2e3},{age:44,average_monthly_spending:2500},{age:23,average_monthly_spending:1300},{age:37,average_monthly_spending:2100},{age:49,average_monthly_spending:2900},{age:27,average_monthly_spending:1600},{age:41,average_monthly_spending:2500},{age:31,average_monthly_spending:1800},{age:46,average_monthly_spending:2700},{age:24,average_monthly_spending:1400},{age:33,average_monthly_spending:2100},{age:39,average_monthly_spending:2400},{age:47,average_monthly_spending:2800},{age:36,average_monthly_spending:2200},{age:43,average_monthly_spending:2600},{age:21,average_monthly_spending:1100}]}],i=`
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
];`},46293:function(e,a,t){"use strict";t.d(a,{Q:function(){return m}});var n=t(52322),o=t(82027),r=t(38483),i=t(46690),s=t(27009),l=t(28559),d=t(64438),g={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let c={},m=(0,o.d)((e,a)=>{let t=(0,r.w)("ChartLegend",c,e),{classNames:o,className:m,style:h,styles:p,unstyled:x,vars:u,payload:y,onHighlight:I,legendPosition:B,mod:M,series:f,showColor:_,...v}=t,j=(0,i.y)({name:"ChartLegend",classes:g,props:t,className:m,style:h,classNames:o,styles:p,unstyled:x});if(!y)return null;let A=y.filter(e=>"none"!==e.color),b=(0,d.v)(f),L=A.map((e,a)=>(0,n.jsxs)("div",{...j("legendItem"),onMouseEnter:()=>I(e.dataKey),onMouseLeave:()=>I(null),"data-without-color":!1===_||void 0,children:[(0,n.jsx)(s.b,{color:e.color,size:12,...j("legendItemColor"),withShadow:!1}),(0,n.jsx)("p",{...j("legendItemName"),children:b[e.dataKey]||e.dataKey})]},a));return(0,n.jsx)(l.x,{ref:a,mod:[{position:B},M],...j("legend"),...v,children:L})});m.displayName="@mantine/charts/ChartLegend"},50425:function(e,a,t){"use strict";t.d(a,{h:function(){return u},X:function(){return h}});var n=t(52322),o=t(82027),r=t(38483),i=t(68755),s=t(46690),l=t(27009),d=t(13588),g=t(28559),c=t(64438),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,a){let t=e.filter(e=>"none"!==e.fill||!e.color);return a?t.filter(e=>e.name===a):t}function p(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let x={type:"area"},u=(0,o.d)((e,a)=>{let t=(0,r.w)("ChartTooltip",x,e),{classNames:o,className:u,style:y,styles:I,unstyled:B,vars:M,payload:f,label:_,unit:v,type:j,segmentId:A,mod:b,series:L,valueFormatter:C,...S}=t,w=(0,i.rZ)(),D=(0,s.y)({name:"ChartTooltip",classes:m,props:t,className:u,style:y,classNames:o,styles:I,unstyled:B});if(!f)return null;let N=h(f,A),K="scatter"===j?f[0]?.payload?.name:null,k=(0,c.v)(L),T=_||K,P=N.map(e=>(0,n.jsxs)("div",{"data-type":j,...D("tooltipItem"),children:[(0,n.jsxs)("div",{...D("tooltipItemBody"),children:[(0,n.jsx)(l.b,{color:(0,d.p)(e.color,w),size:12,...D("tooltipItemColor"),withShadow:!1}),(0,n.jsx)("div",{...D("tooltipItemName"),children:k[e.name]||e.name})]}),(0,n.jsxs)("div",{...D("tooltipItemData"),children:["function"==typeof C?C(p(e,j)):p(e,j),v||e.unit]})]},e.name));return(0,n.jsxs)(g.x,{...D("tooltip"),mod:[{type:j},b],ref:a,...S,children:[T&&(0,n.jsx)("div",{...D("tooltipLabel"),children:T}),(0,n.jsx)("div",{...D("tooltipBody"),children:P})]})});u.displayName="@mantine/charts/ChartTooltip"},63098:function(e,a,t){"use strict";t.d(a,{G:function(){return S}});var n=t(52322),o=t(2784),r=t(30840),i=t(1510),s=t(18205),l=t(78560),d=t(55484),g=t(25556),c=t(81224),m=t(3131),h=t(21154),p=t(55734),x=t(11200),u=t(13588),y=t(82027),I=t(38483),B=t(68755),M=t(51477),f=t(46690),_=t(28559),v=t(46293),j=t(50425),A=t(7064);function b(e,a){return e===a.x?"x":"y"}let L={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x"},C=(0,x.Z)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,u.p)(a,e):void 0,"--chart-grid-color":t?(0,u.p)(t,e):void 0}})),S=(0,y.d)((e,a)=>{let t=(0,I.w)("ScatterChart",L,e),{classNames:x,className:y,style:S,styles:w,unstyled:D,vars:N,referenceLines:K,dir:k,withLegend:T,withTooltip:P,withXAxis:G,withYAxis:U,xAxisProps:z,yAxisProps:X,orientation:F,scatterChartProps:E,legendProps:$,data:O,gridAxis:Y,tickLine:Z,strokeDasharray:R,gridProps:V,tooltipAnimationDuration:W,tooltipProps:Q,children:q,onMouseLeave:H,dataKey:J,textColor:ee,gridColor:ea,xAxisLabel:et,yAxisLabel:en,unit:eo,labels:er,valueFormatter:ei,scatterProps:es,...el}=t,ed=e=>"function"==typeof ei?ei:ei?.[e],eg=ed("x"),ec=ed("y"),em=(0,B.rZ)(),eh=O.map(e=>({...e,data:e.data.map(a=>({...a,name:e.name}))})),{resolvedClassNames:ep,resolvedStyles:ex}=(0,M.h)({classNames:x,styles:w,props:t}),eu=(0,f.y)({name:"ScatterChart",classes:A.Z,props:t,className:y,style:S,classNames:x,styles:w,unstyled:D,vars:N,varsResolver:C}),[ey,eI]=(0,o.useState)(null),eB=null!==ey,eM=K?.map((e,a)=>{let t=u.p(e.color,em);return n.jsx(r.d,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eu("referenceLine")},a)}),ef=eh.map((e,a)=>{let t=eB&&ey!==e.name;return(0,n.jsx)(i.b,{data:e.data,fill:(0,u.p)(e.color,em),isAnimationActive:!1,fillOpacity:t?.1:1,...es},a)});return(0,n.jsx)(_.x,{ref:a,...eu("root"),onMouseLeave:e=>{eI(null),H?.(e)},dir:k||"ltr",...el,children:(0,n.jsx)(s.h,{...eu("container"),children:(0,n.jsxs)(l.G,{margin:{bottom:et?30:void 0,left:en?10:void 0,right:en?5:void 0},...E,children:[(0,n.jsx)(d.q,{strokeDasharray:R,vertical:"y"===Y||"xy"===Y,horizontal:"x"===Y||"xy"===Y,...eu("grid"),...V}),(0,n.jsxs)(g.K,{type:"number",hide:!G,dataKey:J.x,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==Y&&("x"===Z||"xy"===Z))&&{stroke:"currentColor"},minTickGap:5,unit:eo?.x,tickFormatter:eg,...eu("axis"),...z,children:[et&&(0,n.jsx)(c._,{position:"insideBottom",offset:-20,fontSize:12,...eu("axisLabel"),children:et}),z?.children]}),(0,n.jsxs)(m.B,{type:"number",hide:!U,axisLine:!1,dataKey:J.y,tickLine:!!("none"!==Y&&("y"===Z||"xy"===Z))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:eo?.y,tickFormatter:ec,...eu("axis"),...X,children:[en&&(0,n.jsx)(c._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eu("axisLabel"),children:en}),X?.children]}),P&&(0,n.jsx)(h.u,{animationDuration:W,isAnimationActive:0!==W,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:R},content:({label:e,payload:a})=>(0,n.jsx)(j.h,{type:"scatter",label:e,payload:er?a?.map(e=>({...e,name:er[b(e.name,J)]||e.name,value:ed(b(e.name,J))?.(e.value)??e.value})):a?.map(e=>({...e,value:ed(b(e.name,J))?.(e.value)??e.value})),classNames:ep,styles:ex,series:O}),...Q}),T&&(0,n.jsx)(p.D,{verticalAlign:"top",content:e=>(0,n.jsx)(v.Q,{payload:e.payload?.map((e,a)=>({...e,dataKey:O[a].name})),onHighlight:eI,legendPosition:$?.verticalAlign||"top",classNames:ep,styles:ex,series:O}),height:44,...$}),eM,ef]})})})});S.displayName="@mantine/charts/ScatterChart",S.classes=A.Z},7064:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d"}},64438:function(e,a,t){"use strict";function n(e){return e?e.reduce((e,a)=>(e[a.name]=a.label,e),{}):{}}t.d(a,{v:function(){return n}})}},function(e){e.O(0,[61177,16717,41277,66748,11340,92888,49774,40179],function(){return e(e.s=82493)}),_N_E=e.O()}]);