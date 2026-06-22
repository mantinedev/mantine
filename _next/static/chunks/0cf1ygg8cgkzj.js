(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,n],931882)},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(481178),n=e.i(317477),l=e.i(700145),o=e.i(853487),d=e.i(44091),i=e.i(391466),s=e.i(275519),c=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},p=e.i(391398);let m={position:"top-end",offset:0,showZero:!0},h=(0,r.createVarsResolver)((e,{color:r,position:d,offset:i,size:s,radius:c,zIndex:u,autoContrast:p})=>({root:{"--indicator-color":r?(0,n.getThemeColor)(r,e):void 0,"--indicator-text-color":(0,o.getAutoContrastValue)(p,e)?(0,l.getContrastColor)({color:r,theme:e,autoContrast:p}):void 0,"--indicator-size":(0,t.rem)(s),"--indicator-radius":void 0===c?void 0:(0,a.getRadius)(c),"--indicator-z-index":u?.toString(),...function(e="top-end",a=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n="number"==typeof a?a:a.x,l="number"==typeof a?a:a.y,o=(0,t.rem)(n),d=(0,t.rem)(l),[i,s]=e.split("-");return"top"===i&&(r["--indicator-top"]=d,r["--indicator-translate-y"]="-50%"),"middle"===i&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===i&&(r["--indicator-bottom"]=d,r["--indicator-translate-y"]="50%"),"start"===s&&(r["--indicator-left"]=o,r["--indicator-translate-x"]="-50%"),"center"===s&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===s&&(r["--indicator-right"]=o,r["--indicator-translate-x"]="50%"),r}(d,i)}})),f=(0,s.factory)(e=>{let t=(0,d.useProps)("Indicator",m,e),{classNames:a,className:r,style:n,styles:l,unstyled:o,vars:s,children:f,position:D,offset:y,inline:k,label:x,radius:P,color:b,withBorder:j,disabled:Y,processing:g,zIndex:v,autoContrast:I,maxValue:M,showZero:w,mod:S,attributes:C,...W}=t,V=(0,i.useStyles)({name:"Indicator",classes:u,props:t,className:r,style:n,classNames:a,styles:l,unstyled:o,attributes:C,vars:s,varsResolver:h}),L=!w&&(0===x||"0"===x),F=void 0!==M&&"number"==typeof x&&x>M?`${M}+`:x;return(0,p.jsxs)(c.Box,{...V("root"),mod:[{inline:k},S],...W,children:[!Y&&!L&&(0,p.jsx)(c.Box,{mod:{"with-label":!!x,"with-border":j,processing:g},...V("indicator"),children:F}),f]})});f.classes=u,f.varsResolver=h,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},878166,e=>{"use strict";var t=e.i(494834),a=e.i(205693),r=e.i(422696),n=e.i(541772);e.s(["useDatesInput",0,function({type:e,value:l,defaultValue:o,onChange:d,locale:i,format:s,closeOnChange:c,sortDates:u,labelSeparator:p,valueFormatter:m}){let h=(0,a.useDatesContext)(),[f,D]=(0,n.useDisclosure)(!1),[y,k]=(0,r.useUncontrolledDates)({type:e,value:l,defaultValue:o,onChange:d}),x=function({formatter:e,...a}){return(e||function({type:e,date:a,locale:r,format:n,labelSeparator:l}){let o=e=>(0,t.default)(e).locale(r).format(n);if("default"===e)return null===a?"":o(a);if("multiple"===e)return a.map(o).join(", ");if("range"===e&&Array.isArray(a)){if(a[0]&&a[1])return`${o(a[0])} ${l} ${o(a[1])}`;if(a[0])return`${o(a[0])} ${l} `}return""})(a)}({type:e,date:y,locale:h.getLocale(i),format:s,labelSeparator:h.getLabelSeparator(p),formatter:m}),P=a=>{c&&("default"===e&&D.close(),"range"===e&&a[0]&&a[1]&&D.close()),u&&"multiple"===e?k([...a].sort((e,a)=>(0,t.default)(e).isAfter((0,t.default)(a))?1:-1)):k(a)};return{_value:y,setValue:P,onClear:()=>P("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:"range"===e?!!y[0]:"multiple"===e?y.length>0:null!==y,formattedValue:x,dropdownOpened:f,dropdownHandlers:D}}],878166)},267073,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),n=e.i(831474),l=e.i(777141),o=e.i(391398),d=e.i(275519),i=e.i(44091),s=e.i(62904);let c={type:"default",size:"sm",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,d.factory)(e=>{let d=(0,i.useProps)(["Input","InputWrapper","DatePickerInput"],c,e),{type:u,value:p,defaultValue:m,onChange:h,valueFormat:f,labelSeparator:D,locale:y,classNames:k,styles:x,unstyled:P,closeOnChange:b,size:j,variant:Y,dropdownType:g,sortDates:v,minDate:I,maxDate:M,vars:w,defaultDate:S,valueFormatter:C,presets:W,attributes:V,...L}=d,{resolvedClassNames:F,resolvedStyles:O}=(0,s.useResolvedStylesApi)({classNames:k,styles:x,props:d}),{calendarProps:N,others:T}=(0,n.pickCalendarProps)(L),{_value:_,setValue:E,formattedValue:A,dropdownHandlers:$,dropdownOpened:z,onClear:R,shouldClear:B}=(0,r.useDatesInput)({type:u,value:p,defaultValue:m,onChange:h,locale:y,format:f,labelSeparator:D,closeOnChange:b,sortDates:v,valueFormatter:C}),H=Array.isArray(_)?_[0]||S:_||S;return(0,o.jsx)(a.PickerInputBase,{formattedValue:A,dropdownOpened:z,dropdownHandlers:$,classNames:F,styles:O,unstyled:P,onClear:R,shouldClear:B,value:_,size:j,variant:Y,dropdownType:g,...T,type:u,__staticSelector:"DatePickerInput",attributes:V,children:(0,o.jsx)(l.DatePicker,{...N,size:j,variant:Y,type:u,value:_,defaultDate:H||(0,t.getDefaultClampedDate)({maxDate:M,minDate:I}),onChange:E,locale:y,classNames:F,styles:O,unstyled:P,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===g,minDate:I,maxDate:M,presets:W,attributes:V})})});u.classes={...a.PickerInputBase.classes,...l.DatePicker.classes},u.displayName="@mantine/dates/DatePickerInput",e.s(["DatePickerInput",0,u])},70530,e=>{"use strict";var t=e.i(391398),a=e.i(494834),r=e.i(191788),n=e.i(632036);let l=({type:e,date:t,locale:r,format:n})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return(0,a.default)(t[0]).locale(r).format(n);if(t.length>1)return`${t.length} dates selected`}return""};e.s(["getSharedPickerInputDemos",0,function(e){let o,d,i,s,c,u,p,m;return{usage:{type:"code",centered:!0,maxWidth:400,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${o}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)(null);return(0,t.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:a,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <${d}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)([]);return(0,t.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:a,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${i}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)([null,null]);return(0,t.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:a,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:(s=e.displayName.replace("@mantine/dates/",""),`import { ${s} } from '@mantine/dates';


function Demo() {
  return (
    <${s}
      {{props}}
    />
  );
}
`),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:(c=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${c} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${c}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)(null);return(0,t.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:a,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:(u=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { CalendarBlankIcon } from '@phosphor-icons/react';
import { ${u} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const icon = <CalendarBlankIcon size={18} />;
  return (
    <${u}
      leftSection={<CalendarBlankIcon size={18} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,l]=(0,r.useState)(null);return(0,t.jsx)(e,{leftSection:(0,t.jsx)(n.CalendarBlankIcon,{size:18}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:a,onChange:l})}},clearable:{type:"code",centered:!0,maxWidth:400,code:(p=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { ${p} } from '@mantine/dates';

function Demo() {
  return (
    <${p}
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`),component:()=>(0,t.jsx)(e,{clearable:!0,defaultValue:(0,a.default)().format("YYYY-MM-DD"),label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:(m=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${m}, DateFormatter } from '@mantine/dates';

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
  const [value, setValue] = useState<string[]>([]);

  return (
    <${m}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)([]);return(0,t.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:a,onChange:n,type:"multiple",valueFormatter:l})}}}}],70530)},403360,e=>{"use strict";var t=e.i(648863),a=e.i(70530),r=e.i(931882),n=e.i(671640),l=e.i(391398),o=e.i(267073);let d={type:"code",component:function(){return(0,l.jsxs)(n.Stack,{children:[(0,l.jsx)(o.DatePickerInput,{label:"clearSectionMode='both' (default)",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,l.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,l.jsx)(o.DatePickerInput,{label:"clearSectionMode='rightSection'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,l.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,l.jsx)(o.DatePickerInput,{label:"clearSectionMode='clear'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,l.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DatePickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DatePickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DatePickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},i={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(o.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Pick date",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`},s={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(o.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Disabled",placeholder:"Pick date",disabled:!0})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}
`};var c=e.i(494834);let u={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(o.DatePickerInput,{label:"With presets",placeholder:"Select date",presets:[{value:(0,c.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,c.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,c.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,c.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,c.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,c.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,c.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      label="With presets"
      placeholder="Select date"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},p={type:"code",centered:!0,maxWidth:400,component:function(){let e=(0,c.default)();return(0,l.jsx)(o.DatePickerInput,{type:"range",label:"With presets",placeholder:"Select date",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePickerInput
      type="range"
      presets={[
        {
          value: [today.subtract(2, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last two days',
        },
        {
          value: [today.subtract(7, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last 7 days',
        },
        {
          value: [today.startOf('month').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'This month',
        },
        {
          value: [
            today.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
            today.subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last month',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1};var m=e.i(191788);let h={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,l.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,minDate:new Date(2022,1,10),maxDate:new Date(2022,1,28)})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 28)}
    />
  );
}
`},f=e=>{let t=(0,c.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},D=e=>{let t=(0,c.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},y=e=>{let t=(0,c.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},k={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,l.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,getDayProps:f,getYearControlProps:D,getMonthControlProps:y})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';

const getDayProps: DatePickerInputProps['getDayProps'] = (date) => {
  const d = dayjs(date);

  if (d.day() === 5 && d.date() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerInputProps['getYearControlProps'] = (date) => {
  const d = dayjs(date);

  if (d.year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: DatePickerInputProps['getMonthControlProps'] = (date) => {
  const d = dayjs(date);
  if (d.month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`};var x=e.i(393353);let P=e=>{let t=(0,c.default)(e).date();return(0,l.jsx)(x.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,l.jsx)("div",{children:t})})},b={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",renderDay:P})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';

const dayRenderer: DatePickerInputProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      renderDay={dayRenderer}
    />
  );
}
`},j={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,l.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,excludeDate:e=>0===new Date(e).getDay()||6===new Date(e).getDay()})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      excludeDate={(date) => new Date(date).getDay() === 0 || new Date(date).getDay() === 6}
    />
  );
}
`},Y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DatePickerInput,{defaultLevel:"decade",label:"Decade level",placeholder:"Decade level",mb:"md"}),(0,l.jsx)(o.DatePickerInput,{defaultLevel:"year",label:"Year level",placeholder:"Year level"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        defaultLevel="decade"
        label="Decade level"
        placeholder="Decade level"
        mb="md"
      />
      <DatePickerInput
        defaultLevel="year"
        label="Year level"
        placeholder="Year level"
      />
    </>
  );
}
`},g={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,l.jsx)(o.DatePickerInput,{hideOutsideDates:!0,label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      hideOutsideDates
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},v={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,l.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,hideWeekdays:!0})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      hideWeekdays
    />
  );
}
`},I={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DatePickerInput,{firstDayOfWeek:0,label:"Sunday as first day of week",placeholder:"Sunday as first day of week",mb:"md"}),(0,l.jsx)(o.DatePickerInput,{firstDayOfWeek:6,label:"Saturday as first day of week",placeholder:"Saturday as first day of week"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        firstDayOfWeek={0}
        label="Sunday as first day of week"
        placeholder="Sunday as first day of week"
        mb="md"
      />
      <DatePickerInput
        firstDayOfWeek={6}
        label="Saturday as first day of week"
        placeholder="Saturday as first day of week"
      />
    </>
  );
}
`},M={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,l.jsx)(o.DatePickerInput,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},w={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,l.jsx)(o.DatePickerInput,{monthsListFormat:"MM",yearsListFormat:"YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      monthsListFormat="MM"
      yearsListFormat="YY"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},S={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DatePickerInput,{maxLevel:"year",label:"Year max level",placeholder:"Year max level",mb:"md"}),(0,l.jsx)(o.DatePickerInput,{maxLevel:"month",label:"Month max level",placeholder:"Month max level"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        maxLevel="year"
        label="Year max level"
        placeholder="Year max level"
        mb="md"
      />
      <DatePickerInput
        maxLevel="month"
        label="Month max level"
        placeholder="Month max level"
      />
    </>
  );
}
`},C={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(o.DatePickerInput,{weekendDays:[1,2],label:"Weekend days are Monday and Tuesday",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      weekendDays={[1, 2]}
      label="Weekend days are Monday and Tuesday"
      placeholder="Pick date"
    />
  );
}
`},W={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(o.DatePickerInput,{withWeekNumbers:!0,label:"With week numbers",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      withWeekNumbers
      label="With week numbers"
      placeholder="Pick date"
    />
  );
}
`},V={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(o.DatePickerInput,{defaultDate:new Date(2022,1),headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}},label:"Header controls order",placeholder:"Header controls order"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      defaultDate={new Date(2022, 1)}
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
      label="Header controls order"
      placeholder="Header controls order"
    />
  );
}
`};var L=(0,t.__exportAll)({clearSectionMode:()=>d,clearable:()=>A,configurator:()=>T,controlProps:()=>k,defaultLevel:()=>Y,disabled:()=>s,excludeDate:()=>j,firstDayOfWeek:()=>I,headerControlsOrder:()=>V,hideOutsideDates:()=>g,hideWeekdays:()=>v,icon:()=>E,labelFormat:()=>M,listFormat:()=>w,maxLevel:()=>S,minMax:()=>h,modal:()=>_,multiple:()=>O,presets:()=>u,presetsRange:()=>p,range:()=>N,renderDay:()=>b,usage:()=>F,valueFormat:()=>i,valueFormatter:()=>$,weekendDays:()=>C,withWeekNumbers:()=>W});let{usage:F,multiple:O,range:N,configurator:T,modal:_,icon:E,clearable:A,valueFormatter:$}=(0,a.getSharedPickerInputDemos)(o.DatePickerInput);e.s(["DatePickerInputDemos",0,L],403360)},722331,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(403360);e.i(603441);var n=e.i(62558);e.i(457450);var l=e.i(418026);let o=(0,n.Layout)(l.MDX_DATA.DatePickerInput);function d(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,a.useMDXComponents)(),...e.components},{ClearSectionMode:l,Demo:o,GetElementRef:d,InputAccessibility:s,InputFeatures:c}=n;return l||i("ClearSectionMode",!0),o||i("Demo",!0),d||i("GetElementRef",!0),s||i("InputAccessibility",!0),c||i("InputFeatures",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"datepicker-props",children:"DatePicker props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DatePickerInput"})," supports most of the ",(0,t.jsx)(n.a,{href:"/dates/date-picker/",children:"DatePicker"})," props.\nRead through the ",(0,t.jsx)(n.a,{href:"/dates/date-picker/",children:"DatePicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.usage}),"\n",(0,t.jsx)(n.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:'type="multiple"'})," to allow users to pick multiple dates:"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.multiple}),"\n",(0,t.jsx)(n.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:'type="range"'})," to allow users to pick a date range:"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.range}),"\n",(0,t.jsx)(n.h2,{id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"presets"})," prop to add custom date presets. Presets are displayed next to the calendar:"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.presets}),"\n",(0,t.jsxs)(n.p,{children:["To use ",(0,t.jsx)(n.code,{children:"presets"})," with ",(0,t.jsx)(n.code,{children:'type="range"'}),", define the value as a tuple of two dates:"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.presetsRange}),"\n",(0,t.jsx)(n.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.a,{href:"/dates/date-picker/",children:"DatePicker"})," is rendered inside ",(0,t.jsx)(n.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,t.jsx)(n.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,t.jsx)(n.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.modal}),"\n",(0,t.jsx)(n.h2,{id:"value-format",children:"Value format"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"valueFormat"})," prop to change the ",(0,t.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the value label:"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.valueFormat}),"\n",(0,t.jsx)(n.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"valueFormatter"})," is a more powerful alternative to the ",(0,t.jsx)(n.code,{children:"valueFormat"})," prop.\nIt allows formatting the value label with a custom function.\nThe function is the same for all component types (",(0,t.jsx)(n.code,{children:"default"}),", ",(0,t.jsx)(n.code,{children:"multiple"})," and ",(0,t.jsx)(n.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,t.jsxs)(n.p,{children:["Example of using a custom formatter function with ",(0,t.jsx)(n.code,{children:'type="multiple"'}),":"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.valueFormatter}),"\n",(0,t.jsx)(n.h2,{id:"clearable",children:"Clearable"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"clearable"})," prop to display a clear button in the right section. Note that if you set the ",(0,t.jsx)(n.code,{children:"rightSection"}),"\nprop, the clear button will not be displayed."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.clearable}),"\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.clearSectionMode}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.disabled}),"\n",(0,t.jsx)(n.h2,{id:"min-and-max-dates",children:"Min and max dates"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minDate"})," and ",(0,t.jsx)(n.code,{children:"maxDate"})," props define the minimum and maximum dates that can be picked.\nYou can specify ",(0,t.jsx)(n.code,{children:"minDate"})," and ",(0,t.jsx)(n.code,{children:"maxDate"})," as ",(0,t.jsx)(n.code,{children:"Date"})," objects:"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.minMax}),"\n",(0,t.jsx)(n.h2,{id:"default-level",children:"Default level"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defaultLevel"})," prop allows setting the initial level of the picker.\nAllowed values are ",(0,t.jsx)(n.code,{children:"month"}),", ",(0,t.jsx)(n.code,{children:"year"})," and ",(0,t.jsx)(n.code,{children:"decade"}),"."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.defaultLevel}),"\n",(0,t.jsx)(n.h2,{id:"max-level",children:"Max level"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"maxLevel"})," prop allows to set the maximum level that can be reached by clicking on the label in the header."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.maxLevel}),"\n",(0,t.jsx)(n.h2,{id:"control-props",children:"Control props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getDayProps"}),", ",(0,t.jsx)(n.code,{children:"getYearControlProps"})," and ",(0,t.jsx)(n.code,{children:"getMonthControlProps"})," props allow passing props to the control component based on the date.\nIt is useful for disabling specific dates or customising styles/className."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.controlProps}),"\n",(0,t.jsx)(n.h2,{id:"exclude-dates",children:"Exclude dates"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"excludeDate"})," prop allows disabling specific dates.\nIt accepts a function that receives a date and returns ",(0,t.jsx)(n.code,{children:"true"})," if the date should be disabled.\nIn the following example, all weekends are disabled:"]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.excludeDate}),"\n",(0,t.jsx)(n.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hideOutsideDates"})," prop allows hiding dates that do not belong to the current month."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.hideOutsideDates}),"\n",(0,t.jsx)(n.h2,{id:"hide-weekdays",children:"Hide weekdays"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hideWeekdays"})," prop allows hiding weekdays names."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.hideWeekdays}),"\n",(0,t.jsx)(n.h2,{id:"weekend-days",children:"Weekend days"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"weekendDays"})," prop allows changing which days are considered weekends.\nIt accepts an array of weekday indices (0-6). 0 is Sunday, 6 is Saturday.\nBy default, ",(0,t.jsx)(n.code,{children:"[0, 6]"})," are used."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.weekendDays}),"\n",(0,t.jsx)(n.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"firstDayOfWeek"})," prop allows changing the first day of the week.\nIt accepts a weekday index (0-6). 0 is Sunday, 6 is Saturday.\nBy default, ",(0,t.jsx)(n.code,{children:"1"})," (Monday) is used."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.firstDayOfWeek}),"\n",(0,t.jsx)(n.h2,{id:"label-format",children:"Label format"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"decadeLabelFormat"}),", ",(0,t.jsx)(n.code,{children:"yearLabelFormat"})," and ",(0,t.jsx)(n.code,{children:"monthLabelFormat"})," props allow changing the format of the label in the header.\nThe props accept a ",(0,t.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format string"}),"."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.labelFormat}),"\n",(0,t.jsx)(n.h2,{id:"list-format",children:"List format"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"monthsListFormat"})," and ",(0,t.jsx)(n.code,{children:"yearsListFormat"})," props allow changing the format of the month and year labels in the list.\nThe props accept a ",(0,t.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format string"}),"."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.listFormat}),"\n",(0,t.jsx)(n.h2,{id:"with-week-numbers",children:"With week numbers"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"withWeekNumbers"})," prop allows displaying week numbers."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.withWeekNumbers}),"\n",(0,t.jsx)(n.h2,{id:"render-day",children:"Render day"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"renderDay"})," prop allows customising the day control. It is useful for adding indicators or other elements to the day control."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.renderDay}),"\n",(0,t.jsx)(n.h2,{id:"header-controls-order",children:"Header controls order"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"headerControlsOrder"})," prop allows changing the order of the controls in the header.\nIt accepts an array of strings: ",(0,t.jsx)(n.code,{children:"level"}),", ",(0,t.jsx)(n.code,{children:"previous"})," and ",(0,t.jsx)(n.code,{children:"next"}),".\nStyles of the controls can be customised with ",(0,t.jsx)(n.code,{children:"styles"})," prop."]}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.headerControlsOrder}),"\n",(0,t.jsx)(n.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(c,{component:"DatePickerInput",element:"button"}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.configurator}),"\n",(0,t.jsx)(n.h2,{id:"with-icon",children:"With icon"}),"\n",(0,t.jsx)(o,{data:r.DatePickerInputDemos.icon}),"\n",(0,t.jsx)(d,{component:"DatePickerInput",refType:"button",package:"@mantine/dates"}),"\n",(0,t.jsx)(s,{component:"DatePickerInput",packageName:"@mantine/dates"})]})}function i(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})})}])},438585,(e,t,a)=>{let r="/dates/date-picker-input";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(722331)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);