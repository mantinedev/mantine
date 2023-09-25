(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7395],{91540:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/year-picker",function(){return n(80265)}])},80265:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(85893),r=n(11151),l=n(19905),o=n(9904),s=n(2562),d=n(94366);let{usage:i,multiple:c,deselect:u,range:h,singleRange:p,numberOfColumns:m,sizeConfigurator:f}=(0,d.$)(s.q);var x=n(67294);let g=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker defaultDate={new Date(2040, 1)} value={value} onChange={setValue} />;
}
`,j={type:"code",centered:!0,component:function(){let[e,t]=(0,x.useState)(null);return x.createElement(s.q,{defaultDate:new Date(2040,1),value:e,onChange:t})},code:g},y=`
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
`,D={type:"code",centered:!0,component:function(){let[e,t]=(0,x.useState)([null,null]),[n,a]=(0,x.useState)(new Date),r=e=>{null!==e[0]&&null===e[1]&&a(e=>new Date(e.getFullYear()+20,1)),t(e)};return x.createElement(s.q,{date:n,onDateChange:a,type:"range",value:e,onChange:r})},code:y},b=`
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
`,w={type:"code",centered:!0,component:function(){let[e,t]=(0,x.useState)(null);return x.createElement(s.q,{value:e,onChange:t,minDate:new Date(2021,1),maxDate:new Date(2028,1)})},code:b},v=`
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
`,Y=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},P={type:"code",centered:!0,component:function(){let[e,t]=(0,x.useState)(null);return x.createElement(s.q,{value:e,onChange:t,getYearControlProps:Y})},code:v},k=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`,S={type:"code",centered:!0,component:function(){let[e,t]=(0,x.useState)(null);return x.createElement(s.q,{yearsListFormat:"YY",value:e,onChange:t})},code:k},C=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`,F={type:"code",centered:!0,component:function(){let[e,t]=(0,x.useState)(null);return x.createElement(s.q,{decadeLabelFormat:"YY",value:e,onChange:t})},code:C},_=(0,l.A)(o.us.YearPicker);function O(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Demo:n,KeyboardEventsTable:l}=t;return n||N("Demo",!0),l||N("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:i}),"\n",(0,a.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(t.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(t.code,{children:"type"})," prop is ",(0,a.jsx)(t.code,{children:"range"})," or ",(0,a.jsx)(t.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(t.code,{children:"onChange"})," is called with ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(t.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(t.code,{children:"type"})," prop is not ",(0,a.jsx)(t.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"defaultDate"})," prop to set date value that will be used to determine which decade should be displayed initially.\nFor example to display ",(0,a.jsx)(t.code,{children:"2040 – 2049"})," decade set ",(0,a.jsx)(t.code,{children:"defaultDate={new Date(2040, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(t.code,{children:"defaultDate"})," will use ",(0,a.jsx)(t.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if you set ",(0,a.jsx)(t.code,{children:"date"})," prop, then ",(0,a.jsx)(t.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(n,{data:j}),"\n",(0,a.jsx)(t.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"date"}),", and ",(0,a.jsx)(t.code,{children:"onDateChange"})," props to make currently displayed decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add 20 years to current date value:"]}),"\n",(0,a.jsx)(n,{data:D}),"\n",(0,a.jsx)(t.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"minDate"})," and ",(0,a.jsx)(t.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(n,{data:w}),"\n",(0,a.jsx)(t.h2,{id:"add-props-to-year-control",children:"Add props to year control"}),"\n",(0,a.jsxs)(t.p,{children:["You can add props to year controls with ",(0,a.jsx)(t.code,{children:"getYearControlProps"})," function. It accepts year date as single argument,\nprops returned from the function will be added to year control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(n,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"change-year-controls-format",children:"Change year controls format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"yearsListFormat"})," to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year control:"]}),"\n",(0,a.jsx)(n,{data:S}),"\n",(0,a.jsx)(t.h2,{id:"change-decade-label-format",children:"Change decade label format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"decadeLabelFormat"})," to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade label:"]}),"\n",(0,a.jsx)(n,{data:F}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(t.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(t.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"year-control-aria-label",children:"Year control aria-label"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"getYearControlProps"})," to customize ",(0,a.jsx)(t.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(t.p,{children:"Note that the following events will only trigger if focus is on year control."}),"\n",(0,a.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses next non-disabled year"},{key:"ArrowLeft",description:"Focuses previous non-disabled year"},{key:"ArrowDown",description:"Focuses next non-disabled year in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled year in the same column"}]})]})}var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(_,Object.assign({},e,{children:(0,a.jsx)(O,e)}))};function N(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2562:function(e,t,n){"use strict";n.d(t,{q:function(){return w}});var a=n(67294),r=n(3154),l=n(30370),o=n(28816),s=n(68329),d=n(40484),i=n(69013),c=n(92437),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))x.call(t,n)&&g(e,n,t[n]);return e},y=(e,t)=>h(e,p(t)),D=(e,t)=>{var n={};for(var a in e)f.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))0>t.indexOf(a)&&x.call(e,a)&&(n[a]=e[a]);return n};let b={type:"default"},w=(0,r.d)((e,t)=>{let n=(0,l.w)("YearPicker",b,e),{classNames:r,styles:u,vars:h,type:p,defaultValue:m,value:f,onChange:x,__staticSelector:g,getYearControlProps:w,allowSingleDateInRange:v,allowDeselect:Y,onMouseLeave:P,onYearSelect:k,__updateDateOnYearSelect:S,__timezoneApplied:C}=n,F=D(n,["classNames","styles","vars","type","defaultValue","value","onChange","__staticSelector","getYearControlProps","allowSingleDateInRange","allowDeselect","onMouseLeave","onYearSelect","__updateDateOnYearSelect","__timezoneApplied"]),{onDateChange:_,onRootMouseLeave:O,onHoveredDateChange:E,getControlProps:N}=(0,s.D)({type:p,level:"year",allowDeselect:Y,allowSingleDateInRange:v,value:f,defaultValue:m,onChange:x,onMouseLeave:P,applyTimezone:!C}),{resolvedClassNames:V,resolvedStyles:L}=(0,o.h)({classNames:r,styles:u,props:n}),A=(0,d.e)();return a.createElement(i.f,y(j({ref:t,minLevel:"decade",__updateDateOnYearSelect:null!=S&&S,__staticSelector:g||"YearPicker",onMouseLeave:O,onYearMouseEnter:(e,t)=>E(t),onYearSelect:e=>{_(e),null==k||k(e)},getYearControlProps:e=>j(j({},N(e)),null==w?void 0:w(e)),classNames:V,styles:L},F),{date:(0,c.w)("add",F.date,A.getTimezone(),C),__timezoneApplied:!0}))});w.classes=i.f.classes,w.displayName="@mantine/dates/YearPicker"}},function(e){e.O(0,[8992,178,9013,968,9774,2888,179],function(){return e(e.s=91540)}),_N_E=e.O()}]);