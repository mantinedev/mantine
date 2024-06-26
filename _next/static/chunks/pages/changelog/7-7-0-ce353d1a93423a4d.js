(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29703],{70257:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-7-0",function(){return n(20697)}])},20697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(52322),o=n(45392),r=n(82877),s=n(61745),i=n(89882),l=n(50636),c=n(58255),d=n(81066),g=n(25071),h=n(15019);let m=(0,g.A)(h.us.Changelog770);function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"virtual-colors",children:"Virtual colors"}),"\n",(0,a.jsxs)(t.p,{children:["Virtual color is a special color which values should be different for light and dark color schemes.\nTo define a virtual color, use ",(0,a.jsx)(t.code,{children:"virtualColor"})," function which accepts an object with the following\nproperties as a single argument:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"name"})," – color name, must be the same as the key in ",(0,a.jsx)(t.code,{children:"theme.colors"})," object"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"light"})," – a key of ",(0,a.jsx)(t.code,{children:"theme.colors"})," object for light color scheme"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"dark"})," – a key of ",(0,a.jsx)(t.code,{children:"theme.colors"})," object for dark color scheme"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["To see the demo in action, switch between light and dark color schemes (",(0,a.jsx)(t.code,{children:"Ctrl + J"}),"):"]}),"\n",(0,a.jsx)(n,{data:r.$}),"\n",(0,a.jsx)(t.h2,{id:"floatingindicator-component",children:"FloatingIndicator component"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/core/floating-indicator",children:"FloatingIndicator"})," component:"]}),"\n",(0,a.jsx)(n,{data:s.o}),"\n",(0,a.jsx)(t.h2,{id:"scatterchart-component",children:"ScatterChart component"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/charts/scatter-chart",children:"ScatterChart"})," component:"]}),"\n",(0,a.jsx)(n,{data:i.j}),"\n",(0,a.jsx)(t.h2,{id:"colorstuple-function",children:"colorsTuple function"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.code,{children:"colorsTuple"})," function can be used to:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Use single color as the same color for all shades"}),"\n",(0,a.jsx)(t.li,{children:"Transform dynamic string arrays to Mantine color tuple (the array should still have 10 values)"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { colorsTuple, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    custom: colorsTuple('#FFC0CB'),\n    dynamic: colorsTuple(\n      Array.from({ length: 10 }, (_, index) => '#FFC0CB')\n    ),\n  },\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-mutation-observer-hook",children:"use-mutation-observer hook"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/hooks/use-mutation-observer",children:"useMutationObserver"})," hook:"]}),"\n",(0,a.jsx)(n,{data:l.i}),"\n",(0,a.jsx)(t.h2,{id:"use-state-history-hook",children:"use-state-history hook"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/hooks/use-state-history",children:"useStateHistory"})," hook:"]}),"\n",(0,a.jsx)(n,{data:c.n}),"\n",(0,a.jsx)(t.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),", ",(0,a.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,a.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"}),"\ncomponents now support ",(0,a.jsx)(t.code,{children:"xAxisLabel"})," and ",(0,a.jsx)(t.code,{children:"yAxisLabel"})," props:"]}),"\n",(0,a.jsx)(n,{data:d.s}),"\n",(0,a.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["New section has been added to the ",(0,a.jsx)(t.a,{href:"/styles/responsive#hidden-and-visible-from-as-classes",children:"responsive guide"})," on how to use ",(0,a.jsx)(t.code,{children:"mantine-hidden-from-{x}"})," and ",(0,a.jsx)(t.code,{children:"mantine-visible-from-{x}"})," classes."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/guides/remix",children:"Remix guide"})," has been updated to use new Vite bundler"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/guides/jest",children:"Jest"})," and ",(0,a.jsx)(t.a,{href:"/guides/vitest",children:"Vitest"})," guides configuration has been updated to include mocks for ",(0,a.jsx)(t.code,{children:"window.HTMLElement.prototype.scrollIntoView"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/styles/css-variables",children:"CSS variables"})," documentation has been updated to include more information about typography and colors variables"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,a.jsxs)(t.p,{children:["New articles added to the ",(0,a.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/segmented-control-no-value",children:"Can I use SegmentedControl with empty value?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/other-libs",children:"Is there a comparison with other libraries?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/vue-svelte-angular",children:"Can I use Mantine with Vue/Svelte/Angular/etc.?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/combobox-testing",children:"How can I test Select/MultiSelect components?"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," indicator positioning logic has been migrated to ",(0,a.jsx)(t.a,{href:"/core/floating-indicator",children:"FloatingIndicator"}),". It is now more performant and works better when used inside elements with ",(0,a.jsx)(t.code,{children:"transform: scale()"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["New ",(0,a.jsx)(t.a,{href:"/hooks/use-mounted",children:"use-mounted"})," hook"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/charts/sparkline",children:"Sparkline"})," now supports ",(0,a.jsx)(t.code,{children:"connectNulls"})," and ",(0,a.jsx)(t.code,{children:"areaProps"})," props"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/mantinedev/remix-template",children:"Remix template"})," has been updated to use new Vite bundler"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,a.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,a.jsx)(t.a,{href:"/core/autocomplete",children:"Autocomplete"})," and ",(0,a.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," components now support ",(0,a.jsx)(t.code,{children:"scrollAreaProps"})," prop to pass props down to the ",(0,a.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea"})," component in the dropdown"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component now supports 4 new transitions: ",(0,a.jsx)(t.code,{children:"fade-up"}),", ",(0,a.jsx)(t.code,{children:"fade-down"}),", ",(0,a.jsx)(t.code,{children:"fade-left"}),", ",(0,a.jsx)(t.code,{children:"fade-right"})]}),"\n",(0,a.jsxs)(t.li,{children:["Default ",(0,a.jsx)(t.a,{href:"/core/modal",children:"Modal"})," transition was changed to ",(0,a.jsx)(t.code,{children:"fade-down"}),". This change resolves issues with ",(0,a.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," indicator positioning when used inside modals."]}),"\n",(0,a.jsxs)(t.li,{children:["You can now reference headings font sizes and line heights in ",(0,a.jsx)(t.code,{children:"fz"})," and ",(0,a.jsx)(t.code,{children:"lh"})," style props with ",(0,a.jsx)(t.code,{children:"h1"}),", ",(0,a.jsx)(t.code,{children:"h2"}),", ",(0,a.jsx)(t.code,{children:"h3"}),", ",(0,a.jsx)(t.code,{children:"h4"}),", ",(0,a.jsx)(t.code,{children:"h5"}),", ",(0,a.jsx)(t.code,{children:"h6"})," values"]}),"\n"]})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(u,{...e})})}},81066:function(e,t,n){"use strict";n.d(t,{s:function(){return s}});var a=n(52322),o=n(24634),r=n(99803);let s={type:"code",component:function(){return(0,a.jsx)(o.T,{h:300,data:r.aT,dataKey:"date",type:"stacked",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r.op,language:"tsx",fileName:"data.ts"}]}},89882:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});var a=n(52322),o=n(63098),r=n(48944);let s={type:"code",component:function(){return(0,a.jsx)(o.G,{h:350,data:r.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r.op,language:"tsx",fileName:"data.ts"}]}},48944:function(e,t,n){"use strict";n.d(t,{KX:function(){return s},Vl:function(){return r},aT:function(){return a},bI:function(){return o},mA:function(){return l},op:function(){return i}});let a=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]}],o=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]},{color:"red.5",name:"Group 2",data:[{age:26,BMI:21},{age:31,BMI:24},{age:37,BMI:19},{age:42,BMI:27},{age:29,BMI:32},{age:35,BMI:18},{age:40,BMI:23},{age:45,BMI:30},{age:27,BMI:15},{age:33,BMI:20},{age:38,BMI:25},{age:43,BMI:29},{age:30,BMI:16},{age:36,BMI:22},{age:41,BMI:28},{age:46,BMI:33},{age:28,BMI:17},{age:34,BMI:22},{age:39,BMI:26},{age:44,BMI:31},{age:32,BMI:18},{age:38,BMI:23},{age:43,BMI:28},{age:48,BMI:35},{age:25,BMI:14},{age:31,BMI:20},{age:36,BMI:25},{age:41,BMI:30},{age:29,BMI:16}]}],r=[{color:"cyan",name:"Average monthly spending",data:[{age:25,average_monthly_spending:1400},{age:30,average_monthly_spending:2100},{age:35,average_monthly_spending:1800},{age:40,average_monthly_spending:2400},{age:45,average_monthly_spending:2300},{age:28,average_monthly_spending:1600},{age:22,average_monthly_spending:1200},{age:50,average_monthly_spending:3200},{age:32,average_monthly_spending:1900},{age:48,average_monthly_spending:2700},{age:26,average_monthly_spending:1700},{age:38,average_monthly_spending:2200},{age:42,average_monthly_spending:2600},{age:29,average_monthly_spending:1500},{age:34,average_monthly_spending:2e3},{age:44,average_monthly_spending:2500},{age:23,average_monthly_spending:1300},{age:37,average_monthly_spending:2100},{age:49,average_monthly_spending:2900},{age:27,average_monthly_spending:1600},{age:41,average_monthly_spending:2500},{age:31,average_monthly_spending:1800},{age:46,average_monthly_spending:2700},{age:24,average_monthly_spending:1400},{age:33,average_monthly_spending:2100},{age:39,average_monthly_spending:2400},{age:47,average_monthly_spending:2800},{age:36,average_monthly_spending:2200},{age:43,average_monthly_spending:2600},{age:21,average_monthly_spending:1100}]}],s=`
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
  {
    color: 'red.5',
    name: 'Group 2',
    data: [
      { age: 26, BMI: 21 },
      { age: 31, BMI: 24 },
      { age: 37, BMI: 19 },
      { age: 42, BMI: 27 },
      { age: 29, BMI: 32 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 23 },
      { age: 45, BMI: 30 },
      { age: 27, BMI: 15 },
      { age: 33, BMI: 20 },
      { age: 38, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 30, BMI: 16 },
      { age: 36, BMI: 22 },
      { age: 41, BMI: 28 },
      { age: 46, BMI: 33 },
      { age: 28, BMI: 17 },
      { age: 34, BMI: 22 },
      { age: 39, BMI: 26 },
      { age: 44, BMI: 31 },
      { age: 32, BMI: 18 },
      { age: 38, BMI: 23 },
      { age: 43, BMI: 28 },
      { age: 48, BMI: 35 },
      { age: 25, BMI: 14 },
      { age: 31, BMI: 20 },
      { age: 36, BMI: 25 },
      { age: 41, BMI: 30 },
      { age: 29, BMI: 16 },
    ],
  },
];
`,i=`export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];`,l=`export const spendingsData = [
  {
    color: 'cyan',
    name: 'Average monthly spending',
    data: [
      { age: 25, average_monthly_spending: 1400 },
      { age: 30, average_monthly_spending: 2100 },
      { age: 35, average_monthly_spending: 1800 },
      { age: 40, average_monthly_spending: 2400 },
      { age: 45, average_monthly_spending: 2300 },
      { age: 28, average_monthly_spending: 1600 },
      { age: 22, average_monthly_spending: 1200 },
      { age: 50, average_monthly_spending: 3200 },
      { age: 32, average_monthly_spending: 1900 },
      { age: 48, average_monthly_spending: 2700 },
      { age: 26, average_monthly_spending: 1700 },
      { age: 38, average_monthly_spending: 2200 },
      { age: 42, average_monthly_spending: 2600 },
      { age: 29, average_monthly_spending: 1500 },
      { age: 34, average_monthly_spending: 2000 },
      { age: 44, average_monthly_spending: 2500 },
      { age: 23, average_monthly_spending: 1300 },
      { age: 37, average_monthly_spending: 2100 },
      { age: 49, average_monthly_spending: 2900 },
      { age: 27, average_monthly_spending: 1600 },
      { age: 41, average_monthly_spending: 2500 },
      { age: 31, average_monthly_spending: 1800 },
      { age: 46, average_monthly_spending: 2700 },
      { age: 24, average_monthly_spending: 1400 },
      { age: 33, average_monthly_spending: 2100 },
      { age: 39, average_monthly_spending: 2400 },
      { age: 47, average_monthly_spending: 2800 },
      { age: 36, average_monthly_spending: 2200 },
      { age: 43, average_monthly_spending: 2600 },
      { age: 21, average_monthly_spending: 1100 },
    ],
  },
];`},61745:function(e,t,n){"use strict";n.d(t,{o:function(){return B}});var a=n(52322),o=n(2784),r=n(60210),s=n(85448),i=n(21243),l=n(66041),c=n(99765),d=n(10631),g=n(36762),h=n(11264),m=n(63118),u=n(19296),p=n(63409),x="m_378d0bd5",f="m_cc1130c9";let B={type:"code",component:function(){let[e,t]=(0,o.useState)(null),[n,B]=(0,o.useState)({}),[v,I]=(0,o.useState)("center"),M=e=>t=>{n[e]=t,B(n)};return(0,a.jsxs)("div",{className:"m_59c14cf6",dir:"ltr",ref:t,children:[(0,a.jsx)(u.G,{target:n[v],parent:e,className:"m_f9a45e7b"}),(0,a.jsxs)("div",{className:x,children:[(0,a.jsx)(p.k,{className:f,onClick:()=>I("up-left"),ref:M("up-left"),mod:{active:"up-left"===v},children:(0,a.jsx)(r.Z,{size:26,stroke:1.5})}),(0,a.jsx)(p.k,{className:f,onClick:()=>I("up"),ref:M("up"),mod:{active:"up"===v},children:(0,a.jsx)(s.Z,{size:26,stroke:1.5})}),(0,a.jsx)(p.k,{className:f,onClick:()=>I("up-right"),ref:M("up-right"),mod:{active:"up-right"===v},children:(0,a.jsx)(i.Z,{size:26,stroke:1.5})})]}),(0,a.jsxs)("div",{className:x,children:[(0,a.jsx)(p.k,{className:f,onClick:()=>I("left"),ref:M("left"),mod:{active:"left"===v},children:(0,a.jsx)(l.Z,{size:26,stroke:1.5})}),(0,a.jsx)(p.k,{className:f,onClick:()=>I("center"),ref:M("center"),mod:{active:"center"===v},children:(0,a.jsx)(c.Z,{size:26,stroke:1.5})}),(0,a.jsx)(p.k,{className:f,onClick:()=>I("right"),ref:M("right"),mod:{active:"right"===v},children:(0,a.jsx)(d.Z,{size:26,stroke:1.5})})]}),(0,a.jsxs)("div",{className:x,children:[(0,a.jsx)(p.k,{className:f,onClick:()=>I("down-left"),ref:M("down-left"),mod:{active:"down-left"===v},children:(0,a.jsx)(g.Z,{size:26,stroke:1.5})}),(0,a.jsx)(p.k,{className:f,onClick:()=>I("down"),ref:M("down"),mod:{active:"down"===v},children:(0,a.jsx)(h.Z,{size:26,stroke:1.5})}),(0,a.jsx)(p.k,{className:f,onClick:()=>I("down-right"),ref:M("down-right"),mod:{active:"down-right"===v},children:(0,a.jsx)(m.Z,{size:26,stroke:1.5})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconCircle,
} from '@tabler/icons-react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('center');

  const setControlRef = (name: string) => (node: HTMLButtonElement) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <div className={classes.root} dir="ltr" ref={setRootRef}>
      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />

      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-left')}
          ref={setControlRef('up-left')}
          mod={{ active: active === 'up-left' }}
        >
          <IconArrowUpLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up')}
          ref={setControlRef('up')}
          mod={{ active: active === 'up' }}
        >
          <IconArrowUp size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-right')}
          ref={setControlRef('up-right')}
          mod={{ active: active === 'up-right' }}
        >
          <IconArrowUpRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('left')}
          ref={setControlRef('left')}
          mod={{ active: active === 'left' }}
        >
          <IconArrowLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('center')}
          ref={setControlRef('center')}
          mod={{ active: active === 'center' }}
        >
          <IconCircle size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('right')}
          ref={setControlRef('right')}
          mod={{ active: active === 'right' }}
        >
          <IconArrowRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-left')}
          ref={setControlRef('down-left')}
          mod={{ active: active === 'down-left' }}
        >
          <IconArrowDownLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down')}
          ref={setControlRef('down')}
          mod={{ active: active === 'down' }}
        >
          <IconArrowDown size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-right')}
          ref={setControlRef('down-right')}
          mod={{ active: active === 'down-right' }}
        >
          <IconArrowDownRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
    </div>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  width: fit-content;
  padding: var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
}

.indicator {
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));
  border-radius: var(--mantine-radius-md);
  box-shadow: var(--mantine-shadow-md);
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
}

.controlsGroup {
  display: flex;
}

.control {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2));
  border-radius: var(--mantine-radius-md);

  &[data-active] {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
  }

  @mixin hover {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
    background-color: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7));
  }

  & svg {
    display: block;
    position: relative;
    z-index: 1;
  }
}`}]}},50636:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var a=n(52322),o=n(2784),r=n(8582),s=n(83795),i=n(96339);let l={type:"code",component:function(){let[e,t]=(0,o.useState)("");return(0,i.I)(e=>{e.forEach(e=>{"attributes"===e.type&&"dir"===e.attributeName&&e.target instanceof HTMLElement&&t(e.target.getAttribute("dir")||"")})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.x,{children:["Press ",(0,a.jsx)(s.T,{children:"Ctrl"})," + ",(0,a.jsx)(s.T,{children:"Shift"})," + ",(0,a.jsx)(s.T,{children:"L"})," to change direction"]}),(0,a.jsxs)(r.x,{mt:10,children:["Direction was changed to: ",e||"Not changed yet"]})]})},code:`
import { useState } from 'react';
import { Kbd, Text } from '@mantine/core';
import { useMutationObserver } from '@mantine/hooks';

