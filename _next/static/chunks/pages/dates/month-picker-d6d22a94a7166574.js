(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75887],{70069:function(e,t,n){var a;a=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),o="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function l(e,t,n){var a,o;return"m"===n?t?"минута":"минуту":e+" "+(a=+e,o=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[n].split("_"),a%10==1&&a%100!=11?o[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?o[1]:o[2])}var s=function(e,a){return r.test(a)?t[e.month()]:n[e.month()]};s.s=n,s.f=t;var d=function(e,t){return r.test(t)?a[e.month()]:o[e.month()]};d.s=o,d.f=a;var i={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:s,monthsShort:d,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:l,mm:l,h:"час",hh:l,d:"день",dd:l,M:"месяц",MM:l,y:"год",yy:l},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(i,null,!0),i},e.exports=a(n(23464))},57755:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/month-picker",function(){return n(43457)}])},43457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var a=n(31085),o=n(71184),r=n(27435),l=n(87816),s=n(14041);n(23464);let{usage:d,multiple:i,deselect:c,range:h,singleRange:u,numberOfColumns:m,sizeConfigurator:p}=(0,l.O)(r.B),x={type:"code",centered:!0,component:function(){let[e,t]=(0,s.useState)(null);return(0,a.jsx)(r.B,{defaultDate:new Date(2015,1),value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`},f={type:"code",centered:!0,component:function(){let[e,t]=(0,s.useState)([null,null]),[n,o]=(0,s.useState)(new Date);return(0,a.jsx)(r.B,{date:n,onDateChange:o,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&o(e=>new Date(e.getFullYear()+1,1)),t(e)}})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <MonthPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}

`},j={type:"code",centered:!0,component:function(){let[e,t]=(0,s.useState)(null);return(0,a.jsx)(r.B,{value:e,onChange:t,defaultDate:new Date(2022,1),minDate:new Date(2022,1,1),maxDate:new Date(2022,8,1)})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 1)}
      maxDate={new Date(2022, 8, 1)}
    />
  );
}
`},g=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},y=e=>1===e.getMonth()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===e.getMonth()?{disabled:!0}:{},_={type:"code",centered:!0,component:function(){let[e,t]=(0,s.useState)(null);return(0,a.jsx)(r.B,{value:e,onChange:t,getYearControlProps:g,getMonthControlProps:y})},code:`
import { useState } from 'react';
import { MonthPicker, MonthPickerProps } from '@mantine/dates';

const getYearControlProps: MonthPickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: MonthPickerProps['getMonthControlProps'] = (date) => {
  if (date.getMonth() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getMonth() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},M={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.B,{maxLevel:"year"})},code:`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`},D={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.B,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`},v={type:"code",centered:!0,component:function(){let[e,t]=(0,s.useState)(null);return(0,a.jsx)(r.B,{decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`};n(70069);let b={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.B,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`};var w=n(85954),Y=n(38215);let P=(0,w.P)(Y.XZ.MonthPicker);function k(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:n,KeyboardEventsTable:r}=t;return n||S("Demo",!0),r||S("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(t.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(t.code,{children:"type"})," prop is ",(0,a.jsx)(t.code,{children:"range"})," or ",(0,a.jsx)(t.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(t.code,{children:"onChange"})," is called with ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(n,{data:i}),"\n",(0,a.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(t.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(t.code,{children:"type"})," prop is not ",(0,a.jsx)(t.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"defaultDate"})," prop to set date value that will be used to determine which year should be displayed initially.\nFor example to display ",(0,a.jsx)(t.code,{children:"2015"})," year set ",(0,a.jsx)(t.code,{children:"defaultDate={new Date(2015, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(t.code,{children:"defaultDate"})," will use ",(0,a.jsx)(t.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if you set ",(0,a.jsx)(t.code,{children:"date"})," prop, then ",(0,a.jsx)(t.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(n,{data:x}),"\n",(0,a.jsx)(t.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"date"}),", and ",(0,a.jsx)(t.code,{children:"onDateChange"})," props to make currently displayed year and decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add one year to current date value:"]}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"minDate"})," and ",(0,a.jsx)(t.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(n,{data:j}),"\n",(0,a.jsx)(t.h2,{id:"add-props-to-year-and-month-control",children:"Add props to year and month control"}),"\n",(0,a.jsxs)(t.p,{children:["You can add props to year and month controls with ",(0,a.jsx)(t.code,{children:"getYearControlProps"})," and ",(0,a.jsx)(t.code,{children:"getMonthControlProps"})," functions. Both functions accept date as single argument,\nprops returned from the function will be added to year/month control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(n,{data:_}),"\n",(0,a.jsx)(t.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"max-level",children:"Max level"}),"\n",(0,a.jsxs)(t.p,{children:["To disallow user going to the decade level set ",(0,a.jsx)(t.code,{children:'maxLevel="year"'}),":"]}),"\n",(0,a.jsx)(n,{data:M}),"\n",(0,a.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"change-year-and-months-controls-format",children:"Change year and months controls format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"yearsListFormat"})," and ",(0,a.jsx)(t.code,{children:"monthsListFormat"})," props to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year/month controls:"]}),"\n",(0,a.jsx)(n,{data:D}),"\n",(0,a.jsx)(t.h2,{id:"change-label-format",children:"Change label format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"decadeLabelFormat"})," and ",(0,a.jsx)(t.code,{children:"yearLabelFormat"})," to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade/year label:"]}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"localization",children:"Localization"}),"\n",(0,a.jsxs)(t.p,{children:["Usually it is better to specify ",(0,a.jsx)(t.code,{children:"@mantine/dates"})," package locale in ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),",\nbut you can also override locale per component:"]}),"\n",(0,a.jsx)(n,{data:b}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(t.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(t.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { MonthPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <MonthPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n        nextYear: 'Next year',\n        previousYear: 'Previous year',\n        yearLevelControl: 'Change to decade view',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"yearmonth-control-aria-label",children:"Year/month control aria-label"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"getYearControlProps"}),"/",(0,a.jsx)(t.code,{children:"getMonthControlProps"})," to customize ",(0,a.jsx)(t.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { MonthPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <MonthPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n      getMonthControlProps={(date) => ({\n        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(t.p,{children:"Note that the following events will only trigger if focus is on month control."}),"\n",(0,a.jsx)(r,{data:[{key:"ArrowRight",description:"Focuses next non-disabled month"},{key:"ArrowLeft",description:"Focuses previous non-disabled month"},{key:"ArrowDown",description:"Focuses next non-disabled month in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled month in the same column"}]})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(P,{...e,children:(0,a.jsx)(k,{...e})})}function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},27435:(e,t,n)=>{"use strict";n.d(t,{B:()=>u});var a=n(31085),o=n(6754),r=n(29686),l=n(36456),s=n(87704),d=n(16088);n(23464);var i=n(65695);n(14041);var c=n(68213);let h={type:"default"},u=(0,o.P9)((e,t)=>{let n=(0,r.Y)("MonthPicker",h,e),{classNames:o,styles:u,vars:m,type:p,defaultValue:x,value:f,onChange:j,__staticSelector:g,getMonthControlProps:y,allowSingleDateInRange:_,allowDeselect:M,onMouseLeave:D,onMonthSelect:v,__updateDateOnMonthSelect:b,__timezoneApplied:w,onLevelChange:Y,...P}=n,{onDateChange:k,onRootMouseLeave:C,onHoveredDateChange:S,getControlProps:L}=(0,s.k)({type:p,level:"month",allowDeselect:M,allowSingleDateInRange:_,value:f,defaultValue:x,onChange:j,onMouseLeave:D,applyTimezone:!w}),{resolvedClassNames:F,resolvedStyles:N}=(0,l.Y)({classNames:o,styles:u,props:n}),B=(0,d.E)();return(0,a.jsx)(c.V,{ref:t,minLevel:"year",__updateDateOnMonthSelect:b??!1,__staticSelector:g||"MonthPicker",onMouseLeave:C,onMonthMouseEnter:(e,t)=>S(t),onMonthSelect:e=>{k(e),v?.(e)},getMonthControlProps:e=>({...L(e),...y?.(e)}),classNames:F,styles:N,onLevelChange:Y,...P,date:(0,i.C)("add",P.date,B.getTimezone(),w),__timezoneApplied:!0})});u.classes=c.V.classes,u.displayName="@mantine/dates/MonthPicker"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,68213,88839,90636,46593,38792],()=>t(57755)),_N_E=e.O()}]);