(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26418],{29881:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/area-chart",function(){return a(58707)}])},58707:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ex}});var r=a(24246),o=a(71670),n=a(27378),i=a(44432),s=a(61566);let l=`
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
`,c={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]};var d=a(80350);let p=`
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
`,m={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"percent",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:p,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},h=`
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
`,u={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.n1,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}]})},code:[{code:h,language:"tsx",fileName:"Demo.tsx"},{code:s.zW,language:"tsx",fileName:"data.ts"}]},f=`
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
`,g={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.n1,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}],splitColors:["violet","orange"]})},code:[{code:f,language:"tsx",fileName:"Demo.tsx"},{code:s.zW,language:"tsx",fileName:"data.ts"}]},x=`
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
`,y={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:x,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},b=`
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
`,j={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:b,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var v=a(5496);let A=`
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
`,T={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:s.ux,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:A,language:"tsx",fileName:"Demo.tsx"},{code:s.$o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},k=`
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
`,C={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:k,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},O=`
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
`,w={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:O,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},D=`
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
`,P={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:D,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]},N=`
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
`,E={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tickLine:"xy",xAxisProps:{angle:-20},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:N,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var K=a(20507);let S={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},V=`.root {
  @mixin light {
    --area-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --area-color: var(--mantine-color-lime-4);
  }
}
`,W=`
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
`,L={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",className:"m-13521d26",series:[{name:"Apples",color:"var(--area-color)"}]})},code:[{code:W,language:"tsx",fileName:"Demo.tsx"},{code:V,language:"scss",fileName:"Demo.module.css"},{code:s.op,language:"tsx",fileName:"data.ts"}]},z=`
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
`,_={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:z,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},F=`
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
`,U=`
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
`,I={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",className:"m-3587e220",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:F,language:"scss",fileName:"Demo.module.css"},{code:U,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},B=`
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
`,R={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:B,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},M=`
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
`,Y={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:M,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var G=a(96688),X=a(98477),Text=a(26569);let H=`
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
`;function $({label:e,payload:t}){return t?n.createElement(X.X,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md"},n.createElement(Text.x,{fw:500,mb:5},e),(0,G.X)(t).map(e=>n.createElement(Text.x,{key:e.name,c:e.color,fz:"sm"},e.name,": ",e.value))):null}let q={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",tooltipProps:{content:({label:e,payload:t})=>n.createElement($,{label:e,payload:t})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:H,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},Z=`
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
`,J={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:Z,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},Q=`
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
`,ee={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:Q,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},et=`
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
`,ea={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:et,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},er=`
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
`,eo={type:"configurator",component:function(e){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Tomatoes",color:"teal.6"},{name:"Oranges",color:"blue.6"}],...e})},code:[{code:er,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"type",initialValue:"default",libraryValue:"default",transformLabel:!1,data:[{value:"default",label:"default"},{value:"stacked",label:"stacked"}]},{type:"number",prop:"fillOpacity",initialValue:.2,libraryValue:null,step:.01,min:0,max:1},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},en=`
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
`,ei={type:"code",component:function(){return n.createElement(n.Fragment,null,n.createElement(Text.x,{mb:"md",pl:"md"},"Apples sales:"),n.createElement(i.T,{h:180,data:s.aT,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],areaChartProps:{syncId:"groceries"}}),n.createElement(Text.x,{mb:"md",pl:"md",mt:"xl"},"Tomatoes sales:"),n.createElement(i.T,{h:180,data:s.aT,dataKey:"date",areaChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]}))},code:[{code:en,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},es=`
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
`,el={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:es,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},ec=`
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
`,ed={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:ec,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]},ep=`
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
`,em={type:"code",component:function(){return n.createElement(i.T,{h:300,data:s.xo,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:ep,language:"tsx",fileName:"Demo.tsx"},{code:s.Mm,language:"tsx",fileName:"data.ts"}]};var eh=a(3916),eu=a(54568);let ef=(0,eh.A)(eu.us.AreaChart);function eg(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"AreaChart"})," component without ",(0,r.jsx)(t.code,{children:"type"})," prop to render a regular area chart.\nIn a regular area chart, each data series is plotted on its own and does\nnot interact with other series."]}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"stacked-area-chart",children:"Stacked area chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="stacked"'})," to render a stacked area chart. In this type of area chart\nstacking is applied along the vertical axis, allowing you to see the overall trend\nas well as the contribution of each individual series to the total."]}),"\n",(0,r.jsx)(a,{data:d.A}),"\n",(0,r.jsx)(t.h2,{id:"percent-area-chart",children:"Percent area chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="percent"'})," to render a percent area chart. In this type of area chart\nthe y-axis scale is always normalized to 100%, making it easier to compare the\ncontribution of each series in terms of percentages."]}),"\n",(0,r.jsx)(a,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"split-area-chart",children:"Split area chart"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="split"'})," to render a split area chart. In this type of area chart\nfill color is split into two colors, one for positive values and one for negative\nvalues. Split area chart supports only one data series."]}),"\n",(0,r.jsx)(a,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"split-colors",children:"Split colors"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"splitColors"})," prop to an array of two colors to customize the fill color of\nsplit area chart. The first color is used for positive values and the second color\nfor negative values. ",(0,r.jsx)(t.code,{children:"splitColors"})," prop is ignored in other types of area charts."]}),"\n",(0,r.jsx)(a,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(t.p,{children:["To display chart legend, set ",(0,r.jsx)(t.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,r.jsx)(a,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"legendProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,r.jsx)(a,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,r.jsxs)(t.p,{children:["By default, series ",(0,r.jsx)(t.code,{children:"name"})," is used as a label. To change it, set ",(0,r.jsx)(t.code,{children:"label"}),"\nproperty in ",(0,r.jsx)(t.code,{children:"series"})," object:"]}),"\n",(0,r.jsx)(a,{data:v.Z}),"\n",(0,r.jsx)(t.h2,{id:"connect-nulls",children:"Connect nulls"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"connectNulls"})," prop to specify whether to connect a data point across null\npoints. By default, ",(0,r.jsx)(t.code,{children:"connectNulls"})," is ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(a,{data:T}),"\n",(0,r.jsx)(t.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," and ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,r.jsx)(a,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,r.jsx)(a,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,r.jsx)(t.code,{children:"[0, 100]"}),":"]}),"\n",(0,r.jsx)(a,{data:P}),"\n",(0,r.jsx)(t.h2,{id:"rotate-x-axis-labels",children:"Rotate x-axis labels"}),"\n",(0,r.jsxs)(t.p,{children:["To rotate x-axis labels, set ",(0,r.jsx)(t.code,{children:"xAxisProps.angle"})," to a number of degrees to rotate:"]}),"\n",(0,r.jsx)(a,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(t.p,{children:["To format values in the tooltip and axis ticks, use ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,r.jsx)(a,{data:K.w}),"\n",(0,r.jsx)(t.h2,{id:"area-color",children:"Area color"}),"\n",(0,r.jsxs)(t.p,{children:["You can reference colors from ",(0,r.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,r.jsx)(t.code,{children:"blue"}),", ",(0,r.jsx)(t.code,{children:"red.5"}),", ",(0,r.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,r.jsx)(a,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,r.jsxs)(t.p,{children:["You can use CSS variables in ",(0,r.jsx)(t.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,r.jsx)(a,{data:L}),"\n",(0,r.jsx)(t.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,r.jsx)(t.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,r.jsx)(a,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"--chart-grid-color"})," and ",(0,r.jsx)(t.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,r.jsx)(t.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,r.jsx)(a,{data:I}),"\n",(0,r.jsxs)(t.p,{children:["If your application has only one color scheme, you can use ",(0,r.jsx)(t.code,{children:"gridColor"})," and ",(0,r.jsx)(t.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { AreaChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <AreaChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      type=\"stacked\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6' },\n        { name: 'Oranges', color: 'blue.6' },\n        { name: 'Tomatoes', color: 'teal.6' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,r.jsx)(t.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,r.jsx)(a,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,r.jsx)(a,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,r.jsx)(t.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,r.jsx)(a,{data:q}),"\n",(0,r.jsx)(t.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["To remove tooltip, set ",(0,r.jsx)(t.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,r.jsx)(a,{data:J}),"\n",(0,r.jsx)(t.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,r.jsx)(t.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,r.jsx)(a,{data:ee}),"\n",(0,r.jsx)(t.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"strokeWidth"})," prop to control the stroke width of all areas:"]}),"\n",(0,r.jsx)(a,{data:ea}),"\n",(0,r.jsx)(t.h2,{id:"fill-opacity",children:"Fill opacity"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"fillOpacity"})," prop to control the fill opacity of all areas:"]}),"\n",(0,r.jsx)(a,{data:eo}),"\n",(0,r.jsx)(t.h2,{id:"sync-multiple-areacharts",children:"Sync multiple AreaCharts"}),"\n",(0,r.jsxs)(t.p,{children:["You can pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/AreaChart",children:"AreaChart"}),"\ncomponent with ",(0,r.jsx)(t.code,{children:"areaChartProps"})," prop. For example, setting ",(0,r.jsx)(t.code,{children:"areaChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,r.jsx)(t.code,{children:"AreaChart"})," components with the same ",(0,r.jsx)(t.code,{children:"syncId"})," prop."]}),"\n",(0,r.jsx)(a,{data:ei}),"\n",(0,r.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'orientation="vertical"'})," to render a vertical area chart:"]}),"\n",(0,r.jsx)(a,{data:el}),"\n",(0,r.jsx)(t.h2,{id:"dashed-area-line",children:"Dashed area line"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"strokeDasharray"})," property in ",(0,r.jsx)(t.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,r.jsx)(a,{data:ed}),"\n",(0,r.jsx)(t.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,r.jsx)(a,{data:em})]})}function ex(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ef,{...e,children:(0,r.jsx)(eg,{...e})})}},38616:function(e,t,a){"use strict";a.d(t,{q:function(){return j}});var r=a(27378),o=a(28338),n=a.n(o),i=a(90727),s=a(3198),l=["x1","y1","x2","y2","key"],c=["offset"];function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach(function(t){y(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return(t=b(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==d(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(y,e);var t,a,o,h=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=x(y);if(t){var r=x(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function y(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,y),h.apply(this,arguments)}return a=[{key:"renderHorizontal",value:function(e){var t=this,a=this.props,o=a.x,n=a.width,i=a.horizontal;if(!e||!e.length)return null;var s=e.map(function(e,a){var r=u(u({},t.props),{},{x1:o,y1:e,x2:o+n,y2:e,key:"line-".concat(a),index:a});return y.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}},{key:"renderVertical",value:function(e){var t=this,a=this.props,o=a.y,n=a.height,i=a.vertical;if(!e||!e.length)return null;var s=e.map(function(e,a){var r=u(u({},t.props),{},{x1:e,y1:o,x2:e,y2:o+n,key:"line-".concat(a),index:a});return y.renderLineItem(i,r)});return r.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}},{key:"renderVerticalStripes",value:function(e){var t=this.props.verticalFill;if(!t||!t.length)return null;var a=this.props,o=a.fillOpacity,n=a.x,i=a.y,s=a.width,l=a.height,c=e.map(function(e){return Math.round(e+n-n)}).sort(function(e,t){return e-t});n!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:n+s-e;if(d<=0)return null;var p=a%t.length;return r.createElement("rect",{key:"react-".concat(a),x:e,y:i,width:d,height:l,stroke:"none",fill:t[p],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}},{key:"renderHorizontalStripes",value:function(e){var t=this.props.horizontalFill;if(!t||!t.length)return null;var a=this.props,o=a.fillOpacity,n=a.x,i=a.y,s=a.width,l=a.height,c=e.map(function(e){return Math.round(e+i-i)}).sort(function(e,t){return e-t});i!==c[0]&&c.unshift(0);var d=c.map(function(e,a){var d=c[a+1]?c[a+1]-e:i+l-e;if(d<=0)return null;var p=a%t.length;return r.createElement("rect",{key:"react-".concat(a),y:e,x:n,height:d,width:s,stroke:"none",fill:t[p],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return r.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var t=this.props,a=t.fillOpacity,o=t.x,n=t.y,i=t.width,s=t.height;return r.createElement("rect",{x:o,y:n,width:i,height:s,stroke:"none",fill:e,fillOpacity:a,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,o=e.width,s=e.height,l=e.horizontal,c=e.vertical,d=e.horizontalCoordinatesGenerator,p=e.verticalCoordinatesGenerator,m=e.xAxis,h=e.yAxis,f=e.offset,g=e.chartWidth,x=e.chartHeight,y=e.syncWithTicks,b=e.horizontalValues,j=e.verticalValues;if(!(0,i.hj)(o)||o<=0||!(0,i.hj)(s)||s<=0||!(0,i.hj)(t)||t!==+t||!(0,i.hj)(a)||a!==+a)return null;var v=this.props,A=v.horizontalPoints,T=v.verticalPoints;if((!A||!A.length)&&n()(d)){var k=b&&b.length;A=d({yAxis:h?u(u({},h),{},{ticks:k?b:h.ticks}):void 0,width:g,height:x,offset:f},!!k||y)}if((!T||!T.length)&&n()(p)){var C=j&&j.length;T=p({xAxis:m?u(u({},m),{},{ticks:C?j:m.ticks}):void 0,width:g,height:x,offset:f},!!C||y)}return r.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),l&&this.renderHorizontal(A),c&&this.renderVertical(T),l&&this.renderHorizontalStripes(A),c&&this.renderVerticalStripes(T))}}],o=[{key:"renderLineItem",value:function(e,t){var a;if(r.isValidElement(e))a=r.cloneElement(e,t);else if(n()(e))a=e(t);else{var o=t.x1,i=t.y1,d=t.x2,h=t.y2,u=t.key,f=m(t,l),g=(0,s.L6)(f),x=(g.offset,m(g,c));a=r.createElement("line",p({},x,{x1:o,y1:i,x2:d,y2:h,fill:"none",key:u}))}return a}}],a&&f(y.prototype,a),o&&f(y,o),Object.defineProperty(y,"prototype",{writable:!1}),y}(r.PureComponent);y(j,"displayName","CartesianGrid"),y(j,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},5496:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(27378),o=a(44432),n=a(61566);let i=`
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
`,s={type:"code",component:function(){return r.createElement(o.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},80350:function(e,t,a){"use strict";a.d(t,{A:function(){return s}});var r=a(27378),o=a(44432),n=a(61566);let i=`
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
`,s={type:"code",component:function(){return r.createElement(o.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},20507:function(e,t,a){"use strict";a.d(t,{w:function(){return s}});var r=a(27378),o=a(44432),n=a(61566);let i=`
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
`,s={type:"code",component:function(){return r.createElement(o.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}}},function(e){e.O(0,[30370,60898,290,15819,2775,7654,49774,92888,40179],function(){return e(e.s=29881)}),_N_E=e.O()}]);