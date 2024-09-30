(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47642],{79618:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-5-0",function(){return n(2962)}])},2962:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(52322),r=n(45392),o=n(10103),i=n(72600),l=n(65328),s=n(71812),c=n(94884),d=n(19055),h=n(22611),u=n(25071),p=n(15019);let m=(0,u.A)(p.us.Changelog750);function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"donutchart-component",children:"DonutChart component"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/charts/donut-chart",children:"DonutChart"})," component:"]}),"\n",(0,a.jsx)(n,{data:o.j}),"\n",(0,a.jsx)(t.h2,{id:"piechart-component",children:"PieChart component"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/charts/pie-chart",children:"PieChart"})," component:"]}),"\n",(0,a.jsx)(n,{data:i.j}),"\n",(0,a.jsx)(t.h2,{id:"mantinedates-value-formatter",children:"@mantine/dates value formatter"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),", ",(0,a.jsx)(t.a,{href:"/dates/month-picker-input",children:"MonthPickerInput"})," and\n",(0,a.jsx)(t.a,{href:"/dates/year-picker-input",children:"YearPickerInput"})," now support ",(0,a.jsx)(t.code,{children:"valueFormatter"})," prop."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,a.jsx)(t.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,a.jsx)(t.code,{children:"default"}),", ",(0,a.jsx)(t.code,{children:"multiple"})," and ",(0,a.jsx)(t.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,a.jsxs)(t.p,{children:["Example of using a custom formatter function with ",(0,a.jsx)(t.code,{children:'type="multiple"'}),":"]}),"\n",(0,a.jsx)(n,{data:l.wD}),"\n",(0,a.jsx)(t.h2,{id:"mantinedates-consistent-weeks",children:"@mantine/dates consistent weeks"}),"\n",(0,a.jsxs)(t.p,{children:["You can now force each month to have 6 weeks by setting ",(0,a.jsx)(t.code,{children:"consistentWeeks: true"})," on\n",(0,a.jsx)(t.a,{href:"/dates/getting-started",children:"DatesProvider"}),". This is useful if you want to avoid layout\nshifts when month changes."]}),"\n",(0,a.jsx)(n,{data:s.U}),"\n",(0,a.jsx)(t.h2,{id:"charts-series-label",children:"Charts series label"}),"\n",(0,a.jsxs)(t.p,{children:["It is now possible to change series labels with ",(0,a.jsx)(t.code,{children:"label"})," property\nin ",(0,a.jsx)(t.code,{children:"series"})," object. This feature is supported in ",(0,a.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),",\n",(0,a.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,a.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,a.jsx)(n,{data:c.Z}),"\n",(0,a.jsx)(t.h2,{id:"charts-value-formatter",children:"Charts value formatter"}),"\n",(0,a.jsxs)(t.p,{children:["All ",(0,a.jsx)(t.code,{children:"@mantine/charts"})," components now support ",(0,a.jsx)(t.code,{children:"valueFormatter"})," prop, which allows\nformatting value that is displayed on the y axis and inside the tooltip."]}),"\n",(0,a.jsx)(n,{data:d.w}),"\n",(0,a.jsx)(t.h2,{id:"headings-text-wrap",children:"Headings text wrap"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/core/title",children:"Title"})," ",(0,a.jsx)(t.code,{children:"textWrap"})," prop sets ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,a.jsx)(n,{data:h.V}),"\n",(0,a.jsxs)(t.p,{children:["You can also set ",(0,a.jsx)(t.code,{children:"textWrap"})," on ",(0,a.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Title } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If set on theme, ",(0,a.jsx)(t.code,{children:"textWrap"})," is also applied to headings in ",(0,a.jsx)(t.a,{href:"/core/typography-styles-provider",children:"TypographyStylesProvider"})]}),"\n",(0,a.jsx)(t.h2,{id:"mod-prop",children:"mod prop"}),"\n",(0,a.jsxs)(t.p,{children:["All components now support ",(0,a.jsx)(t.code,{children:"mod"})," prop, which allows adding data attributes to\nthe root element:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box mod=\"data-button\" />;\n// -> <div data-button />\n\n<Box mod={{ opened: true }} />;\n// -> <div data-opened />\n\n<Box mod={{ opened: false }} />;\n// -> <div />\n\n<Box mod={['button', { opened: true }]} />;\n// -> <div data-button data-opened />\n\n<Box mod={{ orientation: 'horizontal' }} />;\n// -> <div data-orientation=\"horizontal\" />\n"})}),"\n",(0,a.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["New ",(0,a.jsx)(t.a,{href:"/guides/vitest/",children:"testing with Vitest guide"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/native-select/#with-dividers",children:"NativeSelect"})," with dividers demo"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/popover/#middlewares",children:"Popover"})," ",(0,a.jsx)(t.code,{children:"shift"})," and ",(0,a.jsx)(t.code,{children:"flip"})," middlewares documentation"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/combobox/#popover-props",children:"Combobox"})," props related to ",(0,a.jsx)(t.a,{href:"/core/popover",children:"Popover"})," documentation"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/styles/mantine-styles/#loading-styles-from-cdn",children:"Loading styles from CDN guide"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/anchor/#text-props",children:"Anchor"})," now includes additional documentation on how to use ",(0,a.jsx)(t.a,{href:"/core/text",children:"Text"})," props"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," now includes props tables for all compound components"]}),"\n",(0,a.jsxs)(t.li,{children:["A more detailed breakdown of ",(0,a.jsx)(t.a,{href:"/about/#browser-support",children:"browser support"})," has been added to the about page"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,a.jsxs)(t.p,{children:["New articles added to the ",(0,a.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-astro",children:"Can I use Mantine with Astro?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/how-can-i-contribute",children:"How can I contribute to the library?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/dynamic-css-styles",children:"How can I add dynamic CSS styles?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/next-load-fonts",children:"How can I load fonts in Next.js?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/vite-load-fonts",children:"How can I load fonts in Vite?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/floating-action-button",children:"Is there a floating action button component?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/inputs-placeholder-color",children:"How to change inputs placeholder color?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/dates-missing-styles",children:"I do not have styles in my dates components..."})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/checkbox",children:"Checkbox.Group"}),", ",(0,a.jsx)(t.a,{href:"/core/radio",children:"Radio.Group"})," and ",(0,a.jsx)(t.a,{href:"/core/switch",children:"Switch.Group"})," now support ",(0,a.jsx)(t.code,{children:"readOnly"})," prop"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," now has ",(0,a.jsx)(t.code,{children:"loading"})," state animation"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," now supports ",(0,a.jsx)(t.code,{children:"withItemsBorder"})," prop which allows removing border between items"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/progress",children:"Progress"})," now supports ",(0,a.jsx)(t.code,{children:"transitionDuration"})," prop which controls section width animation duration"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/textarea",children:"Textarea"})," and ",(0,a.jsx)(t.a,{href:"/core/json-input",children:"JsonInput"})," components now support ",(0,a.jsx)(t.code,{children:"resize"})," prop, which allows setting ",(0,a.jsx)(t.code,{children:"resize"})," CSS property on the input"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"@mantine/hooks"})," package now exports ",(0,a.jsx)(t.a,{href:"/hooks/use-local-storage/#read-storage-value",children:"readLocalStorageValue and readSessionStorageValue"})," function to get value from storage outside of React components"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(x,{...e})})}},10103:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var a=n(52322),r=n(27472),o=n(3675);let i={type:"code",component:function(){return(0,a.jsx)(r.Y,{data:o.a})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}],centered:!0}},3675:function(e,t,n){"use strict";n.d(t,{a:function(){return a},o:function(){return r}});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},72600:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var a=n(52322),r=n(38840),o=n(10301);let i={type:"code",component:function(){return(0,a.jsx)(r.u,{data:o.a})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}],centered:!0}},10301:function(e,t,n){"use strict";n.d(t,{a:function(){return a},o:function(){return r}});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},22611:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});var a=n(52322),r=n(94120);let o={type:"configurator",component:function(e){return(0,a.jsx)(r.D,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]}},65328:function(e,t,n){"use strict";n.d(t,{$S:function(){return d},gB:function(){return l},j_:function(){return r},m6:function(){return o},oC:function(){return s},qv:function(){return c},w6:function(){return i},wD:function(){return h}});var a=n(18738);n(52322),n(2784);let{usage:r,multiple:o,range:i,configurator:l,modal:s,icon:c,clearable:d,valueFormatter:h}=(0,n(42411).B)(a.a)},71812:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var a=n(52322),r=n(92014),o=n(95488);let i={type:"code",component:function(){return(0,a.jsx)(r.wf,{settings:{consistentWeeks:!0},children:(0,a.jsx)(o.M,{})})},code:`
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`,centered:!0}},42411:function(e,t,n){"use strict";n.d(t,{B:function(){return j}});var a=n(52322);let r=e=>`
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
`;var i=n(2784),l=n(11868),s=n(58898);let c=e=>`
import { useState } from 'react';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <${e}
      leftSection={icon}
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
`,h=e=>`
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
`,u=e=>`
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
`;var m=n(28879);let x=e=>`
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
`,f=({type:e,date:t,locale:n,format:a})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return m(t[0]).locale(n).format(a);if(t.length>1)return`${t.length} dates selected`}return""};function j(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:p(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,i.useState)(null);return(0,a.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:h(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,i.useState)([]);return(0,a.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,i.useState)([null,null]);return(0,a.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:o(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,i.useState)(null);return(0,a.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,i.useState)(null);return(0,a.jsx)(e,{leftSection:(0,a.jsx)(l.Z,{style:{width:(0,s.h)(18),height:(0,s.h)(18)},stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:r(e.displayName.replace("@mantine/dates/","")),component:()=>(0,a.jsx)(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:x(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,i.useState)([]);return(0,a.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:n,type:"multiple",valueFormatter:f})}}}}},27472:function(e,t,n){"use strict";n.d(t,{Y:function(){return w}});var a=n(52322),r=n(11011),o=n(18205),i=n(43454),l=n(79941),s=n(21154),c=n(11200),d=n(13588),h=n(58898),u=n(82027),p=n(38483),m=n(68755),x=n(46690),f=n(51477),j=n(28559),v=n(50425),g={root:"m_a410e613",label:"m_ddb0bfe3"};let y={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all"},b=(0,c.Z)((e,{strokeColor:t,labelColor:n,withLabels:a,size:r})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":n?(0,d.p)(n,e):void 0,"--chart-size":a?(0,h.h)(r+80):(0,h.h)(r)}})),w=(0,u.d5)((e,t)=>{let n=(0,p.w)("DonutChart",y,e),{classNames:c,className:h,style:u,styles:w,unstyled:k,vars:P,data:D,withTooltip:S,tooltipAnimationDuration:C,tooltipProps:V,pieProps:A,paddingAngle:N,withLabels:I,withLabelsLine:T,size:W,thickness:$,strokeWidth:_,startAngle:z,endAngle:B,tooltipDataSource:F,chartLabel:L,children:E,pieChartProps:q,valueFormatter:M,strokeColor:O,...H}=n,U=(0,m.rZ)(),R=(0,x.y)({name:"DonutChart",classes:g,props:n,className:h,style:u,classNames:c,styles:w,unstyled:k,vars:P,varsResolver:b}),{resolvedClassNames:Z,resolvedStyles:J}=(0,f.h)({classNames:c,styles:w,props:n}),Y=D.map((e,t)=>(0,a.jsx)(r.b,{fill:(0,d.p)(e.color,U),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:_},t));return(0,a.jsx)(j.x,{ref:t,size:W,...R("root"),...H,children:(0,a.jsx)(o.h,{children:(0,a.jsxs)(i.u,{...q,children:[(0,a.jsx)(l.b,{data:D,innerRadius:W/2-$,outerRadius:W/2,dataKey:"value",isAnimationActive:!1,paddingAngle:N,startAngle:z,endAngle:B,label:!!I&&{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"},labelLine:!!T&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...A,children:Y}),L&&(0,a.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...R("label"),children:L}),S&&(0,a.jsx)(s.u,{animationDuration:C,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(v.h,{payload:D,classNames:Z,styles:J,type:"radial",segmentId:"segment"===F?e?.[0]?.name:void 0,valueFormatter:M}),...V}),E]})})})});w.displayName="@mantine/charts/DonutChart",w.classes=g},38840:function(e,t,n){"use strict";n.d(t,{u:function(){return D}});var a=n(52322),r=n(11011),o=n(18205),i=n(43454),l=n(79941),s=n(21154),c=n(11200),d=n(13588),h=n(58898),u=n(82027),p=n(38483),m=n(68755),x=n(46690),f=n(51477),j=n(28559),v=n(50425),g={root:"m_cd8943fd"};let y={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,c.Z)((e,{strokeColor:t,labelColor:n,withLabels:a,size:r,labelsPosition:o})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":n?(0,d.p)(n,e):void 0,"--chart-size":a&&"outside"===o?(0,h.h)(r+80):(0,h.h)(r)}})),w=(e,t,n,a)=>"percent"===e?`${(100*n).toFixed(0)}%`:"function"==typeof a?a(t):t,k=(e,t)=>({cx:n,cy:r,midAngle:o,innerRadius:i,outerRadius:l,value:s,percent:c})=>{let d=Math.PI/180,h=i+(l-i)*.5,u=n+h*Math.cos(-o*d);return(0,a.jsx)("text",{x:u,y:r+h*Math.sin(-o*d),textAnchor:u>n?"start":"end",dominantBaseline:"central",className:g.label,children:w(e,s,c,t)})},P=(e,t)=>({x:n,y:r,cx:o,cy:i,percent:l,value:s})=>(0,a.jsx)("text",{x:n,y:r,cx:o,cy:i,textAnchor:n>o?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,a.jsx)("tspan",{x:n,children:w(e,s,l,t)})}),D=(0,u.d5)((e,t)=>{let n=(0,p.w)("PieChart",y,e),{classNames:c,className:h,style:u,styles:w,unstyled:D,vars:S,data:C,withTooltip:V,tooltipAnimationDuration:A,tooltipProps:N,pieProps:I,paddingAngle:T,withLabels:W,withLabelsLine:$,size:_,strokeWidth:z,startAngle:B,endAngle:F,tooltipDataSource:L,children:E,pieChartProps:q,labelsPosition:M,valueFormatter:O,labelsType:H,strokeColor:U,...R}=n,Z=(0,m.rZ)(),J=(0,x.y)({name:"PieChart",classes:g,props:n,className:h,style:u,classNames:c,styles:w,unstyled:D,vars:S,varsResolver:b}),{resolvedClassNames:Y,resolvedStyles:G}=(0,f.h)({classNames:c,styles:w,props:n}),K=C.map((e,t)=>(0,a.jsx)(r.b,{fill:(0,d.p)(e.color,Z),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:z},t));return(0,a.jsx)(j.x,{ref:t,size:_,...J("root"),...R,children:(0,a.jsx)(o.h,{children:(0,a.jsxs)(i.u,{...q,children:[(0,a.jsx)(l.b,{data:C,innerRadius:0,outerRadius:_/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:B,endAngle:F,label:!!W&&("inside"===M?k(H||"value",O):P(H||"value",O)),labelLine:!!$&&"outside"===M&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...I,children:K}),V&&(0,a.jsx)(s.u,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(v.h,{payload:C,classNames:Y,styles:G,type:"radial",segmentId:"segment"===L?e?.[0]?.name:void 0,valueFormatter:O}),...N}),E]})})})});D.displayName="@mantine/charts/PieChart",D.classes=g}},function(e){e.O(0,[61177,16717,49625,59966,43454,90673,66748,11340,11204,18738,60214,92888,49774,40179],function(){return e(e.s=79618)}),_N_E=e.O()}]);