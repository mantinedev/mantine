(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26418],{36399:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/area-chart",function(){return t(44766)}])},44766:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return G}});var o=t(52322),r=t(45392),n=t(24634),s=t(99803);let i={type:"configurator",component:function(e){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var l=t(84955);let c={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"percent",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="percent"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.n1,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="split"
      strokeWidth={1}
      dotProps={{ r: 2, strokeWidth: 1 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      series={[{ name: 'Apples', color: 'bright' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.zW,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.n1,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}],splitColors:["violet","orange"]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="split"
      strokeWidth={1}
      dotProps={{ r: 2, strokeWidth: 1 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      series={[{ name: 'Apples', color: 'bright' }]}
      splitColors={['violet', 'orange']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.zW,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      withLegend
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var u=t(94884);let f={type:"configurator",component:function(e){return(0,o.jsx)(n.T,{h:300,data:s.ux,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.$o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},x={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var g=t(81066);let y={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},b={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]},j={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.DR,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.ZW,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tickLine:"xy",xAxisProps:{angle:-20},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      tickLine="xy"
      xAxisProps={{ angle: -20 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var v=t(19055);let T={type:"configurator",component:function(e){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withGradient${!1===e.withGradient?"={false}":""}
      series={[{ name: 'Apples', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},k={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",className:"m_13521d26",series:[{name:"Apples",color:"var(--area-color)"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--area-color)' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --area-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --area-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:s.op,language:"tsx",fileName:"data.ts"}]},C={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      strokeDasharray="15 15"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},w={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",className:"m_3587e220",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
import { AreaChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      className={classes.root}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},O={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},D={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      unit="$"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var N=t(50425),P=t(1198),K=t(8582);function S({label:e,payload:a}){return a?(0,o.jsxs)(P.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,o.jsx)(K.x,{fw:500,mb:5,children:e}),(0,N.X)(a).map(e=>(0,o.jsxs)(K.x,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let V={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tooltipProps:{content:({label:e,payload:a})=>(0,o.jsx)(S,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart, getFilteredChartTooltipPayload } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
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
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},L={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      withTooltip={false}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},W={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},E={type:"configurator",component:function(e){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},Y={type:"configurator",component:function(e){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Tomatoes",color:"teal.6"},{name:"Oranges",color:"blue.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Tomatoes', color: 'teal.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"type",initialValue:"default",libraryValue:"default",transformLabel:!1,data:[{value:"default",label:"default"},{value:"stacked",label:"stacked"}]},{type:"number",prop:"fillOpacity",initialValue:.2,libraryValue:null,step:.01,min:0,max:1},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},_={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(K.x,{mb:"md",pl:"md",children:"Apples sales:"}),(0,o.jsx)(n.T,{h:180,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],areaChartProps:{syncId:"groceries"}}),(0,o.jsx)(K.x,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,o.jsx)(n.T,{h:180,data:s.aT,dataKey:"date",areaChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <AreaChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        areaChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <AreaChart
        h={180}
        data={data}
        dataKey="date"
        areaChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'teal.6' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},z={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      orientation="vertical"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},I={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      strokeWidth={1}
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},U={type:"code",component:function(){return(0,o.jsx)(n.T,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]};var F=t(25071),R=t(15019);let B=(0,F.A)(R.us.AreaChart);function M(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"AreaChart"})," component without ",(0,o.jsx)(a.code,{children:"type"})," prop to render a regular area chart.\nIn a regular area chart, each data series is plotted on its own and does\nnot interact with other series."]}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(a.h2,{id:"stacked-area-chart",children:"Stacked area chart"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'type="stacked"'})," to render a stacked area chart. In this type of area chart\nstacking is applied along the vertical axis, allowing you to see the overall trend\nas well as the contribution of each individual series to the total."]}),"\n",(0,o.jsx)(t,{data:l.A}),"\n",(0,o.jsx)(a.h2,{id:"percent-area-chart",children:"Percent area chart"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'type="percent"'})," to render a percent area chart. In this type of area chart\nthe y-axis scale is always normalized to 100%, making it easier to compare the\ncontribution of each series in terms of percentages."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(a.h2,{id:"split-area-chart",children:"Split area chart"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'type="split"'})," to render a split area chart. In this type of area chart\nfill color is split into two colors, one for positive values and one for negative\nvalues. Split area chart supports only one data series."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"split-colors",children:"Split colors"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"splitColors"})," prop to an array of two colors to customize the fill color of\nsplit area chart. The first color is used for positive values and the second color\nfor negative values. ",(0,o.jsx)(a.code,{children:"splitColors"})," prop is ignored in other types of area charts."]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,o.jsxs)(a.p,{children:["To display chart legend, set ",(0,o.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(a.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,o.jsxs)(a.p,{children:["By default, series ",(0,o.jsx)(a.code,{children:"name"})," is used as a label. To change it, set ",(0,o.jsx)(a.code,{children:"label"}),"\nproperty in ",(0,o.jsx)(a.code,{children:"series"})," object:"]}),"\n",(0,o.jsx)(t,{data:u.Z}),"\n",(0,o.jsx)(a.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,o.jsx)(a.code,{children:"connectNulls"})," is ",(0,o.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," and ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(a.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisLabel"})," and ",(0,o.jsx)(a.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,o.jsx)(t,{data:g.s}),"\n",(0,o.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,o.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(a.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,o.jsxs)(a.p,{children:["To display additional Y axis on the right side of the chart, set ",(0,o.jsx)(a.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\n",(0,o.jsx)(a.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,o.jsx)(a.code,{children:"yAxisId"})," in the ",(0,o.jsx)(a.code,{children:"series"})," object."]}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(a.h2,{id:"rotate-x-axis-labels",children:"Rotate x-axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["To rotate x-axis labels, set ",(0,o.jsx)(a.code,{children:"xAxisProps.angle"})," to a number of degrees to rotate:"]}),"\n",(0,o.jsx)(t,{data:A}),"\n",(0,o.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,o.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(t,{data:v.w}),"\n",(0,o.jsx)(a.h2,{id:"area-color",children:"Area color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:T}),"\n",(0,o.jsx)(a.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,o.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:w}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { AreaChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <AreaChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      type=\"stacked\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,o.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,o.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,o.jsx)(t,{data:D}),"\n",(0,o.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,o.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,o.jsx)(t,{data:V}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:L}),"\n",(0,o.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,o.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,o.jsx)(t,{data:W}),"\n",(0,o.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all areas:"]}),"\n",(0,o.jsx)(t,{data:E}),"\n",(0,o.jsx)(a.h2,{id:"fill-opacity",children:"Fill opacity"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"fillOpacity"})," prop to control the fill opacity of all areas:"]}),"\n",(0,o.jsx)(t,{data:Y}),"\n",(0,o.jsx)(a.h2,{id:"sync-multiple-areacharts",children:"Sync multiple AreaCharts"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/AreaChart",children:"AreaChart"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"areaChartProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"areaChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,o.jsx)(a.code,{children:"AreaChart"})," components with the same ",(0,o.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,o.jsx)(t,{data:_}),"\n",(0,o.jsx)(a.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'orientation="vertical"'})," to render a vertical area chart:"]}),"\n",(0,o.jsx)(t,{data:z}),"\n",(0,o.jsx)(a.h2,{id:"dashed-area-line",children:"Dashed area line"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,o.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,o.jsx)(t,{data:I}),"\n",(0,o.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,o.jsx)(t,{data:U})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(B,{...e,children:(0,o.jsx)(M,{...e})})}},55484:function(e,a,t){"use strict";t.d(a,{q:function(){return j}});var o=t(2784),r=t(61049),n=t.n(r),s=t(15027),i=t(79376),l=["x1","y1","x2","y2","key"],c=["offset"];function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,o)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach(function(a){y(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function f(e,a){for(var t=0;t<a.length;t++){var o=a[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,b(o.key),o)}}function x(e,a){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e})(e,a)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,a,t){return(a=b(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e){var a=function(e,a){if("object"!==d(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,a||"default");if("object"!==d(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"===d(a)?a:String(a)}var j=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&x(e,a)}(y,e);var a,t,r,h=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=g(y);return e=a?Reflect.construct(t,arguments,g(this).constructor):t.apply(this,arguments),function(e,a){if(a&&("object"===d(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function y(){return!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,y),h.apply(this,arguments)}return t=[{key:"renderHorizontal",value:function(e){var a=this,t=this.props,r=t.x,n=t.width,s=t.horizontal;if(!e||!e.length)return null;var i=e.map(function(e,t){var o=u(u({},a.props),{},{x1:r,y1:e,x2:r+n,y2:e,key:"line-".concat(t),index:t});return y.renderLineItem(s,o)});return o.createElement("g",{className:"recharts-cartesian-grid-horizontal"},i)}},{key:"renderVertical",value:function(e){var a=this,t=this.props,r=t.y,n=t.height,s=t.vertical;if(!e||!e.length)return null;var i=e.map(function(e,t){var o=u(u({},a.props),{},{x1:e,y1:r,x2:e,y2:r+n,key:"line-".concat(t),index:t});return y.renderLineItem(s,o)});return o.createElement("g",{className:"recharts-cartesian-grid-vertical"},i)}},{key:"renderVerticalStripes",value:function(e){var a=this.props.verticalFill;if(!a||!a.length)return null;var t=this.props,r=t.fillOpacity,n=t.x,s=t.y,i=t.width,l=t.height,c=e.map(function(e){return Math.round(e+n-n)}).sort(function(e,a){return e-a});n!==c[0]&&c.unshift(0);var d=c.map(function(e,t){var d=c[t+1]?c[t+1]-e:n+i-e;if(d<=0)return null;var p=t%a.length;return o.createElement("rect",{key:"react-".concat(t),x:e,y:s,width:d,height:l,stroke:"none",fill:a[p],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return o.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}},{key:"renderHorizontalStripes",value:function(e){var a=this.props.horizontalFill;if(!a||!a.length)return null;var t=this.props,r=t.fillOpacity,n=t.x,s=t.y,i=t.width,l=t.height,c=e.map(function(e){return Math.round(e+s-s)}).sort(function(e,a){return e-a});s!==c[0]&&c.unshift(0);var d=c.map(function(e,t){var d=c[t+1]?c[t+1]-e:s+l-e;if(d<=0)return null;var p=t%a.length;return o.createElement("rect",{key:"react-".concat(t),y:e,x:n,height:d,width:i,stroke:"none",fill:a[p],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return o.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var a=this.props,t=a.fillOpacity,r=a.x,n=a.y,s=a.width,i=a.height;return o.createElement("rect",{x:r,y:n,width:s,height:i,stroke:"none",fill:e,fillOpacity:t,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,a=e.x,t=e.y,r=e.width,i=e.height,l=e.horizontal,c=e.vertical,d=e.horizontalCoordinatesGenerator,p=e.verticalCoordinatesGenerator,m=e.xAxis,h=e.yAxis,f=e.offset,x=e.chartWidth,g=e.chartHeight,y=e.syncWithTicks,b=e.horizontalValues,j=e.verticalValues;if(!(0,s.hj)(r)||r<=0||!(0,s.hj)(i)||i<=0||!(0,s.hj)(a)||a!==+a||!(0,s.hj)(t)||t!==+t)return null;var A=this.props,v=A.horizontalPoints,T=A.verticalPoints;if((!v||!v.length)&&n()(d)){var k=b&&b.length;v=d({yAxis:h?u(u({},h),{},{ticks:k?b:h.ticks}):void 0,width:x,height:g,offset:f},!!k||y)}if((!T||!T.length)&&n()(p)){var C=j&&j.length;T=p({xAxis:m?u(u({},m),{},{ticks:C?j:m.ticks}):void 0,width:x,height:g,offset:f},!!C||y)}return o.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),l&&this.renderHorizontal(v),c&&this.renderVertical(T),l&&this.renderHorizontalStripes(v),c&&this.renderVerticalStripes(T))}}],r=[{key:"renderLineItem",value:function(e,a){var t;if(o.isValidElement(e))t=o.cloneElement(e,a);else if(n()(e))t=e(a);else{var r=a.x1,s=a.y1,d=a.x2,h=a.y2,u=a.key,f=m(a,l),x=(0,i.L6)(f),g=(x.offset,m(x,c));t=o.createElement("line",p({},g,{x1:r,y1:s,x2:d,y2:h,fill:"none",key:u}))}return t}}],t&&f(y.prototype,t),r&&f(y,r),Object.defineProperty(y,"prototype",{writable:!1}),y}(o.PureComponent);y(j,"displayName","CartesianGrid"),y(j,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},81066:function(e,a,t){"use strict";t.d(a,{s:function(){return s}});var o=t(52322),r=t(24634),n=t(99803);let s={type:"code",component:function(){return(0,o.jsx)(r.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},94884:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var o=t(52322),r=t(24634),n=t(99803);let s={type:"code",component:function(){return(0,o.jsx)(r.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},84955:function(e,a,t){"use strict";t.d(a,{A:function(){return s}});var o=t(52322),r=t(24634),n=t(99803);let s={type:"code",component:function(){return(0,o.jsx)(r.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},19055:function(e,a,t){"use strict";t.d(a,{w:function(){return s}});var o=t(52322),r=t(24634),n=t(99803);let s={type:"code",component:function(){return(0,o.jsx)(r.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}}},function(e){e.O(0,[61177,16717,50603,66748,11340,47889,92888,49774,40179],function(){return e(e.s=36399)}),_N_E=e.O()}]);