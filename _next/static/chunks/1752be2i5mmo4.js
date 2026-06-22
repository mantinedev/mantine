(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,n],931882)},39167,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),a="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),n="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function l(e,t,a){var r,n;return"m"===a?t?"минута":"минуту":e+" "+(r=+e,n=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[a].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var i=function(e,r){return o.test(r)?t[e.month()]:a[e.month()]};i.s=a,i.f=t;var s=function(e,t){return o.test(t)?r[e.month()]:n[e.month()]};s.s=n,s.f=r;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:l,mm:l,h:"час",hh:l,d:"день",dd:l,M:"месяц",MM:l,y:"год",yy:l},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(d,null,!0),d}(e.r(494834))},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(481178),n=e.i(317477),o=e.i(700145),l=e.i(853487),i=e.i(44091),s=e.i(391466),d=e.i(275519),c=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},m=e.i(391398);let p={position:"top-end",offset:0,showZero:!0},h=(0,r.createVarsResolver)((e,{color:r,position:i,offset:s,size:d,radius:c,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":r?(0,n.getThemeColor)(r,e):void 0,"--indicator-text-color":(0,l.getAutoContrastValue)(m,e)?(0,o.getContrastColor)({color:r,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,t.rem)(d),"--indicator-radius":void 0===c?void 0:(0,a.getRadius)(c),"--indicator-z-index":u?.toString(),...function(e="top-end",a=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n="number"==typeof a?a:a.x,o="number"==typeof a?a:a.y,l=(0,t.rem)(n),i=(0,t.rem)(o),[s,d]=e.split("-");return"top"===s&&(r["--indicator-top"]=i,r["--indicator-translate-y"]="-50%"),"middle"===s&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===s&&(r["--indicator-bottom"]=i,r["--indicator-translate-y"]="50%"),"start"===d&&(r["--indicator-left"]=l,r["--indicator-translate-x"]="-50%"),"center"===d&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===d&&(r["--indicator-right"]=l,r["--indicator-translate-x"]="50%"),r}(i,s)}})),f=(0,d.factory)(e=>{let t=(0,i.useProps)("Indicator",p,e),{classNames:a,className:r,style:n,styles:o,unstyled:l,vars:d,children:f,position:x,offset:D,inline:y,label:g,radius:v,color:b,withBorder:k,disabled:j,processing:P,zIndex:Y,autoContrast:M,maxValue:w,showZero:_,mod:I,attributes:C,...S}=t,T=(0,s.useStyles)({name:"Indicator",classes:u,props:t,className:r,style:n,classNames:a,styles:o,unstyled:l,attributes:C,vars:d,varsResolver:h}),L=!_&&(0===g||"0"===g),V=void 0!==w&&"number"==typeof g&&g>w?`${w}+`:g;return(0,m.jsxs)(c.Box,{...T("root"),mod:[{inline:y},I],...S,children:[!j&&!L&&(0,m.jsx)(c.Box,{mod:{"with-label":!!g,"with-border":k,processing:P},...T("indicator"),children:V}),f]})});f.classes=u,f.varsResolver=h,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},878166,e=>{"use strict";var t=e.i(494834),a=e.i(205693),r=e.i(422696),n=e.i(541772);e.s(["useDatesInput",0,function({type:e,value:o,defaultValue:l,onChange:i,locale:s,format:d,closeOnChange:c,sortDates:u,labelSeparator:m,valueFormatter:p}){let h=(0,a.useDatesContext)(),[f,x]=(0,n.useDisclosure)(!1),[D,y]=(0,r.useUncontrolledDates)({type:e,value:o,defaultValue:l,onChange:i}),g=function({formatter:e,...a}){return(e||function({type:e,date:a,locale:r,format:n,labelSeparator:o}){let l=e=>(0,t.default)(e).locale(r).format(n);if("default"===e)return null===a?"":l(a);if("multiple"===e)return a.map(l).join(", ");if("range"===e&&Array.isArray(a)){if(a[0]&&a[1])return`${l(a[0])} ${o} ${l(a[1])}`;if(a[0])return`${l(a[0])} ${o} `}return""})(a)}({type:e,date:D,locale:h.getLocale(s),format:d,labelSeparator:h.getLabelSeparator(m),formatter:p}),v=a=>{c&&("default"===e&&x.close(),"range"===e&&a[0]&&a[1]&&x.close()),u&&"multiple"===e?y([...a].sort((e,a)=>(0,t.default)(e).isAfter((0,t.default)(a))?1:-1)):y(a)};return{_value:D,setValue:v,onClear:()=>v("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:"range"===e?!!D[0]:"multiple"===e?D.length>0:null!==D,formattedValue:g,dropdownOpened:f,dropdownHandlers:x}}],878166)},267073,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),n=e.i(831474),o=e.i(777141),l=e.i(391398),i=e.i(275519),s=e.i(44091),d=e.i(62904);let c={type:"default",size:"sm",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,i.factory)(e=>{let i=(0,s.useProps)(["Input","InputWrapper","DatePickerInput"],c,e),{type:u,value:m,defaultValue:p,onChange:h,valueFormat:f,labelSeparator:x,locale:D,classNames:y,styles:g,unstyled:v,closeOnChange:b,size:k,variant:j,dropdownType:P,sortDates:Y,minDate:M,maxDate:w,vars:_,defaultDate:I,valueFormatter:C,presets:S,attributes:T,...L}=i,{resolvedClassNames:V,resolvedStyles:N}=(0,d.useResolvedStylesApi)({classNames:y,styles:g,props:i}),{calendarProps:W,others:A}=(0,n.pickCalendarProps)(L),{_value:z,setValue:F,formattedValue:O,dropdownHandlers:B,dropdownOpened:R,onClear:H,shouldClear:$}=(0,r.useDatesInput)({type:u,value:m,defaultValue:p,onChange:h,locale:D,format:f,labelSeparator:x,closeOnChange:b,sortDates:Y,valueFormatter:C}),E=Array.isArray(z)?z[0]||I:z||I;return(0,l.jsx)(a.PickerInputBase,{formattedValue:O,dropdownOpened:R,dropdownHandlers:B,classNames:V,styles:N,unstyled:v,onClear:H,shouldClear:$,value:z,size:k,variant:j,dropdownType:P,...A,type:u,__staticSelector:"DatePickerInput",attributes:T,children:(0,l.jsx)(o.DatePicker,{...W,size:k,variant:j,type:u,value:z,defaultDate:E||(0,t.getDefaultClampedDate)({maxDate:w,minDate:M}),onChange:F,locale:D,classNames:V,styles:N,unstyled:v,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===P,minDate:M,maxDate:w,presets:S,attributes:T})})});u.classes={...a.PickerInputBase.classes,...o.DatePicker.classes},u.displayName="@mantine/dates/DatePickerInput",e.s(["DatePickerInput",0,u])},27905,e=>{"use strict";var t=e.i(648863),a=e.i(804052),r=e.i(391398);let n={type:"code",code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Title,{order:1,children:"This is h1 title"}),(0,r.jsx)(a.Title,{order:2,children:"This is h2 title"}),(0,r.jsx)(a.Title,{order:3,children:"This is h3 title"}),(0,r.jsx)(a.Title,{order:4,children:"This is h4 title"}),(0,r.jsx)(a.Title,{order:5,children:"This is h5 title"}),(0,r.jsx)(a.Title,{order:6,children:"This is h6 title"})]})}},o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Title,{order:3,size:"h1",children:"H3 heading with h1 font-size"}),(0,r.jsx)(a.Title,{size:"h4",children:"H1 heading with h4 font-size"}),(0,r.jsx)(a.Title,{size:16,children:"H1 heading with 16px size"}),(0,r.jsx)(a.Title,{size:"xs",children:"H1 heading with xs size"})]})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size={16}>H1 heading with 16px size</Title>
      <Title size="xs">H1 heading with xs size</Title>
    </>
  );
}
`};var l=e.i(232471);let i={type:"configurator",component:function(e){return(0,r.jsx)(l.Box,{maw:400,children:(0,r.jsx)(a.Title,{order:2,...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"})})},code:`
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
`,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]},s={type:"configurator",component:function(e){return(0,r.jsx)(a.Title,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]};var d=(0,t.__exportAll)({lineClamp:()=>i,size:()=>o,textWrap:()=>s,usage:()=>n});e.s(["TitleDemos",0,d],27905)},70530,e=>{"use strict";var t=e.i(391398),a=e.i(494834),r=e.i(191788),n=e.i(632036);let o=({type:e,date:t,locale:r,format:n})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return(0,a.default)(t[0]).locale(r).format(n);if(t.length>1)return`${t.length} dates selected`}return""};e.s(["getSharedPickerInputDemos",0,function(e){let l,i,s,d,c,u,m,p;return{usage:{type:"code",centered:!0,maxWidth:400,code:(l=e.displayName.replace("@mantine/dates/",""),`
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
`},f=e=>{let t=(0,c.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},x=e=>{let t=(0,c.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},D=e=>{let t=(0,c.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},y={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,getDayProps:f,getYearControlProps:x,getMonthControlProps:D})},code:`
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
`};var g=e.i(393353);let v=e=>{let t=(0,c.default)(e).date();return(0,o.jsx)(g.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,o.jsx)("div",{children:t})})},b={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",renderDay:v})},code:`
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
`},k={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,excludeDate:e=>0===new Date(e).getDay()||6===new Date(e).getDay()})},code:`
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
`},j={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.DatePickerInput,{defaultLevel:"decade",label:"Decade level",placeholder:"Decade level",mb:"md"}),(0,o.jsx)(l.DatePickerInput,{defaultLevel:"year",label:"Year level",placeholder:"Year level"})]})},code:`
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
`},P={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{hideOutsideDates:!0,label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
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
`},Y={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,hideWeekdays:!0})},code:`
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
`},M={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.DatePickerInput,{firstDayOfWeek:0,label:"Sunday as first day of week",placeholder:"Sunday as first day of week",mb:"md"}),(0,o.jsx)(l.DatePickerInput,{firstDayOfWeek:6,label:"Saturday as first day of week",placeholder:"Saturday as first day of week"})]})},code:`
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
`},w={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,o.jsx)(l.DatePickerInput,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
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
`},I={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.DatePickerInput,{maxLevel:"year",label:"Year max level",placeholder:"Year max level",mb:"md"}),(0,o.jsx)(l.DatePickerInput,{maxLevel:"month",label:"Month max level",placeholder:"Month max level"})]})},code:`
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
`},C={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{weekendDays:[1,2],label:"Weekend days are Monday and Tuesday",placeholder:"Pick date"})},code:`
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
`},S={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{withWeekNumbers:!0,label:"With week numbers",placeholder:"Pick date"})},code:`
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
`},T={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(l.DatePickerInput,{defaultDate:new Date(2022,1),headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}},label:"Header controls order",placeholder:"Header controls order"})},code:`
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
`};var L=(0,t.__exportAll)({clearSectionMode:()=>i,clearable:()=>O,configurator:()=>A,controlProps:()=>y,defaultLevel:()=>j,disabled:()=>d,excludeDate:()=>k,firstDayOfWeek:()=>M,headerControlsOrder:()=>T,hideOutsideDates:()=>P,hideWeekdays:()=>Y,icon:()=>F,labelFormat:()=>w,listFormat:()=>_,maxLevel:()=>I,minMax:()=>h,modal:()=>z,multiple:()=>N,presets:()=>u,presetsRange:()=>m,range:()=>W,renderDay:()=>b,usage:()=>V,valueFormat:()=>s,valueFormatter:()=>B,weekendDays:()=>C,withWeekNumbers:()=>S});let{usage:V,multiple:N,range:W,configurator:A,modal:z,icon:F,clearable:O,valueFormatter:B}=(0,a.getSharedPickerInputDemos)(l.DatePickerInput);e.s(["DatePickerInputDemos",0,L],403360)},337904,e=>{"use strict";var t=e.i(337976),a=e.i(164036),r=e.i(831474),n={monthPickerRoot:"m_53c9e871",presetsList:"m_cccb8ff3",presetButton:"m_7b4fbf50"},o=e.i(191788),l=e.i(391398),i=e.i(232471),s=e.i(284629),d=e.i(481178),c=e.i(275519),u=e.i(433512),m=e.i(44091),p=e.i(62904),h=e.i(391466);let f=(0,d.createVarsResolver)((e,{size:t})=>({monthPickerRoot:{"--preset-font-size":(0,u.getFontSize)(t)}})),x={type:"default"},D=(0,c.factory)(e=>{let d=(0,m.useProps)("MonthPicker",x,e),{classNames:c,styles:u,vars:D,type:y,defaultValue:g,value:v,onChange:b,__staticSelector:k,getMonthControlProps:j,allowSingleDateInRange:P,allowDeselect:Y,onMouseLeave:M,onMonthSelect:w,__updateDateOnMonthSelect:_,__onPresetSelect:I,__stopPropagation:C,presets:S,className:T,style:L,unstyled:V,size:N,attributes:W,onLevelChange:A,...z}=d,{calendarProps:F,others:O}=(0,r.pickCalendarProps)(z),B=(0,o.useRef)(null),R=(0,o.useRef)(null),H=(0,h.useStyles)({name:k||"MonthPicker",classes:n,props:d,className:T,style:L,classNames:c,styles:u,unstyled:V,attributes:W,rootSelector:S?"monthPickerRoot":void 0,varsResolver:f,vars:D}),{onDateChange:$,onRootMouseLeave:E,onHoveredDateChange:q,getControlProps:U,setValue:Z}=(0,t.useDatesState)({type:y,level:"month",allowDeselect:Y,allowSingleDateInRange:P,value:v,defaultValue:g,onChange:b,onMouseLeave:M}),{resolvedClassNames:G,resolvedStyles:K}=(0,p.useResolvedStylesApi)({classNames:c,styles:u,props:d}),X=(0,l.jsx)(a.Calendar,{classNames:G,styles:K,size:N,...F,...!S?O:{},minLevel:"year",__updateDateOnMonthSelect:_??!1,__staticSelector:k||"MonthPicker",onMouseLeave:E,onMonthMouseEnter:(e,t)=>q(t),onMonthSelect:e=>{$(e),w?.(e)},getMonthControlProps:e=>({...U(e),...j?.(e)}),onLevelChange:A,__setDateRef:B,__setLevelRef:R,__stopPropagation:C,attributes:W,...!S?{className:T,style:L}:{}});if(!S)return X;let Q=S.map((e,t)=>(0,l.jsx)(s.UnstyledButton,{...H("presetButton"),onClick:()=>{var t;let a;void 0!==(a=Array.isArray(t=e.value)?t[0]:t)&&(B.current?.(a),R.current?.("year"),I?I(t):Z(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":C||void 0,children:e.label},t));return(0,l.jsxs)(i.Box,{...H("monthPickerRoot"),size:N,...O,children:[(0,l.jsx)("div",{...H("presetsList"),children:Q}),X]})});D.classes={...a.Calendar.classes,...n},D.varsResolver=f,D.displayName="@mantine/dates/MonthPicker",e.s(["MonthPicker",0,D],337904)},215126,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),n=e.i(831474),o=e.i(337904),l=e.i(391398),i=e.i(275519),s=e.i(44091),d=e.i(62904);let c={type:"default",size:"sm",valueFormat:"MMMM YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,i.factory)(e=>{let i=(0,s.useProps)(["Input","InputWrapper","MonthPickerInput"],c,e),{type:u,value:m,defaultValue:p,onChange:h,valueFormat:f,labelSeparator:x,locale:D,classNames:y,styles:g,unstyled:v,closeOnChange:b,size:k,variant:j,dropdownType:P,sortDates:Y,minDate:M,maxDate:w,vars:_,valueFormatter:I,presets:C,attributes:S,...T}=i,{resolvedClassNames:L,resolvedStyles:V}=(0,d.useResolvedStylesApi)({classNames:y,styles:g,props:i}),{calendarProps:N,others:W}=(0,n.pickCalendarProps)(T),{_value:A,setValue:z,formattedValue:F,dropdownHandlers:O,dropdownOpened:B,onClear:R,shouldClear:H}=(0,r.useDatesInput)({type:u,value:m,defaultValue:p,onChange:h,locale:D,format:f,labelSeparator:x,closeOnChange:b,sortDates:Y,valueFormatter:I});return(0,l.jsx)(a.PickerInputBase,{formattedValue:F,dropdownOpened:B,dropdownHandlers:O,classNames:L,styles:V,unstyled:v,onClear:R,shouldClear:H,value:A,size:k,variant:j,dropdownType:P,...W,attributes:S,type:u,__staticSelector:"MonthPickerInput",children:(0,l.jsx)(o.MonthPicker,{...N,size:k,variant:j,type:u,value:A,defaultDate:N.defaultDate||(Array.isArray(A)?A[0]||(0,t.getDefaultClampedDate)({maxDate:w,minDate:M}):A||(0,t.getDefaultClampedDate)({maxDate:w,minDate:M})),onChange:z,locale:D,classNames:L,styles:V,unstyled:v,__staticSelector:"MonthPickerInput",__stopPropagation:"popover"===P,minDate:M,maxDate:w,presets:C,attributes:S})})});u.classes={...a.PickerInputBase.classes,...o.MonthPicker.classes},u.displayName="@mantine/dates/MonthPickerInput",e.s(["MonthPickerInput",0,u])},198277,e=>{"use strict";var t=e.i(648863),a=e.i(391398),r=e.i(267073),n=e.i(135140),o=e.i(215126);e.i(39167);let l={type:"code",component:function(){return(0,a.jsxs)(n.DatesProvider,{settings:{locale:"ru",firstDayOfWeek:0,weekendDays:[0]},children:[(0,a.jsx)(o.MonthPickerInput,{label:"Pick month",placeholder:"Pick month"}),(0,a.jsx)(r.DatePickerInput,{mt:"md",label:"Pick date",placeholder:"Pick date"})]})},code:`
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
`,centered:!0};var d=(0,t.__exportAll)({consistentWeeks:()=>s,usage:()=>l});e.s(["DatesProviderDemos",0,d],198277)},715683,e=>{"use strict";var t=e.i(648863);let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`;var n=e.i(391398),o=e.i(26123),l=e.i(520916),i=e.i(577596),s={root:"m_a410e613",label:"m_ddb0bfe3"},d=e.i(232471),c=e.i(481178),u=e.i(275519),m=e.i(317477),p=e.i(779177),h=e.i(951254),f=e.i(44091),x=e.i(62904),D=e.i(391466),y=e.i(191788),g=e.i(881264),v=e.i(865749),b=e.i(586536),k=e.i(723451),j=e.i(694713);let P={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,labelsType:"value",tooltipDataSource:"all"},Y=(0,c.createVarsResolver)((e,{strokeColor:t,labelColor:a,withLabels:r,withLegend:n,size:o})=>({root:{"--chart-stroke-color":t?(0,m.getThemeColor)(t,e):void 0,"--chart-labels-color":a?(0,m.getThemeColor)(a,e):void 0,"--chart-size":(0,p.rem)(o+80*!!r+80*!!n)}})),M=(0,u.factory)(e=>{let t,a=(0,f.useProps)("DonutChart",P,e),{classNames:r,className:c,style:u,styles:m,unstyled:p,vars:M,data:w,withTooltip:_,withLegend:I,legendProps:C,tooltipAnimationDuration:S,tooltipProps:T,pieProps:L,paddingAngle:V,withLabels:N,withLabelsLine:W,size:A,thickness:z,strokeWidth:F,startAngle:O,endAngle:B,tooltipDataSource:R,chartLabel:H,children:$,pieChartProps:E,valueFormatter:q,strokeColor:U,labelsType:Z,attributes:G,cellProps:K,...X}=a,Q=(0,h.useMantineTheme)(),[J,ee]=(0,y.useState)(null),et=(0,D.useStyles)({name:"DonutChart",classes:s,props:a,className:c,style:u,classNames:r,styles:m,unstyled:p,attributes:G,vars:M,varsResolver:Y}),{resolvedClassNames:ea,resolvedStyles:er}=(0,x.useResolvedStylesApi)({classNames:r,styles:m,props:a}),en=(0,o.getPieChartData)({data:w,theme:Q,strokeWidth:F,highlightedIndex:J,cellProps:K});return(0,n.jsx)(d.Box,{size:A,...et("root"),...X,children:(0,n.jsx)(k.ResponsiveContainer,{children:(0,n.jsxs)(b.PieChart,{...E,children:[(0,n.jsx)(v.Pie,{data:en,innerRadius:A/2-z,outerRadius:A/2,dataKey:"value",isAnimationActive:!1,paddingAngle:V,startAngle:O,endAngle:B,label:!!N&&(t=Z||"value",({x:e,y:a,cx:r,cy:o,percent:l,value:i,name:s})=>{var d,c;return(0,n.jsx)("text",{x:e,y:a,cx:r,cy:o,textAnchor:e>Number(r)?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,n.jsx)("tspan",{x:e,children:(d=Number(i),c=Number(l),"name"===t?s:"percent"===t?`${(100*(c||0)).toFixed(0)}%`:"function"==typeof q?q(d||0):d)})})}),labelLine:!!W&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...L}),H&&(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...et("label"),children:H}),_&&(0,n.jsx)(j.Tooltip,{animationDuration:S,isAnimationActive:!1,content:({payload:e})=>(0,n.jsx)(l.ChartTooltip,{payload:w,classNames:ea,styles:er,type:"radial",segmentId:"segment"===R?e?.[0]?.payload?.__segmentIndex:void 0,valueFormatter:q,attributes:G}),...T}),I&&(0,n.jsx)(g.Legend,{verticalAlign:"bottom",content:e=>(0,n.jsx)(i.ChartLegend,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name,highlightKey:e.payload?.__segmentIndex})),onHighlight:e=>ee("number"==typeof e?e:null),legendPosition:C?.verticalAlign||"bottom",classNames:ea,styles:er,centered:!0,attributes:G}),...C}),$]})})})});M.displayName="@mantine/charts/DonutChart",M.classes=s,M.varsResolver=Y;let w={type:"code",component:function(){return(0,n.jsx)(M,{data:a})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},_={type:"code",component:function(){return(0,n.jsx)(M,{data:a,withLegend:!0})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withLegend />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},I={type:"configurator",component:function(e){return(0,n.jsx)(M,{...e,withLabels:!0,data:a})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent","name"]}]},C={type:"configurator",component:function(e){return(0,n.jsx)(M,{...e,data:a,mih:300})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"},{type:"number",prop:"thickness",initialValue:20,min:2,max:30,step:1,libraryValue:"__"}]},S={type:"configurator",component:function(e){return(0,n.jsx)(M,{...e,data:a})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"paddingAngle",initialValue:10,min:0,max:30,step:1,libraryValue:"__"}]},T={type:"configurator",component:function(e){return(0,n.jsx)(M,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { DonutChart } from '@mantine/charts';

function Demo() {
  return (
    <DonutChart
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var L=e.i(725695),V=e.i(883364);let N={type:"code",component:function(){return(0,n.jsxs)(L.Group,{gap:50,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(V.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,n.jsx)(M,{data:a,tooltipDataSource:"segment",mx:"auto"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(V.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,n.jsx)(M,{data:a,mx:"auto"})]})]})},code:[{code:`
import { Group, Text } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <DonutChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <DonutChart data={data} mx="auto" />
      </div>
    </Group>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},W={type:"configurator",component:function(e){return(0,n.jsx)(M,{...e,data:a})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]},A={type:"code",component:function(){return(0,n.jsx)(M,{data:a,startAngle:180,endAngle:0})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},z={type:"code",component:function(){return(0,n.jsx)(M,{data:a,chartLabel:"Users by country"})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} chartLabel="Users by country" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},F={type:"code",component:function(){return(0,n.jsx)(M,{data:a,withTooltip:!1})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},O={type:"code",component:function(){return(0,n.jsx)("div",{className:"m_3e09cb9d",children:(0,n.jsx)(M,{data:a,strokeColor:"var(--card-bg)"})})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <DonutChart data={data} strokeColor="var(--card-bg)" />
    </div>
  );
}

`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},B={type:"code",component:function(){return(0,n.jsx)(M,{data:a,withLabelsLine:!0,labelsType:"name",withLabels:!0})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withLabelsLine labelsType="name" withLabels />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0};var R=(0,t.__exportAll)({angle:()=>A,chartLabel:()=>z,color:()=>T,labelsTypeName:()=>B,legend:()=>_,noTooltip:()=>F,paddingAngle:()=>S,size:()=>C,strokeColor:()=>O,strokeWidth:()=>W,tooltipDataSource:()=>N,usage:()=>w,withLabels:()=>I});e.s(["DonutChartDemos",0,R],715683)},282596,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(199536),n=e.i(403360),o=e.i(198277),l=e.i(715683),i=e.i(436100),s=e.i(27905);e.i(603441);var d=e.i(62558);e.i(457450);var c=e.i(418026);let u=(0,d.Layout)(c.MDX_DATA.Changelog750);function m(e){let d={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:c}=d;return c||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h2,{id:"donutchart-component",children:"DonutChart component"}),"\n",(0,t.jsxs)(d.p,{children:["New ",(0,t.jsx)(d.a,{href:"/charts/donut-chart",children:"DonutChart"})," component:"]}),"\n",(0,t.jsx)(c,{data:l.DonutChartDemos.usage}),"\n",(0,t.jsx)(d.h2,{id:"piechart-component",children:"PieChart component"}),"\n",(0,t.jsxs)(d.p,{children:["New ",(0,t.jsx)(d.a,{href:"/charts/pie-chart",children:"PieChart"})," component:"]}),"\n",(0,t.jsx)(c,{data:i.PieChartDemos.usage}),"\n",(0,t.jsx)(d.h2,{id:"mantinedates-value-formatter",children:"@mantine/dates value formatter"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),", ",(0,t.jsx)(d.a,{href:"/dates/month-picker-input",children:"MonthPickerInput"})," and\n",(0,t.jsx)(d.a,{href:"/dates/year-picker-input",children:"YearPickerInput"})," now support ",(0,t.jsx)(d.code,{children:"valueFormatter"})," prop."]}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,t.jsx)(d.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,t.jsx)(d.code,{children:"default"}),", ",(0,t.jsx)(d.code,{children:"multiple"})," and ",(0,t.jsx)(d.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,t.jsxs)(d.p,{children:["Example of using a custom formatter function with ",(0,t.jsx)(d.code,{children:'type="multiple"'}),":"]}),"\n",(0,t.jsx)(c,{data:n.DatePickerInputDemos.valueFormatter}),"\n",(0,t.jsx)(d.h2,{id:"mantinedates-consistent-weeks",children:"@mantine/dates consistent weeks"}),"\n",(0,t.jsxs)(d.p,{children:["You can now force each month to have 6 weeks by setting ",(0,t.jsx)(d.code,{children:"consistentWeeks: true"})," on\n",(0,t.jsx)(d.a,{href:"/dates/getting-started",children:"DatesProvider"}),". This is useful if you want to avoid layout\nshifts when month changes."]}),"\n",(0,t.jsx)(c,{data:o.DatesProviderDemos.consistentWeeks}),"\n",(0,t.jsx)(d.h2,{id:"charts-series-label",children:"Charts series label"}),"\n",(0,t.jsxs)(d.p,{children:["It is now possible to change series labels with ",(0,t.jsx)(d.code,{children:"label"})," property\nin ",(0,t.jsx)(d.code,{children:"series"})," object. This feature is supported in ",(0,t.jsx)(d.a,{href:"/charts/area-chart",children:"AreaChart"}),",\n",(0,t.jsx)(d.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,t.jsx)(d.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,t.jsx)(c,{data:r.AreaChartDemos.seriesLabels}),"\n",(0,t.jsx)(d.h2,{id:"charts-value-formatter",children:"Charts value formatter"}),"\n",(0,t.jsxs)(d.p,{children:["All ",(0,t.jsx)(d.code,{children:"@mantine/charts"})," components now support ",(0,t.jsx)(d.code,{children:"valueFormatter"})," prop, which allows\nformatting value that is displayed on the y axis and inside the tooltip."]}),"\n",(0,t.jsx)(c,{data:r.AreaChartDemos.valueFormatter}),"\n",(0,t.jsx)(d.h2,{id:"headings-text-wrap",children:"Headings text wrap"}),"\n",(0,t.jsxs)(d.p,{children:["New ",(0,t.jsx)(d.a,{href:"/core/title",children:"Title"})," ",(0,t.jsx)(d.code,{children:"textWrap"})," prop sets ",(0,t.jsx)(d.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,t.jsx)(c,{data:s.TitleDemos.textWrap}),"\n",(0,t.jsxs)(d.p,{children:["You can also set ",(0,t.jsx)(d.code,{children:"textWrap"})," on ",(0,t.jsx)(d.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Title } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(d.p,{children:["If set on theme, ",(0,t.jsx)(d.code,{children:"textWrap"})," is also applied to headings in ",(0,t.jsx)(d.a,{href:"/core/typography",children:"Typography"})]}),"\n",(0,t.jsx)(d.h2,{id:"mod-prop",children:"mod prop"}),"\n",(0,t.jsxs)(d.p,{children:["All components now support ",(0,t.jsx)(d.code,{children:"mod"})," prop, which allows adding data attributes to\nthe root element:"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box mod=\"data-button\" />;\n// -> <div data-button />\n\n<Box mod={{ opened: true }} />;\n// -> <div data-opened />\n\n<Box mod={{ opened: false }} />;\n// -> <div />\n\n<Box mod={['button', { opened: true }]} />;\n// -> <div data-button data-opened />\n\n<Box mod={{ orientation: 'horizontal' }} />;\n// -> <div data-orientation=\"horizontal\" />\n"})}),"\n",(0,t.jsx)(d.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["New ",(0,t.jsx)(d.a,{href:"/guides/vitest/",children:"testing with Vitest guide"})]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/native-select/#with-dividers",children:"NativeSelect"})," with dividers demo"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/popover/#middlewares",children:"Popover"})," ",(0,t.jsx)(d.code,{children:"shift"})," and ",(0,t.jsx)(d.code,{children:"flip"})," middlewares documentation"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/combobox/#popover-props",children:"Combobox"})," props related to ",(0,t.jsx)(d.a,{href:"/core/popover",children:"Popover"})," documentation"]}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"/styles/mantine-styles/#loading-styles-from-cdn",children:"Loading styles from CDN guide"})}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/anchor/#text-props",children:"Anchor"})," now includes additional documentation on how to use ",(0,t.jsx)(d.a,{href:"/core/text",children:"Text"})," props"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/pagination",children:"Pagination"})," now includes props tables for all compound components"]}),"\n",(0,t.jsxs)(d.li,{children:["A more detailed breakdown of ",(0,t.jsx)(d.a,{href:"/about/#browser-support",children:"browser support"})," has been added to the about page"]}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,t.jsxs)(d.p,{children:["New articles added to the ",(0,t.jsx)(d.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-astro",children:"Can I use Mantine with Astro?"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/how-can-i-contribute",children:"How can I contribute to the library?"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/dynamic-css-styles",children:"How can I add dynamic CSS styles?"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/next-load-fonts",children:"How can I load fonts in Next.js?"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/vite-load-fonts",children:"How can I load fonts in Vite?"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/floating-action-button",children:"Is there a floating action button component?"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/inputs-placeholder-color",children:"How to change inputs placeholder color?"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"https://help.mantine.dev/q/dates-missing-styles",children:"I do not have styles in my dates components..."})}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/checkbox",children:"Checkbox.Group"}),", ",(0,t.jsx)(d.a,{href:"/core/radio",children:"Radio.Group"})," and ",(0,t.jsx)(d.a,{href:"/core/switch",children:"Switch.Group"})," now support ",(0,t.jsx)(d.code,{children:"readOnly"})," prop"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/action-icon",children:"ActionIcon"})," now has ",(0,t.jsx)(d.code,{children:"loading"})," state animation"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/segmented-control",children:"SegmentedControl"})," now supports ",(0,t.jsx)(d.code,{children:"withItemsBorder"})," prop which allows removing border between items"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/progress",children:"Progress"})," now supports ",(0,t.jsx)(d.code,{children:"transitionDuration"})," prop which controls section width animation duration"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"/core/textarea",children:"Textarea"})," and ",(0,t.jsx)(d.a,{href:"/core/json-input",children:"JsonInput"})," components now support ",(0,t.jsx)(d.code,{children:"resize"})," prop, which allows setting ",(0,t.jsx)(d.code,{children:"resize"})," CSS property on the input"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.code,{children:"@mantine/hooks"})," package now exports ",(0,t.jsx)(d.a,{href:"/hooks/use-local-storage/#read-storage-value",children:"readLocalStorageValue and readSessionStorageValue"})," function to get value from storage outside of React components"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(u,{...e,children:(0,t.jsx)(m,{...e})})}])},104910,(e,t,a)=>{let r="/changelog/7-5-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(282596)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);