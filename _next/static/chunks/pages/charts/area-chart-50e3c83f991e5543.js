(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51006],{89269:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/area-chart",function(){return t(35752)}])},35752:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>J});var r=t(31085),o=t(71184),n=t(8667),i=t(78433);let s={type:"configurator",component:function(e){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var l=t(53183);let d={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"percent",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.Zf,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.EC,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.Zf,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}],splitColors:["violet","orange"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.EC,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var u=t(21686);let x={type:"configurator",component:function(e){return(0,r.jsx)(n.Q,{h:300,data:i.v1,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kD,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},f={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withPointLabels
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var y=t(58338);let j={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},b={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.sC,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.dX,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.d8,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.EJ,language:"tsx",fileName:"data.ts"}]},v={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",tickLine:"xy",xAxisProps:{angle:-20},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var k=t(87611);let C={type:"configurator",component:function(e){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]};var w={root:"m_13521d26"};let D={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",className:w.root,series:[{name:"Apples",color:"var(--area-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},O={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var P={root:"m_3587e220"};let T={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",className:P.root,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},N={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},K={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var S=t(93581),E=t(58120),V=t(93065);function L({label:e,payload:a}){return a?(0,r.jsxs)(E.t,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,r.jsx)(V.E,{fw:500,mb:5,children:e}),(0,S.r)(a).map(e=>(0,r.jsxs)(V.E,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let Q={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",tooltipProps:{content:({label:e,payload:a})=>(0,r.jsx)(L,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart, getFilteredChartTooltipPayload } from '@mantine/charts';
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},W={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},z={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},Z={type:"configurator",component:function(e){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},Y={type:"configurator",component:function(e){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Tomatoes",color:"teal.6"},{name:"Oranges",color:"blue.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"type",initialValue:"default",libraryValue:"default",transformLabel:!1,data:[{value:"default",label:"default"},{value:"stacked",label:"stacked"}]},{type:"number",prop:"fillOpacity",initialValue:.2,libraryValue:null,step:.01,min:0,max:1},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},R={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V.E,{mb:"md",pl:"md",children:"Apples sales:"}),(0,r.jsx)(n.Q,{h:180,data:i.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],areaChartProps:{syncId:"groceries"}}),(0,r.jsx)(V.E,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,r.jsx)(n.Q,{h:180,data:i.p,dataKey:"date",areaChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},F={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},U={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]},I={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.sC,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.dX,language:"tsx",fileName:"data.ts"}]};var _=t(16390);let G={type:"code",component:function(){return(0,r.jsx)(n.Q,{h:300,data:i.p,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,r.jsx)(_.T,{x1:"Mar 23",x2:"Mar 25",y1:0,y2:1e4,yAxisId:"left",fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
import { ReferenceArea } from 'recharts';
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
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={0}
        y2={10000}
        yAxisId="left"
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </AreaChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.kZ,language:"tsx",fileName:"data.ts"}]};var B=t(18675),M=t(20017);let X=(0,B.P)(M.XZ.AreaChart);function $(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"AreaChart"})," component without ",(0,r.jsx)(a.code,{children:"type"})," prop to render a regular area chart.\nIn a regular area chart, each data series is plotted on its own and does\nnot interact with other series."]}),"\n",(0,r.jsx)(t,{data:s}),"\n",(0,r.jsx)(a.h2,{id:"stacked-area-chart",children:"Stacked area chart"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:'type="stacked"'})," to render a stacked area chart. In this type of area chart\nstacking is applied along the vertical axis, allowing you to see the overall trend\nas well as the contribution of each individual series to the total."]}),"\n",(0,r.jsx)(t,{data:l.O}),"\n",(0,r.jsx)(a.h2,{id:"percent-area-chart",children:"Percent area chart"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:'type="percent"'})," to render a percent area chart. In this type of area chart\nthe y-axis scale is always normalized to 100%, making it easier to compare the\ncontribution of each series in terms of percentages."]}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(a.h2,{id:"split-area-chart",children:"Split area chart"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:'type="split"'})," to render a split area chart. In this type of area chart\nfill color is split into two colors, one for positive values and one for negative\nvalues. Split area chart supports only one data series."]}),"\n",(0,r.jsx)(t,{data:c}),"\n",(0,r.jsx)(a.h2,{id:"split-colors",children:"Split colors"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:"splitColors"})," prop to an array of two colors to customize the fill color of\nsplit area chart. The first color is used for positive values and the second color\nfor negative values. ",(0,r.jsx)(a.code,{children:"splitColors"})," prop is ignored in other types of area charts."]}),"\n",(0,r.jsx)(t,{data:p}),"\n",(0,r.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(a.p,{children:["To display chart legend, set ",(0,r.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,r.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,r.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,r.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,r.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,r.jsx)(t,{data:m}),"\n",(0,r.jsx)(a.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,r.jsxs)(a.p,{children:["By default, series ",(0,r.jsx)(a.code,{children:"name"})," is used as a label. To change it, set ",(0,r.jsx)(a.code,{children:"label"}),"\nproperty in ",(0,r.jsx)(a.code,{children:"series"})," object:"]}),"\n",(0,r.jsx)(t,{data:u.x}),"\n",(0,r.jsx)(a.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,r.jsx)(a.code,{children:"connectNulls"})," is ",(0,r.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(t,{data:x}),"\n",(0,r.jsx)(a.h2,{id:"points-labels",children:"Points labels"}),"\n",(0,r.jsxs)(a.p,{children:["To display labels on data points, set ",(0,r.jsx)(a.code,{children:"withPointLabels"}),":"]}),"\n",(0,r.jsx)(t,{data:f}),"\n",(0,r.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"xAxisProps"})," and ",(0,r.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,r.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,r.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(a.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"xAxisLabel"})," and ",(0,r.jsx)(a.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,r.jsx)(t,{data:y.B}),"\n",(0,r.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,r.jsx)(t,{data:j}),"\n",(0,r.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,r.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,r.jsx)(t,{data:b}),"\n",(0,r.jsx)(a.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,r.jsxs)(a.p,{children:["To display additional Y axis on the right side of the chart, set ",(0,r.jsx)(a.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to recharts ",(0,r.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with ",(0,r.jsx)(a.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\n",(0,r.jsx)(a.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,r.jsx)(a.code,{children:"yAxisId"})," in the ",(0,r.jsx)(a.code,{children:"series"})," object."]}),"\n",(0,r.jsx)(t,{data:A}),"\n",(0,r.jsx)(a.h2,{id:"rotate-x-axis-labels",children:"Rotate x-axis labels"}),"\n",(0,r.jsxs)(a.p,{children:["To rotate x-axis labels, set ",(0,r.jsx)(a.code,{children:"xAxisProps.angle"})," to a number of degrees to rotate:"]}),"\n",(0,r.jsx)(t,{data:v}),"\n",(0,r.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,r.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,r.jsx)(t,{data:k.G}),"\n",(0,r.jsx)(a.h2,{id:"area-color",children:"Area color"}),"\n",(0,r.jsxs)(a.p,{children:["You can reference colors from ",(0,r.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,r.jsx)(a.code,{children:"blue"}),", ",(0,r.jsx)(a.code,{children:"red.5"}),", ",(0,r.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,r.jsx)(t,{data:C}),"\n",(0,r.jsx)(a.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,r.jsxs)(a.p,{children:["You can use CSS variables in ",(0,r.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,r.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,r.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,r.jsx)(t,{data:D}),"\n",(0,r.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,r.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,r.jsx)(t,{data:O}),"\n",(0,r.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,r.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,r.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,r.jsx)(t,{data:T}),"\n",(0,r.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,r.jsx)(a.code,{children:"gridColor"})," and ",(0,r.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-tsx",children:"import { AreaChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <AreaChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      type=\"stacked\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,r.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,r.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,r.jsx)(t,{data:N}),"\n",(0,r.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,r.jsx)(t,{data:K}),"\n",(0,r.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,r.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,r.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,r.jsx)(t,{data:Q}),"\n",(0,r.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,r.jsxs)(a.p,{children:["To remove tooltip, set ",(0,r.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,r.jsx)(t,{data:W}),"\n",(0,r.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,r.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,r.jsx)(t,{data:z}),"\n",(0,r.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all areas:"]}),"\n",(0,r.jsx)(t,{data:Z}),"\n",(0,r.jsx)(a.h2,{id:"fill-opacity",children:"Fill opacity"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"fillOpacity"})," prop to control the fill opacity of all areas:"]}),"\n",(0,r.jsx)(t,{data:Y}),"\n",(0,r.jsx)(a.h2,{id:"sync-multiple-areacharts",children:"Sync multiple AreaCharts"}),"\n",(0,r.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,r.jsx)(a.a,{href:"https://recharts.org/en-US/api/AreaChart",children:"AreaChart"}),"\ncomponent with ",(0,r.jsx)(a.code,{children:"areaChartProps"})," prop. For example, setting ",(0,r.jsx)(a.code,{children:"areaChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,r.jsx)(a.code,{children:"AreaChart"})," components with the same ",(0,r.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,r.jsx)(t,{data:R}),"\n",(0,r.jsx)(a.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:'orientation="vertical"'})," to render a vertical area chart:"]}),"\n",(0,r.jsx)(t,{data:F}),"\n",(0,r.jsx)(a.h2,{id:"dashed-area-line",children:"Dashed area line"}),"\n",(0,r.jsxs)(a.p,{children:["Set ",(0,r.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,r.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,r.jsx)(t,{data:U}),"\n",(0,r.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,r.jsx)(t,{data:I}),"\n",(0,r.jsx)(a.h2,{id:"reference-area",children:"Reference area"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.code,{children:"ReferenceArea"})," component from recharts to display a reference area:"]}),"\n",(0,r.jsx)(t,{data:G})]})}function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(X,{...e,children:(0,r.jsx)($,{...e})})}},12012:(e,a,t)=>{"use strict";t.d(a,{d:()=>T});var r=t(14041),o=t(93655),n=t.n(o),i=t(13157),s=t(81649),l=t(41762),d=t(68706),c=t(47915),p=t(50241),h=t(51732),m=["x1","y1","x2","y2","key"],u=["offset"];function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach(function(a){var r,o;r=a,o=t[a],(r=function(e){var a=function(e,a){if("object"!=x(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=x(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==x(a)?a:a+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function j(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(a.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=function(e){var a=e.fill;if(!a||"none"===a)return null;var t=e.fillOpacity,o=e.x,n=e.y,i=e.width,s=e.height,l=e.ry;return r.createElement("rect",{x:o,y:n,ry:l,width:i,height:s,stroke:"none",fill:a,fillOpacity:t,className:"recharts-cartesian-grid-bg"})};function A(e,a){var t;if(r.isValidElement(e))t=r.cloneElement(e,a);else if(n()(e))t=e(a);else{var o=a.x1,i=a.y1,s=a.x2,d=a.y2,c=a.key,p=j(a,m),h=(0,l.J9)(p,!1),x=(h.offset,j(h,u));t=r.createElement("line",y({},x,{x1:o,y1:i,x2:s,y2:d,fill:"none",key:c}))}return t}function v(e){var a=e.x,t=e.width,o=e.horizontal,n=void 0===o||o,i=e.horizontalPoints;if(!n||!i||!i.length)return null;var s=i.map(function(r,o){return A(n,g(g({},e),{},{x1:a,y1:r,x2:a+t,y2:r,key:"line-".concat(o),index:o}))});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function k(e){var a=e.y,t=e.height,o=e.vertical,n=void 0===o||o,i=e.verticalPoints;if(!n||!i||!i.length)return null;var s=i.map(function(r,o){return A(n,g(g({},e),{},{x1:r,y1:a,x2:r,y2:a+t,key:"line-".concat(o),index:o}))});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function C(e){var a=e.horizontalFill,t=e.fillOpacity,o=e.x,n=e.y,i=e.width,s=e.height,l=e.horizontalPoints,d=e.horizontal;if(!(void 0===d||d)||!a||!a.length)return null;var c=l.map(function(e){return Math.round(e+n-n)}).sort(function(e,a){return e-a});n!==c[0]&&c.unshift(0);var p=c.map(function(e,l){var d=c[l+1]?c[l+1]-e:n+s-e;if(d<=0)return null;var p=l%a.length;return r.createElement("rect",{key:"react-".concat(l),y:e,x:o,height:d,width:i,stroke:"none",fill:a[p],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},p)}function w(e){var a=e.vertical,t=e.verticalFill,o=e.fillOpacity,n=e.x,i=e.y,s=e.width,l=e.height,d=e.verticalPoints;if(!(void 0===a||a)||!t||!t.length)return null;var c=d.map(function(e){return Math.round(e+n-n)}).sort(function(e,a){return e-a});n!==c[0]&&c.unshift(0);var p=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:n+s-e;if(d<=0)return null;var p=a%t.length;return r.createElement("rect",{key:"react-".concat(a),x:e,y:i,width:d,height:l,stroke:"none",fill:t[p],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},p)}var D=function(e,a){var t=e.xAxis,r=e.width,o=e.height,n=e.offset;return(0,d.PW)((0,c.f)(g(g(g({},p.u.defaultProps),t),{},{ticks:(0,d.Rh)(t,!0),viewBox:{x:0,y:0,width:r,height:o}})),n.left,n.left+n.width,a)},O=function(e,a){var t=e.yAxis,r=e.width,o=e.height,n=e.offset;return(0,d.PW)((0,c.f)(g(g(g({},p.u.defaultProps),t),{},{ticks:(0,d.Rh)(t,!0),viewBox:{x:0,y:0,width:r,height:o}})),n.top,n.top+n.height,a)},P={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function T(e){var a,t,o,l,d,c,p=(0,h.yi)(),m=(0,h.rY)(),u=(0,h.hj)(),f=g(g({},e),{},{stroke:null!==(a=e.stroke)&&void 0!==a?a:P.stroke,fill:null!==(t=e.fill)&&void 0!==t?t:P.fill,horizontal:null!==(o=e.horizontal)&&void 0!==o?o:P.horizontal,horizontalFill:null!==(l=e.horizontalFill)&&void 0!==l?l:P.horizontalFill,vertical:null!==(d=e.vertical)&&void 0!==d?d:P.vertical,verticalFill:null!==(c=e.verticalFill)&&void 0!==c?c:P.verticalFill,x:(0,s.Et)(e.x)?e.x:u.left,y:(0,s.Et)(e.y)?e.y:u.top,width:(0,s.Et)(e.width)?e.width:u.width,height:(0,s.Et)(e.height)?e.height:u.height}),j=f.x,A=f.y,T=f.width,N=f.height,K=f.syncWithTicks,S=f.horizontalValues,E=f.verticalValues,V=(0,h.pj)(),L=(0,h.$G)();if(!(0,s.Et)(T)||T<=0||!(0,s.Et)(N)||N<=0||!(0,s.Et)(j)||j!==+j||!(0,s.Et)(A)||A!==+A)return null;var Q=f.verticalCoordinatesGenerator||D,W=f.horizontalCoordinatesGenerator||O,z=f.horizontalPoints,Z=f.verticalPoints;if((!z||!z.length)&&n()(W)){var Y=S&&S.length,R=W({yAxis:L?g(g({},L),{},{ticks:Y?S:L.ticks}):void 0,width:p,height:m,offset:u},!!Y||K);(0,i.R)(Array.isArray(R),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(x(R),"]")),Array.isArray(R)&&(z=R)}if((!Z||!Z.length)&&n()(Q)){var F=E&&E.length,U=Q({xAxis:V?g(g({},V),{},{ticks:F?E:V.ticks}):void 0,width:p,height:m,offset:u},!!F||K);(0,i.R)(Array.isArray(U),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(x(U),"]")),Array.isArray(U)&&(Z=U)}return r.createElement("g",{className:"recharts-cartesian-grid"},r.createElement(b,{fill:f.fill,fillOpacity:f.fillOpacity,x:f.x,y:f.y,width:f.width,height:f.height,ry:f.ry}),r.createElement(v,y({},f,{offset:u,horizontalPoints:z,xAxis:V,yAxis:L})),r.createElement(k,y({},f,{offset:u,verticalPoints:Z,xAxis:V,yAxis:L})),r.createElement(C,y({},f,{horizontalPoints:z})),r.createElement(w,y({},f,{verticalPoints:Z})))}T.displayName="CartesianGrid"},28255:(e,a,t)=>{"use strict";t.d(a,{Q:()=>l});var r=t(10626),o=t(22821),n=t(98331),i=t(51492),s=t(14713),l=(0,r.gu)({chartName:"AreaChart",GraphicalChild:o.G,axisComponents:[{axisType:"xAxis",AxisComp:n.W},{axisType:"yAxis",AxisComp:i.h}],formatAxisMap:s.pr})},58338:(e,a,t)=>{"use strict";t.d(a,{B:()=>i});var r=t(31085),o=t(8667),n=t(78433);let i={type:"code",component:function(){return(0,r.jsx)(o.Q,{h:300,data:n.p,dataKey:"date",type:"stacked",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.kZ,language:"tsx",fileName:"data.ts"}]}},53183:(e,a,t)=>{"use strict";t.d(a,{O:()=>i});var r=t(31085),o=t(8667),n=t(78433);let i={type:"code",component:function(){return(0,r.jsx)(o.Q,{h:300,data:n.p,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.kZ,language:"tsx",fileName:"data.ts"}]}}},e=>{var a=a=>e(e.s=a);e.O(0,[35115,28054,22821,18675,19030,90636,46593,38792],()=>a(89269)),_N_E=e.O()}]);