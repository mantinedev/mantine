(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,n],931882)},39167,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),a="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),n="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function l(e,t,a){var r,n;return"m"===a?t?"минута":"минуту":e+" "+(r=+e,n=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[a].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var i=function(e,r){return o.test(r)?t[e.month()]:a[e.month()]};i.s=a,i.f=t;var s=function(e,t){return o.test(t)?r[e.month()]:n[e.month()]};s.s=n,s.f=r;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:l,mm:l,h:"час",hh:l,d:"день",dd:l,M:"месяц",MM:l,y:"год",yy:l},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(d,null,!0),d}(e.r(494834))},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(481178),n=e.i(317477),o=e.i(700145),l=e.i(853487),i=e.i(44091),s=e.i(391466),d=e.i(275519),c=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},m=e.i(391398);let p={position:"top-end",offset:0,showZero:!0},h=(0,r.createVarsResolver)((e,{color:r,position:i,offset:s,size:d,radius:c,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":r?(0,n.getThemeColor)(r,e):void 0,"--indicator-text-color":(0,l.getAutoContrastValue)(m,e)?(0,o.getContrastColor)({color:r,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,t.rem)(d),"--indicator-radius":void 0===c?void 0:(0,a.getRadius)(c),"--indicator-z-index":u?.toString(),...function(e="top-end",a=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n="number"==typeof a?a:a.x,o="number"==typeof a?a:a.y,l=(0,t.rem)(n),i=(0,t.rem)(o),[s,d]=e.split("-");return"top"===s&&(r["--indicator-top"]=i,r["--indicator-translate-y"]="-50%"),"middle"===s&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===s&&(r["--indicator-bottom"]=i,r["--indicator-translate-y"]="50%"),"start"===d&&(r["--indicator-left"]=l,r["--indicator-translate-x"]="-50%"),"center"===d&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===d&&(r["--indicator-right"]=l,r["--indicator-translate-x"]="50%"),r}(i,s)}})),f=(0,d.factory)(e=>{let t=(0,i.useProps)("Indicator",p,e),{classNames:a,className:r,style:n,styles:o,unstyled:l,vars:d,children:f,position:y,offset:D,inline:k,label:P,radius:v,color:Y,withBorder:x,disabled:g,processing:b,zIndex:M,autoContrast:j,maxValue:I,showZero:_,mod:S,attributes:w,...C}=t,L=(0,s.useStyles)({name:"Indicator",classes:u,props:t,className:r,style:n,classNames:a,styles:o,unstyled:l,attributes:w,vars:d,varsResolver:h}),W=!_&&(0===P||"0"===P),V=void 0!==I&&"number"==typeof P&&P>I?`${I}+`:P;return(0,m.jsxs)(c.Box,{...L("root"),mod:[{inline:k},S],...C,children:[!g&&!W&&(0,m.jsx)(c.Box,{mod:{"with-label":!!P,"with-border":x,processing:b},...L("indicator"),children:V}),f]})});f.classes=u,f.varsResolver=h,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},878166,e=>{"use strict";var t=e.i(494834),a=e.i(205693),r=e.i(422696),n=e.i(541772);e.s(["useDatesInput",0,function({type:e,value:o,defaultValue:l,onChange:i,locale:s,format:d,closeOnChange:c,sortDates:u,labelSeparator:m,valueFormatter:p}){let h=(0,a.useDatesContext)(),[f,y]=(0,n.useDisclosure)(!1),[D,k]=(0,r.useUncontrolledDates)({type:e,value:o,defaultValue:l,onChange:i}),P=function({formatter:e,...a}){return(e||function({type:e,date:a,locale:r,format:n,labelSeparator:o}){let l=e=>(0,t.default)(e).locale(r).format(n);if("default"===e)return null===a?"":l(a);if("multiple"===e)return a.map(l).join(", ");if("range"===e&&Array.isArray(a)){if(a[0]&&a[1])return`${l(a[0])} ${o} ${l(a[1])}`;if(a[0])return`${l(a[0])} ${o} `}return""})(a)}({type:e,date:D,locale:h.getLocale(s),format:d,labelSeparator:h.getLabelSeparator(m),formatter:p}),v=a=>{c&&("default"===e&&y.close(),"range"===e&&a[0]&&a[1]&&y.close()),u&&"multiple"===e?k([...a].sort((e,a)=>(0,t.default)(e).isAfter((0,t.default)(a))?1:-1)):k(a)};return{_value:D,setValue:v,onClear:()=>v("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:"range"===e?!!D[0]:"multiple"===e?D.length>0:null!==D,formattedValue:P,dropdownOpened:f,dropdownHandlers:y}}],878166)},267073,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),n=e.i(831474),o=e.i(777141),l=e.i(391398),i=e.i(275519),s=e.i(44091),d=e.i(62904);let c={type:"default",size:"sm",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,i.factory)(e=>{let i=(0,s.useProps)(["Input","InputWrapper","DatePickerInput"],c,e),{type:u,value:m,defaultValue:p,onChange:h,valueFormat:f,labelSeparator:y,locale:D,classNames:k,styles:P,unstyled:v,closeOnChange:Y,size:x,variant:g,dropdownType:b,sortDates:M,minDate:j,maxDate:I,vars:_,defaultDate:S,valueFormatter:w,presets:C,attributes:L,...W}=i,{resolvedClassNames:V,resolvedStyles:F}=(0,d.useResolvedStylesApi)({classNames:k,styles:P,props:i}),{calendarProps:N,others:T}=(0,n.pickCalendarProps)(W),{_value:A,setValue:O,formattedValue:z,dropdownHandlers:E,dropdownOpened:$,onClear:R,shouldClear:B}=(0,r.useDatesInput)({type:u,value:m,defaultValue:p,onChange:h,locale:D,format:f,labelSeparator:y,closeOnChange:Y,sortDates:M,valueFormatter:w}),H=Array.isArray(A)?A[0]||S:A||S;return(0,l.jsx)(a.PickerInputBase,{formattedValue:z,dropdownOpened:$,dropdownHandlers:E,classNames:V,styles:F,unstyled:v,onClear:R,shouldClear:B,value:A,size:x,variant:g,dropdownType:b,...T,type:u,__staticSelector:"DatePickerInput",attributes:L,children:(0,l.jsx)(o.DatePicker,{...N,size:x,variant:g,type:u,value:A,defaultDate:H||(0,t.getDefaultClampedDate)({maxDate:I,minDate:j}),onChange:O,locale:D,classNames:V,styles:F,unstyled:v,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===b,minDate:j,maxDate:I,presets:C,attributes:L})})});u.classes={...a.PickerInputBase.classes,...o.DatePicker.classes},u.displayName="@mantine/dates/DatePickerInput",e.s(["DatePickerInput",0,u])},70530,e=>{"use strict";var t=e.i(391398),a=e.i(494834),r=e.i(191788),n=e.i(632036);let o=({type:e,date:t,locale:r,format:n})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return(0,a.default)(t[0]).locale(r).format(n);if(t.length>1)return`${t.length} dates selected`}return""};e.s(["getSharedPickerInputDemos",0,function(e){let l,i,s,d,c,u,m,p;return{usage:{type:"code",centered:!0,maxWidth:400,code:(l=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[a,n]=(0,r.useState)(null);return(0,t.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:a,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:(i=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[a,n]=(0,r.useState)([]);return(0,t.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:a,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:(s=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>{let[a,n]=(0,r.useState)([null,null]);return(0,t.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:a,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:(d=e.displayName.replace("@mantine/dates/",""),`import { ${d} } from '@mantine/dates';


function Demo() {
  return (
    <${d}
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
`),component:()=>{let[a,o]=(0,r.useState)(null);return(0,t.jsx)(e,{leftSection:(0,t.jsx)(n.CalendarBlankIcon,{size:18}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:a,onChange:o})}},clearable:{type:"code",centered:!0,maxWidth:400,code:(m=e.displayName.replace("@mantine/dates/",""),`
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
`),component:()=>(0,t.jsx)(e,{clearable:!0,defaultValue:(0,a.default)().format("YYYY-MM-DD"),label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:(p=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${p}, DateFormatter } from '@mantine/dates';

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
    <${p}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)([]);return(0,t.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:a,onChange:n,type:"multiple",valueFormatter:o})}}}}],70530)},403360,e=>{"use strict";var t=e.i(648863),a=e.i(70530),r=e.i(931882),n=e.i(671640),o=e.i(391398),l=e.i(267073);let i={type:"code",component:function(){return(0,o.jsxs)(n.Stack,{children:[(0,o.jsx)(l.DatePickerInput,{label:"clearSectionMode='both' (default)",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,o.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,o.jsx)(l.DatePickerInput,{label:"clearSectionMode='rightSection'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,o.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,o.jsx)(l.DatePickerInput,{label:"clearSectionMode='clear'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,o.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
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
`,maxWidth:340,centered:!0},s={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Pick date",placeholder:"Pick date"})},code:`
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
`},d={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Disabled",placeholder:"Pick date",disabled:!0})},code:`
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
`};var c=e.i(494834);let u={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{label:"With presets",placeholder:"Select date",presets:[{value:(0,c.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,c.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,c.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,c.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,c.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,c.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,c.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
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
`},m={type:"code",centered:!0,maxWidth:400,component:function(){let e=(0,c.default)();return(0,o.jsx)(l.DatePickerInput,{type:"range",label:"With presets",placeholder:"Select date",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
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
`,defaultExpanded:!1};var p=e.i(191788);let h={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,minDate:new Date(2022,1,10),maxDate:new Date(2022,1,28)})},code:`
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
`},f=e=>{let t=(0,c.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},y=e=>{let t=(0,c.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},D=e=>{let t=(0,c.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},k={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,getDayProps:f,getYearControlProps:y,getMonthControlProps:D})},code:`
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
`};var P=e.i(393353);let v=e=>{let t=(0,c.default)(e).date();return(0,o.jsx)(P.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,o.jsx)("div",{children:t})})},Y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",renderDay:v})},code:`
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
`},x={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,excludeDate:e=>0===new Date(e).getDay()||6===new Date(e).getDay()})},code:`
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
`},g={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.DatePickerInput,{defaultLevel:"decade",label:"Decade level",placeholder:"Decade level",mb:"md"}),(0,o.jsx)(l.DatePickerInput,{defaultLevel:"year",label:"Year level",placeholder:"Year level"})]})},code:`
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
`},b={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{hideOutsideDates:!0,label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
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
`},M={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,hideWeekdays:!0})},code:`
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
`},j={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.DatePickerInput,{firstDayOfWeek:0,label:"Sunday as first day of week",placeholder:"Sunday as first day of week",mb:"md"}),(0,o.jsx)(l.DatePickerInput,{firstDayOfWeek:6,label:"Saturday as first day of week",placeholder:"Saturday as first day of week"})]})},code:`
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
`},I={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
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
`},_={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{monthsListFormat:"MM",yearsListFormat:"YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
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
`},S={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.DatePickerInput,{maxLevel:"year",label:"Year max level",placeholder:"Year max level",mb:"md"}),(0,o.jsx)(l.DatePickerInput,{maxLevel:"month",label:"Month max level",placeholder:"Month max level"})]})},code:`
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
`},w={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{weekendDays:[1,2],label:"Weekend days are Monday and Tuesday",placeholder:"Pick date"})},code:`
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
`},C={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{withWeekNumbers:!0,label:"With week numbers",placeholder:"Pick date"})},code:`
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
`},L={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{defaultDate:new Date(2022,1),headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}},label:"Header controls order",placeholder:"Header controls order"})},code:`
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
`};var W=(0,t.__exportAll)({clearSectionMode:()=>i,clearable:()=>z,configurator:()=>T,controlProps:()=>k,defaultLevel:()=>g,disabled:()=>d,excludeDate:()=>x,firstDayOfWeek:()=>j,headerControlsOrder:()=>L,hideOutsideDates:()=>b,hideWeekdays:()=>M,icon:()=>O,labelFormat:()=>I,listFormat:()=>_,maxLevel:()=>S,minMax:()=>h,modal:()=>A,multiple:()=>F,presets:()=>u,presetsRange:()=>m,range:()=>N,renderDay:()=>Y,usage:()=>V,valueFormat:()=>s,valueFormatter:()=>E,weekendDays:()=>w,withWeekNumbers:()=>C});let{usage:V,multiple:F,range:N,configurator:T,modal:A,icon:O,clearable:z,valueFormatter:E}=(0,a.getSharedPickerInputDemos)(l.DatePickerInput);e.s(["DatePickerInputDemos",0,W],403360)},337904,e=>{"use strict";var t=e.i(337976),a=e.i(164036),r=e.i(831474),n={monthPickerRoot:"m_53c9e871",presetsList:"m_cccb8ff3",presetButton:"m_7b4fbf50"},o=e.i(191788),l=e.i(391398),i=e.i(232471),s=e.i(284629),d=e.i(481178),c=e.i(275519),u=e.i(433512),m=e.i(44091),p=e.i(62904),h=e.i(391466);let f=(0,d.createVarsResolver)((e,{size:t})=>({monthPickerRoot:{"--preset-font-size":(0,u.getFontSize)(t)}})),y={type:"default"},D=(0,c.factory)(e=>{let d=(0,m.useProps)("MonthPicker",y,e),{classNames:c,styles:u,vars:D,type:k,defaultValue:P,value:v,onChange:Y,__staticSelector:x,getMonthControlProps:g,allowSingleDateInRange:b,allowDeselect:M,onMouseLeave:j,onMonthSelect:I,__updateDateOnMonthSelect:_,__onPresetSelect:S,__stopPropagation:w,presets:C,className:L,style:W,unstyled:V,size:F,attributes:N,onLevelChange:T,...A}=d,{calendarProps:O,others:z}=(0,r.pickCalendarProps)(A),E=(0,o.useRef)(null),$=(0,o.useRef)(null),R=(0,h.useStyles)({name:x||"MonthPicker",classes:n,props:d,className:L,style:W,classNames:c,styles:u,unstyled:V,attributes:N,rootSelector:C?"monthPickerRoot":void 0,varsResolver:f,vars:D}),{onDateChange:B,onRootMouseLeave:H,onHoveredDateChange:Z,getControlProps:U,setValue:X}=(0,t.useDatesState)({type:k,level:"month",allowDeselect:M,allowSingleDateInRange:b,value:v,defaultValue:P,onChange:Y,onMouseLeave:j}),{resolvedClassNames:q,resolvedStyles:K}=(0,p.useResolvedStylesApi)({classNames:c,styles:u,props:d}),G=(0,l.jsx)(a.Calendar,{classNames:q,styles:K,size:F,...O,...!C?z:{},minLevel:"year",__updateDateOnMonthSelect:_??!1,__staticSelector:x||"MonthPicker",onMouseLeave:H,onMonthMouseEnter:(e,t)=>Z(t),onMonthSelect:e=>{B(e),I?.(e)},getMonthControlProps:e=>({...U(e),...g?.(e)}),onLevelChange:T,__setDateRef:E,__setLevelRef:$,__stopPropagation:w,attributes:N,...!C?{className:L,style:W}:{}});if(!C)return G;let J=C.map((e,t)=>(0,l.jsx)(s.UnstyledButton,{...R("presetButton"),onClick:()=>{var t;let a;void 0!==(a=Array.isArray(t=e.value)?t[0]:t)&&(E.current?.(a),$.current?.("year"),S?S(t):X(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":w||void 0,children:e.label},t));return(0,l.jsxs)(i.Box,{...R("monthPickerRoot"),size:F,...z,children:[(0,l.jsx)("div",{...R("presetsList"),children:J}),G]})});D.classes={...a.Calendar.classes,...n},D.varsResolver=f,D.displayName="@mantine/dates/MonthPicker",e.s(["MonthPicker",0,D],337904)},215126,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),n=e.i(831474),o=e.i(337904),l=e.i(391398),i=e.i(275519),s=e.i(44091),d=e.i(62904);let c={type:"default",size:"sm",valueFormat:"MMMM YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,i.factory)(e=>{let i=(0,s.useProps)(["Input","InputWrapper","MonthPickerInput"],c,e),{type:u,value:m,defaultValue:p,onChange:h,valueFormat:f,labelSeparator:y,locale:D,classNames:k,styles:P,unstyled:v,closeOnChange:Y,size:x,variant:g,dropdownType:b,sortDates:M,minDate:j,maxDate:I,vars:_,valueFormatter:S,presets:w,attributes:C,...L}=i,{resolvedClassNames:W,resolvedStyles:V}=(0,d.useResolvedStylesApi)({classNames:k,styles:P,props:i}),{calendarProps:F,others:N}=(0,n.pickCalendarProps)(L),{_value:T,setValue:A,formattedValue:O,dropdownHandlers:z,dropdownOpened:E,onClear:$,shouldClear:R}=(0,r.useDatesInput)({type:u,value:m,defaultValue:p,onChange:h,locale:D,format:f,labelSeparator:y,closeOnChange:Y,sortDates:M,valueFormatter:S});return(0,l.jsx)(a.PickerInputBase,{formattedValue:O,dropdownOpened:E,dropdownHandlers:z,classNames:W,styles:V,unstyled:v,onClear:$,shouldClear:R,value:T,size:x,variant:g,dropdownType:b,...N,attributes:C,type:u,__staticSelector:"MonthPickerInput",children:(0,l.jsx)(o.MonthPicker,{...F,size:x,variant:g,type:u,value:T,defaultDate:F.defaultDate||(Array.isArray(T)?T[0]||(0,t.getDefaultClampedDate)({maxDate:I,minDate:j}):T||(0,t.getDefaultClampedDate)({maxDate:I,minDate:j})),onChange:A,locale:D,classNames:W,styles:V,unstyled:v,__staticSelector:"MonthPickerInput",__stopPropagation:"popover"===b,minDate:j,maxDate:I,presets:w,attributes:C})})});u.classes={...a.PickerInputBase.classes,...o.MonthPicker.classes},u.displayName="@mantine/dates/MonthPickerInput",e.s(["MonthPickerInput",0,u])},198277,e=>{"use strict";var t=e.i(648863),a=e.i(391398),r=e.i(267073),n=e.i(135140),o=e.i(215126);e.i(39167);let l={type:"code",component:function(){return(0,a.jsxs)(n.DatesProvider,{settings:{locale:"ru",firstDayOfWeek:0,weekendDays:[0]},children:[(0,a.jsx)(o.MonthPickerInput,{label:"Pick month",placeholder:"Pick month"}),(0,a.jsx)(r.DatePickerInput,{mt:"md",label:"Pick date",placeholder:"Pick date"})]})},code:`
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
`};var i=e.i(777141);let s={type:"code",component:function(){return(0,a.jsx)(n.DatesProvider,{settings:{consistentWeeks:!0},children:(0,a.jsx)(i.DatePicker,{})})},code:`
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`,centered:!0};var d=(0,t.__exportAll)({consistentWeeks:()=>s,usage:()=>l});e.s(["DatesProviderDemos",0,d],198277)},155204,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(403360),n=e.i(198277);e.i(603441);var o=e.i(62558);e.i(457450);var l=e.i(418026);let i=(0,o.Layout)(l.MDX_DATA.GettingStartedDates);function s(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:l,InstallScript:i}=o;return l||d("Demo",!0),i||d("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i,{packages:"@mantine/dates dayjs"}),"\n",(0,t.jsx)(o.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import dates styles after core package styles\nimport '@mantine/dates/styles.css';\n"})}),"\n",(0,t.jsx)(o.h2,{id:"do-not-forget-to-import-styles",children:"Do not forget to import styles"}),"\n",(0,t.jsx)(o.p,{children:"Followed the installation instructions above but something is not working\n(calendars and date pickers have no styles and look broken)?\nYou've fallen into the trap of not importing dates styles!\nTo fix this issue, import dates styles at the root of your application:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import '@mantine/dates/styles.css';\n"})}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["After installing the ",(0,t.jsx)(o.code,{children:"@mantine/dates"})," package and importing styles, you can use all components from it:"]}),"\n",(0,t.jsx)(l,{data:r.DatePickerInputDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"date-values-as-strings",children:"Date values as strings"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"@mantine/dates"})," components work with date strings: ",(0,t.jsx)(o.code,{children:"YYYY-MM-DD"})," or ",(0,t.jsx)(o.code,{children:"YYYY-MM-DD HH:mm:ss"})," depending on the component. Those strings do not include any timezone-specific information."]}),"\n",(0,t.jsx)(o.h2,{id:"dayjs",children:"dayjs"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"@mantine/dates"})," components use ",(0,t.jsx)(o.a,{href:"https://day.js.org/",children:"dayjs"})," under the hood for date manipulations and formatting.\ndayjs is a required dependency – you cannot change it to another date library. If you want to use a different\ndate library in your application, you will need to install it separately."]}),"\n",(0,t.jsx)(o.h2,{id:"datesprovider",children:"DatesProvider"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"DatesProvider"})," component lets you set various settings that are shared across all\ncomponents exported from the ",(0,t.jsx)(o.code,{children:"@mantine/dates"})," package. ",(0,t.jsx)(o.code,{children:"DatesProvider"})," supports the following settings:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"locale"})," – dayjs locale. Note that you also need to import the corresponding locale module from dayjs. The default value is ",(0,t.jsx)(o.code,{children:"en"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"firstDayOfWeek"})," – a number from 0 to 6, where 0 is Sunday and 6 is Saturday. The default value is 1 – Monday."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"weekendDays"})," – an array of numbers from 0 to 6, where 0 is Sunday and 6 is Saturday. The default value is ",(0,t.jsx)(o.code,{children:"[0, 6]"})," – Saturday and Sunday."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"consistentWeeks"})," – boolean. If ",(0,t.jsx)(o.code,{children:"true"}),", every month will have 6 weeks. The default value is ",(0,t.jsx)(o.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsx)(l,{data:n.DatesProviderDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"consistent-weeks",children:"Consistent weeks"}),"\n",(0,t.jsxs)(o.p,{children:["If you want to avoid layout shifts, set ",(0,t.jsx)(o.code,{children:"consistentWeeks: true"})," in the ",(0,t.jsx)(o.code,{children:"DatesProvider"})," settings.\nThis will ensure that every month has 6 weeks, even if outside days are not in the same month."]}),"\n",(0,t.jsx)(l,{data:n.DatesProviderDemos.consistentWeeks}),"\n",(0,t.jsx)(o.h2,{id:"custom-parse-format",children:"Custom parse format"}),"\n",(0,t.jsxs)(o.p,{children:["Some components like ",(0,t.jsx)(o.a,{href:"/dates/date-input",children:"DateInput"})," require the ",(0,t.jsx)(o.a,{href:"https://day.js.org/docs/en/plugin/custom-parse-format",children:"custom parse format"}),"\ndayjs plugin. You need to extend dayjs with this plugin before using components that require it. Note that\nthis is usually done once in your application root file, so you don't need to do it every time you use the component."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import dayjs from 'dayjs';\nimport customParseFormat from 'dayjs/plugin/customParseFormat';\n\ndayjs.extend(customParseFormat);\n"})}),"\n",(0,t.jsx)(o.h2,{id:"localization-and-server-components",children:"Localization and server components"}),"\n",(0,t.jsxs)(o.p,{children:["To add localization, you must import ",(0,t.jsx)(o.code,{children:"import 'dayjs/locale/x';"})," in your application (",(0,t.jsx)(o.code,{children:"x"})," is the locale name)\nand set ",(0,t.jsx)(o.code,{children:"locale"})," either on ",(0,t.jsx)(o.code,{children:"DatesProvider"})," or on each component individually."]}),"\n",(0,t.jsx)(o.p,{children:"Example of setting the locale on DatesProvider:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import 'dayjs/locale/ru';\n\nimport { DatesProvider } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatesProvider settings={{ locale: 'ru' }}>\n      {/* Your app  */}\n    </DatesProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The code above works in all environments, except Next.js app router.\nIf you are using Next.js app router, you must add ",(0,t.jsx)(o.code,{children:"'use client';"})," to the\ntop of the file where you are importing ",(0,t.jsx)(o.code,{children:"dayjs/locale/x"})," – locale data\nis required both on client and server."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"'use client';\n\nimport 'dayjs/locale/ru';\n\nimport { DatesProvider } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatesProvider settings={{ locale: 'ru' }}>\n      {/* Your app  */}\n    </DatesProvider>\n  );\n}\n"})})]})}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(i,{...e,children:(0,t.jsx)(s,{...e})})}])},747798,(e,t,a)=>{let r="/dates/getting-started";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(155204)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);