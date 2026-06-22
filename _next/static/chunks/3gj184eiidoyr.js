(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,r],931882)},70530,e=>{"use strict";var t=e.i(391398),a=e.i(494834),n=e.i(191788),r=e.i(632036);let o=({type:e,date:t,locale:n,format:r})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return(0,a.default)(t[0]).locale(n).format(r);if(t.length>1)return`${t.length} dates selected`}return""};e.s(["getSharedPickerInputDemos",0,function(e){let l,i,s,c,d,u,m,h;return{usage:{type:"code",centered:!0,maxWidth:400,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${l}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,r]=(0,n.useState)(null);return(0,t.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:a,onChange:r})}},multiple:{type:"code",centered:!0,maxWidth:400,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <${i}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,r]=(0,n.useState)([]);return(0,t.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:a,onChange:r})}},range:{type:"code",centered:!0,maxWidth:400,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${s}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,r]=(0,n.useState)([null,null]);return(0,t.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:a,onChange:r})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:(c=e.displayName.replace("@mantine/dates/",""),`import { ${c} } from '@mantine/dates';


function Demo() {
  return (
    <${c}
      {{props}}
    />
  );
}
`),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${d}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,r]=(0,n.useState)(null);return(0,t.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:a,onChange:r})}},icon:{type:"code",centered:!0,maxWidth:400,code:(u=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[a,o]=(0,n.useState)(null);return(0,t.jsx)(e,{leftSection:(0,t.jsx)(r.CalendarBlankIcon,{size:18}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:a,onChange:o})}},clearable:{type:"code",centered:!0,maxWidth:400,code:(m=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { ${m} } from '@mantine/dates';

function Demo() {
  return (
    <${m}
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`),component:()=>(0,t.jsx)(e,{clearable:!0,defaultValue:(0,a.default)().format("YYYY-MM-DD"),label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:(h=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${h}, DateFormatter } from '@mantine/dates';

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
    <${h}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`),component:()=>{let[a,r]=(0,n.useState)([]);return(0,t.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:a,onChange:r,type:"multiple",valueFormatter:o})}}}}],70530)},337904,e=>{"use strict";var t=e.i(337976),a=e.i(164036),n=e.i(831474),r={monthPickerRoot:"m_53c9e871",presetsList:"m_cccb8ff3",presetButton:"m_7b4fbf50"},o=e.i(191788),l=e.i(391398),i=e.i(232471),s=e.i(284629),c=e.i(481178),d=e.i(275519),u=e.i(433512),m=e.i(44091),h=e.i(62904),p=e.i(391466);let f=(0,c.createVarsResolver)((e,{size:t})=>({monthPickerRoot:{"--preset-font-size":(0,u.getFontSize)(t)}})),y={type:"default"},M=(0,d.factory)(e=>{let c=(0,m.useProps)("MonthPicker",y,e),{classNames:d,styles:u,vars:M,type:x,defaultValue:Y,value:b,onChange:P,__staticSelector:j,getMonthControlProps:k,allowSingleDateInRange:g,allowDeselect:D,onMouseLeave:v,onMonthSelect:S,__updateDateOnMonthSelect:I,__onPresetSelect:C,__stopPropagation:w,presets:V,className:F,style:L,unstyled:O,size:_,attributes:W,onLevelChange:E,...N}=c,{calendarProps:A,others:T}=(0,n.pickCalendarProps)(N),R=(0,o.useRef)(null),$=(0,o.useRef)(null),z=(0,p.useStyles)({name:j||"MonthPicker",classes:r,props:c,className:F,style:L,classNames:d,styles:u,unstyled:O,attributes:W,rootSelector:V?"monthPickerRoot":void 0,varsResolver:f,vars:M}),{onDateChange:B,onRootMouseLeave:Z,onHoveredDateChange:U,getControlProps:X,setValue:H}=(0,t.useDatesState)({type:x,level:"month",allowDeselect:D,allowSingleDateInRange:g,value:b,defaultValue:Y,onChange:P,onMouseLeave:v}),{resolvedClassNames:K,resolvedStyles:G}=(0,h.useResolvedStylesApi)({classNames:d,styles:u,props:c}),q=(0,l.jsx)(a.Calendar,{classNames:K,styles:G,size:_,...A,...!V?T:{},minLevel:"year",__updateDateOnMonthSelect:I??!1,__staticSelector:j||"MonthPicker",onMouseLeave:Z,onMonthMouseEnter:(e,t)=>U(t),onMonthSelect:e=>{B(e),S?.(e)},getMonthControlProps:e=>({...X(e),...k?.(e)}),onLevelChange:E,__setDateRef:R,__setLevelRef:$,__stopPropagation:w,attributes:W,...!V?{className:F,style:L}:{}});if(!V)return q;let J=V.map((e,t)=>(0,l.jsx)(s.UnstyledButton,{...z("presetButton"),onClick:()=>{var t;let a;void 0!==(a=Array.isArray(t=e.value)?t[0]:t)&&(R.current?.(a),$.current?.("year"),C?C(t):H(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":w||void 0,children:e.label},t));return(0,l.jsxs)(i.Box,{...z("monthPickerRoot"),size:_,...T,children:[(0,l.jsx)("div",{...z("presetsList"),children:J}),q]})});M.classes={...a.Calendar.classes,...r},M.varsResolver=f,M.displayName="@mantine/dates/MonthPicker",e.s(["MonthPicker",0,M],337904)},215126,e=>{"use strict";var t=e.i(568827),a=e.i(782681),n=e.i(878166),r=e.i(831474),o=e.i(337904),l=e.i(391398),i=e.i(275519),s=e.i(44091),c=e.i(62904);let d={type:"default",size:"sm",valueFormat:"MMMM YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,i.factory)(e=>{let i=(0,s.useProps)(["Input","InputWrapper","MonthPickerInput"],d,e),{type:u,value:m,defaultValue:h,onChange:p,valueFormat:f,labelSeparator:y,locale:M,classNames:x,styles:Y,unstyled:b,closeOnChange:P,size:j,variant:k,dropdownType:g,sortDates:D,minDate:v,maxDate:S,vars:I,valueFormatter:C,presets:w,attributes:V,...F}=i,{resolvedClassNames:L,resolvedStyles:O}=(0,c.useResolvedStylesApi)({classNames:x,styles:Y,props:i}),{calendarProps:_,others:W}=(0,r.pickCalendarProps)(F),{_value:E,setValue:N,formattedValue:A,dropdownHandlers:T,dropdownOpened:R,onClear:$,shouldClear:z}=(0,n.useDatesInput)({type:u,value:m,defaultValue:h,onChange:p,locale:M,format:f,labelSeparator:y,closeOnChange:P,sortDates:D,valueFormatter:C});return(0,l.jsx)(a.PickerInputBase,{formattedValue:A,dropdownOpened:R,dropdownHandlers:T,classNames:L,styles:O,unstyled:b,onClear:$,shouldClear:z,value:E,size:j,variant:k,dropdownType:g,...W,attributes:V,type:u,__staticSelector:"MonthPickerInput",children:(0,l.jsx)(o.MonthPicker,{..._,size:j,variant:k,type:u,value:E,defaultDate:_.defaultDate||(Array.isArray(E)?E[0]||(0,t.getDefaultClampedDate)({maxDate:S,minDate:v}):E||(0,t.getDefaultClampedDate)({maxDate:S,minDate:v})),onChange:N,locale:M,classNames:L,styles:O,unstyled:b,__staticSelector:"MonthPickerInput",__stopPropagation:"popover"===g,minDate:v,maxDate:S,presets:w,attributes:V})})});u.classes={...a.PickerInputBase.classes,...o.MonthPicker.classes},u.displayName="@mantine/dates/MonthPickerInput",e.s(["MonthPickerInput",0,u])},905926,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(648863),r=e.i(70530),o=e.i(931882),l=e.i(671640),i=e.i(215126);let s={type:"code",component:function(){return(0,t.jsxs)(l.Stack,{children:[(0,t.jsx)(i.MonthPickerInput,{label:"clearSectionMode='both' (default)",placeholder:"Pick month",defaultValue:new Date,clearable:!0,rightSection:(0,t.jsx)(o.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,t.jsx)(i.MonthPickerInput,{label:"clearSectionMode='rightSection'",placeholder:"Pick month",defaultValue:new Date,clearable:!0,rightSection:(0,t.jsx)(o.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,t.jsx)(i.MonthPickerInput,{label:"clearSectionMode='clear'",placeholder:"Pick month",defaultValue:new Date,clearable:!0,rightSection:(0,t.jsx)(o.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <MonthPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <MonthPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <MonthPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},c={type:"code",centered:!0,maxWidth:400,component:function(){return(0,t.jsx)(i.MonthPickerInput,{valueFormat:"YYYY MMM",type:"multiple",label:"Pick month",placeholder:"Pick month"})},code:`
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
    />
  );
}
`},d={type:"code",centered:!0,maxWidth:400,component:function(){return(0,t.jsx)(i.MonthPickerInput,{valueFormat:"YYYY MMM",type:"multiple",label:"Disabled",placeholder:"Pick month",disabled:!0})},code:`
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Disabled"
      placeholder="Pick month"
      disabled
    />
  );
}
`};var u=e.i(191788);let m={type:"code",centered:!0,maxWidth:400,component:function(){let[e,a]=(0,u.useState)(null);return(0,t.jsx)(i.MonthPickerInput,{label:"Pick month",placeholder:"Pick month",value:e,onChange:a,minDate:new Date(2022,1),maxDate:new Date(2022,8)})},code:`
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPickerInput
      label="Pick month"
      placeholder="Pick month"
      value={value}
      onChange={setValue}
      minDate={new Date(2022, 1)}
      maxDate={new Date(2022, 8)}
    />
  );
}
`};var h=e.i(494834);let p=e=>(0,h.default)(e).year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:(0,h.default)(e).year()===new Date().getFullYear()+1?{disabled:!0}:{},f=e=>1===(0,h.default)(e).month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===(0,h.default)(e).month()?{disabled:!0}:{},y={type:"code",centered:!0,maxWidth:400,component:function(){let[e,a]=(0,u.useState)(null);return(0,t.jsx)(i.MonthPickerInput,{label:"Pick month",placeholder:"Pick month",value:e,onChange:a,getYearControlProps:p,getMonthControlProps:f})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthPickerInput, MonthPickerInputProps } from '@mantine/dates';

const getYearControlProps: MonthPickerInputProps['getYearControlProps'] = (date) => {
  if (dayjs(date).year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: MonthPickerInputProps['getMonthControlProps'] = (date) => {
  if (dayjs(date).month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPickerInput
      label="Pick month"
      placeholder="Pick month"
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},M={type:"code",centered:!0,maxWidth:400,component:function(){let[e,a]=(0,u.useState)(null);return(0,t.jsx)(i.MonthPickerInput,{decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",label:"Pick month",placeholder:"Pick month",value:e,onChange:a})},code:`
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPickerInput
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      label="Pick month"
      placeholder="Pick month"
      value={value}
      onChange={setValue}
    />
  );
}
`},x={type:"code",centered:!0,maxWidth:400,component:function(){let[e,a]=(0,u.useState)(null);return(0,t.jsx)(i.MonthPickerInput,{monthsListFormat:"MM",yearsListFormat:"YY",label:"Pick month",placeholder:"Pick month",value:e,onChange:a})},code:`
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPickerInput
      monthsListFormat="MM"
      yearsListFormat="YY"
      label="Pick month"
      placeholder="Pick month"
      value={value}
      onChange={setValue}
    />
  );
}
`},Y={type:"code",centered:!0,maxWidth:400,component:function(){let[e,a]=(0,u.useState)(null);return(0,t.jsx)(i.MonthPickerInput,{maxLevel:"year",label:"Pick month",placeholder:"Pick month",value:e,onChange:a})},code:`
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPickerInput
      maxLevel="year"
      label="Pick month"
      placeholder="Pick month"
      value={value}
      onChange={setValue}
    />
  );
}
`},b={type:"code",centered:!0,maxWidth:400,component:function(){return(0,t.jsx)(i.MonthPickerInput,{label:"With presets",placeholder:"Select month",presets:[{value:(0,h.default)().startOf("month").format("YYYY-MM-DD"),label:"This month"},{value:(0,h.default)().add(1,"month").startOf("month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,h.default)().subtract(1,"month").startOf("month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,h.default)().add(6,"month").startOf("month").format("YYYY-MM-DD"),label:"In 6 months"},{value:(0,h.default)().add(1,"year").startOf("month").format("YYYY-MM-DD"),label:"Next year"},{value:(0,h.default)().subtract(1,"year").startOf("month").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      label="With presets"
      placeholder="Select month"
      presets={[
        { value: dayjs().startOf('month').format('YYYY-MM-DD'), label: 'This month' },
        { value: dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().add(6, 'month').startOf('month').format('YYYY-MM-DD'), label: 'In 6 months' },
        { value: dayjs().add(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},P={type:"code",centered:!0,maxWidth:400,component:function(){let e=(0,h.default)();return(0,t.jsx)(i.MonthPickerInput,{type:"range",label:"With presets",placeholder:"Select months range",presets:[{value:[e.subtract(3,"month").startOf("month").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"Last 3 months"},{value:[e.subtract(6,"month").startOf("month").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"Last 6 months"},{value:[e.startOf("year").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"This year"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").startOf("month").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <MonthPickerInput
      type="range"
      label="With presets"
      placeholder="Select months range"
      presets={[
        {
          value: [today.subtract(3, 'month').startOf('month').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'Last 3 months',
        },
        {
          value: [today.subtract(6, 'month').startOf('month').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'Last 6 months',
        },
        {
          value: [today.startOf('year').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'This year',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').startOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1};var j=(0,n.__exportAll)({clearSectionMode:()=>s,clearable:()=>C,configurator:()=>v,controlProps:()=>y,disabled:()=>d,icon:()=>I,labelFormat:()=>M,listFormat:()=>x,maxLevel:()=>Y,minMax:()=>m,modal:()=>S,multiple:()=>g,presets:()=>b,presetsRange:()=>P,range:()=>D,usage:()=>k,valueFormat:()=>c,valueFormatter:()=>w});let{usage:k,multiple:g,range:D,configurator:v,modal:S,icon:I,clearable:C,valueFormatter:w}=(0,r.getSharedPickerInputDemos)(i.MonthPickerInput);e.i(603441);var V=e.i(62558);e.i(457450);var F=e.i(418026);let L=(0,V.Layout)(F.MDX_DATA.MonthPickerInput);function O(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,a.useMDXComponents)(),...e.components},{ClearSectionMode:r,Demo:o,GetElementRef:l,InputAccessibility:i,InputFeatures:s}=n;return r||_("ClearSectionMode",!0),o||_("Demo",!0),l||_("GetElementRef",!0),i||_("InputAccessibility",!0),s||_("InputFeatures",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"monthpicker-props",children:"MonthPicker props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MonthPickerInput"})," supports most of the ",(0,t.jsx)(n.a,{href:"/dates/month-picker/",children:"MonthPicker"})," props.\nRead through the ",(0,t.jsx)(n.a,{href:"/dates/month-picker/",children:"MonthPicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:j.usage}),"\n",(0,t.jsx)(n.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:'type="multiple"'})," to allow users to pick multiple dates:"]}),"\n",(0,t.jsx)(o,{data:j.multiple}),"\n",(0,t.jsx)(n.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:'type="range"'})," to allow users to pick a date range:"]}),"\n",(0,t.jsx)(o,{data:j.range}),"\n",(0,t.jsx)(n.h2,{id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"presets"})," prop to add custom month presets. Presets are displayed next to the calendar:"]}),"\n",(0,t.jsx)(o,{data:j.presets}),"\n",(0,t.jsxs)(n.p,{children:["To use ",(0,t.jsx)(n.code,{children:"presets"})," with ",(0,t.jsx)(n.code,{children:'type="range"'}),", define the value as a tuple of two dates:"]}),"\n",(0,t.jsx)(o,{data:j.presetsRange}),"\n",(0,t.jsx)(n.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.a,{href:"/dates/month-picker/",children:"MonthPicker"})," is rendered inside ",(0,t.jsx)(n.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,t.jsx)(n.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,t.jsx)(n.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,t.jsx)(o,{data:j.modal}),"\n",(0,t.jsx)(n.h2,{id:"value-format",children:"Value format"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"valueFormat"})," prop to change the ",(0,t.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the value label:"]}),"\n",(0,t.jsx)(o,{data:j.valueFormat}),"\n",(0,t.jsx)(n.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"valueFormatter"})," is a more powerful alternative to the ",(0,t.jsx)(n.code,{children:"valueFormat"})," prop.\nIt allows formatting the value label with a custom function.\nThe function is the same for all component types (",(0,t.jsx)(n.code,{children:"default"}),", ",(0,t.jsx)(n.code,{children:"multiple"})," and ",(0,t.jsx)(n.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,t.jsxs)(n.p,{children:["Example of using a custom formatter function with ",(0,t.jsx)(n.code,{children:'type="multiple"'}),":"]}),"\n",(0,t.jsx)(o,{data:j.valueFormatter}),"\n",(0,t.jsx)(n.h2,{id:"clearable",children:"Clearable"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"clearable"})," prop to display a clear button in the right section. Note that if you set the ",(0,t.jsx)(n.code,{children:"rightSection"}),"\nprop, the clear button will not be displayed."]}),"\n",(0,t.jsx)(o,{data:j.clearable}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(o,{data:j.clearSectionMode}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(o,{data:j.disabled}),"\n",(0,t.jsx)(n.h2,{id:"min-and-max-dates",children:"Min and max dates"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minDate"})," and ",(0,t.jsx)(n.code,{children:"maxDate"})," props define the minimum and maximum dates that can be picked.\nYou can specify ",(0,t.jsx)(n.code,{children:"minDate"})," and ",(0,t.jsx)(n.code,{children:"maxDate"})," as ",(0,t.jsx)(n.code,{children:"Date"})," objects:"]}),"\n",(0,t.jsx)(o,{data:j.minMax}),"\n",(0,t.jsx)(n.h2,{id:"control-props",children:"Control props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getYearControlProps"})," and ",(0,t.jsx)(n.code,{children:"getMonthControlProps"})," props allow passing props to the control component based on the date.\nIt is useful for disabling specific dates or customising styles/className."]}),"\n",(0,t.jsx)(o,{data:j.controlProps}),"\n",(0,t.jsx)(n.h2,{id:"label-format",children:"Label format"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"decadeLabelFormat"})," and ",(0,t.jsx)(n.code,{children:"yearLabelFormat"})," props allow changing the format of the label in the header.\nThe props accept a ",(0,t.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format string"}),"."]}),"\n",(0,t.jsx)(o,{data:j.labelFormat}),"\n",(0,t.jsx)(n.h2,{id:"list-format",children:"List format"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"monthsListFormat"})," and ",(0,t.jsx)(n.code,{children:"yearsListFormat"})," props allow changing the format of the month and year labels in the list.\nThe props accept a ",(0,t.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format string"}),"."]}),"\n",(0,t.jsx)(o,{data:j.listFormat}),"\n",(0,t.jsx)(n.h2,{id:"max-level",children:"Max level"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"maxLevel"})," prop allows to set the maximum level that can be reached by clicking on the label in the header."]}),"\n",(0,t.jsx)(o,{data:j.maxLevel}),"\n",(0,t.jsx)(n.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(s,{component:"MonthPickerInput",element:"button"}),"\n",(0,t.jsx)(o,{data:j.configurator}),"\n",(0,t.jsx)(n.h2,{id:"with-icon",children:"With icon"}),"\n",(0,t.jsx)(o,{data:j.icon}),"\n",(0,t.jsx)(l,{component:"MonthPickerInput",refType:"button",package:"@mantine/dates"}),"\n",(0,t.jsx)(i,{component:"MonthPickerInput",packageName:"@mantine/dates"})]})}function _(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(L,{...e,children:(0,t.jsx)(O,{...e})})}],905926)},765346,(e,t,a)=>{let n="/dates/month-picker-input";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(905926)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);