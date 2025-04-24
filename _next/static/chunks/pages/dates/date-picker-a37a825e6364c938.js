(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31101],{70069:function(e,t,n){var a;a=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),r="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function d(e,t,n){var a,r;return"m"===n?t?"минута":"минуту":e+" "+(a=+e,r=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[n].split("_"),a%10==1&&a%100!=11?r[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?r[1]:r[2])}var i=function(e,a){return o.test(a)?t[e.month()]:n[e.month()]};i.s=n,i.f=t;var s=function(e,t){return o.test(t)?a[e.month()]:r[e.month()]};s.s=r,s.f=a;var l={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:d,mm:d,h:"час",hh:d,d:"день",dd:d,M:"месяц",MM:d,y:"год",yy:d},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(l,null,!0),l},e.exports=a(n(23464))},58433:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/date-picker",function(){return n(70333)}])},70333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var a=n(31085),r=n(71184),o=n(18709),d=n(87816),i=n(14041);n(23464);let{usage:s,multiple:l,deselect:c,range:u,singleRange:h,numberOfColumns:m,sizeConfigurator:p}=(0,d.O)(o.l),f={type:"code",centered:!0,component:function(){let[e,t]=(0,i.useState)(null);return(0,a.jsx)(o.l,{defaultDate:new Date(2015,1),value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <DatePicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`},x={type:"code",centered:!0,component:function(){let[e,t]=(0,i.useState)([null,null]),[n,r]=(0,i.useState)(new Date);return(0,a.jsx)(o.l,{date:n,onDateChange:r,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&r(e=>new Date(e.getFullYear(),e.getMonth()+1)),t(e)}})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

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
    <DatePicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`};var y=n(56051);let D={type:"code",component:function(){return(0,a.jsxs)(y.Y,{justify:"center",children:[(0,a.jsx)(o.l,{defaultLevel:"decade"}),(0,a.jsx)(o.l,{defaultLevel:"year"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`},j={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.l,{hideOutsideDates:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`};var g=n(46092);let v={type:"code",component:function(){return(0,a.jsxs)(y.Y,{justify:"center",children:[(0,a.jsx)(o.l,{firstDayOfWeek:0}),(0,a.jsx)(o.l,{firstDayOfWeek:6})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`},_={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.l,{hideWeekdays:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`},k={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.l,{weekendDays:[1,2]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`};var b=n(16715);let w=e=>{let t=e.getDate();return(0,a.jsx)(b.C,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,a.jsx)("div",{children:t})})},P={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.l,{renderDay:w})},code:`
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = date.getDate();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}

`},Y={type:"code",centered:!0,component:function(){let[e,t]=(0,i.useState)(null);return(0,a.jsx)(o.l,{value:e,onChange:t,defaultDate:new Date(2022,1),minDate:new Date(2022,1,10),maxDate:new Date(2022,1,25)})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 25)}
    />
  );
}
`},M=e=>5===e.getDay()&&13===e.getDate()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{},S=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},C=e=>1===e.getMonth()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===e.getMonth()?{disabled:!0}:{},L={type:"code",centered:!0,component:function(){let[e,t]=(0,i.useState)(null);return(0,a.jsx)(o.l,{value:e,onChange:t,defaultDate:new Date(2021,7),getDayProps:M,getYearControlProps:S,getMonthControlProps:C})},code:`
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
  if (date.getDay() === 5 && date.getDate() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
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
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2021, 7)}
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},F={type:"code",component:function(){return(0,a.jsx)(o.l,{excludeDate:e=>5!==e.getDay()})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => date.getDay() !== 5} />;
}
`,centered:!0},N={type:"code",component:function(){return(0,a.jsxs)(y.Y,{justify:"center",children:[(0,a.jsx)(o.l,{maxLevel:"year"}),(0,a.jsx)(o.l,{maxLevel:"month"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`},W={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.l,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`},z={type:"code",centered:!0,component:function(){let[e,t]=(0,i.useState)(null);return(0,a.jsx)(o.l,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
`};n(70069);let O={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.l,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`};var I=n(85954),V=n(38215);let E=(0,I.P)(V.XZ.DatePicker);function T(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:n,KeyboardEventsTable:o}=t;return n||G("Demo",!0),o||G("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:s}),"\n",(0,a.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(t.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(t.code,{children:"type"})," prop is ",(0,a.jsx)(t.code,{children:"range"})," or ",(0,a.jsx)(t.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(t.code,{children:"onChange"})," is called with ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(n,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(t.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(t.code,{children:"type"})," prop is not ",(0,a.jsx)(t.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"defaultDate"})," prop to set date value that will be used to determine which year should be displayed initially.\nFor example to display ",(0,a.jsx)(t.code,{children:"2015 February"})," month set ",(0,a.jsx)(t.code,{children:"defaultDate={new Date(2015, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(t.code,{children:"defaultDate"})," will use ",(0,a.jsx)(t.code,{children:"new Date()"}),". Day, minutes and seconds are ignored in provided date object, only year and month data is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if you set ",(0,a.jsx)(t.code,{children:"date"})," prop, then ",(0,a.jsx)(t.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"date"}),", and ",(0,a.jsx)(t.code,{children:"onDateChange"})," props to make currently displayed month, year and decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add one month to the current date value:"]}),"\n",(0,a.jsx)(n,{data:x}),"\n",(0,a.jsx)(t.h2,{id:"default-level",children:"Default level"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"defaultLevel"})," prop to configure initial level that will be displayed:"]}),"\n",(0,a.jsx)(n,{data:D}),"\n",(0,a.jsx)(t.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"hideOutsideDates"})," prop to remove all dates that do not belong to the current month:"]}),"\n",(0,a.jsx)(n,{data:j}),"\n",(0,a.jsx)(t.h2,{id:"display-week-numbers",children:"Display week numbers"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"withWeekNumbers"})," prop to display week numbers:"]}),"\n",(0,a.jsx)(n,{data:g.v}),"\n",(0,a.jsx)(t.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"firstDayOfWeek"})," prop to configure first day of week. The prop accepts number from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. Default value is 1 – Monday. You can also configure this option\nfor all components with ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),"."]}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"hide-weekdays",children:"Hide weekdays"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"hideWeekdays"})," prop to hide weekdays names:"]}),"\n",(0,a.jsx)(n,{data:_}),"\n",(0,a.jsx)(t.h2,{id:"weekend-days",children:"Weekend days"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"weekendDays"})," prop to configure weekend days. The prop accepts an array of numbers from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. Default value is ",(0,a.jsx)(t.code,{children:"[0, 6]"})," – Saturday and Sunday. You can also configure this option\nfor all components with ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),"."]}),"\n",(0,a.jsx)(n,{data:k}),"\n",(0,a.jsx)(t.h2,{id:"render-day-function",children:"Render day function"}),"\n",(0,a.jsxs)(t.p,{children:["You can customize day rendering with ",(0,a.jsx)(t.code,{children:"renderDay"})," prop. For example, it can be used to add\n",(0,a.jsx)(t.a,{href:"/core/indicator/",children:"Indicator"})," to certain days."]}),"\n",(0,a.jsx)(n,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"minDate"})," and ",(0,a.jsx)(t.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(n,{data:Y}),"\n",(0,a.jsx)(t.h2,{id:"add-props-to-year-and-month-control",children:"Add props to year and month control"}),"\n",(0,a.jsxs)(t.p,{children:["You can add props to year, month and day controls with ",(0,a.jsx)(t.code,{children:"getYearControlProps"}),", ",(0,a.jsx)(t.code,{children:"getMonthControlProps"})," and ",(0,a.jsx)(t.code,{children:"getDayProps"})," functions. All functions accept date as single argument,\nprops returned from the function will be added to year/month/day control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(n,{data:L}),"\n",(0,a.jsx)(t.h2,{id:"exclude-dates",children:"Exclude dates"}),"\n",(0,a.jsxs)(t.p,{children:["To disable specific dates use ",(0,a.jsx)(t.code,{children:"excludeDate"})," prop.\nIt accepts function that takes date as argument and returns boolean value – if ",(0,a.jsx)(t.code,{children:"true"})," is returned, date will be disabled.\nExample of disabling all dates that are not Fridays:"]}),"\n",(0,a.jsx)(n,{data:F}),"\n",(0,a.jsx)(t.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"max-level",children:"Max level"}),"\n",(0,a.jsx)(n,{data:N}),"\n",(0,a.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"change-year-and-months-controls-format",children:"Change year and months controls format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"yearsListFormat"})," and ",(0,a.jsx)(t.code,{children:"monthsListFormat"})," props to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year/month controls:"]}),"\n",(0,a.jsx)(n,{data:W}),"\n",(0,a.jsx)(t.h2,{id:"change-label-format",children:"Change label format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"decadeLabelFormat"}),", ",(0,a.jsx)(t.code,{children:"yearLabelFormat"})," and ",(0,a.jsx)(t.code,{children:"monthLabelFormat"})," props to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade/year label:"]}),"\n",(0,a.jsx)(n,{data:z}),"\n",(0,a.jsx)(t.h2,{id:"localization",children:"Localization"}),"\n",(0,a.jsxs)(t.p,{children:["Usually it is better to specify ",(0,a.jsx)(t.code,{children:"@mantine/dates"})," package locale in ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),",\nbut you can also override locale per component:"]}),"\n",(0,a.jsx)(n,{data:O}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(t.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(t.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n        nextYear: 'Next year',\n        previousYear: 'Previous year',\n        nextMonth: 'Next month',\n        previousMonth: 'Previous month',\n        yearLevelControl: 'Change to decade view',\n        monthLevelControl: 'Change to year view',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"yearmonth-control-aria-label",children:"Year/month control aria-label"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"getYearControlProps"}),"/",(0,a.jsx)(t.code,{children:"getMonthControlProps"}),"/",(0,a.jsx)(t.code,{children:"getDayProps"})," to customize ",(0,a.jsx)(t.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      getDayProps={(date) => ({\n        'aria-label': `Select date ${\n          date.getMonth() + 1\n        }/${date.getDate()}/${date.getFullYear()}`,\n      })}\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n      getMonthControlProps={(date) => ({\n        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(t.p,{children:"Note that the following events will only trigger if focus is on date control."}),"\n",(0,a.jsx)(o,{data:[{key:"ArrowRight",description:"Focuses next non-disabled date"},{key:"ArrowLeft",description:"Focuses previous non-disabled date"},{key:"ArrowDown",description:"Focuses next non-disabled date in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled date in the same column"}]})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(E,{...e,children:(0,a.jsx)(T,{...e})})}function G(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46092:(e,t,n)=>{"use strict";n.d(t,{v:()=>o});var a=n(31085),r=n(18709);let o={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.l,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`}},16715:(e,t,n)=>{"use strict";n.d(t,{C:()=>y});var a=n(31085),r=n(39735);n(14041);var o=n(33450),d=n(7098),i=n(51606),s=n(3702),l=n(62554),c=n(29686),u=n(69564),h=n(34056),m=n(6754),p={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let f={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},x=(0,d.V)((e,{color:t,position:n,offset:a,size:d,radius:c,zIndex:u,autoContrast:h})=>({root:{"--indicator-color":t?(0,i.r)(t,e):void 0,"--indicator-text-color":(0,l.v)(h,e)?(0,s.w)({color:t,theme:e,autoContrast:h}):void 0,"--indicator-size":(0,r.D)(d),"--indicator-radius":void 0===c?void 0:(0,o.nJ)(c),"--indicator-z-index":u?.toString(),...function(e="top-end",t=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},a=(0,r.D)(t),[o,d]=e.split("-");return"top"===o&&(n["--indicator-top"]=a,n["--indicator-translate-y"]="-50%"),"middle"===o&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===o&&(n["--indicator-bottom"]=a,n["--indicator-translate-y"]="50%"),"start"===d&&(n["--indicator-left"]=a,n["--indicator-translate-x"]="-50%"),"center"===d&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===d&&(n["--indicator-right"]=a,n["--indicator-translate-x"]="50%"),n}(n,a)}})),y=(0,m.P9)((e,t)=>{let n=(0,c.Y)("Indicator",f,e),{classNames:r,className:o,style:d,styles:i,unstyled:s,vars:l,children:m,position:y,offset:D,inline:j,label:g,radius:v,color:_,withBorder:k,disabled:b,processing:w,zIndex:P,autoContrast:Y,mod:M,...S}=n,C=(0,u.I)({name:"Indicator",classes:p,props:n,className:o,style:d,classNames:r,styles:i,unstyled:s,vars:l,varsResolver:x});return(0,a.jsxs)(h.a,{ref:t,...C("root"),mod:[{inline:j},M],...S,children:[!b&&(0,a.jsx)(h.a,{mod:{"with-label":!!g,"with-border":k,processing:w},...C("indicator"),children:g}),m]})});y.classes=p,y.displayName="@mantine/core/Indicator"},18709:(e,t,n)=>{"use strict";n.d(t,{l:()=>h});var a=n(31085),r=n(6754),o=n(29686),d=n(36456),i=n(87704),s=n(16088);n(23464);var l=n(65695);n(14041);var c=n(46891);let u={type:"default",defaultLevel:"month",numberOfColumns:1},h=(0,r.P9)((e,t)=>{let n=(0,o.Y)("DatePicker",u,e),{classNames:r,styles:h,vars:m,type:p,defaultValue:f,value:x,onChange:y,__staticSelector:D,getDayProps:j,allowSingleDateInRange:g,allowDeselect:v,onMouseLeave:_,numberOfColumns:k,hideOutsideDates:b,__onDayMouseEnter:w,__onDayClick:P,__timezoneApplied:Y,...M}=n,{onDateChange:S,onRootMouseLeave:C,onHoveredDateChange:L,getControlProps:F}=(0,i.k)({type:p,level:"day",allowDeselect:v,allowSingleDateInRange:g,value:x,defaultValue:f,onChange:y,onMouseLeave:_,applyTimezone:!Y}),{resolvedClassNames:N,resolvedStyles:W}=(0,d.Y)({classNames:r,styles:h,props:n}),z=(0,s.E)();return(0,a.jsx)(c.V,{ref:t,minLevel:"month",classNames:N,styles:W,__staticSelector:D||"DatePicker",onMouseLeave:C,numberOfColumns:k,hideOutsideDates:b??1!==k,__onDayMouseEnter:(e,t)=>{L(t),w?.(e,t)},__onDayClick:(e,t)=>{S(t),P?.(e,t)},getDayProps:e=>({...F(e),...j?.(e)}),...M,date:(0,l.C)("add",M.date,z.getTimezone(),Y),__timezoneApplied:!0})});h.classes=c.V.classes,h.displayName="@mantine/dates/DatePicker"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,46891,88839,90636,46593,38792],()=>t(58433)),_N_E=e.O()}]);