function Demo() {
  const [lastMutation, setLastMutation] = useState('');

  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          mutation.target instanceof HTMLElement &&
            setLastMutation(mutation.target.getAttribute('dir') || '');
        }
      });
    },
    {
      attributes: true,
      attributeFilter: ['dir'],
    },
    () => document.documentElement
  );

  return (
    <>
      <Text>
        Press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>L</Kbd> to change direction
      </Text>

      <Text mt={10}>Direction was changed to: {lastMutation || 'Not changed yet'}</Text>
    </>
  );
}
`}},58255:function(e,t,n){"use strict";n.d(t,{n:function(){return c}});var a=n(52322),o=n(8582),r=n(93010),s=n(17115),i=n(45909),l=n(2784);let c={type:"code",component:function(){let[e,t,n]=function(e){let[t,n]=(0,l.useState)({history:[1],current:0}),a=(0,l.useCallback)(e=>n(t=>{let n=[...t.history.slice(0,t.current+1),e];return{history:n,current:n.length-1}}),[]),o=(0,l.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.max(0,t.current-e)})),[]),r=(0,l.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.min(t.history.length-1,t.current+e)})),[]),s=(0,l.useMemo)(()=>({set:a,forward:r,back:o}),[]);return[t.history[t.current],s,t]}(0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.x,{children:["Current value: ",e]}),(0,a.jsxs)(r.Z,{my:"md",children:[(0,a.jsx)(s.z,{onClick:()=>t.set(Math.ceil(100*Math.random())+1),children:"Set value"}),(0,a.jsx)(s.z,{onClick:()=>t.back(),children:"Back"}),(0,a.jsx)(s.z,{onClick:()=>t.forward(),children:"Forward"})]}),(0,a.jsx)(i.E,{block:!0,children:JSON.stringify(n,null,2)})]})},code:`
import { Button, Code, Group, Text } from '@mantine/core';
import { useStateHistory } from '@mantine/hooks';

