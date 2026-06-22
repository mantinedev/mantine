(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var a=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var l in e)a(r,l,{get:e[l],enumerable:!0});return t||a(r,Symbol.toStringTag,{value:"Module"}),r}])},931882,e=>{"use strict";var a=e.i(191788),t=e.i(171481);let r=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),a.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),l=a.forwardRef((e,l)=>a.createElement(t.default,{ref:l,...e,weights:r}));l.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,l],931882)},70530,e=>{"use strict";var a=e.i(391398),t=e.i(494834),r=e.i(191788),l=e.i(632036);let n=({type:e,date:a,locale:r,format:l})=>{if("multiple"===e&&Array.isArray(a)){if(1===a.length)return(0,t.default)(a[0]).locale(r).format(l);if(a.length>1)return`${a.length} dates selected`}return""};e.s(["getSharedPickerInputDemos",0,function(e){let o,s,i,c,d,u,p,m;return{usage:{type:"code",centered:!0,maxWidth:400,code:(o=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[t,l]=(0,r.useState)(null);return(0,a.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:l})}},multiple:{type:"code",centered:!0,maxWidth:400,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <${s}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[t,l]=(0,r.useState)([]);return(0,a.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:l})}},range:{type:"code",centered:!0,maxWidth:400,code:(i=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[t,l]=(0,r.useState)([null,null]);return(0,a.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:l})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:(c=e.displayName.replace("@mantine/dates/",""),`import { ${c} } from '@mantine/dates';


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
`),component:()=>{let[t,l]=(0,r.useState)(null);return(0,a.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:l})}},icon:{type:"code",centered:!0,maxWidth:400,code:(u=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[t,n]=(0,r.useState)(null);return(0,a.jsx)(e,{leftSection:(0,a.jsx)(l.CalendarBlankIcon,{size:18}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:(p=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>(0,a.jsx)(e,{clearable:!0,defaultValue:(0,t.default)().format("YYYY-MM-DD"),label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:(m=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[t,l]=(0,r.useState)([]);return(0,a.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:l,type:"multiple",valueFormatter:n})}}}}],70530)},986451,e=>{"use strict";var a=e.i(337976),t=e.i(164036),r=e.i(831474),l={yearPickerRoot:"m_d01e596f",presetsList:"m_52a6b4b0",presetButton:"m_b0d93233"},n=e.i(191788),o=e.i(391398),s=e.i(232471),i=e.i(284629),c=e.i(481178),d=e.i(275519),u=e.i(433512),p=e.i(44091),m=e.i(62904),h=e.i(391466);let y=(0,c.createVarsResolver)((e,{size:a})=>({yearPickerRoot:{"--preset-font-size":(0,u.getFontSize)(a)}})),f={type:"default"},Y=(0,d.factory)(e=>{let c=(0,p.useProps)("YearPicker",f,e),{classNames:d,styles:u,vars:Y,type:x,defaultValue:b,value:j,onChange:g,__staticSelector:k,getYearControlProps:P,allowSingleDateInRange:D,allowDeselect:v,onMouseLeave:M,onYearSelect:S,__updateDateOnYearSelect:I,__onPresetSelect:C,__stopPropagation:w,presets:V,className:F,style:_,unstyled:O,size:L,attributes:E,...W}=c,{calendarProps:N,others:A}=(0,r.pickCalendarProps)(W),R=(0,n.useRef)(null),T=(0,n.useRef)(null),$=(0,h.useStyles)({name:k||"YearPicker",classes:l,props:c,className:F,style:_,classNames:d,styles:u,unstyled:O,attributes:E,rootSelector:V?"yearPickerRoot":void 0,varsResolver:y,vars:Y}),{onDateChange:z,onRootMouseLeave:B,onHoveredDateChange:Z,getControlProps:U,setValue:X}=(0,a.useDatesState)({type:x,level:"year",allowDeselect:v,allowSingleDateInRange:D,value:j,defaultValue:b,onChange:g,onMouseLeave:M}),{resolvedClassNames:H,resolvedStyles:K}=(0,m.useResolvedStylesApi)({classNames:d,styles:u,props:c}),G=(0,o.jsx)(t.Calendar,{classNames:H,styles:K,size:L,...N,...!V?A:{},minLevel:"decade",__updateDateOnYearSelect:I??!1,__staticSelector:k||"YearPicker",onMouseLeave:B,onYearMouseEnter:(e,a)=>Z(a),onYearSelect:e=>{z(e),S?.(e)},getYearControlProps:e=>({...U(e),...P?.(e)}),__setDateRef:R,__setLevelRef:T,__stopPropagation:w,attributes:E,...!V?{className:F,style:_}:{}});if(!V)return G;let q=V.map((e,a)=>(0,o.jsx)(i.UnstyledButton,{...$("presetButton"),onClick:()=>{var a;let t;void 0!==(t=Array.isArray(a=e.value)?a[0]:a)&&(R.current?.(t),T.current?.("decade"),C?C(a):X(a))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":w||void 0,children:e.label},a));return(0,o.jsxs)(s.Box,{...$("yearPickerRoot"),size:L,...A,children:[(0,o.jsx)("div",{...$("presetsList"),children:q}),G]})});Y.classes={...t.Calendar.classes,...l},Y.varsResolver=y,Y.displayName="@mantine/dates/YearPicker",e.s(["YearPicker",0,Y],986451)},182123,e=>{"use strict";var a=e.i(391398),t=e.i(38856),r=e.i(648863),l=e.i(70530),n=e.i(931882),o=e.i(671640),s=e.i(568827),i=e.i(782681),c=e.i(878166),d=e.i(831474),u=e.i(986451),p=e.i(275519),m=e.i(44091),h=e.i(62904);let y={type:"default",size:"sm",valueFormat:"YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},f=(0,p.factory)(e=>{let t=(0,m.useProps)(["Input","InputWrapper","YearPickerInput"],y,e),{type:r,value:l,defaultValue:n,onChange:o,valueFormat:p,labelSeparator:f,locale:Y,classNames:x,styles:b,unstyled:j,closeOnChange:g,size:k,variant:P,dropdownType:D,sortDates:v,minDate:M,maxDate:S,vars:I,valueFormatter:C,presets:w,attributes:V,...F}=t,{resolvedClassNames:_,resolvedStyles:O}=(0,h.useResolvedStylesApi)({classNames:x,styles:b,props:t}),{calendarProps:L,others:E}=(0,d.pickCalendarProps)(F),{_value:W,setValue:N,formattedValue:A,dropdownHandlers:R,dropdownOpened:T,onClear:$,shouldClear:z}=(0,c.useDatesInput)({type:r,value:l,defaultValue:n,onChange:o,locale:Y,format:p,labelSeparator:f,closeOnChange:g,sortDates:v,valueFormatter:C});return(0,a.jsx)(i.PickerInputBase,{formattedValue:A,dropdownOpened:T,dropdownHandlers:R,classNames:_,styles:O,unstyled:j,onClear:$,shouldClear:z,value:W,size:k,variant:P,dropdownType:D,...E,type:r,__staticSelector:"YearPickerInput",attributes:V,children:(0,a.jsx)(u.YearPicker,{...L,size:k,variant:P,type:r,value:W,defaultDate:L.defaultDate||(Array.isArray(W)?W[0]||(0,s.getDefaultClampedDate)({maxDate:S,minDate:M}):W||(0,s.getDefaultClampedDate)({maxDate:S,minDate:M})),onChange:N,locale:Y,classNames:_,styles:O,unstyled:j,__staticSelector:"YearPickerInput",__stopPropagation:"popover"===D,minDate:M,maxDate:S,presets:w,attributes:V})})});f.classes={...i.PickerInputBase.classes,...u.YearPicker.classes},f.displayName="@mantine/dates/YearPickerInput";let Y={type:"code",component:function(){return(0,a.jsxs)(o.Stack,{children:[(0,a.jsx)(f,{label:"clearSectionMode='both' (default)",placeholder:"Pick year",defaultValue:new Date,clearable:!0,rightSection:(0,a.jsx)(n.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,a.jsx)(f,{label:"clearSectionMode='rightSection'",placeholder:"Pick year",defaultValue:new Date,clearable:!0,rightSection:(0,a.jsx)(n.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,a.jsx)(f,{label:"clearSectionMode='clear'",placeholder:"Pick year",defaultValue:new Date,clearable:!0,rightSection:(0,a.jsx)(n.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <YearPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick year"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <YearPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick year"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <YearPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick year"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},x={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(f,{valueFormat:"YY",type:"multiple",label:"Pick year",placeholder:"Pick year"})},code:`
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}
`},b={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(f,{valueFormat:"YY",type:"multiple",label:"Disabled",placeholder:"Pick year",disabled:!0})},code:`
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Disabled"
      placeholder="Pick year"
      disabled
    />
  );
}
`};var j=e.i(191788);let g={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,j.useState)(null);return(0,a.jsx)(f,{label:"Pick year",placeholder:"Pick year",value:e,onChange:t,minDate:new Date(2021,1),maxDate:new Date(2028,1)})},code:`
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPickerInput
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
`};var k=e.i(494834);let P=e=>(0,k.default)(e).year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:(0,k.default)(e).year()===new Date().getFullYear()+1?{disabled:!0}:{},D={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,j.useState)(null);return(0,a.jsx)(f,{label:"Pick year",placeholder:"Pick year",value:e,onChange:t,getYearControlProps:P})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPickerInput, YearPickerInputProps } from '@mantine/dates';

const getYearControlProps: YearPickerInputProps['getYearControlProps'] = (date) => {
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

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPickerInput
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
    />
  );
}
`},v={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,j.useState)(null);return(0,a.jsx)(f,{yearsListFormat:"YY",label:"Pick year",placeholder:"Pick year",value:e,onChange:t})},code:`
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPickerInput
      yearsListFormat="YY"
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
    />
  );
}
`},M={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,j.useState)(null);return(0,a.jsx)(f,{decadeLabelFormat:"YY",label:"Pick year",placeholder:"Pick year",value:e,onChange:t})},code:`
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPickerInput
      decadeLabelFormat="YY"
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
    />
  );
}
`},S={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(f,{label:"With presets",placeholder:"Select year",presets:[{value:(0,k.default)().startOf("year").format("YYYY-MM-DD"),label:"This year"},{value:(0,k.default)().add(1,"year").startOf("year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,k.default)().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),label:"Last year"},{value:(0,k.default)().add(5,"year").startOf("year").format("YYYY-MM-DD"),label:"In 5 years"},{value:(0,k.default)().subtract(5,"year").startOf("year").format("YYYY-MM-DD"),label:"5 years ago"}]})},code:`
import dayjs from 'dayjs';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      label="With presets"
      placeholder="Select year"
      presets={[
        { value: dayjs().startOf('year').format('YYYY-MM-DD'), label: 'This year' },
        { value: dayjs().add(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Last year' },
        { value: dayjs().add(5, 'year').startOf('year').format('YYYY-MM-DD'), label: 'In 5 years' },
        { value: dayjs().subtract(5, 'year').startOf('year').format('YYYY-MM-DD'), label: '5 years ago' },
      ]}
    />
  );
}
`},I={type:"code",centered:!0,maxWidth:400,component:function(){let e=(0,k.default)();return(0,a.jsx)(f,{type:"range",label:"With presets",placeholder:"Select years range",presets:[{value:[e.subtract(2,"year").startOf("year").format("YYYY-MM-DD"),e.startOf("year").format("YYYY-MM-DD")],label:"Last 2 years"},{value:[e.subtract(5,"year").startOf("year").format("YYYY-MM-DD"),e.startOf("year").format("YYYY-MM-DD")],label:"Last 5 years"},{value:[e.startOf("year").format("YYYY-MM-DD"),e.add(5,"year").startOf("year").format("YYYY-MM-DD")],label:"Next 5 years"},{value:[e.subtract(10,"year").startOf("year").format("YYYY-MM-DD"),e.startOf("year").format("YYYY-MM-DD")],label:"Last decade"}]})},code:`
import dayjs from 'dayjs';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <YearPickerInput
      type="range"
      label="With presets"
      placeholder="Select years range"
      presets={[
        {
          value: [today.subtract(2, 'year').startOf('year').format('YYYY-MM-DD'), today.startOf('year').format('YYYY-MM-DD')],
          label: 'Last 2 years',
        },
        {
          value: [today.subtract(5, 'year').startOf('year').format('YYYY-MM-DD'), today.startOf('year').format('YYYY-MM-DD')],
          label: 'Last 5 years',
        },
        {
          value: [today.startOf('year').format('YYYY-MM-DD'), today.add(5, 'year').startOf('year').format('YYYY-MM-DD')],
          label: 'Next 5 years',
        },
        {
          value: [
            today.subtract(10, 'year').startOf('year').format('YYYY-MM-DD'),
            today.startOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last decade',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1};var C=(0,r.__exportAll)({clearSectionMode:()=>Y,clearable:()=>E,configurator:()=>_,controlProps:()=>D,decadeLabelFormat:()=>M,disabled:()=>b,icon:()=>L,minMax:()=>g,modal:()=>O,multiple:()=>V,presets:()=>S,presetsRange:()=>I,range:()=>F,usage:()=>w,valueFormat:()=>x,valueFormatter:()=>W,yearsListFormat:()=>v});let{usage:w,multiple:V,range:F,configurator:_,modal:O,icon:L,clearable:E,valueFormatter:W}=(0,l.getSharedPickerInputDemos)(f);e.i(603441);var N=e.i(62558);e.i(457450);var A=e.i(418026);let R=(0,N.Layout)(A.MDX_DATA.YearPickerInput);function T(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.useMDXComponents)(),...e.components},{ClearSectionMode:l,Demo:n,GetElementRef:o,InputAccessibility:s,InputFeatures:i}=r;return l||$("ClearSectionMode",!0),n||$("Demo",!0),o||$("GetElementRef",!0),s||$("InputAccessibility",!0),i||$("InputFeatures",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"yearpicker-props",children:"YearPicker props"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"YearPickerInput"})," supports most of the ",(0,a.jsx)(r.a,{href:"/dates/year-picker/",children:"YearPicker"})," props.\nRead through the ",(0,a.jsx)(r.a,{href:"/dates/year-picker/",children:"YearPicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:C.usage}),"\n",(0,a.jsx)(r.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(r.p,{children:["Set ",(0,a.jsx)(r.code,{children:'type="multiple"'})," to allow users to pick multiple dates:"]}),"\n",(0,a.jsx)(n,{data:C.multiple}),"\n",(0,a.jsx)(r.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(r.p,{children:["Set ",(0,a.jsx)(r.code,{children:'type="range"'})," to allow users to pick a date range:"]}),"\n",(0,a.jsx)(n,{data:C.range}),"\n",(0,a.jsx)(r.h2,{id:"presets",children:"Presets"}),"\n",(0,a.jsxs)(r.p,{children:["Use the ",(0,a.jsx)(r.code,{children:"presets"})," prop to add custom year presets. Presets are displayed next to the calendar:"]}),"\n",(0,a.jsx)(n,{data:C.presets}),"\n",(0,a.jsxs)(r.p,{children:["To use ",(0,a.jsx)(r.code,{children:"presets"})," with ",(0,a.jsx)(r.code,{children:'type="range"'}),", define the value as a tuple of two dates:"]}),"\n",(0,a.jsx)(n,{data:C.presetsRange}),"\n",(0,a.jsx)(r.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,a.jsxs)(r.p,{children:["By default, ",(0,a.jsx)(r.a,{href:"/dates/year-picker/",children:"YearPicker"})," is rendered inside ",(0,a.jsx)(r.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,a.jsx)(r.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,a.jsx)(r.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,a.jsx)(n,{data:C.modal}),"\n",(0,a.jsx)(r.h2,{id:"value-format",children:"Value format"}),"\n",(0,a.jsxs)(r.p,{children:["Use the ",(0,a.jsx)(r.code,{children:"valueFormat"})," prop to change the ",(0,a.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the value label:"]}),"\n",(0,a.jsx)(n,{data:C.valueFormat}),"\n",(0,a.jsx)(r.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"valueFormatter"})," is a more powerful alternative to the ",(0,a.jsx)(r.code,{children:"valueFormat"})," prop.\nIt allows formatting the value label with a custom function.\nThe function is the same for all component types (",(0,a.jsx)(r.code,{children:"default"}),", ",(0,a.jsx)(r.code,{children:"multiple"})," and ",(0,a.jsx)(r.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,a.jsxs)(r.p,{children:["Example of using a custom formatter function with ",(0,a.jsx)(r.code,{children:'type="multiple"'}),":"]}),"\n",(0,a.jsx)(n,{data:C.valueFormatter}),"\n",(0,a.jsx)(r.h2,{id:"clearable",children:"Clearable"}),"\n",(0,a.jsxs)(r.p,{children:["Set the ",(0,a.jsx)(r.code,{children:"clearable"})," prop to display a clear button in the right section. Note that if you set the ",(0,a.jsx)(r.code,{children:"rightSection"}),"\nprop, the clear button will not be displayed."]}),"\n",(0,a.jsx)(n,{data:C.clearable}),"\n",(0,a.jsx)(l,{}),"\n",(0,a.jsx)(n,{data:C.clearSectionMode}),"\n",(0,a.jsx)(r.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(n,{data:C.disabled}),"\n",(0,a.jsx)(r.h2,{id:"min-and-max-dates",children:"Min and max dates"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"minDate"})," and ",(0,a.jsx)(r.code,{children:"maxDate"})," props define the minimum and maximum dates that can be picked.\nYou can specify ",(0,a.jsx)(r.code,{children:"minDate"})," and ",(0,a.jsx)(r.code,{children:"maxDate"})," as ",(0,a.jsx)(r.code,{children:"Date"})," objects:"]}),"\n",(0,a.jsx)(n,{data:C.minMax}),"\n",(0,a.jsx)(r.h2,{id:"control-props",children:"Control props"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"getYearControlProps"})," prop allows passing props to the control component based on the date.\nIt is useful for disabling specific dates or customising styles/className."]}),"\n",(0,a.jsx)(n,{data:C.controlProps}),"\n",(0,a.jsx)(r.h2,{id:"year-label-format",children:"Year label format"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"yearsListFormat"})," props allow changing the format of the year label in the years list.\nIt accepts a ",(0,a.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format string"}),"."]}),"\n",(0,a.jsx)(n,{data:C.yearsListFormat}),"\n",(0,a.jsx)(r.h2,{id:"decade-label-format",children:"Decade label format"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"decadeLabelFormat"})," prop allows changing the format of the decade label in the header.\nIt accepts a ",(0,a.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format string"}),"."]}),"\n",(0,a.jsx)(n,{data:C.decadeLabelFormat}),"\n",(0,a.jsx)(r.h2,{id:"input-props",children:"Input props"}),"\n",(0,a.jsx)(i,{component:"MonthPickerInput",element:"button"}),"\n",(0,a.jsx)(n,{data:C.configurator}),"\n",(0,a.jsx)(r.h2,{id:"with-icon",children:"With icon"}),"\n",(0,a.jsx)(n,{data:C.icon}),"\n",(0,a.jsx)(o,{component:"YearPickerInput",refType:"button",package:"@mantine/dates"}),"\n",(0,a.jsx)(s,{component:"YearPickerInput",packageName:"@mantine/dates"})]})}function $(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,a.jsx)(R,{...e,children:(0,a.jsx)(T,{...e})})}],182123)},352140,(e,a,t)=>{let r="/dates/year-picker-input";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(182123)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(a=>Promise.all(["static/chunks/22379_btw709h.js"].map(a=>e.l(a))).then(()=>a(493594)))},828805,e=>{e.v(a=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(a=>e.l(a))).then(()=>a(879466)))}]);