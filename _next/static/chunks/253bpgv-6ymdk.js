(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,491607,a=>{"use strict";var e=a.i(648863);let t=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],o=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`,r=[{item:"TaxRate","Effective tax rate in %":21,color:"blue"},{item:"Foreign inc.","Effective tax rate in %":-15.5,color:"teal"},{item:"Perm. diff.","Effective tax rate in %":-3,color:"teal"},{item:"Credits","Effective tax rate in %":-3,color:"teal"},{item:"Loss carryf. ","Effective tax rate in %":-2,color:"teal"},{item:"Law changes","Effective tax rate in %":2,color:"red"},{item:"Reven. adj.","Effective tax rate in %":4,color:"red"},{item:"ETR","Effective tax rate in %":3.5,color:"blue",standalone:!0}],n=`
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
`,l=[{month:"January",Smartphones:1200,Laptops:900,Tablets:0},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:0,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:0,Tablets:1200},{month:"June",Smartphones:0,Laptops:600,Tablets:1e3}],s=`export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 0 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 0, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 0, Tablets: 1200 },
  { month: 'June', Smartphones: 0, Laptops: 600, Tablets: 1000 },
];`,i=[{month:"January",Smartphones:1200,Laptops:500,Tablets:800},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:1800,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:200,Tablets:700},{month:"June",Smartphones:800,Laptops:500,Tablets:200}],m=`export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 500, Tablets: 800 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 1800, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 200, Tablets: 700 },
  { month: 'June', Smartphones: 800, Laptops: 500, Tablets: 200 },
];`,c=[{you:5,average:3,index:"1"},{you:7,average:9,index:"2"},{you:8,average:5,index:"3"},{you:3,average:6,index:"4"},{you:2,average:4,index:"5"},{you:6,average:8,index:"6"},{you:4,average:7,index:"7"},{you:9,average:2,index:"8"}],p=`export const data = [
  { you: 5, average: 3, index: '1' },
  { you: 7, average: 9, index: '2' },
  { you: 8, average: 5, index: '3' },
  { you: 3, average: 6, index: '4' },
  { you: 2, average: 4, index: '5' },
  { you: 6, average: 8, index: '6' },
  { you: 4, average: 7, index: '7' },
  { you: 9, average: 2, index: '8' },
];`;var d=a.i(391398),h=a.i(520916),u=a.i(577596),f=a.i(314579),x=a.i(979298),b=a.i(232471),y=a.i(481178),g=a.i(275519),v=a.i(317477),L=a.i(951254),S=a.i(44091),T=a.i(62904),C=a.i(391466),B=a.i(57699),D=a.i(191788),N=a.i(471970),k=a.i(437515),j=["axis","item"],K=(0,D.forwardRef)((a,e)=>D.createElement(k.CartesianChart,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:j,tooltipPayloadSearcher:N.arrayTooltipSearcher,categoricalChartProps:a,ref:e})),A=a.i(526626),w=a.i(905e3),P=a.i(301426),M=a.i(881264),I=a.i(355345),E=a.i(86443),F=a.i(723451),R=a.i(694713),z=a.i(756902),V=a.i(976835);function J(a){return`${(100*a).toFixed(0)}%`}let O={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default",accessibilityLayer:!0},W=(0,y.createVarsResolver)((a,{textColor:e,gridColor:t,cursorFill:o,barLabelColor:r})=>({root:{"--chart-text-color":e?(0,v.getThemeColor)(e,a):void 0,"--chart-grid-color":t?(0,v.getThemeColor)(t,a):void 0,"--chart-cursor-fill":o?(0,v.getThemeColor)(o,a):void 0,"--chart-bar-label-color":r?(0,v.getThemeColor)(r,a):void 0}})),U=(0,g.factory)(a=>{let e,t,o=(0,S.useProps)("BarChart",O,a),{classNames:r,className:n,style:l,styles:s,unstyled:i,vars:m,data:c,withLegend:p,legendProps:y,series:g,onMouseLeave:N,dataKey:k,withTooltip:j,withXAxis:U,withYAxis:_,gridAxis:G,tickLine:Q,xAxisProps:X,yAxisProps:Y,unit:$,tooltipAnimationDuration:Z,strokeDasharray:H,gridProps:q,tooltipProps:aa,referenceLines:ae,fillOpacity:at,barChartProps:ao,type:ar,orientation:an,dir:al,valueFormatter:as,children:ai,barProps:am,xAxisLabel:ac,yAxisLabel:ap,withBarValueLabel:ad,valueLabelProps:ah,withRightYAxis:au,rightYAxisLabel:af,rightYAxisProps:ax,minBarSize:ab,maxBarWidth:ay,mod:ag,getBarColor:av,gridColor:aL,textColor:aS,attributes:aT,accessibilityLayer:aC,withBrush:aB,brushProps:aD,...aN}=o,ak=(0,L.useMantineTheme)(),[aj,aK]=(0,D.useState)(null),aA=null!==aj,aw="stacked"===ar||"percent"===ar,aP="percent"===ar?J:as,{resolvedClassNames:aM,resolvedStyles:aI}=(0,T.useResolvedStylesApi)({classNames:r,styles:s,props:o}),aE="waterfall"===ar?(e=0,t=0,c.map(a=>{if(a.standalone)for(let e in a)"number"==typeof a[e]&&e!==k&&(a[e]=[0,a[e]]);else for(let o in a)"number"==typeof a[o]&&o!==k&&(t+=a[o],a[o]=[e,t],e=t);return a})):c,aF=(0,C.useStyles)({name:"BarChart",classes:x.default,props:o,className:n,style:l,classNames:r,styles:s,unstyled:i,attributes:aT,vars:m,varsResolver:W}),aR=g.map(a=>{let e=(0,v.getThemeColor)(a.color,ak),t=aA&&aj!==a.name,o="function"==typeof am?am(a):am,r=o?.shape;return(0,D.createElement)(B.Bar,{...aF("bar"),key:a.name,name:a.name,dataKey:a.name,fill:e,stroke:e,isAnimationActive:!1,fillOpacity:t?.1:at,strokeOpacity:.2*!!t,stackId:aw?"stack":a.stackId||void 0,yAxisId:a.yAxisId||void 0,minPointSize:ab,...o,shape:t=>{let o=t.payload,n=o?.color?(0,v.getThemeColor)(o.color,ak):"function"==typeof av?(0,v.getThemeColor)(av(o?.[a.name],a),ak):("function"==typeof am?am(a).fill:am?.fill)||e,l={...t,fill:n};return"function"==typeof r?r(l):D.default.isValidElement(r)?D.default.cloneElement(r,l):"object"==typeof r&&r?(0,d.jsx)(I.Rectangle,{...l,...r}):(0,d.jsx)(I.Rectangle,{...l})}},ad&&(0,d.jsx)(P.LabelList,{position:"vertical"===an?"right":"top",fontSize:12,fill:"var(--chart-bar-label-color, var(--mantine-color-dimmed))",formatter:a=>aP?.(a),..."function"==typeof ah?ah(a):ah}))}),az=ae?.map((a,e)=>{let t=(0,v.getThemeColor)(a.color,ak);return(0,d.jsx)(E.ReferenceLine,{stroke:a.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:a.yAxisId||void 0,...a,label:{fill:a.color?t:"currentColor",fontSize:12,position:a.labelPosition??"insideBottomLeft",..."object"==typeof a.label?a.label:{value:a.label}},...aF("referenceLine")},e)}),aV={axisLine:!1,..."vertical"===an?{dataKey:k,type:"category"}:{type:"number"},tickLine:"none"!==G&&("y"===Q||"xy"===Q)&&{stroke:"currentColor"},allowDecimals:!0,unit:$,tickFormatter:"vertical"===an?void 0:aP,...aF("axis")};return(0,d.jsx)(b.Box,{...aF("root"),onMouseLeave:a=>{aK(null),N?.(a)},dir:al||"ltr",mod:[{orientation:an},ag],...aN,children:(0,d.jsx)(F.ResponsiveContainer,{...aF("container"),children:(0,d.jsxs)(K,{data:aE,stackOffset:"percent"===ar?"expand":void 0,layout:an,maxBarSize:ay,margin:{bottom:ac?30:void 0,left:ap?10:void 0,right:ap?5:void 0},accessibilityLayer:aC,...ao,children:[p&&(0,d.jsx)(M.Legend,{verticalAlign:"top",content:a=>(0,d.jsx)(u.ChartLegend,{payload:a.payload,onHighlight:aK,legendPosition:y?.verticalAlign||"top",classNames:aM,styles:aI,series:g,showColor:"waterfall"!==ar,attributes:aT}),...y}),(0,d.jsxs)(z.XAxis,{hide:!U,..."vertical"===an?{type:"number"}:{dataKey:k},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==G&&("x"===Q||"xy"===Q)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===an?aP:void 0,...aF("axis"),...X,children:[ac&&(0,d.jsx)(w.Label,{position:"insideBottom",offset:-20,fontSize:12,...aF("axisLabel"),children:ac}),X?.children]}),(0,d.jsxs)(V.YAxis,{orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!_,...aV,...Y,children:[ap&&(0,d.jsx)(w.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...aF("axisLabel"),children:ap}),Y?.children]}),(0,d.jsxs)(V.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!au,...aV,...ax,children:[af&&(0,d.jsx)(w.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...aF("axisLabel"),children:af}),Y?.children]}),(0,d.jsx)(A.CartesianGrid,{strokeDasharray:H,vertical:"y"===G||"xy"===G,horizontal:"x"===G||"xy"===G,...aF("grid"),...q}),j&&(0,d.jsx)(R.Tooltip,{animationDuration:Z,isAnimationActive:0!==Z,position:"vertical"===an?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:H,fill:"var(--chart-cursor-fill)"},content:({label:a,payload:e,labelFormatter:t})=>(0,d.jsx)(h.ChartTooltip,{label:t&&e?t(a,e):a,payload:e,type:"waterfall"===ar?"scatter":void 0,unit:$,classNames:aM,styles:aI,series:g,valueFormatter:as,attributes:aT}),...aa}),aR,az,aB&&(0,d.jsx)(f.ChartBrush,{dataKey:k,classNames:aM,styles:aI,...aD}),ai]})})})});U.displayName="@mantine/charts/BarChart",U.classes=x.default,U.varsResolver=W;let _={type:"configurator",component:function(a){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],...a})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"__",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0}]},G={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},Q={type:"configurator",component:function(a){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",series:[{name:"Smartphones",color:a.color}],...a})},code:[{code:a=>`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'Smartphones', color: '${a.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"number",prop:"fillOpacity",initialValue:1,libraryValue:"__",min:0,max:1,step:.01}]},X={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",className:"m_ad75446c",series:[{name:"Smartphones",color:"var(--bar-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:o,language:"tsx",fileName:"data.ts"}]};var Y=a.i(470743),$=a.i(883364);function Z({label:a,payload:e}){return e?(0,d.jsxs)(Y.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,d.jsx)($.Text,{fw:500,mb:5,children:a}),e.map(a=>(0,d.jsxs)($.Text,{c:a.color,fz:"sm",children:[a.name,": ",a.value]},a.name))]}):null}let H={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",tooltipProps:{content:({label:a,payload:e})=>(0,d.jsx)(Z,{label:a,payload:e})},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  label: React.ReactNode;
  payload: readonly Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md">
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},q={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",className:"m_cb37bd9a",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},aa={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",withLegend:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ae={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},at={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",withTooltip:!1,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ao={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",referenceLines:[{y:1130,color:"red.5",label:"Profit reached",labelPosition:"insideTopRight"}],series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ar={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",strokeDasharray:"15 15",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},an={type:"code",component:function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)($.Text,{mb:"md",pl:"md",children:"Smartphones sales:"}),(0,d.jsx)(U,{h:180,data:t,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"}],barChartProps:{syncId:"tech"}}),(0,d.jsx)($.Text,{mb:"md",pl:"md",mt:"xl",children:"Laptops sales:"}),(0,d.jsx)(U,{h:180,data:t,dataKey:"month",barChartProps:{syncId:"tech"},series:[{name:"Laptops",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},al={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",tooltipAnimationDuration:200,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},as={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",unit:"$",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ai={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},am={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",yAxisProps:{domain:[0,250]},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ac={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",type:"stacked",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ap={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:r,dataKey:"item",type:"waterfall",series:[{name:"Effective tax rate in %",color:"blue"}],withLegend:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},ad={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",type:"percent",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ah={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",type:"stacked",orientation:"vertical",yAxisProps:{width:80},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},au={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Smartphones",label:"Phone sales",color:"violet.6"},{name:"Laptops",label:"Laptop sales",color:"blue.6"},{name:"Tablets",label:"Tablet sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},af={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",valueFormatter:a=>new Intl.NumberFormat("en-US").format(a),series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ax={type:"code",component:function(){return(0,d.jsx)(U,{h:200,data:t,dataKey:"month",orientation:"vertical",yAxisProps:{width:80},barProps:{radius:10},series:[{name:"Smartphones",color:"blue.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ab={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ay={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",valueFormatter:a=>new Intl.NumberFormat("en-US").format(a),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ag={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:l,dataKey:"month",minBarSize:10,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      minBarSize={10}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},av={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:i,dataKey:"month",series:[{name:"Smartphones",color:"violet.6",stackId:"a"},{name:"Laptops",color:"blue.6",stackId:"b"},{name:"Tablets",color:"teal.6",stackId:"b"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},aL={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:i,dataKey:"month",series:[{name:"Smartphones",color:"url(#crosshatch)",stackId:"a"},{name:"Laptops",color:"blue.6",stackId:"b"},{name:"Tablets",color:"url(#diagonalStripes)",stackId:"b"}],children:(0,d.jsxs)("defs",{children:[(0,d.jsx)("pattern",{id:"diagonalStripes",patternUnits:"userSpaceOnUse",width:6,height:8,patternTransform:"rotate(45)",children:(0,d.jsx)("rect",{width:"2",height:"8",transform:"translate(0,0)",fill:"color-mix(in lch, var(--mantine-color-teal-6) 70%, rgba(0,0,0,0))"})}),(0,d.jsxs)("pattern",{id:"crosshatch",patternUnits:"userSpaceOnUse",width:8,height:8,children:[(0,d.jsx)("path",{d:"M 0 0 L 8 0 L 8 8 L 0 8 Z",fill:"none",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"}),(0,d.jsx)("path",{d:"M 0 0 L 8 8",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"}),(0,d.jsx)("path",{d:"M 8 0 L 0 8",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"})]})]})})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={mixedStackData}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'url(#crosshatch)', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'url(#diagonalStripes)', stackId: 'b' },
      ]}
    >
      <defs>
        <pattern
          id="diagonalStripes"
          patternUnits="userSpaceOnUse"
          width={6}
          height={8}
          patternTransform="rotate(45)"
        >
          <rect
            width="2"
            height="8"
            transform="translate(0,0)"
            fill="color-mix(in lch, var(--mantine-color-teal-6) 70%, rgba(0,0,0,0))"
          />
        </pattern>

        <pattern id="crosshatch" patternUnits="userSpaceOnUse" width={8} height={8}>
          <path
            d="M 0 0 L 8 0 L 8 8 L 0 8 Z"
            fill="none"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 0 0 L 8 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 8 0 L 0 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
        </pattern>
      </defs>
    </BarChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]};var aS={root:"m_661936e7",bar:"m_c97c716e"},aT=a.i(839608);let aC={type:"code",component:function(){let a=(0,aT.useMediaQuery)("(min-width: 48em)")?42:26,e=.5*a;return(0,d.jsx)(U,{h:300,data:c,dataKey:"index",barChartProps:{barGap:-((a+e)/2)},barProps:t=>({barSize:"you"===t.name?a:e}),classNames:aS,series:[{name:"you",color:"var(--you-bar-color)"},{name:"average",color:"var(--average-bar-color)"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import classes from './Demo.module.css';
import { data } from './data';

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --average-bar-color: var(--mantine-color-dark-8);
    --you-bar-color: var(--mantine-color-blue-3);
  }

  @mixin dark {
    --you-bar-color: var(--mantine-color-blue-8);
    --average-bar-color: var(--mantine-color-gray-4);
  }
}

.bar {
  transform: translateX(-1.5px);
}
`,language:"scss",fileName:"Demo.module.css"},{code:p,language:"tsx",fileName:"data.ts"}]},aB={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",getBarColor:a=>a>700?"teal.8":"red.8",series:[{name:"Laptops",color:"gray.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      series={[{ name: 'Laptops', color: 'gray.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},aD={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",valueFormatter:a=>new Intl.NumberFormat("en-US").format(a),withBarValueLabel:!0,valueLabelProps:{position:"inside",fill:"white",fontSize:8},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
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
      valueLabelProps={{ position: 'inside', fill: 'white', fontSize: 8 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var aN=a.i(980667);let ak={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:t,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],children:(0,d.jsx)(aN.ReferenceArea,{x1:"January",x2:"March",y1:0,y2:1250,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Q1 sales threshold",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
import { ReferenceArea } from 'recharts';
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
    >
      <ReferenceArea
        x1="January"
        x2="March"
        y1={0}
        y2={1250}
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Q1 sales threshold',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </BarChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},aj=[{month:"Jan",Smartphones:1200,Laptops:900},{month:"Feb",Smartphones:1400,Laptops:1e3},{month:"Mar",Smartphones:1300,Laptops:1100},{month:"Apr",Smartphones:1600,Laptops:1200},{month:"May",Smartphones:1500,Laptops:1300},{month:"Jun",Smartphones:1800,Laptops:1250},{month:"Jul",Smartphones:2e3,Laptops:1400},{month:"Aug",Smartphones:1900,Laptops:1500},{month:"Sep",Smartphones:1700,Laptops:1450},{month:"Oct",Smartphones:2100,Laptops:1600},{month:"Nov",Smartphones:2300,Laptops:1700},{month:"Dec",Smartphones:2500,Laptops:1800}],aK={type:"code",component:function(){return(0,d.jsx)(U,{h:300,data:aj,dataKey:"month",withBrush:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"}]})},code:`
import { BarChart } from '@mantine/charts';

const data = [
  { month: 'Jan', Smartphones: 1200, Laptops: 900 },
  { month: 'Feb', Smartphones: 1400, Laptops: 1000 },
  /* ...other data points */
];

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withBrush
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
      ]}
    />
  );
}
`};var aA=(0,e.__exportAll)({axisLabels:()=>ab,axisProps:()=>G,barProps:()=>ax,barValueLabel:()=>ay,brush:()=>aK,color:()=>Q,colorSchemeColor:()=>X,customTooltip:()=>H,getBarColor:()=>aB,gridColor:()=>q,legend:()=>aa,legendPosition:()=>ae,minBarSize:()=>ag,mixedStack:()=>av,noTooltip:()=>at,overlay:()=>aC,percent:()=>ad,referenceArea:()=>ak,referenceLines:()=>ao,seriesLabels:()=>au,stacked:()=>ac,stripes:()=>aL,strokeDasharray:()=>ar,sync:()=>an,tooltipAnimation:()=>al,unit:()=>as,usage:()=>_,valueFormatter:()=>af,valueLabelProps:()=>aD,vertical:()=>ah,waterfall:()=>ap,xAxisOffset:()=>ai,yScale:()=>am});a.s(["BarChartDemos",0,aA],491607)}]);