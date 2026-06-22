(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var a in e)t(r,a,{get:e[a],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},604363,(e,t,n)=>{e.e,t.exports=function(e,t,n){var r=function(e){return e.add(4-e.isoWeekday(),"day")},a=t.prototype;a.isoWeekYear=function(){return r(this).year()},a.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,a,o,s=r(this),i=(t=this.isoWeekYear(),o=4-(a=(this.$u?n.utc:n)().year(t).startOf("year")).isoWeekday(),a.isoWeekday()>4&&(o+=7),a.add(o,"day"));return s.diff(i,"week")+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var o=a.startOf;a.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return"isoweek"===n.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):o.bind(this)(e,t)}}},462138,e=>{"use strict";var t=e.i(779177),n=e.i(391398);function r({style:e,size:a=16,...o}){return(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(a),height:(0,t.rem)(a),display:"block"},...o,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}r.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,r])},494834,(e,t,n)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",a="week",o="month",s="quarter",i="year",l="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},m="en",f={};f[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};var p="$isDayjsObject",y=function(e){return e instanceof Y||!(!e||!e[p])},M=function e(t,n,r){var a;if(!t)return m;if("string"==typeof t){var o=t.toLowerCase();f[o]&&(a=o),n&&(f[o]=n,a=o);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var i=t.name;f[i]=t,a=i}return!r&&a&&(m=a),a||!r&&m},g=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new Y(n)},D={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,o),s=n-a<0,i=t.clone().add(r+(s?-1:1),o);return+(-(r+(n-a)/(s?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return({M:o,y:i,w:a,d:"day",D:l,h:r,m:n,s:t,ms:e,Q:s})[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};D.l=M,D.i=y,D.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var Y=function(){function h(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var a=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return this.$d.toString()!==u},m.isSame=function(e,t){var n=g(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return g(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<g(e)},m.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,s){var u=this,d=!!D.u(s)||s,c=D.p(e),h=function(e,t){var n=D.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?n:n.endOf("day")},m=function(e,t){return D.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},f=this.$W,p=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case i:return d?h(1,0):h(31,11);case o:return d?h(1,p):h(0,p+1);case a:var g=this.$locale().weekStart||0,Y=(f<g?f+7:f)-g;return h(d?y-Y:y+(6-Y),p);case"day":case l:return m(M+"Hours",0);case r:return m(M+"Minutes",1);case n:return m(M+"Seconds",2);case t:return m(M+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(a,s){var u,d=D.p(a),c="set"+(this.$u?"UTC":""),h=((u={}).day=c+"Date",u[l]=c+"Date",u[o]=c+"Month",u[i]=c+"FullYear",u[r]=c+"Hours",u[n]=c+"Minutes",u[t]=c+"Seconds",u[e]=c+"Milliseconds",u)[d],m="day"===d?this.$D+(s-this.$W):s;if(d===o||d===i){var f=this.clone().set(l,1);f.$d[h](m),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[D.p(e)]()},m.add=function(e,s){var l,u=this;e=Number(e);var d=D.p(s),c=function(t){var n=g(u);return D.w(n.date(n.date()+Math.round(t*e)),u)};if(d===o)return this.set(o,this.$M+e);if(d===i)return this.set(i,this.$y+e);if("day"===d)return c(1);if(d===a)return c(7);var h=((l={})[n]=6e4,l[r]=36e5,l[t]=1e3,l)[d]||1,m=this.$d.getTime()+e*h;return D.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=D.z(this),o=this.$H,s=this.$m,i=this.$M,l=n.weekdays,d=n.months,h=n.meridiem,m=function(e,n,a,o){return e&&(e[n]||e(t,r))||a[n].slice(0,o)},f=function(e){return D.s(o%12||12,e,"0")},p=h||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(c,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return i+1;case"MM":return D.s(i+1,2,"0");case"MMM":return m(n.monthsShort,i,d,3);case"MMMM":return m(d,i);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(n.weekdaysMin,t.$W,l,2);case"ddd":return m(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,s,!0);case"A":return p(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,l,u){var d,c=this,h=D.p(l),m=g(e),f=(m.utcOffset()-this.utcOffset())*6e4,p=this-m,y=function(){return D.m(c,m)};switch(h){case i:d=y()/12;break;case o:d=y();break;case s:d=y()/3;break;case a:d=(p-f)/6048e5;break;case"day":d=(p-f)/864e5;break;case r:d=p/36e5;break;case n:d=p/6e4;break;case t:d=p/1e3;break;default:d=p}return u?d:D.a(d)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=M(e,t,!0);return r&&(n.$L=r),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),x=Y.prototype;return g.prototype=x,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",o],["$y",i],["$D",l]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),g.extend=function(e,t){return e.$i||(e(t,Y,g),e.$i=!0),g},g.locale=M,g.isDayjs=y,g.unix=function(e){return g(1e3*e)},g.en=f[m],g.Ls=f,g.p={},g}()},205693,135140,e=>{"use strict";var t=e.i(191788),n=e.i(391398);let r={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},a=(0,t.createContext)(r);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,n.jsx)(a,{value:{...r,...e},children:t})},"DatesProviderContext",0,a],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(a),n=(0,t.useCallback)(t=>t||e.locale,[e.locale]),r=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),o=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),s=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:n,getFirstDayOfWeek:r,getWeekendDays:o,getLabelSeparator:s}}],205693)},110198,e=>{"use strict";var t=e.i(494834);e.s(["toDateString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD")},"toDateTimeString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD HH:mm:ss")}])},831474,e=>{"use strict";e.s(["pickCalendarProps",0,function(e){let{maxLevel:t,minLevel:n,defaultLevel:r,level:a,onLevelChange:o,nextIcon:s,previousIcon:i,date:l,defaultDate:u,onDateChange:d,numberOfColumns:c,columnsToScroll:h,ariaLabels:m,nextLabel:f,previousLabel:p,onYearSelect:y,onMonthSelect:M,onYearMouseEnter:g,onMonthMouseEnter:D,onNextMonth:Y,onPreviousMonth:x,onNextYear:v,onPreviousYear:j,onNextDecade:b,onPreviousDecade:k,withCellSpacing:_,highlightToday:S,__updateDateOnYearSelect:P,__updateDateOnMonthSelect:$,__setDateRef:w,__setLevelRef:C,withWeekNumbers:O,headerControlsOrder:L,firstDayOfWeek:F,weekdayFormat:T,weekendDays:W,getDayProps:V,excludeDate:A,renderDay:N,hideOutsideDates:R,hideWeekdays:H,getDayAriaLabel:U,monthLabelFormat:z,monthsListFormat:I,getMonthControlProps:B,yearLabelFormat:E,yearsListFormat:X,getYearControlProps:Z,decadeLabelFormat:J,allowSingleDateInRange:K,allowDeselect:q,minDate:Q,maxDate:G,locale:ee,...et}=e;return{calendarProps:{maxLevel:t,minLevel:n,defaultLevel:r,level:a,onLevelChange:o,nextIcon:s,previousIcon:i,date:l,defaultDate:u,onDateChange:d,numberOfColumns:c,columnsToScroll:h,ariaLabels:m,nextLabel:f,previousLabel:p,onYearSelect:y,onMonthSelect:M,onYearMouseEnter:g,onMonthMouseEnter:D,onNextMonth:Y,onPreviousMonth:x,onNextYear:v,onPreviousYear:j,onNextDecade:b,onPreviousDecade:k,withCellSpacing:_,highlightToday:S,__updateDateOnYearSelect:P,__updateDateOnMonthSelect:$,__setDateRef:w,withWeekNumbers:O,headerControlsOrder:L,firstDayOfWeek:F,weekdayFormat:T,weekendDays:W,getDayProps:V,excludeDate:A,renderDay:N,hideOutsideDates:R,hideWeekdays:H,getDayAriaLabel:U,monthLabelFormat:z,monthsListFormat:I,getMonthControlProps:B,yearLabelFormat:E,yearsListFormat:X,getYearControlProps:Z,decadeLabelFormat:J,allowSingleDateInRange:K,allowDeselect:q,minDate:Q,maxDate:G,locale:ee},others:et}}])},337976,e=>{"use strict";var t=e.i(422696),n=e.i(494834);function r(e,t){let r=[...t].sort((e,t)=>(0,n.default)(e).isAfter((0,n.default)(t))?1:-1);return(0,n.default)(r[0]).startOf("day").subtract(1,"ms").isBefore(e)&&(0,n.default)(r[1]).endOf("day").add(1,"ms").isAfter(e)}var a=e.i(191788);e.s(["useDatesState",0,function({type:e,level:o,value:s,defaultValue:i,onChange:l,allowSingleDateInRange:u,allowDeselect:d,onMouseLeave:c}){let[h,m]=(0,t.useUncontrolledDates)({type:e,value:s,defaultValue:i,onChange:l}),[f,p]=(0,a.useState)("range"===e&&h[0]&&!h[1]?h[0]:null),[y,M]=(0,a.useState)(null),g="range"===e?e=>{c?.(e),M(null)}:c,D="range"===e&&f?M:()=>{};return(0,a.useEffect)(()=>{if("range"===e)if(h[0]&&!h[1])p(h[0]);else{let e=null==h[0]&&null==h[1],t=null!=h[0]&&null!=h[1];(e||t)&&(p(null),M(null))}},[h]),{onDateChange:t=>{if("range"===e){if(f&&!h[1]){if((0,n.default)(t).isSame(f,o)&&!u){p(null),M(null),m([null,null]);return}let e=[t,f];e.sort((e,t)=>(0,n.default)(e).isAfter((0,n.default)(t))?1:-1),m(e),M(null),p(null);return}if(h[0]&&!h[1]&&(0,n.default)(t).isSame(h[0],o)&&!u){p(null),M(null),m([null,null]);return}m([t,null]),M(null),p(t);return}"multiple"===e?h.some(e=>(0,n.default)(e).isSame(t,o))?m(h.filter(e=>!(0,n.default)(e).isSame(t,o))):m([...h,t]):h&&d&&(0,n.default)(t).isSame(h,o)?m(null):m(t)},onRootMouseLeave:g,onHoveredDateChange:D,getControlProps:t=>{if("range"===e)return{selected:h.some(e=>e&&(0,n.default)(e).isSame(t,o)),inRange:f&&y?r(t,[y,f]):!!h[0]&&!!h[1]&&r(t,h),firstInRange:!!h[0]&&!!(0,n.default)(t).isSame(h[0],o)&&!(y&&(0,n.default)(y).isBefore(h[0])),lastInRange:h[1]?(0,n.default)(t).isSame(h[1],o):!!h[0]&&!!y&&(0,n.default)(y).isBefore(h[0])&&(0,n.default)(t).isSame(h[0],o),"data-autofocus":!!h[0]&&(0,n.default)(h[0]).isSame(t,o)||void 0};if("multiple"===e)return{selected:h.some(e=>e&&(0,n.default)(e).isSame(t,o)),"data-autofocus":!!h[0]&&(0,n.default)(h[0]).isSame(t,o)||void 0};let a=(0,n.default)(h).isSame(t,o);return{selected:a,"data-autofocus":a||void 0}},_value:h,setValue:m}}],337976)},39167,(e,t,n)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),a="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(e,t,n){var r,a;return"m"===n?t?"минута":"минуту":e+" "+(r=+e,a=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[n].split("_"),r%10==1&&r%100!=11?a[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?a[1]:a[2])}var i=function(e,r){return o.test(r)?t[e.month()]:n[e.month()]};i.s=n,i.f=t;var l=function(e,t){return o.test(t)?r[e.month()]:a[e.month()]};l.s=a,l.f=r;var u={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:l,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(u,null,!0),u}(e.r(494834))},111018,e=>{"use strict";var t=e.i(191788),n=e.i(391398),r=e.i(883364),a=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let o,s,i,l,u,d,c;return{usage:{type:"code",centered:!0,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${o} value={value} onChange={setValue} />;
}
`),component:()=>{let[r,a]=(0,t.useState)(null);return(0,n.jsx)(e,{value:r,onChange:a})}},range:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${s} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[r,a]=(0,t.useState)([null,null]);return(0,n.jsx)(e,{type:"range",value:r,onChange:a})}},multiple:{type:"code",centered:!0,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${i} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[r,a]=(0,t.useState)([]);return(0,n.jsx)(e,{type:"multiple",value:r,onChange:a})}},deselect:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${l} allowDeselect value={value} onChange={setValue} />;
}
`),component:()=>{let[r,a]=(0,t.useState)(null);return(0,n.jsx)(e,{allowDeselect:!0,value:r,onChange:a})}},singleRange:{type:"code",centered:!0,code:(u=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${u} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${u} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`),component:()=>{let[r,a]=(0,t.useState)([null,null]);return(0,n.jsx)(e,{type:"range",allowSingleDateInRange:!0,value:r,onChange:a})}},numberOfColumns:{type:"code",centered:!0,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${d} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`),component:()=>{let[a,o]=(0,t.useState)([null,null]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e,{type:"range",numberOfColumns:2,value:a,onChange:o,visibleFrom:"sm"}),(0,n.jsx)(r.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${c} } from '@mantine/dates';

function Demo() {
  return <${c} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,n.jsx)(e,{defaultValue:(0,a.default)().format("YYYY-MM-DD"),...t})}}}],111018)},337904,e=>{"use strict";var t=e.i(337976),n=e.i(164036),r=e.i(831474),a={monthPickerRoot:"m_53c9e871",presetsList:"m_cccb8ff3",presetButton:"m_7b4fbf50"},o=e.i(191788),s=e.i(391398),i=e.i(232471),l=e.i(284629),u=e.i(481178),d=e.i(275519),c=e.i(433512),h=e.i(44091),m=e.i(62904),f=e.i(391466);let p=(0,u.createVarsResolver)((e,{size:t})=>({monthPickerRoot:{"--preset-font-size":(0,c.getFontSize)(t)}})),y={type:"default"},M=(0,d.factory)(e=>{let u=(0,h.useProps)("MonthPicker",y,e),{classNames:d,styles:c,vars:M,type:g,defaultValue:D,value:Y,onChange:x,__staticSelector:v,getMonthControlProps:j,allowSingleDateInRange:b,allowDeselect:k,onMouseLeave:_,onMonthSelect:S,__updateDateOnMonthSelect:P,__onPresetSelect:$,__stopPropagation:w,presets:C,className:O,style:L,unstyled:F,size:T,attributes:W,onLevelChange:V,...A}=u,{calendarProps:N,others:R}=(0,r.pickCalendarProps)(A),H=(0,o.useRef)(null),U=(0,o.useRef)(null),z=(0,f.useStyles)({name:v||"MonthPicker",classes:a,props:u,className:O,style:L,classNames:d,styles:c,unstyled:F,attributes:W,rootSelector:C?"monthPickerRoot":void 0,varsResolver:p,vars:M}),{onDateChange:I,onRootMouseLeave:B,onHoveredDateChange:E,getControlProps:X,setValue:Z}=(0,t.useDatesState)({type:g,level:"month",allowDeselect:k,allowSingleDateInRange:b,value:Y,defaultValue:D,onChange:x,onMouseLeave:_}),{resolvedClassNames:J,resolvedStyles:K}=(0,m.useResolvedStylesApi)({classNames:d,styles:c,props:u}),q=(0,s.jsx)(n.Calendar,{classNames:J,styles:K,size:T,...N,...!C?R:{},minLevel:"year",__updateDateOnMonthSelect:P??!1,__staticSelector:v||"MonthPicker",onMouseLeave:B,onMonthMouseEnter:(e,t)=>E(t),onMonthSelect:e=>{I(e),S?.(e)},getMonthControlProps:e=>({...X(e),...j?.(e)}),onLevelChange:V,__setDateRef:H,__setLevelRef:U,__stopPropagation:w,attributes:W,...!C?{className:O,style:L}:{}});if(!C)return q;let Q=C.map((e,t)=>(0,s.jsx)(l.UnstyledButton,{...z("presetButton"),onClick:()=>{var t;let n;void 0!==(n=Array.isArray(t=e.value)?t[0]:t)&&(H.current?.(n),U.current?.("year"),$?$(t):Z(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":w||void 0,children:e.label},t));return(0,s.jsxs)(i.Box,{...z("monthPickerRoot"),size:T,...R,children:[(0,s.jsx)("div",{...z("presetsList"),children:Q}),q]})});M.classes={...n.Calendar.classes,...a},M.varsResolver=p,M.displayName="@mantine/dates/MonthPicker",e.s(["MonthPicker",0,M],337904)},168318,e=>{"use strict";var t=e.i(648863),n=e.i(111018),r=e.i(191788),a=e.i(391398),o=e.i(337904),s=e.i(494834);let i={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)([null,null]),[n,i]=(0,r.useState)((0,s.default)().format("YYYY-MM-DD"));return(0,a.jsx)(o.MonthPicker,{date:n,onDateChange:i,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&i(e=>(0,s.default)(e).add(1,"year").format("YYYY-MM-DD")),t(e)}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const handleChange = (val: [string | null, string | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => dayjs(current).add(1, 'year').format('YYYY-MM-DD'));
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
`},l=e=>(0,s.default)(e).year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:(0,s.default)(e).year()===new Date().getFullYear()+1?{disabled:!0}:{},u=e=>1===(0,s.default)(e).month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===(0,s.default)(e).month()?{disabled:!0}:{},d={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,a.jsx)(o.MonthPicker,{value:e,onChange:t,getYearControlProps:l,getMonthControlProps:u})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthPicker, MonthPickerProps } from '@mantine/dates';

const getYearControlProps: MonthPickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: MonthPickerProps['getMonthControlProps'] = (date) => {
  if (dayjs(date).month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},c={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,a.jsx)(o.MonthPicker,{decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`},h={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,a.jsx)(o.MonthPicker,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <MonthPicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},m={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,a.jsx)(o.MonthPicker,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-01",maxDate:"2022-09-01"})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-01"
      maxDate="2022-09-01"
    />
  );
}
`},f={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.MonthPicker,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`},p={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.MonthPicker,{maxLevel:"year"})},code:`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`};e.i(39167);let y={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.MonthPicker,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`},M={type:"code",centered:!0,maxWidth:600,component:function(){let[e,t]=(0,r.useState)(null);return(0,a.jsx)(o.MonthPicker,{fullWidth:!0,value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <MonthPicker fullWidth value={value} onChange={setValue} />;
}
`},g={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.MonthPicker,{presets:[{value:(0,s.default)().startOf("month").format("YYYY-MM-DD"),label:"This month"},{value:(0,s.default)().add(1,"month").startOf("month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,s.default)().subtract(1,"month").startOf("month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,s.default)().add(6,"month").startOf("month").format("YYYY-MM-DD"),label:"In 6 months"},{value:(0,s.default)().add(1,"year").startOf("month").format("YYYY-MM-DD"),label:"Next year"},{value:(0,s.default)().subtract(1,"year").startOf("month").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <MonthPicker
      presets={[
        { value: dayjs().startOf('month').format('YYYY-MM-DD'), label: 'This month' },
        { value: dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().add(6, 'month').startOf('month').format('YYYY-MM-DD'), label: 'In 6 months' },
        { value: dayjs().add(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},D={type:"code",centered:!0,component:function(){let e=(0,s.default)();return(0,a.jsx)(o.MonthPicker,{type:"range",presets:[{value:[e.subtract(3,"month").startOf("month").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"Last 3 months"},{value:[e.subtract(6,"month").startOf("month").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"Last 6 months"},{value:[e.startOf("year").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"This year"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").startOf("month").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <MonthPicker
      type="range"
      presets={[
        {
          value: [today.subtract(3, 'month').startOf('month').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'Last 3 months',
        },
        {
          value: [today.subtract(6, 'month').startOf('month').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'Last 6 months',
        },
        {
          value: [today.startOf('year').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'This year',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').startOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1};var Y=(0,t.__exportAll)({controlProps:()=>d,controlledDate:()=>i,defaultDate:()=>h,deselect:()=>j,fullWidth:()=>M,labelFormat:()=>c,listFormat:()=>f,locale:()=>y,maxLevel:()=>p,minMax:()=>m,multiple:()=>v,numberOfColumns:()=>_,presets:()=>g,presetsRange:()=>D,range:()=>b,singleRange:()=>k,sizeConfigurator:()=>S,usage:()=>x});let{usage:x,multiple:v,deselect:j,range:b,singleRange:k,numberOfColumns:_,sizeConfigurator:S}=(0,n.getSharedPickerDemos)(o.MonthPicker);e.s(["MonthPickerDemos",0,Y],168318)},847359,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(168318);e.i(603441);var a=e.i(62558);e.i(457450);var o=e.i(418026);let s=(0,a.Layout)(o.MDX_DATA.MonthPicker);function i(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:o,KeyboardEventsTable:s}=a;return o||l("Demo",!0),s||l("KeyboardEventsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.usage}),"\n",(0,t.jsx)(a.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"allowDeselect"})," to allow users to deselect the currently selected date by clicking on it.\n",(0,t.jsx)(a.code,{children:"allowDeselect"})," is disregarded when the ",(0,t.jsx)(a.code,{children:"type"})," prop is ",(0,t.jsx)(a.code,{children:"range"})," or ",(0,t.jsx)(a.code,{children:"multiple"}),". When a date is\ndeselected, ",(0,t.jsx)(a.code,{children:"onChange"})," is called with ",(0,t.jsx)(a.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.deselect}),"\n",(0,t.jsx)(a.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:'type="multiple"'})," to allow users to pick multiple dates:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.multiple}),"\n",(0,t.jsx)(a.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:'type="range"'})," to allow users to pick a date range:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.range}),"\n",(0,t.jsx)(a.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,t.jsxs)(a.p,{children:["By default, it is not allowed to select a single date as a range – when the user clicks the same date a second time, it is deselected.\nTo change this behavior, set the ",(0,t.jsx)(a.code,{children:"allowSingleDateInRange"})," prop. ",(0,t.jsx)(a.code,{children:"allowSingleDateInRange"})," is ignored when the\n",(0,t.jsx)(a.code,{children:"type"})," prop is not ",(0,t.jsx)(a.code,{children:"range"}),"."]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.singleRange}),"\n",(0,t.jsx)(a.h2,{id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"presets"})," prop to add custom month presets. Presets are displayed next to the calendar:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.presets}),"\n",(0,t.jsxs)(a.p,{children:["To use ",(0,t.jsx)(a.code,{children:"presets"})," with ",(0,t.jsx)(a.code,{children:'type="range"'}),", define the value as a tuple of two dates:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.presetsRange}),"\n",(0,t.jsx)(a.h2,{id:"default-date",children:"Default date"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"defaultDate"})," prop to set the date value that will be used to determine which year should be displayed initially.\nFor example, to display the ",(0,t.jsx)(a.code,{children:"2015"})," year, set ",(0,t.jsx)(a.code,{children:"defaultDate={new Date(2015, 1)}"}),". If the value is not specified,\nthen ",(0,t.jsx)(a.code,{children:"defaultDate"})," will use ",(0,t.jsx)(a.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in the provided date object, only the year is used –\nyou can specify any date value."]}),"\n",(0,t.jsxs)(a.p,{children:["Note that if you set the ",(0,t.jsx)(a.code,{children:"date"})," prop, then the ",(0,t.jsx)(a.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.defaultDate}),"\n",(0,t.jsx)(a.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,t.jsxs)(a.p,{children:["Set the ",(0,t.jsx)(a.code,{children:"date"})," and ",(0,t.jsx)(a.code,{children:"onDateChange"})," props to make the currently displayed year and decade controlled.\nBy doing so, you can customize the date picking experience. For example, when the user selects the first date in a range,\nyou can add one year to the current date value:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.controlledDate}),"\n",(0,t.jsx)(a.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,t.jsxs)(a.p,{children:["Set the ",(0,t.jsx)(a.code,{children:"minDate"})," and ",(0,t.jsx)(a.code,{children:"maxDate"})," props to define minimum and maximum dates. If the previous/next page is not available,\nthen the corresponding control will be disabled."]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.minMax}),"\n",(0,t.jsx)(a.h2,{id:"add-props-to-year-and-month-control",children:"Add props to year and month control"}),"\n",(0,t.jsxs)(a.p,{children:["You can add props to year and month controls with the ",(0,t.jsx)(a.code,{children:"getYearControlProps"})," and ",(0,t.jsx)(a.code,{children:"getMonthControlProps"})," functions. Both functions accept a date as a single argument,\nand props returned from the function will be added to the year/month control. For example, it can be used to disable a specific\ncontrol or add styles:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.controlProps}),"\n",(0,t.jsx)(a.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,t.jsxs)(a.p,{children:["Set the ",(0,t.jsx)(a.code,{children:"numberOfColumns"})," prop to define the number of pickers that will be rendered side by side:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.numberOfColumns}),"\n",(0,t.jsx)(a.h2,{id:"max-level",children:"Max level"}),"\n",(0,t.jsxs)(a.p,{children:["To disallow users from going to the decade level, set ",(0,t.jsx)(a.code,{children:'maxLevel="year"'}),":"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.maxLevel}),"\n",(0,t.jsx)(a.h2,{id:"full-width",children:"Full width"}),"\n",(0,t.jsxs)(a.p,{children:["Set the ",(0,t.jsx)(a.code,{children:"fullWidth"})," prop to make the month picker stretch to fill 100% of its parent container width:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.fullWidth}),"\n",(0,t.jsx)(a.h2,{id:"size",children:"Size"}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.sizeConfigurator}),"\n",(0,t.jsx)(a.h2,{id:"change-year-and-months-controls-format",children:"Change year and months controls format"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"yearsListFormat"})," and ",(0,t.jsx)(a.code,{children:"monthsListFormat"})," props to change the ",(0,t.jsx)(a.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year/month controls:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.listFormat}),"\n",(0,t.jsx)(a.h2,{id:"change-label-format",children:"Change label format"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"decadeLabelFormat"})," and ",(0,t.jsx)(a.code,{children:"yearLabelFormat"})," to change the ",(0,t.jsx)(a.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the decade/year label:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.labelFormat}),"\n",(0,t.jsx)(a.h2,{id:"localization",children:"Localization"}),"\n",(0,t.jsxs)(a.p,{children:["Usually it is better to specify the ",(0,t.jsx)(a.code,{children:"@mantine/dates"})," package locale in ",(0,t.jsx)(a.a,{href:"/dates/getting-started/",children:"DatesProvider"}),",\nbut you can also override the locale per component:"]}),"\n",(0,t.jsx)(o,{data:r.MonthPickerDemos.locale}),"\n",(0,t.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(a.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,t.jsxs)(a.p,{children:["Set the ",(0,t.jsx)(a.code,{children:"ariaLabels"})," prop to specify ",(0,t.jsx)(a.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { MonthPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <MonthPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n        nextYear: 'Next year',\n        previousYear: 'Previous year',\n        yearLevelControl: 'Change to decade view',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"yearmonth-control-aria-label",children:"Year/month control aria-label"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"getYearControlProps"}),"/",(0,t.jsx)(a.code,{children:"getMonthControlProps"})," to customize the ",(0,t.jsx)(a.code,{children:"aria-label"})," attribute:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { MonthPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <MonthPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n      getMonthControlProps={(date) => ({\n        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(a.p,{children:"Note that the following events will only trigger if focus is on a month control."}),"\n",(0,t.jsx)(s,{data:[{key:"ArrowRight",description:"Focuses next non-disabled month"},{key:"ArrowLeft",description:"Focuses previous non-disabled month"},{key:"ArrowDown",description:"Focuses next non-disabled month in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled month in the same column"}]})]})}function l(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})})}])},935754,(e,t,n)=>{let r="/dates/month-picker";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(847359)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);