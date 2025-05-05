"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61135],{17182:(e,t,a)=>{a.d(t,{Q:()=>g});var l=a(31085),r=a(23464);let n=e=>`
import dayjs from 'dayjs';
import { ${e} } from '@mantine/dates';

function Demo() {
  return (
    <${e}
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`,i=e=>`import { ${e} } from '@mantine/dates';


function Demo() {
  return (
    <${e}
      {{props}}
    />
  );
}
`;var o=a(14041),u=a(61584);let s=e=>`
import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <${e}
      leftSection={<IconCalendar size={18} stroke={1.5} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,d=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${e}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,c=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <${e}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`,p=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${e}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`,m=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${e}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,f=e=>`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${e}, DateFormatter } from '@mantine/dates';

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
    <${e}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`,y=({type:e,date:t,locale:a,format:l})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return r(t[0]).locale(a).format(l);if(t.length>1)return`${t.length} dates selected`}return""};function g(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:m(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,o.useState)(null);return(0,l.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},multiple:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,o.useState)([]);return(0,l.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:a})}},range:{type:"code",centered:!0,maxWidth:400,code:p(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,o.useState)([null,null]);return(0,l.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:a})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:i(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,o.useState)(null);return(0,l.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},icon:{type:"code",centered:!0,maxWidth:400,code:s(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,o.useState)(null);return(0,l.jsx)(e,{leftSection:(0,l.jsx)(u.A,{size:18,stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},clearable:{type:"code",centered:!0,maxWidth:400,code:n(e.displayName.replace("@mantine/dates/","")),component:()=>(0,l.jsx)(e,{clearable:!0,defaultValue:r().format("YYYY-MM-DD"),label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:f(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,o.useState)([]);return(0,l.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:a,type:"multiple",valueFormatter:y})}}}}},34456:(e,t,a)=>{a.d(t,{q:()=>l});function l(e){let{maxLevel:t,minLevel:a,defaultLevel:l,level:r,onLevelChange:n,nextIcon:i,previousIcon:o,date:u,defaultDate:s,onDateChange:d,numberOfColumns:c,columnsToScroll:p,ariaLabels:m,nextLabel:f,previousLabel:y,onYearSelect:g,onMonthSelect:h,onYearMouseEnter:b,onMonthMouseEnter:k,onNextMonth:v,onPreviousMonth:S,onNextYear:P,onPreviousYear:V,onNextDecade:j,onPreviousDecade:x,withCellSpacing:C,highlightToday:$,__updateDateOnYearSelect:A,__updateDateOnMonthSelect:D,withWeekNumbers:N,firstDayOfWeek:_,weekdayFormat:w,weekendDays:B,getDayProps:I,excludeDate:W,renderDay:E,hideOutsideDates:F,hideWeekdays:Y,getDayAriaLabel:z,monthLabelFormat:H,monthsListFormat:M,getMonthControlProps:R,yearLabelFormat:T,yearsListFormat:L,getYearControlProps:O,decadeLabelFormat:q,allowSingleDateInRange:Q,allowDeselect:U,minDate:G,maxDate:J,locale:K,...X}=e;return{calendarProps:{maxLevel:t,minLevel:a,defaultLevel:l,level:r,onLevelChange:n,nextIcon:i,previousIcon:o,date:u,defaultDate:s,onDateChange:d,numberOfColumns:c,columnsToScroll:p,ariaLabels:m,nextLabel:f,previousLabel:y,onYearSelect:g,onMonthSelect:h,onYearMouseEnter:b,onMonthMouseEnter:k,onNextMonth:v,onPreviousMonth:S,onNextYear:P,onPreviousYear:V,onNextDecade:j,onPreviousDecade:x,withCellSpacing:C,highlightToday:$,__updateDateOnYearSelect:A,__updateDateOnMonthSelect:D,withWeekNumbers:N,firstDayOfWeek:_,weekdayFormat:w,weekendDays:B,getDayProps:I,excludeDate:W,renderDay:E,hideOutsideDates:F,hideWeekdays:Y,getDayAriaLabel:z,monthLabelFormat:H,monthsListFormat:M,getMonthControlProps:R,yearLabelFormat:T,yearsListFormat:L,getYearControlProps:O,decadeLabelFormat:q,allowSingleDateInRange:Q,allowDeselect:U,minDate:G,maxDate:J,locale:K},others:X}}},95463:(e,t,a)=>{a.d(t,{E:()=>n});var l=a(31085);a(23464);var r=a(12360);function n({value:e,type:t,name:a,form:n,withTime:i=!1}){return(0,l.jsx)("input",{type:"hidden",value:function({value:e,type:t,withTime:a}){let l=a?r.M:r.H;if("range"===t&&Array.isArray(e)){let t=l(e[0]),a=l(e[1]);return t?a?`${t} \u2013 ${a}`:`${t} \u2013`:""}return"multiple"===t&&Array.isArray(e)?e.filter(Boolean).join(", "):!Array.isArray(e)&&e?l(e):""}({value:e,type:t,withTime:i}),name:a,form:n})}n.displayName="@mantine/dates/HiddenDatesInput"},44741:(e,t,a)=>{a.d(t,{_:()=>m});var l=a(31085),r=a(54357),n=a(6754),i=a(21664),o=a(34452),u=a(19042),s=a(35764),d=a(95463),c={input:"m_6fa5e2aa"};let p={},m=(0,n.P9)((e,t)=>{let{inputProps:a,wrapperProps:n,placeholder:m,classNames:f,styles:y,unstyled:g,popoverProps:h,modalProps:b,dropdownType:k,children:v,formattedValue:S,dropdownHandlers:P,dropdownOpened:V,onClick:j,clearable:x,onClear:C,clearButtonProps:$,rightSection:A,shouldClear:D,readOnly:N,disabled:_,value:w,name:B,form:I,type:W,onDropdownClose:E,withTime:F,...Y}=(0,i.I)("PickerInputBase",p,e),z=(0,l.jsx)(o.p.ClearButton,{onClick:C,unstyled:g,...$}),H=()=>{"range"===W&&Array.isArray(w)&&w[0]&&!w[1]&&C(),P.close(),E?.()};return(0,l.jsxs)(l.Fragment,{children:["modal"===k&&!N&&(0,l.jsx)(u.a,{opened:V,onClose:H,withCloseButton:!1,size:"auto","data-dates-modal":!0,unstyled:g,...b,children:v}),(0,l.jsx)(o.p.Wrapper,{...n,children:(0,l.jsxs)(s.A,{position:"bottom-start",opened:V,trapFocus:!0,returnFocus:!1,unstyled:g,...h,disabled:h?.disabled||"modal"===k||N,onChange:e=>{e||(h?.onClose?.(),H())},children:[(0,l.jsx)(s.A.Target,{children:(0,l.jsx)(o.p,{"data-dates-input":!0,"data-read-only":N||void 0,disabled:_,component:"button",type:"button",multiline:!0,onClick:e=>{j?.(e),P.toggle()},__clearSection:z,__clearable:x&&D&&!N&&!_,rightSection:A,...a,ref:t,classNames:{...f,input:(0,r.A)(c.input,f?.input)},...Y,children:S||(0,l.jsx)(o.p.Placeholder,{error:a.error,unstyled:g,className:f?.placeholder,style:y?.placeholder,children:m})})}),(0,l.jsx)(s.A.Dropdown,{"data-dates-dropdown":!0,children:v})]})}),(0,l.jsx)(d.E,{value:w,name:B,form:I,type:W,withTime:F})]})});m.classes=c,m.displayName="@mantine/dates/PickerInputBase"},82065:(e,t,a)=>{a.d(t,{j:()=>o});var l=a(23464),r=a(92051),n=a(16088),i=a(47117);function o({type:e,value:t,defaultValue:a,onChange:o,locale:u,format:s,closeOnChange:d,sortDates:c,labelSeparator:p,valueFormatter:m}){let f=(0,n.E)(),[y,g]=(0,r.j)(!1),[h,b]=(0,i.w)({type:e,value:t,defaultValue:a,onChange:o}),k=function({formatter:e,...t}){return(e||function({type:e,date:t,locale:a,format:r,labelSeparator:n}){let i=e=>l(e).locale(a).format(r);if("default"===e)return null===t?"":i(t);if("multiple"===e)return t.map(i).join(", ");if("range"===e&&Array.isArray(t)){if(t[0]&&t[1])return`${i(t[0])} ${n} ${i(t[1])}`;if(t[0])return`${i(t[0])} ${n} `}return""})(t)}({type:e,date:h,locale:f.getLocale(u),format:s,labelSeparator:f.getLabelSeparator(p),formatter:m}),v=t=>{d&&("default"===e&&g.close(),"range"===e&&t[0]&&t[1]&&g.close()),c&&"multiple"===e?b([...t].sort((e,t)=>l(e).isAfter(l(t))?1:-1)):b(t)},S="range"===e?!!h[0]:"multiple"===e?h.length>0:null!==h;return{_value:h,setValue:v,onClear:()=>v("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:S,formattedValue:k,dropdownOpened:y,dropdownHandlers:g}}},87704:(e,t,a)=>{a.d(t,{k:()=>o});var l=a(23464),r=a(14041),n=a(47117);function i(e,t){let a=[...t].sort((e,t)=>l(e).isAfter(l(t))?1:-1);return l(a[0]).startOf("day").subtract(1,"ms").isBefore(e)&&l(a[1]).endOf("day").add(1,"ms").isAfter(e)}function o({type:e,level:t,value:a,defaultValue:o,onChange:u,allowSingleDateInRange:s,allowDeselect:d,onMouseLeave:c}){let[p,m]=(0,n.w)({type:e,value:a,defaultValue:o,onChange:u}),[f,y]=(0,r.useState)("range"===e&&p[0]&&!p[1]?p[0]:null),[g,h]=(0,r.useState)(null),b=e=>f&&g?i(e,[g,f]):!!p[0]&&!!p[1]&&i(e,p),k="range"===e?e=>{c?.(e),h(null)}:c,v=e=>!!p[0]&&!!l(e).isSame(p[0],t)&&!(g&&l(g).isBefore(p[0])),S=e=>p[1]?l(e).isSame(p[1],t):!!p[0]&&!!g&&l(g).isBefore(p[0])&&l(e).isSame(p[0],t),P="range"===e&&f?h:()=>{};return(0,r.useEffect)(()=>{if("range"===e){if(p[0]&&!p[1])y(p[0]);else{let e=null==p[0]&&null==p[1],t=null!=p[0]&&null!=p[1];(e||t)&&(y(null),h(null))}}},[p]),{onDateChange:a=>{if("range"===e){if(f&&!p[1]){if(l(a).isSame(f,t)&&!s){y(null),h(null),m([null,null]);return}let e=[a,f];e.sort((e,t)=>l(e).isAfter(l(t))?1:-1),m(e),h(null),y(null);return}if(p[0]&&!p[1]&&l(a).isSame(p[0],t)&&!s){y(null),h(null),m([null,null]);return}m([a,null]),h(null),y(a);return}if("multiple"===e){p.some(e=>l(e).isSame(a,t))?m(p.filter(e=>!l(e).isSame(a,t))):m([...p,a]);return}p&&d&&l(a).isSame(p,t)?m(null):m(a)},onRootMouseLeave:k,onHoveredDateChange:P,getControlProps:a=>{if("range"===e)return{selected:p.some(e=>e&&l(e).isSame(a,t)),inRange:b(a),firstInRange:v(a),lastInRange:S(a),"data-autofocus":!!p[0]&&l(p[0]).isSame(a,t)||void 0};if("multiple"===e)return{selected:p.some(e=>e&&l(e).isSame(a,t)),"data-autofocus":!!p[0]&&l(p[0]).isSame(a,t)||void 0};let r=l(p).isSame(a,t);return{selected:r,"data-autofocus":r||void 0}},_value:p,setValue:m}}},54872:(e,t,a)=>{a.d(t,{U:()=>n});var l=a(23464),r=a(12360);function n({minDate:e,maxDate:t}){let a=l();return e||t?e&&l(a).isBefore(e)?(0,r.H)(e):t&&l(a).isAfter(t)?(0,r.H)(t):(0,r.H)(a):(0,r.H)(a)}}}]);