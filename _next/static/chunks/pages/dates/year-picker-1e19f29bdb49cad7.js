(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48888],{2521:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/year-picker",function(){return t(78903)}])},78903:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>P});var a=t(31085),r=t(71184),l=t(15855),o=t(87816),s=t(14041);t(23464);let{usage:d,multiple:i,deselect:c,range:u,singleRange:h,numberOfColumns:p,sizeConfigurator:m}=(0,o.O)(l.w),x={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.w,{defaultDate:new Date(2040,1),value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker defaultDate={new Date(2040, 1)} value={value} onChange={setValue} />;
}
`},j={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)([null,null]),[t,r]=(0,s.useState)(new Date);return(0,a.jsx)(l.w,{date:t,onDateChange:r,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&r(e=>new Date(e.getFullYear()+20,1)),n(e)}})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 20, 1));
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
`},g={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.w,{value:e,onChange:n,minDate:new Date(2021,1),maxDate:new Date(2028,1)})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
`},f=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},y={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.w,{value:e,onChange:n,getYearControlProps:f})},code:`
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@mantine/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
`},D={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.w,{yearsListFormat:"YY",value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`},w={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.w,{decadeLabelFormat:"YY",value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`};var Y=t(85954),b=t(38215);let v=(0,Y.P)(b.XZ.YearPicker);function k(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t,KeyboardEventsTable:l}=n;return t||S("Demo",!0),l||S("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t,{data:d}),"\n",(0,a.jsx)(n.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(n.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(n.code,{children:"type"})," prop is ",(0,a.jsx)(n.code,{children:"range"})," or ",(0,a.jsx)(n.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(n.code,{children:"onChange"})," is called with ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(t,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(t,{data:i}),"\n",(0,a.jsx)(n.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(t,{data:u}),"\n",(0,a.jsx)(n.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(n.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(n.code,{children:"type"})," prop is not ",(0,a.jsx)(n.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(t,{data:h}),"\n",(0,a.jsx)(n.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"defaultDate"})," prop to set date value that will be used to determine which decade should be displayed initially.\nFor example to display ",(0,a.jsx)(n.code,{children:"2040 – 2049"})," decade set ",(0,a.jsx)(n.code,{children:"defaultDate={new Date(2040, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(n.code,{children:"defaultDate"})," will use ",(0,a.jsx)(n.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that if you set ",(0,a.jsx)(n.code,{children:"date"})," prop, then ",(0,a.jsx)(n.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(t,{data:x}),"\n",(0,a.jsx)(n.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"date"}),", and ",(0,a.jsx)(n.code,{children:"onDateChange"})," props to make currently displayed decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add 20 years to current date value:"]}),"\n",(0,a.jsx)(t,{data:j}),"\n",(0,a.jsx)(n.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"minDate"})," and ",(0,a.jsx)(n.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(t,{data:g}),"\n",(0,a.jsx)(n.h2,{id:"add-props-to-year-control",children:"Add props to year control"}),"\n",(0,a.jsxs)(n.p,{children:["You can add props to year controls with ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," function. It accepts year date as single argument,\nprops returned from the function will be added to year control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(t,{data:y}),"\n",(0,a.jsx)(n.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(t,{data:p}),"\n",(0,a.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(t,{data:m}),"\n",(0,a.jsx)(n.h2,{id:"change-year-controls-format",children:"Change year controls format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"yearsListFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year control:"]}),"\n",(0,a.jsx)(t,{data:D}),"\n",(0,a.jsx)(n.h2,{id:"change-decade-label-format",children:"Change decade label format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"decadeLabelFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade label:"]}),"\n",(0,a.jsx)(t,{data:w}),"\n",(0,a.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(n.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(n.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"year-control-aria-label",children:"Year control aria-label"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," to customize ",(0,a.jsx)(n.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(n.p,{children:"Note that the following events will only trigger if focus is on year control."}),"\n",(0,a.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses next non-disabled year"},{key:"ArrowLeft",description:"Focuses previous non-disabled year"},{key:"ArrowDown",description:"Focuses next non-disabled year in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled year in the same column"}]})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(v,{...e,children:(0,a.jsx)(k,{...e})})}function S(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15855:(e,n,t)=>{"use strict";t.d(n,{w:()=>h});var a=t(31085),r=t(6754),l=t(29686),o=t(36456),s=t(87704),d=t(16088);t(23464);var i=t(65695);t(14041);var c=t(46891);let u={type:"default"},h=(0,r.P9)((e,n)=>{let t=(0,l.Y)("YearPicker",u,e),{classNames:r,styles:h,vars:p,type:m,defaultValue:x,value:j,onChange:g,__staticSelector:f,getYearControlProps:y,allowSingleDateInRange:D,allowDeselect:w,onMouseLeave:Y,onYearSelect:b,__updateDateOnYearSelect:v,__timezoneApplied:k,...P}=t,{onDateChange:S,onRootMouseLeave:C,onHoveredDateChange:F,getControlProps:_}=(0,s.k)({type:m,level:"year",allowDeselect:w,allowSingleDateInRange:D,value:j,defaultValue:x,onChange:g,onMouseLeave:Y,applyTimezone:!k}),{resolvedClassNames:V,resolvedStyles:N}=(0,o.Y)({classNames:r,styles:h,props:t}),L=(0,d.E)();return(0,a.jsx)(c.V,{ref:n,minLevel:"decade",__updateDateOnYearSelect:v??!1,__staticSelector:f||"YearPicker",onMouseLeave:C,onYearMouseEnter:(e,n)=>F(n),onYearSelect:e=>{S(e),b?.(e)},getYearControlProps:e=>({..._(e),...y?.(e)}),classNames:V,styles:N,...P,date:(0,i.C)("add",P.date,L.getTimezone(),k),__timezoneApplied:!0})});h.classes=c.V.classes,h.displayName="@mantine/dates/YearPicker"}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,46891,88839,90636,46593,38792],()=>n(2521)),_N_E=e.O()}]);