function Demo() {
  const [value, handlers, history] = useStateHistory(1);
  return (
    <>
      <Text>Current value: {value}</Text>
      <Group my="md">
        <Button onClick={() => handlers.set(Math.ceil(Math.random() * 100) + 1)}>Set value</Button>
        <Button onClick={() => handlers.back()}>Back</Button>
        <Button onClick={() => handlers.forward()}>Forward</Button>
      </Group>
      <Code block>{JSON.stringify(history, null, 2)}</Code>
    </>
  );
}
`}},82877:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var a=n(52322),o=n(28559);let r={type:"code",component:function(){return(0,a.jsx)(o.x,{bg:"virtual",c:"white",p:"md",fw:700,children:"This box has virtual background color, it is pink in dark mode and cyan in light mode"})},code:[{fileName:"App.tsx",code:`
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.tsx",code:`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
`,language:"tsx"}]}},63098:function(e,t,n){"use strict";n.d(t,{G:function(){return A}});var a=n(52322),o=n(2784),r=n(30840),s=n(1510),i=n(18205),l=n(78560),c=n(55484),d=n(25556),g=n(81224),h=n(3131),m=n(21154),u=n(55734),p=n(11200),x=n(13588),f=n(82027),B=n(38483),v=n(68755),I=n(51477),M=n(46690),y=n(28559),j=n(46293),_=n(50425),k=n(7064);function b(e,t){return e===t.x?"x":"y"}let w={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x"},C=(0,p.Z)((e,{textColor:t,gridColor:n})=>({root:{"--chart-text-color":t?(0,x.p)(t,e):void 0,"--chart-grid-color":n?(0,x.p)(n,e):void 0}})),A=(0,f.d)((e,t)=>{let n=(0,B.w)("ScatterChart",w,e),{classNames:p,className:f,style:A,styles:N,unstyled:S,vars:T,referenceLines:L,dir:D,withLegend:R,withTooltip:z,withXAxis:U,withYAxis:E,xAxisProps:F,yAxisProps:G,orientation:K,scatterChartProps:Z,legendProps:H,data:O,gridAxis:P,tickLine:V,strokeDasharray:q,gridProps:J,tooltipAnimationDuration:X,tooltipProps:Y,children:W,onMouseLeave:$,dataKey:Q,textColor:ee,gridColor:et,xAxisLabel:en,yAxisLabel:ea,unit:eo,labels:er,valueFormatter:es,scatterProps:ei,...el}=n,ec=e=>"function"==typeof es?es:es?.[e],ed=ec("x"),eg=ec("y"),eh=(0,v.rZ)(),em=O.map(e=>({...e,data:e.data.map(t=>({...t,name:e.name}))})),{resolvedClassNames:eu,resolvedStyles:ep}=(0,I.h)({classNames:p,styles:N,props:n}),ex=(0,M.y)({name:"ScatterChart",classes:k.Z,props:n,className:f,style:A,classNames:p,styles:N,unstyled:S,vars:T,varsResolver:C}),[ef,eB]=(0,o.useState)(null),ev=null!==ef,eI=L?.map((e,t)=>{let n=x.p(e.color,eh);return a.jsx(r.d,{stroke:e.color?n:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?n:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ex("referenceLine")},t)}),eM=em.map((e,t)=>{let n=ev&&ef!==e.name;return(0,a.jsx)(s.b,{data:e.data,fill:(0,x.p)(e.color,eh),isAnimationActive:!1,fillOpacity:n?.1:1,...ei},t)});return(0,a.jsx)(y.x,{ref:t,...ex("root"),onMouseLeave:e=>{eB(null),$?.(e)},dir:D||"ltr",...el,children:(0,a.jsx)(i.h,{...ex("container"),children:(0,a.jsxs)(l.G,{margin:{bottom:en?30:void 0,left:ea?10:void 0,right:ea?5:void 0},...Z,children:[(0,a.jsx)(c.q,{strokeDasharray:q,vertical:"y"===P||"xy"===P,horizontal:"x"===P||"xy"===P,...ex("grid"),...J}),(0,a.jsxs)(d.K,{type:"number",hide:!U,dataKey:Q.x,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==P&&("x"===V||"xy"===V))&&{stroke:"currentColor"},minTickGap:5,unit:eo?.x,tickFormatter:ed,...ex("axis"),...F,children:[en&&(0,a.jsx)(g._,{position:"insideBottom",offset:-20,fontSize:12,...ex("axisLabel"),children:en}),F?.children]}),(0,a.jsxs)(h.B,{type:"number",hide:!E,axisLine:!1,dataKey:Q.y,tickLine:!!("none"!==P&&("y"===V||"xy"===V))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:eo?.y,tickFormatter:eg,...ex("axis"),...G,children:[ea&&(0,a.jsx)(g._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ex("axisLabel"),children:ea}),G?.children]}),z&&(0,a.jsx)(m.u,{animationDuration:X,isAnimationActive:0!==X,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:q},content:({label:e,payload:t})=>(0,a.jsx)(_.h,{type:"scatter",label:e,payload:er?t?.map(e=>({...e,name:er[b(e.name,Q)]||e.name,value:ec(b(e.name,Q))?.(e.value)??e.value})):t?.map(e=>({...e,value:ec(b(e.name,Q))?.(e.value)??e.value})),classNames:eu,styles:ep,series:O}),...Y}),R&&(0,a.jsx)(u.D,{verticalAlign:"top",content:e=>(0,a.jsx)(j.Q,{payload:e.payload?.map((e,t)=>({...e,dataKey:O[t].name})),onHighlight:eB,legendPosition:H?.verticalAlign||"top",classNames:eu,styles:ep,series:O}),height:44,...H}),eI,eM]})})})});A.displayName="@mantine/charts/ScatterChart",A.classes=k.Z}},function(e){e.O(0,[61177,16717,50603,78560,54612,66748,11340,47889,92888,49774,40179],function(){return e(e.s=70257)}),_N_E=e.O()}]);