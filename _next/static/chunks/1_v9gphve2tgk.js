(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},604363,(e,t,a)=>{e.e,t.exports=function(e,t,a){var r=function(e){return e.add(4-e.isoWeekday(),"day")},n=t.prototype;n.isoWeekYear=function(){return r(this).year()},n.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,n,s,l=r(this),i=(t=this.isoWeekYear(),s=4-(n=(this.$u?a.utc:a)().year(t).startOf("year")).isoWeekday(),n.isoWeekday()>4&&(s+=7),n.add(s,"day"));return l.diff(i,"week")+1},n.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var s=n.startOf;n.startOf=function(e,t){var a=this.$utils(),r=!!a.u(t)||t;return"isoweek"===a.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(e,t)}}},462138,e=>{"use strict";var t=e.i(779177),a=e.i(391398);function r({style:e,size:n=16,...s}){return(0,a.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(n),height:(0,t.rem)(n),display:"block"},...s,children:(0,a.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}r.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,r])},494834,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",r="hour",n="week",s="month",l="quarter",i="year",o="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,a){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(a)+e},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var p="$isDayjsObject",y=function(e){return e instanceof v||!(!e||!e[p])},Y=function e(t,a,r){var n;if(!t)return h;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(n=s),a&&(m[s]=a,n=s);var l=t.split("-");if(!n&&l.length>1)return e(l[0])}else{var i=t.name;m[i]=t,n=i}return!r&&n&&(h=n),n||!r&&h},g=function(e,t){if(y(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new v(a)},D={s:f,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(a/60),2,"0")+":"+f(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var r=12*(a.year()-t.year())+(a.month()-t.month()),n=t.clone().add(r,s),l=a-n<0,i=t.clone().add(r+(l?-1:1),s);return+(-(r+(a-n)/(l?n-i:i-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return({M:s,y:i,w:n,d:"day",D:o,h:r,m:a,s:t,ms:e,Q:l})[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};D.l=Y,D.i=y,D.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function f(e){this.$L=Y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var n=r[2]-1||0,s=(r[7]||"0").substring(0,3);return a?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return D},h.isValid=function(){return this.$d.toString()!==u},h.isSame=function(e,t){var a=g(e);return this.startOf(t)<=a&&a<=this.endOf(t)},h.isAfter=function(e,t){return g(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<g(e)},h.$g=function(e,t,a){return D.u(e)?this[t]:this.set(a,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,l){var u=this,d=!!D.u(l)||l,c=D.p(e),f=function(e,t){var a=D.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?a:a.endOf("day")},h=function(e,t){return D.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},m=this.$W,p=this.$M,y=this.$D,Y="set"+(this.$u?"UTC":"");switch(c){case i:return d?f(1,0):f(31,11);case s:return d?f(1,p):f(0,p+1);case n:var g=this.$locale().weekStart||0,v=(m<g?m+7:m)-g;return f(d?y-v:y+(6-v),p);case"day":case o:return h(Y+"Hours",0);case r:return h(Y+"Minutes",1);case a:return h(Y+"Seconds",2);case t:return h(Y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(n,l){var u,d=D.p(n),c="set"+(this.$u?"UTC":""),f=((u={}).day=c+"Date",u[o]=c+"Date",u[s]=c+"Month",u[i]=c+"FullYear",u[r]=c+"Hours",u[a]=c+"Minutes",u[t]=c+"Seconds",u[e]=c+"Milliseconds",u)[d],h="day"===d?this.$D+(l-this.$W):l;if(d===s||d===i){var m=this.clone().set(o,1);m.$d[f](h),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[D.p(e)]()},h.add=function(e,l){var o,u=this;e=Number(e);var d=D.p(l),c=function(t){var a=g(u);return D.w(a.date(a.date()+Math.round(t*e)),u)};if(d===s)return this.set(s,this.$M+e);if(d===i)return this.set(i,this.$y+e);if("day"===d)return c(1);if(d===n)return c(7);var f=((o={})[a]=6e4,o[r]=36e5,o[t]=1e3,o)[d]||1,h=this.$d.getTime()+e*f;return D.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||u;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=D.z(this),s=this.$H,l=this.$m,i=this.$M,o=a.weekdays,d=a.months,f=a.meridiem,h=function(e,a,n,s){return e&&(e[a]||e(t,r))||n[a].slice(0,s)},m=function(e){return D.s(s%12||12,e,"0")},p=f||function(e,t,a){var r=e<12?"AM":"PM";return a?r.toLowerCase():r};return r.replace(c,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return i+1;case"MM":return D.s(i+1,2,"0");case"MMM":return h(a.monthsShort,i,d,3);case"MMMM":return h(d,i);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(a.weekdaysMin,t.$W,o,2);case"ddd":return h(a.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return D.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(s,l,!0);case"A":return p(s,l,!1);case"m":return String(l);case"mm":return D.s(l,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,o,u){var d,c=this,f=D.p(o),h=g(e),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,y=function(){return D.m(c,h)};switch(f){case i:d=y()/12;break;case s:d=y();break;case l:d=y()/3;break;case n:d=(p-m)/6048e5;break;case"day":d=(p-m)/864e5;break;case r:d=p/36e5;break;case a:d=p/6e4;break;case t:d=p/1e3;break;default:d=p}return u?d:D.a(d)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),r=Y(e,t,!0);return r&&(a.$L=r),a},h.clone=function(){return D.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),x=v.prototype;return g.prototype=x,[["$ms",e],["$s",t],["$m",a],["$H",r],["$W","day"],["$M",s],["$y",i],["$D",o]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),g.extend=function(e,t){return e.$i||(e(t,v,g),e.$i=!0),g},g.locale=Y,g.isDayjs=y,g.unix=function(e){return g(1e3*e)},g.en=m[h],g.Ls=m,g.p={},g}()},205693,135140,e=>{"use strict";var t=e.i(191788),a=e.i(391398);let r={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},n=(0,t.createContext)(r);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,a.jsx)(n,{value:{...r,...e},children:t})},"DatesProviderContext",0,n],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(n),a=(0,t.useCallback)(t=>t||e.locale,[e.locale]),r=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),s=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),l=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:a,getFirstDayOfWeek:r,getWeekendDays:s,getLabelSeparator:l}}],205693)},110198,e=>{"use strict";var t=e.i(494834);e.s(["toDateString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD")},"toDateTimeString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD HH:mm:ss")}])},831474,e=>{"use strict";e.s(["pickCalendarProps",0,function(e){let{maxLevel:t,minLevel:a,defaultLevel:r,level:n,onLevelChange:s,nextIcon:l,previousIcon:i,date:o,defaultDate:u,onDateChange:d,numberOfColumns:c,columnsToScroll:f,ariaLabels:h,nextLabel:m,previousLabel:p,onYearSelect:y,onMonthSelect:Y,onYearMouseEnter:g,onMonthMouseEnter:D,onNextMonth:v,onPreviousMonth:x,onNextYear:j,onPreviousYear:b,onNextDecade:M,onPreviousDecade:S,withCellSpacing:k,highlightToday:$,__updateDateOnYearSelect:w,__updateDateOnMonthSelect:C,__setDateRef:P,__setLevelRef:O,withWeekNumbers:_,headerControlsOrder:L,firstDayOfWeek:V,weekdayFormat:F,weekendDays:W,getDayProps:A,excludeDate:N,renderDay:R,hideOutsideDates:T,hideWeekdays:I,getDayAriaLabel:U,monthLabelFormat:z,monthsListFormat:H,getMonthControlProps:B,yearLabelFormat:E,yearsListFormat:X,getYearControlProps:Z,decadeLabelFormat:J,allowSingleDateInRange:K,allowDeselect:q,minDate:Q,maxDate:G,locale:ee,...et}=e;return{calendarProps:{maxLevel:t,minLevel:a,defaultLevel:r,level:n,onLevelChange:s,nextIcon:l,previousIcon:i,date:o,defaultDate:u,onDateChange:d,numberOfColumns:c,columnsToScroll:f,ariaLabels:h,nextLabel:m,previousLabel:p,onYearSelect:y,onMonthSelect:Y,onYearMouseEnter:g,onMonthMouseEnter:D,onNextMonth:v,onPreviousMonth:x,onNextYear:j,onPreviousYear:b,onNextDecade:M,onPreviousDecade:S,withCellSpacing:k,highlightToday:$,__updateDateOnYearSelect:w,__updateDateOnMonthSelect:C,__setDateRef:P,withWeekNumbers:_,headerControlsOrder:L,firstDayOfWeek:V,weekdayFormat:F,weekendDays:W,getDayProps:A,excludeDate:N,renderDay:R,hideOutsideDates:T,hideWeekdays:I,getDayAriaLabel:U,monthLabelFormat:z,monthsListFormat:H,getMonthControlProps:B,yearLabelFormat:E,yearsListFormat:X,getYearControlProps:Z,decadeLabelFormat:J,allowSingleDateInRange:K,allowDeselect:q,minDate:Q,maxDate:G,locale:ee},others:et}}])},337976,e=>{"use strict";var t=e.i(422696),a=e.i(494834);function r(e,t){let r=[...t].sort((e,t)=>(0,a.default)(e).isAfter((0,a.default)(t))?1:-1);return(0,a.default)(r[0]).startOf("day").subtract(1,"ms").isBefore(e)&&(0,a.default)(r[1]).endOf("day").add(1,"ms").isAfter(e)}var n=e.i(191788);e.s(["useDatesState",0,function({type:e,level:s,value:l,defaultValue:i,onChange:o,allowSingleDateInRange:u,allowDeselect:d,onMouseLeave:c}){let[f,h]=(0,t.useUncontrolledDates)({type:e,value:l,defaultValue:i,onChange:o}),[m,p]=(0,n.useState)("range"===e&&f[0]&&!f[1]?f[0]:null),[y,Y]=(0,n.useState)(null),g="range"===e?e=>{c?.(e),Y(null)}:c,D="range"===e&&m?Y:()=>{};return(0,n.useEffect)(()=>{if("range"===e)if(f[0]&&!f[1])p(f[0]);else{let e=null==f[0]&&null==f[1],t=null!=f[0]&&null!=f[1];(e||t)&&(p(null),Y(null))}},[f]),{onDateChange:t=>{if("range"===e){if(m&&!f[1]){if((0,a.default)(t).isSame(m,s)&&!u){p(null),Y(null),h([null,null]);return}let e=[t,m];e.sort((e,t)=>(0,a.default)(e).isAfter((0,a.default)(t))?1:-1),h(e),Y(null),p(null);return}if(f[0]&&!f[1]&&(0,a.default)(t).isSame(f[0],s)&&!u){p(null),Y(null),h([null,null]);return}h([t,null]),Y(null),p(t);return}"multiple"===e?f.some(e=>(0,a.default)(e).isSame(t,s))?h(f.filter(e=>!(0,a.default)(e).isSame(t,s))):h([...f,t]):f&&d&&(0,a.default)(t).isSame(f,s)?h(null):h(t)},onRootMouseLeave:g,onHoveredDateChange:D,getControlProps:t=>{if("range"===e)return{selected:f.some(e=>e&&(0,a.default)(e).isSame(t,s)),inRange:m&&y?r(t,[y,m]):!!f[0]&&!!f[1]&&r(t,f),firstInRange:!!f[0]&&!!(0,a.default)(t).isSame(f[0],s)&&!(y&&(0,a.default)(y).isBefore(f[0])),lastInRange:f[1]?(0,a.default)(t).isSame(f[1],s):!!f[0]&&!!y&&(0,a.default)(y).isBefore(f[0])&&(0,a.default)(t).isSame(f[0],s),"data-autofocus":!!f[0]&&(0,a.default)(f[0]).isSame(t,s)||void 0};if("multiple"===e)return{selected:f.some(e=>e&&(0,a.default)(e).isSame(t,s)),"data-autofocus":!!f[0]&&(0,a.default)(f[0]).isSame(t,s)||void 0};let n=(0,a.default)(f).isSame(t,s);return{selected:n,"data-autofocus":n||void 0}},_value:f,setValue:h}}],337976)},111018,e=>{"use strict";var t=e.i(191788),a=e.i(391398),r=e.i(883364),n=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let s,l,i,o,u,d,c;return{usage:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${s} value={value} onChange={setValue} />;
}
`),component:()=>{let[r,n]=(0,t.useState)(null);return(0,a.jsx)(e,{value:r,onChange:n})}},range:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${l} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[r,n]=(0,t.useState)([null,null]);return(0,a.jsx)(e,{type:"range",value:r,onChange:n})}},multiple:{type:"code",centered:!0,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${i} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[r,n]=(0,t.useState)([]);return(0,a.jsx)(e,{type:"multiple",value:r,onChange:n})}},deselect:{type:"code",centered:!0,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${o} allowDeselect value={value} onChange={setValue} />;
}
`),component:()=>{let[r,n]=(0,t.useState)(null);return(0,a.jsx)(e,{allowDeselect:!0,value:r,onChange:n})}},singleRange:{type:"code",centered:!0,code:(u=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${u} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${u} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`),component:()=>{let[r,n]=(0,t.useState)([null,null]);return(0,a.jsx)(e,{type:"range",allowSingleDateInRange:!0,value:r,onChange:n})}},numberOfColumns:{type:"code",centered:!0,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${d} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`),component:()=>{let[n,s]=(0,t.useState)([null,null]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{type:"range",numberOfColumns:2,value:n,onChange:s,visibleFrom:"sm"}),(0,a.jsx)(r.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${c} } from '@mantine/dates';

function Demo() {
  return <${c} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,a.jsx)(e,{defaultValue:(0,n.default)().format("YYYY-MM-DD"),...t})}}}],111018)},986451,e=>{"use strict";var t=e.i(337976),a=e.i(164036),r=e.i(831474),n={yearPickerRoot:"m_d01e596f",presetsList:"m_52a6b4b0",presetButton:"m_b0d93233"},s=e.i(191788),l=e.i(391398),i=e.i(232471),o=e.i(284629),u=e.i(481178),d=e.i(275519),c=e.i(433512),f=e.i(44091),h=e.i(62904),m=e.i(391466);let p=(0,u.createVarsResolver)((e,{size:t})=>({yearPickerRoot:{"--preset-font-size":(0,c.getFontSize)(t)}})),y={type:"default"},Y=(0,d.factory)(e=>{let u=(0,f.useProps)("YearPicker",y,e),{classNames:d,styles:c,vars:Y,type:g,defaultValue:D,value:v,onChange:x,__staticSelector:j,getYearControlProps:b,allowSingleDateInRange:M,allowDeselect:S,onMouseLeave:k,onYearSelect:$,__updateDateOnYearSelect:w,__onPresetSelect:C,__stopPropagation:P,presets:O,className:_,style:L,unstyled:V,size:F,attributes:W,...A}=u,{calendarProps:N,others:R}=(0,r.pickCalendarProps)(A),T=(0,s.useRef)(null),I=(0,s.useRef)(null),U=(0,m.useStyles)({name:j||"YearPicker",classes:n,props:u,className:_,style:L,classNames:d,styles:c,unstyled:V,attributes:W,rootSelector:O?"yearPickerRoot":void 0,varsResolver:p,vars:Y}),{onDateChange:z,onRootMouseLeave:H,onHoveredDateChange:B,getControlProps:E,setValue:X}=(0,t.useDatesState)({type:g,level:"year",allowDeselect:S,allowSingleDateInRange:M,value:v,defaultValue:D,onChange:x,onMouseLeave:k}),{resolvedClassNames:Z,resolvedStyles:J}=(0,h.useResolvedStylesApi)({classNames:d,styles:c,props:u}),K=(0,l.jsx)(a.Calendar,{classNames:Z,styles:J,size:F,...N,...!O?R:{},minLevel:"decade",__updateDateOnYearSelect:w??!1,__staticSelector:j||"YearPicker",onMouseLeave:H,onYearMouseEnter:(e,t)=>B(t),onYearSelect:e=>{z(e),$?.(e)},getYearControlProps:e=>({...E(e),...b?.(e)}),__setDateRef:T,__setLevelRef:I,__stopPropagation:P,attributes:W,...!O?{className:_,style:L}:{}});if(!O)return K;let q=O.map((e,t)=>(0,l.jsx)(o.UnstyledButton,{...U("presetButton"),onClick:()=>{var t;let a;void 0!==(a=Array.isArray(t=e.value)?t[0]:t)&&(T.current?.(a),I.current?.("decade"),C?C(t):X(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":P||void 0,children:e.label},t));return(0,l.jsxs)(i.Box,{...U("yearPickerRoot"),size:F,...R,children:[(0,l.jsx)("div",{...U("presetsList"),children:q}),K]})});Y.classes={...a.Calendar.classes,...n},Y.varsResolver=p,Y.displayName="@mantine/dates/YearPicker",e.s(["YearPicker",0,Y],986451)},712410,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(648863),n=e.i(111018),s=e.i(191788),l=e.i(986451);let i={type:"code",centered:!0,component:function(){let[e,a]=(0,s.useState)(null);return(0,t.jsx)(l.YearPicker,{value:e,onChange:a,minDate:"2021-02-01",maxDate:"2028-02-01"})},code:`
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
`};var o=e.i(494834);let u=e=>(0,o.default)(e).year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:(0,o.default)(e).year()===new Date().getFullYear()+1?{disabled:!0}:{},d={type:"code",centered:!0,component:function(){let[e,a]=(0,s.useState)(null);return(0,t.jsx)(l.YearPicker,{value:e,onChange:a,getYearControlProps:u})},code:`
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
`},c={type:"code",centered:!0,component:function(){let[e,a]=(0,s.useState)(null);return(0,t.jsx)(l.YearPicker,{yearsListFormat:"YY",value:e,onChange:a})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`},f={type:"code",centered:!0,component:function(){let[e,a]=(0,s.useState)(null);return(0,t.jsx)(l.YearPicker,{decadeLabelFormat:"YY",value:e,onChange:a})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`},h={type:"code",centered:!0,component:function(){let[e,a]=(0,s.useState)(null);return(0,t.jsx)(l.YearPicker,{defaultDate:"2040-02-01",value:e,onChange:a})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker defaultDate="2040-02-01" value={value} onChange={setValue} />;
}
`},m={type:"code",centered:!0,component:function(){let[e,a]=(0,s.useState)([null,null]),[r,n]=(0,s.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,t.jsx)(l.YearPicker,{date:r,onDateChange:n,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&n(e=>(0,o.default)(e).add(20,"year").format("YYYY-MM-DD")),a(e)}})},code:`
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
`},p={type:"code",centered:!0,maxWidth:600,component:function(){let[e,a]=(0,s.useState)(null);return(0,t.jsx)(l.YearPicker,{fullWidth:!0,value:e,onChange:a})},code:`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker fullWidth value={value} onChange={setValue} />;
}
`},y={type:"code",centered:!0,component:function(){return(0,t.jsx)(l.YearPicker,{presets:[{value:(0,o.default)().startOf("year").format("YYYY-MM-DD"),label:"This year"},{value:(0,o.default)().add(1,"year").startOf("year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,o.default)().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),label:"Last year"},{value:(0,o.default)().add(5,"year").startOf("year").format("YYYY-MM-DD"),label:"In 5 years"},{value:(0,o.default)().subtract(5,"year").startOf("year").format("YYYY-MM-DD"),label:"5 years ago"}]})},code:`
import dayjs from 'dayjs';
import { YearPicker } from '@mantine/dates';

function Demo() {
  return (
    <YearPicker
      presets={[
        { value: dayjs().startOf('year').format('YYYY-MM-DD'), label: 'This year' },
        { value: dayjs().add(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Last year' },
        { value: dayjs().add(5, 'year').startOf('year').format('YYYY-MM-DD'), label: 'In 5 years' },
        { value: dayjs().subtract(5, 'year').startOf('year').format('YYYY-MM-DD'), label: '5 years ago' },
      ]}
    />
  );
}
`},Y={type:"code",centered:!0,component:function(){let e=(0,o.default)();return(0,t.jsx)(l.YearPicker,{type:"range",presets:[{value:[e.subtract(2,"year").startOf("year").format("YYYY-MM-DD"),e.startOf("year").format("YYYY-MM-DD")],label:"Last 2 years"},{value:[e.subtract(5,"year").startOf("year").format("YYYY-MM-DD"),e.startOf("year").format("YYYY-MM-DD")],label:"Last 5 years"},{value:[e.startOf("year").format("YYYY-MM-DD"),e.add(5,"year").startOf("year").format("YYYY-MM-DD")],label:"Next 5 years"},{value:[e.subtract(10,"year").startOf("year").format("YYYY-MM-DD"),e.startOf("year").format("YYYY-MM-DD")],label:"Last decade"}]})},code:`
import dayjs from 'dayjs';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <YearPicker
      type="range"
      presets={[
        {
          value: [today.subtract(2, 'year').startOf('year').format('YYYY-MM-DD'), today.startOf('year').format('YYYY-MM-DD')],
          label: 'Last 2 years',
        },
        {
          value: [today.subtract(5, 'year').startOf('year').format('YYYY-MM-DD'), today.startOf('year').format('YYYY-MM-DD')],
          label: 'Last 5 years',
        },
        {
          value: [today.startOf('year').format('YYYY-MM-DD'), today.add(5, 'year').startOf('year').format('YYYY-MM-DD')],
          label: 'Next 5 years',
        },
        {
          value: [
            today.subtract(10, 'year').startOf('year').format('YYYY-MM-DD'),
            today.startOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last decade',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1};var g=(0,r.__exportAll)({controlProps:()=>d,controlledDate:()=>m,decadeLabelFormat:()=>f,defaultDate:()=>h,deselect:()=>x,fullWidth:()=>p,minMax:()=>i,multiple:()=>v,numberOfColumns:()=>M,presets:()=>y,presetsRange:()=>Y,range:()=>j,singleRange:()=>b,sizeConfigurator:()=>S,usage:()=>D,yearsListFormat:()=>c});let{usage:D,multiple:v,deselect:x,range:j,singleRange:b,numberOfColumns:M,sizeConfigurator:S}=(0,n.getSharedPickerDemos)(l.YearPicker);e.i(603441);var k=e.i(62558);e.i(457450);var $=e.i(418026);let w=(0,k.Layout)($.MDX_DATA.YearPicker);function C(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:n,KeyboardEventsTable:s}=r;return n||P("Demo",!0),s||P("KeyboardEventsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:g.usage}),"\n",(0,t.jsx)(r.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"allowDeselect"})," to allow users to deselect the currently selected date by clicking on it.\n",(0,t.jsx)(r.code,{children:"allowDeselect"})," is disregarded when the ",(0,t.jsx)(r.code,{children:"type"})," prop is ",(0,t.jsx)(r.code,{children:"range"})," or ",(0,t.jsx)(r.code,{children:"multiple"}),". When a date is\ndeselected, ",(0,t.jsx)(r.code,{children:"onChange"})," is called with ",(0,t.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n,{data:g.deselect}),"\n",(0,t.jsx)(r.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:'type="multiple"'})," to allow users to pick multiple dates:"]}),"\n",(0,t.jsx)(n,{data:g.multiple}),"\n",(0,t.jsx)(r.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:'type="range"'})," to allow users to pick a date range:"]}),"\n",(0,t.jsx)(n,{data:g.range}),"\n",(0,t.jsx)(r.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,t.jsxs)(r.p,{children:["By default, it is not allowed to select a single date as a range – when the user clicks the same date a second time, it is deselected.\nTo change this behavior, set the ",(0,t.jsx)(r.code,{children:"allowSingleDateInRange"})," prop. ",(0,t.jsx)(r.code,{children:"allowSingleDateInRange"})," is ignored when the\n",(0,t.jsx)(r.code,{children:"type"})," prop is not ",(0,t.jsx)(r.code,{children:"range"}),"."]}),"\n",(0,t.jsx)(n,{data:g.singleRange}),"\n",(0,t.jsx)(r.h2,{id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"presets"})," prop to add custom year presets. Presets are displayed next to the calendar:"]}),"\n",(0,t.jsx)(n,{data:g.presets}),"\n",(0,t.jsxs)(r.p,{children:["To use ",(0,t.jsx)(r.code,{children:"presets"})," with ",(0,t.jsx)(r.code,{children:'type="range"'}),", define the value as a tuple of two dates:"]}),"\n",(0,t.jsx)(n,{data:g.presetsRange}),"\n",(0,t.jsx)(r.h2,{id:"default-date",children:"Default date"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"defaultDate"})," prop to set the date value that will be used to determine which decade should be displayed initially.\nFor example, to display the ",(0,t.jsx)(r.code,{children:"2040 – 2049"})," decade, set ",(0,t.jsx)(r.code,{children:"defaultDate={new Date(2040, 1)}"}),". If the value is not specified,\nthen ",(0,t.jsx)(r.code,{children:"defaultDate"})," will use ",(0,t.jsx)(r.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in the provided date object, only the year is used –\nyou can specify any date value."]}),"\n",(0,t.jsxs)(r.p,{children:["Note that if you set the ",(0,t.jsx)(r.code,{children:"date"})," prop, then the ",(0,t.jsx)(r.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,t.jsx)(n,{data:g.defaultDate}),"\n",(0,t.jsx)(r.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"date"})," and ",(0,t.jsx)(r.code,{children:"onDateChange"})," props to make the currently displayed decade controlled.\nBy doing so, you can customize the date picking experience. For example, when the user selects the first date in a range,\nyou can add 20 years to the current date value:"]}),"\n",(0,t.jsx)(n,{data:g.controlledDate}),"\n",(0,t.jsx)(r.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"minDate"})," and ",(0,t.jsx)(r.code,{children:"maxDate"})," props to define minimum and maximum dates. If the previous/next page is not available,\nthen the corresponding control will be disabled."]}),"\n",(0,t.jsx)(n,{data:g.minMax}),"\n",(0,t.jsx)(r.h2,{id:"add-props-to-year-control",children:"Add props to year control"}),"\n",(0,t.jsxs)(r.p,{children:["You can add props to year controls with the ",(0,t.jsx)(r.code,{children:"getYearControlProps"})," function. It accepts a year date as a single argument,\nand props returned from the function will be added to the year control. For example, it can be used to disable a specific\ncontrol or add styles:"]}),"\n",(0,t.jsx)(n,{data:g.controlProps}),"\n",(0,t.jsx)(r.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"numberOfColumns"})," prop to define the number of pickers that will be rendered side by side:"]}),"\n",(0,t.jsx)(n,{data:g.numberOfColumns}),"\n",(0,t.jsx)(r.h2,{id:"full-width",children:"Full width"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"fullWidth"})," prop to make the year picker stretch to fill 100% of its parent container width:"]}),"\n",(0,t.jsx)(n,{data:g.fullWidth}),"\n",(0,t.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,t.jsx)(n,{data:g.sizeConfigurator}),"\n",(0,t.jsx)(r.h2,{id:"change-year-controls-format",children:"Change year controls format"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"yearsListFormat"})," to change the ",(0,t.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the year control:"]}),"\n",(0,t.jsx)(n,{data:g.yearsListFormat}),"\n",(0,t.jsx)(r.h2,{id:"change-decade-label-format",children:"Change decade label format"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"decadeLabelFormat"})," to change the ",(0,t.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the decade label:"]}),"\n",(0,t.jsx)(n,{data:g.decadeLabelFormat}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(r.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"ariaLabels"})," prop to specify ",(0,t.jsx)(r.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"year-control-aria-label",children:"Year control aria-label"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"getYearControlProps"})," to customize the ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(r.p,{children:"Note that the following events will only trigger if focus is on a year control."}),"\n",(0,t.jsx)(s,{data:[{key:"ArrowRight",description:"Focuses next non-disabled year"},{key:"ArrowLeft",description:"Focuses previous non-disabled year"},{key:"ArrowDown",description:"Focuses next non-disabled year in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled year in the same column"}]})]})}function P(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(w,{...e,children:(0,t.jsx)(C,{...e})})}],712410)},847984,(e,t,a)=>{let r="/dates/year-picker";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(712410)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);