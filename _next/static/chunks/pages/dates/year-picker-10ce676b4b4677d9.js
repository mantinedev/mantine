(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48888],{2058:(e,n,t)=>{"use strict";t.d(n,{w:()=>c});var a=t(6029),r=t(8411),l=t(38919),o=t(38757),s=t(54180);t(74312),t(55729);var d=t(97164);let i={type:"default"},c=(0,r.P9)((e,n)=>{let t=(0,l.Y)("YearPicker",i,e),{classNames:r,styles:c,vars:u,type:h,defaultValue:p,value:m,onChange:x,__staticSelector:j,getYearControlProps:f,allowSingleDateInRange:g,allowDeselect:y,onMouseLeave:Y,onYearSelect:b,__updateDateOnYearSelect:w,...D}=t,{onDateChange:v,onRootMouseLeave:k,onHoveredDateChange:P,getControlProps:S}=(0,s.k)({type:h,level:"year",allowDeselect:y,allowSingleDateInRange:g,value:m,defaultValue:p,onChange:x,onMouseLeave:Y}),{resolvedClassNames:C,resolvedStyles:F}=(0,o.Y)({classNames:r,styles:c,props:t});return(0,a.jsx)(d.V,{ref:n,minLevel:"decade",__updateDateOnYearSelect:w??!1,__staticSelector:j||"YearPicker",onMouseLeave:k,onYearMouseEnter:(e,n)=>P(n),onYearSelect:e=>{v(e),b?.(e)},getYearControlProps:e=>({...S(e),...f?.(e)}),classNames:C,styles:F,...D})});c.classes=d.V.classes,c.displayName="@mantine/dates/YearPicker"},58679:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var a=t(6029),r=t(16285),l=t(2058),o=t(17461),s=t(74312),d=t(55729);let{usage:i,multiple:c,deselect:u,range:h,singleRange:p,numberOfColumns:m,sizeConfigurator:x}=(0,o.O)(l.w),j={type:"code",centered:!0,component:function(){let[e,n]=(0,d.useState)(null);return(0,a.jsx)(l.w,{defaultDate:"2040-02-01",value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker defaultDate="2040-02-01" value={value} onChange={setValue} />;
}
`},f={type:"code",centered:!0,component:function(){let[e,n]=(0,d.useState)([null,null]),[t,r]=(0,d.useState)(s().format("YYYY-MM-DD"));return(0,a.jsx)(l.w,{date:t,onDateChange:r,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&r(e=>s(e).add(20,"year").format("YYYY-MM-DD")),n(e)}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const handleChange = (val: [string | null, string | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => dayjs(current).add(20, 'year').format('YYYY-MM-DD'));
    }

    setValue(val);
  };

  return (
    <YearPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`},g={type:"code",centered:!0,component:function(){let[e,n]=(0,d.useState)(null);return(0,a.jsx)(l.w,{value:e,onChange:n,minDate:"2021-02-01",maxDate:"2028-02-01"})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate="2021-02-01"
      maxDate="2028-02-01"
    />
  );
}
`},y=e=>s(e).year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:s(e).year()===new Date().getFullYear()+1?{disabled:!0}:{},Y={type:"code",centered:!0,component:function(){let[e,n]=(0,d.useState)(null);return(0,a.jsx)(l.w,{value:e,onChange:n,getYearControlProps:y})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@mantine/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
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
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
`},b={type:"code",centered:!0,component:function(){let[e,n]=(0,d.useState)(null);return(0,a.jsx)(l.w,{yearsListFormat:"YY",value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`},w={type:"code",centered:!0,component:function(){let[e,n]=(0,d.useState)(null);return(0,a.jsx)(l.w,{decadeLabelFormat:"YY",value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`};var D=t(38547),v=t(5262);let k=(0,D.P)(v.XZ.YearPicker);function P(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t,KeyboardEventsTable:l}=n;return t||C("Demo",!0),l||C("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t,{data:i}),"\n",(0,a.jsx)(n.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(n.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(n.code,{children:"type"})," prop is ",(0,a.jsx)(n.code,{children:"range"})," or ",(0,a.jsx)(n.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(n.code,{children:"onChange"})," is called with ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(t,{data:u}),"\n",(0,a.jsx)(n.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(t,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(t,{data:h}),"\n",(0,a.jsx)(n.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(n.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(n.code,{children:"type"})," prop is not ",(0,a.jsx)(n.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(t,{data:p}),"\n",(0,a.jsx)(n.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"defaultDate"})," prop to set date value that will be used to determine which decade should be displayed initially.\nFor example to display ",(0,a.jsx)(n.code,{children:"2040 – 2049"})," decade set ",(0,a.jsx)(n.code,{children:"defaultDate={new Date(2040, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(n.code,{children:"defaultDate"})," will use ",(0,a.jsx)(n.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that if you set ",(0,a.jsx)(n.code,{children:"date"})," prop, then ",(0,a.jsx)(n.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(t,{data:j}),"\n",(0,a.jsx)(n.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"date"}),", and ",(0,a.jsx)(n.code,{children:"onDateChange"})," props to make currently displayed decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add 20 years to current date value:"]}),"\n",(0,a.jsx)(t,{data:f}),"\n",(0,a.jsx)(n.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"minDate"})," and ",(0,a.jsx)(n.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(t,{data:g}),"\n",(0,a.jsx)(n.h2,{id:"add-props-to-year-control",children:"Add props to year control"}),"\n",(0,a.jsxs)(n.p,{children:["You can add props to year controls with ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," function. It accepts year date as single argument,\nprops returned from the function will be added to year control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(t,{data:Y}),"\n",(0,a.jsx)(n.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(t,{data:m}),"\n",(0,a.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(t,{data:x}),"\n",(0,a.jsx)(n.h2,{id:"change-year-controls-format",children:"Change year controls format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"yearsListFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year control:"]}),"\n",(0,a.jsx)(t,{data:b}),"\n",(0,a.jsx)(n.h2,{id:"change-decade-label-format",children:"Change decade label format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"decadeLabelFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade label:"]}),"\n",(0,a.jsx)(t,{data:w}),"\n",(0,a.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(n.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(n.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"year-control-aria-label",children:"Year control aria-label"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," to customize ",(0,a.jsx)(n.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(n.p,{children:"Note that the following events will only trigger if focus is on year control."}),"\n",(0,a.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses next non-disabled year"},{key:"ArrowLeft",description:"Focuses previous non-disabled year"},{key:"ArrowDown",description:"Focuses next non-disabled year in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled year in the same column"}]})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(k,{...e,children:(0,a.jsx)(P,{...e})})}function C(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89513:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/year-picker",function(){return t(58679)}])}},e=>{e.O(0,[38547,97164,16202,90636,46593,38792],()=>e(e.s=89513)),_N_E=e.O()}]);