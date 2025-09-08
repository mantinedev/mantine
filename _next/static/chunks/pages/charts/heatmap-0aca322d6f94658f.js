(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66078],{30486:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>v});var n=t(6029),o=t(16285),s=t(2706),r=t(69669);let d={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]};var l=t(33196);let i={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2025-02-16",colors:["var(--mantine-color-orange-4)","var(--mantine-color-orange-6)","var(--mantine-color-orange-7)","var(--mantine-color-orange-9)"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]};var c={root:"m_2b796525"};let m={type:"code",component:function(){return(0,n.jsx)(s.R,{classNames:c,data:r.p,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}`,language:"scss"},{fileName:"data.ts",code:r.k,language:"tsx"}]},h={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]},p={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,weekdayLabels:["Вс","Пн","","Ср","","Пт",""],monthLabels:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['\u0412\u0441', '\u041F\u043D', '', '\u0421\u0440', '', '\u041F\u0442', '']}
      monthLabels={[
        '\u042F\u043D\u0432',
        '\u0424\u0435\u0432',
        '\u041C\u0430\u0440',
        '\u0410\u043F\u0440',
        '\u041C\u0430\u0439',
        '\u0418\u044E\u043D',
        '\u0418\u044E\u043B',
        '\u0410\u0432\u0433',
        '\u0421\u0435\u043D',
        '\u041E\u043A\u0442',
        '\u041D\u043E\u044F',
        '\u0414\u0435\u043A',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]},u={type:"configurator",component:function(e){return(0,n.jsx)(s.R,{data:r.p,withMonthLabels:!0,withWeekdayLabels:!0,startDate:"2024-02-16",endDate:"2024-04-16",...e})},code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {{props}}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"rectSize",min:6,max:20,initialValue:10,libraryValue:"__"},{type:"number",prop:"rectRadius",min:0,max:20,initialValue:2,libraryValue:"__"},{type:"number",prop:"gap",min:0,max:5,initialValue:1,libraryValue:"__"}]},x={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2025-02-16",getRectProps:({date:e,value:a})=>({onClick:()=>console.log({date:e,value:a})})})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]},f={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2024-04-16",withOutsideDates:!1,withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,getTooltipLabel:({date:e,value:a})=>`${e} \u2013 ${a??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => \`\${date} \u2013 \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]},g={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2024-04-26",withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,firstDayOfWeek:0,weekdayLabels:["","Mon","","Wed","","Fri",""],getTooltipLabel:({date:e,value:a})=>`${e} \u2013 ${a??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => \`\${date} \u2013 \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]};var b=t(93432),j=t(38547),w=t(5262);let D=(0,j.P)(w.XZ.Heatmap);function y(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Heatmap"})," is used to display data in a table where each column represents a week.\nThe only required prop is ",(0,n.jsx)(a.code,{children:"data"})," – object where keys are dates in ",(0,n.jsx)(a.code,{children:"YYYY-MM-DD"})," format and values are numbers."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"startDate"})," and ",(0,n.jsx)(a.code,{children:"endDate"})," props are optional, they are used to define heatmap range.\nIf not set, heatmap will display data for the last year."]}),"\n",(0,n.jsx)(t,{data:d}),"\n",(0,n.jsx)(a.h2,{id:"data-format",children:"Data format"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Heatmap"})," expects data in the following format:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"export const data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n  '2025-02-03': 2,\n  '2025-02-01': 2,\n  '2025-01-31': 4,\n  '2025-01-30': 2,\n  // ...\n};\n"})}),"\n",(0,n.jsx)(a.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"withTooltip"})," and ",(0,n.jsx)(a.code,{children:"getTooltipLabel"})," props to display tooltip when\n",(0,n.jsx)(a.code,{children:"Heatmap"})," cells are hovered. ",(0,n.jsx)(a.code,{children:"getTooltipLabel"})," is called with date and value\nand must return string to display in tooltip."]}),"\n",(0,n.jsx)(t,{data:l.Y}),"\n",(0,n.jsx)(a.h2,{id:"change-colors",children:"Change colors"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Heatmap"})," colors can be changed with ",(0,n.jsx)(a.code,{children:"colors"})," prop. It should be an array of any\nvalid CSS color values (hex, rgba, CSS variables, etc.). By default, ",(0,n.jsx)(a.code,{children:"Heatmap"}),"\nuses 4 colors to indicate heat level, but you can pass any number of colors."]}),"\n",(0,n.jsx)(t,{data:i}),"\n",(0,n.jsx)(a.h2,{id:"colors-depending-on-color-scheme",children:"Colors depending on color scheme"}),"\n",(0,n.jsxs)(a.p,{children:["If you want to change colors depending on the color scheme,\nyou should define those colors in ",(0,n.jsx)(a.code,{children:".css"})," file:"]}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsxs)(a.p,{children:["Note that in this case, you can only use 4 colors without passing ",(0,n.jsx)(a.code,{children:"colors"})," prop.\nIf you need more colors, you should pass them manually to the component:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { Heatmap } from '@mantine/charts';\nimport { data } from './data';\nimport classes from './Demo.module.css';\n\nfunction Demo() {\n  return (\n    <Heatmap\n      data={data}\n      startDate=\"2024-02-16\"\n      endDate=\"2025-02-16\"\n      classNames={classes}\n      colors={[\n        'var(--heatmap-level-1)',\n        'var(--heatmap-level-2)',\n        'var(--heatmap-level-3)',\n        'var(--heatmap-level-4)',\n        'var(--heatmap-level-5)',\n        'var(--heatmap-level-6)',\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"values-domain",children:"Values domain"}),"\n",(0,n.jsxs)(a.p,{children:["By default, ",(0,n.jsx)(a.code,{children:"Heatmap"})," calculates domain based on data values, for example, for\nthe following data, the domain will be ",(0,n.jsx)(a.code,{children:"[1, 4]"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"const data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n};\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Based on the domain, ",(0,n.jsx)(a.code,{children:"Heatmap"})," calculates colors for each rect: 1 – min heat level,\n4 – max heat level. To specify domain manually, use ",(0,n.jsx)(a.code,{children:"domain"})," prop. It is useful\nwhen your data does not cover the whole range of possible values. For example,\nthe subset of data passed to the heatmap has values from 1 to 4, but the actual\nrange is from 1 to 10. In this case, you can pass ",(0,n.jsx)(a.code,{children:"[1, 10]"})," to ",(0,n.jsx)(a.code,{children:"domain"})," prop:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { Heatmap } from '@mantine/charts';\n\nconst data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n};\n\nfunction Demo() {\n  return <Heatmap data={data} domain={[1, 10]} />;\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"weekdays-and-months-labels",children:"Weekdays and months labels"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"withMonthLabels"})," and ",(0,n.jsx)(a.code,{children:"withWeekdayLabels"})," props to display chart labels:"]}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsx)(a.h2,{id:"change-labels-text",children:"Change labels text"}),"\n",(0,n.jsxs)(a.p,{children:["To change labels, use ",(0,n.jsx)(a.code,{children:"weekdayLabels"})," and ",(0,n.jsx)(a.code,{children:"monthLabels"})," props.\n",(0,n.jsx)(a.code,{children:"weekdayLabels"})," prop must be an array of 7 strings with weekday names starting from Sunday.\n",(0,n.jsx)(a.code,{children:"monthLabels"})," prop must be an array of 12 strings with month names starting from January."]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(a.h2,{id:"rect-size-gap-and-radius",children:"Rect size, gap and radius"}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(a.h2,{id:"pass-props-to-rect",children:"Pass props to rect"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"getRectProps"})," to pass props to each rect. For example,\nit can be used to add onClick handler to each rect:"]}),"\n",(0,n.jsx)(t,{data:x}),"\n",(0,n.jsx)(a.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,n.jsx)(t,{data:f}),"\n",(0,n.jsx)(a.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,n.jsxs)(a.p,{children:["The default first day of the week is Monday, you can change it with ",(0,n.jsx)(a.code,{children:"firstDayOfWeek"})," prop:"]}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(a.h2,{id:"split-months",children:"Split months"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"splitMonths"})," to separate months visually with a spacer column and show only days that belong to the current month in each column. Month labels will be shifted by one column when ",(0,n.jsx)(a.code,{children:"splitMonths"})," is enabled and months with fewer than 2 weeks are not labeled."]}),"\n",(0,n.jsx)(t,{data:b.A})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(D,{...e,children:(0,n.jsx)(y,{...e})})}},33196:(e,a,t)=>{"use strict";t.d(a,{Y:()=>d});var n=t(6029),o=t(74312),s=t(2706),r=t(69669);let d={type:"code",component:function(){return(0,n.jsx)(s.R,{data:r.p,startDate:"2024-02-16",endDate:"2025-02-16",withTooltip:!0,withWeekdayLabels:!0,withMonthLabels:!0,getTooltipLabel:({date:e,value:a})=>`${o(e).format("DD MMM, YYYY")} \u2013 ${null===a||0===a?"No contributions":`${a} contribution${a>1?"s":""}`}`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        \`\${dayjs(date).format('DD MMM, YYYY')} \u2013 \${value === null || value === 0 ? 'No contributions' : \`\${value} contribution\${value > 1 ? 's' : ''}\`}\`
      }
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r.k,language:"tsx"}]}},63061:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/heatmap",function(){return t(30486)}])}},e=>{e.O(0,[38547,36918,90636,46593,38792],()=>e(e.s=63061)),_N_E=e.O()}]);