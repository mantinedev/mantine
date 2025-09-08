(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56635],{24531:(e,a,t)=>{"use strict";t.d(a,{AQ:()=>d,EJ:()=>p,d8:()=>m,dX:()=>l,kD:()=>i,kZ:()=>r,p:()=>o,sC:()=>s,t3:()=>c,v1:()=>n});let o=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],r=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
`,n=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],i=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 80,
  },
  {
    date: 'Mar 25',
    Apples: null,
  },
  {
    date: 'Mar 26',
    Apples: null,
  },
  {
    date: 'Mar 27',
    Apples: 40,
  },
  {
    date: 'Mar 28',
    Apples: 120,
  },
  {
    date: 'Mar 29',
    Apples: 80,
  },
];
`,s=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],l=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
`,d=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],c=`
export const data = [
  { date: 'Jan', temperature: -25 },
  { date: 'Feb', temperature: -10 },
  { date: 'Mar', temperature: 5 },
  { date: 'Apr', temperature: 15 },
  { date: 'May', temperature: 30 },
  { date: 'Jun', temperature: 15 },
  { date: 'Jul', temperature: 30 },
  { date: 'Aug', temperature: 40 },
  { date: 'Sep', temperature: 15 },
  { date: 'Oct', temperature: 20 },
  { date: 'Nov', temperature: 0 },
  { date: 'Dec', temperature: -10 },
];
`,m=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],p=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},30649:(e,a,t)=>{"use strict";t.d(a,{D:()=>i});var o=t(6029),r=t(39522),n=t(24531);let i={type:"code",component:function(){return(0,o.jsx)(r.b,{h:300,data:n.AQ,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      series={[{ name: 'temperature', label: 'Avg. Temperature' }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: 0, color: 'red.6' },
        { offset: 20, color: 'orange.6' },
        { offset: 40, color: 'yellow.5' },
        { offset: 70, color: 'lime.5' },
        { offset: 80, color: 'cyan.5' },
        { offset: 100, color: 'blue.5' },
      ]}
      strokeWidth={5}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => \`\${value}\xb0C\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.t3,language:"tsx",fileName:"data.ts"}]}},32846:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>B});var o=t(6029),r=t(16285),n=t(39522),i=t(24531);let s={type:"configurator",component:function(e){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var l=t(30649),d=t(38018);let c={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
        { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
        { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},p={type:"configurator",component:function(e){return(0,o.jsx)(n.b,{h:300,data:i.v1,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kD,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]};var h=t(60378);let u={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.sC,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.dX,language:"tsx",fileName:"data.ts"}]};var y=t(82713);let b={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},j={type:"configurator",component:function(e){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]};var A={root:"m_91e7a08d"};let v={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",className:A.root,series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--line-color)' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --line-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --line-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},C={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      strokeDasharray="15 15"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var L={root:"m_8fdc5499"};let k={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",className:L.root,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
import { LineChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},T={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},D={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      unit="$"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var N=t(5086),w=t(45208);function P({label:e,payload:a}){return a?(0,o.jsxs)(N.t,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,o.jsx)(w.E,{fw:500,mb:5,children:e}),a.map(e=>(0,o.jsxs)(w.E,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let K={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,o.jsx)(P,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  label: React.ReactNode;
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},O={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withTooltip={false}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},M={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},S={type:"configurator",component:function(e){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},I={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.E,{mb:"md",pl:"md",children:"Apples sales:"}),(0,o.jsx)(n.b,{h:180,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),(0,o.jsx)(w.E,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,o.jsx)(n.b,{h:180,data:i.p,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <LineChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        lineChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <LineChart
        h={180}
        data={data}
        dataKey="date"
        lineChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'teal.6' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},_={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      orientation="vertical"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},Y={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 2 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6', strokeDasharray: '5 5' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},Z={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.sC,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 40, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out' },
      ]}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.dX,language:"tsx",fileName:"data.ts"}]};var V=t(88140);let W={type:"code",component:function(){return(0,o.jsx)(n.b,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,o.jsx)(V.T,{x1:"Mar 23",x2:"Mar 25",y1:1200,y2:3200,yAxisId:"left",fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend sales target",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
import { ReferenceArea } from 'recharts';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={1200}
        y2={3200}
        yAxisId="left"
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend sales target',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </LineChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var F=t(38547),U=t(5262);let R=(0,F.P)(U.XZ.LineChart);function E(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:s}),"\n",(0,o.jsx)(a.h2,{id:"gradient-type",children:"Gradient type"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'type="gradient"'})," to render a line chart with gradient fill. To customize\ngradient colors, use ",(0,o.jsx)(a.code,{children:"gradientStops"})," prop. It accepts an array of objects with\n",(0,o.jsx)(a.code,{children:"offset"})," and ",(0,o.jsx)(a.code,{children:"color"})," properties. ",(0,o.jsx)(a.code,{children:"offset"})," is a number between 0 and 100 that\ndefines the position of the color in the gradient, ",(0,o.jsx)(a.code,{children:"color"})," is a reference to ",(0,o.jsx)(a.code,{children:"theme.colors"}),"\nor any valid CSS color."]}),"\n",(0,o.jsx)(t,{data:l.D}),"\n",(0,o.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,o.jsxs)(a.p,{children:["To display chart legend, set ",(0,o.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,o.jsx)(t,{data:d.o}),"\n",(0,o.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(a.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,o.jsxs)(a.p,{children:["By default, series ",(0,o.jsx)(a.code,{children:"name"})," is used as a label. To change it, set ",(0,o.jsx)(a.code,{children:"label"}),"\nproperty in ",(0,o.jsx)(a.code,{children:"series"})," object:"]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(a.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,o.jsx)(a.code,{children:"connectNulls"})," is ",(0,o.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(a.h2,{id:"points-labels",children:"Points labels"}),"\n",(0,o.jsxs)(a.p,{children:["To display labels on data points, set ",(0,o.jsx)(a.code,{children:"withPointLabels"}),":"]}),"\n",(0,o.jsx)(t,{data:h.k}),"\n",(0,o.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," and ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(a.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisLabel"})," and ",(0,o.jsx)(a.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,o.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(a.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,o.jsxs)(a.p,{children:["To display additional Y axis on the right side of the chart, set ",(0,o.jsx)(a.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\n",(0,o.jsx)(a.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,o.jsx)(a.code,{children:"yAxisId"})," in the ",(0,o.jsx)(a.code,{children:"series"})," object."]}),"\n",(0,o.jsx)(t,{data:y.H}),"\n",(0,o.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,o.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(a.h2,{id:"line-color",children:"Line color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(a.h2,{id:"change-line-color-depending-on-color-scheme",children:"Change line color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof line that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:v}),"\n",(0,o.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,o.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { LineChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <LineChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,o.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,o.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,o.jsx)(t,{data:T}),"\n",(0,o.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,o.jsx)(t,{data:D}),"\n",(0,o.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,o.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,o.jsx)(t,{data:K}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,o.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,o.jsx)(t,{data:M}),"\n",(0,o.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all lines:"]}),"\n",(0,o.jsx)(t,{data:S}),"\n",(0,o.jsx)(a.h2,{id:"sync-multiple-linecharts",children:"Sync multiple LineCharts"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/LineChart",children:"LineChart"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"lineChartProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"lineChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,o.jsx)(a.code,{children:"LineChart"})," components with the same ",(0,o.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,o.jsx)(t,{data:I}),"\n",(0,o.jsx)(a.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'orientation="vertical"'})," to render a vertical line chart:"]}),"\n",(0,o.jsx)(t,{data:_}),"\n",(0,o.jsx)(a.h2,{id:"dashed-line-line",children:"Dashed line line"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,o.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,o.jsx)(t,{data:Y}),"\n",(0,o.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,o.jsx)(t,{data:Z}),"\n",(0,o.jsx)(a.h2,{id:"reference-area",children:"Reference area"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"ReferenceArea"})," component from recharts to display a reference area:"]}),"\n",(0,o.jsx)(t,{data:W})]})}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(R,{...e,children:(0,o.jsx)(E,{...e})})}},38018:(e,a,t)=>{"use strict";t.d(a,{o:()=>i});var o=t(6029),r=t(39522),n=t(24531);let i={type:"code",component:function(){return(0,o.jsx)(r.b,{h:300,data:n.p,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.kZ,language:"tsx",fileName:"data.ts"}]}},38969:(e,a,t)=>{"use strict";function o(e){return e?e.reduce((e,a)=>{let t=a.name.search(/\./);return t>=0?e[a.name.substring(t+1)]=a.label:e[a.name]=a.label,e},{}):{}}t.d(a,{J:()=>o})},39522:(e,a,t)=>{"use strict";t.d(a,{b:()=>O});var o=t(6029),r=t(55729),n=t(96402),i=t(93463),s=t(40684),l=t(32716),d=t(2893),c=t(47122),m=t(83687),p=(0,l.gu)({chartName:"LineChart",GraphicalChild:n.N,axisComponents:[{axisType:"xAxis",AxisComp:d.W},{axisType:"yAxis",AxisComp:c.h}],formatAxisMap:m.pr}),h=t(64370),u=t(35555),x=t(8454),g=t(31292),f=t(33987),y=t(21351),b=t(8411),j=t(38919),A=t(49643),v=t(38757),C=t(15583),L=t(76320),k=t(2011),T=t(48101),D=t(42738),N=t(52345),w=t(58486);let P={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},K=(0,f.V)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,y.r)(a,e):void 0,"--chart-grid-color":t?(0,y.r)(t,e):void 0}})),O=(0,b.P9)((e,a)=>{let t=(0,j.Y)("LineChart",P,e),{classNames:l,className:m,style:f,styles:b,unstyled:O,vars:M,data:S,withLegend:I,legendProps:_,series:Y,onMouseLeave:Z,dataKey:V,withTooltip:W,withXAxis:F,withYAxis:U,gridAxis:R,tickLine:E,xAxisProps:B,yAxisProps:z,unit:J,tooltipAnimationDuration:X,strokeDasharray:$,gridProps:G,tooltipProps:H,referenceLines:q,withDots:Q,dotProps:ee,activeDotProps:ea,strokeWidth:et,lineChartProps:eo,connectNulls:er,fillOpacity:en,curveType:ei,orientation:es,dir:el,valueFormatter:ed,children:ec,lineProps:em,xAxisLabel:ep,yAxisLabel:eh,type:eu,gradientStops:ex,withRightYAxis:eg,rightYAxisLabel:ef,rightYAxisProps:ey,withPointLabels:eb,attributes:ej,gridColor:eA,...ev}=t,eC=(0,A.xd)(),[eL,ek]=(0,r.useState)(null),eT=null!==eL,{resolvedClassNames:eD,resolvedStyles:eN}=(0,v.Y)({classNames:l,styles:b,props:t}),ew=(0,C.I)({name:"LineChart",classes:w.A,props:t,className:m,style:f,classNames:l,styles:b,unstyled:O,attributes:ej,vars:M,varsResolver:K}),eP=(0,k.B)(),eK=`line-chart-gradient-${eP}`,eO=ex?.map(e=>(0,o.jsx)("stop",{offset:`${e.offset}%`,stopColor:(0,y.r)(e.color,eC)},e.color)),eM=Y.map(e=>{let a=(0,y.r)(e.color,eC),t=eT&&eL!==e.name;return(0,r.createElement)(n.N,{...ew("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!Q&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:"gradient"===eu?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eu?"white":a,...ee},activeDot:!!Q&&{fill:"gradient"===eu?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eu?"white":a,...ea},fill:a,stroke:"gradient"===eu?`url(#${eK})`:a,strokeWidth:et,isAnimationActive:!1,fillOpacity:t?0:en,strokeOpacity:t?.5:en,connectNulls:er,type:ei,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:eb?(0,o.jsx)(N.x,{valueFormatter:ed}):void 0,..."function"==typeof em?em(e):em})}),eS=q?.map((e,a)=>{let t=(0,y.r)(e.color,eC);return(0,o.jsx)(i.e,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ew("referenceLine")},a)}),eI={axisLine:!1,..."vertical"===es?{dataKey:V,type:"category"}:{type:"number"},tickLine:"none"!==R&&("y"===E||"xy"===E)&&{stroke:"currentColor"},allowDecimals:!0,unit:J,tickFormatter:"vertical"===es?void 0:ed,...ew("axis")};return(0,o.jsx)(L.a,{ref:a,...ew("root"),onMouseLeave:e=>{ek(null),Z?.(e)},dir:el||"ltr",...ev,children:(0,o.jsx)(s.u,{...ew("container"),children:(0,o.jsxs)(p,{data:S,layout:es,margin:{bottom:ep?30:void 0,left:eh?10:void 0,right:eh?5:void 0},...eo,children:["gradient"===eu&&(0,o.jsx)("defs",{children:(0,o.jsx)("linearGradient",{id:eK,x1:"0",y1:"0",x2:"0",y2:"1",children:eO})}),I&&(0,o.jsx)(h.s,{verticalAlign:"top",content:e=>(0,o.jsx)(T._,{payload:e.payload,onHighlight:ek,legendPosition:_?.verticalAlign||"top",classNames:eD,styles:eN,series:Y,showColor:"gradient"!==eu,attributes:ej}),..._}),(0,o.jsxs)(d.W,{hide:!F,..."vertical"===es?{type:"number"}:{dataKey:V},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==R&&("x"===E||"xy"===E)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===es?ed:void 0,...ew("axis"),...B,children:[ep&&(0,o.jsx)(u.J,{position:"insideBottom",offset:-20,fontSize:12,...ew("axisLabel"),children:ep}),B?.children]}),(0,o.jsxs)(c.h,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!U,...eI,...z,children:[eh&&(0,o.jsx)(u.J,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ew("axisLabel"),children:eh}),z?.children]}),(0,o.jsxs)(c.h,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eg,...eI,...ey,children:[ef&&(0,o.jsx)(u.J,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...ew("axisLabel"),children:ef}),z?.children]}),(0,o.jsx)(x.d,{strokeDasharray:$,vertical:"y"===R||"xy"===R,horizontal:"x"===R||"xy"===R,...ew("grid"),...G}),W&&(0,o.jsx)(g.m,{animationDuration:X,isAnimationActive:0!==X,position:"vertical"===es?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:$},content:({label:e,payload:a})=>(0,o.jsx)(D.I,{label:e,payload:a,unit:J,classNames:eD,styles:eN,series:Y,valueFormatter:ed,showColor:"gradient"!==eu,attributes:ej}),...H}),eM,eS,ec]})})})});O.displayName="@mantine/charts/LineChart",O.classes=w.A},42738:(e,a,t)=>{"use strict";t.d(a,{I:()=>x,r:()=>p});var o=t(6029),r=t(8411),n=t(38919),i=t(49643),s=t(15583),l=t(21351),d=t(76320),c=t(38969),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function p(e,a){let t=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let a=e.name.search(/\./);if(a>=0){let t=e.name.substring(0,a),o={...e.payload[t]},r=Object.entries(e.payload).reduce((e,a)=>{let[o,r]=a;return o===t?e:{...e,[o]:r}},{});return{...e,name:e.name.substring(a+1),payload:{...r,...o}}}return e});return a?t.filter(e=>e.name===a):t}function h(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let u={type:"area",showColor:!0},x=(0,r.P9)((e,a)=>{let t=(0,n.Y)("ChartTooltip",u,e),{classNames:r,className:x,style:g,styles:f,unstyled:y,vars:b,payload:j,label:A,unit:v,type:C,segmentId:L,mod:k,series:T,valueFormatter:D,showColor:N,attributes:w,...P}=t,K=(0,i.xd)(),O=(0,s.I)({name:"ChartTooltip",classes:m,props:t,className:x,style:g,classNames:r,styles:f,unstyled:y,attributes:w});if(!j)return null;let M=p(j,L),S="scatter"===C?j[0]?.payload?.name:null,I=(0,c.J)(T),_=A||S,Y=M.map(e=>(0,o.jsxs)("div",{"data-type":C,...O("tooltipItem"),children:[(0,o.jsxs)("div",{...O("tooltipItemBody"),children:[N&&(0,o.jsx)("svg",{...O("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,l.r)(e.color,K),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...O("tooltipItemName"),children:I[e.name]||e.name})]}),(0,o.jsxs)("div",{...O("tooltipItemData"),children:["function"==typeof D?D(h(e,C)):h(e,C),v||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(d.a,{...O("tooltip"),mod:[{type:C},k],ref:a,...P,children:[_&&(0,o.jsx)("div",{...O("tooltipLabel"),children:_}),(0,o.jsx)("div",{...O("tooltipBody"),children:Y})]})});x.displayName="@mantine/charts/ChartTooltip"},48101:(e,a,t)=>{"use strict";t.d(a,{_:()=>m});var o=t(6029),r=t(8411),n=t(38919),i=t(15583),s=t(11508),l=t(76320),d=t(38969),c={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let m=(0,r.P9)((e,a)=>{let t=(0,n.Y)("ChartLegend",null,e),{classNames:r,className:m,style:p,styles:h,unstyled:u,vars:x,payload:g,onHighlight:f,legendPosition:y,mod:b,series:j,showColor:A,centered:v,attributes:C,...L}=t,k=(0,i.I)({name:"ChartLegend",classes:c,props:t,className:m,style:p,classNames:r,styles:h,unstyled:u,attributes:C});if(!g)return null;let T=g.filter(e=>"none"!==e.color).map(e=>{let a=e.dataKey?.split(".").pop();return{...e,dataKey:a,payload:{...e.payload,name:a,dataKey:a}}}),D=(0,d.J)(j),N=T.map((e,a)=>(0,o.jsxs)("div",{...k("legendItem"),onMouseEnter:()=>f(e.dataKey),onMouseLeave:()=>f(null),"data-without-color":!1===A||void 0,children:[(0,o.jsx)(s.q,{color:e.color,size:12,...k("legendItemColor"),withShadow:!1}),(0,o.jsx)("p",{...k("legendItemName"),children:D[e.dataKey]||e.dataKey})]},a));return(0,o.jsx)(l.a,{ref:a,mod:[{position:y,centered:v},b],...k("legend"),...L,children:N})});m.displayName="@mantine/charts/ChartLegend"},52345:(e,a,t)=>{"use strict";t.d(a,{x:()=>r});var o=t(6029);function r({x:e,y:a,value:t,valueFormatter:r}){return(0,o.jsx)("g",{transform:`translate(${e},${a})`,children:(0,o.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:r?r(t):t})})}},58486:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});var o={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},60378:(e,a,t)=>{"use strict";t.d(a,{k:()=>i});var o=t(6029),r=t(39522),n=t(24531);let i={type:"code",component:function(){return(0,o.jsx)(r.b,{h:300,data:n.p,dataKey:"date",withLegend:!0,withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      withPointLabels
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.kZ,language:"tsx",fileName:"data.ts"}]}},70713:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/line-chart",function(){return t(32846)}])},82713:(e,a,t)=>{"use strict";t.d(a,{H:()=>i});var o=t(6029),r=t(39522),n=t(24531);let i={type:"code",component:function(){return(0,o.jsx)(r.b,{h:300,data:n.d8,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.EJ,language:"tsx",fileName:"data.ts"}]}}},e=>{e.O(0,[29040,60454,99949,38547,90636,46593,38792],()=>e(e.s=70713)),_N_E=e.O()}]);