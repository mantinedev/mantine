(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20422],{77042:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/line-chart",function(){return o(61110)}])},61110:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return W}});var t=o(52322),n=o(45392),r=o(65602),s=o(16690);let i={type:"configurator",component:function(e){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var l=o(57316),d=o(55510);let c={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},p={type:"configurator",component:function(e){return(0,t.jsx)(r.w,{h:300,data:s.ux,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.$o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},h={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]};var f=o(10913);let y={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},j={type:"configurator",component:function(e){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},b={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",className:"m_91e7a08d",series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:s.op,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},T={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",className:"m_8fdc5499",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},w={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},v={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var C=o(1198),L=o(8582);function D({label:e,payload:a}){return a?(0,t.jsxs)(C.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,t.jsx)(L.x,{fw:500,mb:5,children:e}),a.map(e=>(0,t.jsxs)(L.x,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let N={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,t.jsx)(D,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},K={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},k={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},P={type:"configurator",component:function(e){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},O={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.x,{mb:"md",pl:"md",children:"Apples sales:"}),(0,t.jsx)(r.w,{h:180,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),(0,t.jsx)(L.x,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,t.jsx)(r.w,{h:180,data:s.aT,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},S={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},V={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},U={type:"code",component:function(){return(0,t.jsx)(r.w,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]};var Y=o(25071),_=o(15019);let F=(0,Y.A)(_.us.LineChart);function I(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:o}=a;return o||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(a.h2,{id:"gradient-type",children:"Gradient type"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:'type="gradient"'})," to render a line chart with gradient fill. To customize\ngradient colors, use ",(0,t.jsx)(a.code,{children:"gradientStops"})," prop. It accepts an array of objects with\n",(0,t.jsx)(a.code,{children:"offset"})," and ",(0,t.jsx)(a.code,{children:"color"})," properties. ",(0,t.jsx)(a.code,{children:"offset"})," is a number between 0 and 100 that\ndefines the position of the color in the gradient, ",(0,t.jsx)(a.code,{children:"color"})," is a reference to ",(0,t.jsx)(a.code,{children:"theme.colors"}),"\nor any valid CSS color."]}),"\n",(0,t.jsx)(o,{data:l.F}),"\n",(0,t.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(a.p,{children:["To display chart legend, set ",(0,t.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,t.jsx)(o,{data:d.j}),"\n",(0,t.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,t.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,t.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,t.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,t.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(a.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,t.jsxs)(a.p,{children:["By default, series ",(0,t.jsx)(a.code,{children:"name"})," is used as a label. To change it, set ",(0,t.jsx)(a.code,{children:"label"}),"\nproperty in ",(0,t.jsx)(a.code,{children:"series"})," object:"]}),"\n",(0,t.jsx)(o,{data:m}),"\n",(0,t.jsx)(a.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,t.jsx)(a.code,{children:"connectNulls"})," is ",(0,t.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"xAxisProps"})," and ",(0,t.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,t.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,t.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsx)(a.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"xAxisLabel"})," and ",(0,t.jsx)(a.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,t.jsx)(o,{data:x}),"\n",(0,t.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,t.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(a.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,t.jsxs)(a.p,{children:["To display additional Y axis on the right side of the chart, set ",(0,t.jsx)(a.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to recharts ",(0,t.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with ",(0,t.jsx)(a.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\n",(0,t.jsx)(a.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,t.jsx)(a.code,{children:"yAxisId"})," in the ",(0,t.jsx)(a.code,{children:"series"})," object."]}),"\n",(0,t.jsx)(o,{data:f.o}),"\n",(0,t.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,t.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,t.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,t.jsx)(o,{data:y}),"\n",(0,t.jsx)(a.h2,{id:"line-color",children:"Line color"}),"\n",(0,t.jsxs)(a.p,{children:["You can reference colors from ",(0,t.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(a.code,{children:"blue"}),", ",(0,t.jsx)(a.code,{children:"red.5"}),", ",(0,t.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,t.jsx)(o,{data:j}),"\n",(0,t.jsx)(a.h2,{id:"change-line-color-depending-on-color-scheme",children:"Change line color depending on color scheme"}),"\n",(0,t.jsxs)(a.p,{children:["You can use CSS variables in ",(0,t.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,t.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,t.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof line that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,t.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,t.jsx)(o,{data:A}),"\n",(0,t.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,t.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,t.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,t.jsx)(o,{data:T}),"\n",(0,t.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,t.jsx)(a.code,{children:"gridColor"})," and ",(0,t.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { LineChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <LineChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,t.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,t.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,t.jsx)(o,{data:w}),"\n",(0,t.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,t.jsx)(o,{data:v}),"\n",(0,t.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,t.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,t.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,t.jsx)(o,{data:N}),"\n",(0,t.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,t.jsxs)(a.p,{children:["To remove tooltip, set ",(0,t.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,t.jsx)(o,{data:K}),"\n",(0,t.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,t.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all lines:"]}),"\n",(0,t.jsx)(o,{data:P}),"\n",(0,t.jsx)(a.h2,{id:"sync-multiple-linecharts",children:"Sync multiple LineCharts"}),"\n",(0,t.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,t.jsx)(a.a,{href:"https://recharts.org/en-US/api/LineChart",children:"LineChart"}),"\ncomponent with ",(0,t.jsx)(a.code,{children:"lineChartProps"})," prop. For example, setting ",(0,t.jsx)(a.code,{children:"lineChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,t.jsx)(a.code,{children:"LineChart"})," components with the same ",(0,t.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,t.jsx)(o,{data:O}),"\n",(0,t.jsx)(a.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:'orientation="vertical"'})," to render a vertical line chart:"]}),"\n",(0,t.jsx)(o,{data:S}),"\n",(0,t.jsx)(a.h2,{id:"dashed-line-line",children:"Dashed line line"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,t.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,t.jsx)(o,{data:V}),"\n",(0,t.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,t.jsx)(o,{data:U})]})}function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(F,{...e,children:(0,t.jsx)(I,{...e})})}},55510:function(e,a,o){"use strict";o.d(a,{j:function(){return s}});var t=o(52322),n=o(65602),r=o(16690);let s={type:"code",component:function(){return(0,t.jsx)(n.w,{h:300,data:r.aT,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r.op,language:"tsx",fileName:"data.ts"}]}}},function(e){e.O(0,[61177,16717,62662,66748,11340,61623,92888,49774,40179],function(){return e(e.s=77042)}),_N_E=e.O()}]);