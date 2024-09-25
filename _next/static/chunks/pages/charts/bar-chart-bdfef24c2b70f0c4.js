(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14778],{39717:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/bar-chart",function(){return a(71371)}])},71371:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return F}});var o=a(52322),r=a(45392),n=a(8132),i=a(9404);let s={type:"configurator",component:function(e){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],...e})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"__",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0}]},l={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",type:"stacked",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]};var c=a(53712);let d={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",type:"percent",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="percent"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]};var m=a(72384);let h={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",withLegend:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Smartphones",label:"Phone sales",color:"violet.6"},{name:"Laptops",label:"Laptop sales",color:"blue.6"},{name:"Tablets",label:"Tablet sales",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Smartphones', label: 'Smartphones sales', color: 'violet.6' },
        { name: 'Laptops', label: 'Laptops sales', color: 'blue.6' },
        { name: 'Tablets', label: 'Tablets sales', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},y={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},b={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",yAxisProps:{domain:[0,250]},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      yAxisProps={{ domain: [0, 250] }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},v={type:"configurator",component:function(e){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",series:[{name:"Smartphones",color:e.color}],...e})},code:[{code:e=>`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'Smartphones', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"number",prop:"fillOpacity",initialValue:1,libraryValue:"__",min:0,max:1,step:.01}]};var j=a(31336),w=a(78025);let T={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",className:"m_ad75446c",series:[{name:"Smartphones",color:"var(--bar-color)"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      className={classes.root}
      series={[{ name: 'Smartphones', color: 'var(--bar-color)' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --bar-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --bar-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:i.op,language:"tsx",fileName:"data.ts"}]},S={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",strokeDasharray:"15 15",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      strokeDasharray="15 15"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},C={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",className:"m_cb37bd9a",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
import { BarChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      className={classes.root}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},k={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",tooltipAnimationDuration:200,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},L={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",unit:"$",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      unit="$"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]};var N=a(1198),B=a(8582);function D({label:e,payload:t}){return t?(0,o.jsxs)(N.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,o.jsx)(B.x,{fw:500,mb:5,children:e}),t.map(e=>(0,o.jsxs)(B.x,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let P={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",tooltipProps:{content:({label:e,payload:t})=>(0,o.jsx)(D,{label:e,payload:t})},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
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
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},K={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",withTooltip:!1,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withTooltip={false}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},A={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(B.x,{mb:"md",pl:"md",children:"Smartphones sales:"}),(0,o.jsx)(n.v,{h:180,data:i.aT,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"}],barChartProps:{syncId:"tech"}}),(0,o.jsx)(B.x,{mb:"md",pl:"md",mt:"xl",children:"Laptops sales:"}),(0,o.jsx)(n.v,{h:180,data:i.aT,dataKey:"month",barChartProps:{syncId:"tech"},series:[{name:"Laptops",color:"teal.6"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Smartphones sales:
      </Text>

      <BarChart
        h={180}
        data={data}
        dataKey="month"
        series={[{ name: 'Smartphones', color: 'violet.6' }]}
        barChartProps={{ syncId: 'tech' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Laptops sales:
      </Text>

      <BarChart
        h={180}
        data={data}
        dataKey="month"
        barChartProps={{ syncId: 'tech' }}
        series={[{ name: 'Laptops', color: 'teal.6' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]};var O=a(44532);let E={type:"code",component:function(){return(0,o.jsx)(n.v,{h:300,data:i.aT,dataKey:"month",referenceLines:[{y:1130,color:"red.5",label:"Profit reached",labelPosition:"insideTopRight"}],series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      referenceLines={[
        {
          y: 1130,
          color: 'red.5',
          label: 'Profit reached',
          labelPosition: 'insideTopRight',
        },
      ]}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]};var I=a(53332),_=a(25071),z=a(15019);let V=(0,_.A)(z.us.BarChart);function U(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"BarChart"})," component without ",(0,o.jsx)(t.code,{children:"type"})," prop to render a regular bar chart.\nIn a regular bar chart, each data series is plotted on its own and does\nnot interact with other series."]}),"\n",(0,o.jsx)(a,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"stacked-bar-chart",children:"Stacked bar chart"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'type="stacked"'})," to render a stacked bar chart. In this type of bar chart\nstacking is applied along the vertical axis, allowing you to see the overall trend\nas well as the contribution of each individual series to the total."]}),"\n",(0,o.jsx)(a,{data:l}),"\n",(0,o.jsx)(t.h2,{id:"mixed-stacked-bar-chart",children:"Mixed stacked bar chart"}),"\n",(0,o.jsxs)(t.p,{children:["You can control how series are stacked by setting ",(0,o.jsx)(t.code,{children:"stackId"})," property in series object:"]}),"\n",(0,o.jsx)(a,{data:c.i}),"\n",(0,o.jsx)(t.h2,{id:"percent-bar-chart",children:"Percent bar chart"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'type="percent"'})," to render a percent bar chart. In this type of bar chart\nthe y-axis scale is always normalized to 100%, making it easier to compare the\ncontribution of each series in terms of percentages."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"waterfall-bar-chart",children:"Waterfall bar chart"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'type="waterfall"'})," to render a waterfall bar chart. This chart type illustrates how an\ninitial value is influenced by subsequent positive or negative values,\nwith each bar starting where the previous one ended.\nUse the ",(0,o.jsx)(t.code,{children:"color"})," prop inside data to color each bar individually. Note that the series color gets overwritten for this specific bar.\nUse the ",(0,o.jsx)(t.code,{children:"standalone"})," prop inside data to decouple the bar from the flow."]}),"\n",(0,o.jsx)(a,{data:m.A}),"\n",(0,o.jsx)(t.h2,{id:"legend",children:"Legend"}),"\n",(0,o.jsxs)(t.p,{children:["To display chart legend, set ",(0,o.jsx)(t.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,o.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,o.jsx)(t.code,{children:"legendProps"})," prop. For example, setting ",(0,o.jsx)(t.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,o.jsxs)(t.p,{children:["By default, series ",(0,o.jsx)(t.code,{children:"name"})," is used as a label. To change it, set ",(0,o.jsx)(t.code,{children:"label"}),"\nproperty in ",(0,o.jsx)(t.code,{children:"series"})," object:"]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"xAxisProps"})," and ",(0,o.jsx)(t.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"xAxisLabel"})," and ",(0,o.jsx)(t.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 150, you can set domain to ",(0,o.jsx)(t.code,{children:"[0, 150]"}),":"]}),"\n",(0,o.jsx)(a,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(t.p,{children:["To format values in the tooltip and axis ticks, use ",(0,o.jsx)(t.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(a,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"area-color",children:"Area color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"bar-props",children:"Bar props"}),"\n",(0,o.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/Bar",children:"Bar"}),"\ncomponent with ",(0,o.jsx)(t.code,{children:"barProps"})," prop. ",(0,o.jsx)(t.code,{children:"barProps"})," accepts either an object with props\nor a function that receives series data as an argument and returns an object with\nprops."]}),"\n",(0,o.jsx)(a,{data:j.D}),"\n",(0,o.jsx)(t.h2,{id:"minimum-bar-size",children:"Minimum bar size"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"minBarSize"})," prop to set the minimum size of the bar in px:"]}),"\n",(0,o.jsx)(a,{data:w.J}),"\n",(0,o.jsx)(t.h2,{id:"change-bar-color-depending-on-color-scheme",children:"Change bar color depending on color scheme"}),"\n",(0,o.jsxs)(t.p,{children:["You can use CSS variables in ",(0,o.jsx)(t.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(t.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(t.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof bar that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(a,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,o.jsx)(t.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,o.jsx)(a,{data:S}),"\n",(0,o.jsx)(t.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(t.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(t.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(a,{data:C}),"\n",(0,o.jsxs)(t.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(t.code,{children:"gridColor"})," and ",(0,o.jsx)(t.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { BarChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <BarChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      type=\"stacked\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Smartphones', color: 'violet.6' },\n        { name: 'Laptops', color: 'blue.6' },\n        { name: 'Tablets', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,o.jsxs)(t.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,o.jsx)(t.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,o.jsx)(a,{data:k}),"\n",(0,o.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,o.jsx)(a,{data:L}),"\n",(0,o.jsx)(t.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,o.jsx)(t.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,o.jsx)(a,{data:P}),"\n",(0,o.jsx)(t.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To remove tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(a,{data:K}),"\n",(0,o.jsx)(t.h2,{id:"sync-multiple-barcharts",children:"Sync multiple BarCharts"}),"\n",(0,o.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/BarChart",children:"BarChart"}),"\ncomponent with ",(0,o.jsx)(t.code,{children:"barChartProps"})," prop. For example, setting ",(0,o.jsx)(t.code,{children:"barChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,o.jsx)(t.code,{children:"BarChart"})," components with the same ",(0,o.jsx)(t.code,{children:"syncId"})," prop."]}),"\n",(0,o.jsx)(a,{data:A}),"\n",(0,o.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'orientation="vertical"'})," to render a vertical bar chart:"]}),"\n",(0,o.jsx)(a,{data:O.K}),"\n",(0,o.jsx)(t.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,o.jsx)(a,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"bar-value-label",children:"Bar value label"}),"\n",(0,o.jsxs)(t.p,{children:["To display value above each bar, set ",(0,o.jsx)(t.code,{children:"withBarValueLabel"}),":"]}),"\n",(0,o.jsx)(a,{data:I.a})]})}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(V,{...e,children:(0,o.jsx)(U,{...e})})}},55484:function(e,t,a){"use strict";a.d(t,{q:function(){return v}});var o=a(2784),r=a(61049),n=a.n(r),i=a(15027),s=a(79376),l=["x1","y1","x2","y2","key"],c=["offset"];function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){b(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,g(o.key),o)}}function x(e,t){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,a){return(t=g(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var o=a.call(e,t||"default");if("object"!==d(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(b,e);var t,a,r,p=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=y(b);return e=t?Reflect.construct(a,arguments,y(this).constructor):a.apply(this,arguments),function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function b(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,b),p.apply(this,arguments)}return a=[{key:"renderHorizontal",value:function(e){var t=this,a=this.props,r=a.x,n=a.width,i=a.horizontal;if(!e||!e.length)return null;var s=e.map(function(e,a){var o=u(u({},t.props),{},{x1:r,y1:e,x2:r+n,y2:e,key:"line-".concat(a),index:a});return b.renderLineItem(i,o)});return o.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}},{key:"renderVertical",value:function(e){var t=this,a=this.props,r=a.y,n=a.height,i=a.vertical;if(!e||!e.length)return null;var s=e.map(function(e,a){var o=u(u({},t.props),{},{x1:e,y1:r,x2:e,y2:r+n,key:"line-".concat(a),index:a});return b.renderLineItem(i,o)});return o.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}},{key:"renderVerticalStripes",value:function(e){var t=this.props.verticalFill;if(!t||!t.length)return null;var a=this.props,r=a.fillOpacity,n=a.x,i=a.y,s=a.width,l=a.height,c=e.map(function(e){return Math.round(e+n-n)}).sort(function(e,t){return e-t});n!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:n+s-e;if(d<=0)return null;var m=a%t.length;return o.createElement("rect",{key:"react-".concat(a),x:e,y:i,width:d,height:l,stroke:"none",fill:t[m],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return o.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}},{key:"renderHorizontalStripes",value:function(e){var t=this.props.horizontalFill;if(!t||!t.length)return null;var a=this.props,r=a.fillOpacity,n=a.x,i=a.y,s=a.width,l=a.height,c=e.map(function(e){return Math.round(e+i-i)}).sort(function(e,t){return e-t});i!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:i+l-e;if(d<=0)return null;var m=a%t.length;return o.createElement("rect",{key:"react-".concat(a),y:e,x:n,height:d,width:s,stroke:"none",fill:t[m],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return o.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var t=this.props,a=t.fillOpacity,r=t.x,n=t.y,i=t.width,s=t.height;return o.createElement("rect",{x:r,y:n,width:i,height:s,stroke:"none",fill:e,fillOpacity:a,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,r=e.width,s=e.height,l=e.horizontal,c=e.vertical,d=e.horizontalCoordinatesGenerator,m=e.verticalCoordinatesGenerator,h=e.xAxis,p=e.yAxis,f=e.offset,x=e.chartWidth,y=e.chartHeight,b=e.syncWithTicks,g=e.horizontalValues,v=e.verticalValues;if(!(0,i.hj)(r)||r<=0||!(0,i.hj)(s)||s<=0||!(0,i.hj)(t)||t!==+t||!(0,i.hj)(a)||a!==+a)return null;var j=this.props,w=j.horizontalPoints,T=j.verticalPoints;if((!w||!w.length)&&n()(d)){var S=g&&g.length;w=d({yAxis:p?u(u({},p),{},{ticks:S?g:p.ticks}):void 0,width:x,height:y,offset:f},!!S||b)}if((!T||!T.length)&&n()(m)){var C=v&&v.length;T=m({xAxis:h?u(u({},h),{},{ticks:C?v:h.ticks}):void 0,width:x,height:y,offset:f},!!C||b)}return o.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),l&&this.renderHorizontal(w),c&&this.renderVertical(T),l&&this.renderHorizontalStripes(w),c&&this.renderVerticalStripes(T))}}],r=[{key:"renderLineItem",value:function(e,t){var a;if(o.isValidElement(e))a=o.cloneElement(e,t);else if(n()(e))a=e(t);else{var r=t.x1,i=t.y1,d=t.x2,p=t.y2,u=t.key,f=h(t,l),x=(0,s.L6)(f),y=(x.offset,h(x,c));a=o.createElement("line",m({},y,{x1:r,y1:i,x2:d,y2:p,fill:"none",key:u}))}return a}}],a&&f(b.prototype,a),r&&f(b,r),Object.defineProperty(b,"prototype",{writable:!1}),b}(o.PureComponent);b(v,"displayName","CartesianGrid"),b(v,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},25556:function(e,t,a){"use strict";a.d(t,{K:function(){return o}});var o=function(){return null};o.displayName="XAxis",o.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,t,a){"use strict";a.d(t,{B:function(){return o}});var o=function(){return null};o.displayName="YAxis",o.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},80739:function(e,t,a){"use strict";a.d(t,{v:function(){return l}});var o=a(12624),r=a(171),n=a(25556),i=a(3131),s=a(69524),l=(0,o.z)({chartName:"BarChart",GraphicalChild:r.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:n.K},{axisType:"yAxis",AxisComp:i.B}],formatAxisMap:s.t9})},31336:function(e,t,a){"use strict";a.d(t,{D:function(){return i}});var o=a(52322),r=a(8132),n=a(9404);let i={type:"code",component:function(){return(0,o.jsx)(r.v,{h:200,data:n.aT,dataKey:"month",orientation:"vertical",yAxisProps:{width:80},barProps:{radius:10},series:[{name:"Smartphones",color:"blue.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={200}
      data={data}
      dataKey="month"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'Smartphones', color: 'blue.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},53332:function(e,t,a){"use strict";a.d(t,{a:function(){return i}});var o=a(52322),r=a(8132),n=a(9404);let i={type:"code",component:function(){return(0,o.jsx)(r.v,{h:300,data:n.aT,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      withBarValueLabel
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},78025:function(e,t,a){"use strict";a.d(t,{J:function(){return i}});var o=a(52322),r=a(8132),n=a(9404);let i={type:"code",component:function(){return(0,o.jsx)(r.v,{h:300,data:n.jm,dataKey:"month",minBarSize:10,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.sR,language:"tsx",fileName:"data.ts"}]}},53712:function(e,t,a){"use strict";a.d(t,{i:function(){return i}});var o=a(52322),r=a(8132),n=a(9404);let i={type:"code",component:function(){return(0,o.jsx)(r.v,{h:300,data:n.hm,dataKey:"month",series:[{name:"Smartphones",color:"violet.6",stackId:"a"},{name:"Laptops",color:"blue.6",stackId:"b"},{name:"Tablets",color:"teal.6",stackId:"b"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'teal.6', stackId: 'b' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.Lc,language:"tsx",fileName:"data.ts"}]}},44532:function(e,t,a){"use strict";a.d(t,{K:function(){return i}});var o=a(52322),r=a(8132),n=a(9404);let i={type:"code",component:function(){return(0,o.jsx)(r.v,{h:300,data:n.aT,dataKey:"month",type:"stacked",orientation:"vertical",yAxisProps:{width:80},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},72384:function(e,t,a){"use strict";a.d(t,{A:function(){return i}});var o=a(52322),r=a(8132),n=a(9404);let i={type:"code",component:function(){return(0,o.jsx)(r.v,{h:300,data:n.It,dataKey:"item",type:"waterfall",series:[{name:"Effective tax rate in %",color:"blue"}],withLegend:!0})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="item"
      type="waterfall"
      series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      withLegend
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.K$,language:"tsx",fileName:"data.ts"}]}}},function(e){e.O(0,[61177,16717,66748,11340,40296,92888,49774,40179],function(){return e(e.s=39717)}),_N_E=e.O()}]);