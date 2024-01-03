(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20422],{47107:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/line-chart",function(){return t(35341)}])},35341:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return et}});var o=t(24246),n=t(71670),r=t(27378),l=t(45875),i=t(44693);let s=`
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
`,d={type:"configurator",component:function(e){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:s,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var c=t(41763);let m=`
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
`,p={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:m,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},h=`
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
`,u={type:"configurator",component:function(e){return r.createElement(l.w,{h:300,data:i.ux,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:h,language:"tsx",fileName:"Demo.tsx"},{code:i.$o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},x=`
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
`,g={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:x,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},f=`
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
`,y={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:f,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},A=`
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
`,b={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.xo,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:A,language:"tsx",fileName:"Demo.tsx"},{code:i.Mm,language:"tsx",fileName:"data.ts"}]},j={type:"configurator",component:function(e){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},v=`.root {
  @mixin light {
    --line-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --line-color: var(--mantine-color-lime-4);
  }
}
`,T=`
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
`,C={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",className:"m-91e7a08d",series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:T,language:"tsx",fileName:"Demo.tsx"},{code:v,language:"scss",fileName:"Demo.module.css"},{code:i.op,language:"tsx",fileName:"data.ts"}]},w=`
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
`,L={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:w,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},D=`
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
`,k=`
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
`,N={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",className:"m-8fdc5499",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:D,language:"scss",fileName:"Demo.module.css"},{code:k,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},E=`
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
`,M={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:E,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},K=`
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
`,O={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:K,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]};var P=t(98477),Text=t(26569);let S=`
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
`;function I({label:e,payload:a}){return a?r.createElement(P.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md"},r.createElement(Text.x,{fw:500,mb:5},e),a.map(e=>r.createElement(Text.x,{key:e.name,c:e.color,fz:"sm"},e.name,": ",e.value))):null}let V={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>r.createElement(I,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:S,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},U=`
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
`,B={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:U,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},_=`
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
`,W={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:_,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},Y=`
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
`,z={type:"configurator",component:function(e){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:Y,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},X=`
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
`,F={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(Text.x,{mb:"md",pl:"md"},"Apples sales:"),r.createElement(l.w,{h:180,data:i.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),r.createElement(Text.x,{mb:"md",pl:"md",mt:"xl"},"Tomatoes sales:"),r.createElement(l.w,{h:180,data:i.aT,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]}))},code:[{code:X,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},R=`
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
`,Z={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:R,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},$=`
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
`,q={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.aT,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:$,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]},G=`
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
`,Q={type:"code",component:function(){return r.createElement(l.w,{h:300,data:i.xo,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:G,language:"tsx",fileName:"Demo.tsx"},{code:i.Mm,language:"tsx",fileName:"data.ts"}]};var H=t(3916),J=t(54568);let ee=(0,H.A)(J.us.LineChart);function ea(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,o.jsxs)(a.p,{children:["To display chart legend, set ",(0,o.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,o.jsx)(t,{data:c.j}),"\n",(0,o.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(a.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,o.jsx)(a.code,{children:"connectNulls"})," is ",(0,o.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," and ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,o.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(a.h2,{id:"line-color",children:"Line color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(a.h2,{id:"change-line-color-depending-on-color-scheme",children:"Change line color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof line that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,o.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,o.jsx)(t,{data:L}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:N}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { LineChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <LineChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,o.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,o.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,o.jsx)(t,{data:M}),"\n",(0,o.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,o.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,o.jsx)(t,{data:V}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,o.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,o.jsx)(t,{data:W}),"\n",(0,o.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all lines:"]}),"\n",(0,o.jsx)(t,{data:z}),"\n",(0,o.jsx)(a.h2,{id:"sync-multiple-linecharts",children:"Sync multiple LineCharts"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/LineChart",children:"LineChart"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"lineChartProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"lineChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,o.jsx)(a.code,{children:"LineChart"})," components with the same ",(0,o.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,o.jsx)(t,{data:F}),"\n",(0,o.jsx)(a.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:'orientation="vertical"'})," to render a vertical line chart:"]}),"\n",(0,o.jsx)(t,{data:Z}),"\n",(0,o.jsx)(a.h2,{id:"dashed-line-line",children:"Dashed line line"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,o.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,o.jsx)(t,{data:q}),"\n",(0,o.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,o.jsx)(t,{data:Q})]})}function et(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ee,{...e,children:(0,o.jsx)(ea,{...e})})}},41763:function(e,a,t){"use strict";t.d(a,{j:function(){return i}});var o=t(27378),n=t(45875),r=t(44693);let l=`
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
`,i={type:"code",component:function(){return o.createElement(n.w,{h:300,data:r.aT,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:r.op,language:"tsx",fileName:"data.ts"}]}},44693:function(e,a,t){"use strict";t.d(a,{$o:function(){return l},Mm:function(){return s},aT:function(){return o},op:function(){return n},ux:function(){return r},xo:function(){return i}});let o=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],n=`
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
`,r=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],l=`
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
`,i=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],s=`
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
`},3525:function(e,a,t){"use strict";t.d(a,{Q:function(){return m}});var o=t(27378),n=t(20410),r=t(96739),l=t(6231),i=t(16202),s=t(56589),d={legend:"m-847eaf",legendItem:"m-17da7e62",legendItemName:"m-8ff56c0d"};let c={},m=(0,n.d)((e,a)=>{let t=(0,r.w)("ChartLegend",c,e),{classNames:n,className:m,style:p,styles:h,unstyled:u,vars:x,payload:g,onHighlight:f,legendPosition:y,...A}=t,b=(0,l.y)({name:"ChartLegend",classes:d,props:t,className:m,style:p,classNames:n,styles:h,unstyled:u});if(!g)return null;let j=g.filter(e=>"none"!==e.color),v=j.map((e,a)=>o.createElement("div",{key:a,...b("legendItem"),onMouseEnter:()=>f(e.dataKey),onMouseLeave:()=>f(null)},o.createElement(i.b,{color:e.color,size:12,...b("legendItemColor"),withShadow:!1}),o.createElement("p",{...b("legendItemName")},e.dataKey)));return o.createElement(s.x,{ref:a,mod:{position:y},...b("legend"),...A},v)});m.displayName="@mantine/charts/ChartLegend"},96688:function(e,a,t){"use strict";t.d(a,{h:function(){return p},X:function(){return c}});var o=t(27378),n=t(20410),r=t(96739),l=t(6231),i=t(16202),s=t(56589),d={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function c(e){return e.filter(e=>"none"!==e.fill)}let m={},p=(0,n.d)((e,a)=>{let t=(0,r.w)("ChartTooltip",m,e),{classNames:n,className:p,style:h,styles:u,unstyled:x,vars:g,payload:f,label:y,unit:A,...b}=t,j=(0,l.y)({name:"ChartTooltip",classes:d,props:t,className:p,style:h,classNames:n,styles:u,unstyled:x});if(!f)return null;let v=c(f),T=v.map(e=>o.createElement("div",{key:e.name,...j("tooltipItem")},o.createElement("div",{...j("tooltipItemBody")},o.createElement(i.b,{color:e.color,size:12,...j("tooltipItemColor"),withShadow:!1}),o.createElement("div",{...j("tooltipItemName")},e.name)),o.createElement("div",{...j("tooltipItemData")},e.payload[e.dataKey],A)));return o.createElement(s.x,{...j("tooltip"),ref:a,...b},y&&o.createElement("div",{...j("tooltipLabel")},y),o.createElement("div",{...j("tooltipBody")},T))});p.displayName="@mantine/charts/ChartTooltip"},45875:function(e,a,t){"use strict";t.d(a,{w:function(){return L}});var o=t(27378),n=t(54446),r=t(97879),l=t(9911),i=t(75885),s=t(46246),d=t(32529),c=t(26299),m=t(38616),p=t(44460),h=t(83453),u=t(89738),x=t(20410),g=t(96739),f=t(2256),y=t(5564),A=t(6231),b=t(56589),j=t(3525),v=t(96688),T=t(51010);let C={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone"},w=(0,h.Z)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,u.p)(a,e):void 0,"--chart-grid-color":t?(0,u.p)(t,e):void 0}})),L=(0,x.d)((e,a)=>{let t=(0,g.w)("LineChart",C,e),{classNames:h,className:x,style:L,styles:D,unstyled:k,vars:N,data:E,withLegend:M,legendProps:K,series:O,onMouseLeave:P,dataKey:S,withTooltip:I,withXAxis:V,withYAxis:U,gridAxis:B,tickLine:_,xAxisProps:W,yAxisProps:Y,unit:z,tooltipAnimationDuration:X,strokeDasharray:F,gridProps:R,tooltipProps:Z,referenceLines:$,withDots:q,dotProps:G,activeDotProps:Q,strokeWidth:H,lineChartProps:J,connectNulls:ee,fillOpacity:ea,curveType:et,orientation:eo,...en}=t,er=(0,f.rZ)(),[el,ei]=(0,o.useState)(null),es=null!==el,{resolvedClassNames:ed,resolvedStyles:ec}=(0,y.h)({classNames:h,styles:D,props:t}),em=(0,A.y)({name:"LineChart",classes:T.Z,props:t,className:x,style:L,classNames:h,styles:D,unstyled:k,vars:N,varsResolver:w}),ep=O.map(e=>{let a=(0,u.p)(e.color,er),t=es&&el!==e.name;return o.createElement(n.x,{...em("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!q&&{fillOpacity:t?0:1,strokeOpacity:t?0:1,...G},activeDot:!!q&&{fill:a,stroke:a,...Q},fill:a,stroke:a,strokeWidth:H,isAnimationActive:!1,fillOpacity:t?0:ea,strokeOpacity:t?.5:ea,connectNulls:ee,type:et,strokeDasharray:e.strokeDasharray})}),eh=$?.map((e,a)=>{let t=u.p(e.color,er);return o.createElement(r.d,{key:a,stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...em("referenceLine")})});return o.createElement(b.x,{ref:a,...em("root"),onMouseLeave:e=>{ei(null),P?.(e)},...en},o.createElement(l.h,{...em("container")},o.createElement(i.w,{data:E,layout:eo,...J},M&&o.createElement(s.D,{verticalAlign:"top",content:e=>o.createElement(j.Q,{payload:e.payload,onHighlight:ei,legendPosition:K?.verticalAlign||"top",classNames:ed,styles:ec}),height:44,...K}),o.createElement(d.K,{hide:!V,..."vertical"===eo?{type:"number"}:{dataKey:S},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==B&&("x"===_||"xy"===_))&&{stroke:"currentColor"},minTickGap:5,...em("axis"),...W}),o.createElement(c.B,{hide:!U,axisLine:!1,..."vertical"===eo?{dataKey:S,type:"category"}:{type:"number"},tickLine:!!("none"!==B&&("y"===_||"xy"===_))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:z,...em("axis"),...Y}),o.createElement(m.q,{strokeDasharray:F,vertical:"y"===B||"xy"===B,horizontal:"x"===B||"xy"===B,...em("grid"),...R}),I&&o.createElement(p.u,{animationDuration:X,isAnimationActive:0!==X,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:F},content:({label:e,payload:a})=>o.createElement(v.h,{label:e,payload:a,unit:z,classNames:ed,styles:ec}),...Z}),ep,eh)))});L.displayName="@mantine/charts/LineChart",L.classes=T.Z},51010:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var o={root:"m-a50f3e58",container:"m-af9188cb",grid:"m-a50a48bc",axis:"m-a507a517"}}},function(e){e.O(0,[30370,58425,94014,15819,2775,49774,92888,40179],function(){return e(e.s=47107)}),_N_E=e.O()}]);