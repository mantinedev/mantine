(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20422],{77042:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/line-chart",function(){return t(61110)}])},61110:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return U}});var o=t(52322),n=t(45392),r=t(65602),s=t(16690);let i={type:"configurator",component:function(e){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var l=t(55510);let d={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},m={type:"configurator",component:function(e){return(0,o.jsx)(r.w,{h:300,data:s.ux,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.$o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},p={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},f={type:"configurator",component:function(e){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},y={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",className:"m_91e7a08d",series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:s.op,language:"tsx",fileName:"data.ts"}]},j={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},b={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",className:"m_8fdc5499",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},v={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var T=t(1198),w=t(8582);function C({label:e,payload:a}){return a?(0,o.jsxs)(T.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,o.jsx)(w.x,{fw:500,mb:5,children:e}),a.map(e=>(0,o.jsxs)(w.x,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let L={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,o.jsx)(C,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},D={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},N={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},k={type:"configurator",component:function(e){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},K={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.x,{mb:"md",pl:"md",children:"Apples sales:"}),(0,o.jsx)(r.w,{h:180,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),(0,o.jsx)(w.x,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,o.jsx)(r.w,{h:180,data:s.aT,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},O={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},M={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.aT,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},P={type:"code",component:function(){return(0,o.jsx)(r.w,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]};var _=t(25071),S=t(15019);let I=(0,_.A)(S.us.LineChart);function V(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,o.jsxs)(a.p,{children:["To display chart legend, set ",(0,o.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,o.jsx)(t,{data:l.j}),"\n",(0,o.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,o.jsxs)(a.p,{children:["By default, series ",(0,o.jsx)(a.code,{children:"name"})," is used as a label. To change it, set ",(0,o.jsx)(a.code,{children:"label"}),"\nproperty in ",(0,o.jsx)(a.code,{children:"series"})," object:"]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(a.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,o.jsx)(a.code,{children:"connectNulls"})," is ",(0,o.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," and ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(a.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisLabel"})," and ",(0,o.jsx)(a.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,o.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,o.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(a.h2,{id:"line-color",children:"Line color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(a.h2,{id:"change-line-color-depending-on-color-scheme",children:"Change line color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof line that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,o.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { LineChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <LineChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,o.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,o.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,o.jsx)(t,{data:A}),"\n",(0,o.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,o.jsx)(t,{data:v}),"\n",(0,o.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,o.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,o.jsx)(t,{data:L}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:D}),"\n",(0,o.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,o.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,o.jsx)(t,{data:N}),"\n",(0,o.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all lines:"]}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsx)(a.h2,{id:"sync-multiple-linecharts",children:"Sync multiple LineCharts"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/LineChart",children:"LineChart"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"lineChartProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"lineChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,o.jsx)(a.code,{children:"LineChart"})," components with the same ",(0,o.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,o.jsx)(t,{data:K}),"\n",(0,o.jsx)(a.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'orientation="vertical"'})," to render a vertical line chart:"]}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(a.h2,{id:"dashed-line-line",children:"Dashed line line"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,o.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,o.jsx)(t,{data:M}),"\n",(0,o.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,o.jsx)(t,{data:P})]})}function U(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(I,{...e,children:(0,o.jsx)(V,{...e})})}},25556:function(e,a,t){"use strict";t.d(a,{K:function(){return o}});var o=function(){return null};o.displayName="XAxis",o.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,a,t){"use strict";t.d(a,{B:function(){return o}});var o=function(){return null};o.displayName="YAxis",o.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},55510:function(e,a,t){"use strict";t.d(a,{j:function(){return s}});var o=t(52322),n=t(65602),r=t(16690);let s={type:"code",component:function(){return(0,o.jsx)(n.w,{h:300,data:r.aT,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r.op,language:"tsx",fileName:"data.ts"}]}},16690:function(e,a,t){"use strict";t.d(a,{$o:function(){return s},Mm:function(){return l},aT:function(){return o},op:function(){return n},ux:function(){return r},xo:function(){return i}});let o=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],n=`
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
`,r=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],s=`
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
`},46293:function(e,a,t){"use strict";t.d(a,{Q:function(){return p}});var o=t(52322),n=t(82027),r=t(38483),s=t(46690),i=t(27009),l=t(28559),d=t(64438),c={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let m={},p=(0,n.d)((e,a)=>{let t=(0,r.w)("ChartLegend",m,e),{classNames:n,className:p,style:h,styles:u,unstyled:x,vars:g,payload:f,onHighlight:y,legendPosition:j,mod:b,series:A,showColor:v,...T}=t,w=(0,s.y)({name:"ChartLegend",classes:c,props:t,className:p,style:h,classNames:n,styles:u,unstyled:x});if(!f)return null;let C=f.filter(e=>"none"!==e.color),L=(0,d.v)(A),D=C.map((e,a)=>(0,o.jsxs)("div",{...w("legendItem"),onMouseEnter:()=>y(e.dataKey),onMouseLeave:()=>y(null),"data-without-color":!1===v||void 0,children:[(0,o.jsx)(i.b,{color:e.color,size:12,...w("legendItemColor"),withShadow:!1}),(0,o.jsx)("p",{...w("legendItemName"),children:L[e.dataKey]||e.dataKey})]},a));return(0,o.jsx)(l.x,{ref:a,mod:[{position:j},b],...w("legend"),...T,children:D})});p.displayName="@mantine/charts/ChartLegend"},50425:function(e,a,t){"use strict";t.d(a,{h:function(){return g},X:function(){return h}});var o=t(52322),n=t(82027),r=t(38483),s=t(68755),i=t(46690),l=t(27009),d=t(13588),c=t(28559),m=t(64438),p={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,a){let t=e.filter(e=>"none"!==e.fill||!e.color);return a?t.filter(e=>e.name===a):t}function u(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let x={type:"area"},g=(0,n.d)((e,a)=>{let t=(0,r.w)("ChartTooltip",x,e),{classNames:n,className:g,style:f,styles:y,unstyled:j,vars:b,payload:A,label:v,unit:T,type:w,segmentId:C,mod:L,series:D,valueFormatter:N,...k}=t,K=(0,s.rZ)(),O=(0,i.y)({name:"ChartTooltip",classes:p,props:t,className:g,style:f,classNames:n,styles:y,unstyled:j});if(!A)return null;let M=h(A,C),P="scatter"===w?A[0]?.payload?.name:null,_=(0,m.v)(D),S=v||P,I=M.map(e=>(0,o.jsxs)("div",{"data-type":w,...O("tooltipItem"),children:[(0,o.jsxs)("div",{...O("tooltipItemBody"),children:[(0,o.jsx)(l.b,{color:(0,d.p)(e.color,K),size:12,...O("tooltipItemColor"),withShadow:!1}),(0,o.jsx)("div",{...O("tooltipItemName"),children:_[e.name]||e.name})]}),(0,o.jsxs)("div",{...O("tooltipItemData"),children:["function"==typeof N?N(u(e,w)):u(e,w),T||e.unit]})]},e.name));return(0,o.jsxs)(c.x,{...O("tooltip"),mod:[{type:w},L],ref:a,...k,children:[S&&(0,o.jsx)("div",{...O("tooltipLabel"),children:S}),(0,o.jsx)("div",{...O("tooltipBody"),children:I})]})});g.displayName="@mantine/charts/ChartTooltip"},65602:function(e,a,t){"use strict";t.d(a,{w:function(){return N}});var o=t(52322),n=t(2784),r=t(63004),s=t(30840),i=t(18205),l=t(32908),d=t(55734),c=t(25556),m=t(81224),p=t(3131),h=t(55484),u=t(21154),x=t(11200),g=t(13588),f=t(82027),y=t(38483),j=t(68755),b=t(51477),A=t(46690),v=t(28559),T=t(46293),w=t(50425),C=t(7064);let L={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone"},D=(0,x.Z)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,g.p)(a,e):void 0,"--chart-grid-color":t?(0,g.p)(t,e):void 0}})),N=(0,f.d)((e,a)=>{let t=(0,y.w)("LineChart",L,e),{classNames:x,className:f,style:N,styles:k,unstyled:K,vars:O,data:M,withLegend:P,legendProps:_,series:S,onMouseLeave:I,dataKey:V,withTooltip:U,withXAxis:B,withYAxis:F,gridAxis:W,tickLine:z,xAxisProps:Y,yAxisProps:E,unit:X,tooltipAnimationDuration:R,strokeDasharray:Z,gridProps:$,tooltipProps:q,referenceLines:G,withDots:Q,dotProps:H,activeDotProps:J,strokeWidth:ee,lineChartProps:ea,connectNulls:et,fillOpacity:eo,curveType:en,orientation:er,dir:es,valueFormatter:ei,children:el,lineProps:ed,xAxisLabel:ec,yAxisLabel:em,...ep}=t,eh=(0,j.rZ)(),[eu,ex]=(0,n.useState)(null),eg=null!==eu,{resolvedClassNames:ef,resolvedStyles:ey}=(0,b.h)({classNames:x,styles:k,props:t}),ej=(0,A.y)({name:"LineChart",classes:C.Z,props:t,className:f,style:N,classNames:x,styles:k,unstyled:K,vars:O,varsResolver:D}),eb=S.map(e=>{let a=(0,g.p)(e.color,eh),t=eg&&eu!==e.name;return(0,n.createElement)(r.x,{...ej("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!Q&&{fillOpacity:t?0:1,strokeOpacity:t?0:1,...H},activeDot:!!Q&&{fill:a,stroke:a,...J},fill:a,stroke:a,strokeWidth:ee,isAnimationActive:!1,fillOpacity:t?0:eo,strokeOpacity:t?.5:eo,connectNulls:et,type:en,strokeDasharray:e.strokeDasharray,..."function"==typeof ed?ed(e):ed})}),eA=G?.map((e,a)=>{let t=g.p(e.color,eh);return o.jsx(s.d,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ej("referenceLine")},a)});return(0,o.jsx)(v.x,{ref:a,...ej("root"),onMouseLeave:e=>{ex(null),I?.(e)},dir:es||"ltr",...ep,children:(0,o.jsx)(i.h,{...ej("container"),children:(0,o.jsxs)(l.w,{data:M,layout:er,margin:{bottom:ec?30:void 0,left:em?10:void 0,right:em?5:void 0},...ea,children:[P&&(0,o.jsx)(d.D,{verticalAlign:"top",content:e=>(0,o.jsx)(T.Q,{payload:e.payload,onHighlight:ex,legendPosition:_?.verticalAlign||"top",classNames:ef,styles:ey,series:S}),..._}),(0,o.jsxs)(c.K,{hide:!B,..."vertical"===er?{type:"number"}:{dataKey:V},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==W&&("x"===z||"xy"===z))&&{stroke:"currentColor"},minTickGap:5,...ej("axis"),...Y,children:[ec&&(0,o.jsx)(m._,{position:"insideBottom",offset:-20,fontSize:12,...ej("axisLabel"),children:ec}),Y?.children]}),(0,o.jsxs)(p.B,{hide:!F,axisLine:!1,..."vertical"===er?{dataKey:V,type:"category"}:{type:"number"},tickLine:!!("none"!==W&&("y"===z||"xy"===z))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:X,tickFormatter:ei,...ej("axis"),...E,children:[em&&(0,o.jsx)(m._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ej("axisLabel"),children:em}),E?.children]}),(0,o.jsx)(h.q,{strokeDasharray:Z,vertical:"y"===W||"xy"===W,horizontal:"x"===W||"xy"===W,...ej("grid"),...$}),U&&(0,o.jsx)(u.u,{animationDuration:R,isAnimationActive:0!==R,position:"vertical"===er?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Z},content:({label:e,payload:a})=>(0,o.jsx)(w.h,{label:e,payload:a,unit:X,classNames:ef,styles:ey,series:S,valueFormatter:ei}),...q}),eb,eA,el]})})})});N.displayName="@mantine/charts/LineChart",N.classes=C.Z},7064:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var o={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d"}},64438:function(e,a,t){"use strict";function o(e){return e?e.reduce((e,a)=>(e[a.name]=a.label,e),{}):{}}t.d(a,{v:function(){return o}})}},function(e){e.O(0,[61177,16717,62662,66748,11340,92888,49774,40179],function(){return e(e.s=77042)}),_N_E=e.O()}]);