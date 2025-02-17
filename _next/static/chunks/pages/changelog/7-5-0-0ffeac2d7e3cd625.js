(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6065],{68781:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-5-0",function(){return a(98192)}])},98192:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var n=a(31085),r=a(71184),o=a(82983),i=a(55971),l=a(4609),s=a(5803),d=a(21686),c=a(87611),h=a(14011),p=a(85954),u=a(38215);let m=(0,p.P)(u.XZ.Changelog750);function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"donutchart-component",children:"DonutChart component"}),"\n",(0,n.jsxs)(t.p,{children:["New ",(0,n.jsx)(t.a,{href:"/charts/donut-chart",children:"DonutChart"})," component:"]}),"\n",(0,n.jsx)(a,{data:o.C}),"\n",(0,n.jsx)(t.h2,{id:"piechart-component",children:"PieChart component"}),"\n",(0,n.jsxs)(t.p,{children:["New ",(0,n.jsx)(t.a,{href:"/charts/pie-chart",children:"PieChart"})," component:"]}),"\n",(0,n.jsx)(a,{data:i.C}),"\n",(0,n.jsx)(t.h2,{id:"mantinedates-value-formatter",children:"@mantine/dates value formatter"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),", ",(0,n.jsx)(t.a,{href:"/dates/month-picker-input",children:"MonthPickerInput"})," and\n",(0,n.jsx)(t.a,{href:"/dates/year-picker-input",children:"YearPickerInput"})," now support ",(0,n.jsx)(t.code,{children:"valueFormatter"})," prop."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,n.jsx)(t.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,n.jsx)(t.code,{children:"default"}),", ",(0,n.jsx)(t.code,{children:"multiple"})," and ",(0,n.jsx)(t.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,n.jsxs)(t.p,{children:["Example of using a custom formatter function with ",(0,n.jsx)(t.code,{children:'type="multiple"'}),":"]}),"\n",(0,n.jsx)(a,{data:l.G2}),"\n",(0,n.jsx)(t.h2,{id:"mantinedates-consistent-weeks",children:"@mantine/dates consistent weeks"}),"\n",(0,n.jsxs)(t.p,{children:["You can now force each month to have 6 weeks by setting ",(0,n.jsx)(t.code,{children:"consistentWeeks: true"})," on\n",(0,n.jsx)(t.a,{href:"/dates/getting-started",children:"DatesProvider"}),". This is useful if you want to avoid layout\nshifts when month changes."]}),"\n",(0,n.jsx)(a,{data:s.g}),"\n",(0,n.jsx)(t.h2,{id:"charts-series-label",children:"Charts series label"}),"\n",(0,n.jsxs)(t.p,{children:["It is now possible to change series labels with ",(0,n.jsx)(t.code,{children:"label"})," property\nin ",(0,n.jsx)(t.code,{children:"series"})," object. This feature is supported in ",(0,n.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),",\n",(0,n.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,n.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,n.jsx)(a,{data:d.x}),"\n",(0,n.jsx)(t.h2,{id:"charts-value-formatter",children:"Charts value formatter"}),"\n",(0,n.jsxs)(t.p,{children:["All ",(0,n.jsx)(t.code,{children:"@mantine/charts"})," components now support ",(0,n.jsx)(t.code,{children:"valueFormatter"})," prop, which allows\nformatting value that is displayed on the y axis and inside the tooltip."]}),"\n",(0,n.jsx)(a,{data:c.G}),"\n",(0,n.jsx)(t.h2,{id:"headings-text-wrap",children:"Headings text wrap"}),"\n",(0,n.jsxs)(t.p,{children:["New ",(0,n.jsx)(t.a,{href:"/core/title",children:"Title"})," ",(0,n.jsx)(t.code,{children:"textWrap"})," prop sets ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,n.jsx)(a,{data:h.I}),"\n",(0,n.jsxs)(t.p,{children:["You can also set ",(0,n.jsx)(t.code,{children:"textWrap"})," on ",(0,n.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Title } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If set on theme, ",(0,n.jsx)(t.code,{children:"textWrap"})," is also applied to headings in ",(0,n.jsx)(t.a,{href:"/core/typography-styles-provider",children:"TypographyStylesProvider"})]}),"\n",(0,n.jsx)(t.h2,{id:"mod-prop",children:"mod prop"}),"\n",(0,n.jsxs)(t.p,{children:["All components now support ",(0,n.jsx)(t.code,{children:"mod"})," prop, which allows adding data attributes to\nthe root element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box mod=\"data-button\" />;\n// -> <div data-button />\n\n<Box mod={{ opened: true }} />;\n// -> <div data-opened />\n\n<Box mod={{ opened: false }} />;\n// -> <div />\n\n<Box mod={['button', { opened: true }]} />;\n// -> <div data-button data-opened />\n\n<Box mod={{ orientation: 'horizontal' }} />;\n// -> <div data-orientation=\"horizontal\" />\n"})}),"\n",(0,n.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["New ",(0,n.jsx)(t.a,{href:"/guides/vitest/",children:"testing with Vitest guide"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/native-select/#with-dividers",children:"NativeSelect"})," with dividers demo"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/popover/#middlewares",children:"Popover"})," ",(0,n.jsx)(t.code,{children:"shift"})," and ",(0,n.jsx)(t.code,{children:"flip"})," middlewares documentation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/combobox/#popover-props",children:"Combobox"})," props related to ",(0,n.jsx)(t.a,{href:"/core/popover",children:"Popover"})," documentation"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/styles/mantine-styles/#loading-styles-from-cdn",children:"Loading styles from CDN guide"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/anchor/#text-props",children:"Anchor"})," now includes additional documentation on how to use ",(0,n.jsx)(t.a,{href:"/core/text",children:"Text"})," props"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," now includes props tables for all compound components"]}),"\n",(0,n.jsxs)(t.li,{children:["A more detailed breakdown of ",(0,n.jsx)(t.a,{href:"/about/#browser-support",children:"browser support"})," has been added to the about page"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,n.jsxs)(t.p,{children:["New articles added to the ",(0,n.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-astro",children:"Can I use Mantine with Astro?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/how-can-i-contribute",children:"How can I contribute to the library?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/dynamic-css-styles",children:"How can I add dynamic CSS styles?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/next-load-fonts",children:"How can I load fonts in Next.js?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/vite-load-fonts",children:"How can I load fonts in Vite?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/floating-action-button",children:"Is there a floating action button component?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/inputs-placeholder-color",children:"How to change inputs placeholder color?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.mantine.dev/q/dates-missing-styles",children:"I do not have styles in my dates components..."})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/checkbox",children:"Checkbox.Group"}),", ",(0,n.jsx)(t.a,{href:"/core/radio",children:"Radio.Group"})," and ",(0,n.jsx)(t.a,{href:"/core/switch",children:"Switch.Group"})," now support ",(0,n.jsx)(t.code,{children:"readOnly"})," prop"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," now has ",(0,n.jsx)(t.code,{children:"loading"})," state animation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," now supports ",(0,n.jsx)(t.code,{children:"withItemsBorder"})," prop which allows removing border between items"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/progress",children:"Progress"})," now supports ",(0,n.jsx)(t.code,{children:"transitionDuration"})," prop which controls section width animation duration"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/textarea",children:"Textarea"})," and ",(0,n.jsx)(t.a,{href:"/core/json-input",children:"JsonInput"})," components now support ",(0,n.jsx)(t.code,{children:"resize"})," prop, which allows setting ",(0,n.jsx)(t.code,{children:"resize"})," CSS property on the input"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"@mantine/hooks"})," package now exports ",(0,n.jsx)(t.a,{href:"/hooks/use-local-storage/#read-storage-value",children:"readLocalStorageValue and readSessionStorageValue"})," function to get value from storage outside of React components"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...e,children:(0,n.jsx)(x,{...e})})}},82983:(e,t,a)=>{"use strict";a.d(t,{C:()=>i});var n=a(31085),r=a(96669),o=a(53168);let i={type:"code",component:function(){return(0,n.jsx)(r.V,{data:o.p})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.k,language:"tsx",fileName:"data.ts"}],centered:!0}},53168:(e,t,a)=>{"use strict";a.d(t,{k:()=>r,p:()=>n});let n=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},55971:(e,t,a)=>{"use strict";a.d(t,{C:()=>i});var n=a(31085),r=a(22118),o=a(1850);let i={type:"code",component:function(){return(0,n.jsx)(r.r,{data:o.p})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.k,language:"tsx",fileName:"data.ts"}],centered:!0}},1850:(e,t,a)=>{"use strict";a.d(t,{k:()=>r,p:()=>n});let n=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},14011:(e,t,a)=>{"use strict";a.d(t,{I:()=>o});var n=a(31085),r=a(61195);let o={type:"configurator",component:function(e){return(0,n.jsx)(r.h,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]}},4609:(e,t,a)=>{"use strict";a.d(t,{CI:()=>r,G2:()=>h,Kk:()=>d,UM:()=>c,cD:()=>l,le:()=>o,y1:()=>i,yl:()=>s});var n=a(50543);a(31085),a(14041);let{usage:r,multiple:o,range:i,configurator:l,modal:s,icon:d,clearable:c,valueFormatter:h}=(0,a(17182).Q)(n.t)},5803:(e,t,a)=>{"use strict";a.d(t,{g:()=>i});var n=a(31085),r=a(36983),o=a(18709);let i={type:"code",component:function(){return(0,n.jsx)(r.n2,{settings:{consistentWeeks:!0},children:(0,n.jsx)(o.l,{})})},code:`
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`,centered:!0}},17182:(e,t,a)=>{"use strict";a.d(t,{Q:()=>f});var n=a(31085);let r=e=>`
import { ${e} } from '@mantine/dates';

function Demo() {
  return (
    <${e}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`,o=e=>`import { ${e} } from '@mantine/dates';


function Demo() {
  return (
    <${e}
      {{props}}
    />
  );
}
`;var i=a(14041),l=a(61584);let s=e=>`
import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <${e}
      leftSection={<IconCalendar size={18} stroke={1.5} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,d=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,c=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${e}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`,h=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`,p=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;var u=a(23464);let m=e=>`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${e}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <${e}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`,x=({type:e,date:t,locale:a,format:n})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return u(t[0]).locale(a).format(n);if(t.length>1)return`${t.length} dates selected`}return""};function f(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:p(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)(null);return(0,n.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},multiple:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)([]);return(0,n.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:a})}},range:{type:"code",centered:!0,maxWidth:400,code:h(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)([null,null]);return(0,n.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:a})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:o(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)(null);return(0,n.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},icon:{type:"code",centered:!0,maxWidth:400,code:s(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)(null);return(0,n.jsx)(e,{leftSection:(0,n.jsx)(l.A,{size:18,stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},clearable:{type:"code",centered:!0,maxWidth:400,code:r(e.displayName.replace("@mantine/dates/","")),component:()=>(0,n.jsx)(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:m(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)([]);return(0,n.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:a,type:"multiple",valueFormatter:x})}}}}},96669:(e,t,a)=>{"use strict";a.d(t,{V:()=>P});var n=a(31085),r=a(87183),o=a(79874),i=a(65340),l=a(4206),s=a(37662),d=a(7098),c=a(51606),h=a(39735),p=a(6754),u=a(29686),m=a(92408),x=a(69564),f=a(36456),j=a(34056),v=a(93581),g={root:"m_a410e613",label:"m_ddb0bfe3"};let y={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,labelsType:"value",tooltipDataSource:"all"},b=(0,d.V)((e,{strokeColor:t,labelColor:a,withLabels:n,size:r})=>({root:{"--chart-stroke-color":t?(0,c.r)(t,e):void 0,"--chart-labels-color":a?(0,c.r)(a,e):void 0,"--chart-size":n?(0,h.D)(r+80):(0,h.D)(r)}})),w=(e,t,a,n)=>"percent"===e?`${(100*a).toFixed(0)}%`:"function"==typeof n?n(t):t,k=(e,t)=>({x:a,y:r,cx:o,cy:i,percent:l,value:s})=>(0,n.jsx)("text",{x:a,y:r,cx:o,cy:i,textAnchor:a>o?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,n.jsx)("tspan",{x:a,children:w(e,s,l,t)})}),P=(0,p.P9)((e,t)=>{let a=(0,u.Y)("DonutChart",y,e),{classNames:d,className:h,style:p,styles:w,unstyled:P,vars:D,data:C,withTooltip:S,tooltipAnimationDuration:V,tooltipProps:A,pieProps:I,paddingAngle:N,withLabels:T,withLabelsLine:W,size:$,thickness:_,strokeWidth:z,startAngle:F,endAngle:L,tooltipDataSource:B,chartLabel:E,children:M,pieChartProps:q,valueFormatter:O,strokeColor:H,labelsType:R,...Y}=a,G=(0,m.xd)(),U=(0,x.I)({name:"DonutChart",classes:g,props:a,className:h,style:p,classNames:d,styles:w,unstyled:P,vars:D,varsResolver:b}),{resolvedClassNames:J,resolvedStyles:Q}=(0,f.Y)({classNames:d,styles:w,props:a}),K=C.map((e,t)=>(0,n.jsx)(r.f,{fill:(0,c.r)(e.color,G),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:z},t));return(0,n.jsx)(j.a,{ref:t,size:$,...U("root"),...Y,children:(0,n.jsx)(o.u,{children:(0,n.jsxs)(i.r,{...q,children:[(0,n.jsx)(l.F,{data:C,innerRadius:$/2-_,outerRadius:$/2,dataKey:"value",isAnimationActive:!1,paddingAngle:N,startAngle:F,endAngle:L,label:!!T&&k(R||"value",O),labelLine:!!W&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...I,children:K}),E&&(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...U("label"),children:E}),S&&(0,n.jsx)(s.m,{animationDuration:V,isAnimationActive:!1,content:({payload:e})=>(0,n.jsx)(v.I,{payload:C,classNames:J,styles:Q,type:"radial",segmentId:"segment"===B?e?.[0]?.name:void 0,valueFormatter:O}),...A}),M]})})})});P.displayName="@mantine/charts/DonutChart",P.classes=g},22118:(e,t,a)=>{"use strict";a.d(t,{r:()=>D});var n=a(31085),r=a(87183),o=a(79874),i=a(65340),l=a(4206),s=a(37662),d=a(7098),c=a(51606),h=a(39735),p=a(6754),u=a(29686),m=a(92408),x=a(69564),f=a(36456),j=a(34056),v=a(93581),g={root:"m_cd8943fd"};let y={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,d.V)((e,{strokeColor:t,labelColor:a,withLabels:n,size:r,labelsPosition:o})=>({root:{"--chart-stroke-color":t?(0,c.r)(t,e):void 0,"--chart-labels-color":a?(0,c.r)(a,e):void 0,"--chart-size":n&&"outside"===o?(0,h.D)(r+80):(0,h.D)(r)}})),w=(e,t,a,n)=>"percent"===e?`${(100*a).toFixed(0)}%`:"function"==typeof n?n(t):t,k=(e,t)=>({cx:a,cy:r,midAngle:o,innerRadius:i,outerRadius:l,value:s,percent:d})=>{let c=Math.PI/180,h=i+(l-i)*.5,p=a+h*Math.cos(-o*c),u=r+h*Math.sin(-o*c);return(0,n.jsx)("text",{x:p,y:u,textAnchor:p>a?"start":"end",dominantBaseline:"central",className:g.label,children:w(e,s,d,t)})},P=(e,t)=>({x:a,y:r,cx:o,cy:i,percent:l,value:s})=>(0,n.jsx)("text",{x:a,y:r,cx:o,cy:i,textAnchor:a>o?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,n.jsx)("tspan",{x:a,children:w(e,s,l,t)})}),D=(0,p.P9)((e,t)=>{let a=(0,u.Y)("PieChart",y,e),{classNames:d,className:h,style:p,styles:w,unstyled:D,vars:C,data:S,withTooltip:V,tooltipAnimationDuration:A,tooltipProps:I,pieProps:N,paddingAngle:T,withLabels:W,withLabelsLine:$,size:_,strokeWidth:z,startAngle:F,endAngle:L,tooltipDataSource:B,children:E,pieChartProps:M,labelsPosition:q,valueFormatter:O,labelsType:H,strokeColor:R,...Y}=a,G=(0,m.xd)(),U=(0,x.I)({name:"PieChart",classes:g,props:a,className:h,style:p,classNames:d,styles:w,unstyled:D,vars:C,varsResolver:b}),{resolvedClassNames:J,resolvedStyles:Q}=(0,f.Y)({classNames:d,styles:w,props:a}),K=S.map((e,t)=>(0,n.jsx)(r.f,{fill:(0,c.r)(e.color,G),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:z},t));return(0,n.jsx)(j.a,{ref:t,size:_,...U("root"),...Y,children:(0,n.jsx)(o.u,{children:(0,n.jsxs)(i.r,{...M,children:[(0,n.jsx)(l.F,{data:S,innerRadius:0,outerRadius:_/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:F,endAngle:L,label:!!W&&("inside"===q?k(H||"value",O):P(H||"value",O)),labelLine:!!$&&"outside"===q&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...N,children:K}),V&&(0,n.jsx)(s.m,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,n.jsx)(v.I,{payload:S,classNames:J,styles:Q,type:"radial",segmentId:"segment"===B?e?.[0]?.name:void 0,valueFormatter:O}),...I}),E]})})})});D.displayName="@mantine/charts/PieChart",D.classes=g}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,53417,28054,46828,22821,65340,92219,39699,68831,68213,50543,19030,90636,46593,38792],()=>t(68781)),_N_E=e.O()}]);