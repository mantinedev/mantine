(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14778],{20256:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/bar-chart",function(){return a(45754)}])},45754:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q}});var r=a(24246),o=a(71670),n=a(27378),i=a(95829),l=a(35105);let s=`
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
`,c={type:"configurator",component:function(e){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],...e})},code:[{code:s,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"__",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0}]},d=`
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
`,m={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",type:"stacked",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:d,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},h=`
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
`,p={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",type:"percent",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:h,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},u=`
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
`,f={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",withLegend:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:u,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},y=`
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
`,x={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:y,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},g=`
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
`,b={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:g,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},v=`
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
`,j={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:v,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},S=`
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
`,k={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",yAxisProps:{domain:[0,250]},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:S,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},C={type:"configurator",component:function(e){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",series:[{name:"Smartphones",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"number",prop:"fillOpacity",initialValue:1,libraryValue:"__",min:0,max:1,step:.01}]},w=`.root {
  @mixin light {
    --bar-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --bar-color: var(--mantine-color-lime-4);
  }
}
`,T=`
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
`,L={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",className:"m-ad75446c",series:[{name:"Smartphones",color:"var(--bar-color)"}]})},code:[{code:T,language:"tsx",fileName:"Demo.tsx"},{code:w,language:"scss",fileName:"Demo.module.css"},{code:l.o,language:"tsx",fileName:"data.ts"}]},E=`
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
`,N={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",strokeDasharray:"15 15",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:E,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},P=`
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
`,B=`
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
`,D={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",className:"m-cb37bd9a",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:P,language:"scss",fileName:"Demo.module.css"},{code:B,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},O=`
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
`,A={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",tooltipAnimationDuration:200,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:O,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},K=`
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
`,I={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",unit:"$",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:K,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]};var z=a(98477),Text=a(26569);let _=`
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
`;function V({label:e,payload:t}){return t?n.createElement(z.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md"},n.createElement(Text.x,{fw:500,mb:5},e),t.map(e=>n.createElement(Text.x,{key:e.name,c:e.color,fz:"sm"},e.name,": ",e.value))):null}let F={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",tooltipProps:{content:({label:e,payload:t})=>n.createElement(V,{label:e,payload:t})},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:_,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},M=`
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
`,U={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",withTooltip:!1,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:M,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},R=`
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
`,Y={type:"code",component:function(){return n.createElement(n.Fragment,null,n.createElement(Text.x,{mb:"md",pl:"md"},"Smartphones sales:"),n.createElement(i.v,{h:180,data:l.a,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"}],barChartProps:{syncId:"tech"}}),n.createElement(Text.x,{mb:"md",pl:"md",mt:"xl"},"Laptops sales:"),n.createElement(i.v,{h:180,data:l.a,dataKey:"month",barChartProps:{syncId:"tech"},series:[{name:"Laptops",color:"teal.6"}]}))},code:[{code:R,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]};var X=a(3278);let G=`
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
          y: 130,
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
`,H={type:"code",component:function(){return n.createElement(i.v,{h:300,data:l.a,dataKey:"month",referenceLines:[{y:130,color:"red.5",label:"Profit reached",labelPosition:"insideTopRight"}],series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:G,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]};var W=a(3916),$=a(54568);let Z=(0,W.A)($.us.BarChart);function J(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"BarChart"})," component without ",(0,r.jsx)(t.code,{children:"type"})," prop to render a regular bar chart.\nIn a regular bar chart, each data series is plotted on its own and does\nnot interact with other series."]}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"stacked-bar-chart",children:"Stacked bar chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="stacked"'})," to render a stacked bar chart. In this type of bar chart\nstacking is applied along the vertical axis, allowing you to see the overall trend\nas well as the contribution of each individual series to the total."]}),"\n",(0,r.jsx)(a,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"percent-bar-chart",children:"Percent bar chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="percent"'})," to render a percent bar chart. In this type of bar chart\nthe y-axis scale is always normalized to 100%, making it easier to compare the\ncontribution of each series in terms of percentages."]}),"\n",(0,r.jsx)(a,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(t.p,{children:["To display chart legend, set ",(0,r.jsx)(t.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,r.jsx)(a,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"legendProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,r.jsx)(a,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," and ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,r.jsx)(a,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,r.jsx)(a,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 150, you can set domain to ",(0,r.jsx)(t.code,{children:"[0, 150]"}),":"]}),"\n",(0,r.jsx)(a,{data:k}),"\n",(0,r.jsx)(t.h2,{id:"area-color",children:"Area color"}),"\n",(0,r.jsxs)(t.p,{children:["You can reference colors from ",(0,r.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,r.jsx)(t.code,{children:"blue"}),", ",(0,r.jsx)(t.code,{children:"red.5"}),", ",(0,r.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,r.jsx)(a,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"change-bar-color-depending-on-color-scheme",children:"Change bar color depending on color scheme"}),"\n",(0,r.jsxs)(t.p,{children:["You can use CSS variables in ",(0,r.jsx)(t.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof bar that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,r.jsx)(a,{data:L}),"\n",(0,r.jsx)(t.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,r.jsx)(t.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,r.jsx)(a,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"--chart-grid-color"})," and ",(0,r.jsx)(t.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,r.jsx)(t.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,r.jsx)(a,{data:D}),"\n",(0,r.jsxs)(t.p,{children:["If your application has only one color scheme, you can use ",(0,r.jsx)(t.code,{children:"gridColor"})," and ",(0,r.jsx)(t.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { BarChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <BarChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      type=\"stacked\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Smartphones', color: 'violet.6' },\n        { name: 'Laptops', color: 'blue.6' },\n        { name: 'Tablets', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,r.jsx)(t.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,r.jsx)(a,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,r.jsx)(a,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,r.jsx)(t.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,r.jsx)(a,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["To remove tooltip, set ",(0,r.jsx)(t.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,r.jsx)(a,{data:U}),"\n",(0,r.jsx)(t.h2,{id:"sync-multiple-barcharts",children:"Sync multiple BarCharts"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/BarChart",children:"BarChart"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"barChartProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"barChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,r.jsx)(t.code,{children:"BarChart"})," components with the same ",(0,r.jsx)(t.code,{children:"syncId"})," prop."]}),"\n",(0,r.jsx)(a,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'orientation="vertical"'})," to render a vertical bar chart:"]}),"\n",(0,r.jsx)(a,{data:X.K}),"\n",(0,r.jsx)(t.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,r.jsx)(a,{data:H})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(Z,{...e,children:(0,r.jsx)(J,{...e})})}},38616:function(e,t,a){"use strict";a.d(t,{q:function(){return v}});var r=a(27378),o=a(28338),n=a.n(o),i=a(90727),l=a(3198),s=["x1","y1","x2","y2","key"],c=["offset"];function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){g(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function y(e,t){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,a){return(t=b(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==d(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(g,e);var t,a,o,p=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=x(g);if(t){var r=x(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function g(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,g),p.apply(this,arguments)}return a=[{key:"renderHorizontal",value:function(e){var t=this,a=this.props,o=a.x,n=a.width,i=a.horizontal;if(!e||!e.length)return null;var l=e.map(function(e,a){var r=u(u({},t.props),{},{x1:o,y1:e,x2:o+n,y2:e,key:"line-".concat(a),index:a});return g.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}},{key:"renderVertical",value:function(e){var t=this,a=this.props,o=a.y,n=a.height,i=a.vertical;if(!e||!e.length)return null;var l=e.map(function(e,a){var r=u(u({},t.props),{},{x1:e,y1:o,x2:e,y2:o+n,key:"line-".concat(a),index:a});return g.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}},{key:"renderVerticalStripes",value:function(e){var t=this.props.verticalFill;if(!t||!t.length)return null;var a=this.props,o=a.fillOpacity,n=a.x,i=a.y,l=a.width,s=a.height,c=e.map(function(e){return Math.round(e+n-n)}).sort(function(e,t){return e-t});n!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:n+l-e;if(d<=0)return null;var m=a%t.length;return r.createElement("rect",{key:"react-".concat(a),x:e,y:i,width:d,height:s,stroke:"none",fill:t[m],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}},{key:"renderHorizontalStripes",value:function(e){var t=this.props.horizontalFill;if(!t||!t.length)return null;var a=this.props,o=a.fillOpacity,n=a.x,i=a.y,l=a.width,s=a.height,c=e.map(function(e){return Math.round(e+i-i)}).sort(function(e,t){return e-t});i!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:i+s-e;if(d<=0)return null;var m=a%t.length;return r.createElement("rect",{key:"react-".concat(a),y:e,x:n,height:d,width:l,stroke:"none",fill:t[m],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var t=this.props,a=t.fillOpacity,o=t.x,n=t.y,i=t.width,l=t.height;return r.createElement("rect",{x:o,y:n,width:i,height:l,stroke:"none",fill:e,fillOpacity:a,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,o=e.width,l=e.height,s=e.horizontal,c=e.vertical,d=e.horizontalCoordinatesGenerator,m=e.verticalCoordinatesGenerator,h=e.xAxis,p=e.yAxis,f=e.offset,y=e.chartWidth,x=e.chartHeight,g=e.syncWithTicks,b=e.horizontalValues,v=e.verticalValues;if(!(0,i.hj)(o)||o<=0||!(0,i.hj)(l)||l<=0||!(0,i.hj)(t)||t!==+t||!(0,i.hj)(a)||a!==+a)return null;var j=this.props,S=j.horizontalPoints,k=j.verticalPoints;if((!S||!S.length)&&n()(d)){var C=b&&b.length;S=d({yAxis:p?u(u({},p),{},{ticks:C?b:p.ticks}):void 0,width:y,height:x,offset:f},!!C||g)}if((!k||!k.length)&&n()(m)){var w=v&&v.length;k=m({xAxis:h?u(u({},h),{},{ticks:w?v:h.ticks}):void 0,width:y,height:x,offset:f},!!w||g)}return r.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),s&&this.renderHorizontal(S),c&&this.renderVertical(k),s&&this.renderHorizontalStripes(S),c&&this.renderVerticalStripes(k))}}],o=[{key:"renderLineItem",value:function(e,t){var a;if(r.isValidElement(e))a=r.cloneElement(e,t);else if(n()(e))a=e(t);else{var o=t.x1,i=t.y1,d=t.x2,p=t.y2,u=t.key,f=h(t,s),y=(0,l.L6)(f),x=(y.offset,h(y,c));a=r.createElement("line",m({},x,{x1:o,y1:i,x2:d,y2:p,fill:"none",key:u}))}return a}}],a&&f(g.prototype,a),o&&f(g,o),Object.defineProperty(g,"prototype",{writable:!1}),g}(r.PureComponent);g(v,"displayName","CartesianGrid"),g(v,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},3278:function(e,t,a){"use strict";a.d(t,{K:function(){return l}});var r=a(27378),o=a(95829),n=a(35105);let i=`
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
`,l={type:"code",component:function(){return r.createElement(o.v,{h:300,data:n.a,dataKey:"month",type:"stacked",orientation:"vertical",yAxisProps:{width:80},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:n.o,language:"tsx",fileName:"data.ts"}]}},35105:function(e,t,a){"use strict";a.d(t,{a:function(){return r},o:function(){return o}});let r=[{month:"January",Smartphones:120,Laptops:80,Tablets:10},{month:"February",Smartphones:90,Laptops:120,Tablets:40},{month:"March",Smartphones:40,Laptops:100,Tablets:20},{month:"April",Smartphones:100,Laptops:20,Tablets:80},{month:"May",Smartphones:80,Laptops:140,Tablets:120},{month:"June",Smartphones:75,Laptops:60,Tablets:100}],o=`
export const data = [
  { month: 'January', Smartphones: 120, Laptops: 80, Tablets: 10 },
  { month: 'February', Smartphones: 90, Laptops: 120, Tablets: 40 },
  { month: 'March', Smartphones: 40, Laptops: 100, Tablets: 20 },
  { month: 'April', Smartphones: 100, Laptops: 20, Tablets: 80 },
  { month: 'May', Smartphones: 80, Laptops: 140, Tablets: 120 },
  { month: 'June', Smartphones: 75, Laptops: 60, Tablets: 100 },
];
`},95829:function(e,t,a){"use strict";a.d(t,{v:function(){return N}});var r=a(27378),o=a(4387),n=a(97879),i=a(9911),l=a(24849),s=a(32529),c=a(26299),d=a(69972),m=(0,l.z)({chartName:"BarChart",GraphicalChild:o.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:s.K},{axisType:"yAxis",AxisComp:c.B}],formatAxisMap:d.t9}),h=a(46246),p=a(38616),u=a(44460),f=a(83453),y=a(89738),x=a(20410),g=a(96739),b=a(2256),v=a(5564),j=a(6231),S=a(56589),k=a(3525),C=a(96688),w=a(51010);function T(e){return`${(100*e).toFixed(0)}%`}let L={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},E=(0,f.Z)((e,{textColor:t,gridColor:a,cursorFill:r})=>({root:{"--chart-text-color":t?(0,y.p)(t,e):void 0,"--chart-grid-color":a?(0,y.p)(a,e):void 0,"--chart-cursor-fill":r?(0,y.p)(r,e):void 0}})),N=(0,x.d)((e,t)=>{let a=(0,g.w)("BarChart",L,e),{classNames:l,className:d,style:f,styles:x,unstyled:N,vars:P,data:B,withLegend:D,legendProps:O,series:A,onMouseLeave:K,dataKey:I,withTooltip:z,withXAxis:_,withYAxis:V,gridAxis:F,tickLine:M,xAxisProps:U,yAxisProps:R,unit:Y,tooltipAnimationDuration:X,strokeDasharray:G,gridProps:H,tooltipProps:W,referenceLines:$,fillOpacity:Z,barChartProps:J,type:q,orientation:Q,...ee}=a,et=(0,b.rZ)(),[ea,er]=(0,r.useState)(null),eo=null!==ea,en="stacked"===q||"percent"===q,{resolvedClassNames:ei,resolvedStyles:el}=(0,v.h)({classNames:l,styles:x,props:a}),es=(0,j.y)({name:"BarChart",classes:w.Z,props:a,className:d,style:f,classNames:l,styles:x,unstyled:N,vars:P,varsResolver:E}),ec=A.map(e=>{let t=(0,y.p)(e.color,et),a=eo&&ea!==e.name;return r.createElement(o.$,{...es("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:a?.1:Z,strokeOpacity:a?.2:0,stackId:en?"stack":void 0})}),ed=$?.map((e,t)=>{let a=y.p(e.color,et);return r.createElement(n.d,{key:t,stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...es("referenceLine")})});return r.createElement(S.x,{ref:t,...es("root"),onMouseLeave:e=>{er(null),K?.(e)},...ee},r.createElement(i.h,{...es("container")},r.createElement(m,{data:B,stackOffset:"percent"===q?"expand":void 0,layout:Q,...J},D&&r.createElement(h.D,{verticalAlign:"top",content:e=>r.createElement(k.Q,{payload:e.payload,onHighlight:er,legendPosition:O?.verticalAlign||"top",classNames:ei,styles:el}),height:44,...O}),r.createElement(s.K,{hide:!_,..."vertical"===Q?{type:"number"}:{dataKey:I},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==F&&("x"===M||"xy"===M))&&{stroke:"currentColor"},minTickGap:5,...es("axis"),...U}),r.createElement(c.B,{hide:!V,axisLine:!1,..."vertical"===Q?{dataKey:I,type:"category"}:{type:"number"},tickLine:!!("none"!==F&&("y"===M||"xy"===M))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:Y,tickFormatter:"percent"===q?T:void 0,...es("axis"),...R}),r.createElement(p.q,{strokeDasharray:G,vertical:"y"===F||"xy"===F,horizontal:"x"===F||"xy"===F,...es("grid"),...H}),z&&r.createElement(u.u,{animationDuration:X,isAnimationActive:0!==X,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:G,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:t})=>r.createElement(C.h,{label:e,payload:t,unit:Y,classNames:ei,styles:el}),...W}),ec,ed)))});N.displayName="@mantine/charts/BarChart",N.classes=w.Z},3525:function(e,t,a){"use strict";a.d(t,{Q:function(){return m}});var r=a(27378),o=a(20410),n=a(96739),i=a(6231),l=a(16202),s=a(56589),c={legend:"m-847eaf",legendItem:"m-17da7e62",legendItemName:"m-8ff56c0d"};let d={},m=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartLegend",d,e),{classNames:o,className:m,style:h,styles:p,unstyled:u,vars:f,payload:y,onHighlight:x,legendPosition:g,...b}=a,v=(0,i.y)({name:"ChartLegend",classes:c,props:a,className:m,style:h,classNames:o,styles:p,unstyled:u});if(!y)return null;let j=y.filter(e=>"none"!==e.color),S=j.map((e,t)=>r.createElement("div",{key:t,...v("legendItem"),onMouseEnter:()=>x(e.dataKey),onMouseLeave:()=>x(null)},r.createElement(l.b,{color:e.color,size:12,...v("legendItemColor"),withShadow:!1}),r.createElement("p",{...v("legendItemName")},e.dataKey)));return r.createElement(s.x,{ref:t,mod:{position:g},...v("legend"),...b},S)});m.displayName="@mantine/charts/ChartLegend"},96688:function(e,t,a){"use strict";a.d(t,{h:function(){return h},X:function(){return d}});var r=a(27378),o=a(20410),n=a(96739),i=a(6231),l=a(16202),s=a(56589),c={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function d(e){return e.filter(e=>"none"!==e.fill)}let m={},h=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartTooltip",m,e),{classNames:o,className:h,style:p,styles:u,unstyled:f,vars:y,payload:x,label:g,unit:b,...v}=a,j=(0,i.y)({name:"ChartTooltip",classes:c,props:a,className:h,style:p,classNames:o,styles:u,unstyled:f});if(!x)return null;let S=d(x),k=S.map(e=>r.createElement("div",{key:e.name,...j("tooltipItem")},r.createElement("div",{...j("tooltipItemBody")},r.createElement(l.b,{color:e.color,size:12,...j("tooltipItemColor"),withShadow:!1}),r.createElement("div",{...j("tooltipItemName")},e.name)),r.createElement("div",{...j("tooltipItemData")},e.payload[e.dataKey],b)));return r.createElement(s.x,{...j("tooltip"),ref:t,...v},g&&r.createElement("div",{...j("tooltipLabel")},g),r.createElement("div",{...j("tooltipBody")},k))});h.displayName="@mantine/charts/ChartTooltip"},51010:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var r={root:"m-a50f3e58",container:"m-af9188cb",grid:"m-a50a48bc",axis:"m-a507a517"}}},function(e){e.O(0,[30370,58425,15819,2775,49774,92888,40179],function(){return e(e.s=20256)}),_N_E=e.O()}]);