(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26418],{29881:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/area-chart",function(){return a(24614)}])},24614:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eh}});var r=a(24246),o=a(71670),n=a(27378),i=a(44432),l=a(61566);let s=`
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
`,c={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:s,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var d=a(80350);let p=`
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
`,m={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"percent",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:p,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},h=`
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
`,u={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.n1,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}]})},code:[{code:h,language:"tsx",fileName:"Demo.tsx"},{code:l.zW,language:"tsx",fileName:"data.ts"}]},f=`
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
`,y={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.n1,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}],splitColors:["violet","orange"]})},code:[{code:f,language:"tsx",fileName:"Demo.tsx"},{code:l.zW,language:"tsx",fileName:"data.ts"}]},g=`
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
`,x={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:g,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},A=`
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
`,b={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:A,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},v=`
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
`,j={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:l.ux,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:v,language:"tsx",fileName:"Demo.tsx"},{code:l.$o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},k=`
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
`,T={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:k,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},C=`
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
`,O={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:C,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},w=`
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
`,E={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.xo,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:w,language:"tsx",fileName:"Demo.tsx"},{code:l.Mm,language:"tsx",fileName:"data.ts"}]},D={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},N=`.root {
  @mixin light {
    --area-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --area-color: var(--mantine-color-lime-4);
  }
}
`,P=`
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
`,M={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",className:"m-13521d26",series:[{name:"Apples",color:"var(--area-color)"}]})},code:[{code:P,language:"tsx",fileName:"Demo.tsx"},{code:N,language:"scss",fileName:"Demo.module.css"},{code:l.op,language:"tsx",fileName:"data.ts"}]},K=`
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
`,S={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:K,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},V=`
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
`,L=`
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
`,W={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",className:"m-3587e220",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:V,language:"scss",fileName:"Demo.module.css"},{code:L,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},I=`
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
`,z={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:I,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},_=`
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
`,F={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:_,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]};var B=a(96688),U=a(98477),Text=a(26569);let G=`
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
`;function R({label:e,payload:t}){return t?n.createElement(U.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md"},n.createElement(Text.x,{fw:500,mb:5},e),(0,B.X)(t).map(e=>n.createElement(Text.x,{key:e.name,c:e.color,fz:"sm"},e.name,": ",e.value))):null}let $={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",tooltipProps:{content:({label:e,payload:t})=>n.createElement(R,{label:e,payload:t})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:G,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},X=`
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
`,Y={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:X,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},Z=`
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
`,H={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:Z,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},q=`
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
`,Q={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:q,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},J=`
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
`,ee={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Tomatoes",color:"teal.6"},{name:"Oranges",color:"blue.6"}],...e})},code:[{code:J,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"type",initialValue:"default",libraryValue:"default",transformLabel:!1,data:[{value:"default",label:"default"},{value:"stacked",label:"stacked"}]},{type:"number",prop:"fillOpacity",initialValue:.2,libraryValue:null,step:.01,min:0,max:1},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},et=`
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
`,ea={type:"code",component:function(){return n.createElement(n.Fragment,null,n.createElement(Text.x,{mb:"md",pl:"md"},"Apples sales:"),n.createElement(i.T,{h:180,data:l.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],areaChartProps:{syncId:"groceries"}}),n.createElement(Text.x,{mb:"md",pl:"md",mt:"xl"},"Tomatoes sales:"),n.createElement(i.T,{h:180,data:l.aT,dataKey:"date",areaChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]}))},code:[{code:et,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},er=`
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
`,eo={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:er,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},en=`
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
`,ei={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.aT,dataKey:"date",type:"stacked",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:en,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]},el=`
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
`,es={type:"code",component:function(){return n.createElement(i.T,{h:300,data:l.xo,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:el,language:"tsx",fileName:"Demo.tsx"},{code:l.Mm,language:"tsx",fileName:"data.ts"}]};var ec=a(3916),ed=a(54568);let ep=(0,ec.A)(ed.us.AreaChart);function em(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"AreaChart"})," component without ",(0,r.jsx)(t.code,{children:"type"})," prop to render a regular area chart.\nIn a regular area chart, each data series is plotted on its own and does\nnot interact with other series."]}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"stacked-area-chart",children:"Stacked area chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="stacked"'})," to render a stacked area chart. In this type of area chart\nstacking is applied along the vertical axis, allowing you to see the overall trend\nas well as the contribution of each individual series to the total."]}),"\n",(0,r.jsx)(a,{data:d.A}),"\n",(0,r.jsx)(t.h2,{id:"percent-area-chart",children:"Percent area chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="percent"'})," to render a percent area chart. In this type of area chart\nthe y-axis scale is always normalized to 100%, making it easier to compare the\ncontribution of each series in terms of percentages."]}),"\n",(0,r.jsx)(a,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"split-area-chart",children:"Split area chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="split"'})," to render a split area chart. In this type of area chart\nfill color is split into two colors, one for positive values and one for negative\nvalues. Split area chart supports only one data series."]}),"\n",(0,r.jsx)(a,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"split-colors",children:"Split colors"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"splitColors"})," prop to an array of two colors to customize the fill color of\nsplit area chart. The first color is used for positive values and the second color\nfor negative values. ",(0,r.jsx)(t.code,{children:"splitColors"})," prop is ignored in other types of area charts."]}),"\n",(0,r.jsx)(a,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(t.p,{children:["To display chart legend, set ",(0,r.jsx)(t.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,r.jsx)(a,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"legendProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,r.jsx)(a,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,r.jsx)(t.code,{children:"connectNulls"})," is ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(a,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," and ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,r.jsx)(a,{data:T}),"\n",(0,r.jsx)(t.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,r.jsx)(a,{data:O}),"\n",(0,r.jsx)(t.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,r.jsx)(t.code,{children:"[0, 100]"}),":"]}),"\n",(0,r.jsx)(a,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"area-color",children:"Area color"}),"\n",(0,r.jsxs)(t.p,{children:["You can reference colors from ",(0,r.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,r.jsx)(t.code,{children:"blue"}),", ",(0,r.jsx)(t.code,{children:"red.5"}),", ",(0,r.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,r.jsx)(a,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,r.jsxs)(t.p,{children:["You can use CSS variables in ",(0,r.jsx)(t.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,r.jsx)(a,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,r.jsx)(t.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,r.jsx)(a,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"--chart-grid-color"})," and ",(0,r.jsx)(t.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,r.jsx)(t.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,r.jsx)(a,{data:W}),"\n",(0,r.jsxs)(t.p,{children:["If your application has only one color scheme, you can use ",(0,r.jsx)(t.code,{children:"gridColor"})," and ",(0,r.jsx)(t.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { AreaChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <AreaChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      type=\"stacked\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,r.jsx)(t.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,r.jsx)(a,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,r.jsx)(a,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,r.jsx)(t.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,r.jsx)(a,{data:$}),"\n",(0,r.jsx)(t.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["To remove tooltip, set ",(0,r.jsx)(t.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,r.jsx)(a,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,r.jsx)(t.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,r.jsx)(a,{data:H}),"\n",(0,r.jsx)(t.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"strokeWidth"})," prop to control the stroke width of all areas:"]}),"\n",(0,r.jsx)(a,{data:Q}),"\n",(0,r.jsx)(t.h2,{id:"fill-opacity",children:"Fill opacity"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"fillOpacity"})," prop to control the fill opacity of all areas:"]}),"\n",(0,r.jsx)(a,{data:ee}),"\n",(0,r.jsx)(t.h2,{id:"sync-multiple-areacharts",children:"Sync multiple AreaCharts"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/AreaChart",children:"AreaChart"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"areaChartProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"areaChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,r.jsx)(t.code,{children:"AreaChart"})," components with the same ",(0,r.jsx)(t.code,{children:"syncId"})," prop."]}),"\n",(0,r.jsx)(a,{data:ea}),"\n",(0,r.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'orientation="vertical"'})," to render a vertical area chart:"]}),"\n",(0,r.jsx)(a,{data:eo}),"\n",(0,r.jsx)(t.h2,{id:"dashed-area-line",children:"Dashed area line"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," property in ",(0,r.jsx)(t.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,r.jsx)(a,{data:ei}),"\n",(0,r.jsx)(t.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,r.jsx)(a,{data:es})]})}function eh(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ep,{...e,children:(0,r.jsx)(em,{...e})})}},38616:function(e,t,a){"use strict";a.d(t,{q:function(){return b}});var r=a(27378),o=a(28338),n=a.n(o),i=a(90727),l=a(3198),s=["x1","y1","x2","y2","key"],c=["offset"];function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach(function(t){x(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function y(e,t){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,a){return(t=A(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==d(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(x,e);var t,a,o,h=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=g(x);if(t){var r=g(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function x(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,x),h.apply(this,arguments)}return a=[{key:"renderHorizontal",value:function(e){var t=this,a=this.props,o=a.x,n=a.width,i=a.horizontal;if(!e||!e.length)return null;var l=e.map(function(e,a){var r=u(u({},t.props),{},{x1:o,y1:e,x2:o+n,y2:e,key:"line-".concat(a),index:a});return x.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}},{key:"renderVertical",value:function(e){var t=this,a=this.props,o=a.y,n=a.height,i=a.vertical;if(!e||!e.length)return null;var l=e.map(function(e,a){var r=u(u({},t.props),{},{x1:e,y1:o,x2:e,y2:o+n,key:"line-".concat(a),index:a});return x.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}},{key:"renderVerticalStripes",value:function(e){var t=this.props.verticalFill;if(!t||!t.length)return null;var a=this.props,o=a.fillOpacity,n=a.x,i=a.y,l=a.width,s=a.height,c=e.map(function(e){return Math.round(e+n-n)}).sort(function(e,t){return e-t});n!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:n+l-e;if(d<=0)return null;var p=a%t.length;return r.createElement("rect",{key:"react-".concat(a),x:e,y:i,width:d,height:s,stroke:"none",fill:t[p],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}},{key:"renderHorizontalStripes",value:function(e){var t=this.props.horizontalFill;if(!t||!t.length)return null;var a=this.props,o=a.fillOpacity,n=a.x,i=a.y,l=a.width,s=a.height,c=e.map(function(e){return Math.round(e+i-i)}).sort(function(e,t){return e-t});i!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:i+s-e;if(d<=0)return null;var p=a%t.length;return r.createElement("rect",{key:"react-".concat(a),y:e,x:n,height:d,width:l,stroke:"none",fill:t[p],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var t=this.props,a=t.fillOpacity,o=t.x,n=t.y,i=t.width,l=t.height;return r.createElement("rect",{x:o,y:n,width:i,height:l,stroke:"none",fill:e,fillOpacity:a,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,o=e.width,l=e.height,s=e.horizontal,c=e.vertical,d=e.horizontalCoordinatesGenerator,p=e.verticalCoordinatesGenerator,m=e.xAxis,h=e.yAxis,f=e.offset,y=e.chartWidth,g=e.chartHeight,x=e.syncWithTicks,A=e.horizontalValues,b=e.verticalValues;if(!(0,i.hj)(o)||o<=0||!(0,i.hj)(l)||l<=0||!(0,i.hj)(t)||t!==+t||!(0,i.hj)(a)||a!==+a)return null;var v=this.props,j=v.horizontalPoints,k=v.verticalPoints;if((!j||!j.length)&&n()(d)){var T=A&&A.length;j=d({yAxis:h?u(u({},h),{},{ticks:T?A:h.ticks}):void 0,width:y,height:g,offset:f},!!T||x)}if((!k||!k.length)&&n()(p)){var C=b&&b.length;k=p({xAxis:m?u(u({},m),{},{ticks:C?b:m.ticks}):void 0,width:y,height:g,offset:f},!!C||x)}return r.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),s&&this.renderHorizontal(j),c&&this.renderVertical(k),s&&this.renderHorizontalStripes(j),c&&this.renderVerticalStripes(k))}}],o=[{key:"renderLineItem",value:function(e,t){var a;if(r.isValidElement(e))a=r.cloneElement(e,t);else if(n()(e))a=e(t);else{var o=t.x1,i=t.y1,d=t.x2,h=t.y2,u=t.key,f=m(t,s),y=(0,l.L6)(f),g=(y.offset,m(y,c));a=r.createElement("line",p({},g,{x1:o,y1:i,x2:d,y2:h,fill:"none",key:u}))}return a}}],a&&f(x.prototype,a),o&&f(x,o),Object.defineProperty(x,"prototype",{writable:!1}),x}(r.PureComponent);x(b,"displayName","CartesianGrid"),x(b,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},80350:function(e,t,a){"use strict";a.d(t,{A:function(){return l}});var r=a(27378),o=a(44432),n=a(61566);let i=`
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
`,l={type:"code",component:function(){return r.createElement(o.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},61566:function(e,t,a){"use strict";a.d(t,{$o:function(){return s},Mm:function(){return d},aT:function(){return r},n1:function(){return n},op:function(){return o},ux:function(){return l},xo:function(){return c},zW:function(){return i}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,n=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:-80},{date:"Mar 25",Apples:40},{date:"Mar 26",Apples:-40},{date:"Mar 27",Apples:80}],i=`
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
    Apples: -80,
  },
  {
    date: 'Mar 25',
    Apples: 40,
  },
  {
    date: 'Mar 26',
    Apples: -40,
  },
  {
    date: 'Mar 27',
    Apples: 80,
  },
];
`,l=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],s=`
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
`,c=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],d=`
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
`},44432:function(e,t,a){"use strict";a.d(t,{T:function(){return D}});var r=a(27378),o=a(68871),n=a(97879),i=a(9911),l=a(290),s=a(46246),c=a(38616),d=a(32529),p=a(26299),m=a(44460),h=a(83453),u=a(89738),f=a(20410),y=a(96739),g=a(2256),x=a(5564),A=a(6231),b=a(56589),v=a(3525),j=a(96688),k=a(65923);function T({offset:e,id:t,colors:a,fillOpacity:o}){let n=(0,g.rZ)();return r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:e,stopColor:(0,u.p)(a[0],n),stopOpacity:o??.2}),r.createElement("stop",{offset:e,stopColor:(0,u.p)(a[1],n),stopOpacity:o??.2}))}T.displayName="@mantine/charts/AreaSplit";var C=a(51010);function O(e){return`${(100*e).toFixed(0)}%`}let w={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},E=(0,h.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,u.p)(t,e):void 0,"--chart-grid-color":a?(0,u.p)(a,e):void 0}})),D=(0,f.d)((e,t)=>{let a=(0,y.w)("AreaChart",w,e),{classNames:h,className:f,style:D,styles:N,unstyled:P,vars:M,data:K,series:S,withGradient:V,dataKey:L,withXAxis:W,withYAxis:I,curveType:z,gridProps:_,withDots:F,tickLine:B,strokeDasharray:U,gridAxis:G,unit:R,yAxisProps:$,xAxisProps:X,dotProps:Y,activeDotProps:Z,strokeWidth:H,tooltipAnimationDuration:q,type:Q,legendProps:J,tooltipProps:ee,withLegend:et,withTooltip:ea,areaChartProps:er,fillOpacity:eo,splitColors:en,splitOffset:ei,connectNulls:el,onMouseLeave:es,orientation:ec,referenceLines:ed,...ep}=a,em=(0,g.rZ)(),eh=(0,r.useId)(),eu=`${eh}-split`,ef=(q||0)>0,ey="boolean"==typeof V?V:"default"===Q,eg="stacked"===Q||"percent"===Q,[ex,eA]=(0,r.useState)(null),eb=null!==ex,{resolvedClassNames:ev,resolvedStyles:ej}=(0,x.h)({classNames:h,styles:N,props:a}),ek=(0,A.y)({name:"AreaChart",classes:C.Z,props:a,className:f,style:D,classNames:h,styles:N,unstyled:P,vars:M,varsResolver:E}),eT=S.map(e=>{let t=(0,u.p)(e.color,em),a=eb&&ex!==e.name;return r.createElement(o.u,{...ek("area"),activeDot:{fill:em.white,stroke:t,strokeWidth:2,r:4,...Z},dot:{fill:t,fillOpacity:a?0:1,strokeWidth:2,r:4,...Y},key:e.name,name:e.name,type:z,dataKey:e.name,fill:"none",strokeWidth:H,stroke:"none",isAnimationActive:!1,connectNulls:el,stackId:eg?"stack-dots":void 0})}),eC=S.map(e=>{let t=`${eh}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,a=(0,u.p)(e.color,em),n=eb&&ex!==e.name;return r.createElement(r.Fragment,{key:e.name},r.createElement("defs",null,r.createElement(k.v,{color:a,withGradient:ey,id:t,fillOpacity:eo})),r.createElement(o.u,{...ek("area"),activeDot:!1,dot:!1,name:e.name,type:z,dataKey:e.name,fill:"split"===Q?`url(#${eu})`:`url(#${t})`,strokeWidth:H,stroke:a,isAnimationActive:!1,connectNulls:el,stackId:eg?"stack":void 0,fillOpacity:n?0:1,strokeOpacity:n?.5:1,strokeDasharray:e.strokeDasharray}))}),eO=ed?.map((e,t)=>{let a=u.p(e.color,em);return r.createElement(n.d,{key:t,stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ek("referenceLine")})});return r.createElement(b.x,{ref:t,...ek("root"),onMouseLeave:e=>{eA(null),es?.(e)},...ep},r.createElement(i.h,{...ek("container")},r.createElement(l.T,{data:K,stackOffset:"percent"===Q?"expand":void 0,layout:ec,...er},eO,et&&r.createElement(s.D,{verticalAlign:"top",content:e=>r.createElement(v.Q,{payload:e.payload,onHighlight:eA,legendPosition:J?.verticalAlign||"top",classNames:ev,styles:ej}),height:44,...J}),r.createElement(c.q,{strokeDasharray:U,vertical:"y"===G||"xy"===G,horizontal:"x"===G||"xy"===G,...ek("grid"),..._}),r.createElement(d.K,{hide:!W,..."vertical"===ec?{type:"number"}:{dataKey:L},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==G&&("x"===B||"xy"===B))&&{stroke:"currentColor"},minTickGap:5,...ek("axis"),...X}),r.createElement(p.B,{hide:!I,axisLine:!1,..."vertical"===ec?{dataKey:L,type:"category"}:{type:"number"},tickLine:!!("none"!==G&&("y"===B||"xy"===B))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:R,tickFormatter:"percent"===Q?O:void 0,...ek("axis"),...$}),ea&&r.createElement(m.u,{animationDuration:q,isAnimationActive:ef,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:U},content:({label:e,payload:t})=>r.createElement(j.h,{label:e,payload:t,unit:R,classNames:ev,styles:ej}),...ee}),"split"===Q&&r.createElement("defs",null,r.createElement(T,{colors:en,id:eu,offset:ei??function({data:e,series:t}){if(1===t.length){let a=t[0].name;return function({data:e,dataKey:t}){let a=Math.max(...e.map(e=>e[t])),r=Math.min(...e.map(e=>e[t]));return a<=0?0:r>=0?1:a/(a-r)}({data:e,dataKey:a})}return .5}({data:K,series:S}),fillOpacity:eo})),eC,F&&eT)))});D.classes=C.Z,D.displayName="@mantine/charts/AreaChart"},65923:function(e,t,a){"use strict";a.d(t,{v:function(){return o}});var r=a(27378);function o({color:e,id:t,withGradient:a,fillOpacity:o}){return r.createElement(r.Fragment,null,a?r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:"0%",stopColor:e,stopOpacity:o}),r.createElement("stop",{offset:"100%",stopColor:e,stopOpacity:.01})):r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{stopColor:e,stopOpacity:o??.2})))}o.displayName="@mantine/charts/AreaGradient"},3525:function(e,t,a){"use strict";a.d(t,{Q:function(){return p}});var r=a(27378),o=a(20410),n=a(96739),i=a(6231),l=a(16202),s=a(56589),c={legend:"m-847eaf",legendItem:"m-17da7e62",legendItemName:"m-8ff56c0d"};let d={},p=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartLegend",d,e),{classNames:o,className:p,style:m,styles:h,unstyled:u,vars:f,payload:y,onHighlight:g,legendPosition:x,...A}=a,b=(0,i.y)({name:"ChartLegend",classes:c,props:a,className:p,style:m,classNames:o,styles:h,unstyled:u});if(!y)return null;let v=y.filter(e=>"none"!==e.color),j=v.map((e,t)=>r.createElement("div",{key:t,...b("legendItem"),onMouseEnter:()=>g(e.dataKey),onMouseLeave:()=>g(null)},r.createElement(l.b,{color:e.color,size:12,...b("legendItemColor"),withShadow:!1}),r.createElement("p",{...b("legendItemName")},e.dataKey)));return r.createElement(s.x,{ref:t,mod:{position:x},...b("legend"),...A},j)});p.displayName="@mantine/charts/ChartLegend"},96688:function(e,t,a){"use strict";a.d(t,{h:function(){return m},X:function(){return d}});var r=a(27378),o=a(20410),n=a(96739),i=a(6231),l=a(16202),s=a(56589),c={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function d(e){return e.filter(e=>"none"!==e.fill)}let p={},m=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartTooltip",p,e),{classNames:o,className:m,style:h,styles:u,unstyled:f,vars:y,payload:g,label:x,unit:A,...b}=a,v=(0,i.y)({name:"ChartTooltip",classes:c,props:a,className:m,style:h,classNames:o,styles:u,unstyled:f});if(!g)return null;let j=d(g),k=j.map(e=>r.createElement("div",{key:e.name,...v("tooltipItem")},r.createElement("div",{...v("tooltipItemBody")},r.createElement(l.b,{color:e.color,size:12,...v("tooltipItemColor"),withShadow:!1}),r.createElement("div",{...v("tooltipItemName")},e.name)),r.createElement("div",{...v("tooltipItemData")},e.payload[e.dataKey],A)));return r.createElement(s.x,{...v("tooltip"),ref:t,...b},x&&r.createElement("div",{...v("tooltipLabel")},x),r.createElement("div",{...v("tooltipBody")},k))});m.displayName="@mantine/charts/ChartTooltip"},51010:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var r={root:"m-a50f3e58",container:"m-af9188cb",grid:"m-a50a48bc",axis:"m-a507a517"}}},function(e){e.O(0,[30370,58425,290,15819,2775,49774,92888,40179],function(){return e(e.s=29881)}),_N_E=e.O()}]);