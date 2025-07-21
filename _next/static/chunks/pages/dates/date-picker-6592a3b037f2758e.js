(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31101],{70069:function(e,t,a){var n;n=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),a="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),n="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),r="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function d(e,t,a){var n,r;return"m"===a?t?"минута":"минуту":e+" "+(n=+e,r=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[a].split("_"),n%10==1&&n%100!=11?r[0]:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?r[1]:r[2])}var s=function(e,n){return o.test(n)?t[e.month()]:a[e.month()]};s.s=a,s.f=t;var l=function(e,t){return o.test(t)?n[e.month()]:r[e.month()]};l.s=r,l.f=n;var i={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:s,monthsShort:l,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:d,mm:d,h:"час",hh:d,d:"день",dd:d,M:"месяц",MM:d,y:"год",yy:d},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(i,null,!0),i},e.exports=n(a(23464))},58433:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/date-picker",function(){return a(55341)}])},55341:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var n=a(31085),r=a(71184),o=a(57285),d=a(23464),s=a(58273);let l={type:"code",centered:!0,component:function(){return(0,n.jsx)(s.l,{presets:[{value:d().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:d().format("YYYY-MM-DD"),label:"Today"},{value:d().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:d().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:d().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:d().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:d().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
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
`};var i=a(29977),c=a(14041);let u={type:"code",centered:!0,component:function(){let[e,t]=(0,c.useState)(null);return(0,n.jsx)(s.l,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},m={type:"code",centered:!0,component:function(){let[e,t]=(0,c.useState)([null,null]),[a,r]=(0,c.useState)(d().format("YYYY-MM-DD"));return(0,n.jsx)(s.l,{date:a,onDateChange:r,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&r(e=>d(e).add(1,"month").format("YYYY-MM-DD")),t(e)}})},code:`
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
`};var h=a(56051);let p={type:"code",component:function(){return(0,n.jsxs)(h.Y,{justify:"center",children:[(0,n.jsx)(s.l,{defaultLevel:"decade"}),(0,n.jsx)(s.l,{defaultLevel:"year"})]})},code:`
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
`},f={type:"code",centered:!0,component:function(){return(0,n.jsx)(s.l,{hideOutsideDates:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`};var y=a(46092);let D={type:"code",component:function(){return(0,n.jsxs)(h.Y,{justify:"center",children:[(0,n.jsx)(s.l,{firstDayOfWeek:0}),(0,n.jsx)(s.l,{firstDayOfWeek:6})]})},code:`
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
`},x={type:"code",centered:!0,component:function(){return(0,n.jsx)(s.l,{hideWeekdays:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`},j={type:"code",centered:!0,component:function(){return(0,n.jsx)(s.l,{weekendDays:[1,2]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`};var Y=a(16715);let v=e=>{let t=d(e).date();return(0,n.jsx)(Y.C,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,n.jsx)("div",{children:t})})},g={type:"code",centered:!0,component:function(){return(0,n.jsx)(s.l,{renderDay:v})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}
`},b={type:"code",centered:!0,component:function(){let[e,t]=(0,c.useState)(null);return(0,n.jsx)(s.l,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-10",maxDate:"2022-02-25"})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-10"
      maxDate="2022-02-25"
    />
  );
}
`};var M=a(47481);let k=e=>{let t=d(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},_=e=>{let t=d(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},P=e=>{let t=d(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},w={type:"code",centered:!0,component:function(){let[e,t]=(0,c.useState)(null);return(0,n.jsx)(s.l,{value:e,onChange:t,defaultDate:"2021-08-01",getDayProps:k,getYearControlProps:_,getMonthControlProps:P})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
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

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
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
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2021-08-01"
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},L={type:"code",component:function(){return(0,n.jsx)(s.l,{excludeDate:e=>5!==new Date(e).getDay()})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => new Date(date).getDay() !== 5} />;
}
`,centered:!0},C={type:"code",component:function(){return(0,n.jsxs)(h.Y,{justify:"center",children:[(0,n.jsx)(s.l,{maxLevel:"year"}),(0,n.jsx)(s.l,{maxLevel:"month"})]})},code:`
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
`},S={type:"code",centered:!0,component:function(){return(0,n.jsx)(s.l,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`},F={type:"code",centered:!0,component:function(){let[e,t]=(0,c.useState)(null);return(0,n.jsx)(s.l,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
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
`};a(70069);let O={type:"code",centered:!0,component:function(){return(0,n.jsx)(s.l,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`};var N=a(18675),T=a(20017);let I=(0,N.P)(T.XZ.DatePicker);function W(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:a,KeyboardEventsTable:d}=t;return a||V("Demo",!0),d||V("KeyboardEventsTable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:o.CI}),"\n",(0,n.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,n.jsx)(t.code,{children:"allowDeselect"})," is disregarded when ",(0,n.jsx)(t.code,{children:"type"})," prop is ",(0,n.jsx)(t.code,{children:"range"})," or ",(0,n.jsx)(t.code,{children:"multiple"}),". When date is\ndeselected ",(0,n.jsx)(t.code,{children:"onChange"})," is called with ",(0,n.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(a,{data:o.wm}),"\n",(0,n.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,n.jsx)(a,{data:o.le}),"\n",(0,n.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,n.jsx)(a,{data:o.y1}),"\n",(0,n.jsx)(t.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,n.jsxs)(t.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,n.jsx)(t.code,{children:"allowSingleDateInRange"})," prop. ",(0,n.jsx)(t.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,n.jsx)(t.code,{children:"type"})," prop is not ",(0,n.jsx)(t.code,{children:"range"}),"."]}),"\n",(0,n.jsx)(a,{data:o.al}),"\n",(0,n.jsx)(t.h2,{id:"presets",children:"Presets"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"presets"})," prop to add custom date presets. Presets are displayed next to the calendar:"]}),"\n",(0,n.jsx)(a,{data:l}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"presets"})," with ",(0,n.jsx)(t.code,{children:'type="range"'}),", define value a tuple of two dates:"]}),"\n",(0,n.jsx)(a,{data:i.K}),"\n",(0,n.jsx)(t.h2,{id:"default-date",children:"Default date"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"defaultDate"})," prop to set date value that will be used to determine which year should be displayed initially.\nFor example to display ",(0,n.jsx)(t.code,{children:"2015 February"})," month set ",(0,n.jsx)(t.code,{children:"defaultDate={new Date(2015, 1)}"}),". If value is not specified,\nthen ",(0,n.jsx)(t.code,{children:"defaultDate"})," will use ",(0,n.jsx)(t.code,{children:"new Date()"}),". Day, minutes and seconds are ignored in provided date object, only year and month data is used –\nyou can specify any date value."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that if you set ",(0,n.jsx)(t.code,{children:"date"})," prop, then ",(0,n.jsx)(t.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,n.jsx)(a,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"date"}),", and ",(0,n.jsx)(t.code,{children:"onDateChange"})," props to make currently displayed month, year and decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add one month to the current date value:"]}),"\n",(0,n.jsx)(a,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"default-level",children:"Default level"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"defaultLevel"})," prop to configure initial level that will be displayed:"]}),"\n",(0,n.jsx)(a,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"hideOutsideDates"})," prop to remove all dates that do not belong to the current month:"]}),"\n",(0,n.jsx)(a,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"display-week-numbers",children:"Display week numbers"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withWeekNumbers"})," prop to display week numbers:"]}),"\n",(0,n.jsx)(a,{data:y.v}),"\n",(0,n.jsx)(t.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"firstDayOfWeek"})," prop to configure first day of week. The prop accepts number from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. Default value is 1 – Monday. You can also configure this option\nfor all components with ",(0,n.jsx)(t.a,{href:"/dates/getting-started/",children:"DatesProvider"}),"."]}),"\n",(0,n.jsx)(a,{data:D}),"\n",(0,n.jsx)(t.h2,{id:"hide-weekdays",children:"Hide weekdays"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"hideWeekdays"})," prop to hide weekdays names:"]}),"\n",(0,n.jsx)(a,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"weekend-days",children:"Weekend days"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"weekendDays"})," prop to configure weekend days. The prop accepts an array of numbers from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. Default value is ",(0,n.jsx)(t.code,{children:"[0, 6]"})," – Saturday and Sunday. You can also configure this option\nfor all components with ",(0,n.jsx)(t.a,{href:"/dates/getting-started/",children:"DatesProvider"}),"."]}),"\n",(0,n.jsx)(a,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"render-day-function",children:"Render day function"}),"\n",(0,n.jsxs)(t.p,{children:["You can customize day rendering with ",(0,n.jsx)(t.code,{children:"renderDay"})," prop. For example, it can be used to add\n",(0,n.jsx)(t.a,{href:"/core/indicator/",children:"Indicator"})," to certain days."]}),"\n",(0,n.jsx)(a,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"minDate"})," and ",(0,n.jsx)(t.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,n.jsx)(a,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"change-header-controls-order",children:"Change header controls order"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"headerControlsOrder"})," prop to change order of header controls. The prop accepts an array of\n",(0,n.jsx)(t.code,{children:"'next' | 'previous' | 'level"}),". Note that each control can be used only once in the array."]}),"\n",(0,n.jsx)(a,{data:M.O}),"\n",(0,n.jsx)(t.h2,{id:"add-props-to-year-and-month-control",children:"Add props to year and month control"}),"\n",(0,n.jsxs)(t.p,{children:["You can add props to year, month and day controls with ",(0,n.jsx)(t.code,{children:"getYearControlProps"}),", ",(0,n.jsx)(t.code,{children:"getMonthControlProps"})," and ",(0,n.jsx)(t.code,{children:"getDayProps"})," functions. All functions accept date as single argument,\nprops returned from the function will be added to year/month/day control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,n.jsx)(a,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"exclude-dates",children:"Exclude dates"}),"\n",(0,n.jsxs)(t.p,{children:["To disable specific dates use ",(0,n.jsx)(t.code,{children:"excludeDate"})," prop.\nIt accepts function that takes date as argument and returns boolean value – if ",(0,n.jsx)(t.code,{children:"true"})," is returned, date will be disabled.\nExample of disabling all dates that are not Fridays:"]}),"\n",(0,n.jsx)(a,{data:L}),"\n",(0,n.jsx)(t.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,n.jsx)(a,{data:o.__}),"\n",(0,n.jsx)(t.h2,{id:"max-level",children:"Max level"}),"\n",(0,n.jsx)(a,{data:C}),"\n",(0,n.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,n.jsx)(a,{data:o.T3}),"\n",(0,n.jsx)(t.h2,{id:"change-year-and-months-controls-format",children:"Change year and months controls format"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"yearsListFormat"})," and ",(0,n.jsx)(t.code,{children:"monthsListFormat"})," props to change ",(0,n.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year/month controls:"]}),"\n",(0,n.jsx)(a,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"change-label-format",children:"Change label format"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"decadeLabelFormat"}),", ",(0,n.jsx)(t.code,{children:"yearLabelFormat"})," and ",(0,n.jsx)(t.code,{children:"monthLabelFormat"})," props to change ",(0,n.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade/year label:"]}),"\n",(0,n.jsx)(a,{data:F}),"\n",(0,n.jsx)(t.h2,{id:"localization",children:"Localization"}),"\n",(0,n.jsxs)(t.p,{children:["Usually it is better to specify ",(0,n.jsx)(t.code,{children:"@mantine/dates"})," package locale in ",(0,n.jsx)(t.a,{href:"/dates/getting-started/",children:"DatesProvider"}),",\nbut you can also override locale per component:"]}),"\n",(0,n.jsx)(a,{data:O}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsx)(t.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"ariaLabels"})," prop to specify ",(0,n.jsx)(t.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n        nextYear: 'Next year',\n        previousYear: 'Previous year',\n        nextMonth: 'Next month',\n        previousMonth: 'Previous month',\n        yearLevelControl: 'Change to decade view',\n        monthLevelControl: 'Change to year view',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"yearmonth-control-aria-label",children:"Year/month control aria-label"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"getYearControlProps"}),"/",(0,n.jsx)(t.code,{children:"getMonthControlProps"}),"/",(0,n.jsx)(t.code,{children:"getDayProps"})," to customize ",(0,n.jsx)(t.code,{children:"aria-label"})," attribute:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      getDayProps={(date) => ({\n        'aria-label': `Select date ${\n          date.getMonth() + 1\n        }/${date.getDate()}/${date.getFullYear()}`,\n      })}\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n      getMonthControlProps={(date) => ({\n        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(t.p,{children:"Note that the following events will only trigger if focus is on date control."}),"\n",(0,n.jsx)(d,{data:[{key:"ArrowRight",description:"Focuses next non-disabled date"},{key:"ArrowLeft",description:"Focuses previous non-disabled date"},{key:"ArrowDown",description:"Focuses next non-disabled date in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled date in the same column"}]})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(I,{...e,children:(0,n.jsx)(W,{...e})})}function V(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47481:(e,t,a)=>{"use strict";a.d(t,{O:()=>o});var n=a(31085),r=a(58273);let o={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.l,{defaultDate:"2022-02-01",headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}}})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      defaultDate="2022-02-01"
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
    />
  );
}
`}},29977:(e,t,a)=>{"use strict";a.d(t,{K:()=>d});var n=a(31085),r=a(23464),o=a(58273);let d={type:"code",centered:!0,component:function(){let e=r();return(0,n.jsx)(o.l,{type:"range",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePicker
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
`,defaultExpanded:!1}},46092:(e,t,a)=>{"use strict";a.d(t,{v:()=>o});var n=a(31085),r=a(58273);let o={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.l,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`}},57285:(e,t,a)=>{"use strict";a.d(t,{CI:()=>o,T3:()=>u,__:()=>c,al:()=>i,le:()=>d,wm:()=>s,y1:()=>l});var n=a(58273),r=a(87816);a(31085),a(23464),a(14041);let{usage:o,multiple:d,deselect:s,range:l,singleRange:i,numberOfColumns:c,sizeConfigurator:u}=(0,r.O)(n.l)},16715:(e,t,a)=>{"use strict";a.d(t,{C:()=>D});var n=a(31085),r=a(39735);a(14041);var o=a(33450),d=a(7098),s=a(51606),l=a(3702),i=a(62554),c=a(29686),u=a(69564),m=a(34056),h=a(6754),p={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let f={position:"top-end",offset:0},y=(0,d.V)((e,{color:t,position:a,offset:n,size:d,radius:c,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":t?(0,s.r)(t,e):void 0,"--indicator-text-color":(0,i.v)(m,e)?(0,l.w)({color:t,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,r.D)(d),"--indicator-radius":void 0===c?void 0:(0,o.nJ)(c),"--indicator-z-index":u?.toString(),...function(e="top-end",t=0){let a={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n=(0,r.D)(t),[o,d]=e.split("-");return"top"===o&&(a["--indicator-top"]=n,a["--indicator-translate-y"]="-50%"),"middle"===o&&(a["--indicator-top"]="50%",a["--indicator-translate-y"]="-50%"),"bottom"===o&&(a["--indicator-bottom"]=n,a["--indicator-translate-y"]="50%"),"start"===d&&(a["--indicator-left"]=n,a["--indicator-translate-x"]="-50%"),"center"===d&&(a["--indicator-left"]="50%",a["--indicator-translate-x"]="-50%"),"end"===d&&(a["--indicator-right"]=n,a["--indicator-translate-x"]="50%"),a}(a,n)}})),D=(0,h.P9)((e,t)=>{let a=(0,c.Y)("Indicator",f,e),{classNames:r,className:o,style:d,styles:s,unstyled:l,vars:i,children:h,position:D,offset:x,inline:j,label:Y,radius:v,color:g,withBorder:b,disabled:M,processing:k,zIndex:_,autoContrast:P,mod:w,attributes:L,...C}=a,S=(0,u.I)({name:"Indicator",classes:p,props:a,className:o,style:d,classNames:r,styles:s,unstyled:l,attributes:L,vars:i,varsResolver:y});return(0,n.jsxs)(m.a,{ref:t,...S("root"),mod:[{inline:j},w],...C,children:[!M&&(0,n.jsx)(m.a,{mod:{"with-label":!!Y,"with-border":b,processing:k},...S("indicator"),children:Y}),h]})});D.classes=p,D.displayName="@mantine/core/Indicator"},34456:(e,t,a)=>{"use strict";function n(e){let{maxLevel:t,minLevel:a,defaultLevel:n,level:r,onLevelChange:o,nextIcon:d,previousIcon:s,date:l,defaultDate:i,onDateChange:c,numberOfColumns:u,columnsToScroll:m,ariaLabels:h,nextLabel:p,previousLabel:f,onYearSelect:y,onMonthSelect:D,onYearMouseEnter:x,onMonthMouseEnter:j,onNextMonth:Y,onPreviousMonth:v,onNextYear:g,onPreviousYear:b,onNextDecade:M,onPreviousDecade:k,withCellSpacing:_,highlightToday:P,__updateDateOnYearSelect:w,__updateDateOnMonthSelect:L,__setDateRef:C,__setLevelRef:S,withWeekNumbers:F,headerControlsOrder:O,firstDayOfWeek:N,weekdayFormat:T,weekendDays:I,getDayProps:W,excludeDate:R,renderDay:V,hideOutsideDates:z,hideWeekdays:E,getDayAriaLabel:A,monthLabelFormat:U,monthsListFormat:G,getMonthControlProps:H,yearLabelFormat:$,yearsListFormat:B,getYearControlProps:K,decadeLabelFormat:X,allowSingleDateInRange:q,allowDeselect:J,minDate:Z,maxDate:Q,locale:ee,...et}=e;return{calendarProps:{maxLevel:t,minLevel:a,defaultLevel:n,level:r,onLevelChange:o,nextIcon:d,previousIcon:s,date:l,defaultDate:i,onDateChange:c,numberOfColumns:u,columnsToScroll:m,ariaLabels:h,nextLabel:p,previousLabel:f,onYearSelect:y,onMonthSelect:D,onYearMouseEnter:x,onMonthMouseEnter:j,onNextMonth:Y,onPreviousMonth:v,onNextYear:g,onPreviousYear:b,onNextDecade:M,onPreviousDecade:k,withCellSpacing:_,highlightToday:P,__updateDateOnYearSelect:w,__updateDateOnMonthSelect:L,__setDateRef:C,withWeekNumbers:F,headerControlsOrder:O,firstDayOfWeek:N,weekdayFormat:T,weekendDays:I,getDayProps:W,excludeDate:R,renderDay:V,hideOutsideDates:z,hideWeekdays:E,getDayAriaLabel:A,monthLabelFormat:U,monthsListFormat:G,getMonthControlProps:H,yearLabelFormat:$,yearsListFormat:B,getYearControlProps:K,decadeLabelFormat:X,allowSingleDateInRange:q,allowDeselect:J,minDate:Z,maxDate:Q,locale:ee},others:et}}a.d(t,{q:()=>n})},58273:(e,t,a)=>{"use strict";a.d(t,{l:()=>v});var n=a(31085),r=a(23464),o=a(14041),d=a(7098),s=a(33450),l=a(6754),i=a(29686),c=a(69564),u=a(36456),m=a(33970),h=a(34056),p=a(87704),f=a(46268),y=a(34456),D=a(64976),x={datePickerRoot:"m_765a40cf",presetsList:"m_d6a681e1",presetButton:"m_acd30b22"};let j=(0,d.V)((e,{size:t})=>({datePickerRoot:{"--preset-font-size":(0,s.ny)(t)}})),Y={type:"default",defaultLevel:"month",numberOfColumns:1,size:"sm"},v=(0,l.P9)((e,t)=>{let a=(0,i.Y)("DatePicker",Y,e),{allowDeselect:d,allowSingleDateInRange:s,value:l,defaultValue:v,onChange:g,onMouseLeave:b,classNames:M,styles:k,__staticSelector:_,__onDayClick:P,__onDayMouseEnter:w,__onPresetSelect:L,__stopPropagation:C,presets:S,className:F,style:O,unstyled:N,size:T,vars:I,attributes:W,...R}=a,{calendarProps:V,others:z}=(0,y.q)(R),E=(0,o.useRef)(null),A=(0,o.useRef)(null),U=(0,c.I)({name:_||"DatePicker",classes:x,props:a,className:F,style:O,classNames:M,styles:k,unstyled:N,attributes:W,rootSelector:S?"datePickerRoot":void 0,varsResolver:j,vars:I}),{onDateChange:G,onRootMouseLeave:H,onHoveredDateChange:$,getControlProps:B,_value:K,setValue:X}=(0,p.k)({type:z.type,level:"day",allowDeselect:d,allowSingleDateInRange:s,value:l,defaultValue:v,onChange:g,onMouseLeave:b}),{resolvedClassNames:q,resolvedStyles:J}=(0,u.Y)({classNames:M,styles:k,props:a}),Z=(0,n.jsx)(f.V,{ref:t,classNames:q,styles:J,__staticSelector:_||"DatePicker",onMouseLeave:H,size:T,...V,...S?{}:z,__stopPropagation:C,__setDateRef:E,__setLevelRef:A,minLevel:V.minLevel||"month",__onDayMouseEnter:(e,t)=>{$(t),w?.(e,t)},__onDayClick:(e,t)=>{G(t),P?.(e,t)},getDayProps:e=>({...B(e),...V.getDayProps?.(e)}),getMonthControlProps:e=>({selected:"string"==typeof K&&(0,D.t)(e,K),...V.getMonthControlProps?.(e)}),getYearControlProps:e=>({selected:"string"==typeof K&&r(e).isSame(K,"year"),...V.getYearControlProps?.(e)}),hideOutsideDates:V.hideOutsideDates??1!==V.numberOfColumns,...S?{}:{className:F,style:O,attributes:W}});if(!S)return Z;let Q=e=>{let t=Array.isArray(e)?e[0]:e;void 0!==t&&(E.current?.(t),A.current?.("month"),L?L(t):X(e))},ee=S.map((e,t)=>(0,n.jsx)(m.N,{...U("presetButton"),onClick:()=>Q(e.value),onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":C||void 0,children:e.label},t));return(0,n.jsxs)(h.a,{...U("datePickerRoot"),size:T,...z,children:[(0,n.jsx)("div",{...U("presetsList"),children:ee}),Z]})});v.classes=f.V.classes,v.displayName="@mantine/dates/DatePicker"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,46268,5760,90636,46593,38792],()=>t(58433)),_N_E=e.O()}]);