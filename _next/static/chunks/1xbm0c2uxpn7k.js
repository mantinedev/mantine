(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},604363,(e,t,a)=>{e.e,t.exports=function(e,t,a){var r=function(e){return e.add(4-e.isoWeekday(),"day")},n=t.prototype;n.isoWeekYear=function(){return r(this).year()},n.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,n,l,o=r(this),i=(t=this.isoWeekYear(),l=4-(n=(this.$u?a.utc:a)().year(t).startOf("year")).isoWeekday(),n.isoWeekday()>4&&(l+=7),n.add(l,"day"));return o.diff(i,"week")+1},n.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var l=n.startOf;n.startOf=function(e,t){var a=this.$utils(),r=!!a.u(t)||t;return"isoweek"===a.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(e,t)}}},462138,e=>{"use strict";var t=e.i(779177),a=e.i(391398);function r({style:e,size:n=16,...l}){return(0,a.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(n),height:(0,t.rem)(n),display:"block"},...l,children:(0,a.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}r.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,r])},494834,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",r="hour",n="week",l="month",o="quarter",i="year",s="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(e,t,a){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(a)+e},p="en",f={};f[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var h="$isDayjsObject",v=function(e){return e instanceof y||!(!e||!e[h])},x=function e(t,a,r){var n;if(!t)return p;if("string"==typeof t){var l=t.toLowerCase();f[l]&&(n=l),a&&(f[l]=a,n=l);var o=t.split("-");if(!n&&o.length>1)return e(o[0])}else{var i=t.name;f[i]=t,n=i}return!r&&n&&(p=n),n||!r&&p},g=function(e,t){if(v(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new y(a)},b={s:m,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+m(Math.floor(a/60),2,"0")+":"+m(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var r=12*(a.year()-t.year())+(a.month()-t.month()),n=t.clone().add(r,l),o=a-n<0,i=t.clone().add(r+(o?-1:1),l);return+(-(r+(a-n)/(o?n-i:i-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return({M:l,y:i,w:n,d:"day",D:s,h:r,m:a,s:t,ms:e,Q:o})[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=x,b.i=v,b.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[h]=!0}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var n=r[2]-1||0,l=(r[7]||"0").substring(0,3);return a?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,l)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,l)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return this.$d.toString()!==u},p.isSame=function(e,t){var a=g(e);return this.startOf(t)<=a&&a<=this.endOf(t)},p.isAfter=function(e,t){return g(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<g(e)},p.$g=function(e,t,a){return b.u(e)?this[t]:this.set(a,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,o){var u=this,d=!!b.u(o)||o,c=b.p(e),m=function(e,t){var a=b.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?a:a.endOf("day")},p=function(e,t){return b.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},f=this.$W,h=this.$M,v=this.$D,x="set"+(this.$u?"UTC":"");switch(c){case i:return d?m(1,0):m(31,11);case l:return d?m(1,h):m(0,h+1);case n:var g=this.$locale().weekStart||0,y=(f<g?f+7:f)-g;return m(d?v-y:v+(6-y),h);case"day":case s:return p(x+"Hours",0);case r:return p(x+"Minutes",1);case a:return p(x+"Seconds",2);case t:return p(x+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(n,o){var u,d=b.p(n),c="set"+(this.$u?"UTC":""),m=((u={}).day=c+"Date",u[s]=c+"Date",u[l]=c+"Month",u[i]=c+"FullYear",u[r]=c+"Hours",u[a]=c+"Minutes",u[t]=c+"Seconds",u[e]=c+"Milliseconds",u)[d],p="day"===d?this.$D+(o-this.$W):o;if(d===l||d===i){var f=this.clone().set(s,1);f.$d[m](p),f.init(),this.$d=f.set(s,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[b.p(e)]()},p.add=function(e,o){var s,u=this;e=Number(e);var d=b.p(o),c=function(t){var a=g(u);return b.w(a.date(a.date()+Math.round(t*e)),u)};if(d===l)return this.set(l,this.$M+e);if(d===i)return this.set(i,this.$y+e);if("day"===d)return c(1);if(d===n)return c(7);var m=((s={})[a]=6e4,s[r]=36e5,s[t]=1e3,s)[d]||1,p=this.$d.getTime()+e*m;return b.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||u;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=b.z(this),l=this.$H,o=this.$m,i=this.$M,s=a.weekdays,d=a.months,m=a.meridiem,p=function(e,a,n,l){return e&&(e[a]||e(t,r))||n[a].slice(0,l)},f=function(e){return b.s(l%12||12,e,"0")},h=m||function(e,t,a){var r=e<12?"AM":"PM";return a?r.toLowerCase():r};return r.replace(c,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return i+1;case"MM":return b.s(i+1,2,"0");case"MMM":return p(a.monthsShort,i,d,3);case"MMMM":return p(d,i);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(a.weekdaysMin,t.$W,s,2);case"ddd":return p(a.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(l);case"HH":return b.s(l,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(l,o,!0);case"A":return h(l,o,!1);case"m":return String(o);case"mm":return b.s(o,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,s,u){var d,c=this,m=b.p(s),p=g(e),f=(p.utcOffset()-this.utcOffset())*6e4,h=this-p,v=function(){return b.m(c,p)};switch(m){case i:d=v()/12;break;case l:d=v();break;case o:d=v()/3;break;case n:d=(h-f)/6048e5;break;case"day":d=(h-f)/864e5;break;case r:d=h/36e5;break;case a:d=h/6e4;break;case t:d=h/1e3;break;default:d=h}return u?d:b.a(d)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),r=x(e,t,!0);return r&&(a.$L=r),a},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),D=y.prototype;return g.prototype=D,[["$ms",e],["$s",t],["$m",a],["$H",r],["$W","day"],["$M",l],["$y",i],["$D",s]].forEach(function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),g.extend=function(e,t){return e.$i||(e(t,y,g),e.$i=!0),g},g.locale=x,g.isDayjs=v,g.unix=function(e){return g(1e3*e)},g.en=f[p],g.Ls=f,g.p={},g}()},205693,135140,e=>{"use strict";var t=e.i(191788),a=e.i(391398);let r={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},n=(0,t.createContext)(r);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,a.jsx)(n,{value:{...r,...e},children:t})},"DatesProviderContext",0,n],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(n),a=(0,t.useCallback)(t=>t||e.locale,[e.locale]),r=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),l=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),o=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:a,getFirstDayOfWeek:r,getWeekendDays:l,getLabelSeparator:o}}],205693)},110198,e=>{"use strict";var t=e.i(494834);e.s(["toDateString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD")},"toDateTimeString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD HH:mm:ss")}])},831474,e=>{"use strict";e.s(["pickCalendarProps",0,function(e){let{maxLevel:t,minLevel:a,defaultLevel:r,level:n,onLevelChange:l,nextIcon:o,previousIcon:i,date:s,defaultDate:u,onDateChange:d,numberOfColumns:c,columnsToScroll:m,ariaLabels:p,nextLabel:f,previousLabel:h,onYearSelect:v,onMonthSelect:x,onYearMouseEnter:g,onMonthMouseEnter:b,onNextMonth:y,onPreviousMonth:D,onNextYear:j,onPreviousYear:k,onNextDecade:S,onPreviousDecade:M,withCellSpacing:w,highlightToday:Y,__updateDateOnYearSelect:V,__updateDateOnMonthSelect:C,__setDateRef:P,__setLevelRef:_,withWeekNumbers:T,headerControlsOrder:R,firstDayOfWeek:L,weekdayFormat:$,weekendDays:O,getDayProps:A,excludeDate:z,renderDay:F,hideOutsideDates:W,hideWeekdays:N,getDayAriaLabel:E,monthLabelFormat:I,monthsListFormat:Z,getMonthControlProps:B,yearLabelFormat:H,yearsListFormat:U,getYearControlProps:G,decadeLabelFormat:X,allowSingleDateInRange:K,allowDeselect:J,minDate:q,maxDate:Q,locale:ee,...et}=e;return{calendarProps:{maxLevel:t,minLevel:a,defaultLevel:r,level:n,onLevelChange:l,nextIcon:o,previousIcon:i,date:s,defaultDate:u,onDateChange:d,numberOfColumns:c,columnsToScroll:m,ariaLabels:p,nextLabel:f,previousLabel:h,onYearSelect:v,onMonthSelect:x,onYearMouseEnter:g,onMonthMouseEnter:b,onNextMonth:y,onPreviousMonth:D,onNextYear:j,onPreviousYear:k,onNextDecade:S,onPreviousDecade:M,withCellSpacing:w,highlightToday:Y,__updateDateOnYearSelect:V,__updateDateOnMonthSelect:C,__setDateRef:P,withWeekNumbers:T,headerControlsOrder:R,firstDayOfWeek:L,weekdayFormat:$,weekendDays:O,getDayProps:A,excludeDate:z,renderDay:F,hideOutsideDates:W,hideWeekdays:N,getDayAriaLabel:E,monthLabelFormat:I,monthsListFormat:Z,getMonthControlProps:B,yearLabelFormat:H,yearsListFormat:U,getYearControlProps:G,decadeLabelFormat:X,allowSingleDateInRange:K,allowDeselect:J,minDate:q,maxDate:Q,locale:ee},others:et}}])},337976,e=>{"use strict";var t=e.i(422696),a=e.i(494834);function r(e,t){let r=[...t].sort((e,t)=>(0,a.default)(e).isAfter((0,a.default)(t))?1:-1);return(0,a.default)(r[0]).startOf("day").subtract(1,"ms").isBefore(e)&&(0,a.default)(r[1]).endOf("day").add(1,"ms").isAfter(e)}var n=e.i(191788);e.s(["useDatesState",0,function({type:e,level:l,value:o,defaultValue:i,onChange:s,allowSingleDateInRange:u,allowDeselect:d,onMouseLeave:c}){let[m,p]=(0,t.useUncontrolledDates)({type:e,value:o,defaultValue:i,onChange:s}),[f,h]=(0,n.useState)("range"===e&&m[0]&&!m[1]?m[0]:null),[v,x]=(0,n.useState)(null),g="range"===e?e=>{c?.(e),x(null)}:c,b="range"===e&&f?x:()=>{};return(0,n.useEffect)(()=>{if("range"===e)if(m[0]&&!m[1])h(m[0]);else{let e=null==m[0]&&null==m[1],t=null!=m[0]&&null!=m[1];(e||t)&&(h(null),x(null))}},[m]),{onDateChange:t=>{if("range"===e){if(f&&!m[1]){if((0,a.default)(t).isSame(f,l)&&!u){h(null),x(null),p([null,null]);return}let e=[t,f];e.sort((e,t)=>(0,a.default)(e).isAfter((0,a.default)(t))?1:-1),p(e),x(null),h(null);return}if(m[0]&&!m[1]&&(0,a.default)(t).isSame(m[0],l)&&!u){h(null),x(null),p([null,null]);return}p([t,null]),x(null),h(t);return}"multiple"===e?m.some(e=>(0,a.default)(e).isSame(t,l))?p(m.filter(e=>!(0,a.default)(e).isSame(t,l))):p([...m,t]):m&&d&&(0,a.default)(t).isSame(m,l)?p(null):p(t)},onRootMouseLeave:g,onHoveredDateChange:b,getControlProps:t=>{if("range"===e)return{selected:m.some(e=>e&&(0,a.default)(e).isSame(t,l)),inRange:f&&v?r(t,[v,f]):!!m[0]&&!!m[1]&&r(t,m),firstInRange:!!m[0]&&!!(0,a.default)(t).isSame(m[0],l)&&!(v&&(0,a.default)(v).isBefore(m[0])),lastInRange:m[1]?(0,a.default)(t).isSame(m[1],l):!!m[0]&&!!v&&(0,a.default)(v).isBefore(m[0])&&(0,a.default)(t).isSame(m[0],l),"data-autofocus":!!m[0]&&(0,a.default)(m[0]).isSame(t,l)||void 0};if("multiple"===e)return{selected:m.some(e=>e&&(0,a.default)(e).isSame(t,l)),"data-autofocus":!!m[0]&&(0,a.default)(m[0]).isSame(t,l)||void 0};let n=(0,a.default)(m).isSame(t,l);return{selected:n,"data-autofocus":n||void 0}},_value:m,setValue:p}}],337976)},777141,e=>{"use strict";var t=e.i(146509),a=e.i(337976),r=e.i(164036),n=e.i(831474),l={datePickerRoot:"m_765a40cf",presetsList:"m_d6a681e1",presetButton:"m_acd30b22"},o=e.i(494834),i=e.i(191788),s=e.i(391398),u=e.i(232471),d=e.i(284629),c=e.i(481178),m=e.i(275519),p=e.i(433512),f=e.i(44091),h=e.i(62904),v=e.i(391466);let x=(0,c.createVarsResolver)((e,{size:t})=>({datePickerRoot:{"--preset-font-size":(0,p.getFontSize)(t)}})),g={type:"default",defaultLevel:"month",numberOfColumns:1,size:"sm"},b=(0,m.factory)(e=>{let c=(0,f.useProps)("DatePicker",g,e),{allowDeselect:m,allowSingleDateInRange:p,value:b,defaultValue:y,onChange:D,onMouseLeave:j,classNames:k,styles:S,__staticSelector:M,__onDayClick:w,__onDayMouseEnter:Y,__onPresetSelect:V,__stopPropagation:C,presets:P,className:_,style:T,unstyled:R,size:L,vars:$,attributes:O,fullWidth:A,...z}=c,{calendarProps:F,others:W}=(0,n.pickCalendarProps)(z),N=(0,i.useRef)(null),E=(0,i.useRef)(null),I=(0,v.useStyles)({name:M||"DatePicker",classes:l,props:c,className:_,style:T,classNames:k,styles:S,unstyled:R,attributes:O,rootSelector:P?"datePickerRoot":void 0,varsResolver:x,vars:$}),{onDateChange:Z,onRootMouseLeave:B,onHoveredDateChange:H,getControlProps:U,_value:G,setValue:X}=(0,a.useDatesState)({type:W.type,level:"day",allowDeselect:m,allowSingleDateInRange:p,value:b,defaultValue:y,onChange:D,onMouseLeave:j}),{resolvedClassNames:K,resolvedStyles:J}=(0,h.useResolvedStylesApi)({classNames:k,styles:S,props:c}),q=(0,s.jsx)(r.Calendar,{classNames:K,styles:J,__staticSelector:M||"DatePicker",onMouseLeave:B,size:L,fullWidth:A,...F,...!P?W:{},__stopPropagation:C,__setDateRef:N,__setLevelRef:E,minLevel:F.minLevel||"month",__onDayMouseEnter:(e,t)=>{H(t),Y?.(e,t)},__onDayClick:(e,t)=>{Z(t),w?.(e,t)},getDayProps:e=>({...U(e),...F.getDayProps?.(e)}),getMonthControlProps:e=>({selected:"string"==typeof G&&(0,t.isSameMonth)(e,G),...F.getMonthControlProps?.(e)}),getYearControlProps:e=>({selected:"string"==typeof G&&(0,o.default)(e).isSame(G,"year"),...F.getYearControlProps?.(e)}),hideOutsideDates:F.hideOutsideDates??1!==F.numberOfColumns,attributes:O,...!P?{className:_,style:T}:{}});if(!P)return q;let Q=P.map((e,t)=>(0,s.jsx)(d.UnstyledButton,{...I("presetButton"),onClick:()=>{var t;let a;void 0!==(a=Array.isArray(t=e.value)?t[0]:t)&&(N.current?.(a),E.current?.("month"),V?V(t):X(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":C||void 0,children:e.label},t));return(0,s.jsxs)(u.Box,{...I("datePickerRoot"),size:L,...W,children:[(0,s.jsx)("div",{...I("presetsList"),children:Q}),q]})});b.classes=r.Calendar.classes,b.varsResolver=x,b.displayName="@mantine/dates/DatePicker",e.s(["DatePicker",0,b],777141)},414124,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M108,60A16,16,0,1,1,92,44,16,16,0,0,1,108,60Zm56,16a16,16,0,1,0-16-16A16,16,0,0,0,164,76ZM92,112a16,16,0,1,0,16,16A16,16,0,0,0,92,112Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,112ZM92,180a16,16,0,1,0,16,16A16,16,0,0,0,92,180Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,180Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32V224a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V32A16,16,0,0,1,64,16H192A16,16,0,0,1,208,32Z",opacity:"0.2"}),t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M102,60A10,10,0,1,1,92,50,10,10,0,0,1,102,60Zm62,10a10,10,0,1,0-10-10A10,10,0,0,0,164,70ZM92,118a10,10,0,1,0,10,10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,118ZM92,186a10,10,0,1,0,10,10A10,10,0,0,0,92,186Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,186Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,60a8,8,0,1,1-8-8A8,8,0,0,1,100,60Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,68ZM92,120a8,8,0,1,0,8,8A8,8,0,0,0,92,120Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,120ZM92,188a8,8,0,1,0,8,8A8,8,0,0,0,92,188Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,188Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="DotsSixVerticalIcon",e.s(["DotsSixVerticalIcon",0,n],414124)},328940,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(312773),n=e.i(481178),l=e.i(317477),o=e.i(44091),i=e.i(391466),s=e.i(275519),u=e.i(323283),d=e.i(55383),c=e.i(585968),m=e.i(782814),p=e.i(130624),f=e.i(23168),h=e.i(635961),v=e.i(846711),x=e.i(178372),g=e.i(229737),b=e.i(504297),y=e.i(191788),D=e.i(852361),j=e.i(332977),k=e.i(502315),S=e.i(579560),M=e.i(391398);let w=(0,n.createVarsResolver)((e,{size:r,color:n,thumbSize:o,radius:i})=>({root:{"--slider-size":(0,a.getSize)(r,"slider-size"),"--slider-color":n?(0,l.getThemeColor)(n,e):void 0,"--slider-radius":void 0===i?void 0:(0,a.getRadius)(i),"--slider-thumb-size":void 0!==o?(0,t.rem)(o):"calc(var(--slider-size) * 2)"}})),Y={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},V=(0,s.factory)(e=>{let t=(0,o.useProps)("RangeSlider",Y,e),{classNames:a,styles:n,value:l,onChange:s,onChangeEnd:V,size:C,min:P,max:_,domain:T,minRange:R,maxRange:L,step:$,precision:O,defaultValue:A,name:z,marks:F,label:W,labelTransitionProps:N,labelAlwaysOn:E,thumbFromLabel:I,thumbToLabel:Z,thumbValueText:B,showLabelOnHover:H,thumbChildren:U,disabled:G,unstyled:X,scale:K,inverted:J,orientation:q,className:Q,style:ee,vars:et,hiddenInputProps:ea,restrictToMarks:er,thumbProps:en,pushOnOverlap:el,attributes:eo,ref:ei,...es}=t,eu=(0,i.useStyles)({name:"RangeSlider",props:t,classes:b.default,classNames:a,className:Q,styles:n,style:ee,attributes:eo,vars:et,varsResolver:w,unstyled:X}),ed=(0,y.useRef)(null),{dir:ec}=(0,u.useDirection)(),[em,ep]=(0,y.useState)(-1),[ef,eh]=(0,y.useState)(!1),[ev,ex]=(0,S.useUncontrolled)({value:l,defaultValue:A,finalValue:[P,_],onChange:s}),eg=(0,y.useRef)(ev),eb=(0,y.useRef)([]),ey=(0,y.useRef)(null),eD=(0,y.useRef)(void 0),[ej,ek]=T||[P,_],eS=[(0,p.getPosition)({value:ev[0],min:ej,max:ek}),(0,p.getPosition)({value:ev[1],min:ej,max:ek})],eM=O??(0,x.getPrecision)($);(0,y.useEffect)(()=>{Array.isArray(l)&&(eg.current=l)},Array.isArray(l)?[l[0],l[1]]:[null,null]);let ew=(e,t,a)=>{if(-1===t)return;let n=[...eg.current];if(er&&F){let a=(0,r.findClosestNumber)(e,F.map(e=>e.value)),l=n[t];n[t]=a;let o=+(0===t),i=(0,g.getLastMarkValue)(F),s=(0,g.getFirstMarkValue)(F);a===i&&n[o]===i||a===s&&n[o]===s?n[t]=l:a===n[o]&&(l>n[o]?n[o]=(0,g.getPreviousMarkValue)(a,F):n[o]=(0,g.getNextMarkValue)(a,F))}else{let a=(0,D.clamp)(e,P,_);n[t]=a,0===t&&(a>n[1]-(R-1e-9)&&(el?n[1]=Math.min(e+R,_):n[t]=eg.current[t]),a>(_-(R-1e-9)||P)&&(n[t]=eg.current[t]),n[1]-e>L&&(el?n[1]=e+L:n[t]=eg.current[t])),1===t&&(a<n[0]+R&&(el?n[0]=Math.max(e-R,P):n[t]=eg.current[t]),a<n[0]+R&&(n[t]=eg.current[t]),a-n[0]>L&&(el?n[0]=e-L:n[t]=eg.current[t]))}if(n[0]=(0,v.getFloatingValue)(n[0],eM),n[1]=(0,v.getFloatingValue)(n[1],eM),n[0]>n[1]){let e=n[0];n[0]=n[1],n[1]=e}ex(n),eg.current=n,a&&V?.(eg.current)},{ref:eY,active:eV}=(0,k.useMove)(({x:e,y:t})=>{var a;return a="vertical"===q?1-t:e,void(!G&&void 0!==eD.current&&ew((0,h.getChangeValue)({value:a,min:ej,max:ek,step:$,precision:eM}),eD.current,!1))},{onScrubEnd:()=>!G&&V?.(eg.current)},ec),eC=e=>{if(ed.current){ed.current.focus();let t=ed.current.getBoundingClientRect(),a=function(e,t){if("TouchEvent"in window&&e instanceof window.TouchEvent){let a=e.touches[0];return"vertical"===t?a.clientY:a.clientX}return"vertical"===t?e.clientY:e.clientX}(e.nativeEvent,q),r="vertical"===q?(0,h.getChangeValue)({value:t.bottom-a,max:_,min:P,step:$,containerWidth:t.height}):(0,h.getChangeValue)({value:a-t.left,max:_,min:P,step:$,containerWidth:t.width}),n=+(Math.abs(ev[0]-r)>Math.abs(ev[1]-r));eD.current="vertical"===q||"ltr"===ec?n:+(1!==n)}},eP=()=>1!==em&&0!==em?(ep(0),0):em,e_={max:_,min:P,size:C,labelTransitionProps:N,labelAlwaysOn:E,orientation:q,onBlur:()=>ep(-1)},eT=Array.isArray(U);return(0,M.jsx)(d.SliderProvider,{value:{getStyles:eu},children:(0,M.jsxs)(c.SliderRoot,{...es,size:C,ref:(0,j.useMergedRef)(ei,ey),disabled:G,orientation:q,onMouseDownCapture:()=>ey.current?.focus(),onKeyDownCapture:()=>{eb.current[0]?.parentElement?.contains(document.activeElement)||eb.current[0]?.focus()},children:[(0,M.jsxs)(f.Track,{offset:eS[0],marksOffset:ev[0],filled:eS[1]-eS[0],marks:F,inverted:J,min:ej,max:ek,value:ev[1],disabled:G,containerProps:{ref:(0,j.useMergedRef)(ed,eY),onMouseEnter:H?()=>eh(!0):void 0,onMouseLeave:H?()=>eh(!1):void 0,onTouchStartCapture:eC,onTouchEndCapture:()=>{eD.current=-1},onMouseDownCapture:eC,onMouseUpCapture:()=>{eD.current=-1},onKeyDownCapture:e=>{if(!G)switch(e.key){case"ArrowUp":{e.preventDefault();let t=eP();eb.current[t].focus(),ew((0,v.getFloatingValue)(er&&F?(0,g.getNextMarkValue)(eg.current[t],F):Math.min(Math.max(eg.current[t]+$,ej),ek),eM),t,!0);break}case"ArrowRight":{e.preventDefault();let t=eP();eb.current[t].focus(),ew((0,v.getFloatingValue)(er&&F?("rtl"===ec?g.getPreviousMarkValue:g.getNextMarkValue)(eg.current[t],F):Math.min(Math.max("rtl"===ec?eg.current[t]-$:eg.current[t]+$,ej),ek),eM),t,!0);break}case"ArrowDown":{e.preventDefault();let t=eP();eb.current[t].focus(),ew((0,v.getFloatingValue)(er&&F?(0,g.getPreviousMarkValue)(eg.current[t],F):Math.min(Math.max(eg.current[t]-$,ej),ek),eM),t,!0);break}case"ArrowLeft":{e.preventDefault();let t=eP();eb.current[t].focus(),ew((0,v.getFloatingValue)(er&&F?("rtl"===ec?g.getNextMarkValue:g.getPreviousMarkValue)(eg.current[t],F):Math.min(Math.max("rtl"===ec?eg.current[t]+$:eg.current[t]-$,ej),ek),eM),t,!0)}}}},children:[(0,M.jsx)(m.Thumb,{...e_,value:K(ev[0]),position:eS[0],dragging:eV,label:"function"==typeof W?W((0,v.getFloatingValue)(K(ev[0]),eM)):W,ref:e=>{e&&(eb.current[0]=e)},thumbLabel:I,thumbValueText:B,onMouseDown:()=>void(eD.current=0),onFocus:()=>ep(0),showLabelOnHover:H,isHovered:ef,disabled:G,...en?.(0),children:eT?U[0]:U}),(0,M.jsx)(m.Thumb,{...e_,thumbLabel:Z,value:K(ev[1]),position:eS[1],dragging:eV,label:"function"==typeof W?W((0,v.getFloatingValue)(K(ev[1]),eM)):W,ref:e=>{e&&(eb.current[1]=e)},thumbValueText:B,onMouseDown:()=>void(eD.current=1),onFocus:()=>ep(1),showLabelOnHover:H,isHovered:ef,disabled:G,...en?.(1),children:eT?U[1]:U})]}),(0,M.jsx)("input",{type:"hidden",name:`${z}_from`,value:ev[0],...ea}),(0,M.jsx)("input",{type:"hidden",name:`${z}_to`,value:ev[1],...ea})]})})});V.classes=b.default,V.varsResolver=w,V.displayName="@mantine/core/RangeSlider",e.s(["RangeSlider",0,V],328940)},788350,e=>{"use strict";var t=e.i(44091),a=e.i(62904),r=e.i(391466),n=e.i(425254),l=e.i(275519),o=e.i(586488),i=e.i(205764),s=e.i(464224),u=e.i(734858),d=e.i(711976),c=e.i(212491),m=e.i(798270),p=e.i(122057),f=e.i(217633),h=e.i(463112);function v({splitChars:e,allowDuplicates:t,maxTags:a,value:r,currentTags:n,isDuplicate:l,onDuplicate:o}){let i=e?r.split(RegExp(`[${e.join("")}]`)).map(e=>e.trim()).filter(e=>""!==e):[r],s=[];if(t)s.push(...n,...i);else for(let e of(s.push(...n),i))(l?e=>l(e,s):e=>s.some(t=>t.toLowerCase()===e.toLowerCase()))(e)?o?.(e):s.push(e);return a?s.slice(0,a):s}var x=e.i(191788),g=e.i(107315),b=e.i(332977),y=e.i(579560),D=e.i(391398);let j={maxTags:1/0,acceptValueOnBlur:!0,splitChars:[","],hiddenInputValuesDivider:",",openOnFocus:!0,size:"sm"},k=(0,l.factory)(e=>{let l=(0,t.useProps)(["Input","InputWrapper","TagsInput"],j,e),{classNames:o,className:k,style:S,styles:M,unstyled:w,vars:Y,size:V,value:C,defaultValue:P,onChange:_,onKeyDown:T,maxTags:R,allowDuplicates:L,onDuplicate:$,variant:O,data:A,dropdownOpened:z,defaultDropdownOpened:F,onDropdownOpen:W,onDropdownClose:N,selectFirstOptionOnChange:E,selectFirstOptionOnDropdownOpen:I,onOptionSubmit:Z,comboboxProps:B,filter:H,limit:U,withScrollArea:G,maxDropdownHeight:X,floatingHeight:K,searchValue:J,defaultSearchValue:q,onSearchChange:Q,readOnly:ee,disabled:et,splitChars:ea,onFocus:er,onBlur:en,onPaste:el,radius:eo,rightSection:ei,rightSectionWidth:es,rightSectionPointerEvents:eu,rightSectionProps:ed,leftSection:ec,leftSectionWidth:em,leftSectionPointerEvents:ep,leftSectionProps:ef,inputContainer:eh,inputWrapperOrder:ev,withAsterisk:ex,required:eg,labelProps:eb,descriptionProps:ey,errorProps:eD,successProps:ej,wrapperProps:ek,description:eS,label:eM,error:ew,success:eY,withErrorStyles:eV,withSuccessStyles:eC,name:eP,form:e_,id:eT,clearable:eR,clearSectionMode:eL,clearButtonProps:e$,hiddenInputProps:eO,hiddenInputValuesDivider:eA,mod:ez,renderOption:eF,renderPill:eW,onRemove:eN,onClear:eE,onMaxTags:eI,scrollAreaProps:eZ,acceptValueOnBlur:eB,isDuplicate:eH,openOnFocus:eU,attributes:eG,ref:eX,loading:eK,loadingPosition:eJ,withPillsReorder:eq,...eQ}=l,e0=(0,g.useId)(eT),e1=(0,i.getParsedComboboxData)(A),e2=(0,s.getOptionsLockup)(e1),e6=(0,x.useRef)(null),e4=(0,b.useMergedRef)(e6,eX),e5=(0,u.useCombobox)({opened:z,defaultOpened:F,onDropdownOpen:()=>{W?.(),I&&e5.selectFirstOption()},onDropdownClose:()=>{N?.(),e5.resetSelectedOption()}}),{styleProps:e8,rest:{type:e3,autoComplete:e7,...e9}}=(0,n.extractStyleProps)(eQ),[te,tt]=(0,y.useUncontrolled)({value:C,defaultValue:P,finalValue:[],onChange:_}),{getPillProps:ta,getListProps:tr,handleInputKeyDown:tn}=(0,m.usePillsReorder)({value:te,onChange:tt,enabled:eq&&!et&&!ee}),[tl,to]=(0,y.useUncontrolled)({value:J,defaultValue:q,finalValue:"",onChange:Q}),ti=e=>{to(e),e5.resetSelectedOption()},ts=(0,r.useStyles)({name:"TagsInput",classes:{},props:l,classNames:o,styles:M,unstyled:w}),{resolvedClassNames:tu,resolvedStyles:td}=(0,a.useResolvedStylesApi)({props:l,styles:M,classNames:o}),tc=e=>{(eH?eH(e,te):te.some(t=>t.toLowerCase()===e.toLowerCase()))&&($?.(e),!L)?ti(""):te.length>=R?eI?.(e):(Z?.(e),ti(""),e.length>0&&tt([...te,e]))},tm=te.map((e,t)=>{let a=()=>{let a=te.slice();a.splice(t,1),tt(a),eN?.(e)},r=ta(t);return eW?(0,D.jsx)(x.Fragment,{children:eW({option:e2[e]||{value:e,label:e,disabled:!1},value:e,onRemove:a,disabled:et||ee,reorderProps:r})},`${e}-${t}`):(0,D.jsx)(p.Pill,{withRemoveButton:!ee,onRemove:a,unstyled:w,disabled:et,attributes:eG,...ts("pill"),...r,children:e},`${e}-${t}`)});(0,x.useEffect)(()=>{E&&e5.selectFirstOption()},[E,te,tl]);let tp=(0,D.jsx)(d.Combobox.ClearButton,{...e$,onClear:()=>{tt([]),ti(""),e6.current?.focus(),e5.openDropdown(),eE?.()}});return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(d.Combobox,{store:e5,classNames:tu,styles:td,unstyled:w,size:V,readOnly:ee,__staticSelector:"TagsInput",attributes:eG,floatingHeight:K,onOptionSubmit:e=>{Z?.(e),ti(""),te.length>=R?eI?.(e):tt([...te,e2[e].value]),e5.resetSelectedOption()},...B,children:[(0,D.jsx)(d.Combobox.DropdownTarget,{children:(0,D.jsx)(f.PillsInput,{...e8,__staticSelector:"TagsInput",classNames:tu,styles:td,unstyled:w,size:V,className:k,style:S,variant:O,disabled:et,radius:eo,rightSection:ei,__clearSection:tp,__clearable:eR&&te.length>0&&!et&&!ee,__clearSectionMode:eL,rightSectionWidth:es,rightSectionPointerEvents:eu,rightSectionProps:ed,leftSection:ec,leftSectionWidth:em,leftSectionPointerEvents:ep,leftSectionProps:ef,loading:eK,loadingPosition:eJ,inputContainer:eh,inputWrapperOrder:ev,withAsterisk:ex,required:eg,labelProps:eb,descriptionProps:ey,errorProps:eD,successProps:ej,wrapperProps:ek,description:eS,label:eM,error:ew,success:eY,withErrorStyles:eV,withSuccessStyles:eC,__stylesApiProps:{...l,multiline:!0},id:e0,mod:ez,attributes:eG,children:(0,D.jsxs)(p.Pill.Group,{disabled:et,unstyled:w,...ts("pillsList"),...tr(),children:[tm,(0,D.jsx)(d.Combobox.EventsTarget,{autoComplete:e7,withExpandedAttribute:!0,children:(0,D.jsx)(f.PillsInput.Field,{...e9,ref:e4,...ts("inputField"),unstyled:w,onKeyDown:e=>{if(T?.(e),e.defaultPrevented||e.isPropagationStopped())return;let t=tl.trim(),{length:a}=t;if(ea.includes(e.key)&&a>0&&(tt(v({splitChars:ea,allowDuplicates:L,maxTags:R,value:tl,currentTags:te,isDuplicate:eH,onDuplicate:$})),ti(""),e.preventDefault()),"Enter"===e.key&&a>0&&!e.nativeEvent.isComposing){if(e.preventDefault(),document.querySelector(`#${e5.listId} [data-combobox-option][data-combobox-selected]`))return;tc(t)}"Backspace"!==e.key||0!==a||!(te.length>0)||e.nativeEvent.isComposing||ee||(eN?.(te[te.length-1]),tt(te.slice(0,te.length-1))),tn(e)},onFocus:e=>{er?.(e),eU&&e5.openDropdown()},onBlur:e=>{en?.(e),eB&&tc(tl),e5.closeDropdown()},onPaste:e=>{el?.(e),e.preventDefault(),e.clipboardData&&(tt(v({splitChars:ea,allowDuplicates:L,maxTags:R,value:`${tl}${e.clipboardData.getData("text/plain")}`,currentTags:te,isDuplicate:eH,onDuplicate:$})),ti(""))},value:tl,onChange:e=>ti(e.currentTarget.value),required:eg&&0===te.length,disabled:et,readOnly:ee,id:e0})})]})})}),(0,D.jsx)(c.OptionsDropdown,{data:function({data:e,value:t}){let a=t.map(e=>e.trim().toLowerCase());return e.reduce((e,t)=>((0,h.isOptionsGroup)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===a.indexOf(e.label.toLowerCase().trim()))}):-1===a.indexOf(t.label.toLowerCase().trim())&&e.push(t),e),[])}({data:e1,value:te}),hidden:ee||et,filter:H,search:tl,limit:U,hiddenWhenEmpty:!0,withScrollArea:G,maxDropdownHeight:X,unstyled:w,labelId:eM?`${e0}-label`:void 0,"aria-label":eM?void 0:eQ["aria-label"],renderOption:eF,scrollAreaProps:eZ})]}),(0,D.jsx)(d.Combobox.HiddenInput,{name:eP,form:e_,value:te,valuesDivider:eA,disabled:et,...eO})]})});k.classes={...o.InputBase.classes,...d.Combobox.classes},k.displayName="@mantine/core/TagsInput",e.s(["TagsInput",0,k],788350)},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(481178),n=e.i(317477),l=e.i(700145),o=e.i(853487),i=e.i(44091),s=e.i(391466),u=e.i(275519),d=e.i(232471),c={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},m=e.i(391398);let p={position:"top-end",offset:0,showZero:!0},f=(0,r.createVarsResolver)((e,{color:r,position:i,offset:s,size:u,radius:d,zIndex:c,autoContrast:m})=>({root:{"--indicator-color":r?(0,n.getThemeColor)(r,e):void 0,"--indicator-text-color":(0,o.getAutoContrastValue)(m,e)?(0,l.getContrastColor)({color:r,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,t.rem)(u),"--indicator-radius":void 0===d?void 0:(0,a.getRadius)(d),"--indicator-z-index":c?.toString(),...function(e="top-end",a=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n="number"==typeof a?a:a.x,l="number"==typeof a?a:a.y,o=(0,t.rem)(n),i=(0,t.rem)(l),[s,u]=e.split("-");return"top"===s&&(r["--indicator-top"]=i,r["--indicator-translate-y"]="-50%"),"middle"===s&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===s&&(r["--indicator-bottom"]=i,r["--indicator-translate-y"]="50%"),"start"===u&&(r["--indicator-left"]=o,r["--indicator-translate-x"]="-50%"),"center"===u&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===u&&(r["--indicator-right"]=o,r["--indicator-translate-x"]="50%"),r}(i,s)}})),h=(0,u.factory)(e=>{let t=(0,i.useProps)("Indicator",p,e),{classNames:a,className:r,style:n,styles:l,unstyled:o,vars:u,children:h,position:v,offset:x,inline:g,label:b,radius:y,color:D,withBorder:j,disabled:k,processing:S,zIndex:M,autoContrast:w,maxValue:Y,showZero:V,mod:C,attributes:P,..._}=t,T=(0,s.useStyles)({name:"Indicator",classes:c,props:t,className:r,style:n,classNames:a,styles:l,unstyled:o,attributes:P,vars:u,varsResolver:f}),R=!V&&(0===b||"0"===b),L=void 0!==Y&&"number"==typeof b&&b>Y?`${Y}+`:b;return(0,m.jsxs)(d.Box,{...T("root"),mod:[{inline:g},C],..._,children:[!k&&!R&&(0,m.jsx)(d.Box,{mod:{"with-label":!!b,"with-border":j,processing:S},...T("indicator"),children:L}),h]})});h.classes=c,h.varsResolver=f,h.displayName="@mantine/core/Indicator",e.s(["Indicator",0,h],393353)},501655,e=>{"use strict";var t=e.i(648863),a=e.i(60695),r=e.i(391398);let n={type:"configurator",component:function(e){return(0,r.jsx)(a.Slider,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var l={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"},o=e.i(232471);let i={type:"code",component:function(){return(0,r.jsx)(o.Box,{maw:400,pt:15,pb:20,mx:"auto",children:(0,r.jsx)(a.Slider,{defaultValue:40,size:2,classNames:l,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})})},code:[{fileName:"Demo.tsx",code:`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      size={2}
      classNames={classes}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  transform: translateX(-3px) translateY(-2px);
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: 5px;
  margin-top: 0;
}

.thumb {
  height: 16px;
  width: 16px;
  background-color: var(--mantine-color-white);
  border-width: 1px;
  box-shadow: var(--mantine-shadow-sm);
}
`,language:"scss"}]},s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,r.jsx)(a.Slider,{mb:32,defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} mb={32} />
      <Slider
        mb={32}
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var u=e.i(883364);let d={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Text,{size:"sm",children:"No label"}),(0,r.jsx)(a.Slider,{defaultValue:40,label:null}),(0,r.jsx)(u.Text,{size:"sm",mt:"xl",children:"Formatted label"}),(0,r.jsx)(a.Slider,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,r.jsx)(u.Text,{size:"sm",mt:"xl",children:"Label always visible"}),(0,r.jsx)(a.Slider,{defaultValue:40,labelAlwaysOn:!0}),(0,r.jsx)(u.Text,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,r.jsx)(a.Slider,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},c=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],m={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Text,{children:"Decimal step"}),(0,r.jsx)(a.Slider,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,r.jsx)(u.Text,{mt:"md",children:"Step matched with marks"}),(0,r.jsx)(a.Slider,{defaultValue:50,label:e=>c.find(t=>t.value===e).label,step:25,marks:c,styles:{markLabel:{display:"none"}}})]})},code:`
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var p=e.i(191788);let f={type:"code",component:function(){let[e,t]=(0,p.useState)(50),[n,l]=(0,p.useState)(50);return(0,r.jsxs)(o.Box,{maw:400,mx:"auto",children:[(0,r.jsx)(a.Slider,{value:e,onChange:t,onChangeEnd:l}),(0,r.jsxs)(u.Text,{mt:"md",size:"sm",children:["onChange value: ",(0,r.jsx)("b",{children:e})]}),(0,r.jsxs)(u.Text,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,r.jsx)("b",{children:n})]})]})},code:`
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />

      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`},h={type:"code",component:function(){return(0,r.jsx)(a.Slider,{defaultValue:60,disabled:!0})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
`,centered:!0,maxWidth:340},v={type:"configurator",component:function(e){return(0,r.jsx)(a.Slider,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var x=e.i(171481);let g=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,36a65.6,65.6,0,0,0-46.67,19.33L128,58.66l-3.33-3.33A66,66,0,0,0,12,102c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102a42,42,0,0,1,71.7-29.7L111,75.63l-7.52,7.52a12,12,0,0,0,0,17l21.7,21.7-13.7,13.69a12,12,0,1,0,17,17l22.18-22.19a12,12,0,0,0,0-17L129,91.63,148.3,72.3A42,42,0,0,1,220,102C220,131.42,194.18,159.77,172.51,178.36Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M232,102c0,66-104,122-104,122S24,168,24,102a54,54,0,0,1,92.18-38.18L128,75.63l11.82-11.81A54,54,0,0,1,232,102Z",opacity:"0.2"}),p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,42a59.63,59.63,0,0,0-42.43,17.57L128,67.15l-7.57-7.58A60,60,0,0,0,18,102c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102a48,48,0,0,1,81.94-33.94l7.57,7.57L107.76,87.39a6,6,0,0,0,0,8.49l25.94,25.94-17.94,17.94a6,6,0,0,0,8.48,8.48l22.19-22.18a6,6,0,0,0,0-8.49L120.49,91.63l23.57-23.57A48,48,0,0,1,226,102C226,157.72,144.41,207.64,128,217.11Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,44a57.59,57.59,0,0,0-41,17l-9,9-9-9a58,58,0,0,0-99,41c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42a50,50,0,0,1,85.36-35.36l9,9L109.17,88.8a4,4,0,0,0,0,5.66l27.36,27.36-19.36,19.35a4,4,0,0,0,5.66,5.66L145,124.64a4,4,0,0,0,0-5.65L117.66,91.63l13.16-13.16h0l11.8-11.81A50,50,0,0,1,228,102C228,160,142,211.46,128,219.42Z"}))]]),b=p.forwardRef((e,t)=>p.createElement(x.default,{ref:t,...e,weights:g}));b.displayName="HeartBreakIcon";var y=e.i(853907),D=e.i(328940);let j={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{thumbChildren:(0,r.jsx)(y.HeartIcon,{size:16}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,r.jsx)(D.RangeSlider,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,r.jsx)(y.HeartIcon,{size:16},"1"),(0,r.jsx)(b,{size:16},"2")]})]})},code:`
import { Slider, RangeSlider } from '@mantine/core';
import { HeartIcon, HeartBreakIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<HeartIcon size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<HeartIcon size={16} key="1" />, <HeartBreakIcon size={16} key="2" />]}
      />
    </>
  );
}
`,maxWidth:400,centered:!0};function k(e){let t=["KB","MB","GB","TB"],a=0,r=e;for(;r>=1024&&a<t.length-1;)a+=1,r/=1024;return`${r} ${t[a]}`}let S=e=>2**e,M={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{scale:S,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:k}),(0,r.jsx)(D.RangeSlider,{mt:50,scale:S,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:k})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},w={type:"code",component:function(){return(0,r.jsx)(a.Slider,{inverted:!0,defaultValue:80})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`,centered:!0,maxWidth:400};var Y=e.i(220026);let V=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,C={type:"styles-api",data:Y.SliderStylesApi,component:function(e){return(0,r.jsx)(a.Slider,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:V,centered:!0,maxWidth:400},P={type:"code",component:function(){return(0,r.jsx)(a.Slider,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340};var _="m_b2d44517",T=e.i(414124),R=e.i(852361),L=e.i(502315);let $={type:"code",component:function(){let[e,t]=(0,p.useState)(.3),{ref:a}=(0,L.useMove)(({x:e})=>t((0,R.clamp)(e,.1,.9))),n=e<.2||e>.8;return(0,r.jsx)("div",{className:"m_1e8dea5f",children:(0,r.jsxs)("div",{className:"m_b34cb76e",ref:a,children:[(0,r.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:_,"data-floating":n||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:_,"data-floating":n||void 0,children:((1-e)*100).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,r.jsx)(T.DotsSixVerticalIcon,{})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0};var O=e.i(671640);let A={type:"code",component:function(){return(0,r.jsxs)(O.Stack,{children:[(0,r.jsx)(a.Slider,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,r.jsx)(D.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400},z={type:"code",component:function(){return(0,r.jsx)(a.Slider,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={25}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
`,maxWidth:400,centered:!0},F=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],W={type:"code",component:function(){return(0,r.jsxs)("div",{style:{display:"flex",gap:40},children:[(0,r.jsx)(a.Slider,{orientation:"vertical",defaultValue:45,marks:F}),(0,r.jsx)(D.RangeSlider,{orientation:"vertical",defaultValue:[25,65],marks:F})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <Slider orientation="vertical" defaultValue={45} marks={marks} />
      <RangeSlider orientation="vertical" defaultValue={[25, 65]} marks={marks} />
    </div>
  );
}
`,centered:!0},N={type:"code",component:function(){let[e,t]=(0,p.useState)(50);return(0,r.jsxs)(o.Box,{pb:"md",children:[(0,r.jsxs)(u.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: ",e]}),(0,r.jsx)(a.Slider,{value:e,onChange:t,min:0,max:100,step:1,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:25,hidden:!0},{value:50,label:"50%"},{value:75,hidden:!0},{value:100,label:"100%"}]})]})},code:`
import { Slider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState(50);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: {value}
      </Text>
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 25, hidden: true },
          { value: 50, label: '50%' },
          { value: 75, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
`},E={type:"code",component:function(){return(0,r.jsx)(a.Slider,{startPointValue:-50,min:-100,max:100,defaultValue:40,mb:40,marks:[{value:-100,label:"-100"},{value:-50,label:"-50"},{value:0,label:"0"},{value:50,label:"50"},{value:100,label:"100"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      startPointValue={0}
      min={-100}
      max={100}
      defaultValue={40}
      marks={[
        { value: -100, label: '-100' },
        { value: -50, label: '-50' },
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400};var I=(0,t.__exportAll)({changeEnd:()=>f,configurator:()=>n,customSlider:()=>$,customize:()=>i,decimal:()=>P,disabled:()=>h,domain:()=>z,hiddenMarks:()=>N,inverted:()=>w,label:()=>d,marks:()=>s,restrictToMarks:()=>A,scale:()=>M,startPoint:()=>E,step:()=>m,stylesApi:()=>C,thumbChildren:()=>j,thumbSize:()=>v,vertical:()=>W});e.s(["SliderDemos",0,I],501655)},39167,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),a="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),n="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),l=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function o(e,t,a){var r,n;return"m"===a?t?"минута":"минуту":e+" "+(r=+e,n=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[a].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var i=function(e,r){return l.test(r)?t[e.month()]:a[e.month()]};i.s=a,i.f=t;var s=function(e,t){return l.test(t)?r[e.month()]:n[e.month()]};s.s=n,s.f=r;var u={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(u,null,!0),u}(e.r(494834))},111018,e=>{"use strict";var t=e.i(191788),a=e.i(391398),r=e.i(883364),n=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let l,o,i,s,u,d,c;return{usage:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${l} value={value} onChange={setValue} />;
}
`),component:()=>{let[r,n]=(0,t.useState)(null);return(0,a.jsx)(e,{value:r,onChange:n})}},range:{type:"code",centered:!0,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${o} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[r,n]=(0,t.useState)([null,null]);return(0,a.jsx)(e,{type:"range",value:r,onChange:n})}},multiple:{type:"code",centered:!0,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${i} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[r,n]=(0,t.useState)([]);return(0,a.jsx)(e,{type:"multiple",value:r,onChange:n})}},deselect:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${s} allowDeselect value={value} onChange={setValue} />;
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
`),component:()=>{let[n,l]=(0,t.useState)([null,null]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{type:"range",numberOfColumns:2,value:n,onChange:l,visibleFrom:"sm"}),(0,a.jsx)(r.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${c} } from '@mantine/dates';

function Demo() {
  return <${c} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,a.jsx)(e,{defaultValue:(0,n.default)().format("YYYY-MM-DD"),...t})}}}],111018)},271706,e=>{"use strict";var t=e.i(648863),a=e.i(111018),r=e.i(191788),n=e.i(391398),l=e.i(777141),o=e.i(494834);let i={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)([null,null]),[a,i]=(0,r.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,n.jsx)(l.DatePicker,{date:a,onDateChange:i,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&i(e=>(0,o.default)(e).add(1,"month").format("YYYY-MM-DD")),t(e)}})},code:`
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
`},s=e=>{let t=(0,o.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},u=e=>{let t=(0,o.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},d=e=>{let t=(0,o.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},c={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,n.jsx)(l.DatePicker,{value:e,onChange:t,defaultDate:"2021-08-01",getDayProps:s,getYearControlProps:u,getMonthControlProps:d})},code:`
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
`},m={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,n.jsx)(l.DatePicker,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},p={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,n.jsx)(l.DatePicker,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:`
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
`},f={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`};e.i(39167);let h={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`};var v=e.i(725695);let x={type:"code",component:function(){return(0,n.jsxs)(v.Group,{justify:"center",children:[(0,n.jsx)(l.DatePicker,{maxLevel:"year"}),(0,n.jsx)(l.DatePicker,{maxLevel:"month"})]})},code:`
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
`},g={type:"code",centered:!0,component:function(){let[e,t]=(0,r.useState)(null);return(0,n.jsx)(l.DatePicker,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-10",maxDate:"2022-02-25"})},code:`
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
`},b={type:"code",component:function(){return(0,n.jsxs)(v.Group,{justify:"center",children:[(0,n.jsx)(l.DatePicker,{defaultLevel:"decade"}),(0,n.jsx)(l.DatePicker,{defaultLevel:"year"})]})},code:`
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
`},y={type:"code",component:function(){return(0,n.jsxs)(v.Group,{justify:"center",children:[(0,n.jsx)(l.DatePicker,{firstDayOfWeek:0}),(0,n.jsx)(l.DatePicker,{firstDayOfWeek:6})]})},code:`
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
`},D={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{weekendDays:[1,2]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`};var j=e.i(393353);let k=e=>{let t=(0,o.default)(e).date();return(0,n.jsx)(j.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,n.jsx)("div",{children:t})})},S={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{renderDay:k})},code:`
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
`},M={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{hideWeekdays:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`},w={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{hideOutsideDates:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`},Y={type:"code",component:function(){return(0,n.jsx)(l.DatePicker,{excludeDate:e=>5!==new Date(e).getDay()})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => new Date(date).getDay() !== 5} />;
}
`,centered:!0},V={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`},C={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{presets:[{value:(0,o.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,o.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,o.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,o.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,o.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,o.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,o.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
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
`},P={type:"code",centered:!0,component:function(){let e=(0,o.default)();return(0,n.jsx)(l.DatePicker,{type:"range",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
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
`,defaultExpanded:!1},_={type:"code",centered:!0,component:function(){return(0,n.jsx)(l.DatePicker,{defaultDate:"2022-02-01",headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}}})},code:`
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
`},T={type:"code",centered:!0,maxWidth:600,component:function(){let[e,t]=(0,r.useState)(null);return(0,n.jsx)(l.DatePicker,{fullWidth:!0,value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker fullWidth value={value} onChange={setValue} />;
}
`};var R=(0,t.__exportAll)({controlProps:()=>c,controlledDate:()=>i,defaultDate:()=>m,defaultLevel:()=>b,deselect:()=>O,excludeDate:()=>Y,firstDayOfWeek:()=>y,fullWidth:()=>T,headerControlsOrder:()=>_,hideOutsideDates:()=>w,hideWeekdays:()=>M,labelFormat:()=>p,listFormat:()=>f,locale:()=>h,maxLevel:()=>x,minMax:()=>g,multiple:()=>$,numberOfColumns:()=>F,presets:()=>C,presetsRange:()=>P,range:()=>A,renderDay:()=>S,singleRange:()=>z,sizeConfigurator:()=>W,usage:()=>L,weekendDays:()=>D,withWeekNumbers:()=>V});let{usage:L,multiple:$,deselect:O,range:A,singleRange:z,numberOfColumns:F,sizeConfigurator:W}=(0,a.getSharedPickerDemos)(l.DatePicker);e.s(["DatePickerDemos",0,R],271706)},676078,e=>{"use strict";var t=e.i(648863),a=e.i(485108),r=e.i(391398),n=e.i(545614),l=e.i(200140);let o={type:"code",component:function(){return(0,r.jsx)(a.Button,{...(0,n.useLongPress)(()=>l.notifications.show({message:"Long press triggered"})),children:"Press and hold"})},code:`
import { Button } from '@mantine/core';
import { useLongPress } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

function Demo() {
  const handlers = useLongPress(() => notifications.show({ message: 'Long press triggered' }));
  return <Button {...handlers}>Press and hold</Button>;
}
`,centered:!0};var i=(0,t.__exportAll)({usage:()=>o});e.s(["UseLongPressDemos",0,i],676078)},448276,e=>{"use strict";var t=e.i(648863),a=e.i(328940),r=e.i(391398);let n={type:"configurator",component:function(e){return(0,r.jsx)(a.RangeSlider,{defaultValue:[20,60],marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
import { RangeSlider } from '@mantine/core';


function Demo() {
  return (
    <RangeSlider
      {{props}}
      defaultValue={[20, 60]}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]},l={type:"code",component:function(){return(0,r.jsx)(a.RangeSlider,{min:0,max:1,minRange:.2,step:5e-4,defaultValue:[.2,.8]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
`,centered:!0,maxWidth:340},o={type:"code",component:function(){return(0,r.jsx)(a.RangeSlider,{defaultValue:[20,60],disabled:!0})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider defaultValue={[20, 60]} disabled />;
}
`,centered:!0,maxWidth:340},i={type:"code",component:function(){return(0,r.jsx)(a.RangeSlider,{domain:[0,100],min:10,max:90,defaultValue:[25,75],mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={[25, 75]}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
`,maxWidth:400,centered:!0},s={type:"code",component:function(){return(0,r.jsx)(a.RangeSlider,{inverted:!0,defaultValue:[20,60]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
}
`,centered:!0,maxWidth:400};var u=e.i(883364);let d={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Text,{size:"sm",children:"No label"}),(0,r.jsx)(a.RangeSlider,{defaultValue:[20,60],label:null}),(0,r.jsx)(u.Text,{size:"sm",mt:"xl",children:"Formatted label"}),(0,r.jsx)(a.RangeSlider,{defaultValue:[20,60],label:e=>`${e} \xb0C`}),(0,r.jsx)(u.Text,{size:"sm",mt:"xl",children:"Label always visible"}),(0,r.jsx)(a.RangeSlider,{defaultValue:[20,60],labelAlwaysOn:!0}),(0,r.jsx)(u.Text,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,r.jsx)(a.RangeSlider,{defaultValue:[20,60],labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`import { RangeSlider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <RangeSlider defaultValue={[20, 60]} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <RangeSlider defaultValue={[20, 60]} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <RangeSlider defaultValue={[20, 60]} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <RangeSlider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},c={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.RangeSlider,{defaultValue:[20,60],marks:[{value:10},{value:40},{value:95}],mb:32}),(0,r.jsx)(a.RangeSlider,{mb:32,defaultValue:[20,60],marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <RangeSlider
        defaultValue={[20, 60]}
        marks={[{ value: 10 }, { value: 40 }, { value: 95 }]}
        mb={32}
      />

      <RangeSlider
        mb={32}
        defaultValue={[20, 60]}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var m=e.i(191788);let p={type:"code",component:function(){let[e,t]=(0,m.useState)([20,80]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Text,{size:"sm",mb:"xs",children:"Maximum range: 50 (selection cannot be wider than 50 units)"}),(0,r.jsx)(a.RangeSlider,{value:e,onChange:t,maxRange:50}),(0,r.jsxs)(u.Text,{size:"sm",mt:"xs",children:["Value: [",e[0],", ",e[1],"] - Range: ",e[1]-e[0]]})]})},code:`
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);

  return (
    <>
      <Text size="sm" mb="xs">
        Maximum range: 50 (selection cannot be wider than 50 units)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        maxRange={50}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
`},f={type:"code",component:function(){let[e,t]=(0,m.useState)([30,60]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Text,{size:"sm",mb:"xs",children:"Minimum range: 20 (thumbs must be at least 20 units apart)"}),(0,r.jsx)(a.RangeSlider,{value:e,onChange:t,minRange:20}),(0,r.jsxs)(u.Text,{size:"sm",mt:"xs",children:["Value: [",e[0],", ",e[1],"] - Range: ",e[1]-e[0]]})]})},code:`
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([30, 60]);

  return (
    <>
      <Text size="sm" mb="xs">
        Minimum range: 20 (thumbs must be at least 20 units apart)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        minRange={20}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
`},h={type:"code",component:function(){return(0,r.jsx)(a.RangeSlider,{pushOnOverlap:!1,defaultValue:[25,65],minRange:20})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
`},v={type:"code",component:function(){return(0,r.jsx)(a.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      restrictToMarks
      defaultValue={[5, 15]}
      marks={[
        { value: 5 },
        { value: 15 },
        { value: 25 },
        { value: 35 },
        { value: 70 },
        { value: 80 },
        { value: 90 },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400},x=[{value:0},{value:25},{value:50},{value:75},{value:100}],g={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Text,{children:"Decimal step"}),(0,r.jsx)(a.RangeSlider,{minRange:2,defaultValue:[0,10],min:-10,max:10,step:.1}),(0,r.jsx)(u.Text,{mt:"md",children:"Step matched with marks"}),(0,r.jsx)(a.RangeSlider,{defaultValue:[50,75],step:25,marks:x})]})},code:`
import { RangeSlider, Text } from '@mantine/core';

const marks = [{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <RangeSlider minRange={2} defaultValue={[0, 10]} min={-10} max={10} step={0.1} />

      <Text mt="md">Step matched with marks</Text>
      <RangeSlider defaultValue={[50, 75]} step={25} marks={marks} />
    </>
  );
}
`,centered:!0,maxWidth:400};var b=e.i(232471);let y={type:"code",component:function(){let[e,t]=(0,m.useState)([25,75]);return(0,r.jsxs)(b.Box,{pb:"md",children:[(0,r.jsxs)(u.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: [",e[0],", ",e[1],"]"]}),(0,r.jsx)(a.RangeSlider,{value:e,onChange:t,min:0,max:100,step:1,minRange:10,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:20,hidden:!0},{value:40,hidden:!0},{value:50,label:"50%"},{value:60,hidden:!0},{value:80,hidden:!0},{value:100,label:"100%"}]})]})},code:`
import { RangeSlider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([25, 75]);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: [{value[0]}, {value[1]}]
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        minRange={10}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 20, hidden: true },
          { value: 40, hidden: true },
          { value: 50, label: '50%' },
          { value: 60, hidden: true },
          { value: 80, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
`};var D=(0,t.__exportAll)({configurator:()=>n,decimal:()=>l,disabled:()=>o,domain:()=>i,hiddenMarks:()=>y,inverted:()=>s,label:()=>d,marks:()=>c,maxRange:()=>p,minRange:()=>f,pushOnOverlap:()=>h,restrictToMarks:()=>v,step:()=>g});e.s(["RangeSliderDemos",0,D],448276)},180872,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(113997),n=e.i(271706),l=e.i(448276),o=e.i(501655),i=e.i(462419),s=e.i(676078);e.i(603441);var u=e.i(62558);e.i(457450);var d=e.i(418026);let c=(0,u.Layout)(d.MDX_DATA.Changelog810);function m(e){let u={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:d,SponsorButton:c,Video:m}=u;return d||p("Demo",!0),c||p("SponsorButton",!0),m||p("Video",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(u.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(u.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(u.h2,{id:"datepicker-presets",children:"DatePicker presets"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/dates/date-picker",children:"DatePicker"}),", ",(0,t.jsx)(u.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),"\nand ",(0,t.jsx)(u.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," now support ",(0,t.jsx)(u.code,{children:"presets"})," prop\nthat allows you to add custom date presets. Presets are displayed next to the calendar:"]}),"\n",(0,t.jsx)(d,{data:n.DatePickerDemos.presetsRange}),"\n",(0,t.jsx)(u.h2,{id:"calendar-headercontrolsorder",children:"Calendar headerControlsOrder"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/dates/calendar",children:"Calendar"})," and other components based on it now support ",(0,t.jsx)(u.code,{children:"headerControlsOrder"})," prop.\nYou can use ",(0,t.jsx)(u.code,{children:"headerControlsOrder"})," prop to change the order of header controls. The prop accepts an array of\n",(0,t.jsx)(u.code,{children:"'next' | 'previous' | 'level'"}),". Note that each control can be used only once in the array."]}),"\n",(0,t.jsx)(d,{data:n.DatePickerDemos.headerControlsOrder}),"\n",(0,t.jsx)(u.h2,{id:"popover-middlewares-improvements",children:"Popover middlewares improvements"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/popover",children:"Popover"})," component now handles ",(0,t.jsx)(u.code,{children:"shift"})," and ",(0,t.jsx)(u.code,{children:"flip"})," Floating UI\ndifferently. Starting from 8.1.0 version, the popover dropdown position is not\nchanged when the popover is opened. ",(0,t.jsx)(u.code,{children:"shift"})," and ",(0,t.jsx)(u.code,{children:"flip"})," middlewares are used only\nonce to calculate the initial position of the dropdown."]}),"\n",(0,t.jsxs)(u.p,{children:["This change fixes incorrect flipping/shifting behavior when there is dynamic content\nin the dropdown. For example, searchable ",(0,t.jsx)(u.a,{href:"/core/select",children:"Select"})," and ",(0,t.jsx)(u.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),"\nwithout ",(0,t.jsx)(u.code,{children:"consistentWeeks"})," option."]}),"\n",(0,t.jsx)(u.p,{children:"Previous behavior:"}),"\n",(0,t.jsx)(m,{src:"/assets/8-1-0-popover-previous-behavior.mp4"}),"\n",(0,t.jsx)(u.p,{children:"New behavior:"}),"\n",(0,t.jsx)(m,{src:"/assets/8-1-0-popover-new-behavior.mp4"}),"\n",(0,t.jsx)(u.h2,{id:"use-long-press-hook",children:"use-long-press hook"}),"\n",(0,t.jsxs)(u.p,{children:["New ",(0,t.jsx)(u.a,{href:"/hooks/use-long-press",children:"use-long-press"})," hook:"]}),"\n",(0,t.jsx)(d,{data:s.UseLongPressDemos.usage}),"\n",(0,t.jsx)(u.h2,{id:"reference-area-support-in-charts",children:"Reference area support in charts"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/charts/bar-chart",children:"BarChart"}),", ",(0,t.jsx)(u.a,{href:"/charts/area-chart",children:"AreaChart"})," and ",(0,t.jsx)(u.a,{href:"/charts/line-chart",children:"LineChart"}),"\ncomponents now support reference area. Reference area is a rectangular area\nthat can be used to highlight a specific region of the chart:"]}),"\n",(0,t.jsx)(d,{data:r.BarChartDemos.referenceArea}),"\n",(0,t.jsx)(u.h2,{id:"use-form-resetfield-handler",children:"use-form resetField handler"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/form/use-form",children:"use-form"})," now has a ",(0,t.jsx)(u.code,{children:"resetField"})," method that resets field value to its initial value:"]}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form'\n\nconst form  = useForm({ initialValues: { name: 'John Doe' } });\n\nform.resetField('name'); // resets name field to 'John Doe'\n"})}),"\n",(0,t.jsx)(u.h2,{id:"tagsinput-isduplicate-prop",children:"TagsInput isDuplicate prop"}),"\n",(0,t.jsxs)(u.p,{children:["You can now use ",(0,t.jsx)(u.code,{children:"isDuplicate"})," prop in ",(0,t.jsx)(u.a,{href:"/core/tags-input",children:"TagsInput"})," component\nto control how duplicates are detected. It is a function that receives two arguments:\ntag value and current tags. The function must return ",(0,t.jsx)(u.code,{children:"true"})," if the value is duplicate."]}),"\n",(0,t.jsxs)(u.p,{children:["Example of using ",(0,t.jsx)(u.code,{children:"isDuplicate"})," to allow using the same value with different casing:"]}),"\n",(0,t.jsx)(d,{data:i.TagsInputDemos.isDuplicate}),"\n",(0,t.jsx)(u.h2,{id:"slider-domain-prop",children:"Slider domain prop"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,t.jsx)(u.code,{children:"domain"})," prop that allows\nsetting the possible range of values independently of the ",(0,t.jsx)(u.code,{children:"min"})," and ",(0,t.jsx)(u.code,{children:"max"})," values:"]}),"\n",(0,t.jsx)(d,{data:o.SliderDemos.domain}),"\n",(0,t.jsx)(u.h2,{id:"rangeslider-pushonoverlap-prop",children:"RangeSlider pushOnOverlap prop"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/range-slider",children:"RangeSlider"})," component now supports ",(0,t.jsx)(u.code,{children:"pushOnOverlap"})," prop that defines\nwhether the slider should push the overlapping thumb when the user drags it."]}),"\n",(0,t.jsx)(d,{data:l.RangeSliderDemos.pushOnOverlap}),"\n",(0,t.jsx)(u.h2,{id:"hooks-types-exports",children:"Hooks types exports"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.code,{children:"@mantine/hooks"})," package now exports all types used in hooks options and return values.\nFor example, you can now import ",(0,t.jsx)(u.a,{href:"/hooks/use-uncontrolled",children:"use-uncontrolled"})," types like this:"]}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"import type { UseUncontrolledOptions, UseUncontrolledReturnValue } from '@mantine/hooks';\n"})}),"\n",(0,t.jsx)(u.p,{children:"Types exported from the library:"}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"interface UseUncontrolledOptions<T> {\n  /** Value for controlled state */\n  value?: T;\n\n  /** Initial value for uncontrolled state */\n  defaultValue?: T;\n\n  /** Final value for uncontrolled state when value and defaultValue are not provided */\n  finalValue?: T;\n\n  /** Controlled state onChange handler */\n  onChange?: (value: T) => void;\n}\n\ntype UseUncontrolledReturnValue<T> = [\n  /** Current value */\n  T,\n\n  /** Handler to update the state, passes `value` and `payload` to `onChange` */\n  (value: T, ...payload: any[]) => void,\n\n  /** True if the state is controlled, false if uncontrolled */\n  boolean,\n];\n"})}),"\n",(0,t.jsx)(u.h2,{id:"zod-v4-with-use-form",children:"zod v4 with use-form"}),"\n",(0,t.jsxs)(u.p,{children:["You can now use zod v4 with ",(0,t.jsx)(u.a,{href:"/form/use-form",children:"use-form"}),". To use zod 4:"]}),"\n",(0,t.jsxs)(u.ul,{children:["\n",(0,t.jsxs)(u.li,{children:["Update ",(0,t.jsx)(u.code,{children:"mantine-form-zod-resolver"})," to ",(0,t.jsx)(u.code,{children:"1.2.1"})," or later version"]}),"\n",(0,t.jsxs)(u.li,{children:["Update zod to version ",(0,t.jsx)(u.code,{children:"3.25.0"})," or later"]}),"\n",(0,t.jsxs)(u.li,{children:["Replace ",(0,t.jsx)(u.code,{children:"zod"})," imports with ",(0,t.jsx)(u.code,{children:"zod/v4"})," (only if you have ",(0,t.jsx)(u.code,{children:"zod@3"})," in your ",(0,t.jsx)(u.code,{children:"package.json"}),")"]}),"\n",(0,t.jsxs)(u.li,{children:["Replace ",(0,t.jsx)(u.code,{children:"zodResolver"})," with ",(0,t.jsx)(u.code,{children:"zod4Resolver"})," in your code"]}),"\n",(0,t.jsx)(u.li,{children:"All other code remains the same"}),"\n"]}),"\n",(0,t.jsx)(u.p,{children:"Example with zod v4:"}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"import { z } from 'zod/v4';\nimport { zod4Resolver } from 'mantine-form-zod-resolver';\n\nconst schema = z.object({\n  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),\n  email: z.email({ message: 'Invalid email' }),\n  age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),\n});\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n    age: 16,\n  },\n  validate: zod4Resolver(schema),\n})\n"})}),"\n",(0,t.jsx)(u.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(u.ul,{children:["\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/hooks/use-debounced-callback",children:"use-debounced-callback"})," documentation was updated to include new ",(0,t.jsx)(u.code,{children:"flush"})," and ",(0,t.jsx)(u.code,{children:"flushOnUnmount"})," features"]}),"\n",(0,t.jsx)(u.li,{children:"Documentation about exported types was added to all applicable hooks"}),"\n"]}),"\n",(0,t.jsx)(u.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(u.ul,{children:["\n",(0,t.jsxs)(u.li,{children:["All components now support ",(0,t.jsx)(u.code,{children:"bdrs"})," style prop to set border radius."]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," now supports ",(0,t.jsx)(u.code,{children:"defaultTimeValue"})," prop"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/core/tooltip",children:"Tooltip"})," now supports ",(0,t.jsx)(u.code,{children:"autoContrast"})," prop."]}),"\n",(0,t.jsxs)(u.li,{children:["Handlers returned from ",(0,t.jsx)(u.a,{href:"/hooks/use-counter",children:"use-counter"})," are now memoized."]}),"\n",(0,t.jsxs)(u.li,{children:["Return value of ",(0,t.jsx)(u.a,{href:"/hooks/use-event-listener",children:"use-event-listener"}),", ",(0,t.jsx)(u.a,{href:"/hooks/use-focus-within",children:"use-focus-within"}),", ",(0,t.jsx)(u.a,{href:"/hooks/use-focus-trap",children:"use-focus-trap"}),", ",(0,t.jsx)(u.a,{href:"/hooks/use-hover",children:"use-hover"}),", ",(0,t.jsx)(u.a,{href:"/hooks/use-move",children:"use-move"}),", ",(0,t.jsx)(u.a,{href:"/hooks/use-radial-move",children:"use-radial-move"})," changed (",(0,t.jsx)(u.code,{children:"React.RefObject"})," -> ",(0,t.jsx)(u.code,{children:"React.RefCallback"}),"), required to fix incorrect ref handling in several cases. For more information, see the issue on GitHub – ",(0,t.jsx)(u.a,{href:"https://github.com/mantinedev/mantine/issues/7406",children:"#7406"}),"."]}),"\n",(0,t.jsxs)(u.li,{children:["Deprecated ",(0,t.jsx)(u.code,{children:"React.MutableRefObject"})," type was replaced with ",(0,t.jsx)(u.code,{children:"React.RefObject"})," in all packages to better support React 19 types."]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.code,{children:"positionDependencies"})," prop is now deprecated in ",(0,t.jsx)(u.a,{href:"/core/tooltip",children:"Tooltip"}),", ",(0,t.jsx)(u.a,{href:"/core/popover",children:"Popover"})," and other components based on Popover. The prop is no longer required and can be safely removed. ",(0,t.jsx)(u.code,{children:"positionDependencies"})," prop will be removed in 9.0 release."]}),"\n"]})]})}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(c,{...e,children:(0,t.jsx)(m,{...e})})}])},776677,(e,t,a)=>{let r="/changelog/8-1-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(180872)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);