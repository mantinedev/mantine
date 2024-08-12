(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77395],{15682:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/year-picker",function(){return t(20223)}])},20223:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var a=t(52322),r=t(45392),l=t(98071),o=t(49640),s=t(2784);t(28879);let{usage:d,multiple:i,deselect:c,range:u,singleRange:h,numberOfColumns:p,sizeConfigurator:m}=(0,o.$)(l.q),x={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.q,{defaultDate:new Date(2040,1),value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker defaultDate={new Date(2040, 1)} value={value} onChange={setValue} />;
}
`},j={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)([null,null]),[t,r]=(0,s.useState)(new Date);return(0,a.jsx)(l.q,{date:t,onDateChange:r,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&r(e=>new Date(e.getFullYear()+20,1)),n(e)}})},code:`
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
`},f={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.q,{value:e,onChange:n,minDate:new Date(2021,1),maxDate:new Date(2028,1)})},code:`
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
`},g=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},y={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.q,{value:e,onChange:n,getYearControlProps:g})},code:`
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
`},D={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.q,{yearsListFormat:"YY",value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`},w={type:"code",centered:!0,component:function(){let[e,n]=(0,s.useState)(null);return(0,a.jsx)(l.q,{decadeLabelFormat:"YY",value:e,onChange:n})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`};var Y=t(25071),b=t(15019);let v=(0,Y.A)(b.us.YearPicker);function k(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t,KeyboardEventsTable:l}=n;return t||S("Demo",!0),l||S("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t,{data:d}),"\n",(0,a.jsx)(n.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(n.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(n.code,{children:"type"})," prop is ",(0,a.jsx)(n.code,{children:"range"})," or ",(0,a.jsx)(n.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(n.code,{children:"onChange"})," is called with ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(t,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(t,{data:i}),"\n",(0,a.jsx)(n.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(t,{data:u}),"\n",(0,a.jsx)(n.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(n.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(n.code,{children:"type"})," prop is not ",(0,a.jsx)(n.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(t,{data:h}),"\n",(0,a.jsx)(n.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"defaultDate"})," prop to set date value that will be used to determine which decade should be displayed initially.\nFor example to display ",(0,a.jsx)(n.code,{children:"2040 – 2049"})," decade set ",(0,a.jsx)(n.code,{children:"defaultDate={new Date(2040, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(n.code,{children:"defaultDate"})," will use ",(0,a.jsx)(n.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that if you set ",(0,a.jsx)(n.code,{children:"date"})," prop, then ",(0,a.jsx)(n.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(t,{data:x}),"\n",(0,a.jsx)(n.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"date"}),", and ",(0,a.jsx)(n.code,{children:"onDateChange"})," props to make currently displayed decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add 20 years to current date value:"]}),"\n",(0,a.jsx)(t,{data:j}),"\n",(0,a.jsx)(n.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"minDate"})," and ",(0,a.jsx)(n.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(t,{data:f}),"\n",(0,a.jsx)(n.h2,{id:"add-props-to-year-control",children:"Add props to year control"}),"\n",(0,a.jsxs)(n.p,{children:["You can add props to year controls with ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," function. It accepts year date as single argument,\nprops returned from the function will be added to year control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(t,{data:y}),"\n",(0,a.jsx)(n.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(t,{data:p}),"\n",(0,a.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(t,{data:m}),"\n",(0,a.jsx)(n.h2,{id:"change-year-controls-format",children:"Change year controls format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"yearsListFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year control:"]}),"\n",(0,a.jsx)(t,{data:D}),"\n",(0,a.jsx)(n.h2,{id:"change-decade-label-format",children:"Change decade label format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"decadeLabelFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade label:"]}),"\n",(0,a.jsx)(t,{data:w}),"\n",(0,a.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(n.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(n.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"year-control-aria-label",children:"Year control aria-label"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," to customize ",(0,a.jsx)(n.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(n.p,{children:"Note that the following events will only trigger if focus is on year control."}),"\n",(0,a.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses next non-disabled year"},{key:"ArrowLeft",description:"Focuses previous non-disabled year"},{key:"ArrowDown",description:"Focuses next non-disabled year in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled year in the same column"}]})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(v,{...e,children:(0,a.jsx)(k,{...e})})}function S(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},98071:function(e,n,t){"use strict";t.d(n,{q:function(){return h}});var a=t(52322),r=t(82027),l=t(38483),o=t(51477),s=t(82083),d=t(46766);t(28879);var i=t(51235);t(2784);var c=t(11204);let u={type:"default"},h=(0,r.d5)((e,n)=>{let t=(0,l.w)("YearPicker",u,e),{classNames:r,styles:h,vars:p,type:m,defaultValue:x,value:j,onChange:f,__staticSelector:g,getYearControlProps:y,allowSingleDateInRange:D,allowDeselect:w,onMouseLeave:Y,onYearSelect:b,__updateDateOnYearSelect:v,__timezoneApplied:k,...P}=t,{onDateChange:S,onRootMouseLeave:C,onHoveredDateChange:F,getControlProps:_}=(0,s.D)({type:m,level:"year",allowDeselect:w,allowSingleDateInRange:D,value:j,defaultValue:x,onChange:f,onMouseLeave:Y,applyTimezone:!k}),{resolvedClassNames:N,resolvedStyles:V}=(0,o.h)({classNames:r,styles:h,props:t}),L=(0,d.e)();return(0,a.jsx)(c.f,{ref:n,minLevel:"decade",__updateDateOnYearSelect:v??!1,__staticSelector:g||"YearPicker",onMouseLeave:C,onYearMouseEnter:(e,n)=>F(n),onYearSelect:e=>{S(e),b?.(e)},getYearControlProps:e=>({..._(e),...y?.(e)}),classNames:N,styles:V,...P,date:(0,i.w)("add",P.date,L.getTimezone(),k),__timezoneApplied:!0})});h.classes=c.f.classes,h.displayName="@mantine/dates/YearPicker"}},function(e){e.O(0,[61177,66748,11340,11204,36386,92888,49774,40179],function(){return e(e.s=15682)}),_N_E=e.O()}]);