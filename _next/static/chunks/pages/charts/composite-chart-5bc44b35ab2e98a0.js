(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78882],{56754:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/composite-chart",function(){return t(51418)}])},51418:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Y}});var o=t(52322),r=t(45392),n=t(74352),s=t(80628);let i={type:"configurator",component:function(e){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},l={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",withLegend:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},maxBarWidth:30,series:[{name:"Tomatoes",label:"Tomatoes sales",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",label:"Apples sales",color:"red.8",type:"line"},{name:"Oranges",label:"Oranges sales",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      maxBarWidth={30}
      series={[
        {
          name: 'Tomatoes',
          label: 'Tomatoes sales',
          color: 'rgba(18, 120, 255, 0.2)',
          type: 'bar',
        },
        { name: 'Apples', label: 'Apples sales', color: 'red.8', type: 'line' },
        { name: 'Oranges', label: 'Oranges sales', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",withPointLabels:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withPointLabels
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},y={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.DR,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6",type:"line"},{name:"pv",color:"cyan.6",yAxisId:"right",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6', type: 'line' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.ZW,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",tickLine:"xy",xAxisProps:{angle:-20},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      xAxisProps={{ angle: -20 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},b={type:"configurator",component:function(e){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",type:"line",color:e.color}],...e})},code:[{code:e=>`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', type: 'line', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},j={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",className:"m_f98102e0",series:[{name:"Apples",color:"var(--chart-color)",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--chart-color)', type: 'line' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:s.op,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",strokeDasharray:"15 15",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeDasharray="15 15"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},v={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",className:"m_300a99a6",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},C={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",tooltipAnimationDuration:200,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipAnimationDuration={200}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var T=t(36830),D=t(1198),w=t(8582),k=t(20754);function N({label:e,payload:a}){return a?(0,o.jsxs)(D.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,o.jsx)(w.x,{fw:500,mb:5,children:e}),a.map(e=>(0,o.jsxs)(w.x,{c:(0,k.F)(e.color,1),fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let P={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,o.jsx)(N,{label:e,payload:a})},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { alpha, Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  label: string;
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
        <Text key={item.name} c={alpha(item.color, 1)} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},K={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",withTooltip:!1,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withTooltip={false}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},B={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},O={type:"configurator",component:function(e){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},L={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.x,{mb:"md",pl:"md",children:"Apples sales:"}),(0,o.jsx)(n.D,{h:180,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6",type:"area"}],composedChartProps:{syncId:"groceries"}}),(0,o.jsx)(w.x,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,o.jsx)(n.D,{h:180,data:s.aT,dataKey:"date",composedChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"cyan.6",type:"bar"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
        composedChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        composedChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'cyan.6', type: 'bar' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},W={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line",strokeDasharray:"5 5"},{name:"Oranges",color:"yellow.8",type:"area",strokeDasharray:"5 5"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeWidth={1}
      dotProps={{ r: 2 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line', strokeDasharray: '5 5' },
        { name: 'Oranges', color: 'yellow.8', type: 'area', strokeDasharray: '5 5' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},S={type:"code",component:function(){return(0,o.jsx)(n.D,{h:300,data:s.aT,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:1200,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out",color:"blue.7"}],maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 1200, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out', color: 'blue.7' },
      ]}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var I=t(25071),M=t(15019);let _=(0,I.A)(M.us.CompositeChart);function z(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"CompositeChart"})," allows using ",(0,o.jsx)(a.code,{children:"Line"}),", ",(0,o.jsx)(a.code,{children:"Area"})," and ",(0,o.jsx)(a.code,{children:"Bar"})," charts together in a single\nchart:"]}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,o.jsxs)(a.p,{children:["To display chart legend, set ",(0,o.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,o.jsxs)(a.p,{children:["By default, series ",(0,o.jsx)(a.code,{children:"name"})," is used as a label. To change it, set ",(0,o.jsx)(a.code,{children:"label"}),"\nproperty in ",(0,o.jsx)(a.code,{children:"series"})," object:"]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(a.h2,{id:"points-labels",children:"Points labels"}),"\n",(0,o.jsxs)(a.p,{children:["To display labels on data points, set ",(0,o.jsx)(a.code,{children:"withPointLabels"}),". This feature is supported\nonly for ",(0,o.jsx)(a.code,{children:"Line"})," and ",(0,o.jsx)(a.code,{children:"Area"})," charts:"]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," and ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(a.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisLabel"})," and ",(0,o.jsx)(a.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,o.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(a.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,o.jsxs)(a.p,{children:["To display additional Y axis on the right side of the chart, set ",(0,o.jsx)(a.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\n",(0,o.jsx)(a.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,o.jsx)(a.code,{children:"yAxisId"})," in the ",(0,o.jsx)(a.code,{children:"series"})," object."]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(a.h2,{id:"rotate-x-axis-labels",children:"Rotate x-axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["To rotate x-axis labels, set ",(0,o.jsx)(a.code,{children:"xAxisProps.angle"})," to a number of degrees to rotate:"]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,o.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(a.h2,{id:"chart-color",children:"Chart color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(a.h2,{id:"change-chart-color-depending-on-color-scheme",children:"Change chart color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof chart that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,o.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,o.jsx)(t,{data:A}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:v}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { CompositeChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <CompositeChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      type=\"stacked\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6', type: 'line' },\n        { name: 'Oranges', color: 'blue.6', type: 'bar' },\n        { name: 'Tomatoes', color: 'teal.6', type: 'area' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,o.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,o.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,o.jsx)(t,{data:T.b}),"\n",(0,o.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,o.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,o.jsx)(t,{data:P}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:K}),"\n",(0,o.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,o.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all areas/lines:"]}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(a.h2,{id:"sync-multiple-charts",children:"Sync multiple charts"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/ComposedChart",children:"ComposedChart"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"composedChartProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"composedChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,o.jsx)(a.code,{children:"CompositeChart"})," components with the same ",(0,o.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,o.jsx)(t,{data:L}),"\n",(0,o.jsx)(a.h2,{id:"dashed-lines",children:"Dashed lines"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,o.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,o.jsx)(t,{data:W}),"\n",(0,o.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,o.jsx)(t,{data:S})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(_,{...e,children:(0,o.jsx)(z,{...e})})}},80739:function(e,a,t){"use strict";t.d(a,{v:function(){return l}});var o=t(12624),r=t(171),n=t(25556),s=t(3131),i=t(69524),l=(0,o.z)({chartName:"BarChart",GraphicalChild:r.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:n.K},{axisType:"yAxis",AxisComp:s.B}],formatAxisMap:i.t9})},36830:function(e,a,t){"use strict";t.d(a,{b:function(){return s}});var o=t(52322),r=t(74352),n=t(80628);let s={type:"code",component:function(){return(0,o.jsx)(r.D,{h:300,data:n.aT,dataKey:"date",unit:"$",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      unit="$"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},80628:function(e,a,t){"use strict";t.d(a,{DR:function(){return n},Mm:function(){return l},ZW:function(){return s},aT:function(){return o},op:function(){return r},xo:function(){return i}});let o=[{date:"Mar 22",Apples:2301,Oranges:723,Tomatoes:2452},{date:"Mar 23",Apples:2181,Oranges:1887,Tomatoes:2402},{date:"Mar 24",Apples:1821,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:2764,Oranges:987,Tomatoes:2809},{date:"Mar 26",Apples:1821,Oranges:403,Tomatoes:2290}],r=`
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
`,n=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],s=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`,i=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],l=`
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
`},8132:function(e,a,t){"use strict";t.d(a,{B:function(){return K},v:function(){return B}});var o=t(52322),r=t(2784),n=t(171),s=t(11011),i=t(30840),l=t(18205),d=t(80739),c=t(55734),p=t(25556),m=t(81224),h=t(3131),x=t(55484),y=t(21154),u=t(11200),f=t(13588),g=t(82027),b=t(38483),j=t(68755),A=t(51477),v=t(46690),C=t(28559),T=t(46293),D=t(50425),w=t(7064);function k(e){return`${(100*e).toFixed(0)}%`}let N={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},P=(0,u.Z)((e,{textColor:a,gridColor:t,cursorFill:o})=>({root:{"--chart-text-color":a?(0,f.p)(a,e):void 0,"--chart-grid-color":t?(0,f.p)(t,e):void 0,"--chart-cursor-fill":o?(0,f.p)(o,e):void 0}}));function K({value:e,valueFormatter:a,textBreakAll:t,parentViewBox:r,...n}){return(0,o.jsx)("text",{...n,dy:-10,fontSize:12,fill:"var(--chart-text-color, var(--mantine-color-dimmed))",textAnchor:"center",children:"function"==typeof a?a(e):e})}let B=(0,g.d5)((e,a)=>{let t,u;let g=(0,b.w)("BarChart",N,e),{classNames:B,className:O,style:L,styles:W,unstyled:S,vars:I,data:M,withLegend:_,legendProps:z,series:Y,onMouseLeave:F,dataKey:U,withTooltip:E,withXAxis:V,withYAxis:R,gridAxis:Z,tickLine:X,xAxisProps:$,yAxisProps:G,unit:q,tooltipAnimationDuration:Q,strokeDasharray:H,gridProps:J,tooltipProps:ee,referenceLines:ea,fillOpacity:et,barChartProps:eo,type:er,orientation:en,dir:es,valueFormatter:ei,children:el,barProps:ed,xAxisLabel:ec,yAxisLabel:ep,withBarValueLabel:em,withRightYAxis:eh,rightYAxisLabel:ex,rightYAxisProps:ey,minBarSize:eu,maxBarWidth:ef,...eg}=g,eb=(0,j.rZ)(),[ej,eA]=(0,r.useState)(null),ev=null!==ej,eC="stacked"===er||"percent"===er,{resolvedClassNames:eT,resolvedStyles:eD}=(0,A.h)({classNames:B,styles:W,props:g}),ew="waterfall"===er?(t=0,u=0,M.map(e=>{if(e.standalone)for(let a in e)"number"==typeof e[a]&&a!==U&&(e[a]=[0,e[a]]);else for(let a in e)"number"==typeof e[a]&&a!==U&&(u+=e[a],e[a]=[t,u],t=u);return e})):M,ek=(0,v.y)({name:"BarChart",classes:w.Z,props:g,className:O,style:L,classNames:B,styles:W,unstyled:S,vars:I,varsResolver:P}),eN=Y.map(e=>{let a=(0,f.p)(e.color,eb),t=ev&&ej!==e.name;return(0,r.createElement)(n.$,{...ek("bar"),key:e.name,name:e.name,dataKey:e.name,fill:a,stroke:a,isAnimationActive:!1,fillOpacity:t?.1:et,strokeOpacity:t?.2:0,stackId:eC?"stack":e.stackId||void 0,label:em?(0,o.jsx)(K,{valueFormatter:ei}):void 0,yAxisId:e.yAxisId||"left",minPointSize:eu,..."function"==typeof ed?ed(e):ed},ew.map((e,t)=>(0,o.jsx)(s.b,{fill:e.color?(0,f.p)(e.color,eb):a},`cell-${t}`)))}),eP=ea?.map((e,a)=>{let t=f.p(e.color,eb);return o.jsx(i.d,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ek("referenceLine")},a)}),eK="percent"===er?k:ei,eB={axisLine:!1,..."vertical"===en?{dataKey:U,type:"category"}:{type:"number"},tickLine:!!("none"!==Z&&("y"===X||"xy"===X))&&{stroke:"currentColor"},allowDecimals:!0,unit:q,tickFormatter:"vertical"===en?void 0:eK,...ek("axis")};return(0,o.jsx)(C.x,{ref:a,...ek("root"),onMouseLeave:e=>{eA(null),F?.(e)},dir:es||"ltr",...eg,children:(0,o.jsx)(l.h,{...ek("container"),children:(0,o.jsxs)(d.v,{data:ew,stackOffset:"percent"===er?"expand":void 0,layout:en,maxBarSize:ef,margin:{bottom:ec?30:void 0,left:ep?10:void 0,right:ep?5:void 0},...eo,children:[_&&(0,o.jsx)(c.D,{verticalAlign:"top",content:e=>(0,o.jsx)(T.Q,{payload:e.payload,onHighlight:eA,legendPosition:z?.verticalAlign||"top",classNames:eT,styles:eD,series:Y,showColor:"waterfall"!==er}),...z}),(0,o.jsxs)(p.K,{hide:!V,..."vertical"===en?{type:"number"}:{dataKey:U},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==Z&&("x"===X||"xy"===X))&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===en?eK:void 0,...ek("axis"),...$,children:[ec&&(0,o.jsx)(m._,{position:"insideBottom",offset:-20,fontSize:12,...ek("axisLabel"),children:ec}),$?.children]}),(0,o.jsxs)(h.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!R,...eB,...G,children:[ep&&(0,o.jsx)(m._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:ep}),G?.children]}),(0,o.jsxs)(h.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eh,...eB,...ey,children:[ex&&(0,o.jsx)(m._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:ex}),G?.children]}),(0,o.jsx)(x.q,{strokeDasharray:H,vertical:"y"===Z||"xy"===Z,horizontal:"x"===Z||"xy"===Z,...ek("grid"),...J}),E&&(0,o.jsx)(y.u,{animationDuration:Q,isAnimationActive:0!==Q,position:"vertical"===en?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:H,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:a})=>(0,o.jsx)(D.h,{label:e,payload:a,type:"waterfall"===er?"scatter":void 0,unit:q,classNames:eT,styles:eD,series:Y,valueFormatter:ei}),...ee}),eN,eP,el]})})})});B.displayName="@mantine/charts/BarChart",B.classes=w.Z},46293:function(e,a,t){"use strict";t.d(a,{Q:function(){return m}});var o=t(52322),r=t(82027),n=t(38483),s=t(46690),i=t(27009),l=t(28559),d=t(64438),c={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let p={},m=(0,r.d5)((e,a)=>{let t=(0,n.w)("ChartLegend",p,e),{classNames:r,className:m,style:h,styles:x,unstyled:y,vars:u,payload:f,onHighlight:g,legendPosition:b,mod:j,series:A,showColor:v,centered:C,...T}=t,D=(0,s.y)({name:"ChartLegend",classes:c,props:t,className:m,style:h,classNames:r,styles:x,unstyled:y});if(!f)return null;let w=f.filter(e=>"none"!==e.color).map(e=>{let a=e.dataKey.split(".").pop();return{...e,dataKey:a,payload:{...e.payload,name:a,dataKey:a}}}),k=(0,d.v)(A),N=w.map((e,a)=>(0,o.jsxs)("div",{...D("legendItem"),onMouseEnter:()=>g(e.dataKey),onMouseLeave:()=>g(null),"data-without-color":!1===v||void 0,children:[(0,o.jsx)(i.b,{color:e.color,size:12,...D("legendItemColor"),withShadow:!1}),(0,o.jsx)("p",{...D("legendItemName"),children:k[e.dataKey]||e.dataKey})]},a));return(0,o.jsx)(l.x,{ref:a,mod:[{position:b,centered:C},j],...D("legend"),...T,children:N})});m.displayName="@mantine/charts/ChartLegend"},50425:function(e,a,t){"use strict";t.d(a,{h:function(){return u},X:function(){return h}});var o=t(52322),r=t(82027),n=t(38483),s=t(68755),i=t(46690),l=t(27009),d=t(13588),c=t(28559),p=t(64438),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,a){let t=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let a=e.name.search(/\./);if(a>=0){let t=e.name.substring(0,a),o={...e.payload[t]},r=Object.entries(e.payload).reduce((e,a)=>{let[o,r]=a;return o===t?e:{...e,[o]:r}},{});return{...e,name:e.name.substring(a+1),payload:{...r,...o}}}return e});return a?t.filter(e=>e.name===a):t}function x(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let y={type:"area",showColor:!0},u=(0,r.d5)((e,a)=>{let t=(0,n.w)("ChartTooltip",y,e),{classNames:r,className:u,style:f,styles:g,unstyled:b,vars:j,payload:A,label:v,unit:C,type:T,segmentId:D,mod:w,series:k,valueFormatter:N,showColor:P,...K}=t,B=(0,s.rZ)(),O=(0,i.y)({name:"ChartTooltip",classes:m,props:t,className:u,style:f,classNames:r,styles:g,unstyled:b});if(!A)return null;let L=h(A,D),W="scatter"===T?A[0]?.payload?.name:null,S=(0,p.v)(k),I=v||W,M=L.map(e=>(0,o.jsxs)("div",{"data-type":T,...O("tooltipItem"),children:[(0,o.jsxs)("div",{...O("tooltipItemBody"),children:[P&&(0,o.jsx)(l.b,{color:(0,d.p)(e.color,B),size:12,...O("tooltipItemColor"),withShadow:!1}),(0,o.jsx)("div",{...O("tooltipItemName"),children:S[e.name]||e.name})]}),(0,o.jsxs)("div",{...O("tooltipItemData"),children:["function"==typeof N?N(x(e,T)):x(e,T),C||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(c.x,{...O("tooltip"),mod:[{type:T},w],ref:a,...K,children:[I&&(0,o.jsx)("div",{...O("tooltipLabel"),children:I}),(0,o.jsx)("div",{...O("tooltipBody"),children:M})]})});u.displayName="@mantine/charts/ChartTooltip"},74352:function(e,a,t){"use strict";t.d(a,{D:function(){return I}});var o=t(52322),r=t(2784),n=t(63004),s=t(81073),i=t(171),l=t(30840),d=t(18205),c=t(12624),p=t(1510),m=t(25556),h=t(3131),x=t(18043),y=t(69524),u=(0,c.z)({chartName:"ComposedChart",GraphicalChild:[n.x,s.u,i.$,p.b],axisComponents:[{axisType:"xAxis",AxisComp:m.K},{axisType:"yAxis",AxisComp:h.B},{axisType:"zAxis",AxisComp:x.d}],formatAxisMap:y.t9}),f=t(55734),g=t(81224),b=t(55484),j=t(21154),A=t(11200),v=t(13588),C=t(82027),T=t(38483),D=t(68755),w=t(51477),k=t(46690),N=t(28559),P=t(8132),K=t(46293),B=t(50425),O=t(13069),L=t(7064);let W={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone"},S=(0,A.Z)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,v.p)(a,e):void 0,"--chart-grid-color":t?(0,v.p)(t,e):void 0}})),I=(0,C.d5)((e,a)=>{let t=(0,T.w)("CompositeChart",W,e),{classNames:c,className:p,style:x,styles:y,unstyled:A,vars:C,data:I,withLegend:M,legendProps:_,series:z,onMouseLeave:Y,dataKey:F,withTooltip:U,withXAxis:E,withYAxis:V,gridAxis:R,tickLine:Z,xAxisProps:X,yAxisProps:$,unit:G,tooltipAnimationDuration:q,strokeDasharray:Q,gridProps:H,tooltipProps:J,referenceLines:ee,withDots:ea,dotProps:et,activeDotProps:eo,strokeWidth:er,connectNulls:en,curveType:es,dir:ei,valueFormatter:el,children:ed,lineProps:ec,xAxisLabel:ep,yAxisLabel:em,withRightYAxis:eh,rightYAxisLabel:ex,rightYAxisProps:ey,withPointLabels:eu,areaProps:ef,barProps:eg,withBarValueLabel:eb,minBarSize:ej,maxBarWidth:eA,composedChartProps:ev,...eC}=t,eT=(0,D.rZ)(),[eD,ew]=(0,r.useState)(null),ek=null!==eD,{resolvedClassNames:eN,resolvedStyles:eP}=(0,w.h)({classNames:c,styles:y,props:t}),eK=(0,k.y)({name:"CompositeChart",classes:L.Z,props:t,className:p,style:x,classNames:c,styles:y,unstyled:A,vars:C,varsResolver:S}),eB=z.map(e=>{let a=(0,v.p)(e.color,eT),t=ek&&eD!==e.name;return"line"===e.type?(0,r.createElement)(n.x,{...eK("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!ea&&{fillOpacity:t?0:1,strokeOpacity:t?0:1,strokeWidth:1,fill:a,stroke:a,...et},activeDot:!!ea&&{fill:"var(--mantine-color-white)",stroke:a,...eo},fill:a,stroke:a,strokeWidth:er,isAnimationActive:!1,fillOpacity:t?0:1,strokeOpacity:t?.5:1,connectNulls:en,type:es,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:eu?(0,o.jsx)(O.S,{}):void 0,..."function"==typeof ec?ec(e):ec}):"area"===e.type?(0,o.jsx)(s.u,{...eK("area"),name:e.name,type:es,dataKey:e.name,fill:a,strokeWidth:er,stroke:a,isAnimationActive:!1,connectNulls:en,dot:!!ea&&{fillOpacity:t?0:1,strokeOpacity:t?0:1,strokeWidth:1,fill:a,stroke:a,...et},activeDot:!!ea&&{fill:eT.white,stroke:a,strokeWidth:2,r:4,...eo},fillOpacity:t?0:.2,strokeOpacity:t?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:eu?(0,o.jsx)(O.S,{}):void 0,..."function"==typeof ef?ef(e):ef}):"bar"===e.type?(0,r.createElement)(i.$,{...eK("bar"),key:e.name,name:e.name,dataKey:e.name,fill:a,stroke:a,isAnimationActive:!1,fillOpacity:t?.1:1,strokeOpacity:t?.2:0,label:eb?(0,o.jsx)(P.B,{valueFormatter:el}):void 0,yAxisId:e.yAxisId||"left",minPointSize:ej,..."function"==typeof eg?eg(e):eg}):null}),eO=ee?.map((e,a)=>{let t=v.p(e.color,eT);return o.jsx(l.d,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eK("referenceLine")},a)}),eL={axisLine:!1,type:"number",tickLine:!!("none"!==R&&("y"===Z||"xy"===Z))&&{stroke:"currentColor"},allowDecimals:!0,unit:G,tickFormatter:el,...eK("axis")};return(0,o.jsx)(N.x,{ref:a,...eK("root"),onMouseLeave:e=>{ew(null),Y?.(e)},dir:ei||"ltr",...eC,children:(0,o.jsx)(d.h,{...eK("container"),children:(0,o.jsxs)(u,{data:I,maxBarSize:eA,margin:{bottom:ep?30:void 0,left:em?10:void 0,right:em?5:void 0},...ev,children:[M&&(0,o.jsx)(f.D,{verticalAlign:"top",content:e=>(0,o.jsx)(K.Q,{payload:e.payload,onHighlight:ew,legendPosition:_?.verticalAlign||"top",classNames:eN,styles:eP,series:z}),..._}),(0,o.jsxs)(m.K,{hide:!E,dataKey:F,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==R&&("x"===Z||"xy"===Z))&&{stroke:"currentColor"},minTickGap:5,...eK("axis"),...X,children:[ep&&(0,o.jsx)(g._,{position:"insideBottom",offset:-20,fontSize:12,...eK("axisLabel"),children:ep}),X?.children]}),(0,o.jsxs)(h.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!V,...eL,...$,children:[em&&(0,o.jsx)(g._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eK("axisLabel"),children:em}),$?.children]}),(0,o.jsxs)(h.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eh,...eL,...ey,children:[ex&&(0,o.jsx)(g._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eK("axisLabel"),children:ex}),$?.children]}),(0,o.jsx)(b.q,{strokeDasharray:Q,vertical:"y"===R||"xy"===R,horizontal:"x"===R||"xy"===R,...eK("grid"),...H}),U&&(0,o.jsx)(j.u,{animationDuration:q,isAnimationActive:0!==q,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Q},content:({label:e,payload:a})=>(0,o.jsx)(B.h,{label:e,payload:a,unit:G,classNames:eN,styles:eP,series:z,valueFormatter:el}),...J}),eB,eO,ed]})})})});I.displayName="@mantine/charts/CompositeChart",I.classes=L.Z},13069:function(e,a,t){"use strict";t.d(a,{S:function(){return r}});var o=t(52322);function r({x:e,y:a,value:t}){return(0,o.jsx)("g",{transform:`translate(${e},${a})`,children:(0,o.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:t})})}},7064:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var o={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(e,a,t){"use strict";function o(e){return e?e.reduce((e,a)=>{let t=a.name.search(/\./);return t>=0?e[a.name.substring(t+1)]=a.label:e[a.name]=a.label,e},{}):{}}t.d(a,{v:function(){return o}})}},function(e){e.O(0,[61177,16717,49625,1510,91097,66748,11340,92888,49774,40179],function(){return e(e.s=56754)}),_N_E=e.O()}]);